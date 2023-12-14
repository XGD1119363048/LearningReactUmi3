import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    fetch('/users').then(res => res.json()).then(res => {
      console.log(res)
    })
  }, [])

  const history = useHistory()
  
  return (
    <div>
      <input type='text' value={username} onChange={(evt) => {
        setUsername(evt.target.value)
      }} />
      <input type='password' value={password} onChange={(evt) => {
        setPassword(evt.target.value)
      }} />

      <button onClick={() => {
        fetch('/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        }).then(res => res.json()).then(res => {
          console.log(res.ok)
          if (res.ok) {
            localStorage.setItem('token', 'mytoken')
            history.push('/center')
          } else {
            alert('用户名密码不匹配')
          }
        })
      }}>登录</button>
    </div>
  )
}
