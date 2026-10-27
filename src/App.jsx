import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import License from "./components/License";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <License />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
