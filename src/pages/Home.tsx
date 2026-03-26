import EmblaCarrousel from "../components/ui/EmblaCarrousel";
import Loader from "../components/ui/Loader";
import WallpaperModal from "../components/ui/WallpaperModal";
import WallpaperCard from "../components/wallpaper/WallpaperCard";
import { useWallpapers } from "../hooks/useWallpapers";
import { shuffleArray } from "../lib/utils/arrayTools";

export default function Home() {
    const {wallpapers, loading, isModalOpen, selectedWallpaper} = useWallpapers();

    return (
        loading ? <Loader /> :
            isModalOpen && selectedWallpaper ? <WallpaperModal wallpaper={selectedWallpaper} /> :
            <>
                {/* Carousel View */}
                {wallpapers.length > 0 && (
                    <div className="bg-[linear-gradient(rgba(1,1,1,1)_80%,rgba(180,0,255,1)_130%)] pb-8">
                        <EmblaCarrousel slides={shuffleArray(wallpapers)} options={{ }} />
                    </div>
                )}
                {/* Wallpapers View */}
                <div className="flex flex-col gap-4 w-full min-h-screen">
                    <div className="mt-2 p-4">
                        <h2 className="text-2xl font-semibold border-b border-white pb-2">Wallpapers</h2>
                    </div>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-2">
                        {shuffleArray(wallpapers).map((el) => (
                            <div 
                                key={el.id}
                                className="mb-2 break-inside-avoid"
                            >
                                <WallpaperCard key={el.id} wallpaper={el} />
                            </div>
                        ))}
                    </div>
                </div>
            </>
    );
}

