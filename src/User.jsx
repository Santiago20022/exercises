function User({
    email,
    password,
    name,
    children,
  }) {
    return (
      <>
        <div className="user-container">
          <h1>{email}</h1>
          <p>{password}</p>
          <p>{name}</p>
          {children}
        </div>
        <div></div>
      </>
    )
  }
  
  export default User;
  