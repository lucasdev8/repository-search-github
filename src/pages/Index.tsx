import { useState } from "react";
import axios from "axios"
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
                const owner = repositories[0].owner;

                const repositoriesName: string[] = [];
                const ownerProfilers:string[] = [];

                ownerProfilers.push(owner.avatar_url, owner.login, owner.id)
                
                repositories.map((repository: any) => {
                    repositoriesName.push(repository.name);   
                });
                localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
                localStorage.setItem('ownerProfilers', JSON.stringify(ownerProfilers));
                setErro(false);
                navigate('/repositories');
            })
            .catch(err => {
                setErro(true);
        });
    };
    return (
       <div>
            <div>
                <h1>GIT-SEARCH</h1>
                <input className='nameInput' placeholder='Usuario' onChange={e => {setRepositories(e.target.value)}}/>
                <button onClick={requestRepositories}>BUSCAR</button>
            </div>
            {
                erro ? <span style={{color: 'red', fontFamily: 'Arial'}}>Usuario não encontrado :( tente novamente!</span> : ''
            }
       </div>
    )
    }