import ParticleCanvas from './components/shared/ParticleCanvas';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyWebDev from './components/WhyWebDev/WhyWebDev';
import FullStackXRay from './components/FullStackXRay/FullStackXRay';
import MernStack from './components/MernStack/MernStack';
import DevCycle from './components/DevCycle/DevCycle';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <WhyWebDev />
        <FullStackXRay />
        <MernStack />
        <DevCycle />
      </main>
      <Footer />
    </>
  );
}
