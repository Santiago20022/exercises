import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import User from "../components/User"
import { users } from "../mocks/users";

function UserDetails(){
  const [user, setUser] = useState();
  const params = useParams();

  useEffect(() => {
    const userToFind = users.find((user) => user.id === parseInt(params.userId));
    setUser(userToFind);
  }, []);

  return (
    <User email={user?.email} password={user?.password} name={user?.name} />
  );
}

export default UserDetails;
