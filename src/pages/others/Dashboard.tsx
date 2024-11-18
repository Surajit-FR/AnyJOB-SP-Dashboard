import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import DataCard from "../../components/core/dashboard/DataCard";

export type TCardData = {
    title: string;
    icon: string;
    value: string;
}

const Dashboard = (): JSX.Element => {
    const dashboardCardData: Array<TCardData> = [
        {
            title: "Total Services Request",
            icon: "fa-solid fa-note-sticky",
            value: "1456",
        },
        {
            title: "Field Agent",
            icon: "mdi mdi-account-network",
            value: "3567",
        },
        {
            title: "Pending Work",
            icon: "fa-regular fa-hourglass-half",
            value: "15",
        },
        {
            title: "Ongoing Work",
            icon: "fa-solid fa-gear",
            value: "15234",
        }
    ]

    return (
        <>
            <PageHeader pageTitle="Dashboard" />

            <div className="row">
                {
                    dashboardCardData?.map((item, index) => {
                        return (
                            <DataCard key={index} item={item} />
                        )
                    })
                }
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mt-0 header-title mb-4">Recent Accepted Services</h4>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-right">
                                        <Link to="/job-queue" className="add_er are_add px-5">View All</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Customer</th>
                                            <th>Service Request</th>
                                            <th>Service Status</th>
                                            <th>Request Status</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1.</td>
                                            <td>Arthur Henry</td>
                                            <td>Change the Air Filters</td>
                                            <td>Pending</td>
                                            <td>Accepted</td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td>Tiger Nixon</td>
                                            <td>Change the Air Filters</td>
                                            <td>Pending</td>
                                            <td>Accepted</td>
                                        </tr>
                                        <tr>
                                            <td>3.</td>
                                            <td>Garrett Winters</td>
                                            <td>Change the Air Filters</td>
                                            <td>Pending</td>
                                            <td>Accepted</td>
                                        </tr>
                                        <tr>
                                            <td>4.</td>
                                            <td>Ashton Cox</td>
                                            <td>Change the Air Filters</td>
                                            <td>Pending</td>
                                            <td>Accepted</td>
                                        </tr>
                                        <tr>
                                            <td>5.</td>
                                            <td>Cedric Kelly</td>
                                            <td>Change the Air Filters</td>
                                            <td>Pending</td>
                                            <td>Accepted</td>
                                        </tr>
                                        <tr>
                                            <td>6.</td>
                                            <td>Airi Satou</td>
                                            <td>Change the Air Filters</td>
                                            <td>Pending</td>
                                            <td>Accepted</td>
                                        </tr>
                                        <tr>
                                            <td>7.</td>
                                            <td>Brielle Williamson</td>
                                            <td>Change the Air Filters</td>
                                            <td>Pending</td>
                                            <td>Accepted</td>
                                        </tr>
                                        <tr>
                                            <td>8.</td>
                                            <td>Herrod Chandler</td>
                                            <td>Change the Air Filters</td>
                                            <td>Pending</td>
                                            <td>Accepted</td>
                                        </tr>
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

export default Dashboard;