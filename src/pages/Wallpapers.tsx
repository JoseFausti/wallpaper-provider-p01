import { useSearchParams } from "react-router-dom";
import Loader from "../components/ui/Loader";
import SearchBar from "../components/ui/SearchBar";
import WallpaperCard from "../components/wallpaper/WallpaperCard"
import { useWallpapers } from "../hooks/useWallpapers"
import WallpaperModal from "../components/ui/WallpaperModal";
import { shuffleArray } from "../lib/utils/arrayTools";

const Wallpapers = () => {
  const {wallpapers, loading, isModalOpen, selectedWallpaper} = useWallpapers();
  const [params] = useSearchParams();

  const q = params.get("q") || "";
  const cat = params.get("cat") || "all";

  return (
    loading ? <Loader /> :
      isModalOpen && selectedWallpaper ? <WallpaperModal wallpaper={selectedWallpaper} /> :
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div>
              <SearchBar />
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-2 mt-8">
                {shuffleArray(wallpapers)
                  .filter((el) => ( el.title.toLowerCase().includes(q.toLowerCase())))
                  .filter((el) => ( cat === "all" || el.categories?.includes(cat)))                
                  .map((el) => (
                    <WallpaperCard key={el.id} wallpaper={el} />
                ))}
            </div>
        </div>
  ) 
}

export default Wallpapers
