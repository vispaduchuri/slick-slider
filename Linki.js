import React ,{useState} from 'react'
import Linkify from "react-linkify";

const WontDisplay=({Toggle})=>{
  if(Toggle === true)
  return (
    <>
    <br/>
    <Linkify>
    <u><span> http://random.org Linkify wrapped inside child</span></u>
    </Linkify>
    
    </>
  )
  else if(Toggle === false){
    return (
      <>
      <ul>
   <li> <u><span> http://google.org</span></u></li>
   <li> <u><span> http://google.com</span></u></li>
   <li> <u><span> http://falseState3.org</span></u></li>
   <li> <u><span> http://falseState4.org</span></u></li>
   <li> <u><span> http://falseState5.org</span></u></li>
   <li> <u><span> http://falseState6.org</span></u></li>    
    </ul>
    </>)
  }
}


const Linki =()=>{
  const [Toggle,setToggle] =useState(false)
  return (<>
  <br/>
    <Linkify>
direct text will show this in blue --> http://random.org
  </Linkify>
  
  <br />
  <br />



  <Linkify>
  <div>
    react-linkify
    <span>
      (https://github.com/tasti/react-linkify/)
    </span>
  </div>
  <div>
    React component to parse links (urls, emails, etc.) in text into clickable links
  </div>See source code at https://github.com/tasti/react-linkify/.
  <footer>
    Contact: text@gmail.org
  </footer>
</Linkify>

  <br/>
  <br />
<button onClick={()=>setToggle(!Toggle)}>CLICK ME TO TOGGLE </button>
  <br/>
  <br />


//What is a good solution to highlight even the text in WontDisplay component?
<Linkify >
    <WontDisplay Toggle={Toggle}/>
    hey http://google
  </Linkify>
  
  </>
  
  )
}

export default Linki;