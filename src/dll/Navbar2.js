// import K from '../Aset/Katech.jpeg'


export default function Example() {
  return (
  <>      
   
   
   <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <div>
                    <a class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                </div>
                
                {/* <!-- Mobile menu button --> */}
                <div class="flex md:hidden">
                    <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div class="items-center md:flex">
                <div class="flex flex-col md:flex-row md:mx-6 md:space-x-3">
                    <a class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Home</a>

                    <div class="dropdown dropdown-hover md:dropdown-right md:dropdown-hover">
                        <label class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400" href="#">Tutorial</label>
                        <ul class="dropdown-content menu bg-gray-400 rounded-box w-auto -ml-5 -mt-4">
                        <li><a class="hover:text-gray-800">Andorid</a></li>
                        <li><a class="hover:text-gray-800">Windows</a></li>
                        <li><a class="hover:text-gray-800">macOS</a></li>
                        <li><a class="hover:text-gray-800">Linux</a></li>
                        <li><a class="hover:text-gray-800">Internet</a></li>
                        </ul>
                    </div>


                    <a class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Shop</a>
                    <a class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Contact</a>
                    <a class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">About</a>
                </div>
            </div>
        </div>
    </nav>


  </>

  )
}