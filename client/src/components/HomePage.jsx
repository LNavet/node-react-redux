import React from 'react'
import FilterPosts from "./FilterPostsComponent";
import ListPosts from "./ListPostsComponent";
import Formulario from "./FormularioComponent";
export default function HomePage() {
    return (
        <>
            <FilterPosts />
            <hr/>
            <ListPosts />
            <hr/>
            <Formulario />
        </>
    )
}
