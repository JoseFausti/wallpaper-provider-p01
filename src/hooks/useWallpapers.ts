import { useContext } from "react";
import { WallpaperContext } from "../context/WallpaperContext";

export const useWallpapers = () => useContext(WallpaperContext);