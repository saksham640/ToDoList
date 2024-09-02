import styles from "./ToDoList.module.css"
import { useState } from "react"
import { MdDelete } from "react-icons/md";

export default function ToDoList(){
    let [tasks,setTasks] = useState([]);

    let [errorMsg,setErrorMsg] = useState("");

    function removeStringFromArray(arr, stringToRemove) {
        const newArr = arr.filter(item => item !== stringToRemove);
        return newArr;
    }

    let warning = document.querySelector("#warning");

    let addTask = function(event){
        let newTask = event.target.previousSibling.value;
        if(!tasks.includes(newTask) &&
         !tasks.includes(newTask.toUpperCase()) && 
         !tasks.includes(newTask.toLowerCase()) && 
         newTask != ""){
            setTasks([...tasks,newTask]);
        console.dir();
        setErrorMsg("")
        }else{
            setErrorMsg("Invalid or already Existing task");
        }
    }

    let deleteTask = function(event){
        let targetTask = event.target.parentElement.previousSibling.innerHTML;
        setTasks(removeStringFromArray(tasks,targetTask));
    }

    let resetTasks = function(){
        setTasks([]);
    }


    let taskList = tasks.map(task =>
        <div className={styles.taskFormat}>
            <h2 className={styles.taskText}>{task}</h2>
            <MdDelete className={styles.deleteButton} onClick={deleteTask}/>
        </div>
    )


    return(
    <div className={styles.box}>
        <h1 className={styles.heading}>To-Do List</h1>
        <br/>

        <div className={styles.inputBoxx}>
            <input type="text" className={styles.inputField}></input>
            <button className={styles.addButton} type = "submit" onClick={addTask}>Add!</button>
        </div>
        <h3 className={styles.messages} id="warning">{errorMsg}</h3>
        <div className={styles.tasks}>
            {taskList}
        </div>
        <button className={styles.addButton} onClick={resetTasks}>Reset</button>
    </div>
    )
}