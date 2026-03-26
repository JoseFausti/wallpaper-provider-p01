import Autoplay from "embla-carousel-autoplay";
import { useContext, useEffect } from "react";
import type { EmblaPropType } from "../../types/embla-carousel";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { useDotButton, usePrevNextButtons } from "../../hooks/useEmblaCarousel";
import { DotButton, NextButton, PrevButton } from "../../hooks/useEmblaCarouselTools";
import EmblaCarousellButtons from "./EmblaCarrouselButtons";
import { WallpaperContext } from "../../context/WallpaperContext";

const EmblaCarrousel = (props: EmblaPropType) => {

  const {handleSelectWallpaper, setIsModalOpen} = useContext(WallpaperContext);

  const { slides, options } = props;

  const [emblaRef, emblaApi]: UseEmblaCarouselType = useEmblaCarousel(
    options,
    [Autoplay({ delay: 20000 })]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay.play();
    return () => emblaApi.plugins().autoplay.stop();
  }, [emblaApi]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-[75vh] w-[75vw] overflow-hidden text-white border-transparent rounded-2xl">
        
        {/* Embla */}
        <div className="h-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">  
            {slides.map((el) => (
              <div
                key={el.id}
                className="relative min-w-full h-full shrink-0 group"
              >
                {/* Imagen */}
                <img
                  src={el.image_url}
                  alt={"Wallpaper"}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 z-10" />

                {/* Contenido */}
                <div className="relative p-8 z-10 h-full w-full flex flex-col justify-end items-end px-6 md:px-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="max-w-xl flex flex-col gap-5">
                      <EmblaCarousellButtons 
                        actions={{ 
                          wallpaper: el, 
                          handleSelectWallpaper, 
                          setIsModalOpen 
                        }} 
                      />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLES */}
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="absolute w-10 h-10 flex items-center left-2 md:left-5 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full backdrop-blur border hover:scale-105 cursor-pointer transition-all"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="absolute w-10 h-10 flex items-center right-2 md:right-5 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-2 md:p-3 rounded-full backdrop-blur border hover:scale-105 cursor-pointer transition-all"
        />

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2 z-20">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarrousel;