// Recoil
import React from 'react'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil"
import { useState, useEffect, memo } from 'react'

 const counterAtom = atom({
    default: 0,
    key: "counter"
})

export default function App() {
    return (
        <RecoilRoot>
            <Parent />
        </RecoilRoot>
    )
}

function Parent() {
    return (
        <div>
            <Counter />
            <IncreaseCount />
            <DecreaseCount />
        </div>
    )
}

const Counter = () => {
    const count = useRecoilValue(counterAtom);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

function IncreaseCount() {
    const setCount = useSetRecoilState(counterAtom);

    return (
        <div>
            <button onClick={() => {setCount(c => c + 1)}} >Increase</button>
        </div>
    )
}

function DecreaseCount() {
    const setCount = useSetRecoilState(counterAtom);

    return (
        <div>
            <button onClick={() => {setCount(c => c - 1)}} >Decrease</button>
        </div>
    )
}

// MEMO

// export default function App() {
//     return (
//         // <RecoilRoot>
//             <Parent />
//         // </RecoilRoot>
//     )
// }

// function Parent() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         setInterval(() => {
//             setCount(c => c + 1);
//         }, 2000)
//     }, [])

//     return (
//         <div>
//             <Counter count={count} />
//             <IncreaseCount />
//             <DecreaseCount />
//         </div>
//     )
// }

// // even if the Counter and other components not even using the stateVariable its still re-rendering, to fix this we will use "memo". 
// // not it will not re-render unless and until the props changes
// // if the cound is passed down as prop then the component will re-render even if we have used the memo
// const Counter = memo(({count}) => {
//     // const count = useRecoilValue(counterAtom);

//     return (
//         <div>
//             {/* <h1>{count}</h1> */}
//             <p>{count}</p>
//         </div>
//     )
// })

// const IncreaseCount = memo(() => {
//     // const setCount = useSetRecoilState(counterAtom);

//     return (
//         <div>
//             <button onClick={() => {setCount(c => c + 1)}} >Increase</button>
//         </div>
//     )
// })

// const DecreaseCount = memo(() => {
//     // const setCount = useSetRecoilState(counterAtom);

//     return (
//         <div>
//             <button onClick={() => {setCount(c => c - 1)}} >Decrease</button>
//         </div>
//     )
// })

// // npm install recoil