import { HomeHero } from "@/components/home/HomeHero";
import { AboutGhana } from "@/components/home/AboutGhana";
import { FeaturedGames } from "@/components/home/FeaturedGames";
import { Preserving } from "@/components/home/Preserving";
import { Gallery } from "@/components/home/Gallery";
import { Communities } from "@/components/home/Communities";
import { Feedback } from "@/components/home/Feedback";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutGhana />
      <FeaturedGames />
      <Preserving />
      <Gallery />
      <Communities />
      <Feedback />
      <CallToAction />
    </>
  );
}
