import React from 'react'
import SlickSlider from "react-slick"
import Shirt1 from "../../assets/testomonials/plane shiirt.webp"
import Shirt2 from "../../assets/testomonials/print-shirtt.webp"
import Shirt3 from "../../assets/testomonials/cheack girl shirt.webp"
import Kurti1 from "../../assets/testomonials/red-kurti.webp"
import Kurti2 from "../../assets/testomonials/brown.webp"
const FeedbackData = [
    {
        id: 1,
        brand: "Netplay",
        about: "The brand Netplay stands for affordable and stylish casual wear for men. Smart shirts, cool T-shirts, chic trousers and pants styles. Netplay stands for affordable and stylish casual wear for men.",
        img: Shirt1, 
    },
    {
        id: 2,
        brand: "YOUSTA",
        about: "The brand Netplay stands for affordable and stylish casual wear for men. Smart shirts, cool T-shirts, chic trousers and pants styles. Netplay stands for affordable and stylish casual wear for men.",
        img: Shirt2, 
    },
    {
        id: 3,
        brand: "Netplay",
        about: "The brand Netplay stands for affordable and stylish casual wear for men. Smart shirts, cool T-shirts, chic trousers and pants  styles. Netplay stands for affordable and stylish casual wear for men.",
        img: Kurti2, 
    },
    {
        id: 4,
        brand: "SIYAHI",
        about: "The brand Netplay stands for affordable and stylish casual wear for men. Smart shirts, cool T-shirts, chic trousers and pantse styles. Netplay stands for affordable and stylish casual wear for men.",
        img: Kurti1, 
    },
    {
        id: 5,
        brand: "KB TEAM SPIRIT",
        about: "The brand Netplay stands for affordable and stylish casual wear for men. Smart shirts, cool T-shirts, chic trousers and pants styles. Netplay stands for affordable and stylish casual wear for men.",
        img: Shirt3, 
    },
]

const Tesomonials = () => {
    var Settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        // dotsClass: "slick-dots custom-dots",
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1, 
                  infinite: true,
                },
              },
          
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          }
        ],
      };

  return (
    <div className='bg-white dark:bg-slate-900 dark:text-white'>
        <div  className="container py-18">
            <div data-aos="fade-up" className=" text-center">
                <p className='text-primary text-sm'>What our customers are saying</p>
                <h1 className='text-4xl font-bold'>Testomonials</h1>
                <p className='text-sm text-gray-400 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, magni qui assumenda neque consequuntur libero ipsam dolore hic obcaecati. Totam, perspiciatis ut!</p>
            </div>

            <SlickSlider {...Settings} className='mt-18' >     
                {FeedbackData.map((data) => (
                   <div data-aos="zoom-in" key={data.id}>
                    <div className= "max-w-[420px] bg-primary/10 dark:bg-slate-800 shadow-xl flex flex-col text-center gap-5 mx-5 py-6 px-4 rounded-xl">
                        <img src={data.img} alt="Feedback Image" className='max-w-[150px] rounded-md object-cover mx-auto bg-secondary/10' />
                        <p className='text-center text-slate-400 text-xs ' >{data.about}</p>
                        <p className='text-xl font-bold ' >{data.brand}</p>
                        </div>
                        </div>
                ))}
             
            </SlickSlider>
            
        </div>

    </div>
    
  )
}

export default Tesomonials