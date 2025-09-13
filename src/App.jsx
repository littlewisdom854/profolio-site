import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { projects } from "./data/projects";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />

      {/* Hero Photo / About Me*/}
      <section className="d-flex align-items-center" style={{ minHeight: "80vh", padding: 40, boxSizing: "border-box" }}>
        <div style={{ flex: 1 }} className="d-flex justify-content-center align-items-center">
          <img src="/IMAGE/me.jpg" alt="me" className="hero-img" />
        </div>
        <div style={{ flex: 1, padding: 20 }}>
          <h2 className="section-title">About Me</h2>
          <p style={{ fontSize: "1.05rem" }}>
            Say something about yourself.
          </p>
          <a href="#projects" className="btn btn-brand">My Projects</a>
        </div>
      </section>

      
      <main className="container my-5" id="main">

        {/* Experiences */}
        <section className="mb-5" id="experiences">
          <h2 className="text-center section-title">My Experiences</h2>
          <p>Say something.</p>
        </section>

        {/* Projects */}
        <section className="mb-5" id="projects">
          <h2 className="text-center section-title">My Projects</h2>
          <div className="row">
            {projects.map((p, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <ProjectCard item={p} />
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="my-5" id="contact">
          <h2 className="section-title">Contact Me</h2>
          <p className="mb-2">Email：@gmail.com</p>
          <p>Phone：+886-9xx-xxx-xxx</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
