import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './PatientProfile.css'

function PatientProfile() {
  // Fetch patient data based on the ID from the URL
  const { id } = useParams();
  // You can fetch the patient data from an API using id

  // Replace this with the actual patient data
  const patient = {
    id: id,
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    casepapers: [
      { id: 1, date: '2023-01-15', description: 'Initial checkup' },
      // Add more case papers
    ],
  };

  return (
    <div className="container mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Patient Profile</Card.Title>
          <Card.Text>
            <strong>Name:</strong> {patient.name}
            <br />
            <strong>Age:</strong> {patient.age}
            <br />
            <strong>Gender:</strong> {patient.gender}
          </Card.Text>
          <div className="mb-3">
            <Button as={Link} to={`/patients/${id}/add-casepaper`} variant="primary">
              Add Case Paper
            </Button>
            <Button as={Link} to="/PatientSearch" variant="secondary">
              Back to Search
            </Button>
          </div>
          <Card.Title>Case Papers</Card.Title>
          <ul>
            {patient.casepapers.map((casepaper) => (
              <li key={casepaper.id}>{casepaper.date} - {casepaper.description}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PatientProfile;
