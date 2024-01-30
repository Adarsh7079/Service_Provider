import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data=[
  {
    img:`https://www.capgemini.com/wp-content/uploads/2022/04/Capgemini-Engineering_Products-and-systems-engineering.jpg?w=500&quality=90`
  }
  ,{
   img:`https://www.capgemini.com/wp-content/uploads/2022/04/Capgemini-Engineering_Digital-and-software.jpg?w=500&quality=90`
  }
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const Main = () => {
  const settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
      
   
    
  };
  return (
    <div className=' mx-[15%]'>
  
    <section className=' w-full h-[500px] mt-24'>
      <Slider {...settings}>
      {
        data.map((value)=>(
          <img src={value.img} className=' w-full h-[500px]'/>
        ))
      }
      </Slider>
    </section>

    <section className=' w-full mt-28 pb-10'>
      <h1 className=' underline text-7xl font-bold text-center'>Our Services</h1>
      <div className=' flex flex-wrap justify-between'>
        <div 
        
        className=' w-[300px] h-[300px] bg-red-300 rounded-md mt-10'>
          <img
          className=' w-full h-full rounded-md'
          src='https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI='
          />
        </div>
        <div 
        
        className=' w-[300px] h-[300px] bg-red-300 rounded-md mt-10'>
          <img
          className=' w-full h-full rounded-md'
          src='https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI='
          />
        </div>
        <div 
        
        className=' w-[300px] h-[300px] bg-red-300 rounded-md mt-10'>
          <img
          className=' w-full h-full rounded-md'
          src='https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI='
          />
        </div>
        <div 
        
        className=' w-[300px] h-[300px] bg-red-300 rounded-md mt-10'>
          <img
          className=' w-full h-full rounded-md'
          src='https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI='
          />
        </div>
     
      </div>
    </section>
  </div>
  )
}


export default Main