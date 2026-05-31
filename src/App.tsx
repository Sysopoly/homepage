import { Navigation } from './components/Layout/Navigation/Navigation';
import { Footer } from './components/Layout/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { Approach } from './components/Approach/Approach';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Technologies } from './components/Technologies/Technologies';
import { Contact } from './components/Contact/Contact';

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Portfolio />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
