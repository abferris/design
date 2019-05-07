import React from 'react';

import Cell from './cell.js';
import './table.scss';
function List (props) {
  return(
    // list element will take in a style
    <div id='table' style={props.style}>
       <div id = 'headerRow'>
         {/* headers will be a single array */}
        {props.headers.map((item,idx) =>
          <Cell key={idx} type='header' item={item}>  {item} </Cell>
          ) }
      </div>
      
      {/* map over an array of arrays */}
      {props.items.map((row,idx) => {
        <div id = 'row'>
          {props.row.map((item,index)=> {
            <Cell key={idx-index} type='header' item={item}/>
             })
          }  
        </div>
        }) 
      }

    <div/>
  )
}

export default List;
