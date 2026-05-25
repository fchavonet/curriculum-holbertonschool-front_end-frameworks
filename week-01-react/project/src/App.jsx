import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import Insights from "./components/Insights.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Features />
        <Insights />
        <Contact />
      </main>

      <Footer />
    </>

  );
}

export default App;