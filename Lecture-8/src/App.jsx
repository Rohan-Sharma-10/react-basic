import { useRecoilValue, RecoilRoot, useSetRecoilState, useRecoilState } from 'recoil'
import { networkAtom, totalNotificationSelector } from './store/atoms'
import { jobsAtom } from './store/atoms'
import { notificationsAtom } from './store/atoms'
import { messagingAtom } from './store/atoms'


export default function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const messagesCount = useRecoilValue(messagingAtom);
  const totalnotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button> Home </button>
      <button> My Network ({networkCount >= 100 ? "99+" : networkCount }) </button>
      <button> Jobs ({jobCount >= 100 ? "99+" : jobCount }) </button>
      <button> Messages ({messagesCount >= 100 ? "99+" : messagesCount}) </button>
      <button> Notifications ({notificationsCount >= 100 ? "99+" : notificationsCount}) </button>
      <button> Me {totalnotificationCount} </button>
    </>
  )
}






// function MainApp() {
//   const networkCount = useRecoilValue(networkAtom);
//   const jobCount = useRecoilValue(jobsAtom);
//   const notificationsCount = useRecoilValue(notificationsAtom);
//   const [messagesCount, setMessagesCount] = useRecoilState(messagingAtom);

//   // useRecoilState: when we want the current value and also update the state.
//   // useSetRecoilState: when you only need to update the state.

//   return (
//     <>
//       <button> Home </button>
//       <button> My Network ({networkCount >= 100 ? "99+" : networkCount }) </button>
//       <button> Jobs ({jobCount >= 100 ? "99+" : jobCount }) </button>
//       <button> Messages ({messagesCount >= 100 ? "99+" : messagesCount}) </button>
//       <button> Notifications ({notificationsCount >= 100 ? "99+" : notificationsCount}) </button>
//       <button onClick={() => {setMessagesCount(c => c + 1)}} > Me </button>
//       {/* <ButtonUpdater /> */}
//     </>
//   )
// }

// function ButtonUpdater() {
//   const setMessagingCount = useSetRecoilState(messagingAtom);
  
//   return (
//     <div>
//       <button onClick={() => {setMessagingCount(c => c + 1)}} > Me </button>
//     </div>
//   )
// }