import "./navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="climate-change.svg" alt="" className="imgLogo"/>
        <span>Climate Admin</span>
      </div>
      <div className="icons">
        <div className="user">
          <img src="/userProf.svg" alt="" />
          <span>Luiz</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;