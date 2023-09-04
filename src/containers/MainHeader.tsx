import { If } from '../components/common';
import React from 'react';
import { useRecoilState } from 'recoil';
import { viewModeState } from '../recoil/viewMode';

export function MainHeader() {
    const [viewModeStates, setViewModeStates] = useRecoilState(viewModeState);

    const toggleNavigation = () => {
        setViewModeStates((prev) => ({ ...prev, navigation: { ...prev.navigation, show: !prev?.navigation.show } }));
    };

    const toggleSimulator = () => {
        setViewModeStates((prev) => ({ ...prev, simulator: { show: !prev.simulator.show } }));
    };

    return (
        <div className='h-16 flex flex-fit flex-row gap-6 items-center px-8'>
            <If v={!viewModeStates?.navigation.show}>
                <div className='btn btn-sm btn-square flex-fit' onClick={toggleNavigation}>
                    =
                </div>
            </If>
            <span className='logo flex-auto'>Invitoo</span>


            <div onClick={toggleSimulator} className={`btn btn-sm btn-square flex-fit ${viewModeStates?.simulator.show ? 'btn-active' : 'btn-outline'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 23C6.45 23 5.979 22.804 5.587 22.412C5.195 22.02 4.99934 21.5493 5 21V3C5 2.45 5.196 1.979 5.588 1.587C5.98 1.195 6.45067 0.999335 7 1H17C17.55 1 18.021 1.196 18.413 1.588C18.805 1.98 19.0007 2.45067 19 3V21C19 21.55 18.804 22.021 18.412 22.413C18.02 22.805 17.5493 23.0007 17 23H7ZM12 20.5C12.2833 20.5 12.521 20.404 12.713 20.212C12.905 20.02 13.0007 19.7827 13 19.5C13 19.2167 12.904 18.979 12.712 18.787C12.52 18.595 12.2827 18.4993 12 18.5C11.7167 18.5 11.479 18.596 11.287 18.788C11.095 18.98 10.9993 19.2173 11 19.5C11 19.7833 11.096 20.021 11.288 20.213C11.48 20.405 11.7173 20.5007 12 20.5ZM7 16H17V6H7V16Z" fill="currentColor" />
                </svg>
            </div>
        </div>
    );
}
