import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  // console.log(readSearchParams.has("geo"));
  // console.log(readSearchParams.get("geo"));
  // setTimeout(() => {
  //   console.log("url search params set...");
  //   setSearchParams({
  //     day: "today",
  //     tommorow: "124",
  //   });
  // }, 3000);
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
