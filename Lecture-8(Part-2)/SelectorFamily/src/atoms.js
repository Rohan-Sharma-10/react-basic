import { atomFamily, selectorFamily } from 'recoil';
import axios from 'axios';

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async ({get}) => {
            const res = await axios.get();
            return res.data.todo

        }
    })
})

// get: function (id) {
// return async function ({get}) {
//     const res = await axios.get(`"https://sum-server.100xDevs.com/todo?id=${id}`);
//     return res.data.todo
// }}