// find the average marks
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
const Namelist = scores.map((item,index,arr)=>
    
let avg = scores.reduce((sum, curr,)=>(sum+curr/scores.length));


console.log("avg", avg);