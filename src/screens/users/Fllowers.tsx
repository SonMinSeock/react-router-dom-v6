import { useOutletContext } from "react-router-dom";

interface IFllowersContext {
  nameOfMyUser: string;
}

function Fllowers() {
  const { nameOfMyUser } = useOutletContext<IFllowersContext>();

  return (
    <>
      <h1>Here are {nameOfMyUser}의 Fllowers</h1>
    </>
  );
}

export default Fllowers;
