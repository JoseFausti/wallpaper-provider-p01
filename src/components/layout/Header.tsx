import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDisplayMenu = () => {
    setDisplayMenu(prev => !prev);
  }

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
          
          <div className="w-full h-full flex items-center justify-center">
            {displayMenu ? (
              <>
                <X 
                  size={24} 
                  className="hover:text-[#fc4141] hover:scale-105 transition" 
                  onClick={()=> {handleDisplayMenu()}}
                />
                <div className="absolute top-16 right-4 bg-black/80 backdrop-blur rounded-lg p-2 flex flex-col items-end z-50">
                  <Link to="/" className="block px-3 py-1 hover:text-[#c441fc] transition" onClick={()=> {handleDisplayMenu()}}>
                    Home
                  </Link>
                  <Link to="/wallpapers" className="block px-3 py-1 hover:text-[#c441fc] transition" onClick={()=> {handleDisplayMenu()}}>
                    Wallpapers
                  </Link>
                </div>
              </>
            ) : (
              <>
                <MenuIcon 
                  size={24} 
                  className="hover:text-[#c441fc] hover:scale-105 transition" 
                  onClick={()=> {handleDisplayMenu()}}
                />
              </>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
