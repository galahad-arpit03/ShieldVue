"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Users,
  CheckCircle,
  MessageSquare
} from "lucide-react";

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section
      id="demo-form"
      className="relative overflow-hidden bg-slate-50 py-10 md:py-16 md:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)] bg-[length:36px_36px]" />

      {/* Vibrant Background Orbs for Glassmorphism */}
      {/* <div className="absolute left-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" /> */}
      {/* <div className="absolute right-[5%] top-[40%] h-[600px] w-[600px] rounded-full bg-purple-500/15 blur-[120px]" /> */}
      {/* <div className="absolute left-[40%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-[100px]" /> */}

      <div className="shield-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-6 h-fit"
          >
            <h2 className="mt-8 text-2xl md:text-4xl md:text-5xl font-medium tracking-[-0.46px] leading-[1.1] text-slate-900 font-['Clash_Grotesk']">
              See <span className="text-primary">ShieldVUE</span>
              <br />
              In Action
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 lg:max-w-[85%]">
              Discover how leading enterprises gain complete visibility into
              software components, vulnerabilities, cryptographic assets and
              compliance posture.
            </p>

            <div className="mt-8 lg:max-w-[85%]">
              <div className="relative overflow-hidden border border-primary/30 bg-white/20 backdrop-blur-2xl rounded-lg p-8 shadow-[0_8px_32px_0_rgba(104,67,183,0.1)]">
                {/* Internal highlight for premium glass feel */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />
                <div className="relative z-10">
                  <h4 className="font-bold text-slate-900 text-lg mb-6">Contact Information</h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Corporate Office</h5>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        Apmosys Technologies,<br />
                        Mahape, Navi Mumbai
                      </p>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Addresses</h5>
                      <p className="text-sm">
                        <a href="mailto:sales@apmosys.com" className="text-primary font-medium hover:underline">sales@apmosys.com</a>
                        <span className="text-slate-400 mx-2">|</span>
                        <a href="mailto:presales@apmosys.com" className="text-primary font-medium hover:underline">presales@apmosys.com</a>
                      </p>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Pre-Sales Phone</h5>
                      <p className="text-sm text-slate-900 font-medium">
                        +91 89768 19122
                      </p>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Support Phone</h5>
                      <p className="text-sm text-slate-900 font-medium">
                        +91-22-4122 2250 / 2251
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-white/20 backdrop-blur-2xl border border-primary/30 p-8 md:p-12 rounded-lg lg:w-[115%] lg:-ml-[15%]"
          >
            {/* Internal highlight for premium glass feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none" />
            <div className="relative z-10">
              <div className="transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  {/* <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center font-bold">1</div> */}
                  <h3 className="text-xl font-bold text-slate-900">Send Us A Message</h3>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-8 bg-[#FAFAFA] border border-slate-100 rounded-md min-h-[400px]"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-md flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                    <p className="text-slate-600 mb-6">
                      Thank you, <span className="font-semibold">{formData.name}</span>. We have received your inquiry.
                    </p>
                    <p className="text-sm text-slate-500">
                      Our team will get back to you at <span className="font-medium text-slate-700">{formData.email}</span> within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", company: "", designation: "", email: "", phone: "", industry: "", message: "" });
                      }}
                      className="mt-8 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);

                      const form = e.target as HTMLFormElement;
                      const honey = (form.elements.namedItem('_honey') as HTMLInputElement).value;

                      try {
                        const res = await fetch('/api/contact-us', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ ...formData, contactType: "general", _honey: honey }),
                        });

                        if (res.ok) {
                          setIsSubmitted(true);
                        } else {
                          alert("Failed to submit demo request. Please try again.");
                        }
                      } catch (error) {
                        alert("An error occurred. Please try again later.");
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                  >
                    <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Name</label>
                        <input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Company</label>
                        <input
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Designation</label>
                        <input
                          required
                          value={formData.designation}
                          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Industry</label>
                        <input
                          required
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Work Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Phone</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all resize-none placeholder:text-slate-400"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 bg-primary text-white rounded-md py-4 font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full border-b border-slate-200" />
    </section>
  );
}
