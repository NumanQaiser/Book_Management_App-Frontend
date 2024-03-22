import React, {useState } from 'react'

function Book({ book, bookStatus }) {
    const [change, setChange] = useState(false)
    const [books, setBooks] = useState(book)
    function handleChange() {
        setChange(!change)
    }
    function changeStatus(e) {
        // call here status update api
        bookStatus(books._id, e.target.value)
    }
    return (
        <div className='col-sm-6 col-md-4 col-lg-3  border-black border m-1'>
            <div>
                <div>
                    {change ?
                        <select className='' name='status' defaultValue={books.status} onClick={(e) => changeStatus(e)}>
                            <option value="reading" style={{
                                backgroundColor: books.status === "reading" ? "green" : "white",
                                color: books.status === "reading" ? "white" : "black",
                            }}>Reading</option>
                            <option value="complete" style={{
                                backgroundColor: books.status === "complete" ? "green" : "white",
                                color: books.status === "complete" ? "white" : "black",
                            }}>Complete</option>
                            <option value="planning" style={{
                                backgroundColor: books.status === "planning" ? "green" : "white",
                                color: books.status === "planning" ? "white" : "black",
                            }}>Planning</option>
                        </select>
                        :
                        <button onClick={handleChange} className='mt-1 '>
                            <i className="bi bi-circle-fill"></i>
                        </button>


                    }
                </div>

                <div className='text-center'>
                    <label className='fw-bold fs-5 m-1 text-capitalize text-center'>Title : </label>{"\t\t"}
                    <span className=' fs-5 m-1'>{book.title}</span>
                    <br />
                    <label className='fw-bold fs-5 m-1 text-capitalize text-center'>Author : </label>{"\t\t"}
                    <span className=' fs-5 m-1'>{book.author}</span>
                    <br />
                    <label className='fw-bold fs-5 m-1 text-capitalize text-center'>Publicatior : </label>{"\t\t"}
                    <span className=' fs-5 m-1'>{book.publicatior}</span>
                    <br />
                    <label className='fw-bold fs-5 m-1 text-capitalize text-center'>Date : </label>{"\t\t"}
                    <span className=' fs-5 m-1'>{book.date}</span>
                    <br />
                    <label className='fw-bold fs-5 m-1 text-capitalize text-center'>Status: </label>{"\t\t"}
                    <span className=' fs-5 m-1 text-white bg-secondary p-1 text-capitalize'>{book.status}</span>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Book