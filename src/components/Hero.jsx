import portraitImg from '../assets/photo/Img.png';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__blobs" aria-hidden="true">
        <div className="hero__blob hero__blob--purple" />
        <div className="hero__blob hero__blob--coral" />
        <div className="hero__blob hero__blob--cream" />
      </div>

      <div className="container hero__grid">
        <div className="hero__visual">
          <svg className="hero__swirl" viewBox="0 0 200 200" aria-hidden="true">
            <path
              d="M100 20 C 160 20 180 80 180 100 C 180 140 140 180 100 180 C 40 180 20 120 20 100 C 20 50 60 20 100 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="8 12"
            />
          </svg>

          <a href="#contact" className="hero__portrait-wrap" aria-label="Go to contact section">
            <img
              src={portraitImg}
              alt=""
              className="hero__portrait"
              width={400}
              height={400}
              decoding="async"
            />
          </a>
        </div>

        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            Anastasiia Smith
          </h1>
          <p className="hero__tagline">Frontend developer</p>
          <p className="hero__lead">
            I build fast, accessible interfaces with React and modern CSS. Frontend developer since 2015 — focused on
            clarity, performance, and polish.
          </p>
        </div>
      </div>
    </section>
  );
}
