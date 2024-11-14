import PageHeader from "../../components/PageHeader";

const Dashboard = (): JSX.Element => {
    return (
        <>
            <PageHeader pageTitle="Dashboard" />

            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card mini-stat m-b-30">
                        <div className="p-3 bg-primary text-white">
                            <div className="mini-stat-icon">
                                <i className="mdi mdi-cube-outline float-right mb-0"></i>
                            </div>
                            <h6 className="text-uppercase mb-0">New Orders</h6>
                        </div>
                        <div className="card-body">
                            <div className="border-bottom pb-4">
                                <span className="badge badge-success"> +11% </span> <span
                                    className="ml-2 text-muted">From previous period</span>
                            </div>
                            <div className="mt-4 text-muted">
                                <div className="float-right">
                                    <p className="m-0">Last : 1325</p>
                                </div>
                                <h5 className="m-0">1456<i className="mdi mdi-arrow-up text-success ml-2"></i></h5>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card mini-stat m-b-30">
                        <div className="p-3 bg-primary text-white">
                            <div className="mini-stat-icon">
                                <i className="mdi mdi-account-network float-right mb-0"></i>
                            </div>
                            <h6 className="text-uppercase mb-0">New Users</h6>
                        </div>
                        <div className="card-body">
                            <div className="border-bottom pb-4">
                                <span className="badge badge-success"> +22% </span> <span
                                    className="ml-2 text-muted">From previous period</span>
                            </div>
                            <div className="mt-4 text-muted">
                                <div className="float-right">
                                    <p className="m-0">Last : 3426</p>
                                </div>
                                <h5 className="m-0">3567<i className="mdi mdi-arrow-up text-success ml-2"></i></h5>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card mini-stat m-b-30">
                        <div className="p-3 bg-primary text-white">
                            <div className="mini-stat-icon">
                                <i className="mdi mdi-tag-text-outline float-right mb-0"></i>
                            </div>
                            <h6 className="text-uppercase mb-0">Average Price</h6>
                        </div>
                        <div className="card-body">
                            <div className="border-bottom pb-4">
                                <span className="badge badge-danger"> -02% </span> <span
                                    className="ml-2 text-muted">From previous period</span>
                            </div>
                            <div className="mt-4 text-muted">
                                <div className="float-right">
                                    <p className="m-0">Last : 15.8</p>
                                </div>
                                <h5 className="m-0">14.5<i className="mdi mdi-arrow-down text-danger ml-2"></i></h5>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card mini-stat m-b-30">
                        <div className="p-3 bg-primary text-white">
                            <div className="mini-stat-icon">
                                <i className="mdi mdi-cart-outline float-right mb-0"></i>
                            </div>
                            <h6 className="text-uppercase mb-0">Total Sales</h6>
                        </div>
                        <div className="card-body">
                            <div className="border-bottom pb-4">
                                <span className="badge badge-success"> +10% </span> <span
                                    className="ml-2 text-muted">From previous period</span>
                            </div>
                            <div className="mt-4 text-muted">
                                <div className="float-right">
                                    <p className="m-0">Last : 14256</p>
                                </div>
                                <h5 className="m-0">15234<i className="mdi mdi-arrow-up text-success ml-2"></i></h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <h4 className="mt-0 header-title mb-4">Recent Candidates</h4>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2017/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                        <tr>
                                            <td>Garrett Winters</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>2017/07/25</td>
                                            <td>$170,750</td>
                                        </tr>
                                        <tr>
                                            <td>Ashton Cox</td>
                                            <td>Junior Technical Author</td>
                                            <td>San Francisco</td>
                                            <td>66</td>
                                            <td>2015/01/12</td>
                                            <td>$86,000</td>
                                        </tr>
                                        <tr>
                                            <td>Cedric Kelly</td>
                                            <td>Senior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>2018/03/29</td>
                                            <td>$433,060</td>
                                        </tr>
                                        <tr>
                                            <td>Airi Satou</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>33</td>
                                            <td>2014/11/28</td>
                                            <td>$162,700</td>
                                        </tr>
                                        <tr>
                                            <td>Brielle Williamson</td>
                                            <td>Integration Specialist</td>
                                            <td>New York</td>
                                            <td>61</td>
                                            <td>2018/12/02</td>
                                            <td>$372,000</td>
                                        </tr>
                                        <tr>
                                            <td>Herrod Chandler</td>
                                            <td>Sales Assistant</td>
                                            <td>San Francisco</td>
                                            <td>59</td>
                                            <td>2018/08/06</td>
                                            <td>$137,500</td>
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