function User({
    email,
    password,
    name,
    children,
  }) {
    return (
      <>
        <div className="user-container">
          <p>Hello {name}</p>
          {children}
        </div>
        <div></div>
      </>
    )
  }
  
  export default User;
  