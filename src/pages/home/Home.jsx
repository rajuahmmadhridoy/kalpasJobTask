import SideBar from 'component/common/sideBar/SideBar';
import Items from 'component/items/Items';
// import SideBarForm from 'component/sideBarForm/SideBarForm';
import React, { useState } from 'react';

const Home = () => {
    const [toggle, setToggle] = useState(false);

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="home_component">
            <div className="row">
                <div className="col-md-3">
                    <SideBar
                        closeModal={closeModal}
                        modalIsOpen={modalIsOpen}
                        openModal={openModal}
                        toggle={toggle}
                        setToggle={setToggle}
                    />
                </div>
                <div className="col-md-9">
                    <Items toggle={toggle} />
                </div>
            </div>
            {/* <SideBarForm closeModal={closeModal} modalIsOpen={modalIsOpen} /> */}
        </div>
    );
};

export default Home;
