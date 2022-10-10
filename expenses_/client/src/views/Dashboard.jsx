import React,{useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//Grab all expenses from database
//1. axios
//2. when the component is load: useeffect
//3. variable that will change useState

const Dashboard = () => {
    const [expenses, setExpenses] = useState([])
    const{id} = useParams()
    const navigate = useNavigate()

    const [refresh, setRefresh] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/expenses`)
        .then(res=> setExpenses(res.data))
        .catch(err=> console.log(err))
    }, [refresh]) 

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/expenses/${id}` )
        .then(res => setRefresh(true))
        .catch(err => console.log(err))
    }

    return (
        <div className="container">
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
                        <h2 className="page">Dashboard</h2>
                </div>
            </nav>

            {/* <button> <Link to="/expenses/new">Create Items</Link> </button> */}
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((eachExpense, i) =>{
                            return(
                                <tr key={i}>
                                    <td>
                                        <Link style={{textDecoration: 'none'}} to={`/details/${eachExpense._id}`}>{eachExpense.title}
                                        </Link>
                                    </td>
                                    <td>${eachExpense.price}</td>
                                    <td>{eachExpense.description}</td>
                                    <td>
                                        <Link style={{textDecoration: 'none'}} to={`/expenses/edit/${eachExpense._id}`}>Edit</Link>
                                        
                                        <Link style={{textDecoration: 'none'}} className='hover' onClick={()=> handleDelete(eachExpense._id)}> Delete 
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>




        </div>
    )
}

export default Dashboard