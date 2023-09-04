import React, { useEffect } from 'react';

import { fullName } from '../controllers/string';
import { nameState } from '../recoil/name';
import { useRecoilState } from 'recoil';

const { kakao } = window

export function Preview() {
    const [nameStates, setNameStates] = useRecoilState(nameState);

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);
    }, [])

    return (
        <div className='bg-white flex flex-col items-center select-none h-[2000px] w-full py-10 overflow-y-auto'>
            <div className='flex flex-row items-center gap-1'>
                <div className="badge">신랑</div>
                <span>{nameStates.men?.name}</span>
            </div>
            <div className='flex flex-row items-center gap-1'>
                <div className="badge">신부</div>
                <span>{nameStates.women?.name}</span>
            </div>

            <div id="map" className='w-full h-[200px]'></div>

        </div>
    );
}
