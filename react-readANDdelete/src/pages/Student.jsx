import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Student() 
{
  const nav = useNavigate()
    const {id} = useParams()
    const [student, setStudent] = useState({})
    useEffect(()=>{
           fetch(`http://localhost:3000/students/${id}`)
           .then((res)=>res.json() )
           .then((data)=>{
            setStudent(data)
            console.log(data)
           })
    }, [id])

    function handleDelete(){
      fetch(`http://localhost:3000/students/${id}`,{
        method:"DELETE"
      }
      )
      .then((res)=>res.json() )
      .then((data)=>{
         console.log("success")
         nav("/")
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



    </div>
  )
}
