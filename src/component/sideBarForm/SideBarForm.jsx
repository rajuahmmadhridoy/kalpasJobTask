import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import img from 'assets/images/clint2.png';
// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };

Modal.setAppElement('#root');
const SideBarForm = ({ modalIsOpen, closeModal }) => {
    return (
        <div className="sideBarForm_component">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
                className="sideBarFormModal"
            >
                <div className="row">
                    <div className="col-md-4">
                        <div className="sideBarFormLeft">
                            <div className="userCart">
                                <img src={img} alt="" />
                                <div>
                                    <h4>Hi Reader,</h4>
                                    <p>here your news!</p>
                                </div>
                            </div>
                            <div className="feedBactCart">
                                <h4>Have a feedback?</h4>
                                <Link onClick={closeModal} to="/">
                                    <button>We are Listening!</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8"></div>
                </div>
            </Modal>
        </div>
    );
};

export default SideBarForm;
