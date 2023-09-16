import React, { useEffect } from 'react';

import { nameState } from '../../recoil/name';
import { useRecoilState } from 'recoil';

const { kakao } = window


export function InvitationPage() {
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
        <>
            <div className='full-screen flex flex-col justify-center gap-3 items-center'>

                <div className=' text-yellow-900 text-sm border-b border-yellow-900 border-opacity-50 py-1 px-1 w-max'>
                    Invitation
                </div>
                <div className='text-sm text-center'>
                    Two are better than one; <br />
                    because they have a good reward<br />
                    for their labour.
                </div>

                <div className=' text-yellow-900 text-sm'>
                    <FlowerIcon />
                </div>
                {/* <div className='flex flex-row items-center gap-1'>
                    <div className="badge">신랑</div>
                    <span>{nameStates.men?.name}</span>
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <div className="badge">신부</div>
                    <span>{nameStates.women?.name}</span>
                </div> */}

                <div className='h-4'> </div>

                <div className=' text-yellow-900 text-sm border-b border-yellow-900 border-opacity-50 py-1 px-1 w-max'>
                    Location
                </div>
                <div id="map" className='w-full h-[200px]'></div>
                <div className='text-xs font-sans text-center'>
                    여의도 웨딩컨벤션 9F
                </div>
            </div>
        </>
    )
}


function FlowerIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_105_2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.83 2 13.566 2.577 14.105 3.156C14.51 3.59 14.896 4.137 15.214 4.766C16.1272 4.29404 17.132 4.02587 18.159 3.98C19.233 3.93 19.931 4.788 19.995 5.666L20 5.798V8C19.9999 9.90519 19.32 11.7478 18.0827 13.1965C16.8454 14.6452 15.1317 15.6049 13.25 15.903L13 15.938V19.008C14.076 18.339 15.662 17.554 17.758 17.03C17.8862 16.9956 18.02 16.9871 18.1516 17.0049C18.2831 17.0228 18.4098 17.0666 18.5243 17.134C18.6387 17.2013 18.7386 17.2907 18.8181 17.3971C18.8975 17.5034 18.9551 17.6245 18.9873 17.7533C19.0195 17.8821 19.0257 18.016 19.0056 18.1473C18.9855 18.2785 18.9395 18.4044 18.8702 18.5177C18.8009 18.6309 18.7098 18.7292 18.6021 18.8069C18.4944 18.8846 18.3723 18.94 18.243 18.97C16.8869 19.3012 15.5841 19.8217 14.373 20.516L14.028 20.724L13.87 20.824L13.584 21.016L13.338 21.191L13.133 21.347L12.967 21.48L12.793 21.628C12.56 21.836 12.329 22 12 22C11.721 22 11.512 21.882 11.312 21.719L11.042 21.488L10.879 21.356L10.674 21.201L10.43 21.025L10.292 20.932L9.987 20.733L9.819 20.63L9.452 20.417C8.28994 19.773 7.04737 19.2864 5.757 18.97C5.62881 18.9389 5.50804 18.8827 5.40166 18.8046C5.29528 18.7266 5.20539 18.6283 5.13717 18.5154C5.06895 18.4025 5.02374 18.2772 5.00416 18.1467C4.98457 18.0163 4.99099 17.8832 5.02305 17.7553C5.05511 17.6273 5.11217 17.5069 5.19095 17.4011C5.26972 17.2953 5.36866 17.2061 5.48206 17.1387C5.59546 17.0713 5.72107 17.027 5.85167 17.0083C5.98227 16.9897 6.11526 16.997 6.243 17.03C8.198 17.519 9.71 18.236 10.778 18.873L11 19.008V15.938C9.11114 15.6997 7.36914 14.7957 6.08688 13.3884C4.80462 11.9812 4.06611 10.1628 4.004 8.26L4 8V5.784C4 4.874 4.692 3.934 5.807 3.964C6.541 3.984 7.661 4.132 8.807 4.727C9.09593 4.15593 9.46203 3.62731 9.895 3.156C10.435 2.577 11.169 2 12 2ZM6 5.976V8C6.00018 9.41797 6.50239 10.7901 7.4176 11.8732C8.33281 12.9562 9.60193 13.6803 11 13.917C10.985 10.136 9.947 8.212 8.889 7.217C7.98 6.362 6.934 6.074 6.16 5.99L6 5.977V5.976ZM18 5.996C17.212 6.071 16.078 6.356 15.104 7.283C14.044 8.29 13.015 10.205 13 13.917C14.3563 13.6874 15.5925 12.9989 16.5018 11.9667C17.4111 10.9346 17.9382 9.62138 17.995 8.247L18 8V5.996ZM12 4.01C11.75 4.114 11.539 4.325 11.358 4.519C11.03 4.87 10.698 5.359 10.444 5.939C11.052 6.557 11.589 7.341 12.012 8.325C12.436 7.362 12.971 6.592 13.574 5.981C13.3483 5.44443 13.0332 4.95007 12.642 4.519C12.462 4.325 12.25 4.114 12 4.01Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_105_2">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
