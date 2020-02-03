import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlider =(props)=>{
  const[rowData,setRowData]=useState([])

  const [slideIndex,setIndex]=useState(0)
const [end,setEnd]=useState(0)

useEffect(()=>{

  axios.get(`https://randomuser.me/api/?results=6`)
  .then(res=>res.data.results)
  .then(res=>setRowData(rowData.concat(res)))
  .catch(err=> console.log(err))
},[end])



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

if(rowData.length>0)
{
return(
  <>
   <div style={{ backgroundColor: "green", height: "140px" }}>
          <Slider {...settings} >
          {rowData.map(i=>(
            <div>
             <img src={i.picture.large}/>
             </div>
          ))}
          </Slider>
          </div>
 <br/>
 <br/>
KEEP AN EYE ON THIS TEXT WHILE SCROLLING
 <br/>

   <div style={{ backgroundColor: "green", height: "140px" }}>
          <Slider {...settings} >
          {rowData.map(i=>(
            <div>
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