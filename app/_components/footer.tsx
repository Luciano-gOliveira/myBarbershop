import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="mt-2 rounded-none">
        <CardContent className="px-6 py-6">
          <p className="text-sm text-gray-400">
            © 2024 Copyright <span className="font-bold">T Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
