import GithubLogo from "../assets/GitHubLogo.png";
import LinkedInLogo from "../assets/LinkedInLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/mzs21/markdown-previewer" title="Github Repo">
        <img src={GithubLogo} alt="" className="github" />
      </a>{" "}
      <a href="https://www.linkedin.com/in/mdmzs/" title="Find me here">
        <img src={LinkedInLogo} alt="" className="linkedIn" />
      </a>
    </footer>
  );
};

export default Footer;
