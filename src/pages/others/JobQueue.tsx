import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AgentListModel from "../../components/AgentListModel";
import PageHeader from "../../components/PageHeader";
import JobDetailsModal from "../../components/JobDetailsModal";
import { AppDispatch, RootState } from "../../store/Store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { fetchJobDetailRequest, fetchJobDetailRequestByType, assignJobRequest, cleanup } from "../../store/reducers/jobReducer";
import { FetchFieldAgentRequest } from "../../store/reducers/FieldAgentSlice";
import { IteamMembers } from "../../../types/fieldAgentTypes";
import { socket } from "../../store/api/socket"
import Pagination from "react-js-pagination";
import Spinner from 'react-bootstrap/Spinner'
import { CSVLink } from "react-csv";

const headers = [
    { label: "Customer Name", key: "customerName" },
    { label: "Category", key: "categoryName" },
    { label: "Created At", key: "createdAt" },
    { label: "Service Status", key: "requestProgress" },
    { label: "Assigned Agent Name", key: "assignedAgentName" },
];

const JobQueue = (): JSX.Element => {
    const serviceProviderId = localStorage.getItem("_id") || ""
    const { job, filteredJob, totalJobElements, isJobLoading } = useSelector((state: RootState) => state.jobSlice)
    const { fieldAgent } = useSelector((state: RootState) => state.fieldAgentSlice)
    const [fieldAgentData, setFieldAgentData] = useState<IteamMembers[]>([])
    const dispatch: AppDispatch = useDispatch();
    const [requestStatusFilter, setRequestStatusFilter] = useState<string>("Accepted");
    const [showDetail, setShowDetail] = useState<boolean>(false)
    const [showAgent, setShowAgent] = useState<boolean>(false)
    const [serviceId, setServiceId] = useState<string>("")
    const [agentId, setAgentId] = useState<string>("")
    const [updationTime, setUpdationTime] = useState("")
    const [page, setPage] = useState(1)
    const [trimmedData, setTrimmedData] = useState<any>([])
    const pageSize = 10

    const handleAgentModalOpen = (id: string | null) => {
        dispatch(FetchFieldAgentRequest({ _id: id }))
        setShowAgent(true)
    }
    const handleAgentModalClose = () => {
        setShowAgent(false)
        setAgentId("")
        setServiceId("")
    }

    const modalDeatilOpen = (id: string | null) => {
        dispatch(fetchJobDetailRequest({ id }))
        setShowDetail(true)
    }

    const modalDetailClose = () => {
        setShowDetail(false)
    }
    const getFieldAgentId = (value: string) => {
        setAgentId(value)
    }

    const getServiceId = (value: string) => {
        setServiceId(value)
    }

    const dataToExport = (data: any) => {
        if (data && data.length > 0) {
            const parseddata = data.map(
                ({
                    customerFirstName,
                    customerLastName,
                    requestProgress,
                    createdAt,
                    categoryName,
                    assignedAgentId }
                    :
                    {
                        customerFirstName: string,
                        customerLastName: string,
                        requestProgress: string,
                        createdAt: number,
                        categoryName: string,
                        assignedAgentId: Array<{ firstName: string, lastName: string }>
                    }) => (
                    {
                        customerName: `${customerFirstName} ${customerLastName}`,
                        categoryName,
                        createdAt: new Date(createdAt).toLocaleDateString(),
                        requestProgress,
                        assignedAgentName: assignedAgentId && assignedAgentId.length > 0 ? `${assignedAgentId[0]?.firstName} ${assignedAgentId[0]?.lastName}` : '-- --'
                    }
                ))
            return parseddata
        }
        else return []

    }
    const emmitToScket = () => {
        socket.emit("serviceAssigned", {})
    }

    useEffect(() => {
        if (serviceId && agentId) {
            dispatch(assignJobRequest({ serviceId, assignedAgentId: agentId, handleClose: handleAgentModalClose, emmitToScket }))
        }
    }, [serviceId, agentId, dispatch])

    useEffect(() => { dispatch(fetchJobDetailRequestByType({ reqType: requestStatusFilter })) }, [dispatch, requestStatusFilter])


    useEffect(() => {
        if (fieldAgent) {
            setFieldAgentData(fieldAgent.teamMembers);
        }
    }, [fieldAgent]);
    // filteredJob && filteredJob.length>0 && console.log(dataToExport(filteredJob))

    useEffect(() => {
        socket.connect()
        socket.on('connect', () => { console.log("que page connected") })
        socket.on('connect_error', (err) => { console.log("connected err", err) })
        socket.on('jobListUpdate', (data) => {
            setUpdationTime(data?.date)
        })


        socket.on("disconnect", () => console.log("que page disconnected"))

        return () => {
            socket.disconnect()
            setUpdationTime("")
        }
    }, [])
    const handlePgeChange = (pageNum: any) => {
        setPage(pageNum)
    }
    useEffect(() => {
        return () => {
            dispatch(cleanup())
        }
    }, [dispatch])
    useEffect(() => {
        if (updationTime) {
            dispatch(fetchJobDetailRequestByType({ reqType: requestStatusFilter }))
        }
    }, [updationTime, dispatch, requestStatusFilter])

    useEffect(() => {
        const tempdata = filteredJob.slice((page - 1) * pageSize, page * pageSize)
        setTrimmedData(tempdata)

    }, [filteredJob, page])

    return (
        <>
            <AgentListModel show={showAgent} handleClose={handleAgentModalClose} data={fieldAgentData} getFieldAgentId={getFieldAgentId} agentId={agentId} />
            <JobDetailsModal show={showDetail} handleClose={modalDetailClose} data={job} />
            <PageHeader pageTitle="Job Status" />

            <div className="row mb-3 justify-content-between">
                <div className="col-md-2">
                    <label htmlFor="requestStatus" style={{ fontFamily: "system-ui" }}>Filter by Job Status</label>
                    <div className="select-wrapper">
                        <select
                            id="requestStatus"
                            className="form-control select-custom"
                            value={requestStatusFilter}
                            onChange={(e) => {
                                setRequestStatusFilter(e.target.value)
                                setPage(1)
                            }}
                        >
                            {/* Accepted,Started,Completed,Cancelled */}
                            <option value="Accepted" defaultValue={"Accepted"}>Accepted</option>
                            <option value="Started">Ongoing</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="text-right">

                        <CSVLink
                            data={dataToExport(filteredJob)}
                            headers={headers}
                            filename={requestStatusFilter === 'Started' ? "Ongoing-service-list" : `${requestStatusFilter}-service-list`}
                        >

                            <Button style={{ minWidth: "125px", marginLeft: "16px", backgroundColor: "#68c3c1" }}>
                                Download {requestStatusFilter === 'Started' ? "Ongoing" : requestStatusFilter} Csv Data
                            </Button>
                        </CSVLink>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mt-0 header-title mb-4">Jobs</h4>
                                </div>
                            </div>
                            <div className="table-responsive">

                                {isJobLoading ? <div className="row justify-content-center m-0 p-3">
                                    <Spinner animation="border" role="status" />
                                </div> :
                                    <>
                                        {trimmedData && trimmedData?.length > 0 ?
                                            <table
                                            className="table table-striped dt-responsive nowrap w-100"
                                            //  className="table table-hover mb-0"
                                             >
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Customer</th>
                                                        <th>Service Req. Category</th>
                                                        <th>Service Status</th>
                                                        {requestStatusFilter === "Accepted" && <th className="text-center">Action</th>}
                                                        <th className="text-center">view</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {trimmedData?.map((service: any, index: number) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <img className="p_img" src={service?.customerAvatar ? service?.customerAvatar : "/assets/images/userSmall.png"} alt="" />
                                                            </td>
                                                            <td>{service?.customerFirstName ? service?.customerFirstName : "N/A"} {service?.customerLastName ? service?.customerLastName : ""}</td>
                                                            <td>{service?.categoryName ? service?.categoryName : "N/A"}</td>
                                                            <td>{service?.requestProgress}</td>
                                                            {/* <td>{service?.isIncentiveGiven ? "YES" : "NO"}</td>
                                                        <td>{service?.incentiveAmount ? service?.incentiveAmount : "N/A"}</td> */}
                                                            {requestStatusFilter === "Accepted" && <td className="text-center">
                                                                {service?.assignedAgentId[0]?.firstName ?
                                                                    <Button
                                                                        disabled
                                                                        size="lg"
                                                                        variant="outlined"
                                                                    >
                                                                        Assigned to {service?.assignedAgentId[0]?.firstName} {service?.assignedAgentId[0]?.lastName}
                                                                    </Button>
                                                                    :
                                                                    <>
                                                                        <Link to="#" className="add_er self m-2" onClick={() => {
                                                                            getServiceId(service?._id)
                                                                            getFieldAgentId(serviceProviderId)
                                                                        }}>
                                                                            Self
                                                                        </Link>
                                                                        <Button
                                                                            onClick={() => {
                                                                                handleAgentModalOpen(service?.serviceProviderId)
                                                                                getServiceId(service?._id)
                                                                            }}
                                                                            className="add_er assign">
                                                                            Assign
                                                                        </Button>
                                                                    </>}
                                                            </td>}

                                                            <td className="text-center">
                                                                <Button className="add_er assign m-2" onClick={() => modalDeatilOpen(service?._id)}>
                                                                    Details
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            : <p className="text-center mt-3">No jobs match the selected filters.</p>
                                        }
                                    </>

                                }

                                {/* pagination section */}

                                <div className="row m-0 mt-2">
                                    <div className="col-md-6"><h6>Showing {totalJobElements === 0 ? totalJobElements : ((page - 1) * pageSize) + 1} to {page * pageSize <= totalJobElements ? page * pageSize : totalJobElements} of {totalJobElements} results</h6></div>
                                    <div className="col-md-6 justify-content-end">
                                        <div className="d-flex justify-content-end">
                                            <Pagination
                                                activePage={page}
                                                itemsCountPerPage={10}
                                                totalItemsCount={totalJobElements}
                                                pageRangeDisplayed={5}
                                                onChange={handlePgeChange}
                                                itemClass="page-item bg-dark"
                                                linkClass="page-link"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobQueue;