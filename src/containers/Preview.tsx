import React, { useEffect } from 'react';

import { InvitationPage } from './Design/InvitationPage';
import { TitlePage } from './Design/TitlePage';

export function Preview() {

    return (
        <div className='bg-white flex flex-col overflow-hidden font-serif items-center select-none h-[2000px] w-full overflow-y-auto'>
            <TitlePage />
            <InvitationPage />
        </div>
    );
}


