import Pagination from 'component/common/pagination/Pagination';
import GridItem from 'component/gridItem/GridItem';
import ListItem from 'component/ListItem/ListItem';
import React, { useEffect, useState } from 'react';

const Items = ({ toggle }) => {
    const [data, setData] = useState([]);
    const [showPerPage, setShowPerPage] = useState(6);
    const [paginate, setPaginate] = useState({
        start: 0,
        end: showPerPage,
    });
    console.log(setShowPerPage, setPaginate);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    // const onclickSeeMore =()=>{
    //     setPaginate((old)=> old + 3)
    // }
    const onPaginationChange = (start, end) => {
        setPaginate({ start: start, end: end });
    };
    return (
        <div className="items_component">
            <div className="item_component">
                <div className="row">
                    {data
                        .slice(paginate.start, paginate.end)
                        .map((data) =>
                            toggle ? (
                                <ListItem data={data} key={data.id} />
                            ) : (
                                <GridItem data={data} key={data.id} />
                            )
                        )}
                </div>
                <div className="d-flex justify-content-center">
                    {/* <button onClick={onclickSeeMore} style={{background:"orange",color:"#fff",padding:"2px",border:"none"}}>see more</button> */}
                    <Pagination
                        onPaginationChange={onPaginationChange}
                        showPerPage={showPerPage}
                        total={data.length}
                    />
                </div>
            </div>
        </div>
    );
};

export default Items;
