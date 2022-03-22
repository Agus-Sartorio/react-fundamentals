// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  /*  const [error, setError] = React.useState(null) */
  const [userName, setUserName] = React.useState('')

  /*   const handleChange = e => {
    const {value} = e.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  } */

  const handleChange = e => {
    setUserName(e.target.value.toLowerCase())
  }

  let myRef = React.useRef()

  const handleSubmit = e => {
    e.preventDefault()
    /* alert(e.target.elements[0].value) */
    alert(myRef.current.value)
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div>
        <label htmlFor="user">Username:</label>
        <input
          ref={myRef}
          id="user"
          type="text"
          onChange={handleChange}
          value={userName}
        />
      </div>
      {/* <div role="alert" style={{color: 'red', backgroundColor: 'black'}}>
        {error}
      </div> */}
      <button /* disabled={error === null ? undefined : true} */ type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
