import { useState } from "react";
import axios from "axios"
import { Repositories } from "./Repositories";
import { useNavigate } from "react-router-dom";

export function Index() {
    const navigate = useNavigate()

    const [erro, setErro] = useState(false);

    const [user, setRepositories]:any[] = useState([]);

    function requestRepositories() {
        const apiGitHub = `https://api.github.com/users/${user}/repos`;
        
        axios.get(apiGitHub)
            .then(response => {

                const repositories = response.data;
    
                var repositoriesName: string[] = [];
    
                repositories.map((repository: any) => {
                    repositoriesName.push(repository.name);
                })
                localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
                setErro(false)
                navigate('/repositories')
            })
            .catch(err => {
                setErro(true)
            })
    }
    return (
       <div>
            <div>
                <h1>REPOSITORIOS</h1>
                <input className='nameInput' placeholder='Usuario' onChange={e => {setRepositories(e.target.value)}}/>
                <button onClick={requestRepositories}>BUSCAR</button>
            </div>
            {
                erro ? <span style={{color: 'red', fontFamily: 'Arial'}}>Ocorreu um erro :( tente novamente!</span> : ''
            }
       </div>
    )
    }