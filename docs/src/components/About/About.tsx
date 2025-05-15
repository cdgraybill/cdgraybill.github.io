import "./About.css";
import profileImage from "../../assets/profile.jpg";

function About() {
    return (
      <div className="flex flex-col md:flex-row items-start gap-8 p-4">
        <div className="w-full md:w-3/5">
          <h1 className="leading-normal text-5xl font-bold">Shipping code since 2020 🤙</h1>
          <h2 className="leading-normal text-1xl">With working experience spanning from the startup scene all the way to the enterprise world, I've contributed to a wide range of projects. 
            From greenfield projects to legacy codebases...big or small - I've seen it all.</h2>
            <br />
            <h2 className="leading-normal text-1xl">Currently, I'm working as a Full Stack Software Engineer at <a href="https://www.linkedin.com/company/regions-financial-corporation/" target="_blank">Regions Bank</a>.</h2>
            <br />
            <h2>If I'm not working, you can catch me spending time with my family, working on side projects, running, lifting, or playing video games.</h2>
        </div>
        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <img 
            id="profile-image"
            src={profileImage} 
            alt="Profile" 
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
}

export default About;