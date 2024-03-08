import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MeetOurInstructor from "@/components/MeetOurInstructor";
import Testimonials from "@/components/Testimonials";
import UpcomingWebinar from "@/components/UpcomingWebinar";

const Home = () => {
  return (
    <main className="min-h-screen bg-black/10 text-center">
      <HeroSection />
      <FeaturedSection />
      <Testimonials />
      <UpcomingWebinar />
      <MeetOurInstructor />
      <Footer />
    </main>
  );
};

export default Home;
