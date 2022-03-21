import React from "react";
import { useEffect, useState } from "react";
const People = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {

         (async () => {
            const res = await fetch('https://ghibliapi.herokuapp.com/People');
            const allPeople = await res.json();
            setUsers(allPeople);
        })()
    }, [])

    return (
        
        <main className="container">
            <section className="row justify-content-center mt-5">
                {users.map(People => (
                    <div className="col-md-6" key={`user-card-${People.id}`}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title">{People.name}</h4>
                                <p className="card-subtitle text-muted">{People.gender}</p>
                                <p className="card-text">Age: {People.age}</p>
                                <p className="card_text">Hair color: {People.hair_color}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )

}

export default People
