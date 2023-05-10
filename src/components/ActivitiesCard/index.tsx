import Link from 'next/link'
import React from 'react'

export type ActivitiesCardProps = {
  activitieNumber: number
  name: string
  documentLink: string
  type: 'document' | 'link'
}
const ActivitiesCard: React.FC<ActivitiesCardProps> = ({
  activitieNumber,
  documentLink,
  name,
  type
}) => {
  return (
    <div className="flex w-auto h-card bg-zinc-500 rounded-lg relative  ">
      <div className="flex h-full p-4 bg-slate-700 rounded-l-lg  items-center">
        <h2 className="sm:text-lg lg:text-xl xl:text-2xl text-white  font-black">
          Atividade {activitieNumber}
        </h2>
      </div>
      <div className=" flex flex-col flex-1 sm:py-8 md:px-2 md:py-4 lg:px-4  p-4 justify-between ">
        <h2 className="  text-2xl sm:text-2xl md:text-2xl lg:text3xl xl:text-2xl text-white font-semibold">
          {name}
        </h2>
        <div className="w-full flex gap-8 sm:gap-8 lg:gap-6">
          {type === 'document' ? (
            <a
              href={documentLink}
              download
              className="text-md text-white bg-action py-2 px-4 rounded-md hover:bg-contrast cursor-pointer"
            >
              Baixar
            </a>
          ) : (
            <a
              href={documentLink}
              className="text-md text-white bg-action py-2 px-4 rounded-md hover:bg-contrast cursor-pointer"
            >
              Acessar
            </a>
          )}

          {/*  <Link
            href={`/activitie/${name}`}
            className="text-md text-white bg-action py-2 px-4 rounded-md hover:bg-contrast cursor-pointer"
          >
            Vê mais
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export { ActivitiesCard }
