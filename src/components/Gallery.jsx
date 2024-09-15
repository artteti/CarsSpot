import Carousel from "./Carousel";

const slides = [
  { id: 1, path: "/images-2.png" },
  { id: 2, path: "/images-1.png" },
  { id: 3, path: "/images.png" },
  { id: 4, path: "/images-2.png" },
  { id: 5, path: "/images-1.png" },
  { id: 6, path: "/images.png" },
];

function Gallery() {
  return (
    <div className="container px-4 pt-10 lg:py-20  mx-auto">
      <p className="blue-text">Prezentacja firmy</p>
      <h3 className="text-headerGallery bebas-neue-regular">
        Zobacz naszą Galerię zdjęć
      </h3>
      <div className="mt-8">
        <a href="#" className="mr-8 link underline text-primary">
          Samochody osobowe
        </a>
        <a href="#" className="mr-8 link">
          Samochody dostawcze
        </a>
      </div>
      <div className="py-10 lg:py-20 container">
        <Carousel autoSlide={true}>
          {slides.map((slides) => (
            <img key={slides.id} src={slides.path} className="w-1/2" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
