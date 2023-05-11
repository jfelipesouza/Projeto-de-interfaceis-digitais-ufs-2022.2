import Link from 'next/link'
import React from 'react'

const navigationLinks = [
  { name: 'Home', router: '/' },
  { name: 'Atividades', router: '/activities' },
  /*  { name: 'Sobre', router: '/about' }, */
  { name: 'Projeto', router: 'https://lactoseonline.vercel.app/' }
]

const Header: React.FC = () => {
  return (
    <header className=" flex max-w-screen py-6 px-8 bg-primary gap-4 justify-end items-center ">
      <ul className="flex gap-4">
        {navigationLinks.map(({ name, router }, index) => (
          <li key={name}>
            <Link
              href={router}
              className="p4 text-white text-lg font-bold hover:text-contrast"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export { Header }
