import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import { searchPost, cleanFilter } from "../redux/postDucks";


export default function Filterpostscomponent() {
    
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(event) {
        setSearchTerm(event.target.value)
    }

    return (
        <>
            <form className=" col-8justify-content-center offset-md-3 mt-3" onSubmit={(e)=> e.preventDefault()}>
                <div className="form-row">
                    <div className="col-6 ">
                        <input type="text" name="name"className="form-control" placeholder="Buscar por título" value={searchTerm} onChange={handleChange}/>
                    </div>
                    <div className="col-3">
                        <button 
                        type="submit" 
                        className="btn btn-primary mr-2" 
                        onClick={e => {
                            e.preventDefault()
                            dispatch(searchPost(searchTerm))
                        }}
                        >Buscar</button>
                        <button 
                        type="reset" 
                        className="btn btn-danger" 
                        onClick={e => {
                            e.preventDefault()
                            dispatch(cleanFilter())
                        }}
                        >Limpiar</button>
                    </div>
                </div>
            </form>
        </>
    )
}
