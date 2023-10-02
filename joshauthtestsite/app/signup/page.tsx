import { useState } from 'react'

export default function SignUpPage() {
event?.preventDefault()

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

function handleUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const name = event.target.name
    if (name === 'username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }


    return (
        <div>
            <form onSubmit={}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        </form>
        </div>
    )
}