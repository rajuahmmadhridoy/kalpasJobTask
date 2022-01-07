import React from 'react';
import { ImCross } from 'react-icons/im';
import img from 'assets/images/clint2.png';
const ListItem = ({ data }) => {
    const { title, body, id } = data;
    const deleteItem = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => {
                console.log('deleted successfully', result);
            });
    };
    return (
        <div className="listItem_component d-flex align-items-center">
            <div className="col-md-11">
                <div className="listItemListLeft d-flex align-items-center">
                    <img src={img} alt="" />
                    <div className="itemListContent">
                        <h4>{title.length > 30 ? title.slice(20) : title}</h4>
                        <p>{body.length > 120 ? body.slice(80) : body}</p>
                        <p>Mon, 21 Dec 2020 14:57 GMT </p>
                    </div>
                </div>
            </div>
            <div className="col-md-1">
                <button onClick={() => deleteItem(id)}>
                    <ImCross />
                </button>
            </div>
        </div>
    );
};

export default ListItem;
