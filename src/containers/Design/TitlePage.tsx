import mainImg from '../../images/green.jpeg';

export function TitlePage() {
    return (
        <>
            {/* 01 Page - simple */}
            <div className='full-screen flex flex-col justify-center gap-1 items-center font-serif '>
                <div className='text-gray-800 tracking-widest text-xs'> Minsoo {'&'} Yebin</div>
                <div className='w-5/6 h-3/5 bg-black my-4'>
                    <img src={mainImg} className='h-full w-full object-cover' alt="main" />
                </div>
                <div className='text-gray-800 tracking-widest text-sm'>SAVE OUR DATE</div>
                <div className='text-gray-800 tracking-widest text-xs'>23. 06. 26. 1 pm</div>
            </div>

            {/* 02 Page - modern */}
            <div className='full-screen flex flex-col font-serif '>
                <div className='w-full h-4/5 flex-fit bg-white'>
                    <img src={mainImg} className='h-full grayscale w-full object-cover' alt="main" />
                </div>
                <div className='flex-grow bg-white p-4 flex flex-col w-full text-center'>
                    <div className='text-yellow-950 opacity-70 tracking-widest text-xs'>
                        SAVE OUR DATE<br /><br />
                        Yebin & Minsoo<br />
                        23. 06. 26. 1 pm
                    </div>
                </div>

                <div className='absolute z-10 left-0 right-0 top-0 bottom-0 p-3 '>
                    <div className='w-full h-full border-2 border-yellow-950 rounded opacity-20'>
                    </div>
                </div>
            </div>

            {/* 03 Page - ellipse */}
            <div className='full-screen'>
                <div className='frame-container'>
                    <div className='frame-ellipse overflow-hidden'>
                        <img src={mainImg} className='h-full object-cover' alt="main" />
                    </div>
                    <div className='z-10 font-bold left-4 top-10 text-4xl absolute  font-serif'>
                        09/13 <br />
                        Married <br />
                    </div>
                    <div className='z-10 font-bold text-right right-4 bottom-10 text-4xl absolute  font-serif'>
                        Yebin <br />
                        {'&'} Minsoo <br />
                    </div>
                </div>
            </div>



        </>
    )
}
