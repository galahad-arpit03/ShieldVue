"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ShieldCheck,
  Clock3,
  Users,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

export default function DemoForm() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedContact, setSelectedContact] = useState<
    "sales" | "presales" | null
  >(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    time: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const isPrevMonthDisabled =
    (currentDate.getFullYear() === today.getFullYear() &&
      currentDate.getMonth() <= today.getMonth()) ||
    currentDate.getFullYear() < today.getFullYear();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
    setSelectedDate(null);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <section
      id="demo-form"
      className="relative overflow-hidden bg-slate-50 py-32"
    >
      {/* Background Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[radial-gradient(circle_at_center,#6843b7_1px,transparent_1px)]
          bg-[length:36px_36px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[600px]
          w-[600px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-md

          bg-primary/5

          blur-[160px]
        "
      />

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
            {/* <div
              className="
                inline-flex
                items-center
                rounded-md

                border
                border-primary/20

                bg-primary/5

                px-4
                py-2

                text-sm
                font-medium

                text-primary
              "
            >
              Book Your Personalized Demo
            </div> */}

            <h2
              className="
                mt-8

                text-4xl
                md:text-5xl

                font-medium

                tracking-[-0.46px]
                leading-[1.1]

                text-slate-900

                font-['Clash_Grotesk']
              "
            >
              See <span className="text-primary">ShieldVUE</span>
              <br />
              In Action
            </h2>

            <p
              className="
                mt-6

                text-lg
                leading-8

                text-slate-600
                lg:max-w-[85%]
              "
            >
              Discover how leading enterprises gain complete visibility into
              software components, vulnerabilities, cryptographic assets and
              compliance posture.
            </p>

            <div className="mt-12 space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Live Platform Walkthrough",
                },
                {
                  icon: Users,
                  title: "Tailored To Your Use Case",
                },
                {
                  icon: Clock3,
                  title: "30 Minute Expert Session",
                },
                {
                  icon: Calendar,
                  title: "Response Within 24 Hours",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-md

                      bg-white

                      border
                      border-slate-200

                      shadow-sm
                    "
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>

                  <span
                    className="
                      font-medium
                      text-slate-700
                    "
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white p-8 md:p-12 rounded-md shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:w-[115%] lg:-ml-[15%]"
          >
            {/* Top Contact Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {/* Card 1 */}
              <div
                onClick={() =>
                  setSelectedContact(
                    selectedContact === "sales" ? null : "sales",
                  )
                }
                className={`cursor-pointer transition-all border rounded-md p-6 relative ${selectedContact === "sales" ? "border-primary bg-primary/5" : "border-slate-200 bg-white hover:border-primary/30"}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-slate-900">Contact Sales</h4>
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border ${selectedContact === "sales" ? "bg-primary border-primary" : "bg-white border-slate-300"}`}
                  >
                    {selectedContact === "sales" && (
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>
                </div>
                <div className="text-sm text-slate-500 mb-1">
                  Email:{" "}
                  <a
                    href="mailto:sales@apmosys.com"
                    className="text-primary font-medium"
                  >
                    sales@apmosys.com
                  </a>
                </div>
                <div className="text-sm text-slate-500 mb-6">
                  Phone:{" "}
                  <span className="text-slate-900 font-medium">
                    +91-22-4122 2250 / 2251
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold tracking-wide text-primary bg-primary/10 px-2 py-1 rounded">
                    #EnterpriseLicense
                  </span>
                  <span className="text-[10px] font-bold tracking-wide text-primary bg-primary/10 px-2 py-1 rounded">
                    #Quotation
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div
                onClick={() =>
                  setSelectedContact(
                    selectedContact === "presales" ? null : "presales",
                  )
                }
                className={`cursor-pointer transition-all border rounded-md p-6 relative ${selectedContact === "presales" ? "border-primary bg-primary/5" : "border-slate-200 bg-white hover:border-primary/30"}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-slate-900">
                    Contact Pre-Sales Team
                  </h4>
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border ${selectedContact === "presales" ? "bg-primary border-primary" : "bg-white border-slate-300"}`}
                  >
                    {selectedContact === "presales" && (
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>
                </div>
                <div className="text-sm text-slate-500 mb-1">
                  Email:{" "}
                  <a
                    href="mailto:presales@apmosys.com"
                    className="text-primary font-medium"
                  >
                    presales@apmosys.com
                  </a>
                </div>
                <div className="text-sm text-slate-500 mb-6">
                  Phone:{" "}
                  <span className="text-slate-900 font-medium">
                    +91 89768 19122
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold tracking-wide text-primary bg-primary/10 px-2 py-1 rounded">
                    #FeaturedOverview
                  </span>
                  <span className="text-[10px] font-bold tracking-wide text-primary bg-primary/10 px-2 py-1 rounded">
                    #TechnicalQnA
                  </span>
                </div>
              </div>
            </div>

            {/* Form Grid */}
            <div className="relative">
              {!selectedContact && (
                <div className="absolute inset-0 z-20 flex items-center justify-center backdrop-blur-[2px] rounded-md -m-4 bg-primary/10">
                  <div className="bg-primary px-6 py-4 rounded-md shadow-xl border border-slate-100 font-semibold text-white pointer-events-auto shadow-slate-200/50">
                    Please select a contact option above to proceed
                  </div>
                </div>
              )}

              <div
                className={`grid md:grid-cols-2 gap-12 transition-all duration-300 ${!selectedContact ? "opacity-30 pointer-events-none blur-[4px] select-none" : "opacity-100"}`}
              >
                {/* Left Column: Calendar */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Select a Date
                    </h3>
                  </div>
                  {/* Calendar Mockup */}
                  <div className="px-2">
                    <div className="flex justify-between items-center mb-6">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        disabled={isPrevMonthDisabled}
                        className={
                          isPrevMonthDisabled
                            ? "opacity-30 cursor-not-allowed"
                            : ""
                        }
                      >
                        <ChevronLeft className="w-4 h-4 text-slate-400 hover:text-slate-900 transition-colors" />
                      </button>
                      <div className="font-bold text-slate-900 text-sm tracking-widest uppercase">
                        {monthNames[currentDate.getMonth()]}{" "}
                        {currentDate.getFullYear()}
                      </div>
                      <button type="button" onClick={handleNextMonth}>
                        <ChevronRight className="w-4 h-4 text-slate-600 hover:text-slate-900 transition-colors" />
                      </button>
                    </div>
                    <div className="grid grid-cols-7 text-center gap-y-4 text-sm">
                      {/* Days Header */}
                      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                        <div
                          key={`${d}-${i}`}
                          className="text-slate-400 text-xs font-bold mb-2"
                        >
                          {d}
                        </div>
                      ))}

                      {/* Empty initial days */}
                      {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}

                      {/* Month Days */}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const isSelected = selectedDate === day;
                        const thisDate = new Date(
                          currentDate.getFullYear(),
                          currentDate.getMonth(),
                          day,
                        );
                        const isPast = thisDate < today;

                        return (
                          <button
                            key={day}
                            type="button"
                            disabled={isPast}
                            onClick={() => setSelectedDate(day)}
                            className={`
                            w-8 h-8 mx-auto rounded-md flex items-center justify-center font-medium transition-colors
                            ${
                              isPast
                                ? "text-slate-300 cursor-not-allowed"
                                : isSelected
                                  ? "bg-primary text-white font-bold shadow-lg shadow-primary/30"
                                  : "text-slate-600 hover:bg-slate-100"
                            }
                          `}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Your Details
                    </h3>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center p-8 bg-[#FAFAFA] border border-slate-100 rounded-md h-[400px]"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-md flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        Booking Confirmed!
                      </h4>
                      <p className="text-slate-600 mb-6">
                        Thank you,{" "}
                        <span className="font-semibold">
                          {formData.firstName}
                        </span>
                        . Your demo is scheduled for{" "}
                        <span className="font-semibold text-slate-900">
                          {monthNames[currentDate.getMonth()]} {selectedDate},{" "}
                          {currentDate.getFullYear()}
                        </span>{" "}
                        at{" "}
                        <span className="font-semibold text-slate-900">
                          {formData.time}
                        </span>
                        .
                      </p>
                      <p className="text-sm text-slate-500">
                        We've sent a calendar invitation to{" "}
                        <span className="font-medium text-slate-700">
                          {formData.email}
                        </span>
                        .
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setSelectedDate(null);
                          setFormData({
                            firstName: "",
                            lastName: "",
                            email: "",
                            time: "",
                          });
                        }}
                        className="mt-8 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                      >
                        Book Another Demo
                      </button>
                    </motion.div>
                  ) : (
                    <form
                      className="space-y-6"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        if (!selectedDate) {
                          alert("Please select a date from the calendar first.");
                          return;
                        }
                        if (!formData.time) {
                          alert("Please select a meeting time.");
                          return;
                        }
                        
                        setIsSubmitting(true);
                        
                        const form = e.target as HTMLFormElement;
                        const honey = (form.elements.namedItem('_honey') as HTMLInputElement).value;
                        
                        const formattedDate = new Date(
                          currentDate.getFullYear(),
                          currentDate.getMonth(),
                          selectedDate
                        ).toLocaleDateString();

                        try {
                          const res = await fetch('/api/book-demo', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                              ...formData,
                              date: formattedDate,
                              contactType: selectedContact,
                              _honey: honey
                            }),
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
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">
                            First Name
                          </label>
                          <input
                            required
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                firstName: e.target.value,
                              })
                            }
                            className="w-full bg-[#FAFAFA] text-sm border border-slate-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">
                            Last Name
                          </label>
                          <input
                            required
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                lastName: e.target.value,
                              })
                            }
                            className="w-full bg-[#FAFAFA] text-sm border border-slate-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-[#FAFAFA] text-sm border border-slate-200 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">
                          Meeting Time
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={formData.time}
                            onChange={(e) =>
                              setFormData({ ...formData, time: e.target.value })
                            }
                            className="w-full bg-[#FAFAFA] text-sm border border-slate-200 rounded-md px-4 py-3 outline-none text-slate-600 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all appearance-none pr-10"
                          >
                            <option value="">Select a slot</option>
                            <option value="10:00 AM - 10:30 AM">
                              10:00 AM - 10:30 AM
                            </option>
                            <option value="11:00 AM - 11:30 AM">
                              11:00 AM - 11:30 AM
                            </option>
                            <option value="01:00 PM - 01:30 PM">
                              01:00 PM - 01:30 PM
                            </option>
                            <option value="03:00 PM - 03:30 PM">
                              03:00 PM - 03:30 PM
                            </option>
                            <option value="04:00 PM - 04:30 PM">
                              04:00 PM - 04:30 PM
                            </option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={!selectedDate || !formData.time || isSubmitting}
                        className="w-full mt-4 bg-primary text-white rounded-md py-4 font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Confirming..." : "Confirm Booking"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full border-b border-slate-200" />
    </section>
  );
}
