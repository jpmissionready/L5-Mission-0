import Navbar from "./sharedComponents/Navbar.jsx";
import Hero from "./sharedComponents/Hero.jsx";
import Footer from "./sharedComponents/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
        <div>
            <h1>Hello World</h1>
        </div>
      <Footer /> 
    </div>
  );
}
export default App;