"use client"

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
import { signIn, useSession, signOut } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"
import LoginItem from "./login-item"

const SidebarSheet = () => {
  const { data } = useSession()

  const handleLoginWithGoogleClick = () => signIn("google")

  const handleLogoutClick = () => signOut()

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 truncate border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} />
            </Avatar>

            <div>
              <p className="font-bold">{data?.user?.name}</p>
              <p className="text-xs">{data?.user?.email}</p>
            </div>
          </div>
        ) : (
          <>
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
                <LoginItem loginClick={handleLoginWithGoogleClick} />
              </DialogContent>
            </Dialog>
          </>
        )}
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
        {data?.user && (
          <Button
            onClick={handleLogoutClick}
            variant="ghost"
            className="justify-start gap-2"
          >
            <LogOut size={18} />
            Sair da conta
          </Button>
        )}
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
