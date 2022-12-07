import './App.css';
import Sidebar from './components/Sidebar';

const user = {
  firstName: "Enze",
  lastname: "Soh",
  email: "soh.enze@u.nus.edu",
  github: "https://github.com/sohenze",
  linkedin: "https://www.linkedin.com/in/enzesoh/"
};

const TrackO = "https://github.com/AY2223S1-CS2103T-W15-3/tp";
const EndlessTower = "https://play.google.com/store/apps/details?id=com.Endevel.EndlessTower";

const SLang = () => {
  return (
    <div className='SLang'>
      <h3>Languages</h3>
      <ul style={{margin: 0, paddingLeft: 0, fontSize: '19px', listStyle: 'none'}}>
        <li>English</li>
        <li>Chinese</li>
        <li>Japanese (conversational)</li>
      </ul>
    </div>
  )
}

const PLang = () => {
  return (
    <div className='PLang'>
      <h3>Programming Languages</h3>
      <ul style={{margin: 0, paddingLeft: 0, fontSize: '19px', listStyle: 'none'}}>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C (somewhat)</li>
        <li>C# (somewhat)</li>
      </ul>
    </div>
    
  )
}

const Tools = () => {
  return (
    <div className='Tools'>
      <h3>Tools</h3>
      <ul style={{margin: 0, paddingLeft: 0, fontSize: '19px', listStyle: 'none'}}>
        <li>Git</li>
        <li>GitHub</li>
        <li>Unity</li>
        <li>ReactJS (somewhat, this page was done with React)</li>
      </ul>
    </div>
    
  )
}

const Welcome = () => {
  return (
    <div id='Welcome'>
      <h1>Hello and welcome to my portfolio page!</h1>
    </div>
  )
}

const AboutMe = () => {
  return (
    <div id='AboutMe'>
      <h1> About Me </h1>
      <p style = {{fontSize: '20px'}}>
        My name is {user.firstName} and I'm a year 2 Computer Science major at the National University of Singapore. 
        <br></br>While I am relatively inexeperienced, I am adaptable and always passionate about learning more! 
        <br></br>I hope the projects here will help show that :)
      </p>
    </div>
  )
}

const WhatIKnow = () => {
  return (
    <div id='WhatIKnow'>
      <h1> What I Know </h1>
      <div className='WhatIKnow'>
        <SLang />
        <PLang />
        <Tools />
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div id='Projects'>
      <h1> Projects </h1>
        <h2> TrackO </h2>
        <img style = {{width: "800px", height: undefined, aspectRatio: 7/4}} src = {require('./images/trackoUI.png')} alt = 'trackoUI'/>
        <p style = {{fontSize: '18px'}}>
          TrackO is a command-line interface order and inventory manager for business owners written in Java and JavaFX. I was in the team of 5 that created
          <br></br>this application and because it was my first exposure to software engineering,
          it was tough at first but I managed to learn a lot from it such as the
          <br></br>use of revision control systems(Git, Github), software architecture, software engineering principles and testing.
          <br></br><a href = {TrackO} target="_blank" rel="noreferrer">[Github]</a>.
        </p>
        <h2> Endless Tower </h2>
        <img style = {{width: "300px", height: undefined, aspectRatio: 2/4, paddingRight: 50}} src = {require('./images/endlesstower.jpg')} alt = 'endlesstower'/>
        <video style = {{width: "300px", height: undefined, aspectRatio: 2/4}} src = {require('./images/gameplay.mp4')} controls = 'controls'/>
        <p style = {{fontSize: '18px'}}>
            EndlessTower is a mobile top-down 2D idle RPG game. The game has various features including powerups, stat progression and an auto-battle functionality!
            <br></br>This was a solo project I did over the summer of 2022 using Unity. As I had no prior experience with game development,
            taking this project on was extremely
            <br></br>challenging. Not only did I have to learn a new language(C#), I had to familiarise myself with the Unity API and
            balance the game mechanics and difficulty
            <br></br>to keep it interesting throughout numerous levels. While it is far from being a polished game, I consider it a very good learning experience!
            <br></br>(Plans to update and refine the game are in the works)
            <br></br><a href = {EndlessTower} target="_blank" rel="noreferrer">[Open Test]</a>
        </p>
    </div>
  )
}

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
