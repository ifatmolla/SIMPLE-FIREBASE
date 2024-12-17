import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../../Firebase/Firebase.init";
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider();
    const githuprovide = new GithubAuthProvider();

    const handlegoogleprovider = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                console.log('ERROR', error)
                setUser(null)
            })
    }

    const handlesingout = () => {
        signOut(auth)
            .then(() => {
                console.log('sing out done')
                setUser(null)
            })
            .catch(error => console.log(error))
    }
    const handlegithubsingin = () => {
      signInWithPopup(auth, githuprovide)
      .then(result =>{
        setUser(result.user)
        console.log(result.user)
        
      })
      .catch(error => console.log('ERROR', error))
    }
    return (
        <div>

            {/* <button onClick={handlesingout}> SingOut</button> 
            {user && <h4>{user.displayName}</h4>}
          <button onClick={handlegoogleprovider}>Login with Google</button>  */}
          {user && <h4>{user.displayName}</h4>}

            {
                user ?
                    <button onClick={handlesingout}>  SingOut</button>
                    :
                   <>
                    <button onClick={handlegoogleprovider}>Login with Google</button>
                    <button onClick={handlegithubsingin}>Login With Github</button>
                   </>
            }
        </div>
    );
};

export default Login;