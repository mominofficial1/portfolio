import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  subject: z.string().min(2).max(120),
  message: z.string().min(10).max(3000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    console.log("[contact] new message", {
      name: data.name,
      email: data.email,
      subject: data.subject,
    });
    return { ok: true as const, receivedAt: new Date().toISOString() };
  });