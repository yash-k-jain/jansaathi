import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI API (Store API key securely in environment variables)
const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY });

export async function GET(req: Request) {
  try {
    // Extract query parameters
    const { searchParams } = new URL(req.url);
    const age = searchParams.get("age");
    const annualIncome = searchParams.get("annualIncome");
    const occupation = searchParams.get("occupation");

    // Validate input
    if (!age || !annualIncome || !occupation) {
      return NextResponse.json(
        { error: "Missing required parameters: age, annualIncome, occupation" },
        { status: 400 }
      );
    }

    // Construct prompt for AI
    const prompt = `
    Act as an AI assistant providing structured JSON data for Indian government schemes.
    Given the following user details:

    - Age: ${age}
    - Annual Income: ₹${annualIncome}
    - Occupation: ${occupation}

    Return exactly **3 most relevant** government schemes in a **valid JSON format**.

    Each scheme should be an object with the following keys:
  {
    "title": "Scheme Name",
    "slug": "scheme-name",
    "description": "Brief description of the scheme",
    "category": "Scheme category",
    "age": "Eligible age range",
    "premium_price_details": "Financial details (cost, benefits, subsidies, etc.)",
    "eligibility": "Who can apply?",
    "url": "Official government website link"
  }

    Respond **only with valid JSON**. **Do not include markdown formatting** (e.g., no triple backticks).
`;

    // Call OpenAI API
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: prompt }],
      temperature: 0.7,
    });

    // Extract AI response
    const jsonResponse = gptResponse.choices[0]?.message?.content || "[]";

    // Send response
    return NextResponse.json(JSON.parse(jsonResponse));
  } catch (error) {
    console.error("Error fetching schemes:", error);
    return NextResponse.json(
      { error: "Failed to fetch schemes" },
      { status: 500 }
    );
  }
}
