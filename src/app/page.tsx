import { NavbarDemo } from "@/app/components/Navbar";
import { Hero } from "./components/Hero";
import { EventCard } from "./components/EventCard";
import { AnimatedTestimonialsDemo } from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
// import { Navbar } from "./src/app/components/ui/resizable-navbar";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <EventCard />
      <div className="flex flex-col items-center justify-center w-full mt-10 bg-gradient-to-b from-black to-gray-700">
        <AnimatedTestimonialsDemo />
        <hr className="border-t border-gray-600 my-8 w-screen " />
        <InquiryForm />
      </div>
    </>
  );
}
