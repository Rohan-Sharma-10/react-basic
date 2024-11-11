// Selectors 
import { RecoilRoot, useRecoilValue, useSetRecoilState, atom, selector } from 'recoil'

const counterAtom = atom({
  default: 0,
  key: "counter"
})

const evenSelector = selector({
  key: "isEvenSelector",
  get: ({get}) => {
    const currentCount = get(counterAtom);
    return (currentCount % 2 == 0);
  }
})

export default function App() {
  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={() => {setCount(c => c - 1)}} >Decrease</button>
      <button onClick={() => {setCount(c => c + 2)}} >Increase</button>
    </div>
  )
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  
  return (
    <div>
      {count}
    </div>
  )
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      {isEven ? "Even" : "Odd"}
    </div>
  )
}
