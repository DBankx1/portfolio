import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Starfield } from "@/components/effects/starfield";
import { AsteroidCursor } from "@/components/effects/asteroid-cursor";
import { ScrollAltitude } from "@/components/effects/scroll-altitude";
import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Industries } from "@/components/sections/industries";
import { Skills } from "@/components/sections/skills";
import { Journey } from "@/components/sections/journey";
import { Lab } from "@/components/sections/lab";
import { Certs } from "@/components/sections/certs";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Starfield />
      <AsteroidCursor />
      <ScrollAltitude />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Industries />
        <Skills />
        <Journey />
        <Lab />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
