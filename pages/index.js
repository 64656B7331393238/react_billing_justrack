import { useState } from "react";

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    function handleClick() {
        setLikes(likes + 1);
    }

    const [likes, setLikes] = useState(0);

    return (
        <div>
            <Header title='Develop. HAHA Preview. Ship. 🚀' />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like({likes})</button>
        </div>
    );
}