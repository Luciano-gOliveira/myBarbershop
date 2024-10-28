import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import quickSearchOptions from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})

  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Luciano!</h2>
        <p>Segunda-feira, 05 de agosto</p>

        <div className="mt-6">
          <Search />
        </div>
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => {
            return (
              <Link
                key={option.title}
                href={`barbershops?service=${option.title}`}
              >
                <Button className="gap-2" variant="secondary">
                  <Image
                    alt={option.title}
                    src={option.imageUrl}
                    width={16}
                    height={16}
                  />
                  {option.title}
                </Button>
              </Link>
            )
          })}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            fill
            className="rounded-xl object-cover"
            src="/banner-01.svg"
            alt="Agende nos melhores com T Barber"
          />
        </div>

        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => {
            return (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            )
          })}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => {
            return (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
