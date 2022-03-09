import favicon from "../img/logo.png";
import socialGitHub from "../img/social/github.svg";
import socialLinkedIn from "../img/social/linkedin.svg";

export default function Header({
  content,

  showHeader,
}) {
  return (
    <header
      className="header"
      style={{ display: showHeader ? "flex" : "none" }}
    >
      <img className="header-logo" src={favicon} alt="Planet logo"></img>
      <nav className="header-sections">
        <p>{content.about}</p>
        <p>{content.skills}</p>

        <p>{content.projects}</p>
        <p>{content.contact}</p>
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
