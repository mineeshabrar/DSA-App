import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth"

export const SignIn = () => {
    const signInWithGoogle = async () => {
        try {
            signInWithPopup(auth, googleProvider);
            console.log(auth.currentUser.email);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <button onClick={ signInWithGoogle }> Sign In With Google </button>
        </div>
    );
};