import { Header } from '@/components/Header'
import React from 'react'

// import { Container } from './styles';

const AboutScreen: React.FC = () => {
  return (
    <>
      <Header />
      <main className=" w-screen min-h-screen p-8">
        <h2 className="text-white font-black mt-12 mb-12 text-4xl">
          Sobre o nós
        </h2>
      </main>
    </>
  )
}

export default AboutScreen
