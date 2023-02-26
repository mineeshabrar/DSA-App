import { auth } from "../config/firebase";
import { Secy } from "./secy/secy";
import { Student } from "./student/student";

export const Dashboard = () => {
    const email = auth.currentUser.email;
    if (email.endsWith('pec.edu.in')) {
        if (email.match(".*[.]bt[0-9]{2}[a-z]{3,4}@pec[.]edu[.]in")) {
            return (
                <Student/>
            );
        }

        else {
            return (
                <Secy/>
            );
        }
    }

    return (
        <div>
            Sign In to view your dashboard.
        </div>
    );
};