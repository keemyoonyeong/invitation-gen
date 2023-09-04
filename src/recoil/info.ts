import { atom } from "recoil";

type InfoType = {
    location: {
        address: string,
        detail: string,
    }
    time: {
        date: Date,
        hh: number,
        mm: number,
    }
}

export const infoState = atom({
    key: 'infoState',
    default: {
        location: {
            address: '',
            detail: '',
        },
        time: {
            date: new Date(),
            hh: 12,
            mm: 30,
        }
    } as InfoType,
})



// workflow - login - name setting - theme setting
