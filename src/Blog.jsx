import { useEffect, useState } from 'react'

const Blog = ({ history, location, match }) => {
   
    const [producto, setProducto] = useState({})
    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${match.params.entrada}`)
            .then(res => res.json())
            .then(data => setProducto(data))
    }, [match.params.entrada])

    return (
        <>
        <h1>Blog</h1>
        <p>{producto.title}</p>
        </>
    )
}

export default Blog