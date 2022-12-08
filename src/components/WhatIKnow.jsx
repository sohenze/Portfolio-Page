import { PLangData } from "../data/PLangData";
import { SLangData } from "../data/SLangData";
import { ToolsData } from "../data/ToolsData";

//Icons
import { IoIosArrowDown } from'react-icons/io';

export const WhatIKnow = () => {
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

const SLang = () => {
    return (
      <div className='SLang'>
        <div className = 'SLangHeading'>
            <h3>Languages <IoIosArrowDown /></h3>
        </div>
        <ul className = 'SLangList'>
          {SLangData.map((val, key) => {
            return (
              <li key={key}> 
                  <div>
                      {val.name}
                  </div> 
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  
  const PLang = () => {
    return (
      <div className='PLang'>
        <div className = 'PLangHeading'>
            <h3>Programming Languages <IoIosArrowDown /></h3>
        </div>
        <ul className = 'PLangList'>
          {PLangData.map((val, key) => {
            return (
                <li key={key}> 
                    <div>
                        {val.name}
                    </div> 
                </li>
            )
          })}
        </ul>
      </div>
      
    )
  }
  
  const Tools = () => {
    return (
      <div className='Tools'>
        <div className = 'ToolsHeading'>
            <h3>Tools <IoIosArrowDown /></h3>
        </div>
        <ul className='ToolsList'>
          {ToolsData.map((val, key) => {
            return (
              <li key={key}> 
                  <div>
                      {val.name}
                  </div> 
              </li>
            )
          })}
        </ul>
      </div>
      
    )
  }