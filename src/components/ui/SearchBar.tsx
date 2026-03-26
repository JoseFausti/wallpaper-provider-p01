import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { WallpaperContext } from "../../context/WallpaperContext";
import { Search } from "lucide-react";

const SearchBar = () => {
  const { wallpapers } = useContext(WallpaperContext);

  const [params, setParams] = useSearchParams();

  // 🔹 valores actuales
  const q = params.get("q") || "";
  const cat = params.get("cat") || "all";

  // 🔹 categorías únicas
  const categories = [
    "all",
    ...new Set(
      wallpapers.flatMap((w) => w.categories || [])
    ),
  ];

  // 🔹 handlers
  const handleSearchChange = (value: string) => {
    const newParams = new URLSearchParams(params);

    if (value) newParams.set("q", value);
    else newParams.delete("q");

    setParams(newParams);
  };

  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(params);

    if (category === "all") newParams.delete("cat");
    else newParams.set("cat", category);

    setParams(newParams);
  };

  return (
    <div className="w-full flex flex-col gap-4 md:flex-row md:items-center md:gap-4">

      {/* 🔍 INPUT */}
      <div className="relative w-full md:flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />

        <input
          value={q}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search wallpapers..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 text-white
          placeholder:text-white/40 outline-none border border-white/10
          focus:border-white/30 transition"
        />
      </div>

      {/* 🏷️ CATEGORÍAS */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const isActive = cat === c || (c === "all" && !cat);

          return (
            <button
              key={c}
              onClick={() => handleCategoryChange(c)}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition
                ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
            >
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;