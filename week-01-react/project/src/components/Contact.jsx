import { useState } from "react";

import { FolderCode, Sparkles, Users } from "lucide-react";

import SectionBadge from "./SectionBadge.jsx";

const initialFormData = { name: "", email: "", message: "" };

const defaultFeedbackMessage = "Please fill all required fields.";

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(defaultFeedbackMessage);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(function (previousData) {
      return {
        ...previousData,
        [name]: value
      };
    });

    setFeedbackMessage(defaultFeedbackMessage);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid()) {
      return;
    }

    setIsSending(true);
    setFeedbackMessage("Sending message...");

    await new Promise(function (resolve) {
      setTimeout(resolve, 1500);
    });

    setIsSending(false);
    setFeedbackMessage("Your message has been sent successfully.");
    setFormData(initialFormData);

    setTimeout(function () {
      setFeedbackMessage(defaultFeedbackMessage);
    }, 9000);
  }

  function isNameValid() {
    return formData.name.trim().length >= 2;
  }

  function isEmailValid() {
    return formData.email.includes("@") && formData.email.includes(".");
  }

  function isMessageValid() {
    return formData.message.trim().length >= 10;
  }

  function isFormValid() {
    return isNameValid() && isEmailValid() && isMessageValid();
  }

  function getFieldClass(isValid) {
    let fieldClass = "px-4 py-2 text-sm text-slate-50 placeholder:text-slate-500 rounded-md border border-slate-800 focus:outline-none bg-black shadow-xl shadow-slate-950/40 transition";

    if (isValid) {
      fieldClass += " focus:border-violet-500";
    } else {
      fieldClass += " focus:border-red-500";
    }

    return fieldClass;
  }

  function getButtonText() {
    if (isSending) {
      return "Sending...";
    }

    return "Send message";
  }

  function getButtonClass() {
    let buttonClass = "w-full px-4 py-2 font-semibold text-slate-50 rounded-md shadow-lg shadow-violet-500/40 transition";

    if (isFormValid() && !isSending) {
      buttonClass += " bg-violet-500 hover:bg-violet-600 cursor-pointer";
    }

    if (!isFormValid() || isSending) {
      buttonClass += " bg-violet-500 opacity-60 cursor-not-allowed";
    }

    return buttonClass;
  }

  return (
    <section id="contact-section" className="relative py-24 flex flex-col justify-center items-center border-b border-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(168,85,247,0.35),transparent_32%),radial-gradient(circle_at_85%_60%,rgba(59,130,246,0.25),transparent_28%),linear-gradient(135deg,#1e1238_0%,#0f172a_45%,#020617_100%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30"></div>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(2,6,23,0.45)_75%)]"></div>

      <div className="relative w-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-8 text-center">
        <SectionBadge>Start your AI journey</SectionBadge>

        <h2 className="max-w-4xl text-5xl md:text-7xl font-black tracking-tight leading-none">
          Ready to Explore

          <span className="block text-violet-300">
            Agentic AI?
          </span>
        </h2>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a className="px-4 py-2 font-semibold rounded-md bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/30" href="https://www.holbertonschool.fr/rejoindre-lhippocamp" target="_blank" rel="noopener noreferrer">
            Enroll at Holberton School →
          </a>

          <a className="px-4 py-2 font-semibold rounded-md border border-slate-800 bg-slate-950 hover:bg-slate-900 shadow-lg shadow-slate-950/40" href="https://www.holbertonschool.fr/admission" target="_blank" rel="noopener noreferrer">
            Need more information?
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
          <span className="flex justify-center items-center gap-2">
            <FolderCode className="w-4 h-4 text-violet-500" />
            Project-based learning
          </span>

          <span className="flex justify-center items-center gap-2">
            <Users className="w-4 h-4 text-violet-500" />
            Peer learning environment
          </span>

          <span className="flex justify-center items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-500" />
            AI-powered workflows
          </span>
        </div>

        <form className="w-full max-w-2xl mt-8 p-8 flex flex-col justify-center items-center gap-8 text-start rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur shadow-2xl shadow-slate-950/40" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col gap-2">
            <label className="ms-4 text-sm font-semibold" htmlFor="name">
              Full name
            </label>

            <input id="name" className={getFieldClass(isNameValid())} name="name" type="text" placeholder="Your full name..." value={formData.name} onChange={handleChange} autoComplete="off" required />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="ms-4 text-sm font-semibold" htmlFor="email">
              Email
            </label>

            <input id="email" className={getFieldClass(isEmailValid())} name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} autoComplete="off" required />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="ms-4 text-sm font-semibold" htmlFor="message">
              Message
            </label>

            <textarea id="message" className={`${getFieldClass(isMessageValid())} min-h-32 resize-none`} name="message" placeholder="Tell us about your project or learning goals!" value={formData.message} onChange={handleChange} autoComplete="off" required></textarea>
          </div>

          <button className={getButtonClass()} type="submit" disabled={!isFormValid() || isSending}>
            {getButtonText()}
          </button>

          <p className="min-h-5 text-sm text-slate-500 transition">
            {feedbackMessage}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;