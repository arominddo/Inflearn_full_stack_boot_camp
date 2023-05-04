const grab = {
    name: "그랩",
    age : 27
};
const people = ["민수", "철수"];

let name = grab.name;
let age = grab.age;
let minsoo = people[0];
let chul = people[1];


const [p1, p2, p3] = people;


//console.log(p1);

people.forEach((a,b,c) => {console.log(c)})

