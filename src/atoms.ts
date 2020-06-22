import { declareAtom, declareAction } from "@reatom/core";
import { mock } from "./services/http-common";

export const createProduct = declareAction();  // C
export const readProducts = declareAction();   // R
export const updateProducts = declareAction(); // U
export const deleteProduct = declareAction();  // D

export const products = declareAtom(
    [{
        id: -1,
        title: ``,
        description: ``,
        price: ``
    }], on => [
        //@ts-ignore
        on(createProduct, (state, payload) => {
            const lastId = state.map(item => item.id).sort()[state.length - 1];
            const id = lastId + 1; // new id
            mock.onGet(`/products`)
                .reply(200, [...state, payload])
                .onGet(`/products/${id}`)
                .reply(200, payload);
            return [...state, payload]
        }),
        //@ts-ignore
        on(readProducts, (state, payload) => [...payload]),
        //@ts-ignore
        on(updateProducts, (state, payload) => {
            const stateId = state.map(item => item.id)
            //@ts-ignore
            state.splice(stateId.indexOf(payload.id), 1, payload);
            //@ts-ignore
            mock.onGet(`/products`).reply(200, state).onGet(`/products/${payload.id}`)
                .reply(200, payload);
            return state;
        }),
        //@ts-ignore
        on(deleteProduct, (state, payload) => {
            const updatedList = state.filter(item => item.id !== payload);
            mock.onGet(`/products`).reply(200, updatedList)
            return updatedList;
        }),
    ])