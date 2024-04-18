import ai from "../assets/ai.png";
import Button from "../components/Button";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-left">
          <h1 className="hero-heading">
            Unleash Your{" "}
            <span className="gradient__text">Digital Potential</span>
          </h1>
          <p className="hero-desc">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="hero-btn">
            <Button>Get Started</Button>
          </div>
        </div>
        <div className="hero-right">
          <div className="illustration-container">
            <img src={ai} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
