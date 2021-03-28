import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <a href="/" className="text-blue-500 hover:text-blue-600 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Home">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 3000 3000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1200 2544 c-639 -49 -1131 -527 -1190 -1159 -49 -533 253 -1047 745 -1267 172 -78 330 -111 525 -111 667 0 1208 494 1270 1158 60 650 -396 1244 -1043 1359 -89 16 -235 25 -307 20z m-256 -644 c88 -44 90 -50 97 -293 6 -195 16 -267 37 -267 15 0 119 114 222 245 115 145 261 299 302 321 44 23 121 18 145 -8 55 -60 99 -209 143 -478 47 -285 74 -683 51 -739 -18 -43 -64 -61 -157 -61 -90 0 -170 22 -215 59 -41 34 -48 76 -49 276 0 156 -9 228 -28 247 -16 16 -67 -37 -215 -220 -242 -301 -299 -352 -388 -352 -31 0 -55 6 -72 20 -79 62 -165 477 -198 953 -14 204 -10 259 21 292 29 30 44 33 160 32 80 -2 103 -6 144 -27z" />
                </svg>
              </a>
          </div>

          

        </div>
      </div>
    </header>
  );
}

export default Header;
