import React, { useEffect, useState } from 'react';

const CvsPage = () => {
  const [cvs, setCvs] = useState([]);
  
  useEffect(() => {
    const fetchCVs = async () => {
      const response = await fetch('/api/cv');
      const data = await response.json();
      setCvs(data);
    };

    fetchCVs();
  }, []);

  return (
    <div>
      <h1>Submitted CVs</h1>
      {cvs.length === 0 ? (
        <p>No CVs found.</p>
      ) : (
        <ul>
          {cvs.map((cv) => (
            <li key={cv._id}>
              <h3>{cv.fullName}</h3>
              <p>Email: {cv.email}</p>
              <p>Phone: {cv.phone}</p>
              <p>Address: {cv.address}</p>
              <p>Skills: {cv.skills.join(', ')}</p>
              <p>Experience: {cv.experience}</p>
              <p>Education: {cv.education}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CvsPage;
