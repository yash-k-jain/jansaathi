import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export interface Scheme {
  title: string;
  description: string;
  category: string;
  age?: string;
  premium?: string;
  eligibility: string;
  slug: string;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY, // Load API key from .env.local
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get("query")?.toLowerCase() || "";

    const query = `Act as an AI assistant providing structured JSON data for Indian government schemes.

    When given an input query ${searchQuery} (which could be a category, title, or keyword from the description), search for relevant schemes and return them in a structured JSON format.

    Ensure the response contains only valid JSON with no extra text. Each scheme should be represented as an object with the following keys:

    "title": The name of the scheme.
    "slug": A URL-friendly version of the title (all lowercase, spaces replaced with hyphens).
    "description": A brief description of the scheme.
    "category": The category the scheme belongs to.
    "age": The age group eligible for the scheme.
    "premium_price_details": The financial details (cost, subsidies, etc.).
    "eligibility": The criteria required to apply for the scheme.
    "url": The official URL for more details.
`;

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

    let schemes: Scheme[];
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
