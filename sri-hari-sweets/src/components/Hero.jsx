import { useState, useEffect } from "react";
import slide1 from "../assets/images/Hero-img/01_slide.jpg";
import slide2 from "../assets/images/Hero-img/slide1.jpg";
import slide3 from "../assets/images/Hero-img/slide4.jpg";


const slides = [
  { id: 1,image: slide1  },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    // navbar height = h-16 → mt-16
    <section className="relative overflow-hidden mt-20">

      {/*-------------- SLIDER------------------ */}
      <div
        className="flex transition-transform duration-[2000ms] ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
  <div
  key={slide.id}

  // HERO HEIGHT -- Mobile: 45vh | Tablet: 50vh | Desktop: 65vh
  className="      
    min-w-full
     h-[45vh] sm:h-[50vh] md:h-[65vh]
    bg-no-repeat
    bg-center
    bg-cover
    relative
  "
  style={{
    backgroundImage: `url(${slide.image})`,
  }}
>

   
  </div>
))}

      </div>
    </section>
  );
}

export default Hero;
