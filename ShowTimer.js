import React, { useState, useEffect } from 'react'
const ShowTimer = (props) => {
  const [adTime, setAdTime] = useState(10)

  useEffect(() => {
    {console.log(props)}
    if( adTime!== 0 && props.state ===  true)
    {
    const timer = window.setInterval(() => {
    setAdTime(adTime -1 )
    }, 1000);
    return () => {
      window.clearInterval(timer);
      console.log('why is return executed if i havent unmounted the component?')
    }
    }
  }, [adTime,props.state]);

return (<>{adTime}</>);
}



export default ShowTimer;