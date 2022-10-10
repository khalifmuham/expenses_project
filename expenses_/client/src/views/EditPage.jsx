import React, {useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const EditPage = () => {
  const [title, setTitle] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()

  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=> {
    axios.get(`http://localhost:8000/api/expenses/${id}`)
    .then(res => {
        const expenses = res.data 
        setTitle(expenses.title)
        setPrice(expenses.price)
        setDescription(expenses.description)
    })
    .catch(err => console.log(err))
}, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        //post the new prodect
        axios.put(`http://localhost:8000/api/expenses/${id}`, {title, price, description} )
        .then(res => navigate("/"))
        .catch(err => console.log(err))
    }
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/expenses/${id}`)
        .then(response => navigate(`/`))
        .catch(err => console.log(err))
    }

  return (
    <div className="container" >
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid">
                <div className="nav_title collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className=" navclick nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className=" navclick nav-link active" href="/expenses/new">Create</a>
                        </li>
                    </ul>
                </div>
                    <h2 className="page">Edit Item</h2>
                    <button className="btn btn-danger" onClick={handleDelete}> Delete </button>
            </div>
        </nav>

        <div>
            <form onSubmit= {handleSubmit} >
                <div className="mb-2">
                    <label className=" form_title form-label"> Title: </label>
                    <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" />
                </div>
                <div className="mb-2">
                    <label className=" form_title form-label"> Price:$ </label>
                    <input type="number" name="price" min="0" value={price} onChange={(e)=>setPrice(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-2">
                    <label className=" form_title form-label"> Description: </label>
                    <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" />
                </div>
                
                <button type="submit" className='btn btn-success' > Update </button>
            </form>
        </div>
    </div>
  )
}

export default EditPage