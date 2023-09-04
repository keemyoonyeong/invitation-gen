import { If } from '../components/common';
import React from 'react';
import { infoState } from '../recoil/info';
import { useRecoilState } from 'recoil';

export function InfoPage() {
  const [infoStates, setInfoStates] = useRecoilState(infoState)

  return (
    <div id='info' className='flex flex-col lg:flex-row gap-10 p-10'>
      {/* 일시 */}
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">날짜 🗓</h2>
          <input type="text" placeholder="2023-10-12" className="input whitespace-nowrap input-bordered w-full max-w-xs" />

          <p>시간</p>
          <input type="text" placeholder="2023-10-12" className="input whitespace-nowrap input-bordered w-full max-w-xs" />
        </div>
      </div>

      {/* 식장 */}
      <div className="card card-side bg-base-100 shadow-xl">

        <div className="card-body">
          <h2 className="card-title">식장 💒</h2>

          <p>주소</p>
          <input type="text" placeholder="이름" className="input whitespace-nowrap input-bordered w-full max-w-xs" />

          <p>정확한 웨딩홀 이름</p>
          <input type="text" placeholder="이름" className="input whitespace-nowrap input-bordered w-full max-w-xs" />
        </div>
      </div>
    </div>
  )
}
