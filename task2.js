const scores = [
    {
        marks: 32,
        name: "Yvette Merritt"
    },
    {
        marks: 57,
        name: "Lillian Ellis"
    },
    {
        marks: 22,
        name: "Mccall Carter"
    },
    {
        marks: 21,
        name: "Pate Collier"
    },
    {
        marks: 91,
        name: "debra Beard"
    },
    {
        marks: 20,
        name: "Hatfield Hodge"
    }
]; 
const passedstudents= scores.filter(n => n.marks >=40);

console.log(passedstudents);
// >=40 pass..find those student that passed (object)