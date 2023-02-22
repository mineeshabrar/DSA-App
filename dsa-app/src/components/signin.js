import { auth } from "../config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export const SignIn = () => {
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
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