import { useContext, useEffect, useState } from "react";
import { X, Download } from "lucide-react";
import { WallpaperContext } from "../../context/WallpaperContext";
import { getTransformedUrl, ratioMap } from "../../lib/utils/imageTools";
import type { WallpaperPropType } from "../../types/embla-carousel";

interface Props {
  wallpaper: WallpaperPropType;
}

const WallpaperModal = ({ wallpaper }: Props) => {
  const { setIsModalOpen } = useContext(WallpaperContext);

  const [selectedRatio, setSelectedRatio] = useState<keyof typeof ratioMap>("original");
  const [isDownloading, setIsDownloading] = useState(false);

  // 🔒 Lock scroll + ESC
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setIsModalOpen]);

  // ⬇️ Download
  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const url = getTransformedUrl(wallpaper, selectedRatio);

      const response = await fetch(url);
      const blob = await response.blob();

      const link = document.createElement("a");
      const objUrl = URL.createObjectURL(blob);

      const ext = wallpaper.image_url.split(".").pop() || "jpg";

      link.href = objUrl;
      link.download = `${wallpaper.description || "wallpaper"}-${selectedRatio}.${ext}`;
      link.click();

      URL.revokeObjectURL(objUrl);
    } catch (e) {
      console.error(e);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        
        <div className="relative w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden">

            {/* ❌ Close */}
            <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-50 bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur"
            >
            <X size={18} />
            </button>

            {/* 🖼️ IMAGE BACKGROUND */}
            <img
            src={wallpaper.image_url}
            alt={wallpaper.title}
            className="absolute inset-0 w-full h-full object-cover"
            />

            {/* 🌑 OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20" />

            {/* 🎛️ PANEL (INDEPENDIENTE) */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-4 z-10">
            
            {/* CONTENIDO */}
            <div className="max-w-2xl">
                <h2 className="text-xl md:text-2xl font-semibold text-white wrap-break-word">
                {wallpaper.title}
                </h2>
            </div>

            {/* RATIOS */}
            <div className="flex gap-2 overflow-x-auto pb-1">
                {Object.keys(ratioMap).map((r) => (
                <button
                    key={r}
                    onClick={() => setSelectedRatio(r as keyof typeof ratioMap)}
                    className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap backdrop-blur-md
                    ${
                        selectedRatio === r
                        ? "bg-white text-black"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                >
                    {r}
                </button>
                ))}
            </div>

            {/* ACTION BAR */}
            <div className="flex items-center justify-between bg-black/40 backdrop-blur-xl p-4 rounded-xl">
                
                <div>
                <p className="text-xs text-white/60">
                    {selectedRatio === "original" ? "Original" : selectedRatio}
                </p>
                <p className="text-sm font-medium text-white">
                    Ready to download
                </p>
                </div>

                <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-xl font-medium
                hover:bg-gray-200 transition active:scale-95 disabled:opacity-50"
                >
                <Download size={16} />
                {isDownloading ? "Downloading..." : "Download"}
                </button>
            </div>
            </div>

        </div>
    </div>
  );
};

export default WallpaperModal;