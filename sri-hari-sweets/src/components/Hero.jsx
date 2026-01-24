import { useState, useEffect } from "react";
import slide1 from "../assets/images/Hero-img/01_slide.jpg";
import slide2 from "../assets/images/Hero-img/slide1.jpg";
import slide3 from "../assets/images/Hero-img/slide4.jpg";

const slides = [
  { id: 1, image: slide1 },
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
    <section
      className="
        relative
        w-screen
        overflow-hidden
        pt-16
        h-[45vh]
        sm:h-[55vh]
        md:h-[70vh]
        lg:h-[85vh]
        xl:h-screen
      "
    >
      {/* SLIDER */}
      <div
        className="grid grid-flow-col h-full transition-transform duration-[2000ms] ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-screen h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: "50% 35%",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
