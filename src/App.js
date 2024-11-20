import React, { useState } from 'react';
import './App.css';

const courseData = {
  CSE111: {
    "CourseName": "ORIENTATION TO COMPUTING-I",
    "Weightage": {
      "Attendance": { "Achieved": 20, "Total": 20 },
      "ContinuousAssessment": { "Achieved": 39, "Total": 50 },
      "ObjectiveTypeEndTerm": { "Achieved": 24, "Total": 30 }
    }
  },
  CSE326: {
    "CourseName": "INTERNET PROGRAMMING LABORATORY",
    "Weightage": {
      "Attendance": { "Achieved": 5, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 25, "Total": 25 },
      "ObjectiveTypeEndTerm": { "Achieved": 33, "Total": 50 },
      "ObjectiveTypeMidTerm": { "Achieved": 18, "Total": 20 }
    }
  },
  INT108: {
    "CourseName": "PYTHON PROGRAMMING",
    "Weightage": {
      "Attendance": { "Achieved": 5, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 49, "Total": 50 },
      "PracticalEndTerm": { "Achieved": 45, "Total": 45 }
    }
  },
  MEC136: {
    "CourseName": "ENGINEERING GRAPHICS AND DIGITAL FABRICATION",
    "Weightage": {
      "Attendance": { "Achieved": 5, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 13, "Total": 25 },
      "TheoryEndTerm": { "Achieved": 39, "Total": 50 },
      "TheoryMidTerm": { "Achieved": 13, "Total": 20 }
    }
  },
  MTH174: {
    "CourseName": "ENGINEERING MATHEMATICS",
    "Weightage": {
      "Attendance": { "Achieved": 5, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 15, "Total": 25 },
      "ObjectiveTypeEndTerm": { "Achieved": 30, "Total": 50 },
      "ObjectiveTypeMidTerm": { "Achieved": 10, "Total": 20 }
    }
  },
  PES318: {
    "CourseName": "SOFT SKILLS-I",
    "Weightage": {
      "Attendance": { "Achieved": 15, "Total": 15 },
      "ContinuousAssessment": { "Achieved": 21, "Total": 30 },
      "PracticalEndTerm": { "Achieved": 34, "Total": 55 }
    }
  },
  PHY110: {
    "CourseName": "ENGINEERING PHYSICS",
    "Weightage": {
      "Attendance": { "Achieved": 5, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 17, "Total": 25 },
      "ObjectiveTypeEndTerm": { "Achieved": 38, "Total": 50 },
      "ObjectiveTypeMidTerm": { "Achieved": 16, "Total": 20 }
    }
  },
  CHE110: {
    "CourseName": "ENVIRONMENTAL STUDIES",
    "Weightage": {
      "Attendance": { "Achieved": 4, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 28, "Total": 40 },
      "ObjectiveTypeEndTerm": { "Achieved": 19, "Total": 35 },
      "ObjectiveTypeMidTerm": { "Achieved": 12, "Total": 20 }
    }
  },
  CSE101: {
    "CourseName": "COMPUTER PROGRAMMING",
    "Weightage": {
      "Attendance": { "Achieved": 5, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 48, "Total": 50 },
      "PracticalEndTerm": { "Achieved": 33, "Total": 45 }
    }
  },
  CSE121: {
    "CourseName": "ORIENTATION TO COMPUTING-II",
    "Weightage": {
      "Attendance": { "Achieved": 20, "Total": 20 },
      "ContinuousAssessment": { "Achieved": 43, "Total": 50 },
      "ObjectiveTypeEndTerm": { "Achieved": 24, "Total": 30 }
    }
  },
  CSE320: {
    "CourseName": "SOFTWARE ENGINEERING",
    "Weightage": {
      "Attendance": { "Achieved": 4, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 17, "Total": 25 },
      "ObjectiveTypeEndTerm": { "Achieved": 17, "Total": 50 },
      "ObjectiveTypeMidTerm": { "Achieved": 15, "Total": 20 }
    }
  },
  ECE249: {
    "CourseName": "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING",
    "Weightage": {
      "Attendance": { "Achieved": 4, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 18, "Total": 25 },
      "ObjectiveTypeEndTerm": { "Achieved": 9, "Total": 15 },
      "ObjectiveTypeMidTerm": { "Achieved": 14, "Total": 20 },
      "TheoryEndTerm": { "Achieved": 10, "Total": 35 }
    }
  },
  ECE279: {
    "CourseName": "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY",
    "Weightage": {
      "Attendance": { "Achieved": 5, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 30, "Total": 45 },
      "PracticalEndTerm": { "Achieved": 49, "Total": 50 }
    }
  },
  INT306: {
    "CourseName": "DATABASE MANAGEMENT SYSTEMS",
    "Weightage": {
      "Attendance": { "Achieved": 4, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 13, "Total": 50 },
      "PracticalEndTerm": { "Achieved": 39, "Total": 45 }
    }
  },
  MTH401: {
    "CourseName": "DISCRETE MATHEMATICS",
    "Weightage": {
      "Attendance": { "Achieved": 5, "Total": 5 },
      "ContinuousAssessment": { "Achieved": 11, "Total": 25 },
      "ObjectiveTypeEndTerm": { "Achieved": 11, "Total": 15 },
      "ObjectiveTypeMidTerm": { "Achieved": 14, "Total": 20 },
      "TheoryEndTerm": { "Achieved": 25, "Total": 35 }
    }
  },
  PEL125: {
    "CourseName": "UPPER INTERMEDIATE COMMUNICATION SKILLS-I",
    "Weightage": {
      "Attendance": { "Achieved": 15, "Total": 15 },
      "ContinuousAssessment": { "Achieved": 25, "Total": 30 },
      "ObjectiveTypeEndTerm": { "Achieved": 29, "Total": 40 },
      "ObjectiveTypeMidTerm": { "Achieved": 9, "Total": 15 }
    }
  }
};

function App() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [courseDetails, setCourseDetails] = useState(null);

  const handleSelection = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleSubmit = () => {
    setCourseDetails(courseData[selectedCourse]);
  };

  return (
    <div className="app">
      <h1>Course Data Viewer</h1>
      <div className="selector">
        <label htmlFor="courseSelect">Select a Course: </label>
        <select id="courseSelect" value={selectedCourse} onChange={handleSelection}>
          <option value="">--Select a Course--</option>
          {Object.keys(courseData).map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>Show Details</button>
      </div>
      {courseDetails && (
        <div className="courseDetails">
          <h2>{courseDetails.CourseName}</h2>
          <ul>
            {Object.entries(courseDetails.Weightage).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value.Achieved} / {value.Total}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
