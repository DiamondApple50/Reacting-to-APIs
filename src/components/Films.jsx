import React from "react";
import { useEffect, useState } from "react";
const Films = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {

         (async () => {
            const res = await fetch('https://ghibliapi.herokuapp.com/films');
            const allFilms = await res.json();
            setUsers(allFilms);
        })()
    }, [])

    return (
        
        <main className="container">
            <section className="row justify-content-center mt-5">
                {users.map(Films => (
                    <div className="col-md-6" key={`user-card-${Films.id}`}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title">{Films.title}</h4>
                                <p className="card-subtitle text-muted">{Films.description}</p>
                                <p className="card-text">Release Date: {Films.release_date}</p>
                                <p className="card_text">Running Time: {Films.running_time} Minutes</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )

}

export default Films
