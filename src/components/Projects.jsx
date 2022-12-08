//Media
import trackoUI from '../images/trackoUI.png';
import endlessTower from '../images/endlesstower.jpg'
import gameplay from '../images/gameplay.mp4'

const TrackO = "https://github.com/AY2223S1-CS2103T-W15-3/tp";
const EndlessTower = "https://play.google.com/store/apps/details?id=com.Endevel.EndlessTower";

export const Projects = () => {
    return (
      <div id='Projects'>
        <h1> Projects </h1>
          <h2> TrackO </h2>
          <img style = {{width: "800px", height: undefined, aspectRatio: 7/4}} src = {trackoUI} alt = 'trackoUI'/>
          <p style = {{fontSize: '18px'}}>
            TrackO is a command-line interface order and inventory manager for business owners written in Java and JavaFX. I was in the team of 5 that created
            <br></br>this application and because it was my first exposure to software engineering,
            it was tough at first but I managed to learn a lot from it such as the
            <br></br>use of revision control systems(Git, Github), software architecture, software engineering principles and testing.
            <br></br><a href = {TrackO} target="_blank" rel="noreferrer">[Github]</a>.
          </p>
          <h2> Endless Tower </h2>
          <img style = {{width: "300px", height: undefined, aspectRatio: 2/4, paddingRight: 50}} src = {endlessTower} alt = 'endlesstower'/>
          <video style = {{width: "300px", height: undefined, aspectRatio: 2/4}} src = {gameplay} controls = 'controls'/>
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