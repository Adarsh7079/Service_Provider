import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {SearchUser} from "../index"


const data=[
  {
    img:`https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI=`,
    workerType:`electrician`
  },
  {
    img:`https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI=`,
    workerType:`plumber`
  }   , {
    img:`https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI=`,
    workerType:`electrician`
  },
  {
    img:`https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI=`,
    workerType:`plumber`
  } 
  , {
    img:`https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI=`,
    workerType:`electrician`
  },
  {
    img:`https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI=`,
    workerType:`plumber`
  }   , {
    img:`https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI=`,
    workerType:`electrician`
  },
  {
    img:`https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI=`,
    workerType:`plumber`
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
]
const searchdata=[];
const User = () => {
  const settings = {
    dots:false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      
  };
  return (
    <div className=" px-[15%]">
      <div className="mt-24">
        {
            searchdata.length===0 ? (<SearchUser/>):( <section className=" w-full mt-28 ">
            <h1 className=" underline text-7xl font-bold text-center pb-10">
              Our Services
            </h1>
              <Slider {...settings} className=" slick-sliders" >
              {
                data.map((value)=>(
                <div className="   ">
                    <img src={value.img} className=' '/>
                </div>
                ))
              }
              </Slider>
      
          </section>)
        }
      </div>
     
    </div>
  );
};

export default User;
