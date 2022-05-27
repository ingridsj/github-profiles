import { useEffect, useRef, useState } from "react";
import { Card } from "../components/Card";

import { RepositoriesGitHubData } from "../interfaces/IRespositories";
import { UserGitHubData } from "../interfaces/IUserGitHub";

import "../styles/style.css";

export function Home() {
  const [searchUser, setSearchUser] = useState("");
  const [users, setUsers] = useState<UserGitHubData>();
  const [repositories, setRepositories] = useState<RepositoriesGitHubData[]>(
    []
  );


  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  function searchingUsers() {
    if (inputRef.current.value !== "") {
      setSearchUser(inputRef.current.value.trim());
    }

    console.log("preencha o campo");
  }

  useEffect(() => {
    if (searchUser !== "") {
      fetch(`https://api.github.com/users/${searchUser}`)
        .then((response) => response.json())
        .then((data) => setUsers(data));

      fetch(`https://api.github.com/users/${searchUser}/repos`)
        .then((response) => response.json())
        .then((data) => setRepositories(data));
    }
  }, [searchUser]);

  return (
    <div className="wrapper">
      <header>
        <h1>GitHub Profiles</h1>
        <form>
          <input
            type="search"
            placeholder="Digite um perfil..."
            ref={inputRef}
          />
          <button type="button" onClick={searchingUsers}>
            Buscar
          </button>
        </form>
      </header>

      {users !== undefined && (
        <Card
          avatar={users.avatar_url}
          name={users.name}
          bio={users.bio}
          login={users.login}
          followers={users.followers}
          publicRepos={users.public_repos}
          repositories={repositories}
        />
      )}
    </div>
  );
}
