import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './PatientSearch.css';

function PatientForm({ onAddPatient, onCancel }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSave = () => {
    const newPatient = {
      name,
      age: parseInt(age),
      gender,
    };

    onAddPatient(newPatient);

    // Clear the form
    setName('');
    setAge('');
    setGender('');
  };

  return (
    <div className="patient-form">
      <h2>Add New Patient</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          className="form-control"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <input
          type="text"
          className="form-control"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSave(); // Call the save function when Enter key is pressed
            }
          }}
          required
        />
      </div>
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
      <button className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
}

function PatientSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [addingPatient, setAddingPatient] = useState(false);

  const handleSearch = () => {
    const filteredPatients = searchResults.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredPatients);
  };

  const handleAddPatient = (newPatient) => {
    setSearchResults([...searchResults, newPatient]);
    setAddingPatient(false);
  };

  const handleCancel = () => {
    setAddingPatient(false);
  };

  return (
    <div className="container mt-4 patient-search">
      <h1>Patient Search</h1>
      {addingPatient ? (
        <PatientForm onAddPatient={handleAddPatient} onCancel={handleCancel} />
      ) : (
        <div className="search-bar">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a patient by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(); // Call the search function when Enter key is pressed
                }
              }}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
          {addingPatient ? null : (
            <button className="btn btn-secondary" onClick={() => setAddingPatient(true)}>
              Add Patient
            </button>
          )}
        </div>
      )}

      <ul>
        {searchResults.map((patient, index) => (
          <div className="patient-cards">
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{patient.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Age: {patient.age}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Gender: {patient.gender}</Card.Subtitle>
                <Link to={`/patients/${patient.id}`}>
                  <Button variant="primary">View Profile</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PatientSearch;
