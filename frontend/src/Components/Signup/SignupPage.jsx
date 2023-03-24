import React, { useState, useEffect } from 'react' // Used to create and modify React components based on state changes
import axios from 'axios'   // Used to make api calls to your backend
import './SignupPage.css'

function SignupPage() {
    // Can create state variables using useState and apply them using useEffect

    /*  EXAMPLE:
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const [email, setEmail] = useState('')
        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
    */

    // Can create functions to handle state changes, state actions, and api calls

    /*  EXAMPLE:

        [!]State Change[!]
        const handleUsernameChange = (event) => {
            setUsername(event.target.value)
        }

        [!]State Action[!]
        useEffect(() => {
            setUsername();
            setPassword();
            setEmail();
            setFirstName();
            setLastName();
        }, [])

        [!]API Call[!]
        const handleSubmit = (event) => {
            event.preventDefault()
            axios.post('/api/users', { username, password, email, firstName, lastName })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
    */

    // Can return JSX to render the component at the end and use your state variables and functions
    return (
        <div className="signup-page">
            <h1>Signup Page</h1>
        </div>
    )
}

export default SignupPage;