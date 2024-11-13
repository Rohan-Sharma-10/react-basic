import { atom, selector, atomFamily } from "recoil";
import axios from 'axios';
import TODOS from './todos.js';

// Atom Family
export const todoAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id => {
        return TODOS.find(x => x.id === id)
    }
})

// Asynchronous Daya Queries refer to the ability to manage and retrieve data from external sources (like APIs, databases, or other asynchronous operations) within the Recoil state management system.
//  
// export const notifications = atom({
//     key: "networkAtom",
//     default: selector({
//         // await new Promise(r => setTimeout(r, 5000)) // Sleeps for 5 sec
//         key: "networkAtomSelector",
//         get: async () => {
//             const res = await axios.get("https://sum-server.100xdevs.com/notifications")
//             return res.data
//         }  
//     })
// })

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const allNotifications = get(notifications);
//         return ( allNotifications.network + 
//         allNotifications.jobs + 
//         allNotifications.notifications + 
//         allNotifications.messaging )
//     }
// })


