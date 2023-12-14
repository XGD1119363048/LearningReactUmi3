import React from 'react'
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'

export default function Cinemas() {
  return (
    <div>
      <NavBar
        onBack={() => {
          console.log('click')
        }}
        back="北京"
        backArrow={false}
        right={<SearchOutline />}
      >标题</NavBar>
      Cinemas
    </div>
  )
}
