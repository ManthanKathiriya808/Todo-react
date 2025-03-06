import React from "react";

import Table from 'react-bootstrap/Table'
function Todo({Arr,deleList,statusList}){
   
    return (
        <Table  bordered  className="text-center">
          <thead>
            <tr>
       
              <th>Task</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            
{    Arr.map((ele) => (
        <tr   key={ele.id}>
            <td className={ele.status? "bg-success-subtle" : "bg-danger-subtle"}>{ele.task}</td>
              <td className={ele.status? "bg-success-subtle" : "bg-danger-subtle"}><button className="btn btn-secondary" onClick={() => statusList(ele.id)}>{ele.status? "✅ Complete" : "☠️ InComplete"}</button></td>
              <td className={ele.status? "bg-success-subtle" : "bg-danger-subtle"}><button className="btn btn-danger" onClick={()=> deleList(ele.id)}>🗑️</button></td>
         </tr>   
        ))
    }
  
              
            
          </tbody>
        </Table>
      );
}


export default Todo