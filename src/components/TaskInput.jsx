import React from 'react'
import { useState } from 'react'

export default function TaskInput({addTask}) {

    const [task,setTask] = useState('');

    console.log(task);

    function handleInput(event) {
        setTask(event.target.value);
    }

    function handleAddTask(event){
        event.preventDefault();
        if(task.trim() === '') return;
        addTask(task);
        setTask('');
    }

  return (
    <>
    <div>
    <form className='inputField' onSubmit={handleAddTask}>
      <input 
        type='text'
        value={task}
        placeholder='Add an Item' 
        onChange={handleInput}
        />
      <button>+</button>
    </form>
    </div>
    </>
  )
}
