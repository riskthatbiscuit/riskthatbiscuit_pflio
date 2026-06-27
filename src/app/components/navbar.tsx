'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function NavBar() {
  const scrollToSection = (target: string) => {
    const container = document.getElementById('page-scroll');
    const section = document.getElementById(target);

    if (container && section) {
      container.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { label: 'Story', target: 'bio' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Next', target: 'extra' },
  ];

  return (
    <Disclosure
      as="nav"
      className="absolute z-50 w-full bg-white bg-opacity-80"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start md:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <a className="text-black" href="">
                    Casey McGrath
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navItems.map((item) => (
                    <button
                      key={item.target}
                      type="button"
                      onClick={() => scrollToSection(item.target)}
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2 opacity-100">
              {navItems.map((item) => (
                <DisclosureButton
                  key={item.target}
                  as="button"
                  type="button"
                  onClick={() => scrollToSection(item.target)}
                  className="block w-full border-l-4 border-transparent py-2 pl-3 pr-4 text-left text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  {item.label}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
