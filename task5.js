// find the toppers name
const scores = [
    {
        marks: 32,
        name: "Yvette Merritt"
    },
    {   marks: 57,
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

let topscorername = scores.filter(n => n.marks >= 90);
console.log(topscorername);