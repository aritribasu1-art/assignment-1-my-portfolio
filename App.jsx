import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
       <Navbar />
      <Header />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;