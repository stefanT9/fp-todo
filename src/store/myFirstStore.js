import { createContext, useState } from 'react'

const FirstStore = createContext({})

export const FirstStoreProvider = ({ children })=>{
    console.log('first store provider')
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);

    return <FirstStore.Provider value={{
        count,
        increment,
        decrement
    }}>
        { children }
    </FirstStore.Provider>
}

export default FirstStore