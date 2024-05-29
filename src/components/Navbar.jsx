import { Link } from "react-router-dom";

export default function Navbar(){
    return(
<nav class="bg-color-bg-marron text-white">
  <div class="flex flex-wrap items-center justify-between mx-auto p-4">
    <a class="">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Route-navegacion</span>
    </a>
    <div class="">
      <ul class="flex md:p-3 mt-2 space-x-8 md:mt-0 md:border-0 text-white">
        <li>
          <Link to="/" class="block py-2 px-3 text-white rounded md:hover:text-[#9FA6A1] md:p-0" aria-current="page">Inicio</Link>
        </li>
        <li>
          <Link to="/productos" class="block py-2 px-3 text-white rounded md:hover:text-[#9FA6A1] md:p-0">Productos</Link>
        </li>
        <li>
          <Link to="#" class="block py-2 px-3 text-white rounded md:hover:text-[#9FA6A1] md:p-0">Nosotros</Link>
        </li>
        <li>
          <Link to="#" class="block py-2 px-3 text-white rounded md:hover:text-[#9FA6A1] md:p-0">Contacto</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}