const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyAK4KkTeOzQEZl-xetDQp7809ON6sJDUd8",
    authDomain: "dsa-app-e8d34.firebaseapp.com",
    projectId: "dsa-app-e8d34",
    storageBucket: "dsa-app-e8d34.appspot.com",
    messagingSenderId: "444013291259",
    appId: "1:444013291259:web:3028342483bd3f5124325e"
});
  
var db = firebase.firestore();

var student = [
    {
      "sid": 19105001,
      "email": "karanjitkour.bt19ece@pec.edu.in",
      "name": "Karanjit Kour"
    },
    {
      "sid": 19105002,
      "email": "manpreetsingh.bt19ece@pec.edu.in",
      "name": "MANPREET SINGH"
    },
    {
      "sid": 19105005,
      "email": "geetanshgarg.bt19ece@pec.edu.in",
      "name": "Geetansh Garg"
    },
    {
      "sid": 19105006,
      "email": "shubham.bt19ece@pec.edu.in",
      "name": "Shubham"
    },
    {
      "sid": 19105007,
      "email": "amangupta.bt19ece@pec.edu.in",
      "name": "Aman Gupta"
    },
    {
      "sid": 19105008,
      "email": "peeyushvatsi.bt19ece@pec.edu.in",
      "name": "Peeyush Vatsi"
    },
    {
      "sid": 19105009,
      "email": "sauravgarg.bt19ece@pec.edu.in",
      "name": "Saurav Garg"
    },
    {
      "sid": 19105010,
      "email": "shubhamsoni.bt19ece@pec.edu.in",
      "name": "Shubham Soni"
    },
    {
      "sid": 19105011,
      "email": "dharasudeepdipak.bt19ece@pec.edu.in",
      "name": "Sudeep Dhara"
    },
    {
      "sid": 19105012,
      "email": "bhupatibhardwaj.bt19ece@pec.edu.in",
      "name": "Bhupati Bhardwaj"
    },
    {
      "sid": 19105013,
      "email": "amanbhatt.bt19ece@pec.edu.in",
      "name": "Aman Bhatt"
    },
    {
      "sid": 19105014,
      "email": "shubhamkaushik.bt19ece@pec.edu.in",
      "name": "Shubham Kaushik"
    },
    {
      "sid": 19105015,
      "email": "raghavmittal.bt19ece@pec.edu.in",
      "name": "Raghav mittal"
    },
    {
      "sid": 19105016,
      "email": "ayush.bt19ece@pec.edu.in",
      "name": "Ayush"
    },
    {
      "sid": 19105017,
      "email": "ankushbansal.bt19ece@pec.edu.in",
      "name": "Ankush Bansal"
    },
    {
      "sid": 19105018,
      "email": "Raghavbansal.bt19ece@pec.edu.in",
      "name": "Raghav bansal"
    },
    {
      "sid": 19105019,
      "email": "ayushjain.bt19ece@pec.edu.in",
      "name": "Ayush Jain"
    },
    {
      "sid": 19105020,
      "email": "tanzeelurrehman.bt19ece@pec.edu.in",
      "name": "Tanzeel"
    },
    {
      "sid": 19105021,
      "email": "diamond.bt19ece@pec.edu.in",
      "name": "Diamond"
    },
    {
      "sid": 19105022,
      "email": "suparvlakhanpal.bt19ece@pec.edu.in",
      "name": "Suparv Lakhanpal"
    },
    {
      "sid": 19105023,
      "email": "harjeetsingh.bt19ece@pec.edu.in",
      "name": "Harjeet Singh"
    },
    {
      "sid": 19105025,
      "email": "aumchopra.bt19ece@pec.edu.in",
      "name": "Aum Chopra"
    },
    {
      "sid": 19105026,
      "email": "palashvij.bt19ece@pec.edu.in",
      "name": "Palash"
    },
    {
      "sid": 19105027,
      "email": "prathammittal.bt19ece@pec.edu.in",
      "name": "Pratham Mittal"
    },
    {
      "sid": 19105028,
      "email": "amansingla.bt19ece@pec.edu.in",
      "name": "Aman Singla"
    },
    {
      "sid": 19105029,
      "email": "akshitmaheshwari.bt19ece@pec.edu.in",
      "name": "Akshit Maheshwari"
    },
    {
      "sid": 19105030,
      "email": "harshkumar.bt19ece@pec.edu.in",
      "name": "Harsh kumar"
    },
    {
      "sid": 19105031,
      "email": "anshchawla.bt19ece@pec.edu.in",
      "name": "Ansh Chawla"
    },
    {
      "sid": 19105032,
      "email": "sanketkumar.bt19ece@pec.edu.in",
      "name": "Sanket Kumar"
    },
    {
      "sid": 19105033,
      "email": "rajkuvarjitsingh.bt19ece@pec.edu.in",
      "name": "Rajkuvarjit Singh"
    },
    {
      "sid": 19105034,
      "email": "lakshay.bt19ece@pec.edu.in",
      "name": "Lakshay"
    },
    {
      "sid": 19105035,
      "email": "aarushi.bt19ece@pec.edu.in",
      "name": "Aarushi"
    },
    {
      "sid": 19105036,
      "email": "vibhanshukaushal.bt19ece@pec.edu.in",
      "name": "Vibhanshu Kaushal"
    },
    {
      "sid": 19105037,
      "email": "sahilbhagat.bt19ece@pec.edu.in",
      "name": "Sahil Bhagat"
    },
    {
      "sid": 19105038,
      "email": "karannaurd.bt19ece@pec.edu.in",
      "name": "Karan Naurd"
    },
    {
      "sid": 19105039,
      "email": "sahiljassal.bt19ece@pec.edu.in",
      "name": "Sahil Jassal"
    },
    {
      "sid": 19105040,
      "email": "celina.bt19ece@pec.edu.in",
      "name": "Celina"
    },
    {
      "sid": 19105041,
      "email": "sahirdev.bt19ece@pec.edu.in",
      "name": "Sahir dev"
    },
    {
      "sid": 19105042,
      "email": "akhil.bt19ece@pec.edu.in",
      "name": "Akhil"
    },
    {
      "sid": 19105043,
      "email": "nidhithakur.bt19ece@pec.edu.in",
      "name": "Nidhi Thakur"
    },
    {
      "sid": 19105044,
      "email": "bhavneetkaur.bt19ece@pec.edu.in",
      "name": "Bhavneet Kaur"
    },
    {
      "sid": 19105045,
      "email": "rohansonthwal.bt19ece@pec.edu.in",
      "name": "Rohan Sonthwal"
    },
    {
      "sid": 19105046,
      "email": "gurnoorsingh.bt19ece@pec.edu.in",
      "name": "gurnoor singh"
    },
    {
      "sid": 19105047,
      "email": "anamikamirupa.bt19ece@pec.edu.in",
      "name": "Anamika Mirupa"
    },
    {
      "sid": 19105048,
      "email": "sayamvirsinghnurpuri.bt19ece@pec.edu.in",
      "name": "Sayamvir Singh"
    },
    {
      "sid": 19105049,
      "email": "ashishranjan.bt19ece@pec.edu.in",
      "name": "Ashish Ranjan"
    },
    {
      "sid": 19105051,
      "email": "ayushkumarjha.bt19ece@pec.edu.in",
      "name": "Ayush Kumar Jha"
    },
    {
      "sid": 19105052,
      "email": "rahultikoo.bt19ece@pec.edu.in",
      "name": "RAHUL TIKOO"
    },
    {
      "sid": 19105053,
      "email": "mineeshabrar.bt19ece@pec.edu.in",
      "name": "Mineesha Brar"
    },
    {
      "sid": 19105054,
      "email": "pranavjoshi.bt19ece@pec.edu.in",
      "name": "Pranav"
    },
    {
      "sid": 19105055,
      "email": "yatharthkhanna.bt19ece@pec.edu.in",
      "name": "Yatharth khanna"
    },
    {
      "sid": 19105056,
      "email": "shubhampokhriyal.bt19ece@pec.edu.in",
      "name": "Shubham Pokhriyal"
    },
    {
      "sid": 19105057,
      "email": "harbakshishsinghnayyar.bt19ece@pec.edu.in",
      "name": "Harbakshish Singh Nayyar"
    },
    {
      "sid": 19105058,
      "email": "shivendhir.bt19ece@pec.edu.in",
      "name": "Shiven Dhir"
    },
    {
      "sid": 19105060,
      "email": "ruhaanpratapsinghsaini.bt19ece@pec.edu.in",
      "name": "Ruhaan Pratap Singh Saini"
    },
    {
      "sid": 19105061,
      "email": "abhinavjindal.bt19ece@pec.edu.in",
      "name": "abhinav jindal"
    },
    {
      "sid": 19105062,
      "email": "pallavsemwal.bt19ece@pec.edu.in",
      "name": "Pallav Semwal"
    },
    {
      "sid": 19105063,
      "email": "shivamkansal.bt19ece@pec.edu.in",
      "name": "Shivam Kansal"
    },
    {
      "sid": 19105064,
      "email": "agampreetsingh.bt19ece@pec.edu.in",
      "name": "Agampreet Singh"
    },
    {
      "sid": 19105065,
      "email": "devanshsharma.bt19ece@pec.edu.in",
      "name": "Devansh Sharma"
    },
    {
      "sid": 19105066,
      "email": "shubhambansal.bt19ece@pec.edu.in",
      "name": "Shubham"
    },
    {
      "sid": 19105067,
      "email": "kriti.bt19ece@pec.edu.in",
      "name": "Kriti"
    },
    {
      "sid": 19105068,
      "email": "anubhavtuknayat.bt19ece@pec.edu.in",
      "name": "Anubhav Tuknayat"
    },
    {
      "sid": 19105069,
      "email": "ishpreetkaur.bt19ece@pec.edu.in",
      "name": "Ishpreet"
    },
    {
      "sid": 19105070,
      "email": "nakulkankarwal.bt19ece@pec.edu.in",
      "name": "Nakul Kankarwal"
    },
    {
      "sid": 19105071,
      "email": "shreygera.bt19ece@pec.edu.in",
      "name": "Shrey Gera"
    },
    {
      "sid": 19105072,
      "email": "abhishekmittal.bt19ece@pec.edu.in",
      "name": "Abhishek Mittal"
    },
    {
      "sid": 19105073,
      "email": "deepakkumar.bt19ece@pec.edu.in",
      "name": "Deepak Kumar"
    },
    {
      "sid": 19105073,
      "email": "deepakkumar.bt19ece@pec.edu.in",
      "name": "Deepak kumar"
    },
    {
      "sid": 19105074,
      "email": "shashankkaundal.bt19ece@pec.edu.in",
      "name": "Shashank Kaundal"
    },
    {
      "sid": 19105075,
      "email": "abhikaransinghsethi.bt19ece@pec.edu.in",
      "name": "Abhikaran Singh Sethi"
    },
    {
      "sid": 19105077,
      "email": "shreyassinha.bt19ece@pec.edu.in",
      "name": "Shreyas Sinha"
    },
    {
      "sid": 19105078,
      "email": "tejveersingh.bt19ece@pec.edu.in",
      "name": "Tejveer Singh"
    },
    {
      "sid": 19105079,
      "email": "harshveersingh.bt19ece@pec.edu.in",
      "name": "Harshveer Singh"
    },
    {
      "sid": 19105080,
      "email": "aniket.bt19ece@pec.edu.in",
      "name": "Aniket Sood"
    },
    {
      "sid": 19105081,
      "email": "shivangikanodia.bt19ece@pec.edu.in",
      "name": "Shivangi Kanodia"
    },
    {
      "sid": 19105082,
      "email": "mantejsingh.bt19ece@pec.edu.in",
      "name": "Mantej Singh"
    },
    {
      "sid": 19105085,
      "email": "aayushbahl.bt19ece@pec.edu.in",
      "name": "Aayush Bahl"
    },
    {
      "sid": 19105086,
      "email": "arihantjain.bt19ece@pec.edu.in",
      "name": "Arihant Jain"
    },
    {
      "sid": 19105087,
      "email": "garvitbanga.bt19ece@pec.edu.in",
      "name": "Garvit Banga"
    },
    {
      "sid": 19105088,
      "email": "aniketsood.bt19ece@pec.edu.in",
      "name": "Aniket Sood"
    },
    {
      "sid": 19105089,
      "email": "sakshamarora.bt19ece@pec.edu.in",
      "name": "Saksham Arora"
    },
    {
      "sid": 19105090,
      "email": "muditkorpaul.bt19ece@pec.edu.in",
      "name": "Mudit Korpaul"
    },
    {
      "sid": 19105091,
      "email": "bhavuk.bt19ece@pec.edu.in",
      "name": "Bhavuk"
    },
    {
      "sid": 19105092,
      "email": "ashok.bt19ece@pec.edu.in",
      "name": "Ashok Singla"
    },
    {
      "sid": 19105093,
      "email": "anubhavkumar.bt19ece@pec.edu.in",
      "name": "Anubhav Kumar"
    },
    {
      "sid": 19105094,
      "email": "lovish.bt19ece@pec.edu.in",
      "name": "lovish"
    },
    {
      "sid": 19105095,
      "email": "ashishjasuja.bt19ece@pec.edu.in",
      "name": "Ashish jasuja"
    },
    {
      "sid": 19105096,
      "email": "harshdeepsinghbatra.bt19ece@pec.edu.in",
      "name": "Harshdeep Singh"
    },
    {
      "sid": 19105097,
      "email": "adityapandey.bt19ece@pec.edu.in",
      "name": "Aditya pandey"
    },
    {
      "sid": 19105098,
      "email": "mehak.bt19ece@pec.edu.in",
      "name": "Mehak Gupta"
    },
    {
      "sid": 19105099,
      "email": "amansachdeva.bt19ece@pec.edu.in",
      "name": "Aman Sachdeva"
    },
    {
      "sid": 19105100,
      "email": "kshitijsethijain.bt19ece@pec.edu.in",
      "name": "Kshitij sethi jain"
    },
    {
      "sid": 19105102,
      "email": "architghai.bt19ece@pec.edu.in",
      "name": "Archit Ghai"
    },
    {
      "sid": 19105103,
      "email": "sahilgarg.bt19ece@pec.edu.in",
      "name": "Sahil Garg"
    },
    {
      "sid": 19105104,
      "email": "viveksingh.bt19ece@pec.edu.in",
      "name": "Vivek Singh"
    },
    {
      "sid": 19105105,
      "email": "Aditya.bt19ece@pec.edu.in",
      "name": "Aditya"
    },
    {
      "sid": 19105106,
      "email": "sahejpreetsingh.bt19ece@pec.edu.in",
      "name": "Sahejpreet singh"
    },
    {
      "sid": 19105107,
      "email": "aayushsehgal.bt19ece@pec.edu.in",
      "name": "Aayush Sehgal"
    },
    {
      "sid": 19105108,
      "email": "aayushrana.bt19ece@pec.edu.in",
      "name": "Aayush Rana"
    },
    {
      "sid": 19105109,
      "email": "manishkumar.bt19ece@pec.edu.in",
      "name": "Manish Kumar"
    },
    {
      "sid": 19105110,
      "email": "akshitmuval.bt19ece@pec.edu.in",
      "name": "Akshit Muval"
    },
    {
      "sid": 19105111,
      "email": "shubhamgarg.bt19ele@pec.edu.in",
      "name": "Shubham Garg"
    },
    {
      "sid": 19105112,
      "email": "kareena.bt19civil@pec.edu.in",
      "name": "Kareena"
    },
    {
      "sid": 19105113,
      "email": "ritikasharma.bt19meta@pec.edu.in",
      "name": "Ritika Sharma"
    },
    {
      "sid": 19105114,
      "email": "utkarshthatai.bt19civil@pec.edu.in",
      "name": "Utkarsh Thatai"
    },
    {
      "sid": 19105115,
      "email": "aabhaschopra.bt19ele@pec.edu.in",
      "name": "Aabhas Chopra"
    },
    {
      "sid": 19105116,
      "email": "arshiyagarg.bt19ele@pec.edu.in",
      "name": "Arshiya Garg"
    },
    {
      "sid": 19105117,
      "email": "shinambajaj.bt19ele@pec.edu.in",
      "name": "Shinam Bajaj"
    },
    {
      "sid": 19105118,
      "email": "lavanyasharma.bt19ele@pec.edu.in",
      "name": "Lavanya Sharma"
    },
    {
      "sid": 19105119,
      "email": "abhilashchoudhary.bt19civil@pec.edu.in",
      "name": "Abhilash"
    },
    {
      "sid": 19105120,
      "email": "abhishekjain.bt19meta@pec.edu.in",
      "name": "Abhishek Jain"
    },
    {
      "sid": 19105121,
      "email": "ishitamittal.bt19mech@pec.edu.in",
      "name": "Ishita Mittal"
    },
    {
      "sid": 19105122,
      "email": "raghav.bt19prod@pec.edu.in",
      "name": "Raghav"
    },
    {
      "sid": 19105123,
      "email": "annchitbhatnagar.bt19mech@pec.edu.in",
      "name": "Annchit Bhatnagar"
    },
    {
      "sid": 19105124,
      "email": "kanupriyathakur.bt19ele@pec.edu.in",
      "name": "Kanupriya Thakur"
    },
    {
      "sid": 19105125,
      "email": "sanyamgoel.bt19civil@pec.edu.in",
      "name": "Sanyam Goel"
    },
    {
      "sid": 19105126,
      "email": "sukhmanpreetkaur.bt19ece@pec.edu.in",
      "name": "Sukhmanpreet Kaur"
    },
    {
      "sid": 19105127,
      "email": "ishikawalia.bt19prod@pec.edu.in",
      "name": "Ishika Walia"
    },
    {
      "sid": 19105084,
      "email": "vaibhavrohaan.bt19ece@pec.edu.in",
      "name": "Vaibhav Rohaan"
    },
    {
      "sid": 19105050,
      "email": "prasantkumar.bt19ece@pec.edu.in",
      "name": "Prasant Kumar"
    },
    {
      "sid": 19105062,
      "email": "pallavsemwal.bt19ece@pec.edu.in",
      "name": "Pallav Semwal"
    },
    {
      "sid": 19105085,
      "email": "aayushbahl.bt19ece@pec.edu.in",
      "name": "Aayush Bahl"
    }
  ]

student.forEach(function(obj) {
    db.collection("student").add({
        sid: obj.sid,
        name: obj.name,
        email: obj.email
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});