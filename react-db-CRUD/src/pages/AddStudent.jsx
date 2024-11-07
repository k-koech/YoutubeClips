import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify'

export default function AddStudent() {
    const nav = useNavigate()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [image, setImage] = useState()
    const [hobbies, setHobbies] = useState()


    console.log("email ", email);
    function handleSubmit(e){
         e.preventDefault();

         const hobbiesList = hobbies.split(",")

         fetch(`http://localhost:4000/students`, {
            method: "POST",
            body: JSON.stringify({
               email: email,
                name: name,
                age:age,
                image:image,
                hobbies: hobbiesList
            })
         })
         .then((res)=>res.json() )
         .then((data)=>{
          
          console.log("Success")
          nav("/")
          toast.success("Student added successfully!")

         })

         setEmail()
         setAge()
         setImage()
         setName()
         setHobbies()
    }
    console.log(name);

  return (
    <div>
        <h3>AddStudent</h3>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control" />
        </div>

        <div className="mb-3">
            <label className="form-label">Image url</label>
            <input type="url" value={image} onChange={(e)=> setImage(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Age</label>
            <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} className="form-control" />
        </div>

        <div className="mb-3">
            <label className="form-label">Hobbies (use comma to separate your hobbies)</label>
            <input type="text" onChange={(e)=> setHobbies(e.target.value)} className="form-control" />
        </div>




        <button type="submit" className="btn btn-primary">Submit</button>
        </form>


    </div>
  )
}
