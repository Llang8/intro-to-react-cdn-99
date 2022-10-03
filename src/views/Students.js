import Student from '../components/Student';
import FeaturedStudent from '../components/FeaturedStudent';
import { useState } from 'react';

function Students() {
  const [students, setStudents] = useState([
    {
        "id": 1,
        "name": "Lucas Lang",
        "jobTitle": "Software Developer 👩‍💻",
        "skills": {
            "JavaScript": 9,
            "Python": 8,
            "Java": 6,
            "CSS": 9
        }
    },
    {
        "id": 2,
        "name": "Juneun Park",
        "jobTitle": "Software Developer 👩‍💻",
        "skills": {
            "JavaScript": 1,
            "Python": 4,
            "Java": 1,
            "CSS": 5
        }
    },
    {
        "id": 3,
        "name": "Jessica Kulas",
        "jobTitle": "Software Developer 👩‍💻",
        "skills": {
            "JavaScript": 2,
            "Python": 5,
            "Java": 1,
            "CSS": 8
        }
    },
    {
        "id": 4,
        "name": "Dennis Xiong",
        "jobTitle": "Software Engineer 👩‍💻",
        "skills": {
            "JavaScript": 5,
            "Python": 7,
            "SQL": 7,
            "Java": 6,
            "CSS": 9
        }
    },
    {
        "id": 5,
        "name": "Cyrus Y",
        "jobTitle": "Software Developer 👩‍💻",
        "skills": {
            "JavaScript": 5,
            "Python": 6,
            "Java": 1,
            "CSS": 8
        }
    },
    {
        "id": 6,
        "name": "Christopher",
        "jobTitle": "Bad Ninja 🐱‍👤",
        "skills": {
            "Backflips": 2,
            "Climbing": 5,
            "Holding Breath": 4,
            "Throwing Stars": 2
        }
    },
    {
        "id": 7,
        "name" : "Victor Vergara",
        "jobTitle": "Software Developer 👩‍💻",
        "skills": {
            "weatherManipulation": 0,
            "Python": -2,
            "eating": 100,
            "CSS": 1
        }
    },
    {
        "id": 8,
        "name": "Bryan Rodriguez",
        "jobTitle": "emperor 👑",
        "skills": {
            "running an empire": 10,
            "feeding it's people": 10,
            "gaining mor territory": 10,
            "corruption": 15000
        }
    },
    {
        "id": 9,
        "name": "George Pupiales",
        "jobTitle": "Certified Ape 🎫🦧",
        "skills": {
            "JavaScript": 2,
            "Python": -6,
            "Java": "???",
            "IQ": 3
        }
    }
  ])

  const [featuredStudent, setFeaturedStudent] = useState(students[0])


  return (
    <div className="App">
      <header className="App-header">
        <h2>Featured Student</h2>
        <FeaturedStudent student={featuredStudent} />
        <hr />
        { students.map((student) => <Student clickHandler={setFeaturedStudent} key={student.id} student={student} />) }
      </header>
    </div>
  );
}

export default Students;
