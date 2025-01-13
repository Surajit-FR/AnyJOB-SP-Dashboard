// import { Link } from "react-router-dom";
import {
    useEffect,
    useState
} from "react";

import PageHeader from "../../components/PageHeader";
import AddFieldagentModal from "../../components/AddFieldagentModal";
import FieldAgentsTable from "../../components/FieldAgentTable";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../store/Store'
import { FetchFieldAgentRequest } from "../../store/reducers/FieldAgentSlice";
import { Button } from "react-bootstrap";
import { IteamMembers } from "../../../types/fieldAgentTypes";
import { CSVLink } from "react-csv";

const headers = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "User Type", key: "userType" },
];



const FieldAgents = (): JSX.Element => {
    const userId = localStorage.getItem("_id") || ""
    const { fieldAgent, assignSuccess } = useSelector((state: RootState) => state.fieldAgentSlice);
    const dispatch = useDispatch()
    const [fieldAgentData, setFieldAgentData] = useState<IteamMembers[]>([])
    const [show, setShow] = useState<boolean>(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    useEffect(() => {
        if (userId) {
            dispatch(FetchFieldAgentRequest({ _id: userId }))
        }
    }, [dispatch, userId])

    useEffect(() => {
        if (fieldAgent) {
            setFieldAgentData(fieldAgent.teamMembers);
        }
    }, [fieldAgent]);
    useEffect(() => {
        if (assignSuccess) {
            dispatch(FetchFieldAgentRequest({ _id: userId }))
        }
    }, [assignSuccess, userId, dispatch])

    return (
        <>
            <AddFieldagentModal show={show} handleClose={handleClose} />
            <PageHeader pageTitle="Field Agent" />

            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mt-0 header-title mb-4">Agents</h4>
                                </div>
                                <div className="col-md-6">
                                    <div className="row justify-content-end aign-items-center">
                                        <div className="text-right">
                                            <Button color="success" onClick={handleShow}>Add Field Agent</Button>

                                        </div>
                                        <div className="text-right">
                                            <CSVLink data={fieldAgentData} headers={headers} filename={"All-Field-Agents.csv"}>
                                                <Button style={{ width: "125px",marginLeft:"16px", backgroundColor: "#68c3c1" }}>Download Csv</Button>
                                            </CSVLink>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <FieldAgentsTable data={fieldAgentData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FieldAgents;
