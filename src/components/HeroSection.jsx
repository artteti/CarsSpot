import hero from "../assets/hero.png";
import herowaves from "../assets/waves.svg";
const HeroSection = () => {
  return (
    <div className="container px-4 py-12 lg:py-32 mx-auto lg:h-[51.563rem]">
      <h1 className="bebas-neue-regular text-headerhero">
        Sprzedajemy samochody <br />z europy
      </h1>
      <p className="test-base roboto-condensed-par my-8">
        Kup komfortowy pojazd, aby każda podróż <br />
        była wyjątkowym przeżyciem.
      </p>
      <div>
        <button className="btn-primary">Zobacz zdjęcia</button>
        <button className="btn-outline ml-6">Zadzwoń do nas</button>
      </div>
      <img
        className="hidden lg:block lg:w-[35rem] lg:absolute lg:-top-20 lg:right-12 xl:w-[41.75rem]"
        src={herowaves}
        alt=""
      />
      <img
        className="hidden lg:block lg:w-[60rem] lg:absolute lg:bottom-32 lg:right-0 xl:w-[66.5rem] z-40"
        src={hero}
        alt=""
      />
    </div>
  );
};

export default HeroSection;
