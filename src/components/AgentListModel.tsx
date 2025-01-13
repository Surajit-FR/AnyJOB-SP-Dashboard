import { Modal, Button } from "react-bootstrap";
import { IteamMembers } from "../../types/fieldAgentTypes";
import { useState } from "react";

interface AgentModalProps {
    show: boolean
    handleClose: () => void
    data?: IteamMembers[]
    getFieldAgentId?: Function
    agentId?: string
}

const AgentListModel = ({ show, handleClose, data , getFieldAgentId, }: AgentModalProps): JSX.Element => {
    // console.log("fieldAgentData====>",data)
    const [agentId, setAgentId] = useState("")
    const handleRadioChange = ( value: string ) => {
        setAgentId(value);
        getFieldAgentId && getFieldAgentId(value)
    };

    return (
        <>
            <Modal show={show} scrollable>
                <Modal.Header>
                    <Modal.Title>
                        Assign
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="row px-3">
                            <div className="col-md-12">
                                {data?.map((agent, index) => (
                                    <ul className="patrick_active1" key={agent._id}>
                                        <li className="culhane_img">
                                            <img className="" src={agent.agentAvatar ? agent.agentAvatar : "https://placehold.co/50x50"} alt="" />
                                        </li>
                                        <li className="culhane_text" style={{ width: "70%" }}>
                                            <h4>{agent.firstName} {agent.lastName}</h4>
                                            {
                                                agent.isEngaged ? <p className="error">Agent is engaged in task</p> : <p className="active">Agent not engaged in any task</p>
                                            }
                                        </li>
                                        <li className="raddio_text">
                                            <p className="c_radio">
                                                <input
                                                 className="re_radio"
                                                    type="radio"
                                                    id={agent._id}
                                                    name="radio-group" 
                                                    value={agent._id}
                                                    onChange={()=>setAgentId(agent._id)}
                                                    checked={agentId === agent._id} />
                                                <label htmlFor={agent._id}></label>
                                            </p>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{
                        handleRadioChange(agentId)
                        setAgentId("")
                    }} className="btn add_er assign self mr-3">
                        Assign
                    </Button>
                    <Button onClick={()=>{
                        setAgentId("")
                        handleClose()
                    }} className="btn add_er self mr-3">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AgentListModel;