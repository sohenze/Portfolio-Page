import { useState } from 'react';

//Media
import trackoUI from '../images/trackoUI.png';
import endlessTower from '../images/endlesstower.jpg'
import gameplay from '../images/gameplay.mp4'

//Icons
import { IoIosArrowDown } from 'react-icons/io';

const trackoLink = "https://github.com/AY2223S1-CS2103T-W15-3/tp";
const endlessTowerLink = "https://play.google.com/store/apps/details?id=com.Endevel.EndlessTower";

export const Projects = () => {
  const [state, setState] = useState(false);
  const toggle = () => {
      setState(!state);
  }

    return (
      <div className='Projects' id='Projects'>
        <h1> Projects </h1>
        <TrackO />
        <EndlessTower />

          
      </div>
    )
}

const TrackO = () => {
  const [state, setState] = useState(false);
  const toggle = () => {
      setState(!state);
  }

  return (
    <div className='ProjectSection'>
      <div className='ProjectTitle' onClick={toggle}>
        <h2> TrackO <IoIosArrowDown /></h2>
      </div>
      {state ?
        <div className='ProjectContent'>
          <div className='ProjectMedia'>
          <img style = {{width: "800px", height: undefined, aspectRatio: 7/4}} src = {trackoUI} alt = 'trackoUI'/>
          </div>
          <div className='ProjectDesc'>
            <p>
              TrackO is a command-line interface order and inventory manager for business owners written in Java and JavaFX. I was in the team of 5 that created
              this application and because it was my first exposure to software engineering,
              it was tough at first but I managed to learn a lot from it such as the
              use of revision control systems(Git, Github), software architecture, software engineering principles and testing.
              <br></br><a href = {trackoLink} target="_blank" rel="noreferrer">[Github]</a>
            </p>
          </div>
        </div> : null
      }
    </div>
  )
}

const EndlessTower = () => {
  const [state, setState] = useState(false);
  const toggle = () => {
      setState(!state);
  }

  return (
    <div className='ProjectSection'>
      <div className='ProjectTitle' onClick={toggle}>
        <h2> Endless Tower <IoIosArrowDown /></h2>
      </div>
      {state ?
        <div className='ProjectContent'>
          <div className='ProjectMedia'>
            <img style = {{width: "300px", height: undefined, aspectRatio: 2/4, paddingRight: 50}} src = {endlessTower} alt = 'endlesstower'/>
            <video style = {{width: "300px", height: undefined, aspectRatio: 2/4}} src = {gameplay} controls = 'controls'/>
          </div>
          <div className='ProjectDesc'>
            <p>
              EndlessTower is a mobile top-down 2D idle RPG game. The game has various features including powerups, stat progression and an auto-battle functionality!
              This was a solo project I did over the summer of 2022 using Unity. As I had no prior experience with game development,
              taking this project on was extremely
              challenging. Not only did I have to learn a new language(C#), I had to familiarise myself with the Unity API and
              balance the game mechanics and difficulty
              to keep it interesting throughout numerous levels. While it is far from being a polished game, I consider it a very good learning experience!
              <br></br><a href = {endlessTowerLink} target="_blank" rel="noreferrer">[Google Playstore]</a>
            </p>
          </div>
        </div> : null
      }
    </div>
  )
}