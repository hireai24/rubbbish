import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CandidateForm from './CandidateForm';
import CandidatesList from './CandidatesList';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/apply" component={CandidateForm} />
                <Route path="/candidates" component={CandidatesList} />
            </Switch>
        </Router>
    );
}

export default App;
