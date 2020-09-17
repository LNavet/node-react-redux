import React, { useEffect } from "react";
import { getAllPosts } from "../redux/postDucks";
import { useDispatch, useSelector } from "react-redux";
import Post from "./PostComponent";
export default function ListPostsComponent() {
    
    const dispatch = useDispatch();
    const posts = useSelector(store => store.posts)
    
    useEffect(() => {
        dispatch(getAllPosts())
    },[])

  return (
    <>
      <table className="table  justify-content-center col-md-6 offset-md-3">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Título</th>
            <th scope="col">Descripción</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
                posts.map(post => (
                <Post key={post.id} {...post} />
                ))
            }
        </tbody>
      </table>
    </>
  );
}
