import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Contact form received:", body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
    console.log("WEB3FORMS_KEY exists:", !!WEB3FORMS_KEY);

    if (!WEB3FORMS_KEY) {
      console.error("WEB3FORMS_ACCESS_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Portfolio Contact: ${name}`,
        from_name: name,
        replyto: email,
        name,
        email,
        message,
      }),
    });

    const text = await response.text();
    console.log("Web3Forms raw response:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Failed to parse Web3Forms response as JSON");
      return NextResponse.json(
        { error: "Unexpected response from email service" },
        { status: 500 }
      );
    }

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Web3Forms error:", data);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
