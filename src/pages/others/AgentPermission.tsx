import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { RootState } from "../../store/Store";
import { useCallback, useEffect, useState } from "react";
import { FetchAllFieldAgentForPermissionRequest, UpdateFieldAgentsPermissionsRequest } from "../../store/reducers/FieldAgentSlice";
import { Button } from "react-bootstrap";
import AgentPermissionModal from "../../components/AgentPermissionModal";
import { BsCheckLg, BsXLg   } from "react-icons/bs";

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
        dispatch(UpdateFieldAgentsPermissionsRequest({ data, onClose: onCloseModal }))
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
                                <table 
                                className="table mb-0"
                                // className="table table-striped dt-responsive nowrap w-100"
                                >
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th className="text-center">Add New Agent</th>
                                            <th className="text-center">Accept Service Request</th>
                                            <th className="text-center">Assign Job</th>
                                            <th className="text-center">Action</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {teamLeadsData && teamLeadsData.length > 0 && teamLeadsData.map((data: any) =>
                                            <tr key={data?._id}>
                                                <td>
                                                    {data?.firstName} {data.lastName}
                                                </td>
                                                <td align="center">
                                                    {
                                                        Boolean(data?.agentPermission[0]?.fieldAgentManagement)?<BsCheckLg color="#62C0BF" size={"30px"}/> : <BsXLg  color="red" size={"30px"}/>
                                                    }
                                                    {/* <p className="c_radio"
                                                        style={{ pointerEvents: "none", cursor: 'default' }}
                                                    >
                                                        <input className="re_radio"
                                                            type="checkbox"
                                                            id={data?._id + '1'}
                                                            name="permission"
                                                            checked={Boolean(data?.agentPermission[0]?.fieldAgentManagement)}
                                                            disabled
                                                        />
                                                        <label htmlFor={data?._id + '1'}></label>
                                                    </p> */}
                                                   {/* {Boolean(data?.agentPermission[0]?.fieldAgentManagement ? <BsCheckLg color="#62C0BF" size={"30px"}/> : <BsFillFileExcelFill />} */}
                                                </td>
                                                <td align="center">
                                                    {/* <p className="c_radio"
                                                        style={{ pointerEvents: "none", cursor: 'default' }}
                                                    >
                                                        <input className="re_radio"
                                                            type="checkbox"
                                                            id={data?._id + '2'}
                                                            name="permission"
                                                            checked={Boolean(data?.agentPermission[0]?.acceptRequest)}
                                                            disabled
                                                        />
                                                        <label htmlFor={data?._id + '2'}></label>
                                                    </p> */}
                                                    {
                                                        Boolean(data?.agentPermission[0]?.acceptRequest)?<BsCheckLg color="#62C0BF" size={"30px"}/> : <BsXLg color="red" size={"30px"} />
                                                    }
                                                </td>
                                                <td align="center">
                                                    {/* <p className="c_radio"
                                                        style={{ pointerEvents: "none", cursor: 'default' }}
                                                    >
                                                        <input className="re_radio"
                                                            type="checkbox"
                                                            id={data?._id + '3'}
                                                            name="permission"
                                                            checked={Boolean(data?.agentPermission[0]?.assignJob)}
                                                            disabled
                                                        />
                                                        <label htmlFor={data?._id + '3'}></label>
                                                    </p> */}
                                                    {
                                                        Boolean(data?.agentPermission[0]?.assignJob)?<BsCheckLg color="#62C0BF" size={"30px"}/> : <BsXLg  color="red" size={"30px"} />
                                                    }
                                                </td>
                                                <td align="center">
                                                    <Button variant="outline-info" style={{color:'#135174', borderColor:'#135174'}}
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