import type { WallpaperPropType } from "../../types/embla-carousel";

interface EmblaCarousellButtonsProps {
    actions: {
        wallpaper: WallpaperPropType
        handleSelectWallpaper: (id: number) => void,
        setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    }
}

const EmblaCarousellButtons: React.FC<EmblaCarousellButtonsProps> = ({ actions }) => {
    const { 
        wallpaper, 
        handleSelectWallpaper, 
        setIsModalOpen 
    } = actions;

    return (
        <>
            <div className="mt-5 flex gap-3 flex-wrap">
                <button 
                    className="bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-200 hover:scale-105 transition cursor-pointer"
                    onClick={() => {
                        handleSelectWallpaper(wallpaper.id);
                        setIsModalOpen(true);
                    }}
                >
                    Download
                </button>
            </div>
        </>
    )
}

export default EmblaCarousellButtons
