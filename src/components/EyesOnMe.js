import React, { useState } from 'react';

function EyesOnMe() {
    const [password, setPassword] = useState('');
    const [isRevealed, setIsRevealed] = useState(false);

    const togglePasswordVisibility = () => {
        setIsRevealed((prevState) => !prevState);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <input
                type={isRevealed ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
            />
            <button onClick={togglePasswordVisibility}>
                {isRevealed ? 'Hide' : 'Show'} Password
            </button>
        </div>
    );
}

export default EyesOnMe;
