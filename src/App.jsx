import './styles/App.sass';

import Header from './components/Header';
import SocialRail from './components/SocialRail';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

export default function App() {
  return (
    <div className="app" id="top">
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <SocialRail />
      <main id="main-content">
        <Hero />
        <Portfolio />
        <Experience />
        <section id="about" className="section" aria-labelledby="about-title">
          <div className="container">
            <header className="section__head">
              <h2 id="about-title" className="section__title">
                About
              </h2>
              <p className="section__subtitle">How I work</p>
            </header>
            <div className="prose">
              <p>
                I’m a frontend developer with a bias for clean layout systems, readable components, and interfaces that
                feel calm under load. This site is built with React and Vite — the projects below span marketing sites,
                dashboards, and interactive tools.
              </p>
              <p>Drop a PDF at <code>public/resume.pdf</code> to enable the header résumé download.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="container">
            <header className="section__head">
              <h2 id="contact-title" className="section__title">
                Contact
              </h2>
              <p className="section__subtitle">Let’s build something solid.</p>
            </header>
            <p className="prose">
              Reach out for freelance or full-time frontend roles, or to talk shop about React and design systems.
            </p>
            <div className="contact-links">
              <a className="contact-links__a" href="mailto:anastasiiasmithdev@gmail.com">
                anastasiiasmithdev@gmail.com
              </a>
              <a
                className="contact-links__a"
                href="https://www.linkedin.com/in/anastasiia-smith"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="contact-links__a"
                href="https://github.com/anastasiia-smith"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
