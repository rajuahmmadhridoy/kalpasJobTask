import React, { useEffect, useState } from 'react';

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [count, setCount] = useState(1);
    const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total / showPerPage));
    console.log(numberOfButtons, 'num');
    useEffect(() => {
        const value = showPerPage * count;
        console.log(value - showPerPage);
        console.log(value);
        onPaginationChange(value - showPerPage, value);
    }, [count]);
    console.log(setNumberOfButtons);
    const onBtnClick = (type) => {
        if (type === 'prev') {
            if (count === 1) {
                setCount(1);
            } else {
                setCount(count - 1);
            }
        } else if (type === 'next') {
            if (numberOfButtons === count) {
                setCount(count);
            } else {
                setCount(count + 1);
            }
        }
    };
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li onClick={() => onBtnClick('prev')} className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    {new Array(numberOfButtons).fill('').map((el, index) => (
                        <li key={index} className="page-item">
                            <a className="page-link" href="#">
                                {index + 1}
                            </a>
                        </li>
                    ))}
                    <li onClick={() => onBtnClick('next')} className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
