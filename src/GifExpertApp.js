import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () => {
    //     setCategories([...categories,'pepe'])
    // }

    return(
        <>
            <h2>Gif expert</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            

            <ol>

            {categories.map((category, index) => <GifGrid key={category} category={category} />)}

            </ol>

        </>
    )




}