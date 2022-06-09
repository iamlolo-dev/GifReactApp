import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className='card-parent animate__animated animate__zoomIn'>
            <div className='card'>
                <img src={url} alt={title} />
            </div>
            <p>{title}</p>
        </div>
    )
}
