import React, {useState} from 'react'

const Timer = (props)=>{
const [timer,setTimer] =useState(10)
if(props.state === true && timer!== 0)
{
  setTimeout(()=> {setTimer(timer -1)},1000)
}

return(
  <>
  {timer}
  </>

)
}

export default Timer;