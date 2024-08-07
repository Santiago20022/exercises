import React, {useState, useMemo, createContext} from "react";

export const UserContext = createContext({
  userId: null,
  setUserId: null,
  user: null,
  setuser: null
});


export const UserProvider = ({ children }) => {
  const currentUserId = parseInt(localStorage.getItem('userId'));

  const userString = localStorage.getItem('user')
  let currentUser = null;
  if(userString) {
    currentUser = JSON.parse(userString);
  }
  const [userId, setUserId] = useState(currentUserId); //const [userId, setUserId] = setState(null);
  const [user, setUser] = useState(currentUser);
  const value = useMemo(() => (
    {
      userId,
      setUserId,
      user,
      setUser,
    }
  ), [userId]);

  return (
    <UserContext.Provider value={ value }>
        {children}
    </UserContext.Provider>
);
};