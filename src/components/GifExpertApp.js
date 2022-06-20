import React, { useState } from 'react'

import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';
import { IconReact } from './IconReact';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <div className='header'>
                <IconReact className='header-icon' />
                <p className='header-text'>Stealth Gifts App</p>
            </div>
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
            <hr className='divider'/>

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

export default GifExpertApp;