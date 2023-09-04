import { atom } from "recoil";

type pageType = {
    page: 'name' | 'info' | 'layout'
}

export const pageState = atom({
    key: 'pageState',
    default: {
        page: 'name'
    } as pageType,
})
