import './App.css';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import Sidebar from './components/Sidebar';
import { Welcome } from './components/Welcome';
import { WhatIKnow } from './components/WhatIKnow';

const App = () => {
  return (
    <div className = "App">
      <div className='Content'>
        <Welcome />
        <AboutMe />
        <WhatIKnow />
        <Projects />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
