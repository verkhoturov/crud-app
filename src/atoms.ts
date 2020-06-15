import { declareAtom } from "@reatom/core";
import { addProduct, getAllProducts } from "./actions";

export const allProducts = declareAtom([], on => [
    //@ts-ignore
    on(getAllProducts, (state, payload) => {
        //@ts-ignore
        const updateData = [...state, ...payload]
        console.log("get all", updateData);
        return updateData;
    }),
    //@ts-ignore
    on(addProduct, (state, payload) => {
        //@ts-ignore
        const updateData = [...state, ...payload]
        console.log("add", updateData);
        return updateData;
    }),
])
