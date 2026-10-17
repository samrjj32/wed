import CurtainIntro from "@/components/CurtainIntro"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import CountdownSection from "@/components/CountdownSection"
import OurStory from "@/components/OurStory"
import VenueSection from "@/components/VenueSection"
import ScheduleSection from "@/components/ScheduleSection"
import DresscodeSection from "@/components/DresscodeSection"
import TransportSection from "@/components/TransportSection"
import MenuSection from "@/components/MenuSection"
import GiftsSection from "@/components/GiftsSection"
import RSVPSection from "@/components/RSVPSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <CurtainIntro />
      <Navigation />
      <main>
        <HeroSection />
        <CountdownSection />
        <OurStory />
        <VenueSection />
        <ScheduleSection />
        <DresscodeSection />
        <TransportSection />
        <MenuSection />
        <GiftsSection />
        <RSVPSection />
      </main>
      <Footer />
    </>
  )
}
