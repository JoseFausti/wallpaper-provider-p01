import type React from "react";
import { useContext } from "react";
import { WallpaperContext } from "../../context/WallpaperContext";
import type { WallpaperPropType } from "../../types/embla-carousel";

interface WallpaperCardProps {
  wallpaper: WallpaperPropType
}

const WallpaperCard: React.FC<WallpaperCardProps> = ({wallpaper}) => {

  const {handleSelectWallpaper, setIsModalOpen} = useContext(WallpaperContext);

  return (
    <div 
      className="relative group w-full overflow-hidden rounded-2xl cursor-pointer m-[8px_4px]"
      onClick={() => {
        handleSelectWallpaper(wallpaper.id);
        setIsModalOpen(true);
      }}
    >
      {/* Imagen */}
      <img
        src={wallpaper.image_url}
        alt={wallpaper.title || "Wallpaper"}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

      {/* Contenido overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">

        {/* Descripcion */}
        <h4 className="text-sm font-medium text-white truncate max-w-[70%]">
          {wallpaper.description}
        </h4>
      </div>
    </div>
  );
};

export default WallpaperCard;