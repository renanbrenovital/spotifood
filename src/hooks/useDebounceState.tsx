import { useState, useEffect } from 'react';

function useDebounceState (value: any, timeout: number) {
    const [state, setState] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setState(value), timeout);

        return () => clearTimeout(handler);
    }, [value, timeout]);

    console.log(state);

    return state;
}

export default useDebounceState;