import { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'

interface Props {
    show: boolean
    onClose: () => void
    data: any
    onUpdate: (data: any) => void
    updateSuccess?: boolean
}

const AgentPermissionModal = ({ show, onClose, data, onUpdate, }: Props) => {
    const [tempagentState, setAgentState] = useState({ acceptRequest: false, assignJob: false, fieldAgentManagement: false, userId: "", })
    const onModalClose = () => {
        onClose()
    }

    useEffect(() => {
        if (data && data.agentPermission && data.agentPermission.length > 0) {
            setAgentState({ acceptRequest: data.agentPermission[0].acceptRequest, fieldAgentManagement: data.agentPermission[0].fieldAgentManagement, assignJob: data.agentPermission[0].assignJob, userId: data._id })
        }
    }, [data, show])


    return (
        <Modal
            show={show}
        >
            <Modal.Header className='justify-content-start'>
                <h5 className='mr-2'>Update Role of Agent</h5><h4>{data?.firstName} {data?.lastName}</h4> 
            </Modal.Header>
            <Modal.Body>
                <div className='row p-3'>
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <tbody>
                                    <tr>
                                        <td>Add New Agent</td>
                                        <td>
                                            <p className="c_radio">
                                                <input
                                                    type="checkbox"
                                                    id="per_1"
                                                    name="permission"
                                                    checked={tempagentState.fieldAgentManagement}
                                                    onChange={() => setAgentState(prevState => ({ ...prevState, fieldAgentManagement: !tempagentState.fieldAgentManagement }))}
                                                    value="addNewAgent"
                                                />

                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Accept Service Request</td>
                                        <td>
                                            <p className="c_radio">
                                                <input
                                                    type="checkbox"
                                                    id="per_3"
                                                    name="permission"
                                                    checked={tempagentState.acceptRequest}
                                                    onChange={() => setAgentState(prevState => ({ ...prevState, acceptRequest: !tempagentState.acceptRequest }))}

                                                    value="addNewAgent"
                                                />
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Assign Job</td>
                                        <td>
                                            <p className="c_radio">
                                                <input
                                                    type="checkbox"
                                                    id="per_2"
                                                    name="permission"
                                                    checked={tempagentState.assignJob}
                                                    onChange={(e) => setAgentState(prevState => ({ ...prevState, assignJob: !tempagentState.assignJob }))}
                                                    value="addNewAgent"
                                                />
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className='row-md-12 p-3'>
                <button className="btn btn-md btn-primary col-md-12 mb-2" onClick={() => onUpdate(tempagentState)}>
                    Update
                </button>
                <Button
                    variant="secondary"
                    className="btn btn-md btn-secondary col-md-12"
                    onClick={() => onModalClose()}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AgentPermissionModal