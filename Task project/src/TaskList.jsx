import React, {useState} from "react";
import TaskCard from "../componet/TaskCard";

function TaskList  (props)  {
    const [tasks, setTasks] = useState([
         {id: 5631, name: "Cyber security", completed: true},
         {id: 3452, name: "Advance Javascript", completed: false},
         {id:2133, name: "Adavance Database", completed: false}
        ]);
    const [show, setShow] = useState(false);    

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !==id));
    }
    return(
        <>
        <p>The Task List {props.title}</p>
        <ul>
            <button className="trigger" onClick={() =>setShow(!show) }>Toggle</button>
        {show && tasks.map((task, index) =>(
            <TaskCard key={task.id} task = {task} handleDelete ={handleDelete}/>
        ))}
        </ul>
        <div className="box-success">
            <p className="title">What Is Codding</p><br />
             <p className="description">Coding involves writing instructions in programming languages to create software, applications, and systems. It translates human logic into commands that computers execute, enabling automation, problem-solving, and innovation. It requires understanding syntax, algorithms, and problem-solving to build functional and efficient digital solutions.</p><br />
        </div>
        <div className="box-warning">
            <p className="title">What Is Programming language</p><br />
             <p className="description">A pramming language is a formal system of syntax and rules used to write code that instructs computers to perform specific tasks. It enables developers to create software, applications, and systems by translating human logic into machine-readable commands.</p><br />
        </div>
        <div className="box-alert">
            <p className="title">What Is bugs in coding</p><br />
             <p className="description">Bugs in coding are errors or defects in a program that cause incorrect behavior or crashes. They result from mistakes in code logic, syntax, or interactions, and require debugging to identify and fix, ensuring the software functions correctly and efficiently.</p><br />
        </div>
       
    </>
    );
}
export default TaskList;
