import React from 'react'
import cx from "classnames";

export const Loading = ({ className = "w-60" }) => {
  return (
    <div className={cx("m-auto p-4", className)}>
      <div className='w-full h-2 rounded-full bg-slate-300 overflow-hidden'>
        <div className='h-full bg-primary loading-bar'></div>
        <div className='h-full -mt-2 bg-white opacity-20 loading-bar-2'></div>
      </div>
    </div>
  )
}
