import React from "react";
import { Container,Row,Col } from "react-bootstrap";

export function AddTask({handler,setTask ,task}){



    return(
        <Container className="mt-5 ">
            <Row className=" d-flex justify-content-center w-100 ">
                <Col className="mx-auto text-center w-100 mb-4 ">
                    <input type="text"  placeholder="Enter Task" onChange={(e) => setTask(e.target.value)}/>
                                
                    <button className="btn btn-success" onClick={()=> handler()}>Add Task</button>
                </Col>
            </Row>

          
        </Container>
    )
  
}