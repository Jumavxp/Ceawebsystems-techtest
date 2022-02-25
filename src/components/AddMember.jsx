import React from 'react'



const AddMember = () => {




    return (
        <div>
            <form className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h5> Personal Info</h5>
                        <div className='row'>
                            <div className='col-6'>
                                <h6>Tittle</h6>
                                <div className="btn-group">
                                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select A Tittle
                                    </button>
                                    <ul className="dropdown-menu"></ul>
                                </div>
                            </div>
                            <div className='col-6'>
                                <h6>Last Name</h6>
                                <input type="text" required />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <h6>First Name</h6>
                                <input type="text" required />
                            </div>
                            <div className='col-6'>
                                <h6>Middle Name</h6>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='col-12'>
                            <h6> Suffix </h6>
                            <input type="text" className="form-control" />
                        </div>
                        <div className='col-12'>
                            <h6>Address 1</h6>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='col-12'>
                            <h6>Address 2</h6>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <h6>Zip Code</h6>
                                <input type="text" />
                            </div>
                            <div className='col-6'>
                                <h6>State</h6>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <h6>City</h6>
                                <input type="text" />
                            </div>
                            <div className='col-6'>
                                <h6>Social Security #</h6>
                                <input type="text" required />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <h6>Employee Number</h6>
                                <input type="text" />
                            </div>
                            <div className='col-6'>
                                <h6> IAFF#</h6>
                                <input type="text" required />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <h5> Member Status </h5>
                        <div className='row'>
                            <div className='col-6'>
                                <input type="checkbox"  />
                                &nbsp; Initiated
                            </div>
                            <div className='col-6'>
                                <input type="checkbox"  />
                                &nbsp; Transferred In
                            </div>
                        </div>
                        <h5> Demographics</h5>
                        <div className='row'>
                            <div className='col-6'>
                                <h6> Date of Birth </h6>
                                <input type="date" required />
                            </div>
                            <div className='col-6'>
                                <h6> Join Date </h6>
                                <input type="date" required />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <h6>Gender</h6>
                                <input type="text" />
                            </div>
                            <div className='col-6'>
                                <h6>Race</h6>
                                <input type="text" />
                            </div>
                        </div>
                        <h5>Job Info</h5>
                        <div className='row'>
                            <div className='col-6'>
                                <h6> Original Hire</h6>
                                <input type="text" required />
                            </div>
                            <div className='col-6'>
                                <h6> Badge #</h6>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='col-12'>
                            <h6>Position</h6>
                            <input type="text" required className='form-control' />
                        </div>
                        <div className='col-12'>
                            <h6>Sick Plan</h6>
                            <input type="text" required className='form-control' />
                        </div>
                        <h5> Contact Details</h5>
                        <div className='row'>
                            <div className='col-6'>
                                <h6>Home Phone</h6>
                                <input type="number" />
                            </div>
                            <div className='col-6'>
                                <h6>Cell phone</h6>
                                <input type="number" />
                            </div>
                        </div>
                        <div className='col-12'>
                            <h6>Email</h6>
                            <input type="email" className='form-control' />
                        </div>
                        <div className='row'>
                            
                                <button className='col-6'> Create</button>
                            
                            
                                <button className='col-6'> Cancel</button>
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddMember