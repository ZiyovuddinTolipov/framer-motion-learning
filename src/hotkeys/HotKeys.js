import React, { useState } from "react";
import { useHotkeys } from 'react-hotkeys-hook';

function ExampleComponent() {
    const [count, setCount] = useState(0)
    useHotkeys('6', () => setCount(prevCount => prevCount + 1))
    useHotkeys('a', () => setCount(prevCount => prevCount - 1))

    return (
        <h1>6-deleted . a plus {count} times.</h1>
    )
}
export default ExampleComponent;