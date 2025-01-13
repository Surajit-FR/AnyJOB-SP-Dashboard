import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { RootState } from "../../store/Store";
import { useCallback, useEffect, useState } from "react";
import { FetchAllFieldAgentForPermissionRequest, UpdateFieldAgentsPermissionsRequest } from "../../store/reducers/FieldAgentSlice";
import { Button } from "react-bootstrap";
import AgentPermissionModal from "../../components/AgentPermissionModal";

const AgentPermission = (): JSX.Element => {
    const providerId = localStorage.getItem("_id") || ""
    const { fieldAgentPermissionData, updateSuccess } = useSelector((state: RootState) => state.fieldAgentSlice)
    const dispatch = useDispatch()
    const [fieldAgentData, setFieldAgentData] = useState<any>([])
    const [showModal, setShowModal] = useState<any>(false)

    const onUpdate = (data: any) => {
        setFieldAgentData(data)
        setShowModal(true)
    }
    const onCloseModal = () => {
        setShowModal(false)
    }

    const onUpdatingAgentPermissions = useCallback((data: any) => {
        dispatch(UpdateFieldAgentsPermissionsRequest({ data, onClose:onCloseModal }))
    }, [dispatch])

    useEffect(() => {
        dispatch(FetchAllFieldAgentForPermissionRequest({ _id: providerId }))
    }, [dispatch, providerId])


    const teamLeadsData = fieldAgentPermissionData?.teamMembers?.filter(data => data.userType?.toLowerCase() === 'teamlead')

    return (
        <>
            <PageHeader pageTitle="Agent Permission" />
            <AgentPermissionModal show={showModal} onClose={onCloseModal} data={fieldAgentData} onUpdate={onUpdatingAgentPermissions} updateSuccess={updateSuccess} />
            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="mt-0 header-title mb-4">Give Permission</h4>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Add New Agent</th>
                                            <th>Accept Service Request</th>
                                            <th>Assign Job</th>
                                            <th>Action</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {teamLeadsData && teamLeadsData.length > 0 && teamLeadsData.map((data: any) =>
                                            <tr key={data?._id}>
                                                <td>
                                                    {data?.firstName} {data.lastName}
                                                </td>
                                                <td>
                                                    <p className="c_radio">
                                                        <input className="re_radio"
                                                            type="checkbox"
                                                            id="per_1"
                                                            name="permission"
                                                            checked={Boolean(data?.agentPermission[0]?.fieldAgentManagement)}
                                                            disabled
                                                        />
                                                        <label htmlFor="per_1"></label>
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="c_radio">
                                                        <input className="re_radio"
                                                            type="checkbox"
                                                            id="per_2"
                                                            name="permission"
                                                            checked={Boolean(data?.agentPermission[0]?.acceptRequest)}
                                                            disabled
                                                        />
                                                        <label htmlFor="per_2"></label>
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className="c_radio">
                                                        <input className="re_radio"
                                                            type="checkbox" id="per_3"
                                                            name="permission"
                                                            checked={Boolean(data?.agentPermission[0]?.assignJob)}
                                                            disabled
                                                        />
                                                        <label htmlFor="per_3"></label>
                                                    </p>
                                                </td>
                                                <td>
                                                    <Button variant="outline-info"
                                                        onClick={() => onUpdate(data)}
                                                    >
                                                        Update
                                                    </Button>
                                                </td>

                                            </tr>
                                        )}
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

export default AgentPermission;