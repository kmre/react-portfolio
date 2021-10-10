import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
// import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  // const [categories] = useState([
  //   {
  //     name: 'commercial',
  //     description: 'Photos of grocery stores, food trucks, and other commercial projects',
  //   },
  //   { name: 'portraits', description: 'Portraits of people in my life' },
  //   { name: 'food', description: 'Delicious delicacies' },
  //   { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  var selection;
  if (contactSelected) {
    selection = <ContactForm></ContactForm>
  } else if (projectSelected) {
    selection = <About></About>
  } else if (resumeSelected) {
    selection = <ContactForm></ContactForm>
  } else {
    selection = <About></About>
  }

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
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
      {/* <main>
        {!contactSelected ? (
          <>
            { <Gallery currentCategory={currentCategory}></Gallery> }
            {<About aboutSelected={aboutSelected}></About>}
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main> */}
    </div>
  );
}

export default App;
