import { atom } from 'recoil'

export const networkAtom = atom({
    key: "networkAtom",
    default: 105
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 102
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 55
})

export const totalNotificationSelector = atom({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messageAtom);
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;  
    }
})