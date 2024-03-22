import React, { useEffect, useRef, useState } from 'react'
import { books, changeBookStatus, userbookList } from '../Configuration/Api'
import Book from '../Components/Book'
import { useNavigate } from 'react-router-dom'

function BookScreen({ activeUser }) {

    const [bookList, setBookList] = useState([])
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState(1)
    const navigate = useNavigate()
    const filter = {
        userId: activeUser._id,
        search: search,
        sort: sort
    }
    const changeStatus = async (id, status) => {
        await changeBookStatus(id, status);
        const list = bookList.map((item) => {
            if (item._id != id) {
                return item
            }
            else {
                return {
                    ...item,
                    status: status
                }
            }
        })
        setBookList(list)
    }
    useEffect(() => {
        (async () => {
            const response = await userbookList(filter)
            setBookList(response)
        })();
    }, [search, sort])
    return (
        <div>
            <div className='container row  m-auto'>
                <p className='col fs-2 fw-bold'>
                    Total Books : {bookList?.length}
                </p>
                <p className='col text-end fs-1' onClick={() => navigate("/add")}>
                    <i className="bi bi-plus-circle-dotted"></i>
                </p>
            </div>
            <div className='container  row  m-auto w-75 bg-light'>
                <p className='col fs-4'>
                    <input class="form-control m-2" type="search" placeholder="Search by title" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                </p>
                <p className='col text-end fs-4 m-2' onClick={() => ""}>
                    Sort by : <select name='sort' defaultValue={"Sort"} onClick={(e) => setSort(e.target.value)}>
                        <option value="1">Ascending Order</option>
                        <option value="-1">Decending Order</option>
                    </select>
                </p>
            </div>
            <p className='container text-center fw-bold fs-2'>Reading</p>
            <div className='container row m-auto'>
                {
                    bookList?.filter(b => b.status === "reading").map((item) => (
                        <Book book={item} key={item._id} bookStatus={changeStatus} />
                    ))
                }
            </div>
            <p className='container text-center fw-bold fs-2'>Completed</p>
            <div className='container row m-auto'>
                {
                    bookList?.filter(b => b.status === "complete").map((item) => (
                        <Book book={item} key={item._id} bookStatus={changeStatus} />
                    ))
                }
            </div>
            <p className='container text-center fw-bold fs-2'>Plan to read</p>
            <div className='container row m-auto mb-3 '>
                {
                    bookList?.filter(b => b.status === "planning").map((item) => (
                        <Book book={item} key={item._id} bookStatus={changeStatus} />
                    ))
                }
            </div>
        </div>
    )
}

export default BookScreen