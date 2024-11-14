import { Link } from "react-router-dom";

const PageHeader = ({ pageTitle }: { pageTitle: string }): JSX.Element => {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="float-right page-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Anyjob</Link></li>
                            <li className="breadcrumb-item active">{pageTitle}</li>
                        </ol>
                    </div>
                    <h5 className="page-title">{pageTitle}</h5>
                </div>
            </div>
        </>
    );
};

export default PageHeader;