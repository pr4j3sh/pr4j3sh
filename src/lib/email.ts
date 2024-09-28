import ejs from "ejs";
import fs from "fs";
import { createTransport } from "nodemailer";
import type { Transporter } from "nodemailer";

type Email = {
  name: string;
  email: string;
  projectName: string;
  deadline: string;
  budget: string;
  projectType: string;
  features: string[];
  description: string;
};

export async function sendEmail(options: Email): Promise<void> {
  const transporter = await getEmailTransporter();

  const to = "prajesh.eleven118@gmail.com";
  const subject = "New Task";
  const html = await parseEmailTemplate(options);
  const from = "eleven co. <onboarding@resend.dev>";
  const message = { to, subject, html, from };

  try {
    const info = await transporter.sendMail(message);
    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

async function getEmailTransporter(): Promise<Transporter> {
  if (!import.meta.env.RESEND_API_KEY) {
    throw new Error("Missing Resend configuration");
  }

  return createTransport({
    host: "smtp.resend.com",
    secure: true,
    port: 465,
    auth: { user: "resend", pass: import.meta.env.RESEND_API_KEY },
  });
}

async function parseEmailTemplate(params: Email): Promise<string> {
  try {
    const rawTemplate = fs.readFileSync(`./src/template/index.ejs`, "utf8");
    return ejs.render(rawTemplate, params);
  } catch (error) {
    console.error("Error reading email template:", error);
    throw error;
  }
}
