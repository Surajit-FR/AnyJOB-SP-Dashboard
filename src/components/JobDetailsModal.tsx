import { Button, Modal, ModalHeader, ModalTitle } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";

interface Props {
    show: boolean
    handleClose: () => void
    data?: any
}

const JobDetailsModal = ({ show, handleClose, data }: Props) => {
    return (
        <>
            <Modal show={show}>
                <ModalHeader>
                    <ModalTitle>
                        Job Details
                    </ModalTitle>
                    <BsXLg onClick={() => { handleClose() }} style={{ cursor: "pointer" }} size={25} />
                </ModalHeader>
                <Modal.Body>
                    <form>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="add_check">
                                    <h4>Service</h4>
                                    <h6>{data[0]?.categoryName}</h6>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="add_check">
                                    <h4>Date</h4>
                                    <h6>{new Date(data[0]?.serviceStartDate).toLocaleDateString()}</h6>
                                </div>
                            </div>
                            {
                                data[0]?.bookedTimeSlot && data[0]?.bookedTimeSlot.length > 0 && (
                                    <div className="col-md-4">
                                        <div className="add_check">
                                            <h4>Time Slot</h4>
                                            <h6>{`${new Date(data[0]?.bookedTimeSlot[0]?.startTime).toLocaleTimeString([], { timeStyle: 'short' })} - ${new Date(data[0]?.bookedTimeSlot[0]?.endTime).toLocaleTimeString([], { timeStyle: 'short' })}`}</h6>
                                        </div>
                                    </div>
                                )
                            }

                            <div className="col-md-12">
                                <div className="add_check">
                                    <ul className="sara_lit">
                                        <li>
                                            <span>
                                                <i className="fa-regular fa-envelope"></i>
                                            </span>
                                            {data[0]?.customerEmail}
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-light fa-phone"></i>
                                            </span>
                                            {data[0]?.customerPhone || "N/A"}
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-location-dot"></i>
                                            </span>
                                            {data[0]?.serviceAddress || "N/A"}
                                        </li>
                                    </ul>
                                    {data[0]?.answerArray?.map((answer: any, index: number) => (
                                        <ul className="sara_lit_123" key={answer._id}>
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-screwdriver-wrench"></i>
                                                </span>
                                                {answer.answer}
                                            </li>
                                        </ul>
                                    ))}
                                    <ul className="sara_lit">
                                        {data[0]?.serviceProductImage && (
                                            <li>
                                                <span>
                                                    <i className="fa-regular fa-image"></i>
                                                </span>

                                                {/* <ul className="k_img"> */}
                                                {/* <li> */}
                                                <img src={data[0]?.serviceProductImage} alt="" width="60px" />
                                                {/* </li> */}
                                                {/* </ul> */}
                                            </li>)}
                                        {data[0]?.serviceDescription &&
                                            <li>
                                                <span>
                                                    <i className="fa-regular fa-file-zipper"></i>
                                                </span>
                                                {data[0]?.serviceDescription}
                                            </li>
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                    <Modal.Footer>
                        <Button onClick={handleClose} className=" btn add_er self mr-3">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default JobDetailsModal;