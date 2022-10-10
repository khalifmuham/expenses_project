import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const DetailsPage = () => {
  const {id} = useParams()
    const [expense, setExpense] = useState()
    const navigate = useNavigate()

    useEffect(() => {
      axios.get(`http://localhost:8000/api/expenses/${id}`)
      .then(response => setExpense(response.data))
      .catch(err => console.log(err))
  },[])

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/expenses/${id}`)
    .then(response => navigate(`/`))
    .catch(err => console.log(err))
  }

  return (
    <div class="container">
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
                        <h2 className="page">Details</h2>
                        <button className="btn btn-danger" onClick={handleDelete}> Delete </button>
                </div>
            </nav>
      <div className="view_detail">
    {
        expense&&
        <div className="view_c" >
            <h1>Title: {expense.title}</h1>
            <h1>Price: {expense.price}</h1>
            <h1>Description: {expense.description}</h1>
        </div>
    }
      
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
      
      </div>

    </div>
  )
}

export default DetailsPage