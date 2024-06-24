import ToDoList from "./components/ToDoList"

function App() {

  return (
      <div className="min-h-screen h-full bg-gradient-to-r from-purple-500 to-blue-400
                      flex flex-col items-center pt-20">
          
          <h1 className="text-gray-50 font-bold text-center text-7xl">ToDo list</h1>
          <ToDoList />
      </div>  
  )
}

export default App
