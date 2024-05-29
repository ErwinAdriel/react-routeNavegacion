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
          <a href="#" class="block py-2 px-3 text-white rounded md:hover:text-[#9FA6A1] md:p-0" aria-current="page">Inicio</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white rounded md:hover:text-[#9FA6A1] md:p-0">Productos</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white rounded md:hover:text-[#9FA6A1] md:p-0">Nosotros</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white rounded md:hover:text-[#9FA6A1] md:p-0">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}