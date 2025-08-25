"use client";
import { useState } from "react";
import { Instagram, Twitter, Facebook, Youtube, Linkedin } from "lucide-react"; // ✅ import icons from lucide-react

type LinkItem = { label: string; href: string };

const LIST_ONE: LinkItem[] = [
  { label: "New Arrivals", href: "#" },
  { label: "Best Sellers", href: "#" },
  { label: "Gift Cards", href: "#" },
  { label: "Care Guide", href: "#" },
];

const LIST_TWO: LinkItem[] = [
  { label: "About Us", href: "#" },
  { label: "Workshops", href: "#" },
  { label: "Wholesale", href: "#" },
  { label: "Press", href: "#" },
];

export default function TobaccoFooter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  const FooterList = ({
    title,
    items,
  }: {
    title: string;
    items: LinkItem[];
  }) => (
    <div className="ml-0 md:ml-8">
      <h4 className="text-lg font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2 text-amber-100/80">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="hover:text-amber-300 transition inline-flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600/70" />
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  const SocialIcon = ({
    label,
    href,
    icon,
  }: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }) => {
    return (
      <a
        aria-label={label}
        href={href}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#241b16] text-amber-200 border border-amber-900/40 hover:text-amber-50 hover:border-amber-600/60 hover:bg-[#2f231d] transition cursor-pointer"
      >
        {icon}
      </a>
    );
  };

  return (
    <footer className="relative overflow-hidden">

      <section className="relative w-full bg-[#2b211c] text-amber-50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-xl overflow-hidden ring-1 ring-amber-600/30 bg-amber-600/20 flex items-center justify-center">
                  <span className="text-amber-400 font-bold">B</span>
                </div>
                <span className="text-xl font-semibold tracking-wide">
                  Buford Workshop
                </span>
              </div>

              <p className="text-amber-100/80 leading-relaxed">
                Small-batch boards and barware from reclaimed bourbon
                barrels—finished by hand to age with character.
              </p>

              <div className="flex items-center gap-3">
                <SocialIcon
                  label="Instagram"
                  href="#"
                  icon={<Instagram size={18} />}
                />
                <SocialIcon
                  label="Twitter"
                  href="#"
                  icon={<Twitter size={18} />}
                />
                <SocialIcon
                  label="Facebook"
                  href="#"
                  icon={<Facebook size={18} />}
                />
                <SocialIcon
                  label="YouTube"
                  href="#"
                  icon={<Youtube size={18} />}
                />
                <SocialIcon
                  label="LinkedIn"
                  href="#"
                  icon={<Linkedin size={18} />}
                />
              </div>
            </div>

            <FooterList title="Shop" items={LIST_ONE} />
            <FooterList title="Company" items={LIST_TWO} />

            <div>
              <div className="rounded-3xl border border-amber-900/30 bg-[#3a2b24]/60 backdrop-blur-sm p-6 shadow-[0_20px_60px_-30px_rgba(245,158,11,0.25)]">
                <h3 className="text-lg font-bold">Stay in the Barrel Loop</h3>
                <p className="mt-1 text-sm text-amber-100/80">
                  New drops, limited runs—occasional emails, always useful.
                </p>

                <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-xl px-4 bg-[#241b16] text-amber-50 placeholder:text-amber-50/50 border border-amber-900/40 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-amber-600 text-amber-50 font-semibold border border-amber-700/40 cursor-pointer shadow-[0_12px_20px_-10px_rgba(245,158,11,0.5)] hover:bg-amber-500 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-amber-900/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-amber-100/80">
              © {new Date().getFullYear()} Buford Workshop. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-amber-300 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-amber-300 transition">
                Terms
              </a>
              <a href="#" className="hover:text-amber-300 transition">
                Returns
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
