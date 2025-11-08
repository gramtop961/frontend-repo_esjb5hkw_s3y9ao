import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { HowItWorks, KeyFeatures, UseCases, Pricing, FinalCTA, Footer } from './components/Sections';

function App() {
  return (
    <div className="bg-[#0B0B10] text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <KeyFeatures />
        <UseCases />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
