import React, {useEffect, useState} from 'react';
import {albumServise} from "../../servises/albumServise";
import Album from "./Album";

const Albums = () => {
    const [albums, setAlbums]= useState([]);
    useEffect(()=> {
        albumServise.getAll().then(({data}) =>setAlbums(data))
    },[])
    return (
        <div>
            {albums.map(album => <Album key = {album.id} album ={album}/>)}
        </div>
    );
};

export default Albums;