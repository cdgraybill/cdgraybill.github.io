import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

    return (
      <div>
        <h1>Hey there, I'm Cam</h1>
        <h2>I'm a software engineer</h2>
        <h4>
          <Link to={"https://github.com/cdgraybill"}>
            Here's some code I've written
          </Link>
        </h4>
        <h4>
          <Link to="https://www.linkedin.com/in/camerongraybill/">
            Here's where you can get in touch with me
          </Link>
        </h4>
        <h4>
            And for everything else, check the links above
        </h4>
      </div>
    );
}

export default Home;