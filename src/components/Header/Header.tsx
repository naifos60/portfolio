import { useState } from "react";

const logoRs = ("./assets/images/logoRs.webp") as string;
const menu = ("./assets/images/menu.svg") as string;
const cross = ("./assets/images/cross.svg") as string;



function Header(){
 const [open, setOpen] = useState('hidden')

 function toggleNav(){
  const toggleMenuBtn = document.querySelector("#menu-toggler")!;
  const toggleMenuImg = document.querySelector("#menu-toggler img")!;
  const mainNavlist = document.querySelector("#main-navlist")!;

  if(mainNavlist.classList.contains("hidden")){
      setOpen('null')
      toggleMenuImg.setAttribute("src", cross);
      toggleMenuBtn.setAttribute("aria-expanded", "true");
    }
    else{
        setOpen('hidden')
        toggleMenuImg.setAttribute("src", menu);
        toggleMenuBtn.setAttribute("aria-expanded", "false"); 
    }
}

    return(
<header>
    <nav className="bg-white z-50 fixed top-0 w-full shadow-lg shadow-[hsl(218,81%,75%)]">
      <div
        id="main-nav"
        className="bg-white max-w-3xl mx-auto p-4 flex items-center justify-between flex-wrap  md:mx-0 md:max-w-full"
      >
        <a
          href="/"
          aria-label="Accueil du portfolio"
          className="text-lg lg:text-xl"
        >
         <img src={logoRs} alt="logo du développeur" className="w-8 h-8 "/>
        </a>
        <button
          aria-controls="main-navlist"
          aria-expanded="false"
          id="menu-toggler"
          className="cursor-pointer w-7 md:hidden"
          onClick={toggleNav}
        >
          <img
            width="28"
            height="28"
            src={menu}
            alt="Ouvrir et fermer le menu"
            onClick={toggleNav}
          />
        </button>
        <ul
          id="main-navlist"
          className={`${open} bg-white text-center w-full pt-4 text-gray-800 md:w-auto md:block md:pt-0`}
          onClick={toggleNav}
        >
          <li className="block py-3 md:inline md:py-0 md:mr-6">
            <a
              href="/#acceuil"
              className="text-sm uppercase font-semibold hover:text-rose-600 "
              onClick={toggleNav}
              >Accueil
            </a>
          </li>
          <li className="block py-3 md:inline md:py-0 md:mr-6">
            <a
              href="/#description"
              className="text-sm uppercase font-semibold hover:text-rose-600"
              onClick={toggleNav}
              >Présentation
            </a>
          </li>
          <li className="block py-3 md:inline md:py-0 md:mr-6">
            <a href="/#competences"
              className="text-sm uppercase font-semibold hover:text-rose-600"
              onClick={toggleNav}
              >Compétences
            </a>
          </li>
          <li className="block py-3 md:inline md:py-0 md:mr-6">
            <a
              href="/#projets"
              className="text-sm uppercase font-semibold hover:text-rose-600"
              onClick={toggleNav}
              >Projets
            </a>
          </li>
          <li className="block py-3 md:inline md:py-0">
            <a
              href="/#contact"
              className="text-sm uppercase font-semibold hover:text-rose-600"
              onClick={toggleNav}
              >Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
</header>)
}

export default Header