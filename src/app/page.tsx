import { NavbarDemo } from "@/app/components/Navbar";
import { Hero } from "./components/Hero";
import { EventCard } from "./components/EventCard";
import { AnimatedTestimonialsDemo } from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <main className="flex flex-col items-center justify-center w-full overflow-hidden">
        <Hero />

        <section id="events" className="w-full max-w-7xl px-4 md:px-8 mt-16">
          <EventCard />
        </section>

        <section
          id="testimonials"
          className="w-full bg-gradient-to-b from-black to-neutral-900 mt-20 py-16"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <AnimatedTestimonialsDemo />
            <hr className="border-t border-neutral-700 my-12 w-full" />
            <InquiryForm />
          </div>
        </section>

        {/* Cram Logo Section */}
        <section className="w-full flex flex-col justify-center items-center py-10 bg-black">
          <div className="flex flex-col items-center">
            <p
              className="font-bold  tracking-tighter text-amber-400 text-center"
              style={{ fontFamily: "arial" }}
            >
              Managed By
            </p>
            <a
              href="https://instagram.com/cramstone.media"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/images/cram.png"
                alt="Cram Logo"
                width={200}
                height={200}
                className="w-50 h-50 rounded-full shadow-xl mx-auto"
              />
            </a>
          </div>
        </section>
      </main>

      <section id="socials">
        <Footer />
      </section>
    </>
  );
}
