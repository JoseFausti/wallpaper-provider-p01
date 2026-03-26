import { useEffect, useState } from "react"
import { WallpaperContext } from "../context/WallpaperContext"
import type { WallpaperPropType } from "../types/embla-carousel"
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const WallpaperProvider = ({ children }: { children: React.ReactNode }) => {

    const [wallpapers, setWallpapers] = useState<WallpaperPropType[]>([]);
    const [selectedWallpaper, setSelectedWallpaper] = useState<WallpaperPropType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWallpapers = async () => {
            const { data, error } = await supabase
            .from("wallpapers")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(50);

            if (error) {
                navigate("/error");
                setLoading(false);
            };
            if (data) {
                setWallpapers(data);
                setLoading(false);
            }
        }
        fetchWallpapers();
    }, [navigate]);

    const handleSelectWallpaper = (id: number) => setSelectedWallpaper(wallpapers.find((wallpaper) => wallpaper.id === id) || null);

  return (
    <WallpaperContext.Provider value={{
        wallpapers, 
        loading,

        selectedWallpaper,
        handleSelectWallpaper,

        isModalOpen,
        setIsModalOpen
    }}>
        {children}
    </WallpaperContext.Provider>
  )
}

export default WallpaperProvider
