import React from 'react';
import { useForm } from 'react-hook-form';

const CVForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch('/api/cv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
    } else {
      alert('Error: ' + result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Full Name</label>
        <input {...register('fullName', { required: 'Full name is required' })} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>
      
      <div>
        <label>Email</label>
        <input {...register('email', { required: 'Email is required' })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Phone</label>
        <input {...register('phone', { required: 'Phone is required' })} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <div>
        <label>Address</label>
        <input {...register('address', { required: 'Address is required' })} />
        {errors.address && <p>{errors.address.message}</p>}
      </div>

      <div>
        <label>Skills (comma separated)</label>
        <input {...register('skills', { required: 'Skills are required' })} />
        {errors.skills && <p>{errors.skills.message}</p>}
      </div>

      <div>
        <label>Experience</label>
        <textarea {...register('experience', { required: 'Experience is required' })} />
        {errors.experience && <p>{errors.experience.message}</p>}
      </div>

      <div>
        <label>Education</label>
        <textarea {...register('education', { required: 'Education is required' })} />
        {errors.education && <p>{errors.education.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CVForm;
