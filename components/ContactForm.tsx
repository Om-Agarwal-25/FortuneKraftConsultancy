"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Query",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    console.log("Form submitted", formData);
    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", res.status);

      const data: { success?: boolean; error?: string } = await res.json();
      console.log("Response data:", data);

      if (!res.ok || data.error) {
        throw new Error(data.error ?? "Unknown error");
      }

      setStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Query",
      message: "",
    });
    setErrors({});
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="bg-white rounded-2xl p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-full flex flex-col relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex-1 flex flex-col items-center justify-center text-center p-8 h-full min-h-[500px]"
          >
            <div className="w-24 h-24 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-6">
              <CheckCircle2
                className="w-12 h-12 text-[#4CAF50]"
                strokeWidth={2.5}
              />
            </div>
            <h3 className="font-display text-4xl text-[#0A1628] font-bold mb-4">
              Message Sent!
            </h3>
            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Thank you for reaching out. A member of our team will get back to
              you within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="text-[#0A1628] font-bold uppercase tracking-widest text-sm hover:text-gold transition-colors border-b-2 border-transparent hover:border-gold pb-1"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col"
          >
            {status === "error" && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium">
                  Something went wrong. Please try again or call us directly.
                </p>
              </div>
            )}

            <div className="mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-[#0A1628] font-bold mb-3">
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-lg">
                Fill in the form below and we&apos;ll get back to you within 24
                hours.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 flex-1"
            >
              {/* Name & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-wider text-[#0A1628]"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className={`w-full bg-[#f8f9fa] border-b-2 ${errors.name ? "border-red-500" : "border-[#0A1628]/20"} focus:border-gold focus:outline-none focus:bg-white px-4 py-3 rounded-t-lg transition-all text-gray-800 disabled:opacity-60`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 font-medium absolute -bottom-5 left-0">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold uppercase tracking-wider text-[#0A1628]"
                  >
                    Phone Number{" "}
                    <span className="text-gray-400 font-normal normal-case tracking-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className={`w-full bg-[#f8f9fa] border-b-2 ${errors.phone ? "border-red-500" : "border-[#0A1628]/20"} focus:border-gold focus:outline-none focus:bg-white px-4 py-3 rounded-t-lg transition-all text-gray-800 disabled:opacity-60`}
                    placeholder="10 digit number"
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-500 font-medium absolute -bottom-5 left-0">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Email & Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-[#0A1628]"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className={`w-full bg-[#f8f9fa] border-b-2 ${errors.email ? "border-red-500" : "border-[#0A1628]/20"} focus:border-gold focus:outline-none focus:bg-white px-4 py-3 rounded-t-lg transition-all text-gray-800 disabled:opacity-60`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-medium absolute -bottom-5 left-0">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="subject"
                    className="text-xs font-bold uppercase tracking-wider text-[#0A1628]"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-[#f8f9fa] border-b-2 border-[#0A1628]/20 focus:border-gold focus:outline-none focus:bg-white px-4 py-3 rounded-t-lg transition-all text-gray-800 disabled:opacity-60 appearance-none cursor-pointer"
                  >
                    <option>General Query</option>
                    <option>Service Inquiry</option>
                    <option>Lodge a Complaint</option>
                    <option>Partnership Opportunity</option>
                    <option>Technical Support</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-[38px] pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-[#0A1628]/60" />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 mt-2 relative flex-1">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-wider text-[#0A1628]"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className={`w-full flex-1 bg-[#f8f9fa] border-b-2 ${errors.message ? "border-red-500" : "border-[#0A1628]/20"} focus:border-gold focus:outline-none focus:bg-white px-4 py-3 rounded-t-lg transition-all text-gray-800 resize-none disabled:opacity-60`}
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <span className="text-xs text-red-500 font-medium absolute -bottom-5 left-0">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                  className="w-full bg-gold hover:bg-gold-light text-[#0A1628] font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
