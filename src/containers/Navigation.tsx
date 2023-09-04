import React from 'react';
import { pageState } from '../recoil/page';
import { useRecoilState } from 'recoil';
import { viewModeState } from '../recoil/viewMode';

const navigationMap: { [key: string]: string } = {
    'name': '신랑신부 · 혼주',
    'info': '일시 · 주소'
}


export function Navigation() {
    const [viewModeStates, setViewModeStates] = useRecoilState(viewModeState);
    const [pageStates, setPageStates] = useRecoilState(pageState)

    const close = () => {
        setViewModeStates((prev) => ({
            ...prev,
            navigation: { show: false, slide: false }
        }));
    };

    const setPage = (page: any) => {
        setPageStates({ page: page })
    }

    const isShow = viewModeStates.navigation.show;
    const currentPage = pageStates.page

    return (
        <div className={`slide-nav shadow-lg rounded-xl flex flex-col gap-2 ${isShow ? '' : 'close'} relative z-10 flex-fit px-3 py-4`}>
            <div className='flex flex-row gap-4 pb-2'>
                <div onClick={close} className='btn bg-white btn-xs btn-square '>
                    {'〈〈'}
                </div>
                <span> menu</span>
            </div>
            {
                Object.keys(navigationMap)?.map((key: string) => {
                    const value = navigationMap[key]
                    return (
                        <a key={key} className="w-full" href={`/#${key}`}>
                            <div className={`btn w-full btn-sm whitespace-normal ${currentPage === key ? 'font-bold' : 'font-medium'}`} onClick={() => { setPage(key) }}>
                                <span>{value}</span>
                            </div>
                        </a>
                    )
                })
            }
            {/* <div className='flex flex-col gap-2'> */}
            <div className='btn btn-sm whitespace-normal'>

            </div>
            <div className='btn btn-sm whitespace-normal'>

            </div>
            {/* </div> */}
        </div>
    );
}


