import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

// More preffrable syntax
export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      },
  }),
});

// More readable syntax
// export const todosAtomFamily = atomFamily({
//   key: "todosAtomFamily",
//   default: selectorFamily({
//     key: "todoSelectorFamily",
//     get: function (id) {
//       return async function ({ get }) {
//         const res = await axios.get(
//           `https://sum-server.100xdevs.com/todo?id=${id}`
//         );
//         return res.data.todo;
//       };
//     },
//   }),
// });
