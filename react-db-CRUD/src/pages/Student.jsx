import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Student() 
{
  const nav = useNavigate()

  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [image, setImage] = useState()
  const [hobbies, setHobbies] = useState()


    const {student_id} = useParams()

    const [student, setStudent] = useState({})
    useEffect(()=>{
           fetch(`http://localhost:4000/students/${student_id}`)
           .then((res)=>res.json() )
           .then((data)=>{
            setStudent(data)
            console.log(data)
              
            setEmail(data.email)
            setAge(data.age)
            setHobbies(data.hobbies)
            setImage(data.image)
            setName(data.name)

           })
    }, [student_id])

    // Handle delete
    function handleDelete(){
      fetch(`http://localhost:4000/students/${student_id}`,{
        method:"DELETE"
      }
      )
      .then((res)=>res.json() )
      .then((data)=>{
        nav("/")
         console.log("success")
         toast.success("Student deleted successfully!")

      })
    }

    // Handle Update
    function handleSubmit(e){
      e.preventDefault();

      const hobbiesList = !Array.isArray(hobbies) && hobbies.split(",")

      fetch(`http://localhost:4000/students/${student_id}`, {
         method: "PATCH",
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
       toast.success("Student updated successfully!")

      })

    
 }
    
  return (
    <div>
          <img src={student.image} className="img-fluid"/>
          <h4>{student.name} </h4>  
          <h4>{student.age} </h4>  
          <h4>{student.email} </h4>  
          <div>
          {
             student.hobbies && student.hobbies.map((hobby, index)=>(
                  <button key={index}>{hobby}</button>
              ))
          }
          </div>

          <button onClick={handleDelete} type="button" class="btn mt-3 btn-danger btn-sm">DELETE</button>


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
            <input type="text" value={hobbies} onChange={(e)=> setHobbies(e.target.value)} className="form-control" />
        </div>




        <button type="submit" className="btn btn-primary">Submit</button>
        </form>


    </div>


    </div>
  )
}
