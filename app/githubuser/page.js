import Link from "next/link";

async function ambildata() {
  const response = await fetch("https://api.github.com/search/users?q=greg");
  const json = await response.json();
  return json.items;
}

const GitHubUsers = async () => {
    const users = await ambildata();
    
    return (
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th>Repos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th>
                    <Link href={`/githubuser/${user.login}`} className="btn btn-link">
                        Go to Repos
                        </Link>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.avatar_url} alt={user.login} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {user.login}
                      </div>
                      <div className="text-sm opacity-50">
                        {user.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <Link href={user.html_url} className="btn btn-link">
                    View on GitHub
                  </Link>
                </td>
                <th>
                  Go to Repos
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  

export default GitHubUsers;
