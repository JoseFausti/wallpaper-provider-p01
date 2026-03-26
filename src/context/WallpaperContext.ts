import React, { createContext } from "react";
import type { WallpaperPropType } from "../types/embla-carousel";

interface WallpaperContextProps {
    wallpapers: WallpaperPropType[], 
    loading: boolean,
    selectedWallpaper: WallpaperPropType | null,
    handleSelectWallpaper: (id: number) => void,
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const WallpaperContext = createContext<WallpaperContextProps>({
    wallpapers: [],
    loading: true,
    selectedWallpaper: null,
    handleSelectWallpaper: () => {},
    isModalOpen: false,
    setIsModalOpen: () => {}
});

