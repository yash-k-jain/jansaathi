import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY, // Load API key from .env.local
});

export async function GET(req: NextRequest) {
  try {
    const query = `Provide a list of at least 12 popular and useful government schemes in a structured JSON format. Each scheme should be an object with the following keys:

    title: The name of the scheme
    slug: A URL-friendly identifier generated based on the title
    description: A brief overview of the scheme
    category: The sector it belongs to (e.g., Financial Inclusion, Health, Insurance, Business & Startup, Agriculture, Education, Women Empowerment, etc.)
    age: The eligible age range for the scheme
    premium_price_details: Information about any costs, premiums, or financial assistance provided
    url: The official website or source link for more details
    eligibility: The criteria required to avail the scheme
    Ensure the response is purely JSON without any additional text or explanations. Do not include any markdown formatting.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an assistant helping users find government schemes.",
        },
        { role: "user", content: query },
      ],
      temperature: 0.7,
    });

    let content = response.choices[0].message.content;

    // Extract JSON part from Markdown block (if present)
    const jsonMatch = content!.match(/```json\n([\s\S]*?)\n```/);
    if (jsonMatch) {
      content = jsonMatch[1]; // Extract only the JSON part
    }

    let schemes;
    try {
      schemes = JSON.parse(content!); // Parse the extracted JSON
    } catch (parseError) {
      console.error("JSON Parsing Error:", parseError);
      return NextResponse.json(
        { error: "Invalid JSON response from OpenAI" },
        { status: 500 }
      );
    }

    return NextResponse.json({ schemes }, { status: 200 });
  } catch (error: any) {
    console.error("OpenAI Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch AI response" },
      { status: 500 }
    );
  }
}
