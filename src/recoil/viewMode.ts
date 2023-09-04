import { atom } from "recoil";

type ViewModeType = {
    navigation: {
        slide: boolean
        show: boolean
    },
    simulator: {
        show: boolean
    }
}

export const viewModeState = atom({
    key: 'viewModeState',
    default: {
        navigation: {
            slide: false,
            show: true,
        },
        simulator: {
            show: true
        }
    } as ViewModeType,
})
