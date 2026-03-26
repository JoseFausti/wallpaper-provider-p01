import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="p-4 border-b border-white/10 flex justify-between">
      <div >
        <Link to="/" className="flex gap-2 items-center">
          <img src="/wallpaper.png" alt="" width={32} height={32} />
          <h1 className="font-semibold">Wallpaper Provider</h1>
        </Link>
      </div>
      <div>
        {innerWidth >= 768 ? (
        <>
          <Link to="/" className="px-3 py-1 hover:text-[#c441fc] transition">
            Home
          </Link>
          <Link to="/wallpapers" className="px-3 py-1 hover:text-[#c441fc] transition">
            Wallpapers
          </Link>
        </>
        ) : (
          <button className="px-3 py-1 hover:text-[#c441fc] transition">
            Menu
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
