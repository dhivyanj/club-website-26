"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "01", label: "ABOUT", href: "/about", color: "text-cyan-400" },
  { id: "02", label: "EVENTS", href: "/events", color: "text-green-400" },
  { id: "03", label: "TEAM", href: "/team", color: "text-yellow-400" },
  { id: "04", label: "CONTACT", href: "/contact", color: "text-red-400" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black/80 backdrop-blur-md border-b border-white/10 font-mono">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-white font-semibold tracking-wide">
          IEEE CS
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden px-6 py-4 flex flex-col gap-6 bg-black border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-white tracking-widest"
            >
              <span className={`text-sm ${item.color}`}>
                {item.id}/
              </span>
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      {/* Desktop Header */}
      <nav className="hidden md:flex max-w-7xl ml-auto justify-end gap-8 py-6 pr-10">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-center gap-1 text-white font-semibold tracking-widest hover:opacity-80 transition"
          >
            <span className={`text-sm ${item.color}`}>
              {item.id}/
            </span>
            <span className="text-base">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
