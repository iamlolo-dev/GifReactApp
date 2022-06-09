import React, { useState } from 'react'

import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';
import { IconReact } from './IconReact';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            <div className='header-icon'>
                <IconReact width={180} height={80} />
                <h2>Gif-ReactJS App</h2>
            </div>
            <AddCategory setCategories={setCategories} />
            <hr className='divider'/>

            <div>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifExpertApp;