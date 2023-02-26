import { auth } from "../config/firebase";
// import { app } from "../config/firebase";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

export const Dashboard = () => {
    if (auth.currentUser.email.endsWith('pec.edu.in')) {
        
    }

    return (
        <div>
            Sign In to view your dashboard.
        </div>
    );
};