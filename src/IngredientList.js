import Ingredients from './Ingredients'
import React from 'react'
// const IngredientList = ({list}) =>
//         {list.map((l,i) =>{
//             <ul className="ingredients">
//                 <Ingredients {...l}/>
//             </ul>
//         })}

const IngredientList = ({list}) => 
<ul className="ingredients">
    {list.map((l,i) => 
        <Ingredients key={i} {...l}/>
    )}
</ul>

export default IngredientList;