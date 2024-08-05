import React, { createContext, useState, useMemo } from "react";

// local storage

export const UserContext = createContext({
  userId: null,
  setUserId: null,
});

export default function UserProvider ({ children }) {
  const currentUser = parseInt(localStorage.getItem('userId'));
  const [userId, setUserId] = useState(currentUser);
  const value = useMemo(() => (
    {
      userId,
      setUserId,
    }
  ), [userId]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
