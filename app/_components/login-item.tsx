"use client"

import { Button } from "./ui/button"
import Image from "next/image"

interface LoginCLickProps {
  loginClick: () => void
}

const LoginItem = ({ loginClick }: LoginCLickProps) => {
  return (
    <Button onClick={loginClick} className="gap-1" variant="outline">
      <Image alt="login com google" src="/google.svg" width={18} height={18} />
      <div className="font-bold">Google</div>
    </Button>
  )
}

export default LoginItem
