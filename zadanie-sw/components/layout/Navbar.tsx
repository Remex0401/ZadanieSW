import { FC } from 'react';
import { Checkbox } from '../ui/Checkbox';
import { Button } from '../ui/Button';


export const Navbar: FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white">
            <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-8 flex mx-auto max-w-9/10">
              
              {/* Logo */}
              <div className="flex justify-between items-center w-full sm:contents order-1 sm:order-none">
                <div className="flex-shrink-0">
                  <img src="/logo.png" 
                      alt="Logo" 
                      className=" h-10 w-auto" 
                      />
                </div>
                {/* Mobile login button */}
                <div className="sm:hidden">
                    <Button size="small" className="bg-white text-blue-500 border-2" ariaLabel="Log in to your account" children="Log in" />
                </div>
              </div>
              
              {/* Filters */}
              <div className="flex flex-col sm:items-center order-3 sm:order-2 sm:flex-row md:pl-5 sm:pl-3 lg:pl-25">
                <fieldset className="flex sm:items-center order-2 sm:order-none p-2">
                  <legend className="sr-only">Filter options</legend>
                  <label className="inline-flex items-center cursor-pointer space-x-2 sm:pr-1">
                    <Checkbox />
                    <span className="text-gray-700 text-1xl">Active</span>
                  </label>

                  <label className="inline-flex items-center cursor-pointer space-x-2 lg:pl-5">
                    <Checkbox />
                    <span className="text-gray-700 text-1xl">Promo</span>
                    </label>
                  </fieldset>
                
                {/* Search bar*/}
                <form role="search"
                      className="flex sm:items-center sm:ml-2 w-full">
                <div className="relative flex-shrink-0 w-full">
                  <label htmlFor="search-input" className="sr-only">Search products</label>        
                  <input type="search" 
                        placeholder="Search" 
                        className="border-2 border-gray-300 rounded-lg
                        px-3 py-3 w-full
                        sm:px-4 sm:py-3
                        md:py-4
                        focus:outline-none focus:border-gray-950  focus:placeholder:text-gray-300 sm:w-25 xl:w-140 md:w-55 lg:w-80
                        placeholder:text-gray-950 placeholder:text-1xl" 
                        id="search-input" 
                        aria-label="Search products"/>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="1.5" 
                      stroke="currentColor" 
                      className="   absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-950 pointer-events-none"
                      aria-hidden="true">
                  <path stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                </form>
              </div>

              {/*Desktop login button*/}
              <div className="hidden sm:flex items-center order-2 sm:order-3">
                <Button size="large" className="bg-white text-blue-500 border-2" ariaLabel="Log in to your account" children="Log in" />
              </div>
            </nav>
          </header>
    );
};

export default Navbar;
  