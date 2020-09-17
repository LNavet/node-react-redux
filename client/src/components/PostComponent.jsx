import React,{Fragment} from 'react'
import { deletePost } from "../redux/postDucks";
import { useDispatch, useSelector } from "react-redux";

export default function PostComponent(props) {

    const dispatch = useDispatch()

    function deletePostItem(event) {
        dispatch(deletePost(props.id))
        event.preventDefault()
    }
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td><button className="btn btn-danger" onClick={deletePostItem}>Eliminar</button></td>
        </tr> 
    )
}
