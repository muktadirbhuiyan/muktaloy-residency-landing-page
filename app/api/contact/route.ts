import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { message: "Please complete all fields before submitting." },
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 900));

    return NextResponse.json(
      { message: "Thanks! Your inquiry was received. Our team will contact you shortly." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ message: "Invalid request data." }, { status: 400 });
  }
}
