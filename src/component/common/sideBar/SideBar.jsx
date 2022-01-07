import { Link } from 'react-router-dom';
import { BsListUl } from 'react-icons/bs';
import { IoMdListBox } from 'react-icons/io';
import img from 'assets/images/clint2.png';
import Modal from 'react-modal';
import Form from 'component/form/Form';
const SideBar = ({ setToggle, toggle, openModal, modalIsOpen, closeModal }) => {
    return (
        <div className="sideBar_component">
            <div className="sideBarInner">
                <div className="userCart">
                    <img src={img} alt="" />
                    <div>
                        <h4>Hi Reader,</h4>
                        <p>here your news!</p>
                    </div>
                </div>
                <div className="toggleCart">
                    <h4>View Toggle</h4>
                    <div className="toggleBtn">
                        <button
                            className={toggle ? 'active' : 'firstBtn'}
                            onClick={() => setToggle(!toggle)}
                        >
                            <IoMdListBox />
                        </button>
                        <button
                            className={!toggle ? 'inactive' : 'secondBtn'}
                            onClick={() => setToggle(!toggle)}
                        >
                            <BsListUl />
                        </button>
                    </div>
                </div>
                <div className="feedBactCart">
                    <h4>Have a feedback?</h4>
                    <Link onClick={openModal} to="/">
                        <button>We are Listening!</button>
                    </Link>
                </div>
            </div>
            <div className="sideBarPopUpForm">
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
                        <div className="col-md-8">
                            <Form />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default SideBar;
