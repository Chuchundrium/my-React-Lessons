import React, { useState } from 'react';
import s from './Pagination.module.css';

let Pagination = ({
    currentPage,
    totalItemsCount,
    pageSize,
    onPageChanged,
    portionSize = 10 }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNum, setPortionNum] = useState(1);
    const leftPortionPageNum = (portionNum - 1) * portionSize + 1;
    const rightPortionPageNum = (portionNum) * portionSize;

    return (
        <div>
            {portionNum > 1 &&
                <button onClick={() => { setPortionNum(portionNum - 1) }}>
                    PREV</button>}
            {pages
            .filter(p => p >= leftPortionPageNum && p <= rightPortionPageNum)
            .map(p => {
                return (
                    <span key={p}
                        id={s.pageNumber}
                        className={(p === currentPage) ? s.selectedPage : undefined}
                        onClick={(e) => { onPageChanged(p) }}
                    >{p}</span>
                )
            })
            }
            {portionCount > portionNum &&
                <button onClick={() => { setPortionNum(portionNum + 1) }}>
                    NEXT</button>}
        </div>
    )
}

export default Pagination;