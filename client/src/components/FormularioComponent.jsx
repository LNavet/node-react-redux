import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { addPost } from "../redux/postDucks";

export default function FormularioComponent() {
    const [post, setpost] = useState({name:"",description:""})
    const dispatch = useDispatch()
    
    
    function handleChange(e) {
        setpost({...post,[e.target.name]: e.target.value})
    }

    function handleSubmit(event) {
        dispatch(addPost({name: post.name,description: post.description}))
        setpost({name:"",description:""})
        event.preventDefault();
    }
    return (
        <>
           <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-4">
                        <input type="text" name="name"className="form-control" placeholder="Titulo" value={post.name} onChange={handleChange}/>
                    </div>
                    <div className="col-4">
                        <input type="text" name="description" className="form-control" placeholder="Descripción" value={post.description} onChange={handleChange}/>
                    </div>
                    <div className="col-4">
                        <button type="submit" className="btn btn-success">Crear Post</button>
                    </div>
                </div>
            </form>
        </>
    )
}
