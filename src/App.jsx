import { useEffect } from 'react';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Responsive Design',
  'UI/UX',
  'Problem Solving',
  'Customer Experience',
  'Sales & Marketing'
];

const stats = [
  { value: 'Service', label: 'Customer-first mindset' },
  { value: 'Sales', label: 'Growth-focused communication' },
  { value: 'Admin', label: 'Organized execution' },
  { value: 'Code', label: 'Frontend development' }
];

const services = [
  {
    title: 'Frontend Development',
    text: 'Building clean, responsive, and user-friendly web experiences with a strong focus on usability and performance.'
  },
  {
    title: 'Customer Experience',
    text: 'Turning customer needs into simple digital journeys that feel smooth, helpful, and professional.'
  },
  {
    title: 'Business Support',
    text: 'Using sales, marketing, and administrative experience to help brands stay organized, visible, and effective.'
  }
];

const projects = [
  {
    name: 'WORK-IT-OUT',
    url: 'https://onlydogood.github.io/workdone/index.html',
    sourceUrl: '',
    type: 'Fitness & Wellness Website',
    summary: 'A fitness and wellness website that brings weekly class schedules, trainer details, class descriptions, and membership information together in one easy-to-browse experience.',
    tags: ['Class Schedule', 'Fitness', 'Responsive UI'],
    accent: '#d4af6c',
    metric: 'Live website',
    status: 'Live website'
  },
  {
    name: 'Switch It Up',
    url: 'https://onlydogood.github.io/switch-it-up/',
    sourceUrl: '',
    type: 'Personal Training & Booking',
    summary: 'A personal training site where clients can compare coaching plans, check availability, choose a session, and send a booking request, with home-workout guidance included.',
    tags: ['Session Booking', 'Pricing Plans', 'Fitness'],
    accent: '#e25858',
    metric: 'Live website',
    status: 'Live website'
  }
];

const socialProfiles = {
  linkedin: '',
  github: ''
};

const timeline = [
  {
    role: 'Frontend Developer',
    company: 'Independent / Personal Projects',
    period: 'Current',
    text: 'Building web experiences with React and responsive design while focusing on usability, business value, and clean execution.'
  },
  {
    role: 'Customer Service & Sales',
    company: 'Professional Experience',
    period: 'Earlier roles',
    text: 'Worked directly with people, solved problems, and helped improve customer satisfaction while supporting business goals.'
  },
  {
    role: 'Administration & Marketing',
    company: 'Professional Experience',
    period: 'Earlier roles',
    text: 'Handled daily operations, communication, and promotional work with a strong focus on consistency, detail, and results.'
  }
];

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      reveals.forEach((element) => element.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.18
      }
    );

    reveals.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const featuredProject = projects[0];
  const secondaryProjects = projects.slice(1);

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="topbar reveal">
        <div className="brand-wrap">
          <div className="brand-mark">DO</div>
          <div className="brand">DESMOND ODOGWU</div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="primary-button" href="#contact">
          Let’s talk
        </a>
      </header>

      <main id="main-content">
        <section className="hero reveal">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer</p>
            <h1>Building practical digital experiences that people can trust.</h1>
            <p className="hero-text">
              I’m Desmond Odogwu, a versatile frontend developer with experience in customer
              service, sales and marketing, administration, and web development. I’m passionate
              about solving problems, learning new skills, and creating value through technology
              and great customer experience.
            </p>

            <div className="cta-row">
              <a className="primary-button" href="#work">
                View projects
              </a>
              <a className="secondary-button" href={`${import.meta.env.BASE_URL}desmond-odogwu-cv.txt`} download>
                Download CV
              </a>
              <a className="secondary-button" href="#about">
                About me
              </a>
            </div>

            <div className="stats-row">
              {stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Portfolio preview">
            <div className="visual-panel">
              <div className="panel-header">
                <span className="dot dot-1" />
                <span className="dot dot-2" />
                <span className="dot dot-3" />
              </div>

              <div className="preview-card large">
                <div className="preview-badge">Current focus</div>
                <h3>Useful products for real people.</h3>
                <div className="preview-bars">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="preview-grid">
                <div className="preview-card compact">
                  <span>Build</span>
                  <strong>Web</strong>
                </div>
                <div className="preview-card compact accent">
                  <span>Outcome</span>
                  <strong>Value</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-spacing reveal">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Focused, adaptable, and ready to build what matters.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I bring together frontend development with a practical understanding of customer
                service, sales, and business operations. That combination helps me create websites
                and digital tools that are not only attractive, but also useful and easy to use.
              </p>
              <p>
                I enjoy learning quickly, solving problems, and turning ideas into experiences that
                support both people and business goals.
              </p>
            </div>

            <div className="skill-panel">
              <h3>Core strengths</h3>
              <div className="skills-wrap">
                {skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-spacing reveal">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>How I can help.</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">✦</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section-spacing reveal">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Projects that reflect the kind of work I enjoy building.</h2>
            </div>
            <a className="text-link" href="#contact">
              Let’s build something →
            </a>
          </div>

          <div className="project-gallery">
            <article className="featured-project" style={{ '--accent': featuredProject.accent }}>
              <div className="project-visual">
                <div className="project-glow" />
              </div>
              <div className="featured-copy">
                <span className="project-tag">Featured Project</span>
                <h3>{featuredProject.name}</h3>
                <p>{featuredProject.summary}</p>
                <div className="project-meta-row">
                  <span>{featuredProject.type}</span>
                  <span>{featuredProject.metric}</span>
                </div>
                <div className="tag-row">
                  {featuredProject.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {featuredProject.url && (
                    <a className="project-link" href={featuredProject.url} target="_blank" rel="noreferrer">
                      Live preview <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {featuredProject.sourceUrl && (
                    <a className="project-link" href={featuredProject.sourceUrl} target="_blank" rel="noreferrer">
                      Source code <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>

            <div className="mini-projects">
              {secondaryProjects.map((project) => (
                <article className="mini-project-card" key={project.name} style={{ '--accent': project.accent }}>
                  <div className="mini-project-visual">
                    <div className="mini-project-glow" />
                  </div>
                  <div className="mini-project-body">
                    <div className="mini-project-head">
                      <span>{project.type}</span>
                      <strong>{project.status}</strong>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                    <div className="tag-row compact-row">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-actions">
                      {project.url && (
                        <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                          Live preview <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a className="project-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
                          Source code <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-spacing reveal">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2>A simple, practical approach from idea to launch.</h2>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-step">0{index + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3>{item.role}</h3>
                      <span>{item.company}</span>
                    </div>
                    <p>{item.period}</p>
                  </div>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-spacing reveal">
          <div className="contact-card">
            <div className="contact-copy">
              <p className="eyebrow">Let’s connect</p>
              <h2>Need a frontend developer who understands both people and product?</h2>

              <div className="social-links">
                <a className="social-link" href="mailto:desmondodogwu306@gmail.com">
                  Email
                </a>
                {socialProfiles.linkedin && (
                  <a className="social-link" href={socialProfiles.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                )}
                {socialProfiles.github && (
                  <a className="social-link" href={socialProfiles.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <form className="contact-form" action="https://formspree.io/f/mjyklpdk" method="POST">
              <input type="hidden" name="_subject" value="New portfolio enquiry" />
              <div className="field-row">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="Your email" required />
                </label>
              </div>

              <label>
                Message
                <textarea name="message" placeholder="Tell me about your project" required />
              </label>

              <button type="submit" className="primary-button submit-button">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer reveal">
        <span>© 2026 Desmond Odogwu</span>
        <span>Frontend Developer</span>
      </footer>
    </div>
  );
}

export default App;
