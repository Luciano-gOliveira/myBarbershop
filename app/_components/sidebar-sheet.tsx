import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOut } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import quickSearchOptions from "../_constants/search"
import Link from "next/link"
import Image from "next/image"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {/* <Avatar>
          <AvatarImage src="https://img.freepik.com/fotos-gratis/lindo-macaco-passando-tempo-na-natureza_23-2150754411.jpg?t=st=1729568614~exp=1729572214~hmac=fa97273f62650ebd4d11c76fec7212d54f5d48ca8cf871e8c8f356eb1dafaf0f&w=360" />
        </Avatar>

        <div>
          <p className="font-bold">Magago de Souza</p>
          <p className="text-xs">macacodesouza123@gmail.com</p>
        </div> */}
        <h2 className="font-bold">Olá, faça seu Login!</h2>

        <Dialog>
          <DialogTrigger>
            <Button size="icon">
              <LogInIcon />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[90%]">
            <DialogHeader>
              <DialogTitle>Faça login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google
              </DialogDescription>
            </DialogHeader>

            <Button className="gap-1" variant="outline">
              <Image
                alt="login com google"
                src="/google.svg"
                width={18}
                height={18}
              />
              <div className="font-bold">Google</div>
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button variant="ghost" className="justify-start gap-2">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            variant="ghost"
            className="justify-start gap-2"
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOut size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
