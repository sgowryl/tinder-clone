import { useState } from "react"

const AuthModal = ({setShowModal}) =>{

    const[email,setEmail] = useState(null)
    const[passowrd,setPassword] = useState(null)
    const[confirmPassword,setConfirmPassword] = useState(null)
    const[error,setError] = useState(null)

    console.log(email,passowrd,confirmPassword)

    const handleClick=()=>{
        setShowModal(false)
    }
    const isSignUp = true
    const handleSubmit = (e) => {
        e.preventDefault()

        try{
            if(isSignUp&&(passowrd!==confirmPassword)){
                setError('Passwords need to match')
            }
            console.log('make a post request to our database')
        } catch(error){
            console.log(error)
        }
    }
    return(
        <div className="auth-modal">
            <div className="close-icon"  onClick={handleClick}>x</div>
            <h2>{isSignUp?'CREAT ACCOUNT':'LOG IN'}</h2>
            <p>By clicking log in, you agree to our terms. Learn how we process your data in privacy policy and cookie policy</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                <input className="secondary-button" type="submit"/>
                <p>{error}</p>

            </form>
            <hr/>
            <h2>
                GET THE APP
            </h2>

        </div>
    )
}

export default AuthModal