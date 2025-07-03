import { AnimatedTestimonials } from "./ui/animated-tesmionials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I really admire his way of teaching. He has a good amount of knowledge and it really helps you to think hard and bring the best in you.Actor’s room is the space that every aspiring actor should visit so I would definitely recommend the Actor’s room to all the acting students.",
      name: "Riya Sharma",
      designation: "Student",
      src: "https://i.ibb.co/gM8f2Dy9/riya-sharma-testimonial.png",
    },
    {
      quote: `I feel truly fortunate to have learned from Harshal Pawar — a dedicated teacher and exceptional actor. His approach, rooted in techniques like Chekhov, Meisner, Stella Adler, and Indian Natyashastra, made each session a deep dive into the craft. What truly sets him apart is his personal investment in each student’s growth, offering tailored feedback and ensuring no one is left behind. His recorded class performances helped us track progress, and his thoughtful assignments pushed us to grow.`,

      name: "Lipika",
      designation: "Student",
      src: "https://i.ibb.co/fbp4bHL/lipika-testimonial.png",
    },
    {
      quote:
        "We’ve worked with many creators but rarely seen the kind of genuine and raw response that students have towards Harshal and The Actor’s Room. There’s real trust here. People don’t just come to learn acting, they come to grow.",
      name: "Soham Pawar",
      designation: "Founder- Cramstone Media",
      src: "https://i.ibb.co/pBNdT4fK/soham-pawar-testimonial.png",
    },
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
