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
const Namelist = scores.map((item,index,arr)=>{
    return item.name
}
)

console.log("Namelist", Namelist);

// print the name list a as an array