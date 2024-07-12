import React, { useState } from 'react';
import api from './api';

const CandidateForm = () => {
    const [name, setName] = useState('');
    const [cv, setCv] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [job, setJob] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await api.post('/candidates/', { name, cv, coverLetter, job });
        console.log(response.data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <textarea value={cv} onChange={(e) => setCv(e.target.value)} placeholder="CV" />
            <textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} placeholder="Cover Letter" />
            <input type="text" value={job} onChange={(e) => setJob(e.target.value)} placeholder="Job ID" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CandidateForm;
