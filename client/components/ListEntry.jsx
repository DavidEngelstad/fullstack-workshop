import React from 'react';

const ListEntry = props => (
  <div>
    <button onClick={() => props.delete(props.todo.name)}>DONE</button>
    {props.todo.name}
  </div>
);

export default ListEntry;
