// import AgentListModel from "../../components/AgentListModel";
import PageHeader from "../../components/PageHeader";
import JobDetailsModal from "../../components/JobDetailsModal";
import { AppDispatch, RootState } from "../../store/Store";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import { FetchNearbyServicesRequest, HandleServicesRequest } from "../../store/reducers/ServiceReducers";
import { fetchJobDetailRequest } from "../../store/reducers/jobReducer";
import { ServiceRequest } from "../../../types/services";
// import { FetchFieldAgentRequest } from "../../store/reducers/FieldAgentSlice";
import { socket } from '../../store/api/socket'
import { Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import Pagination from "react-js-pagination";
import Spinner from 'react-bootstrap/Spinner';
import { FETCHNEARBYSERVICEREQ } from "../../store/api/Api";

const headers = [
    { label: "Customer Name", key: "customerName" },
    { label: "Category", key: "categoryName" },
    { label: "Service Address", key: "serviceAddress" },
    { label: "Distance (in Meters)", key: "distance" },
    { label: "Service Start date", key: "serviceStartDate" },
    { label: "Total Number of Ratings", key: "totalRatings" },
    { label: "Average Rating", key: "userAvgRating" },
];

const JobRequests = (): JSX.Element => {
    // const { latitude, longitude } = useSelector((state: RootState) => state.locationSlice);
    const { serviceData, totalServiceData = 0 } = useSelector((state: RootState) => state.serviceSlice);
    const csvRef = useRef<any>(null)
    const [csvData, setCsvData] = useState<any>([])
    const { job, isJobLoading } = useSelector((state: RootState) => state.jobSlice);
    // const {fieldAgent} = useSelector((state: RootState)=> state.fieldAgentSlice)
    const dispatch: AppDispatch = useDispatch();
    const [detailShow, setDetailShow] = useState<boolean>(false)
    const [stateServiceData, setStateServiceData] = useState<Array<ServiceRequest>>([]);
    const [download, setDownload] = useState(false)
    const [updationTime, setUpdationTime] = useState("")
    //pagination
    const [page, setPage] = useState(1)
    const pageSize = 10
    const handlePgeChange = (pageNum: any) => {
        setPage(pageNum)
    }
    // const [showAgent, setShowAgent] = useState<boolean>(false)

    // const handleAgentModalOpen = () => {
    //     dispatch(FetchFieldAgentRequest('fieldAgentReducers/FetchFieldAgentRequest'))
    //     setShowAgent(true)
    // }
    // const handleAgentModalClose = () => {
    //     setShowAgent(true)
    // }
    // console.log({ latitude, longitude });
    const handleShow = (id: string) => {
        dispatch(fetchJobDetailRequest({ id }))
        setDetailShow(true)
    }
    const handleClose = () => {
        setDetailShow(false)
    }
    const emmitToScket = () => {
        socket.emit("updateNearbyServices", {})
    }
    const handleCsvClick = useCallback(async () => {
        setDownload(false)
        const data = await FETCHNEARBYSERVICEREQ({ page: 1, limit: 10000 })
        const dataToExport = data.data.data && data.data.data.serviceRequests && data.data.data.serviceRequests.length > 0 ? data.data.data.serviceRequests.map((item: any) =>
        (
            {
                ...item,
                serviceStartDate: new Date(item.serviceStartDate).toLocaleDateString(),
                distance: item.distance?.toFixed(2),
                userAvgRating: item.userAvgRating?.toFixed(2)
            }
        )
        ) : []
        setCsvData(dataToExport)
        setDownload(true)
    }, [])

    useEffect(() => {
        dispatch(FetchNearbyServicesRequest({ data: { page: page, limit: pageSize, sortType: 'desc' } }));
    }, [dispatch, page]);

    useEffect(() => {
        setStateServiceData(serviceData as Array<ServiceRequest>);
    }, [serviceData]);

    useEffect(() => {
        socket.connect()
        socket.on("connect", () => console.log("request page connected"))
        socket.on('connect_error', (err) => { console.log("connected err", err) })
        socket.on('nearbyServicesUpdate', (data) => {
            setUpdationTime(data?.date)

        })
        socket.on("disconnect", () => console.log("request page disconnected"))
        return () => {
            socket.disconnect()
            setUpdationTime("")
        }
    }, [])
    useEffect(() => {
        if (updationTime) {
            dispatch(FetchNearbyServicesRequest({ data: { page: 1, limit: 10, sortType: 'desc' } }))
        }
    }, [updationTime, dispatch])
    console.log({ updationTime })
    useEffect(() => {
        if (csvData && csvData.length > 0 && download) {
            csvRef.current?.link.click()
            setDownload(false)
        }
    }, [csvData, download])

    return (
        <>
            {/* <AgentListModel show={showAgent} handleClose={handleAgentModalClose} data={fieldAgent}/> */}
            <JobDetailsModal show={detailShow} handleClose={handleClose} data={job} />
            <PageHeader pageTitle="Job Requests" />

            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mt-0 header-title mb-4">Service Requests</h4>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-right">
                                        {download &&
                                            <CSVLink
                                                data={csvData}
                                                headers={headers}
                                                filename={"Nearby-Service-requests.csv"}
                                                ref={csvRef}
                                            />
                                        }
                                        <Button style={{ width: "125px", marginLeft: "16px", backgroundColor: "#68c3c1" }} onClick={() => handleCsvClick()}>
                                            Download Csv
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive">
                                {
                                    isJobLoading ?
                                        <div className="row justify-content-center m-0 p-3">
                                            <Spinner animation="border" role="status" />
                                        </div> :
                                        <>
                                            {stateServiceData?.length > 0 ?
                                                <table
                                                    // className="table table-hover mb-0" 
                                                    className="table table-striped dt-responsive nowrap w-100"
                                                >
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Customer</th>
                                                            <th>Service Req. Category</th>
                                                            <th>Service Status</th>
                                                            <th>Service Address</th>
                                                            <th>Incentive Amount</th>
                                                            <th className="text-center">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {stateServiceData && stateServiceData.length > 0 && stateServiceData?.map((service, index) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    <img className="p_img" src={service?.userAvtar ? service?.userAvtar : "/assets/images/userSmall.png"} alt="" />
                                                                </td>
                                                                <td>{service?.customerName ? service?.customerName : "N/A"}</td>
                                                                <td>{service?.categoryName ? service?.categoryName : "N/A"}</td>
                                                                <td>{service?.requestProgress}</td>
                                                                <td>{service?.serviceAddress ? service?.serviceAddress : "-- --"}</td>
                                                                <td>{service?.incentiveAmount ? service?.incentiveAmount : "N/A"}</td>
                                                                <td className="row m-0 justify-content-center">
                                                                    <button
                                                                        className="btn add_er self col-md-9 mb-2"
                                                                        data-toggle="modal"
                                                                        data-target="#job_Details"
                                                                        onClick={() => handleShow(service?._id)}
                                                                    >
                                                                        Job Details
                                                                    </button>
                                                                    <button
                                                                        className="btn add_er assign col-md-9"
                                                                        onClick={() => dispatch(HandleServicesRequest({ serviceId: service?._id, data: { isReqAcceptedByServiceProvider: true, requestProgress: "Pending" }, emmitToScket }))}
                                                                    >Accept</button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                : <p className="text-center mt-3">No jobs match the selected filters.</p>
                                            }
                                        </>
                                }
                                <div className="row m-0 mt-2">
                                    <div className="col-md-6"><h6>Showing {totalServiceData === 0 ? totalServiceData : ((page - 1) * pageSize) + 1} to {page * pageSize <= totalServiceData ? page * pageSize : totalServiceData} of {totalServiceData} results</h6></div>
                                    <div className="col-md-6 justify-content-end">
                                        <div className="d-flex justify-content-end">
                                            <Pagination
                                                activePage={page}
                                                itemsCountPerPage={pageSize}
                                                totalItemsCount={totalServiceData}
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
            </div >
        </>
    );
};

export default JobRequests;