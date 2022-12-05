import './App.css';

const user = {
  name: "Enze",
  email: "soh.enze@u.nus.edu",
  github: "https://github.com/sohenze",
  linkedin: "https://www.linkedin.com/in/enzesoh/"
};

const TrackO = "https://github.com/AY2223S1-CS2103T-W15-3/tp";
const EndlessTower = "https://play.google.com/store/apps/details?id=com.Endevel.EndlessTower";

const SLang = () => {
  return (
    <div className='SLang'>
      <h4>Languages</h4>
      <ul style={{margin: 0, paddingLeft: 20}}>
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
      <h4>Programming Languages</h4>
      <ul style={{margin: 0, paddingLeft: 20}}>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C (minimal)</li>
        <li>C# (minimal)</li>
      </ul>
    </div>
    
  )
}

const Tools = () => {
  return (
    <div className='Tools'>
      <h4>Tools</h4>
      <ul style={{margin: 0, paddingLeft: 20}}>
        <li>Git</li>
        <li>GitHub</li>
        <li>Unity</li>
        <li>ReactJS (minimal, this page was done in React)</li>
      </ul>
    </div>
    
  )
}

const Welcome = () => {
  return (
    <>
      <h1>Hello and welcome to my portfolio page!</h1>
    </>
  )
}

const AboutMe = () => {
  return (
    <>
      <header>
        <h2> About Me </h2>
      </header>
      <body>
        <p>
          My name is {user.name} and I'm a year 2 Computer Science major at the National University of Singapore. While I am
          <br></br>relatively inexeperienced, I am adaptable and always passionate about learning more! 
          <br></br>I hope the projects shown here will help show that :)
        </p>
      </body>
    </>
  )
}

const WhatIKnow = () => {
  return (
    <>
      <h2> What I Know </h2>
      <div className='WhatIKnow'>
        <SLang />
        <PLang />
        <Tools />
      </div>
    </>
  )
}

const Projects = () => {
  return (
    <>
      <header>
        <h2> Projects </h2>
      </header>
      <body>
        <header>
          <h3> TrackO </h3>
        </header>
        <body>
          <img style = {{width: "50%", height: "50%"}} src = {require('./images/trackoUI.png')} alt = 'trackoUI'/>
          <p>
            TrackO is a command-line interface order and inventory manager for business owners written in Java and JavaFX. I was in the team of 5 that created
            <br></br>this application and because it was my first exposure to software engineering,
            it was tough at first but I managed to learn a lot from it such as the
            <br></br>use of revision control systems(Git, Github), software architecture, software engineering principles and testing.
            <br></br><a href = {TrackO}>[Github]</a>.
          </p>
        </body>
      </body>
      <header>
        <h3> Endless Tower </h3>
      </header>
      <body>
        <img style = {{width: "14%", height: "14%", paddingRight: 50}} src = {require('./images/endlesstower.jpg')} alt = 'endlesstower'/>
        <video style = {{width: "14%", height: "14%"}} src = {require('./images/gameplay.mp4')} controls = 'controls'/>
        <p>
            EndlessTower is a mobile top-down 2D idle RPG game. The game has various features including powerups, stat progression and an auto-battle functionality!
            <br></br>This was a solo project I did over the summer of 2022 using Unity. As I had no prior experience with game development,
            taking this project on was extremely
            <br></br>challenging. Not only did I have to learn a new language(C#), I had to familiarise myself with the Unity API and
            balance the game mechanics and difficulty
            <br></br>to keep it interesting throughout numerous levels. While it is far from being a polished game, I consider it a very good learning experience!
            <br></br>(Plans to update and refine the game are in the works)
            <br></br><a href = {EndlessTower}>[Open Test]</a>
          </p>
      </body>
    </>
  )
}

const App = () => {
  return (
    <div className = "App"> 
      <Welcome />
      <AboutMe />
      <WhatIKnow />
      <Projects />
    </div>
  );
}

export default App;
