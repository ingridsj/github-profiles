import { RepositoriesGitHubData } from "../../interfaces/IRespositories";

interface CardProps {
  avatar: string;
  name: string;
  bio: string;
  login: string;
  followers: string;
  publicRepos: number;
  repositories: RepositoriesGitHubData[];
}

export function Card(props: CardProps) {
  return (
    <div className="flex-info">
      <div className="content">
        <img src={props.avatar} />

        <aside>
          <div className="user-description">
            <h1>
              {props.name} - {props.login}
            </h1>
            <p>{props.bio}</p>
            <div className="quantity">
              <p>Followers: {props.followers}</p>
              <p>Repositories count: {props.publicRepos}</p>
            </div>
          </div>

          <div className="user-repo-info">
            <p>[Newest Repositories]</p>
            <ul>
              {props.repositories
                .sort(
                  (a, b) =>
                    new Date(b.updated_at).getTime() -
                    new Date(a.updated_at).getTime()
                )
                .slice(0, 5)
                .map((repository, i) => (
                  <a href={repository.html_url} target="_blank" key={i}>
                    <li>{repository.name}</li>
                  </a>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
