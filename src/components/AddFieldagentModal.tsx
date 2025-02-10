import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/Store";
import { AddFieldAgentRequest } from "../store/reducers/FieldAgentSlice";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsXLg } from "react-icons/bs";
// import { useState } from "react";

interface AddFiieldAgentForm {
    firstName: string
    lastName: string
    phone: string
    email: string
}
interface Props {
    show: boolean
    handleClose: () => void
}
const AddFieldagentModal = ({ show, handleClose }: Props): JSX.Element => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddFiieldAgentForm>();
    const dispatch: AppDispatch = useDispatch()

    const onSubmit = (values: AddFiieldAgentForm): void => {
        const data = { ...values, userType: 'FieldAgent' }
        dispatch(AddFieldAgentRequest({ data, reset, handleClose }))
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header>
                    <Modal.Title >
                        Add Field Agent
                    </Modal.Title>
                    <BsXLg onClick={()=>{handleClose()}} style={{cursor:"pointer"}} size={25}/>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="row p-3">
                            <div className="col-md-12">
                                <div className="add_input">
                                    <h4>First Name</h4>
                                    <input className="es_input" type="text" placeholder="first Name"
                                        {...register("firstName", {
                                            required: "First Name is required",
                                        })}
                                    />
                                    {errors.firstName && <div className="error">{errors.firstName.message}</div>}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="add_input">
                                    <h4>Last Name</h4>
                                    <input className="es_input" type="text" placeholder="Last Name"
                                        {...register("lastName", {
                                            required: "Last Name is required",
                                        })}
                                    />
                                    {errors.lastName && <div className="error">{errors.lastName.message}</div>}
                                </div>

                            </div>
                            <div className="col-md-12">
                                <div className="add_input">
                                    <h4>Phone No.*</h4>
                                    <input className="es_input" type="tel" placeholder="Phone Number"
                                        {...register("phone", {
                                            required: "Phone is required",
                                        })} />
                                    {errors.phone && <div className="error">{errors.phone.message}</div>}
                                </div>

                            </div>
                            <div className="col-md-12">
                                <div className="add_input">
                                    <h4>Email Address </h4>
                                    <input className="es_input" type="email" placeholder="Email"
                                        {...register("email", {
                                            required: "Email is required",
                                        })} />
                                    {errors.email && <div className="error">{errors.email.message}</div>}
                                </div>

                            </div>
                            <div className="col-md-12">
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <button className="btn btn-lg btn-primary col-md-12" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                    <div className="col-md-6">
                                        <Button
                                            variant="secondary"
                                            className="btn btn-lg btn-secondary col-md-12"
                                            onClick={handleClose}>
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddFieldagentModal;