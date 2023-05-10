import React from 'react'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { activitiesMockFull } from '@/utils/mock/atividades'
import { ActivitiesCard } from '@/components/ActivitiesCard'

const ActivitiesScreen: React.FC = () => {
  return (
    <>
      <Header />
      <main className=" min-h-screen max-w-scree w-screen px-10 ">
        <h2 className="text-white font-black mt-12 mb-12 text-4xl">
          Atividades
        </h2>
        <div className="grid w-full gap-x-4 gap-y-8  grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {activitiesMockFull.map((item, index) => (
            <ActivitiesCard
              name={item.name}
              activitieNumber={index + 1}
              documentLink={item.documentLink}
              type={item.type}
              key={item.name}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ActivitiesScreen
