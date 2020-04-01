import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
const ReactSlider =(props)=>{
  const sliderRef = useRef()
  const[rowData,setRowData]=useState([])

  const [slideIndex,setIndex]=useState(0)
const [end,setEnd]=useState(0)

useEffect(()=>{
    window.addEventListener('wheel', (e)=>handleScroll(e));

  axios.get(`https://randomuser.me/api/?results=6`)
  .then(res=>res.data.results)
  .then(res=>setRowData(rowData.concat(res)))
  .catch(err=> {})
  return ( ()=>{
    window.removeEventListener('wheel',(e)=>handleScroll(e));
  })
},[end])

const handleScroll =(e) =>{
  if(e.deltaX >0)
  {
sliderRef && sliderRef.current.slickPrev()

  }
  else if(e.deltaX < 0)
  {
sliderRef && sliderRef.current.slickNext()
  }
}


  const settings = {
       arrows: true,
    infinite: false,
    swipe: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
        afterChange: current => {
      setEnd(current);
    }
  }
const mouseHover = (e)=>{
   e.target.classList.add('someClassNameYouWantedToAdd')
  var wTile =e.target.parentNode
    wTile.className = wTile.className + " yeah";
    console.log(e.target.parentNode)
}
const mouseExit= (e)=>{
   e.target.classList.remove('someClassNameYouWantedToAdd')
}
if(rowData.length>0)
{
return(
  <>
   <div className='unique-slider'>
          <Slider {...settings} ref={sliderRef}>
          {rowData.map((i,index)=>(
            <div className="unique-image" key={index} onMouseEnter={(e)=> mouseHover(e)} onMouseOut={(e)=> mouseExit(e)}>
             <img src={i.picture.large}/>
             </div>
          ))}
          </Slider>
          </div>
 <br/>
  </>
)
}
else
{
  return(<></>)
}

}
export default ReactSlider;