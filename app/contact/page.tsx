"use client";

import { motion, type Variants, type Transition } from "framer-motion";
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


const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
const fadeUpTx: Transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f3e9]">
      <section className="relative h-[62vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/tobacco-1.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#2b211c]/70 to-[#2b211c]/85" />

        <div className="relative z-10 h-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ ...fadeUpTx, delay: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-amber-200/90 bg-amber-500/10 ring-1 ring-amber-400/30"
          >
            Handcrafted • Since 1986
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ ...fadeUpTx, delay: 0.12 }}
            className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-amber-200"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ ...fadeUpTx, delay: 0.22 }}
            className="mt-4 max-w-2xl text-amber-100/85 text-lg md:text-xl"
          >
            Questions, custom work, or wholesale? Our team replies within one
            business day.
          </motion.p>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-[#ede3d2]">
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ ...fadeUpTx, delay: 0 }}
            className="lg:col-span-3 rounded-3xl border border-amber-900/30 backdrop-blur-md p-6 md:p-8 shadow-[0_28px_80px_-32px_rgba(245,158,11,0.35)] bg-[#3a2b24]/70"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-50">
              Send Us a Message
            </h2>
            <p className="mt-2 text-amber-100/80">
              New drops, custom engravings, or brand collabs—tell us what you
              have in mind.
            </p>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="h-12 w-full rounded-xl px-4 border border-amber-900/30 bg-[#ede3d2] 
                text-stone-800 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="h-12 w-full rounded-xl px-4 border border-amber-900/30 bg-[#ede3d2] 
                text-stone-800 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="md:col-span-2 h-12 w-full rounded-xl px-4 border border-amber-900/30 bg-[#ede3d2] 
                text-stone-800 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Write your message…"
                className="md:col-span-2 w-full rounded-xl px-4 border border-amber-900/30 bg-[#ede3d2] 
                text-stone-800 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              />
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-amber-600 text-amber-50 font-semibold border border-amber-700/40 shadow-[0_16px_28px_-12px_rgba(245,158,11,0.55)] hover:bg-amber-500 transition"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
          <motion.aside
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ ...fadeUpTx, delay: 0.08 }}
            className="lg:col-span-2 rounded-3xl border border-amber-900/30 backdrop-blur-md p-6 md:p-8 shadow-[0_24px_60px_-28px_rgba(245,158,11,0.28)] bg-[#3a2b24]/80"
          >
            <h3 className="text-xl font-semibold text-amber-50">
              Contact Details
            </h3>
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
                <a href="tel:+18336153133" className="hover:text-amber-300">
                  +1 (833) 615-3133
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <a
                  href="mailto:hello@bufordworkshop.com"
                  className="hover:text-amber-300"
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
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube, Linkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#241b16] text-amber-200 border border-amber-900/40 hover:text-amber-50 hover:border-amber-600/60 hover:bg-[#2f231d] transition"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              )}
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}
