import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons/faPlusSquare";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewtask] = useState("");

    function handleChange(event) {
        setNewtask(event.target.value)
    }

    // add new task
    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]) // adding it in it's previous state
            setNewtask(""); // clearing the new task cause it has been added
        }
    }

    // delete a single list
    function deleteTask(index) {
        // filters the element whose index isn't equal to parameterize index
        const updateTasks = tasks.filter((_, i) => i !== index); // underscore for the ignored parameter
        setTasks(updateTasks);
    }

    // delete all list
    function removeAll() {
        setTasks([]);
    }

    function editTask() {

    }
     
    return (
        <div className="h-full p-10 text-2xl
                        ">

            <div className="">
                <input 
                className="text-gray-500 p-3 border-2 border-gray-400 rounded-md bg-gray-50"
                type="text" 
                value={newTask}
                placeholder="Enter you task here"
                onChange={handleChange}
                id="" />

                <button onClick={addTask} 
                    className="bg-green-500 p-3"
                > 
                    <FontAwesomeIcon 
                    className="text-gray-50"
                    icon={faPlusSquare} />
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li 
                    className="bg-blue-200 hover:bg-blue-400 ease-out duration-500 text-gray-800
                                p-4 m-2 flex justify-between border-1 rounded-md"
                    key={index}>
                        <span > {task} </span>
                        <button onClick={() => deleteTask(index)}>
                            <FontAwesomeIcon 
                            className="text-gray-500"
                            icon={faTrashCan} />
                        </button>
                    </li>
                )}
            </ol>

            {/* <button onClick={() => removeAll()}
                className="bg-red-400 rounded-md p-3 align-bottom"    
            >
                Remove All
            </button> */}
            
        </div>
    )
}

export default ToDoList