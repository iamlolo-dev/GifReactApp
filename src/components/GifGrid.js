import React from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { IconReact } from '../components/IconReact';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <span className='title-category'> {category} </span>

            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}

            <div className='card-grid'>

                {
                    images.map(item => (

                        <GifGridItem
                            key={item.id}
                            {...item}
                        />
                    ))
                }

            </div>
            <hr className='divider' />
        </>
    );
};