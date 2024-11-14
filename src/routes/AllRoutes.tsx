import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/others/Dashboard';
import FieldAgents from '../pages/others/FieldAgents';
import AssignWork from '../pages/others/AssignWork';
import AgentPermission from '../pages/others/AgentPermission';
import Profile from '../pages/others/Profile';

const AllRoutes = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/field-agents' element={<FieldAgents />} />
                <Route path='/agent-permission' element={<AgentPermission />} />
                <Route path='/assign-work' element={<AssignWork />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </>
    );
};

export default AllRoutes;