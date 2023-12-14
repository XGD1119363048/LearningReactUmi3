import React from 'react'
import { Redirect, useLocation } from 'umi'

export default function Films(props: any) {
  // if (props.location.pathname === '/films') {
  //   return <Redirect to='/films/nowplaying' /> 
  // }
  const location = useLocation()
  // console.log(location)
  if (location.pathname === '/films') {
    return <Redirect to='/films/nowplaying' /> 
  }
  return (
    <div>
      <div style={{
        height: '200px',
        background: 'yellow'
      }}>大轮播</div>
      {props.children}
    </div>
  )
}