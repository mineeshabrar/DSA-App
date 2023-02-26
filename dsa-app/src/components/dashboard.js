import { auth } from "../config/firebase";
import { app } from "../config/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const Dashboard = () => {
    const isValidEmail = async () => {
        try {
            const  db = getFirestore(app);

            const docRef = doc(db, "students", "");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            } else {
            console.log("No such document!");
            }
        } catch (err) {
            console.error(err);
        }
    };

    if (isValidEmail(auth.currentUser.email)) {

    }

    return (
        <div>
            Sign In to view your dashboard.
        </div>
    );
};