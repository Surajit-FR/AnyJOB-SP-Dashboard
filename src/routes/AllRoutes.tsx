import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/others/Dashboard';
import FieldAgents from '../pages/others/FieldAgents';
import JobQueue from '../pages/others/JobQueue';
import AgentPermission from '../pages/others/AgentPermission';
import Profile from '../pages/others/Profile';
import JobRequests from '../pages/others/JobRequests';

const AllRoutes = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/field-agents' element={<FieldAgents />} />
                <Route path='/agent-permission' element={<AgentPermission />} />
                <Route path='/job-requests' element={<JobRequests />} />
                <Route path='/job-status' element={<JobQueue />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </>
    );
};

export default AllRoutes;