"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "../Logo";
import { Plus, ArrowUpRight } from "../ui/Icons";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Our Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`flex items-center gap-2.5 text-[15.75px] text-white tracking-[0.2em] group hover:text-accent ${
        isActive ? "font-semibold uppercase" : "font-light"
      }`}
    >
      <span className="group-hover:scale-110">
        {isActive ? <Plus /> : <ArrowUpRight />}
      </span>
      {label}
    </Link>
  );
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white">
      <nav className="bg-black/48 w-full px-8 sm:px-14 md:px-20 lg:px-26.25 py-6.25">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo link={true} className="w-40 md:w-48 lg:w-53" />

          <div className="hidden md:grid md:grid-cols-3 md:gap-x-12 lg:gap-x-16 md:gap-y-5">
            {links.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>

          {/* Hamburger button — visible on mobile only */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            {/* hamburger lines */}
            <span className="block w-6 h-0.5 bg-white mb-1.5" />
            <span className="block w-6 h-0.5 bg-white mb-1.5" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 flex flex-col px-8 py-6.25 gap-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end p-2"
            aria-label="Close menu"
          >
            <span className="block w-6 h-6 relative">
              <span className="absolute inset-0 w-full h-0.5 bg-white top-1/2 rotate-45" />
              <span className="absolute inset-0 w-full h-0.5 bg-white top-1/2 -rotate-45" />
            </span>
          </button>

          {/* Nav links — stacked vertically */}
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
