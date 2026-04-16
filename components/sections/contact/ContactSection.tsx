   

"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const inputClass =
  "w-full border-[0.89px] border-[#C4C4C4] bg-[#FBFDFE] rounded-[7.11px] px-3.5 py-2.25 text-[0.75rem] md:text-[0.888125rem] leading-4 md:leading-[21.32px] placeholder:text-gray-400 focus:outline-none focus:border-primary";

const labelClass =
  "text-[0.8rem] md:text-[1rem] leading-4 md:leading-[21.32px] mb-1.75 block";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    const toastId = toast.loading("Sending message...");

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("EMAILJS RESULT:", result);

      toast.success("Message sent successfully!", { id: toastId });
      formRef.current.reset();
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      toast.error("Failed to send message. Try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-12 sm:px-18 md:px-24 lg:px-27.5 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-30.5 items-start">
        
        {/* Left — form card */}
        <div className="bg-[#F4F8FB] p-10.5 flex flex-col gap-5">
          <h2 className="text-[1.4rem] md:text-[1.77625rem] leading-6 md:leading-[35.53px] font-semibold mb-8.5">
            Get in Touch with Us
          </h2>

          {/* FORM */}
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5.25">

            <div>
              <label htmlFor="name" className={labelClass}>
                Name <span className="text-red-500">*</span>
              </label>
              <input
                 id="fullName"
                 name="fullName"
                type="text"
                placeholder="Your name"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@company.com"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+11 000 000 000"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                 id="description"
                 name="description"
                placeholder="Leave us a Message"
                rows={6}
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-light text-white text-[0.75rem] md:text-[0.875rem] border rounded-[7.11px] px-3 py-[14.5px]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right — contact info */}
         <div className="flex flex-col divide-y-[0.89px] divide-[#B9C2CB]">
           {/* WhatsApp */}
           <div className="pb-6">
             <h3 className="text-[0.95rem] md:text-[1.11125rem] leading-5 md:leading-[24.89px] mb-0.75">
               Chat to Support
             </h3>
             <p className="text-[0.8rem] md:text-[1rem] leading-4 md:leading-[21.32px] mb-3.5">
               Chat to our staff 24/7 for instant access to support
             </p>
             <Link
              href="https://wa.me/2347067324474"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.75rem] md:text-[0.888125rem] leading-4 md:leading-[21.32px] font-semibold mb-3.5 hover:text-primary transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#25D366"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat With Us
             </Link>
           </div>

           {/* Phone */}
           <div className="py-6">
             <h3 className="text-[0.95rem] md:text-[1.11125rem] leading-5 md:leading-[24.89px] mb-0.75">
               Call Us
             </h3>
             <p className="text-[0.75rem] md:text-[0.888125rem] leading-4 md:leading-[21.32px] mb-3.5">
               Monday - Friday, 9:00 AM - 6:00 PM
            </p>
             <Link
              href="tel:+2347067324474"
              className="block text-[0.75rem] md:text-[0.888125rem] leading-4 md:leading-[21.32px] font-semibold mb-3.5 hover:text-primary transition-colors"
            >
              +234 706 732 4474
            </Link>
            <Link
              href="tel:+2348148964949"
              className="block text-[0.75rem] md:text-[0.888125rem] leading-4 md:leading-[21.32px] font-semibold mb-3.5 hover:text-primary transition-colors"
            >
              +234 814 896 4949
            </Link>
          </div>

          {/* Email */}
          <div className="py-6">
            <h3 className="text-[0.95rem] md:text-[1.11125rem] leading-5 md:leading-[24.89px] mb-0.75">
              Email Support
            </h3>
            <p className="text-[0.75rem] md:text-[0.888125rem] leading-4 md:leading-[21.32px] mb-3.5">
              Email us & we will get back to you within 24 hours
            </p>
            <Link
              href="mailto:support@nerstagric.com"
              className="text-[0.75rem] md:text-[0.888125rem] leading-4 md:leading-[21.32px] font-semibold mb-3.5 hover:text-primary transition-colors"
            >
              support@nerstagric.com
            </Link>
          </div>

           {/* Address */}
          <div className="py-6">
             <h3 className="text-[0.95rem] md:text-[1.11125rem] leading-5 md:leading-[24.89px] mb-0.75">
               Ibadan, Nigeria.
             </h3>
             <p className="text-text-muted text-sm mb-1text-[0.75rem] md:text-[0.888125rem] leading-4 md:leading-[21.32px] mb-3.5">
               Visit our office Monday - Friday, 9:00 AM - 5:00 PM
             </p>
             <p className="text-[0.75rem] md:text-[0.888125rem] leading-4 md:leading-[21.32px] font-semibold">
               Top Floor, VIP section, FoodCity Building, Opposite Wema Bank, Bus
               stop/Gate, Ibadan.
             </p>
           </div>

           {/* Social */}
          <div className="pt-6">
             <p className="text-[0.95rem] md:text-[1.11125rem] leading-5 md:leading-[24.89px] mb-2.75">
               Social Media as @nerstagric
             </p>
             <div className="flex items-center gap-3">
               <Link
                href="https://x.com/nerstagric"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NerstAgric on X"
                className="hover:opacity-70 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </Link>
               <Link
                href="https://facebook.com/nerstagric"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NerstAgric on Facebook"
                className="hover:opacity-70 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#1877F2"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
               </Link>
                 <Link
                href="https://instagram.com/nerstagric"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NerstAgric on Instagram"
                className="hover:opacity-70 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="url(#ig)"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
               <Link
                href="https://youtube.com/@nerstagric"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NerstAgric on YouTube"
                className="hover:opacity-70 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#FF0000"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com/company/nerstagric"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NerstAgric on LinkedIn"
                className="hover:opacity-70 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#0A66C2"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};