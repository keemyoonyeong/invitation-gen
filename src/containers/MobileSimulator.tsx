import React from 'react';
import { useRecoilValue } from 'recoil';
import { viewModeState } from '../recoil/viewMode';

export function MobileSimulator({ children }: any) {
    const viewModeStates = useRecoilValue(viewModeState)
    if (!viewModeStates.simulator.show) {
        return null
    }

    // https://flowbite.com/docs/components/device-mockups/
    return (
        <div className='bg-gray-100 p-10 flex flex-col align-center justify-center gap-4'>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-scroll w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    {children}
                </div>
            </div>

            <div>
                {/* <select className="select select-bordered w-full max-w-xs select-sm">
                    <option disabled selected>Pick the best JS framework</option>
                    <option>Svelte</option>
                    <option>Vue</option>
                    <option>React</option>
                </select> */}
            </div>
        </div>
    );
}
