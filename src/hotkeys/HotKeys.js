import React, { useState } from "react";
import { useHotkeys } from 'react-hotkeys-hook';

function ExampleComponent() {
    const [count, setCount] = useState(0)
    useHotkeys('ctrl+shift+a+c, c, shift+c', () => setCount(prevCount => prevCount + 1))

    return (
        <span>Received the combination {count} times.</span>
    )
}
export default ExampleComponent;