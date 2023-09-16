import React, { useRef } from 'react';

import { If } from '../components/common';
import { nameState } from '../recoil/name';
import { useSetRecoilState } from 'recoil';

export function NamePage() {
  const setNameStates = useSetRecoilState(nameState)

  return (
    <div id='name' className='flex flex-col lg:flex-row gap-10 p-10'>
      {/* 신부 */}
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">신부 👰🏻‍♀️</h2>

          <p>신부님 이름을 적어주세요</p>
          <Input placeholder='이름' onBlur={(value) => {
            setNameStates((prev) => {
              return { ...prev, women: { ...prev.women, name: value } }
            })
          }} />
          <p>아버님</p>
          <ParentInfo />

          <p>어머님</p>
          <ParentInfo />
        </div>
      </div>

      {/* 신랑 */}
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">신랑 🤵🏻‍♂️</h2>

          <p>신랑님 이름을 적어주세요</p>
          <Input placeholder='이름' onBlur={(value) => {
            setNameStates((prev) => {
              return { ...prev, men: { ...prev.men, name: value } }
            })
          }} />
          <p>아버님</p>
          <ParentInfo />

          <p>어머님</p>
          <ParentInfo />
        </div>
      </div>
    </div>
  )
}

type InputProps = {
  placeholder: string
  onBlur: (text: string) => void
}

function Input(props: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const value = e.target.value
    props.onBlur?.(value)
  }

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={props.placeholder ?? '내용을 입력하세요'}
      onBlur={handleBlur}
      onKeyUp={(e) => {
        if (e.key === 'Enter') { inputRef?.current?.blur() }
      }}
      className="input whitespace-nowrap input-bordered w-full max-w-xs"
    />
  )
}

function ParentInfo() {
  return (
    <>
      <div className='flex flex-row gap-2'>
        <input type="text" placeholder="이름" className="input whitespace-nowrap input-bordered w-full max-w-xs" />
      </div>
      <div className="form-control flex flex-row gap-4">
        <label className="label cursor-pointer justify-start gap-2">
          <span className="label-text text-gray-400 flex-fit">고인 표시</span>
          <input type="checkbox" className="checkbox" />
        </label>

        <If v={true}>
          <div className='flex flex-row gap-6'>
            <div className="form-control">
              <label className="label justify-start gap-2 cursor-pointer">
                <span className="label-text">국화꽃</span>
                <input type="radio" name="radio-10" className="radio checked:bg-gray-500" />
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-start gap-2 cursor-pointer">
                <span className="label-text">故</span>
                <input type="radio" name="radio-10" className="radio checked:bg-gray-500" />
              </label>
            </div>
          </div>
        </If>
      </div>
    </>
  )
}
