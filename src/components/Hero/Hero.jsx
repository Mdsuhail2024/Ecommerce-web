import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageList = [
  {
    id: 1,
    title: "Upto 50% off on all Men's Wear",
    image: Image2,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quas possimus, autem officiis laudantium, repudiandae corrupti magni minus reprehenderit perspiciatis ab, libero distinctio. Incidunt quos nesciunt nostrum cumque corrupti laboriosam architecto voluptatem quis quisquam rerum voluptas ducimus sed voluptates velit explicabo mollitia hic labore, sint dignissimos voluptate est.similique.",
  },
  {
    id: 2,
    title: "Upto 30% off on all Women's Wear",
    image: Image1,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quas possimus, autem officiis laudantium, repudiandae corrupti magni minus reprehenderit perspiciatis ab, libero distinctio. Incidunt quos nesciunt nostrum cumque corrupti laboriosam architecto voluptatem quis quisquam rerum voluptas ducimus sed voluptates velit explicabo mollitia hic labore, sint dignissimos voluptate est.  similique.",
  },
  {
    id: 3,
    title: "70% of on all Products Sale",
    image: Image3,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quas possimus, autem officiis laudantium, repudiandae corrupti magni minus reprehenderit perspiciatis ab, libero distinctio. Incidunt quos nesciunt nostrum cumque corrupti laboriosam architecto voluptatem quis quisquam rerum voluptas ducimus sed voluptates velit explicabo mollitia hic labore, sint dignissimos voluptate est. similique.",
  },
];

const Hero = () => {
  var Settings = {
    dots: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseonHover: false,
    pauseonFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    
    <div className="w-full sm:min-h-[600px] mt-15 md:mt-20 min-h-[550px] bg-gray-100 dark:text-white  dark:bg-slate-950 relative overflow-hidden transition-all duration-3000 flex items-center">
      <div className="h-[700px] w-[700px] rounded-4xl bg-primary/40 shadow-2xl absolute -top-80 -right-5 rotate-[45deg]  "></div>
      <div className="container dark:text-slate-100 duration-100 ">
        <SlickSlider {...Settings}>
        {imageList.map((data) => (
          <div key={data.id}>
          <div  className="grid grid-cols-1 md:grid-cols-2 pt-0  ">
            <div className="flex flex-col justify-center gap-4 pt-14 sm:pt-0  text-center md:text-left  order-2 md:order-1  relative z-10 ">
              <h1 data-aos="zoom-out" data-duration="5000" className="text-5xl md:text-6xl lg:text-7xl font-bold">{data.title}</h1>
              <p data-aos="fade-up" data-duration="500" className="text-sm font-[450px]">{data.description}</p>
              <div>
                <button data-aos="fade-up" className=" bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full text-white">Order Now</button>
              </div>
            </div>
        
          <div className="flex justify-center items-center order-1 md:order-2 bg-red-40 ">
            <img data-aos="zoom-in" src={data.image} alt="Slider Image" className="w-[400px]" />
          </div>
          </div>
          </div>
        ))}
        </SlickSlider>
      </div>
    </div>
  )

}

export default Hero;
