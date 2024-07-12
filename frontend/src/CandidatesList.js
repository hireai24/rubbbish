import React, { useState, useEffect } from 'react';
import api from './api';

const CandidatesList = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/candidates/');
            setCandidates(response.data);
        };
        fetchData();
    }, []);

    return (
        <ul>
            {candidates.map(candidate => (
                <li key={candidate.id}>{candidate.name} - Score: {candidate.score}</li>
            ))}
        </ul>
    );
};

export default CandidatesList;
