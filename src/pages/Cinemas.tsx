import React from 'react'
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { connect, useHistory } from 'umi'

function Cinemas(props: any) {
  const history = useHistory()
  return (
    <div>
      <NavBar
        onBack={() => {
          // console.log('click')
          history.push('/city')
        }}
        back={props.cityName}
        backArrow={false}
        right={<SearchOutline />}
      >标题</NavBar>
      Cinemas
    </div>
  )
}

export default connect((state: any) => {
  console.log(state)
  return {
    a: 1,
    cityName: state.city.cityName
  }
})(Cinemas)
