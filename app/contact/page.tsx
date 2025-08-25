"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";

const THEME = {
  base: "#2b211c",
  card: "#3a2b24",
  input: "#241b16",
};

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const fadeUp = (d = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <main className="min-h-screen bg-[#f7f3e9]">
      <section className="relative h-[62vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/tobacco-1.webp')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_40%,rgba(245,158,11,0.18),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#2b211c]/70 to-[#2b211c]/85" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')",
          }}
        />

        <div className="relative z-10 h-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-amber-200/90 bg-amber-500/10 ring-1 ring-amber-400/30"
          >
            Handcrafted • Since 1986
          </motion.span>
          <motion.h1
            {...fadeUp(0.12)}
            className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-amber-200"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            {...fadeUp(0.22)}
            className="mt-4 max-w-2xl text-amber-100/85 text-lg md:text-xl"
          >
            Questions, custom work, or wholesale? Our team replies within one
            business day.
          </motion.p>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-[#ede3d2]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(245,158,11,0.12),transparent)]" />
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            {...fadeUp(0)}
            className="lg:col-span-3 rounded-3xl border border-amber-900/30 backdrop-blur-md p-6 md:p-8 shadow-[0_28px_80px_-32px_rgba(245,158,11,0.35)]"
            style={{ backgroundColor: `${THEME.card}B3` /* ~70% */ }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-50">
              Send Us a Message
            </h2>
            <p className="mt-2 text-amber-100/80">
              New drops, custom engravings, or brand collabs—tell us what you
              have in mind.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {[
                { id: "name", type: "text", placeholder: "Your Name" },
                { id: "email", type: "email", placeholder: "Your Email" },
              ].map((f) => (
                <div key={f.id}>
                  <label className="sr-only" htmlFor={f.id}>
                    {f.id}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type as any}
                    value={(form as any)[f.id]}
                    onChange={onChange}
                    required
                    className="h-12 w-full rounded-xl px-4 border border-amber-900/30 
                      text-stone-800 placeholder:text-stone-500
                      focus:outline-none focus:ring-2 focus:ring-amber-500/40 bg-[#ede3d2]"
                    placeholder={f.placeholder}
                  />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="sr-only" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  className="h-12 w-full rounded-xl px-4 border border-amber-900/30 
                  text-stone-800 placeholder:text-stone-500
                  focus:outline-none focus:ring-2 focus:ring-amber-500/40 bg-[#ede3d2]"
                  placeholder="Tell us about your project…"
                />
              </div>
              <div className="md:col-span-2">
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={onChange}
                  required
                  className="h-12 w-full rounded-xl px-4 border border-amber-900/30 
                  text-stone-800 placeholder:text-stone-500
                  focus:outline-none focus:ring-2 focus:ring-amber-500/40 bg-[#ede3d2]"
                  placeholder="Write your message…"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-amber-600 text-amber-50 font-semibold border border-amber-700/40 shadow-[0_16px_28px_-12px_rgba(245,158,11,0.55)] hover:bg-amber-500 active:translate-y-[1px] transition cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          <motion.aside
            {...fadeUp(0.08)}
            className="lg:col-span-2 rounded-3xl border border-amber-900/30 backdrop-blur-md p-6 md:p-8 shadow-[0_24px_60px_-28px_rgba(245,158,11,0.28)]"
            style={{ backgroundColor: `${THEME.card}CC` /* ~80% */ }}
          >
            <h3 className="text-xl font-semibold text-amber-50">
              Contact Details
            </h3>
            <p className="mt-2 text-amber-100/75">
              Prefer a quick call or drop-in? Here’s where to find us.
            </p>

            <ul className="mt-6 space-y-4 text-amber-100/85">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 shrink-0" />
                <span>
                  Studio 14, Craft Lane, Walnut District
                  <br />
                  Louisville, KY 40202
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <a
                  href="tel:+18336153133"
                  className="hover:text-amber-300 transition"
                >
                  +1 (833) 615-3133
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <a
                  href="mailto:hello@bufordworkshop.com"
                  className="hover:text-amber-300 transition"
                >
                  hello@bufordworkshop.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-400" />
                <span>Mon–Fri: 10:00–18:00 • Sat: 11:00–15:00</span>
              </li>
            </ul>

            <div className="mt-6 h-px bg-amber-900/30" />
            <div className="mt-6">
              <p className="text-sm text-amber-100/70">Follow the workshop</p>
              <div className="mt-3 flex items-center gap-3">
                {[
                  { Icon: Instagram },
                  { Icon: Twitter },
                  { Icon: Facebook },
                  { Icon: Youtube },
                  { Icon: Linkedin },
                ].map(({ Icon }, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#241b16] text-amber-200 border border-amber-900/40 hover:text-amber-50 hover:border-amber-600/60 hover:bg-[#2f231d] transition cursor-pointer"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}
