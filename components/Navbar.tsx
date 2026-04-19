import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DarkModeToggle from './DarkModeToggle'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-white dark:bg-[#111010] border-b-2 border-[#F5C518] dark:border-[#2E2A26]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center">
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="font-black text-2xl tracking-tight leading-none text-[#1A0A00] dark:text-[#F7F3EE]"
            >
              CLOTHING{' '}
              <span className="text-[#C0392B] dark:text-[#B8955A]">LAB</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden sm:flex sm:items-center sm:gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.12em] text-[#7A5C50] dark:text-[#9A918A] hover:text-[#C0392B] dark:hover:text-[#F7F3EE] transition-colors duration-200 pb-0.5 border-b-2 border-transparent hover:border-[#F5C518] dark:hover:border-[#B8955A]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <a
              href="/products"
              className="hidden sm:inline-flex items-center px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] bg-[#C0392B] dark:bg-transparent text-white dark:text-[#B8955A] border border-[#C0392B] dark:border-[#B8955A] hover:bg-[#9B1C1C] dark:hover:bg-[#B8955A] dark:hover:text-[#111010] transition-all duration-200"
            >
              Shop Now
            </a>

            {/* Mobile toggle */}
            <div className="sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center p-2 text-[#7A5C50] dark:text-[#9A918A] hover:text-[#C0392B] dark:hover:text-[#F7F3EE] focus:outline-none transition-colors">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-5 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-5 group-data-open:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden border-t-2 border-[#F5C518] dark:border-[#2E2A26]">
        <div className="px-6 py-5 flex flex-col gap-4 bg-white dark:bg-[#111010]">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="text-sm font-medium uppercase tracking-[0.1em] text-[#7A5C50] dark:text-[#9A918A] hover:text-[#C0392B] dark:hover:text-[#F7F3EE] transition-colors"
            >
              {item.name}
            </DisclosureButton>
          ))}
          <a
            href="/products"
            className="mt-1 self-start px-5 py-2.5 bg-[#C0392B] dark:bg-transparent text-white dark:text-[#B8955A] border border-[#C0392B] dark:border-[#B8955A] text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#9B1C1C] dark:hover:bg-[#B8955A] dark:hover:text-[#111010] transition-all duration-200"
          >
            Shop Now
          </a>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
