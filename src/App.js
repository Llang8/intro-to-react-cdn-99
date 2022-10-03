import logo from './logo.svg';
import Counter from './components/Counter';
import Student from './components/Student';
import { useState } from 'react';

function App() {
  const [students, setStudents] = useState([
    {
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
        <Student student={featuredStudent} />
        <hr />
        { students.map((student) => <Student key={student.name} onClick={() => setFeaturedStudent(student)} student={student} />) }
        <Counter defaultValue={3} />
      </header>
    </div>
  );
}

export default App;
