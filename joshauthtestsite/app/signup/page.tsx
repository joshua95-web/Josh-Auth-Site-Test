import { useState } from 'react'

export default function SignUpPage() {
event?.preventDefault()

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const name = event.target.name
    if (name === 'username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>)
    event?.preventDefault()

}


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="username"
                onChange={handleChange} 
                placeholder="Username" 
                />
             <input 
                type="password"
                name="password" 
                onChange={handleChange}
                placeholder="Password" 
                />
                <button type="submit">Submit</button>
        <input type="password" placeholder="Confirm Password" />
        </form>
        </div>
    )
}