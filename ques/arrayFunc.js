// D/f between map and forEarch
// map returns a new array and forEach iterate over an existing array.

// Q1- return only the names in capital format
let students = [
  { name: "abhishek", rollNo: 1, marks: 99 },
  { name: "atul", rollNo: 12, marks: 49 },
  { name: "monu", rollNo: 11, marks: 49 },
  { name: "monu", rollNo: 14, marks: 59 },
];


let names = students.map((data)=>(data.name.toUpperCase()))

console.log(names)

//Q2 - return only details of students who scored more than 50

let filtered = students.filter((student)=>( student.marks>50 && student.rollNo>10 ));
console.log(filtered);


// Q3 sum of all marks of students

 let totalMarks = students.reduce((acc , curr)=>{
    console.log(acc)
        // console.log(acc.marks+curr.marks);
 },0)