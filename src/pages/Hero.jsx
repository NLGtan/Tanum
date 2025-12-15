import { useEffect } from "react";
import { initLenis } from "../script";

const Hero = () => {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">TANUM</a>
        </div>

        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Videos</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>TANUM.IT</h1>
        <div className="hero-copy">
          <p>One subscription, endless web design</p>
          <p>(Scroll)</p>
        </div>
      </section>

      <section className="intro">
        <div className="video-container-desktop">
          <div className="video-preview">
            <div className="video-wrapper">
              <video src="/videos/vid.mp4" autoPlay loop muted />
            </div>
          </div>
          <div className="video-title">
            <p>Pro ShowReel</p>
            <p>2025 - 2026</p>
          </div>
        </div>

        <div className="video-container-mobile">
          <div className="video-preview">
            <div className="video-wrapper">
              <iframe
                src="/videos/vid.mp4"
                frameBorder="0"
                allow="autoplay; fullscreen"
                loading="lazy"
                title="Codegrid Vid"
              />
            </div>
          </div>
          <div className="video-title">
            <p>Pro Showreel</p>
            <p>2025 - 2026</p>
          </div>
        </div>
      </section>

      <section className="outro">
        <p>Delve into coding without clutter.</p>
      </section>
    </>
  );
};

export default Hero;
