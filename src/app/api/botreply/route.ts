import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const schema = z.object({
  message: z.string().min(3).max(255),
  api: z.string().min(10),
  email: z.string().email(),
});

export async function POST(req: NextRequest, res: NextResponse) {
  const apiKey = req.headers.get("apiKey");
  if (!apiKey) {
    return NextResponse.json({ success: false, error: "Invalid API Key" });
  }
  const data = await req.json();

  // Validate the input data
  const { error } = schema.safeParse(data);

 if (error) {
    return NextResponse.json({
      success: false,
      error: error.errors,
    });
  }
    

  

  try {
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
