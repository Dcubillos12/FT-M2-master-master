import React from 'react'

export default function Temp({label , value}) {
  return (
    <div>
        <span className='label'>{label}</span>
        <span className='value'>{value}</span>
    </div>
  )
}
