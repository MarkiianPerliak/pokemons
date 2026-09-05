import { useEffect } from "react"
import { Form } from "./components/Form"
import { List } from "./components/List"
import { getPokemons } from "./redux/operations"
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPokemons())
  }, [])
  return (
    <>
      <Form />
      <List />
    </>
  )
}

export default App
