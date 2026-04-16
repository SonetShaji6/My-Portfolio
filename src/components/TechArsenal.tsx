/** Tech Arsenal – Brutalist Core & Environment skills */
import ScrollReveal from './motion/ScrollReveal';

interface Skill {
  name: string;
  icon: string;
}

const coreSkills: Skill[] = [
  { name: 'C', icon: 'C' },
  { name: 'Java', icon: 'JAVA' },
  { name: 'PHP', icon: 'PHP' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Python', icon: 'PY' },
  { name: 'SQL', icon: 'SQL' },
];

const envSkills: Skill[] = [
  { name: 'Fedora Linux', icon: 'LNX' },
  { name: 'System Admin', icon: 'SYS' },
  { name: 'Bash / Shell', icon: 'SH' },
  { name: 'Docker', icon: 'DCK' },
  { name: 'Git', icon: 'GIT' },
  { name: 'Networking', icon: 'NET' },
];

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div className="group relative overflow-hidden bg-transparent border border-[var(--color-border-subtle)] p-4 transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]">
      {/* Background slide effect */}
      <div className="absolute inset-0 bg-[var(--color-accent)] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
      
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] text-white font-mono font-bold text-xs group-hover:border-white group-hover:text-black group-hover:bg-white transition-colors duration-300">
          {skill.icon}
        </div>
        <p className="font-mono text-sm tracking-widest text-[var(--color-text-secondary)] group-hover:text-white transition-colors duration-300 uppercase truncate">
          {skill.name}
        </p>
      </div>
    </div>
  );
}

export default function TechArsenal() {
  return (
    <section id="skills" className="relative px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 flex flex-col justify-center">
            <ScrollReveal>
              <p className="mb-4 font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
                &lt;skills /&gt;
              </p>
              <h2 className="mb-6 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-none">
                Tech<br/><span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-text-primary)' }}>Arsenal</span>
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] max-w-xs mt-4">
                Core programming languages and environment tools that form the foundation of my technical stack.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8 grid gap-8 sm:grid-cols-2">
            {/* Core Languages */}
            <ScrollReveal delay={0.1}>
              <div className="mb-6 flex items-center gap-4 border-b border-[var(--color-border-subtle)] pb-2">
                <div className="h-0.5 w-8 bg-white"></div>
                <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-white">
                  Languages
                </h3>
              </div>
              <div className="grid gap-4 grid-cols-1">
                {coreSkills.map((skill, i) => (
                  <ScrollReveal key={skill.name} delay={0.04 * i}>
                    <SkillChip skill={skill} />
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            {/* Environment & Tools */}
            <ScrollReveal delay={0.2}>
              <div className="mb-6 flex items-center gap-4 border-b border-[var(--color-border-subtle)] pb-2">
                <div className="h-0.5 w-8 bg-[var(--color-accent)]"></div>
                <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-white">
                  Environment
                </h3>
              </div>
              <div className="grid gap-4 grid-cols-1">
                {envSkills.map((skill, i) => (
                  <ScrollReveal key={skill.name} delay={0.04 * i}>
                    <SkillChip skill={skill} />
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
