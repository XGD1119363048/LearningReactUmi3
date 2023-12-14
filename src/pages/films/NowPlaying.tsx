import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi'

export default function NowPlaying() {
  const [list, setList] = useState([])
  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5339622', {
      headers: {
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1700309676199269302665217"}',
        'X-Host':'mall.film-ticket.film.list'
      }
    }).then(res => res.json()).then(res => {
      // console.log(res.data.films)
      setList(res.data.films)
    })
  }, [])

  const history = useHistory()

  return (
    <div>
      {
        list.map((item: any) => <li key={item.filmId} onClick={() => {
          // console.log(history)
          history.push(`/detail/${item.filmId}`)
        }}>
          {item.name}
        </li>)
      }
    </div>
  )
}
