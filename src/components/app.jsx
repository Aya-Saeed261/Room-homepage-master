import Navbar from "./navbar";
import About from "./about";
import Carousel from "./carousel";

const App = () => {
  return (
    <main className="position-relative">
      <Navbar />
      <Carousel />
      <About />
    </main>
  );
};

export default App;
