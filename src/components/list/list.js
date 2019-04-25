import React from 'react';

function List (props) {
  return(
    <>
      {props.type === 'ordered' ? 
       <ol>
        {props.items.map((item,idx) =>
          <li key={idx}>  {item} </li>
          ) }
      </ol>
      :
      <ul>
      {props.items.map((item,idx) =>
        <li key={idx}> {item} </li>
        ) }
      </ul>
      }

    </>
  )
}

export default List;
