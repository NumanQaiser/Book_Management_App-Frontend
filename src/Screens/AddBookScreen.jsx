import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { createBook } from '../Configuration/Api'
import { AppContext, useAppContext } from '../StateManagement/Context'
function AddBookScreen() {
  const { userData } = useAppContext(AppContext)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      author: "",
      publicatior: "",
      date: "",
      genre: ""
    }
  })

  const submit = (data) => {
    //call the create api of book 
    const book = {
      title: data.title,
      author: data.author,
      publicatior: data.publicatior,
      date: data.date,
      genre: data.genre,
      userId: userData._id
    }
    createBook(book)
  }

  return (
    <div className='container border'>
      <h1 className='text-center text-capitalize mt-2'>Add another book into shelve</h1>
      <form className='border w-75 m-auto mb-2 text-center' onSubmit={handleSubmit(submit)}>
        <div >
          <label className='fw-bold p-2 fs-3'>
            Book Title
          </label>
          <input   {...register("title", { required: true })} type='text' placeholder='Enter book title' />
        </div>

        <div >
          <label className='fw-bold p-2 fs-3'>
            Author Name
          </label>
          <input  {...register("author", { required: true })} type='text' placeholder='Enter Book Author Name' />
        </div>

        <div >
          <label className='fw-bold p-2 fs-3'>
            Publicatior
          </label>
          <input  {...register("publicatior", { required: true })} type='text' placeholder='Enter Book Publicatior' />
        </div>
        <div >
          <label className='fw-bold p-2 fs-3'>
            Publication Date
          </label>
          <input  {...register("date", { required: true })} type='date' placeholder='Enter your Password' />
        </div>
        <div className=''>
          <label className='fw-bold p-2 fs-3'>
            Genre
          </label>
          <input {...register("genre")} type="radio" value="Auto Biography" />
          <span>Auto Biography</span><br />
          <input {...register("genre")} type="radio" value="Friction" />
          <span>Friction</span> <br />
          <input {...register("genre")} type="radio" value="Comedy" />
          <span>Comedy</span><br />
          <input {...register("genre")} type="radio" value="History" />
          <span>History</span><br />

        </div>

        <input className='m-3' type='submit' value={"Create a new book"} />
        <p>Go back to Main Dashboard <Link to="/">Home</Link></p>
      </form>

    </div>
  )
}

export default AddBookScreen