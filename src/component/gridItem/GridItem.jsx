import React from 'react';
import { ImCross } from 'react-icons/im';
import img from 'assets/images/bg.jpg';

const GridItem = ({ data }) => {
    const { title, body, id } = data;
    // const slic = ()=>{
    //     if(body.length > 150){
    //         const slicceData = body.slice(10)
    //         return slicceData;
    //     }
    // }
    // console.log(slic(body,'slic'))

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
        <div className="col-md-4">
            <div className="grid_component">
                <div className="gridBtn">
                    <button onClick={() => deleteItem(id)}>
                        <ImCross />
                    </button>
                </div>
                <div className="GridContent">
                    <h4>{title.length > 25 ? title.substring(0, 20) : title}...</h4>
                    <p>{body.length > 100 ? body.substring(0, 50) : body}...</p>
                    <p>Mon, 21 Dec 2020 14:57 GMT </p>
                </div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default GridItem;
