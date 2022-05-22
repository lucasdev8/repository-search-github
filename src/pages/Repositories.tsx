import React from "react";
import { useState, useEffect } from "react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";

export function Repositories() {
    const [repositories, setRenderRepository] = useState([]);
    const history = createBrowserHistory({ window });

    useEffect(() => {
        let repositoriesName: any = localStorage.getItem('repositoriesName');

        if (repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRenderRepository(repositoriesName);
            localStorage.clear()
        } else {
            history.push('/');
        };

    }, [])
    return (
        <div>
            <ul>
                {repositories.map(repository => <li>{repository}</li>)}
            </ul>
            <Link to={'/'}>VOLTAR</Link>
        </div>
    )
}