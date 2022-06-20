

export const getGifs = async ( category ) => {

    const url      = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=15&api_key=ajWR7ajBD3Q9nTJn0kBBqFg2I9OiPFhh`;
    const resp     = await fetch( url )
    const { data } = await resp.json()
         
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium  .url,
        }
    });
    
    return gifs;
};