import React, { useState } from "react";
import { HEADER_MENUS } from "../shared/data";
import { Dialog } from "@headlessui/react";
import { Icons } from "./ui/Image";
import { Button } from "@radix-ui/themes";
import Dropdown from "./ui/Dropdown";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-12 bg-gray">
        <div className="col-start-2 col-span-10">
          <nav className="flex justify-between py-2">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </a>
            </div>
            <div className="flex justify-start gap-5">
              <a href="" className="flex justify-start items-center gap-2">
                <Icons.phone className="w-[20px] h-[20px] text-primary" />
                <span>6248 0838</span>
              </a>
              <a href="" className="flex justify-start items-center gap-2">
                <Icons.viber className="w-[20px] h-[20px] text-primary" />
                <span>8484 9948</span>
              </a>
              <a href="" className="flex justify-start items-center gap-2">
                <Icons.email className="w-[20px] h-[20px] text-primary" />
                <span>info@visibleone.com</span>
              </a>
              <Button className="bg-green flex justify-center items-center">
                <Icons.docs className="w-[18px] h-[18px]" />
                QUOTE
              </Button>
              <Dropdown />
            </div>
          </nav>
        </div>
      </div>

      <header className="grid grid-cols-12">
        <div className="col-start-2 col-span-10">
          <nav className="flex justify-between">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 lg:items-center">
              {HEADER_MENUS.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-black"
                >
                  {item.name}
                </a>
              ))}
              <Icons.search className="w-[20px] h-[20px]" />
            </div>
            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-black"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {HEADER_MENUS.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </header>
    </>
  );
};

export default Header;
