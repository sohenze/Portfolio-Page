import {UserData} from "../data/UserData"

export const AboutMe = () => {
    return (
      <div id='AboutMe'>
        <h1> About Me </h1>
        <p style = {{fontSize: '20px'}}>
          My name is {UserData.firstName} and I'm a year 2 Computer Science major at the National University of Singapore. 
          <br></br>While I am relatively inexeperienced, I am adaptable and always passionate about learning more! 
          <br></br>I hope the projects here will help show that :)
        </p>
      </div>
    )
}