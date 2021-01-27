import React, { useState } from 'react';
import Proptypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();    
        if(inputValue !== undefined && inputValue.trim().length > 2)
        {        
            setCategories(cats => [inputValue, ...cats]); 
            setInputValue('');
        }
           
    }
    return (

        <form onSubmit ={handleSubmit}>
         <input
            type = 'text'
            placeholder='escriba una categoria'
            value = { inputValue}
            onChange = { handleInputChange }
         />  
         </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}