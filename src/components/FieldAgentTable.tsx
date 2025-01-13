import {
    //  useEffect,
     useState 
    } from "react";
import PageHeader from "./PageHeader";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IteamMembers } from "../../types/fieldAgentTypes";
import { useDispatch,
    //  useSelector
     } from "react-redux";
// import { RootState } from "../store/Store";
import { assaaignTeamLeadRequest } from "../store/reducers/FieldAgentSlice";

interface Props {
    data: IteamMembers[]
}
interface FieldAgentData {
    agentAvatar: string
    email: string
    firstName: string
    isEngaged: boolean
    lastName: string
    phone: string
    userType: string
    _id: string
}
const FieldAgentsTable = ({ data }: Props): JSX.Element => {
    // const {assignSuccess} =useSelector((state:RootState)=> state.fieldAgentSlice)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [fieldAgentId, setFieldAgentId] = useState<FieldAgentData>({
        agentAvatar: "",
        email: "",
        firstName: "",
        isEngaged: false,
        lastName: "",
        phone: "",
        userType: "",
        _id: ""
    })
    const assignRole=()=>{
        dispatch(assaaignTeamLeadRequest({fieldAgentId:fieldAgentId._id, handleClose}))
    }
    const handleClose = () => {
        setShow(false)
    }
    const handleShow = (data: any) => {
        setShow(true)
        setFieldAgentId(data)
    };

    return (
        <>
            <PageHeader pageTitle="Field Agent" />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Assign Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>Change the role of the {fieldAgentId?.firstName} {fieldAgentId?.lastName}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={assignRole}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((data, index) => (
                                            <tr key={data._id}>
                                                <td>
                                                    <img className="p_img" src={data?.agentAvatar? data?.agentAvatar :"https://placehold.co/50x50"} alt="" />
                                                </td>
                                                <td>{data.firstName} {data.lastName}</td>
                                                <td>{data.email} </td>
                                                <td>{data.phone}</td>
                                                <td>
                                                    {data.userType.toLocaleLowerCase() === "teamlead" ? <Button 
                                                    // className="add_er cancel"
                                                    disabled
                                                    size="lg"
                                                    variant="outlined"
                                                    onClick={() => handleShow(data)}>
                                                         Team Lead 
                                                         </Button>
                                                        : <Button className="add_er" onClick={()=> handleShow(data)}>Appoint TL</Button>}
                                                </td>
                                            </tr>))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FieldAgentsTable;