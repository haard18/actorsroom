"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";
import InquiryForm from "./InquiryForm";
import { AnimatePresence, motion } from "motion/react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Events",
      link: "#events",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Socials",
      link: "#socials",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);

  return (
    <div
      className="relative w-full px-4 md:px-8 py-4"
      style={{ fontFamily: "Made-Mirage-Bold" }}
    >
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="primary"
              onClick={() => setIsInquiryFormOpen(true)}
            >
              Book a call
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative  text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsInquiryFormOpen(true);
                }}
                variant="primary"
                className="w-full"
                style={{ fontFamily: "Made-Mirage-Bold" }}
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Inquiry Form Overlay */}
      <AnimatePresence>
        {isInquiryFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg"
          >
            <div className="relative bg-neutral-900 rounded-xl shadow-lg p-6 max-w-2xl w-[80%]">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setIsInquiryFormOpen(false)}
              >
                Close
              </button>
              <InquiryForm />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
