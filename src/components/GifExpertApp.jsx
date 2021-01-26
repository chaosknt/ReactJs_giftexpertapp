import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';
//60    62
const GitExpertApp = () => {

    const [categories, setCategories] = useState(['one punch'])

  
    return (
        <>
        <h1>GitExpertApaap</h1>
        <AddCategory
        setCategories ={setCategories}
        />
        <hr/>
        
    
        <ol>
            {
                categories.map(category => (
                    <GifGrid 
                    key = { category }
                    category = { category } 
                    />
                ))
            }
        </ol>
        </>
        );
}
 
export default GitExpertApp;