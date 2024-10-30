import { signIn } from "next-auth/react"
import LoginItem from "./login-item"
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google
        </DialogDescription>
      </DialogHeader>
      <LoginItem loginClick={handleLoginWithGoogleClick} />
    </>
  )
}

export default SignInDialog
