import { useState } from 'react';
import PageHeader from "../../components/PageHeader";
import { RiEdit2Line } from 'react-icons/ri';
import { RootState } from '../../store/Store';
import { useSelector } from 'react-redux';

const Profile = (): JSX.Element => {
    const { latitude, longitude, locationError } = useSelector((state: RootState) => state.locationSlice);

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        zipCode: '',
        companyInfo: ''
    };

    const [isPersonalInfoEditable, setPersonalInfoEditable] = useState<boolean>(false);
    const [isAddressInfoEditable, setAddressInfoEditable] = useState<boolean>(false);
    const [isCompanyInfoEditable, setCompanyInfoEditable] = useState<boolean>(false);
    const [isFormChanged, setFormChanged] = useState<boolean>(false);
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setFormChanged(true);
    };

    const handleSave = () => {
        if (latitude === null || longitude === null) {
            alert("Unable to save. Latitude and longitude must be available.");
            return;
        }

        setFormData(initialState);
        setFormChanged(false);
        setPersonalInfoEditable(false);
        setAddressInfoEditable(false);
        setCompanyInfoEditable(false);

        alert("Form saved successfully.");
    };

    const togglePersonalInfoEdit = () => {
        setPersonalInfoEditable(!isPersonalInfoEditable);
        setFormChanged(true);
    };

    const toggleAddressInfoEdit = () => {
        setAddressInfoEditable(!isAddressInfoEditable);
        setFormChanged(true);
    };

    const toggleCompanyInfoEdit = () => {
        setCompanyInfoEditable(!isCompanyInfoEditable);
        setFormChanged(true);
    };

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
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    placeholder={`${isPersonalInfoEditable ? 'Enter your first name' : ''}`}
                                                    readOnly={!isPersonalInfoEditable}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Last Name</h4>
                                                <input
                                                    className={`rt ${!isPersonalInfoEditable ? 'disabled' : ''}`}
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    placeholder={`${isPersonalInfoEditable ? 'Enter your last name' : ''}`}
                                                    readOnly={!isPersonalInfoEditable}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Email</h4>
                                                <input
                                                    className={`rt ${!isPersonalInfoEditable ? 'disabled' : ''}`}
                                                    type="text"
                                                    name="email"
                                                    value={formData.email}
                                                    placeholder={`${isPersonalInfoEditable ? 'Enter your email address' : ''}`}
                                                    readOnly={!isPersonalInfoEditable}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Phone</h4>
                                                <input
                                                    className={`rt ${!isPersonalInfoEditable ? 'disabled' : ''}`}
                                                    type="text"
                                                    name="phone"
                                                    value={formData.phone}
                                                    placeholder={`${isPersonalInfoEditable ? 'Enter your phone number' : ''}`}
                                                    readOnly={!isPersonalInfoEditable}
                                                    onChange={handleInputChange}
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
                                                    name="address"
                                                    value={formData.address}
                                                    placeholder={`${isAddressInfoEditable ? 'Enter address' : ''}`}
                                                    readOnly={!isAddressInfoEditable}
                                                    onChange={handleInputChange}
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
                                                    value={formData.zipCode}
                                                    placeholder={`${isAddressInfoEditable ? 'Enter your zip code' : ''}`}
                                                    readOnly={!isAddressInfoEditable}
                                                    onChange={handleInputChange}
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
                                                <textarea
                                                    className={`rt something_1 ${!isCompanyInfoEditable ? 'disabled' : ''}`}
                                                    name="companyInfo"
                                                    value={formData.companyInfo}
                                                    placeholder={`${isCompanyInfoEditable ? 'Write something...' : ''}`}
                                                    readOnly={!isCompanyInfoEditable}
                                                    onChange={handleInputChange}
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Documents Section */}
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

                                        {/* Save Button */}
                                        <div className="col-md-12">
                                            {isFormChanged && (
                                                <button type="button" className="save_rt" onClick={handleSave}>
                                                    <i className="ri-save-line"></i> Save
                                                </button>
                                            )}
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