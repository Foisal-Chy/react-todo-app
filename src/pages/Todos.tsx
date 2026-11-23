import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Todo = { id: number; text: string }

export default function Todos() {
  const navigate = useNavigate()
  const [text, setText] = useState("")
  const [todos, setTodos] = useState<Todo[]>(() =>
    JSON.parse(localStorage.getItem("todos") || "[]")
  )

  // todos change hole localStorage-e save + page title update
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    document.title = `Todos (${todos.length})`
  }, [todos])

  const addTodo = () => {
    if (!text.trim()) return
    setTodos([...todos, { id: Date.now(), text }])
    setText("")
  }

  const deleteTodo = (id: number) =>
    setTodos(todos.filter((t) => t.id !== id))

  return (
    <div className="min-h-screen flex justify-center p-6">
      <Card className="w-full max-w-md h-fit">
        <CardHeader>
          <CardTitle>My Todos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a task..."
            />
            <Button onClick={addTodo}>Add</Button>
          </div>
          {todos.map((t) => (
            <div key={t.id} className="flex justify-between items-center">
              <span>{t.text}</span>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteTodo(t.id)}
              >
                Delete
              </Button>
            </div>
          ))}
          <Button variant="outline" onClick={() => navigate("/")}>
            Back
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}