import { auth } from "../config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export const SignIn = () => {
    const authenticateFirebase = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
            console.log("User authenticated: " + auth.currentUser.email);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <button onClick={ authenticateFirebase }> Sign In With Google </button>
        </div>
    );
};