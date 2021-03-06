import favicon from "../img/logo.png";
import socialGitHub from "../img/social/github.svg";
import socialLinkedIn from "../img/social/linkedin.svg";

import resume from "../img/Krishna-keshri.pdf";

export default function Header({ content, showHeader, goTo }) {
  return (
    <header
      className="header"
      style={{ display: showHeader ? "flex" : "none" }}
    >
      <img
        className="header-logo"
        src={favicon}
        alt="Planet logo"
        onClick={() => goTo("home")}
      ></img>
      <nav className="header-sections">
        <p onClick={() => goTo("about")}>{content.about}</p>
        <p onClick={() => goTo("skills")}>{content.skills}</p>

        <p onClick={() => goTo("projects")}>{content.projects}</p>
        <p onClick={() => goTo("contact")}>{content.contact}</p>

        <a target="_blanck" href={resume}>
          <p>{content.resume}</p>
        </a>
      </nav>
      <nav className="social-links">
        <a
          href="https://github.com/KrishnaKumarKeshri96"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Link to GitHub profile" src={socialGitHub}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/krishna-kumar-keshri"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Link to LinkedIn profile" src={socialLinkedIn}></img>
        </a>
      </nav>
    </header>
  );
}
