const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vodLegends",
  {
    useMongoClient: true
  }
);
///---------------------------Coach Test Seed----------------------------------///

const coachSeed = [
  {
      firstName : "Legend",
      lastName : "Calabrese",
      lolUserName : "sil3ntsnip3r",
      role : "ADC",
      elo : "Diamond",
      server : "Europe",
      mainChampion : "Ashe",
      language : "English",
      rating : "9.2",
      bio : "Experienced Silent Sniper ready to help you climb the ladder!",
      password : "canttouchthis"
  },
  {
      firstName : "James",
      lastName : "DeChavez",
      lolUserName : "azianpinoy",
      role : "Support",
      elo : "Diamond",
      server : "North America",
      mainChampion : "Zyra",
      language : "English",
      rating : "9.9",
      bio : "Diamond Support main. Will help you improve in no time!",
      password : "password"
  },
  {
      firstName : "Bob",
      lastName : "Loblaw",
      lolUserName : "Bobloblaw",
      role : "Mid",
      elo : "Masters",
      server : "North America",
      mainChampion : "Orianna",
      language : "English",
      rating : "8.2",
      bio : "Masters tier coach at your service! Escape from ELO hell!",
      password : "password2"
  },
  {
      firstName : "Is",
      lastName : "ThatHim",
      lolUserName : "Faker",
      role : "Mid",
      elo : "Challenger",
      server : "Korea",
      mainChampion : "Leblanc",
      language : "English",
      rating : "10",
      bio : "I am Faker. The best to ever the game! Get on my level.",
      password : "password3"
  },
  {
      firstName : "Brian",
      lastName : "Helm",
      lolUserName : "BHelm",
      role : "top",
      elo : "Diamond",
      server : "North America",
      mainChampion : "Gnar",
      language : "English",
      rating : "9.4",
      bio : "I will work with you to help you improve! Lets Go!",
      password : "password4"
  },
  {
      firstName : "Pat",
      lastName : "Hustad",
      lolUserName : "Mystorya",
      role : "Jungle",
      elo : "Diamond",
      server : "North America",
      mainChampion : "Rengar",
      language : "English",
      rating : "9.1",
      bio : "Seven years coaching experience. Hop aboard the Freelo train!",
      password : "password5"
  },
];

