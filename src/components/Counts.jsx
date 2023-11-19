import React from 'react'

const Counts = ({ toDoList }) => {

    let countList = toDoList.length;

  return (
    <div className='stats' >
      <p className='notify'>
        {countList === 0? "You have got everything ready, build your todo list now.":
        `You have ${countList} tasks in your bucket list`}
      </p>
    </div>
  )
}

export default Counts
