import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  const ctx = useOutletContext();

  console.log(ctx);

  return (
    <>
      <div>
        <h1>
          User with it {userId} is named: {users[Number(userId) - 1].name}
        </h1>
        <hr />
        <Link to="fllowers">See fllowers</Link> <Link to={`/users/${userId}`}>Close fllowers</Link>
        <Outlet
          context={{
            nameOfMyUser: users[Number(userId) - 1].name,
          }}
        />
      </div>
    </>
  );
}

export default User;
