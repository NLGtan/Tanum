import React from "react";

const Intro = () => {
  return (
    <section className="intro">
      {/* INTRO / VIDEO SECTION */}
      <div className="video-container-desktop">
        <div className="video-preview">
          <div className="video-wrapper">
            <iframe
              src="/videos/vid.mp4"
              frameBorder="0"
              allow="autoplay; fullscreen"
              referrerPolicy="no-referrer"
              loading="lazy"
              title="Codegrid Vid"
              credentialless
            />
          </div>
        </div>
        <div className="video-title">
          <p>Pro Showreel</p>
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
              referrerPolicy="no-referrer"
              loading="lazy"
              title="Codegrid Vid"
              credentialless
            />
          </div>
        </div>
        <div className="video-title">
          <p>Pro Showreel</p>
          <p>2025 - 2026</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
