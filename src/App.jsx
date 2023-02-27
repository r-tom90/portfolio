import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import About from "./components/About";
import Work from "./components/Work/Work";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