db.Coaches
  .remove({})
  .then(() => db.Coaches.collection.insertMany(coachSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

///---------------------------Student Test Seed----------------------------------///


  const studentSeed = [
  {
    firstName: "James",
    lastName: "DeChavez",
    lolUserName: "azianpinoy",
    role: "support",
    bio: "The most awesome rookie ever",
    password: "rook1234"
  }
];
console.log(studentSeed);
db.Students
  .remove({})
  .then(() => db.Students.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



///---------------------------Request Test Seed----------------------------------///


  const requestSeed = [
  {
    student : "Azianpinoy",
    coach : "Bobloblaw",
    titleOfVOD : "Zyra Game #1",
    vodURL : "https://www.youtube.com/embed/8PMvZS8WAhs",
    messageToCoach : "hey coach!",
    comments : [ 
        {
            "commentNumber" : 1,
            "timeStamp" : "3:22",
            "textArea" : "Comment 1"
        }, 
        {
            "commentNumber" : 2,
            "timeStamp" : "5:22",
            "textArea" : "Comment 2"
        }, 
        {
            "commentNumber" : 3,
            "timeStamp" : "6:22",
            "textArea" : "Comment 3"
        }, 
        {
            "commentNumber" : 4,
            "timeStamp" : "11:22",
            "textArea" : "Comment 4"
        }, 
        {
            "commentNumber" : 5,
            "timeStamp" : "13:22",
            "textArea" : "Comment 5"
        }, 
        {
            "commentNumber" : 6,
            "timeStamp" : "18:22",
            "textArea" : "Comment 6"
        }, 
        {
            "commentNumber" : 7,
            "timeStamp" : "22:22",
            "textArea" : "Comment 7"
        }, 
        {
            "commentNumber" : 8,
            "timeStamp" : "32:22",
            "textArea" : "Comment 8"
        }, 
        {
            "commentNumber" : 9,
            "timeStamp" : "36:22",
            "textArea" : "Comment 9"
        }, 
        {
            "commentNumber" : 10,
            "timeStamp" : "42:22",
            "textArea" : "Comment 10"
        }
    ]
  },
  {
    student : "Azianpinoy",
    coach : "Bobloblaw",
    titleOfVOD : "Zyra Game #2",
    vodURL : "https://www.youtube.com/embed/8PMvZS8WAhs",
    messageToCoach : "hey coach!",
    comments : [ 
        {
            "commentNumber" : 1,
            "timeStamp" : "3:22",
            "textArea" : "Comment 1"
        }, 
        {
            "commentNumber" : 2,
            "timeStamp" : "5:22",
            "textArea" : "Comment 2"
        }, 
        {
            "commentNumber" : 3,
            "timeStamp" : "6:22",
            "textArea" : "Comment 3"
        }, 
        {
            "commentNumber" : 4,
            "timeStamp" : "11:22",
            "textArea" : "Comment 4"
        }, 
        {
            "commentNumber" : 5,
            "timeStamp" : "13:22",
            "textArea" : "Comment 5"
        }, 
        {
            "commentNumber" : 6,
            "timeStamp" : "18:22",
            "textArea" : "Comment 6"
        }, 
        {
            "commentNumber" : 7,
            "timeStamp" : "22:22",
            "textArea" : "Comment 7"
        }, 
        {
            "commentNumber" : 8,
            "timeStamp" : "32:22",
            "textArea" : "Comment 8"
        }, 
        {
            "commentNumber" : 9,
            "timeStamp" : "36:22",
            "textArea" : "Comment 9"
        }, 
        {
            "commentNumber" : 10,
            "timeStamp" : "42:22",
            "textArea" : "Comment 10"
        }
    ]
  },
  {
    student : "Azianpinoy",
    coach : "Bobloblaw",
    titleOfVOD : "Zyra Game #3",
    vodURL : "https://www.youtube.com/embed/8PMvZS8WAhs",
    messageToCoach : "hey coach!",
    comments : [ 
        {
            "commentNumber" : 1,
            "timeStamp" : "3:22",
            "textArea" : "Comment 1"
        }, 
        {
            "commentNumber" : 2,
            "timeStamp" : "5:22",
            "textArea" : "Comment 2"
        }, 
        {
            "commentNumber" : 3,
            "timeStamp" : "6:22",
            "textArea" : "Comment 3"
        }, 
        {
            "commentNumber" : 4,
            "timeStamp" : "11:22",
            "textArea" : "Comment 4"
        }, 
        {
            "commentNumber" : 5,
            "timeStamp" : "13:22",
            "textArea" : "Comment 5"
        }, 
        {
            "commentNumber" : 6,
            "timeStamp" : "18:22",
            "textArea" : "Comment 6"
        }, 
        {
            "commentNumber" : 7,
            "timeStamp" : "22:22",
            "textArea" : "Comment 7"
        }, 
        {
            "commentNumber" : 8,
            "timeStamp" : "32:22",
            "textArea" : "Comment 8"
        }, 
        {
            "commentNumber" : 9,
            "timeStamp" : "36:22",
            "textArea" : "Comment 9"
        }, 
        {
            "commentNumber" : 10,
            "timeStamp" : "42:22",
            "textArea" : "Comment 10"
        }
    ]
  },
  {
    student : "Azianpinoy",
    coach : "Bobloblaw",
    titleOfVOD : "Zyra Game #4",
    vodURL : "https://www.youtube.com/embed/8PMvZS8WAhs",
    messageToCoach : "hey coach!",
    comments : [ 
        {
            "commentNumber" : 1,
            "timeStamp" : "3:22",
            "textArea" : "Comment 1"
        }, 
        {
            "commentNumber" : 2,
            "timeStamp" : "5:22",
            "textArea" : "Comment 2"
        }, 
        {
            "commentNumber" : 3,
            "timeStamp" : "6:22",
            "textArea" : "Comment 3"
        }, 
        {
            "commentNumber" : 4,
            "timeStamp" : "11:22",
            "textArea" : "Comment 4"
        }, 
        {
            "commentNumber" : 5,
            "timeStamp" : "13:22",
            "textArea" : "Comment 5"
        }, 
        {
            "commentNumber" : 6,
            "timeStamp" : "18:22",
            "textArea" : "Comment 6"
        }, 
        {
            "commentNumber" : 7,
            "timeStamp" : "22:22",
            "textArea" : "Comment 7"
        }, 
        {
            "commentNumber" : 8,
            "timeStamp" : "32:22",
            "textArea" : "Comment 8"
        }, 
        {
            "commentNumber" : 9,
            "timeStamp" : "36:22",
            "textArea" : "Comment 9"
        }, 
        {
            "commentNumber" : 10,
            "timeStamp" : "42:22",
            "textArea" : "Comment 10"
        }
    ]
  },
  {
    student : "Azianpinoy",
    coach : "Bobloblaw",
    titleOfVOD : "Zyra Game #5",
    vodURL : "https://www.youtube.com/embed/8PMvZS8WAhs",
    messageToCoach : "hey coach!",
    comments : [ 
        {
            "commentNumber" : 1,
            "timeStamp" : "3:22",
            "textArea" : "Comment 1"
        }, 
        {
            "commentNumber" : 2,
            "timeStamp" : "5:22",
            "textArea" : "Comment 2"
        }, 
        {
            "commentNumber" : 3,
            "timeStamp" : "6:22",
            "textArea" : "Comment 3"
        }, 
        {
            "commentNumber" : 4,
            "timeStamp" : "11:22",
            "textArea" : "Comment 4"
        }, 
        {
            "commentNumber" : 5,
            "timeStamp" : "13:22",
            "textArea" : "Comment 5"
        }, 
        {
            "commentNumber" : 6,
            "timeStamp" : "18:22",
            "textArea" : "Comment 6"
        }, 
        {
            "commentNumber" : 7,
            "timeStamp" : "22:22",
            "textArea" : "Comment 7"
        }, 
        {
            "commentNumber" : 8,
            "timeStamp" : "32:22",
            "textArea" : "Comment 8"
        }, 
        {
            "commentNumber" : 9,
            "timeStamp" : "36:22",
            "textArea" : "Comment 9"
        }, 
        {
            "commentNumber" : 10,
            "timeStamp" : "42:22",
            "textArea" : "Comment 10"
        }
    ]
  },
  {
    student : "Azianpinoy",
    coach : "Bobloblaw",
    titleOfVOD : "Zyra Game #6",
    vodURL : "https://www.youtube.com/embed/8PMvZS8WAhs",
    messageToCoach : "hey coach!",
    comments : [ 
        {
            "commentNumber" : 1,
            "timeStamp" : "3:22",
            "textArea" : "Comment 1"
        }, 
        {
            "commentNumber" : 2,
            "timeStamp" : "5:22",
            "textArea" : "Comment 2"
        }, 
        {
            "commentNumber" : 3,
            "timeStamp" : "6:22",
            "textArea" : "Comment 3"
        }, 
        {
            "commentNumber" : 4,
            "timeStamp" : "11:22",
            "textArea" : "Comment 4"
        }, 
        {
            "commentNumber" : 5,
            "timeStamp" : "13:22",
            "textArea" : "Comment 5"
        }, 
        {
            "commentNumber" : 6,
            "timeStamp" : "18:22",
            "textArea" : "Comment 6"
        }, 
        {
            "commentNumber" : 7,
            "timeStamp" : "22:22",
            "textArea" : "Comment 7"
        }, 
        {
            "commentNumber" : 8,
            "timeStamp" : "32:22",
            "textArea" : "Comment 8"
        }, 
        {
            "commentNumber" : 9,
            "timeStamp" : "36:22",
            "textArea" : "Comment 9"
        }, 
        {
            "commentNumber" : 10,
            "timeStamp" : "42:22",
            "textArea" : "Comment 10"
        }
    ]
  },
];
console.log(requestSeed);
db.Requests
  .remove({})
  .then(() => db.Requests.collection.insertMany(requestSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
