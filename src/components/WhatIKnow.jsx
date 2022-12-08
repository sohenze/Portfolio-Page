import { useState } from "react";

//Data
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
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(!state);
    }

    return (
      <div className='SLang'>
        <div className = 'SLangHeading' onClick={toggle}>
            <h3>Languages <IoIosArrowDown /></h3>
        </div>
        
        {state ? 
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
            </ul> : null
        }
      </div>
    )
  }
  
  const PLang = () => {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(!state);
    }

    return (
      <div className='PLang'>
        <div className = 'PLangHeading' onClick={toggle}>
            <h3>Programming Languages <IoIosArrowDown /></h3>
        </div>
        {state ? 
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
            </ul> : null
        }
      </div>
    )
  }
  
  const Tools = () => {
    const [state, setState] = useState(false);
    const toggle = () => {
        setState(!state);
    }

    return (
      <div className='Tools' onClick={toggle}>
        <div className = 'ToolsHeading'>
            <h3>Tools <IoIosArrowDown /></h3>
        </div>
        {state ? 
            <ul className = 'ToolsList'>
              {ToolsData.map((val, key) => {
                return (
                  <li key={key}> 
                      <div>
                          {val.name}
                      </div> 
                  </li>
                )
              })}
            </ul> : null
        }
      </div>
    )
  }