'use client';

import Link from 'next/link';

type MobileNavProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function MobileNav({ onClose, isOpen }: MobileNavProps) {
  return (
    <>
      {/* Dark overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sliding panel */}
      <nav
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-white p-6 shadow-lg transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          onClick={onClose}
          className='mb-6 rounded bg-gray-200 px-3 py-1'
        >
          Close ✕
        </button>
        <ul className='flex flex-col gap-4'>
          <li>
            <Link href='/' onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' onClick={onClose}>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact' onClick={onClose}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
