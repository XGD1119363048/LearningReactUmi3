import React, { useEffect, useState } from 'react'
import { IndexBar, List } from 'antd-mobile'
import { useHistory } from 'umi'

export default function City() {
  const [list, setList] = useState<any>([])

  const filterCity = (cities: any) => {
    // console.log(cities)
    const letterArr: Array<string> = []
    const newList = []
    for (let i = 65; i < 91; i++) {
      letterArr.push(String.fromCharCode(i))
    }
    for(let m in letterArr) {
      let cityItems: any = cities.filter((item: any) => item.pinyin.substring(0, 1).toUpperCase() === letterArr[m])
      cityItems.length && newList.push({
        title: letterArr[m],
        items: cityItems
      })
    }
    // console.log(newList)

    return newList
  }

  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?k=6952037', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1700309676199269302665217"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => res.json()).then(res => {
      // console.log(res.data.cities)

      setList(filterCity(res.data.cities))
    })
  }, [])

  const history = useHistory()

  const changeCity = (item: any) => {
    console.log(item.name, item.cityId)

    history.push('/cinemas')
  }

  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar>
        {list.map((item: any) => {
          const { title, items } = item
          return (
            <IndexBar.Panel
              index={title}
              title={title}
              key={title}
            >
              <List>
                {items.map((item: any, index: number) => (
                  <List.Item key={index} onClick={() => changeCity(item)}>{item.name}</List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>
  )
}
