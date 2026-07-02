import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Objective } from "./components/Objective";
import { Differentials } from "./components/Differentials";
import { Features } from "./components/Features";
import { Pitch } from "./components/Pitch";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg font-body text-ink">
      <Header />
      <main>
        <Hero />
        <Objective />
        <Differentials />
        <Features />
        <Pitch />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
