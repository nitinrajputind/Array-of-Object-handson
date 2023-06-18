let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

// Question :1
studentRecords.map((item) => {
  console.log(item.name.toUpperCase());
});

// Question 2
studentRecords.map((item) => {
  if (item.marks > 50) {
    console.log(item);
  }
});

// Question 3
studentRecords.map((item) => {
  if (item.marks > 50 && item.id > 120) {
    console.log(item);
  }
});

// Question 4
const sum = studentRecords.reduce((total, current) => {
  return total + current.marks;
}, 0);
console.log(sum);

// Question 5
studentRecords.map((item) => {
  if (item.marks > 50) {
    console.log(item.name);
  }
});

// Question 6

const sum2 = studentRecords
  .filter((item) => {
    return item.id > 120;
  })
  .reduce((total, current) => {
    return total + current.marks;
  }, 0);

console.log(sum2);

// Question 7

function calculateTotalMarksWithGrace(student) {
  if (student.marks < 50) {
    // Add 15 grace marks if the student's marks are less than 50
    return student.marks + 15;
  } else {
    return student.marks;
  }
}

// Calculate and print total marks for students with marks greater than 50 after applying grace
for (let i = 0; i < studentRecords.length; i++) {
  let student = studentRecords[i];
  let totalMarks = calculateTotalMarksWithGrace(student);

  if (totalMarks > 50) {
    console.log(`Student: ${student.name}, Total Marks: ${totalMarks}`);
  }
}

// Question 8
let student = [
    { name: 'John', class: '10th', rollNo: 1 },
    { name: 'Jane', class: '9th', rollNo: 2 },
    { name: 'Alice', class: '12th', rollNo: 3 },
    { name: 'Bob', class: '11th', rollNo: 4 },
    { name: 'Sarah', class: '8th', rollNo: 5 },
    { name: 'Mike', class: '10th', rollNo: 6 }
  ];
  
console.log(student);




