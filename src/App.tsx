import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

type User = {
  id: string;
  name: string;
  email: string;
};

type Data = {
  users: User[];
};

function App() {
  const { data, loading, error } = useQuery<Data>(GET_USERS);
  if (!data || loading) return <p>ローディング中です</p>;
  if (error) return <p>エラーが発生しています。</p>;

  return (
    <div style={{ margin: "3em" }}>
      <h1>GraphQL</h1>
      <h2>GetUsers</h2>
      {data.users.map((user) => (
        <div>
          <h3 key={user.id}>
            {user.id}: {user.name}
          </h3>
          <ul>
            <li>{user.email}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
