import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";
import Services from "./containers/Services";

const App = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Hero />
      </div>

      <main>
        <Services />
      </main>
    </>
  );
};

export default App;
