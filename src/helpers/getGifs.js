

export const getGifs = ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=VUFksjupeQfhsEb3HULIPNknLK0ikRkM`;

    return fetch( url )
        .then( resp => resp.json() )
        .then(({ data }) => {

            const gifs = data.map( img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium  .url,
                }
            });

            return gifs;

        })
        .catch( err => alert(err) );
};