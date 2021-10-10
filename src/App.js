import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  var selection;
  if (contactSelected) {
    selection = <ContactForm></ContactForm>
  } else if (projectSelected) {
    selection = <Projects></Projects>
  } else if (resumeSelected) {
    selection = <Resume></Resume>
  } else {
    selection = <About></About>
  }

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}

      ></Nav>

      <main>
      {selection}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
