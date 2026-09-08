"use client";

import React, { useState } from "react";
import { filterProjects } from "../lib/portfolio-data.js";

const categories = ["All work", "Websites", "Gaming Content", "Animation", "Game Concepts"];

export function SiteNav() {
  return (
    <nav className="command-rail" aria-label="Primary navigation">
      <a className="monogram" href="#signal" aria-label="Kael Veyr home"><span>K</span><span>V</span></a>
      <div className="nav-links">
        <a href="#signal"><i aria-hidden="true" />Home</a>
        <a href="#dossiers"><i aria-hidden="true" />Work</a>
        <a href="#profile"><i aria-hidden="true" />About</a>
        <a href="#transmit"><i aria-hidden="true" />Contact</a>
      </div>
      <p className="availability"><span /> Available<br />for projects</p>
    </nav>
  );
}

export function ProjectSector() {
  const [category, setCategory] = useState("All work");
  const [selected, setSelected] = useState(null);
  const visible = filterProjects(category);

  return (
    <div className="project-sector">
      <div className="sector-filters" aria-label="Filter projects">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >{item}</button>
        ))}
      </div>
      <p className="project-filter-status" role="status" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"} in {category}.
      </p>
      <div className="project-grid">
        {visible.map((project, index) => (
          <article key={project.title} className={`project-card surface-panel${project.featured ? " is-featured" : ""}`}>
            <div className={`project-visual is-${project.visualType}`}>
              {project.visualType === "screenshot" && (
                <div className="project-browser-bar" aria-hidden="true"><i /><i /><i /><span>Live site capture</span></div>
              )}
              <img src={project.image} alt={`${project.title} project ${project.visualType}`} loading="lazy" />
              <span className="project-visual-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="project-card-copy">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="skill-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <footer>
                <span className={`project-status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status}</span>
                <div className="project-actions">
                  {project.url && <a className="project-live-link" href={project.url} target="_blank" rel="noreferrer">Visit live site <span aria-hidden="true">↗</span></a>}
                  <button type="button" onClick={() => setSelected(project)}>View dossier <span aria-hidden="true">↗</span></button>
                </div>
              </footer>
            </div>
          </article>
        ))}
      </div>
      {selected && (
        <div className="project-modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <section className="project-modal surface-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Close project dossier" onClick={() => setSelected(null)}>×</button>
            <p className="eyebrow">{selected.category} · {selected.status}</p>
            <h3 id="project-modal-title">{selected.title}</h3>
            <p>{selected.description}</p>
            <div className="skill-tags">{selected.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            {selected.url ? (
              <a className="modal-live-link" href={selected.url} target="_blank" rel="noreferrer">Visit the live site <span aria-hidden="true">↗</span></a>
            ) : (
              <p className="modal-note">More project images and progress notes will be added here.</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${form.get("projectType")} project inquiry from ${form.get("name")}`);
    const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\nBudget: ${form.get("budget")}\n\n${form.get("message")}`);
    setStatus("Your email app is opening with the project details prepared.");
    window.location.href = `mailto:thomasdbiz26@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label><span>Name</span><input name="name" autoComplete="name" required /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
        <label><span>Project type</span><select name="projectType" required defaultValue=""><option value="" disabled>Select one</option><option>Website</option><option>Creative collaboration</option><option>Gaming project</option><option>Something else</option></select></label>
        <label><span>Budget</span><select name="budget" required defaultValue=""><option value="" disabled>Select a range</option><option>Under $500</option><option>$500 to $1,500</option><option>$1,500+</option><option>Still deciding</option></select></label>
      </div>
      <label className="message-field"><span>Message</span><textarea name="message" rows="6" minLength="20" maxLength="1200" required placeholder="Tell me what you want to make, who it is for, and what success looks like." /></label>
      <div className="contact-form-footer"><p>Opens your email app with everything prepared.</p><button type="submit">Prepare message <span aria-hidden="true">↗</span></button></div>
      <p className="contact-status" aria-live="polite">{status}</p>
    </form>
  );
}
