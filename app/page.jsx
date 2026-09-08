import React from "react";
import { LanternShowpiece } from "../components/LanternShowpiece.jsx";
import { SkillConsole } from "../components/SkillConsole.jsx";
import { ContactForm, ProjectSector, SiteNav } from "../components/PortfolioInteractive.jsx";
import { projects } from "../lib/portfolio-data.js";

const missions = [
  ["01", "Foundation", "Leading under pressure", "Restaurant work taught me how to lead a shift, train people, stay consistent, and solve problems fast."],
  ["02", "Broadcast", "Opening the signal", "Streaming gave me a place to practice hosting, tell gaming stories, make clips, and build a community."],
  ["03", "Motion", "Making ideas move", "I started studying animation and pixel art because I wanted my characters to feel alive."],
  ["04", "Construct", "Building interactive worlds", "I began building websites that pair strong visual ideas with clear structure and responsive layouts."],
  ["05", "Frontier", "Designing forbidden worlds", "I keep developing RPG, horror, superhero, and dragon-riding ideas into complete worlds."],
];

export default function Page() {
  return (
    <main>
      <div className="ambient-grid" aria-hidden="true" />
      <div className="particle-field" aria-hidden="true" />
      <SiteNav />

      <section className="hero section-shell" id="signal" aria-labelledby="signal-title">
        <div className="hero-copy">
          <p className="eyebrow"><span>Thomas Day</span> Creative Portfolio</p>
          <h1 id="signal-title">I BUILD<br />WHAT I<br /><em>WANT TO SEE</em></h1>
          <p className="hero-statement">I make websites, game concepts, animations, and gaming content. I usually add a little cosmic energy.</p>
          <p className="hero-intro">I like projects with a strong world, a clear hook, and something people want to click, watch, or play.</p>
          <div className="hero-actions"><a className="primary-action" href="#dossiers">See the work <span aria-hidden="true">↗</span></a><a className="text-action" href="#profile">About me <span aria-hidden="true">→</span></a></div>
        </div>
        <LanternShowpiece />
        <aside className="hero-dossier surface-panel" aria-label="Current creative focus">
          <p className="eyebrow">Currently making</p>
          <dl><div><dt>Web</dt><dd>Interactive sites</dd></div><div><dt>Video</dt><dd>Gaming content</dd></div><div><dt>Games</dt><dd>Original worlds</dd></div><div><dt>Learning</dt><dd className="status-live">Always</dd></div></dl>
          <p className="dossier-note">Kael Veyr is the name I use here. The projects and ideas are mine.</p>
        </aside>
        <a className="scroll-mark" href="#profile">Keep scrolling <span aria-hidden="true">↓</span></a>
      </section>

      <section className="profile-section section-shell" id="profile" aria-labelledby="profile-title">
        <div className="profile-grid">
          <header><p className="eyebrow"><span>Behind the alias</span> Thomas Day</p><h2 id="profile-title">About Thomas</h2><p className="profile-lead">I'm a creator, streamer, restaurant shift leader, and lifelong worldbuilder from Gonzales, Louisiana.</p></header>
          <div className="profile-story surface-panel"><p>I've spent years leading busy kitchen shifts, training people, streaming games, and sketching out stories I wish existed. That mix taught me how to stay calm, communicate clearly, and keep improving an idea until it works.</p><p>This portfolio is where those interests meet: strong visual design, useful interaction, gaming culture, and original worlds.</p><blockquote>“Make the thing you keep wishing somebody else would make.”</blockquote></div>
        </div>

        <div className="mission-log">
          <div className="subsection-heading"><p className="eyebrow">The short version</p><h3>How I Got Here</h3></div>
          <ol className="surface-panel">{missions.map(([number, phase, title, detail]) => <li key={number}><span className="mission-number">{number}</span><div><p>{phase}</p><h4>{title}</h4><span>{detail}</span></div></li>)}</ol>
        </div>

        <div className="power-scanner">
          <div className="subsection-heading"><p className="eyebrow">Skills in progress</p><h3>What I Bring</h3><p className="section-support">These are the four areas I keep working on. Pick one to see what I am learning and making.</p></div>
          <SkillConsole />
        </div>
      </section>

      <section className="dossier-section section-shell" id="dossiers" aria-labelledby="dossiers-title">
        <header className="section-header"><div><p className="eyebrow"><span>Selected work</span> {projects.length} projects</p><h2 id="dossiers-title">Things I'm Building</h2></div><p>Client websites, gaming videos, animation tests, and game ideas. Use the filters or open a project to see more.</p></header>
        <ProjectSector />
      </section>

      <section className="transmit-section section-shell" id="transmit" aria-labelledby="transmit-title">
        <div className="transmission-panel">
          <div><p className="eyebrow"><span>Want to collaborate?</span> I'm listening</p><h2 id="transmit-title">Let’s Make Something</h2></div>
          <div className="transmission-copy"><p>If you have a website, gaming collaboration, or creative project that fits my style, tell me a little about it below.</p><ContactForm /><small>Please do not include sensitive information. Your message stays in your email app until you choose to send it.</small></div>
        </div>
      </section>
    </main>
  );
}
