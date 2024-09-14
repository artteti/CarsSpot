import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  // Go to the previous set of slides (2 at a time)
  const prev = () => setCurr(curr === 0 ? slides.length - 2 : curr - 2);

  // Go to the next set of slides (2 at a time)
  const next = () => setCurr(curr === slides.length - 2 ? 0 : curr + 2);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div className="overflow-hidden relative">
      {/* Container for sliding images */}
      <div
        className="flex justify-between items-center gap-4 lg:gap-10 transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${(curr / slides.length) * 100}%)` }}
      >
        {/* Display slides */}
        {slides}
      </div>

      {/* Navigation buttons 
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={30} strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={30} strokeWidth={1.5} />
        </button>
      </div>
      */}

      {/* Indicators */}
      <div className="p-10 lg:p-16 flex items-center justify-center gap-2 lg:gap-3">
        {Array.from({ length: Math.ceil(slides.length / 2) }).map((_, i) => (
          <div
            key={i}
            className={`transition-all w-2 h-2 rounded-full ${
              curr / 2 === i ? "bg-primary" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
