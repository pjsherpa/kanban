import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container=styled.div`
background-color=#f4f5f7;
border-radius: 2.5px;
width: 300px;
height:475px;
overflow-y:scroll;
-ms-overflow-style:none;
scrollbar-width:none;
border:1px solid gray;
`;

const Title=styled.h3`
padding:8px;
background-color:pink;
text-align:center;`;

const TaskList=stled.div`
padding:3px;
transistion:background-color 0.2s ease;
background-color: #f4f5f7;
flex-grown:1;
min-height:100px;`;

const Column = ({title,tasks,id}) => {
  return (
    <Container>
      <Title style={{backgroundColor:"lightblue",
      position:"stick"}}>{title}</Title>
      <Droppable droppableId={id}>
       {/* Create Task List and placeholders in this */}
      </Droppable>
    </Container>
  )
}

export default Column
