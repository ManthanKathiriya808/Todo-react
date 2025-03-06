import { useState } from "react";
import { AddTask } from "./AddTask";
import { Container } from "react-bootstrap";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid'
export function Task(){
const [task,setTask] = useState("")
const [Arr,setArr] = useState([])

    function handler(){

        let obj = {
            task,
            status:false,
            id:uuidv4()
        }

        setArr([...Arr,obj])
        
    }



function deleList(id){
    const update = Arr.filter((ele) => ele.id != id)
    setArr(update)
}
function statusList(id){
    const update = Arr.map((ele) => ele.id === id? {...ele,status : !ele.status} : ele)
    setArr(update)
}
   

    return(
      <>
          <AddTask handler = {handler} setTask={setTask} task={task}/>
       
          <Container>
          <Todo Arr={Arr} deleList={deleList} statusList={statusList}/>
          </Container>
      </>
    )
}