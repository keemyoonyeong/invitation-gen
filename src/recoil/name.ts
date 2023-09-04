import { atom } from "recoil";

type CharacterType = {
    name: string
    rel: string | null,
    parent: {
        mother: {
            name: string
            live: boolean
        },
        father: {
            name: string
            live: boolean
        },
    }
}

type NameType = {
    women: CharacterType
    men: CharacterType
}

const characterDefault: CharacterType = {
    name: '이OO',
    rel: null,
    parent: {
        mother: {
            name: '박OO',
            live: true
        },
        father: {
            name: '김OO',
            live: true
        }
    }
}

export const nameState = atom({
    key: 'nameState',
    default: {
        women: characterDefault,
        men: characterDefault
    } as NameType,
})



// workflow - login - name setting - theme setting
