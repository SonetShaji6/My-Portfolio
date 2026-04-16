/** Security Tile – Red/Black themed web security showcase */
import ScrollReveal from './motion/ScrollReveal';

const tools = [
  { name: 'OWASP ZAP', desc: 'Web app vulnerability scanner' },
  { name: 'Nmap', desc: 'Network discovery & auditing' },
  { name: 'Burp Suite', desc: 'Web security testing' },
  { name: 'Wireshark', desc: 'Packet analysis & inspection' },
  { name: 'Metasploit', desc: 'Penetration testing framework' },
  { name: 'Nikto', desc: 'Web server scanner' },
];

export default function SecurityTile() {
  return (
    <ScrollReveal className="w-full">
      <div className="solid-card hover-red-border relative overflow-hidden group">
        
        {/* Background Accent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

        {/* Abstract Top Right Red Box decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 border-b border-l border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] group-hover:border-[var(--color-accent)] transition-colors duration-500 flex items-center justify-center">
            <span className="text-[var(--color-accent)] font-mono text-xs">01</span>
        </div>

        <div className="relative z-10 p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="mb-8 flex flex-wrap justify-between items-start">
            <div className="max-w-[75%]">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-widest text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">Web Security<br/>& Pen-Testing</h3>
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--color-text-secondary)] uppercase mt-4">
                Special Interest Area
              </p>
            </div>
            
            {/* Live status */}
            <div className="flex items-center gap-2 mt-2 bg-[var(--color-bg-primary)] px-3 py-1 border border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent)] transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-50"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
              </span>
              <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider">ACTIVE</span>
            </div>
          </div>

          {/* Minimal description */}
          <div className="mb-10 max-w-xl pl-4 border-l border-[var(--color-accent)]">
             <p className="font-mono text-sm leading-relaxed text-[var(--color-text-secondary)] bg-[var(--color-bg-primary)]/50 p-2">
               Passionate about identifying vulnerabilities, understanding attack vectors, and building more secure web applications. Focused on ethical hacking and defensive security practices.
             </p>
          </div>

          {/* Tool grid */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group/tool relative overflow-hidden bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] p-4 transition-all hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-accent)]/20 cursor-crosshair"
              >
                {/* Hover line indicator */}
                <div className="absolute left-0 top-0 h-full w-1 bg-[var(--color-accent)] -translate-x-full group-hover/tool:translate-x-0 transition-transform duration-300" />
                
                <div className="min-w-0 pl-2">
                  <p className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)] group-hover/tool:text-[var(--color-accent)] transition-colors">{tool.name}</p>
                  <p className="font-mono text-xs text-[var(--color-text-muted)] mt-1 truncate">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
