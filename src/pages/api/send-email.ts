import type { APIRoute } from "astro";
import { sendEmail } from "../../lib/email.ts";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const {
      name,
      email,
      projectName,
      deadline,
      budget,
      projectType,
      features,
      description,
    } = data;

    if (
      !name ||
      !email ||
      !projectName ||
      !deadline ||
      !budget ||
      !projectType ||
      !description
    ) {
      return new Response("Missing required fields", { status: 400 });
    }

    await sendEmail({
      name,
      email,
      projectName,
      deadline,
      budget,
      projectType,
      features,
      description,
    });

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send email", { status: 500 });
  }
};
