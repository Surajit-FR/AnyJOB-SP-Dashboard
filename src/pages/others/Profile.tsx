import { useEffect, useState } from 'react';
import PageHeader from "../../components/PageHeader";
import { RiEdit2Line } from 'react-icons/ri';

const Profile = (): JSX.Element => {
    // State to track editability for sections
    const [isPersonalInfoEditable, setPersonalInfoEditable] = useState<boolean>(false);
    const [isAddressInfoEditable, setAddressInfoEditable] = useState<boolean>(false);
    const [isCompanyInfoEditable, setCompanyInfoEditable] = useState<boolean>(false);
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [locationError, setLocationError] = useState<string | null>(null);

    // Functions to toggle edit mode
    const togglePersonalInfoEdit = () => setPersonalInfoEditable(!isPersonalInfoEditable);
    const toggleAddressInfoEdit = () => setAddressInfoEditable(!isAddressInfoEditable);
    const toggleCompanyInfoEdit = () => setCompanyInfoEditable(!isCompanyInfoEditable);

    // Function to handle form save
    const handleSave = () => {
        if (latitude === null || longitude === null) {
            alert("Unable to save. Latitude and longitude must be available.");
            return;
        }
        // Logic to save the form data
        alert("Form saved successfully.");
    };

    // Request location permissions on component mount
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    setLocationError(null);
                },
                (error) => {
                    setLocationError("Location permission is required.");
                    console.error(error);
                }
            );
        } else {
            setLocationError("Geolocation is not supported by this browser.");
        }
    }, []);


    return (
        <>
            <PageHeader pageTitle="Profile" />

            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profiles_it">
                                        <div className="profiles_img">
                                            <img src="https://placehold.co/500x300" alt="" />
                                        </div>
                                        <div className="profiles_text">
                                            <div className="bd_ft">
                                                <img src="https://placehold.co/170x150" alt="" />
                                            </div>
                                            <div className="d_showd">
                                                <div className="text-center vg">
                                                    <h4>Madalyn Rascon</h4>
                                                    <p>Company Name</p>
                                                </div>
                                                <ul className="pr_vot">
                                                    <li>
                                                        <p>10</p>
                                                        <h5>Field Agents</h5>
                                                    </li>
                                                    <li>
                                                        <p>20</p>
                                                        <h5>Complete Requests</h5>
                                                    </li>
                                                    <li>
                                                        <p>30</p>
                                                        <h5>New Requests</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="row">
                                        {/* Personal Info */}
                                        <div className="col-md-12">
                                            <h3 className="ty_1">Personal Info
                                                <RiEdit2Line onClick={togglePersonalInfoEdit} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                                            </h3>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>First Name</h4>
                                                <input
                                                    className={`rt ${!isPersonalInfoEditable ? 'disabled' : ''}`}
                                                    type="text"
                                                    name="text"
                                                    placeholder={`${isPersonalInfoEditable ? 'Enter your first name' : ''}`}
                                                    readOnly={!isPersonalInfoEditable}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Last Name</h4>
                                                <input
                                                    className={`rt ${!isPersonalInfoEditable ? 'disabled' : ''}`}
                                                    type="text"
                                                    name="text"
                                                    placeholder={`${isPersonalInfoEditable ? 'Enter your last name' : ''}`}
                                                    readOnly={!isPersonalInfoEditable}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Email</h4>
                                                <input
                                                    className={`rt ${!isPersonalInfoEditable ? 'disabled' : ''}`}
                                                    type="text"
                                                    name="text"
                                                    placeholder={`${isPersonalInfoEditable ? 'Enter your email address' : ''}`}
                                                    readOnly={!isPersonalInfoEditable}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Phone</h4>
                                                <input
                                                    className={`rt ${!isPersonalInfoEditable ? 'disabled' : ''}`}
                                                    type="text"
                                                    name="text"
                                                    placeholder={`${isPersonalInfoEditable ? 'Enter your phone number' : ''}`}
                                                    readOnly={!isPersonalInfoEditable}
                                                />
                                            </div>
                                        </div>

                                        {/* Address Info */}
                                        <div className="col-md-12">
                                            <h3 className="ty_1">Address Info
                                                <RiEdit2Line onClick={toggleAddressInfoEdit} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                                            </h3>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Address/Location</h4>
                                                <input
                                                    className={`rt ${!isAddressInfoEditable ? 'disabled' : ''}`}
                                                    type="text"
                                                    name="text"
                                                    placeholder={`${isAddressInfoEditable ? 'Enter address' : ''}`}
                                                    readOnly={!isAddressInfoEditable}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Zip Code</h4>
                                                <input
                                                    className={`rt ${!isAddressInfoEditable ? 'disabled' : ''}`}
                                                    type="text"
                                                    name="zipCode"
                                                    placeholder={`${isAddressInfoEditable ? 'Enter your zip code' : ''}`}
                                                    readOnly={!isAddressInfoEditable}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex mb-4">
                                                <h5 className="mr-5">Latitude: <span>{latitude ?? 'N/A'}</span></h5>
                                                <h5 className="mr-5">Longitude: <span>{longitude ?? 'N/A'}</span></h5>
                                            </div>
                                            {locationError && <p className="text-danger">{locationError}</p>}
                                        </div>

                                        {/* Company Info */}
                                        <div className="col-md-12">
                                            <h3 className="ty_1">Company Info
                                                <RiEdit2Line onClick={toggleCompanyInfoEdit} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                                            </h3>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="n_t">
                                                <h4>Info</h4>
                                                {/* something_1 */}
                                                <textarea
                                                    className={`rt something_1 ${!isCompanyInfoEditable ? 'disabled' : ''}`}
                                                    placeholder={`${isCompanyInfoEditable ? 'Write something...' : ''}`}
                                                    readOnly={!isCompanyInfoEditable}
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <h3 className="ty_1">Documents</h3>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="so_boxc">
                                                <img src="https://placehold.co/240x220" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="so_boxc">
                                                <img src="https://placehold.co/240x220" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="so_boxc">
                                                <img src="https://placehold.co/240x220" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="so_boxc">
                                                <img src="https://placehold.co/240x220" alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <button type="submit" className="save_rt" onClick={handleSave}>
                                                <i className="ri-save-line"></i> Save
                                            </button>
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

export default Profile;