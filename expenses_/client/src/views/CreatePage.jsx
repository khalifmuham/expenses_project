import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

    const CreatePage = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const handleSubmit = (e)=> {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/expenses`, {
        title, 
        price, 
        description,
    })
        .then(res=> navigate("/"))
        .catch(err=>
            {
                const errResponse = err.response.data.errors
                const tempErrArr =[]
                for(const eachKey in errResponse){
                    tempErrArr.push(errResponse[eachKey].message)
                }
                setErrors(tempErrArr)
            })
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
                    </ul>
                </div>
                <h2 className="page">Create</h2>
            </div>
        </nav>

        <div  className="view_">
            <form onSubmit={handleSubmit} className="form" >
                <div className="mb-2">
                <label className=" form_title form-label" > Title: </label>
                <input type="text" name="Title" value={title}
                    onChange={e=>setTitle(e.target.value)} className="form-control"/>
                </div>

                <div className="mb-3">
                <label className=" form_title form-check-label"> Price </label>
                <input type="number" name="price" checked={price} min="1"
                    onChange={e=>setPrice(e.target.value)} className="form-control" />
                </div>
                
                <div>
                <label className=" form_title form-label" > Description: </label>
                <input type="text" name="Description" value={description}
                    onChange={e=>setDescription(e.target.value)} className="form-control"/>
                </div>

                <div>
                    <button type="submit" className='btn btn-success'> Create Expense 
                    </button>
                </div>
                {
                    errors.map((err, i)=>{
                        return(
                            <p style={{color:"red"}} key={i} > {err} </p>
                        )
                        })
                } 
            </form>
        </div>

        </div> 
  )
}

export default CreatePage
