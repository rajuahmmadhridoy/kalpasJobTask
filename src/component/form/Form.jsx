import React from 'react';

const Form = () => {
    return (
        <div className="form_component">
            <div className="top">
                <h4>Thank you so mush for talking the time!</h4>
                <p>please provie the below details </p>
            </div>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="first-name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="last-name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Example textarea
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Country
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Bangladesh"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                        Email id
                    </label>
                    <div className="d-flex align-items-center">
                        <input
                            type="number"
                            className="form-control"
                            id="number"
                            placeholder="your email"
                        />
                        <p className="ps-2 text-danger">please Enter a valid number</p>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email Id
                    </label>
                    <div className="d-flex align-items-center phone">
                        <button type="submit" className="btn btn-white mb-3">
                            +91
                        </button>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="0022516"
                        />
                        <p className="ps-2 text-danger">please Enter a valid number</p>
                    </div>
                </div>
                <input className="submitBtn" type="submit" value="Submit Feedback" />
            </form>
        </div>
    );
};

export default Form;
