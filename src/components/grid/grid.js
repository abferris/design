import React, { createElement } from 'react';
import "../../design/grid.scss"
const Grid = props => {

  return(
    <div className='grid'>
    {props.elements.map((element) =>
      <div className={props.columns}>  {element} </div>
      ) }   
    </div>
      
  )
};


export default Grid;
