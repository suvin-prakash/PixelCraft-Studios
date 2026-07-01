"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <section
      id="contact"
      className="bg-white py-24 dark:bg-[#2F4850]"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        {/* Contact Info */}

        <div>

          <p className="font-semibold text-[#876E7D]">
            CONTACT US
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Have a project in mind? We'd love to hear from you.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex gap-4">
              <MapPin />
              <span>Chennai, Tamil Nadu</span>
            </div>

            <div className="flex gap-4">
              <Phone />
              <span>+91 9876543210</span>
            </div>

            <div className="flex gap-4">
              <Mail />
              <span>hello@pixelcraft.com</span>
            </div>

          </div>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-3xl bg-slate-50 p-8 shadow-lg dark:bg-[#677987]"
        >

          <input
            {...register("name")}
            placeholder="Your Name"
            className="w-full rounded-xl border p-4"
          />

          <p className="text-sm text-red-500">
            {errors.name?.message}
          </p>

          <input
            {...register("email")}
            placeholder="Email Address"
            className="w-full rounded-xl border p-4"
          />

          <p className="text-sm text-red-500">
            {errors.email?.message}
          </p>

          <textarea
            rows={5}
            {...register("message")}
            placeholder="Write your message..."
            className="w-full rounded-xl border p-4"
          />

          <p className="text-sm text-red-500">
            {errors.message?.message}
          </p>

          <button className="w-full rounded-xl bg-[#876E7D] py-4 font-semibold text-white transition hover:bg-[#877E8D]">
            Send Message
          </button>

          {isSubmitSuccessful && (
            <p className="text-white-600">
              Message sent successfully!
            </p>
          )}

        </form>

      </div>
    </section>
  );
}