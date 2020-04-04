import React from 'react';
import s from './Pagination.module.css';

let Pagination = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                return (
                    <span key={p}
                        id={s.pageNumber}
                        className={(p === currentPage) ? s.selectedPage : undefined}
                        onClick={(e) => { onPageChanged(p) }}
                    >{p}</span>
                )
            })
            }
        </div>
    )
}

export default Pagination;