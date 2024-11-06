import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Home( )
{
    const [students, setStudents] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/students")
        .then((res)=> res.json())
        .then((data)=>{
            setStudents(data)
        })


    }, [])

    return (
        <div>     
            <h1>Students List</h1>
            <div className='container mx-auto row'>
                {
                    students && students.map((y, index)=>(
                    <Link to={`/student/${y.id}`} key={index}  className='col-md-4 border'>
                        <img src={y.image} className="img-fluid"/>
                        <h1>{y.id}</h1>
                        <h4>{y.name} </h4>  
                        {
                            y.hobbies.map((hobby, index)=>(
                                <button key={index}>{hobby}</button>
                            ))
                        }
                  
                    </Link>
                    ))
                }
                </div>
        </div>
    )
}

