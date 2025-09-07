import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { projects } from "./data/projects";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />

      {/* Hero / About */}
      <section className="d-flex align-items-center" style={{ minHeight: "80vh", padding: 40, boxSizing: "border-box" }}>
        <div style={{ flex: 1 }} className="d-flex justify-content-center align-items-center">
          <img src="/IMAGE/homepage.jpg" alt="me" className="hero-img" />
        </div>
        <div style={{ flex: 1, padding: 20 }}>
          <h2 className="section-title">About Me</h2>
          <p style={{ fontSize: "1.05rem" }}>
            這裡寫你的自我介紹：擅長領域、目前目標（實習/兼職/研究）、所在地與是否可遠端。
          </p>
          <a href="#projects" className="btn btn-brand">My Projects</a>
        </div>
      </section>

      {/* Projects */}
      <main className="container my-5" id="projects">
        <h2 className="text-center mb-5">MY PROJECTS</h2>
        <div className="row">
          {projects.map((p, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <ProjectCard item={p} />
            </div>
          ))}
        </div>

        {/* Contact */}
        <section className="my-5" id="contact">
          <h2 className="section-title">Contact Me</h2>
          <p className="mb-2">Email：you@example.com</p>
          <p>Phone：+886-9xx-xxx-xxx</p>
          {/* 想要表單可接 Formspree：<form action="https://formspree.io/f/xxxx" method="POST">... */}
        </section>
      </main>

      <Footer />
    </>
  );
}
