import React, { useCallback } from 'react'
console.log(import.meta.env.VITE_SERVER_PORT);

export default function Home() {
    const [name, setName] = React.useState('')
    const [hello, setHello] = React.useState('')

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleClick = useCallback( async () => {
        const response = await fetch(`http://localhost:2023/hello/${name}`)
        const data = await response.text()
        setHello(data)
    }, [name])

    return (
        <div className="home">
            <label htmlFor="nom">Renseigdsqkjdlkqsjdklsqjdklsqjdlksqjdlksqjdklsqjnez un nom</label>
            <input type="text" name="nom" onChange={handleNameChange} value={name} />
            <button onClick={handleClick}>Afficher texte</button>
            <div className="affichage">{hello}</div>
        </div>
    )
}