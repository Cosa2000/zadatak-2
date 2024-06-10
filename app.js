
class Student {
  constructor(name, address, phone, course) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.course = course;
  }
}

async function fetchStudentData() {
  const response = await fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt');
  const data = await response.text();
  return data;
}

function parseStudentData(data) {
  const students = [];
  const lines = data.split('\n');

  for (let i = 0; i < lines.length; i += 4) {
    const name = lines[i];
    const address = lines[i + 1];
    const phone = lines[i + 2];
    const course = lines[i + 3];
    students.push(new Student(name, address, phone, course));
  }

  return students;
}

function displayStudents(students) {
  const textarea = document.getElementById('student-data');

  students.forEach(student => {
    textarea.value += `Name: ${student.name}\n`;
    textarea.value += `Address: ${student.address}\n`;
    textarea.value += `Phone: ${student.phone}\n`;
    textarea.value += `Course: ${student.course}\n\n`;
  });
}

async function main() {
  const data = await fetchStudentData();
  const students = parseStudentData(data);
  displayStudents(students);
}

main();



  
    
  

