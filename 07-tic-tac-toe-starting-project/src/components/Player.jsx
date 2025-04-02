import { useState } from 'react';

export default function Player({ player, index }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(player.name);
    return (
        <li key={index}>
            <span className="player">
                {isEditing ?
                    <input
                        type="text"
                        value={name}
                        required
                        onChange={e => setName(e.target.value)} />
                    : <span className="player-name">{name}</span>}
                <span className="player-symbol">{player.symbol}</span>
            </span>
            <button onClick={() => setIsEditing(value => !value)}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    )
}