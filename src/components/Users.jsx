
import { users } from "../mocks/users";
import { User } from "./User"


function Users({
  children
}) {
  return (
    <>
      {children}
      {users.map((user) => (
        <User email={user.email} password={user.password} name={user.name}>
          <p>Hello {user.name}</p>
        </User>
      ))}
    </>
  );
}

export default Users;
