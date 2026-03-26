import type { WallpaperPropType } from "../../types/embla-carousel";
const cloud = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const ratioMap = {
    "original": { width: undefined, height: undefined },
    "16:9": { width: 1920, height: 1080 },
    "4:3": { width: 1600, height: 1200 },
    "1:1": { width: 1080, height: 1080 },
    "9:16": { width: 1080, height: 1920 },
};

export const getTransformedUrl = (wallpaper: WallpaperPropType, selectedRatio: keyof typeof ratioMap) => {
    if (selectedRatio === "original") return wallpaper.image_url;

    const { width, height } = ratioMap[selectedRatio];
    const base = `https://res.cloudinary.com/${cloud}/image/upload`;

    return `${base}/e_upscale:2,q_auto,e_sharpen,w_${width},h_${height},c_pad,b_auto/${wallpaper.public_id}.jpg`;
};