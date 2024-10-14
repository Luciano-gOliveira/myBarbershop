import Image from "next/image"
import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"

export default function Home() {
  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Luciano!</h2>
        <p>Segunda-feira, 05 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca"></Input>
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            fill
            className="rounded-xl object-cover"
            src="/banner-01.svg"
            alt="Agende nos melhores com B-barber"
          />
        </div>
      </div>
    </div>
  )
}
