import { ArrowDown } from "lucide-react";
function SeoSection() {
  return (
    <div className="bg-secondary text-white py-12 lg:py-[88px]">
      <div className="container mx-auto  px-4">
        <div className="md:flex justify-between items-center gap-10">
          <div className="mb-10 md:mb-0">
            <h5 className="text-seoHeaderSize bebas-neue-regular ">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
            </h5>
            <p className="mt-4 text-sm roboto-condensed-par ">
              Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
              Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur
              mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
            </p>
            <button className="mt-5 py-1 border-b border-white text-sm flex justify-between items-center gap-1">
              Rozwiń <ArrowDown size={18} strokeWidth={1.5} />
            </button>
          </div>
          <div>
            <h5 className="text-seoHeaderSize bebas-neue-regular ">
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
            </h5>
            <p className="mt-4 text-sm roboto-condensed-par ">
              Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
              Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur
              mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
            </p>
            <button className="mt-5 py-1 border-b border-white text-sm flex justify-between items-center gap-1">
              Rozwiń <ArrowDown size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeoSection;
