/** Contact section — Minimal brutalist mailto form + confetti resume button */
import { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import ScrollReveal from './motion/ScrollReveal';
import SpringHover from './motion/SpringHover';
import Magnetic from './motion/Magnetic';

const EMAIL = 'sonetshaji5@gmail.com';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/SonetShaji6/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sonet-shaji/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919778206866',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sonet_shaji/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: 'https://x.com/SonetShaji/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];


function ResumeButton() {
  const [downloading, setDownloading] = useState(false);

  const handleClick = useCallback(async () => {
    if (downloading) return;
    setDownloading(true);

    // Dynamic import for minimal bundle
    const confetti = (await import('canvas-confetti')).default;
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D90429', '#EF233C', '#8D0801', '#FFFFFF', '#111111'],
    });

    // Simulate download (replace href with real resume URL)
    setTimeout(() => {
      setDownloading(false);
      // window.open('/resume.pdf', '_blank');
    }, 2000);
  }, [downloading]);

  return (
    <Magnetic strength={0.2}>
      <motion.button
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
        className="relative inline-flex items-center gap-2 border-2 border-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent)] text-white px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-colors duration-300"
        disabled={downloading}
      >
        {downloading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="h-4 w-4 rounded-full border-2 border-current border-t-transparent"
            />
            DOWNLOADING...
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            RESUME_PDF
          </>
        )}
      </motion.button>
    </Magnetic>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 w-full">
      <div className="mx-auto w-full">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center mb-16">
            <span className="font-mono text-xs tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)] px-3 py-1 mb-6">
              [ EOF ]
            </span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white">
              Let's Connect
            </h2>
            <p className="mt-4 text-center max-w-sm text-[var(--color-text-secondary)] font-mono text-xs uppercase tracking-widest">
              Open to opportunities & collaborations
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:gap-8 lg:grid-cols-2">
          {/* Contact form */}
          <ScrollReveal delay={0.1} className="h-full">
            <form
              onSubmit={handleSubmit}
              className="solid-card hover-red-border p-6 sm:p-8 relative"
            >
              <div className="mb-6">
                <label className="mb-2 block font-mono text-xs tracking-widest text-white uppercase">
                  Name_
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-accent)] font-mono"
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-mono text-xs tracking-widest text-white uppercase">
                  Email_
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-accent)] font-mono"
                />
              </div>
              <div className="mb-8">
                <label className="mb-2 block font-mono text-xs tracking-widest text-white uppercase">
                  Message_
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What's on your mind?"
                  className="w-full resize-none border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-accent)] font-mono"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] text-white px-2 sm:px-6 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                {sent ? '✓ PREPARING CLIENT...' : 'SEND MESSAGE'}
              </button>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center font-mono text-[10px] text-[var(--color-accent)] uppercase tracking-wider"
                >
                  Your default mail app should open with the message pre-filled.
                </motion.p>
              )}
            </form>
          </ScrollReveal>

          {/* Right column — socials + resume */}
          <ScrollReveal delay={0.2} className="h-full">
            <div className="flex h-full flex-col justify-between gap-8">
              {/* Resume download */}
              <div className="solid-card hover-red-border p-8 border-l-4 border-l-[var(--color-accent)] flex flex-col justify-center items-start">
                <h3 className="font-display text-2xl uppercase text-white mb-4">Credentials</h3>
                <p className="text-sm text-[var(--color-text-secondary)] font-mono mb-8">
                  Available for independent work, full-time positions, and open source collaboration. Grab my resume for the full timeline.
                </p>
                <ResumeButton />
              </div>

              {/* Socials & Badge */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                <div className="solid-card p-6 flex flex-col justify-center">
                  <p className="mb-6 font-mono text-xs tracking-widest text-white uppercase">
                    Network
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {socials.map((social) => (
                      <SpringHover
                        key={social.name}
                        href={social.href}
                        label={social.name}
                        className="flex h-12 w-12 items-center justify-center border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
                      >
                        {social.icon}
                      </SpringHover>
                    ))}
                  </div>
                </div>

                <div className="solid-card overflow-hidden h-full">
                  <div
                    style={{ display: 'none' }}
                    className="LI-profile-badge mx-auto bg-white/5 w-full h-full min-h-[200px]"
                    data-version="v1"
                    data-size="medium"
                    data-locale="en_US"
                    data-type="vertical"
                    data-theme="dark"
                    data-vanity="sonet-shaji"
                  >
                    <a
                      className="LI-simple-link"
                      href="https://www.linkedin.com/in/sonet-shaji?trk=profile-badge"
                    >
                      Sonet Shaji
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <div className="mt-24 border-t border-[var(--color-border-subtle)] pt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display font-medium text-xl text-white">
            SONET.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} · SYSTEM ONLINE
          </p>
          <div className="font-mono text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider space-x-2">
            <span>Astro</span> <span>/</span> <span>Tailwind</span> <span>/</span> <span className="text-[var(--color-accent)]">Lenis</span>
          </div>
        </div>
      </div>
    </section>
  );
}
