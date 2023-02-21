import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export const SignOut = () => {
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }

        console.log("Signed out");
    };

    return (
        <div>
            <button onClick={ logout }> Sign Out </button>
        </div>
    );
};