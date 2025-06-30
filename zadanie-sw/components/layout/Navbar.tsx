import { FC } from "react";
import { Checkbox } from "../ui/Checkbox";
import { Button } from "../ui/Button";

interface NavbarProps {
  filters: { active: boolean; promo: boolean };
  onFilterChange: (filterName: "active" | "promo", value: boolean) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

export const Navbar: FC<NavbarProps> = ({
  filters,
  onFilterChange,
  search,
  onSearchChange,
}) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 h-42 sm:h-27 h-50.5 ">
      <nav className="px-4 xl:px-0 flex flex-col sm:flex-row items-center sm:py-7.5 gap-4 flex mx-auto max-w-screen-xl sw:w-80 xl:w-300 ">
        {/* Logo */}
        <div className="flex items-center justify-between w-full sm:contents order-1 sm:order-none mt-6 ">
          <div className="flex-shrink-0">
            <a href="/">
              <img src="/logo.png" alt="Logo" className=" h-6.5 w-13.815" />
              </a>
          </div>
          {/* Mobile login button */}
          <div className="sm:hidden">
            <Button
              size="small"
              className="bg-white content-end text-blue-500 border-2 hover:bg-blue-100 hover:text-blue-400 hover:border-blue-400 leading-4 w-25 h-9.5"
              ariaLabel="Log in to your account">
              Log in
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:items-center order-3 sm:order-2 sm:flex-row xl:mx-36 sm:pl-31 w-full ">
          <fieldset className="flex sm:items-center order-2 sm:order-none ">
            <legend className="sr-only">Filter options</legend>
            <label className="inline-flex items-center cursor-pointer space-x-2 ">
              <Checkbox
                checked={filters.active}
                onChange={(checked) => onFilterChange("active", checked)}/>
              <span className="text-[#1A1B1D] text-sm pr-8 leading-4 ">Active</span>
            </label>

            <label className="inline-flex items-center cursor-pointer space-x-2">
              <Checkbox
                checked={filters.promo}
                onChange={(checked) => onFilterChange("promo", checked)}/>
              <span className="text-[#1A1B1D] text-sm leading-4 ">Promo</span>
            </label>
          </fieldset>

          {/* Search bar*/}
          <form role="search" className="flex sm:items-center sm:pl-5 sm:pr-2 w-full mb-4 sm:mb-0">
            <div className="relative flex-shrink-0 w-full">
              <label htmlFor="search-input" className="sr-only">
                Search products
              </label>
              <input
                type="search"
                placeholder="Search"
                className="border-1 sm:border-2 border-[#E0E2EA] rounded-lg
                        h-12 w-full
                        focus:outline-none focus:border-gray-950  focus:placeholder:text-[#1A1B1D]  pl-3 sm:pl-4
                        placeholder:text-[#1A1B1D]"
                id="search-input"
                aria-label="Search products"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}/>
              <svg
                width="24"
                height="24"
                viewBox="2 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute sm:right-4 right-1 top-1/2 -translate-y-1/2 h-6 w-6 text-[#1A1B1D] pointer-events-none"
                aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.6721 14H16.4621L21.4521 19L19.9621 20.49L14.9621 15.5V14.71L14.6921 14.43C13.5521 15.41 12.0721 16 10.4621 16C6.8721 16 3.9621 13.09 3.9621 9.5C3.9621 5.91 6.8721 3 10.4621 3C14.0521 3 16.9621 5.91 16.9621 9.5C16.9621 11.11 16.3721 12.59 15.3921 13.73L15.6721 14ZM5.9621 9.5C5.9621 11.99 7.9721 14 10.4621 14C12.9521 14 14.9621 11.99 14.9621 9.5C14.9621 7.01 12.9521 5 10.4621 5C7.9721 5 5.9621 7.01 5.9621 9.5Z"
                  fill="#1A1B1D"/>
              </svg>
            </div>
          </form>
        </div>

        {/*Desktop login button*/}
        <div className="hidden sm:flex items-center order-2 sm:order-3">
          <Button
            size="large"
            className="bg-white text-[#4460F7] border-2 hover:bg-blue-100 hover:text-blue-400 hover:border-blue-400 leading-4"
            ariaLabel="Log in to your account">
            Log in
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
