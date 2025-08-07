import Header from './components/Header';
import Footer from './components/Footer';
import Hero from "./components/Hero";
import About from "./components/About"; // Import the About component
import License from "./components/License"; // Import the License component


function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <Hero />
      <About /> 
      <License /> {/* ✅ must have id="license" inside */}
      <Footer />
    </div>
  );
}

export default App;
