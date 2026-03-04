import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import VideoGrid from "@/components/VideoGrid";
import ReelsMarquee from "@/components/ReelsMarquee";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <VideoGrid />
      <ReelsMarquee />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
