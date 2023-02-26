import { app } from "./config/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

var clubs =
[
  {
    "name": "saasc",
    "events": [
      "saasc1",
      "saasc2"
    ]
  },
  {
    "name": "ieee",
    "events": [
      "ieee1",
      "ieee2"
    ]
  }
]

var events =
[
  {
    "name": "saasc1",
    "attendees": [
      "19101",
      "19102"
    ]
  },
  {
    "name": "saasc2",
    "attendees": [
      "19102"
    ]
  }
]

var students =
[
  {
    "sid": 19101,
    "email": "student1@pec.edu.in",
    "name": "Name1",
    "events": [
      "saasc1",
      "ieee2"
    ]
  },
  {
    "sid": 19102,
    "email": "student1@pec.edu.in",
    "name": "Name2",
    "events": [
      "saasc2"
    ]
  }
]

const  db = getFirestore(app);

students.forEach(async function(obj) {
  await setDoc(doc(db, "students", String(obj.sid)), obj);  
});

clubs.forEach(async function(obj) {
  await setDoc(doc(db, "clubs", obj.name), obj);
});

events.forEach(async function(obj) {
  await setDoc(doc(db, "events", obj.name), obj);
});