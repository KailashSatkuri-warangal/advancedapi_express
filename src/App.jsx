import { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api')
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>{message || 'Loading...'}</h1>
        </div>
    );
}

export default App;
