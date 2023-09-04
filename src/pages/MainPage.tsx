import { InfoPage } from './InfoPage';
import { MobileSimulator } from '../containers/MobileSimulator';
import { NamePage } from './NamePage';
import { Navigation } from '../containers/Navigation';
import { Preview } from '../containers/Preview';
import React from 'react';
import { pageState } from '../recoil/page';
import { useRecoilValue } from 'recoil';

export function MainPage() {
    return (
        <div className='relative flex flex-row w-full flex-grow overflow-hidden'>
            <Navigation />

            {/* 시뮬레이터 */}
            <MobileSimulator>
                <Preview />
            </MobileSimulator>

            <div className='flex-grow bg-gray-100 h-full overflow-y-auto'>
                <NamePage />
                <InfoPage />
            </div>
        </div>
    );
}
