import React, { useEffect } from 'react'
import { NavBar, DotLoading } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { connect, useHistory } from 'umi'

function Cinemas(props: any) {
  const history = useHistory()
  useEffect(() => {
    if (props.list.length === 0) {
      props.dispatch({
        type: 'cinemas/getList',
        payload: {
          cityId: props.cityId
        }
      })
    } else {
      console.log('缓存')
    }
  }, [])

  return (
    <div>
      <NavBar
        onBack={() => {
          // console.log('click')
          history.push('/city')

          // 清空 cinemas 数据
          props.dispatch({
            type: 'cinemas/clearList'
          })
        }}
        back={props.cityName}
        backArrow={false}
        right={<SearchOutline />}
      >标题</NavBar>

      {
        props.loading && <div style={{ fontSize: 14, textAlign: 'center' }}>
          <DotLoading />
        </div>
      }

      <ul>
        {
          props.list.map((item: any) => <li key={item.cinemaId}>
            {item.name}
          </li>)
        }
      </ul>
    </div>
  )
}

export default connect((state: any) => {
  // console.log(state)
  return {
    a: 1,
    cityName: state.city.cityName,
    cityId: state.city.cityId,
    list: state.cinemas.list,
    loading: state.loading.global
  }
})(Cinemas)
