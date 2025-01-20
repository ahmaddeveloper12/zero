// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: [{ degree: '', university: '', year: '' }],
    experience: [{ company: '', role: '', duration: '', description: '' }],
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index][name] = value;
    setFormData((prev) => ({ ...prev, education: updatedEducation }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...formData.experience];
    updatedExperience[index][name] = value;
    setFormData((prev) => ({ ...prev, experience: updatedExperience }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/cv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert('CV submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        education: [{ degree: '', university: '', year: '' }],
        experience: [{ company: '', role: '', duration: '', description: '' }],
        skills: '',
      });
    } else {
      alert('Error submitting CV');
    }
  };

  return (
    <div>
      <h1>Create Your CV</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone (Optional)"
          value={formData.phone}
          onChange={handleChange}
        />

        <h3>Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, e)}
            />
            <input
              type="text"
              name="university"
              placeholder="University"
              value={edu.university}
              onChange={(e) => handleEducationChange(index, e)}
            />
            <input
              type="text"
              name="year"
              placeholder="Year of Graduation"
              value={edu.year}
              onChange={(e) => handleEducationChange(index, e)}
            />
          </div>
        ))}

        <h3>Experience</h3>
        {formData.experience.map((exp, index) => (
          <div key={index}>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, e)}
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={exp.role}
              onChange={(e) => handleExperienceChange(index, e)}
            />
            <input
              type="text"
              name="duration"
              placeholder="Duration"
              value={exp.duration}
              onChange={(e) => handleExperienceChange(index, e)}
            />
            <textarea
              name="description"
              placeholder="Job Description"
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, e)}
            />
          </div>
        ))}

        <h3>Skills</h3>
        <textarea
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
        />

        <button type="submit">Submit CV</button>
      </form>
    </div>
  );
}
