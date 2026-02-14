/** Security Tile – dark-themed pen-testing niche showcase */
import ScrollReveal from './motion/ScrollReveal';
import TiltCard from './motion/TiltCard';

const tools = [
  { name: 'OWASP ZAP', desc: 'Web app vulnerability scanner', icon: '🛡️' },
  { name: 'Nmap', desc: 'Network discovery & auditing', icon: '🔍' },
  { name: 'Burp Suite', desc: 'Web security testing', icon: '🕷️' },
  { name: 'Wireshark', desc: 'Packet analysis & inspection', icon: '📡' },
  { name: 'Metasploit', desc: 'Penetration testing framework', icon: '⚔️' },
  { name: 'Nikto', desc: 'Web server scanner', icon: '🌐' },
];

export default function SecurityTile() {
  return (
    <ScrollReveal className="w-full">
      <TiltCard>
        <div className="bento-tile relative overflow-hidden border-[var(--color-cyber)]/10 bg-gradient-to-br from-[#0a1a15] to-[var(--color-bg-card)]">
          {/* Background grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,200,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,200,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 p-5 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-cyber)]/10 text-lg">
                🔐
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg sm:text-xl text-gradient-cyber">Web Security & Pen-Testing</h3>
                <p className="font-mono text-[10px] tracking-wider text-[var(--color-text-muted)] uppercase">
                  Special Interest Area
                </p>
              </div>
              {/* Live status */}
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-cyber)] opacity-40"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-cyber)]"></span>
                </span>
                <span className="font-mono text-[10px] text-[var(--color-cyber)]">ACTIVE</span>
              </div>
            </div>

            {/* Terminal-style description */}
            <div className="mb-5 rounded-lg bg-black/30 p-3 sm:p-4 font-mono text-xs leading-relaxed text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-cyber)]">$</span> Passionate about identifying vulnerabilities,
              understanding attack vectors, and building more secure web applications.
              Focused on ethical hacking and defensive security practices.
            </div>

            {/* Tool grid */}
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 rounded-lg border border-[var(--color-cyber)]/5 bg-[var(--color-cyber)]/[0.02] p-3 transition-all hover:border-[var(--color-cyber)]/15 hover:bg-[var(--color-cyber)]/[0.04]"
                >
                  <span className="text-base">{tool.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[var(--color-text-primary)]">{tool.name}</p>
                    <p className="font-mono text-[10px] text-[var(--color-text-muted)] truncate">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
}
