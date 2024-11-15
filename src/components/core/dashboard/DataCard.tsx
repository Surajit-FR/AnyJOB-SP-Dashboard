import { TCardData } from "../../../pages/others/Dashboard";

const DataCard = ({ item }: { item: TCardData }): JSX.Element => {
    return (
        <>
            <div className="col-xl-3 col-md-6">
                <div className="card mini-stat m-b-30">
                    <div className="p-3 bg-primary text-white">
                        <div className="mini-stat-icon">
                            <i className={`${item?.icon} float-right mb-0`}></i>
                        </div>
                        <h6 className="text-uppercase mb-0">{item?.title}</h6>
                    </div>
                    <div className="card-body">
                        <div className="mt-4 text-muted">
                            <h5 className="m-0">{item?.value}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataCard;