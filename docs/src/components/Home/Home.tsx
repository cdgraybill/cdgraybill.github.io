import { Link } from "react-router-dom";
import "./Home.css";
import githubBug from "../../assets/github-mark-white.png";
import linkedinBug from "../../assets/InBug-White.png";

function Home() {

    return (
      <div>
        <h1 className="leading-normal text-5xl font-bold">Hey there, I'm Cam</h1>
        <h2 className="leading-normal text-2xl font-bold">I'm a software engineer</h2>
        <h4>
          <img id="github-bug" src={githubBug} alt="Github Icon" className="w-4 h-4 inline-block mr-2" />
          <Link className="leading-loose" to={"https://github.com/cdgraybill"}>
            Here's some code I've written
          </Link>
        </h4>
        <h4>
          <img id="linkedin-bug" src={linkedinBug} alt="Linkedin Icon" className="w-4 h-4 inline-block mr-2" />
          <Link className="leading-loose" to="https://www.linkedin.com/in/camerongraybill/">
            Here's where you can get in touch with me
          </Link>
        </h4>
        <h4 className="leading-loose">
            And for everything else, check the links above
        </h4>
      </div>
    );
}

export default Home;