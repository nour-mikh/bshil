import { signInWithGoogle } from "../firebase/config"

const signup = () => {

  return(
    <div className="Login">
      <h1 id="main-title"> Title <br/> Your other title</h1>
      <button id="start-button" onClick={signInWithGoogle}> Let's start! </button>

    </div>
  )
}

export default signup;

