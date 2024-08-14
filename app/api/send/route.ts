import { Resend } from "resend";
import EmailTemplate from "../../_components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: ["eazwebcreates@gmail.com"],
      subject: subject,
      react: EmailTemplate({ name, phone, message, email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
