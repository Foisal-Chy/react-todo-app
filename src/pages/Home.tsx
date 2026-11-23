import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">My Todo App</h1>
      <Button onClick={() => navigate("/todos")}>Start</Button>
    </div>
  )
}