"use client";

import { useState } from "react";
import { m } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Users,
  CheckCircle,
  MessageSquare,
  Mail,
  Send,
  Shield,
  Clock,
  Headphones,
  MapPin,
  Phone
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
      className="relative overflow-hidden bg-slate-100 py-12 md:py-20"
    >
      <div className="shield-container relative z-10">
        <div className="w-full flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden relative">
          
          {/* LEFT SIDE (Purple Background) */}
          <div className="lg:w-[45%] bg-primary p-8 lg:p-10 text-white relative flex flex-col justify-between">
            {/* Abstract Background Elements inside Purple */}
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:24px_24px]" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-60" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl text-white font-medium tracking-tight leading-tight font-['Clash_Grotesk'] mb-4">
                See ShieldVUE <br />
                In Action
              </h2>

              <p className="text-white/80 leading-relaxed mb-8 lg:max-w-[90%] text-lg">
                Discover how leading enterprises gain complete visibility into software components, vulnerabilities, cryptographic assets and compliance posture.
              </p>

              <div className="space-y-4">
                <div className="bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-md shadow-lg shadow-black/10">
                  <h4 className="font-bold text-white text-lg mb-4">Contact Information</h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> Corporate Office
                      </h5>
                      <p className="text-sm text-white font-medium leading-relaxed">
                        Apmosys Technologies,<br />
                        Mahape, Navi Mumbai
                      </p>
                    </div>

                    <div>
                      <h5 className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" /> Email Addresses
                      </h5>
                      <p className="text-sm text-white font-medium">
                        sales@apmosys.com
                        <span className="text-white/30 mx-2">|</span>
                        presales@apmosys.com
                      </p>
                    </div>

                    <div>
                      <h5 className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" /> Pre-Sales Phone
                      </h5>
                      <p className="text-sm text-white font-medium">
                        +91 89768 19122
                      </p>
                    </div>

                    <div>
                      <h5 className="text-[10px] font-bold text-white/70 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Headphones className="w-3.5 h-3.5" /> Support Phone
                      </h5>
                      <p className="text-sm text-white font-medium">
                        +91-22-4122 2250 / 2251
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORM CARD (White with rounded left corners overlapping purple) */}
          <div
            className="lg:w-[55%] bg-white lg:rounded-l-2xl p-6 lg:p-10 relative z-10 shadow-[-15px_0_40px_rgba(0,0,0,0.15)] flex flex-col justify-center"
          >
            <div className="relative z-10">
              <div className="transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Send Us A Message</h3>
                    <p className="text-sm text-slate-500 mt-1">Fill in the details below and our team will get back to you.</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <m.div
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
                  </m.div>
                ) : (
                  <form
                    className="space-y-3"
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

                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Name <span className="text-red-500">*</span></label>
                        <input
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Company <span className="text-red-500">*</span></label>
                        <input
                          required
                          placeholder="Enter your company name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Designation <span className="text-red-500">*</span></label>
                        <input
                          required
                          placeholder="Enter your designation"
                          value={formData.designation}
                          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Industry <span className="text-red-500">*</span></label>
                        <select
                          required
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all text-slate-700"
                        >
                          <option value="" disabled hidden>Select your industry</option>
                          <option value="Technology">Technology</option>
                          <option value="Finance">Finance</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Retail">Retail</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Work Email <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          required
                          placeholder="Enter your work email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Phone <span className="text-red-500">*</span></label>
                        <input
                          type="tel"
                          required
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Message <span className="text-red-500">*</span></label>
                      <textarea
                        required
                        rows={2}
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/40 backdrop-blur-sm text-sm border border-primary/20 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/60 transition-all resize-none placeholder:text-slate-400"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 flex items-center justify-center gap-2 bg-primary text-white rounded-md py-3 font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </button>

                    <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-4 md:border-r border-primary/10 pb-4 md:pb-0 md:pr-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900 mb-1">Quick Response</h5>
                          <p className="text-[11px] text-slate-500 leading-snug">We typically reply within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 md:border-r border-primary/10 pb-4 md:pb-0 md:px-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Shield className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900 mb-1">Secure & Private</h5>
                          <p className="text-[11px] text-slate-500 leading-snug">Your information is safe with us</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 md:pl-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Headphones className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900 mb-1">Expert Support</h5>
                          <p className="text-[11px] text-slate-500 leading-snug">Our experts are here to help</p>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full border-b border-slate-200" />
    </section>
  );
}
