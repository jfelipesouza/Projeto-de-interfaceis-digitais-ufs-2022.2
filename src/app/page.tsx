import React from 'react'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ActivitiesCard } from '@/components/ActivitiesCard'
import { activitiesMock } from '../utils/mock/atividades'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <section className="flex max-w-screen min-h-screen" id="hero">
          <div className="flex flex-1 flex-col gap-8 justify-center pl-20">
            <h2 className="sm:text-3xl md:text-4xl lg:text-6xl text-white font-black">
              Design e Tecnologia G
            </h2>
            <h3 className="sm:text-2xl md:text-2xl lg:text-4xl text-white font-black">
              Interfaces Digitais | Turma 01
            </h3>
          </div>
          <div className="flex flex-1 justify-center items-center flex-col bg-contrast rounded-tl-full rounded-bt-full ">
            <div className="w-full h-full relative mr-20 ">
              <Image src={'assets/images/banner2.svg'} alt="banner" fill />
            </div>
          </div>
        </section>
        <section
          className="flex flex-col max-w-screen min-h-screen px-20 pt-20 gap-8"
          id="activities"
        >
          <h2 className={'text-white font-black text-5xl mb-8'}>Atividades</h2>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {activitiesMock.map(({ documentLink, name, type }, index) => (
              <ActivitiesCard
                activitieNumber={index + 1}
                documentLink={documentLink}
                name={name.trim()}
                key={name}
                type={type}
              />
            ))}
          </div>
          <div className="w-full flex justify-center items-center mt-8 ">
            <Link
              href={'/activities'}
              className="text-2xl text-white font-extrabold bg-action py-2 px-16 rounded-md hover:bg-contrast cursor-pointer"
            >
              Vê tudo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
