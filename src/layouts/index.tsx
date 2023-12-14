import React from 'react'
import { NavLink } from 'umi'
import './index.less'

export default function IndexLayout(props: any) {
  return (
    <div>
      {props.children}

      <ul>
        <li>
          <NavLink to='/films' activeClassName='active'>Films</NavLink>
        </li>
        <li>
          <NavLink to='/cinemas' activeClassName='active'>Cinemas</NavLink>
        </li>
        <li>
          <NavLink to='/center' activeClassName='active'>Center</NavLink>
        </li>
      </ul>
    </div>
  )
}
