import React from "react";
import { useState, useEffect } from "react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";

export function Repositories() {
    const history = createBrowserHistory({ window })
    let [repositories, setRenderRepository] = useState([]);
    let [ownerProfilers, setOwner] = useState([]);

    useEffect(() => {
        let repositoriesName: any = localStorage.getItem('repositoriesName');
        let ownerProfilers: any = localStorage.getItem('ownerProfilers');
        
        if (repositoriesName && ownerProfilers) {
            repositoriesName = JSON.parse(repositoriesName);
            ownerProfilers = JSON.parse(ownerProfilers);

            setRenderRepository(repositoriesName);
            setOwner(ownerProfilers);
            localStorage.clear();
        } else {
            history.push('/');
        };

    }, []);

    //essa variável guarda a quantidade de repositorios que o usuario tem em seu github 
    let numberOfRepositories = Object.keys(repositories).length;
    return (
        <div>
            {
               <div>
                   <img src={ownerProfilers[0]} width="50px"/>
                   <h1>Usúario: {ownerProfilers[1]}</h1>
                   <h2>ID: {ownerProfilers[2]}</h2>
                   <span>Quantidade de repositorios: {numberOfRepositories}</span> 
               </div>
            }
            <h1>REPOSITORIOS</h1>
            <ul>
                {repositories.map(repository => <li>{repository}</li>)}
            </ul>
            <Link to={'/'}>VOLTAR</Link>
        </div>
    )
}