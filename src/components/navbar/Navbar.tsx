import "./navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="climate-change.svg" alt="" className="imgLogo" />
        <span>Climate Admin</span>
      </div>
      <div className="icons">
        <div className="user">
          <img
            src="https://raw.githubusercontent.com/Felipeecp/climate-dashboard/cdf99a4878c99564c2eda61f37722dfa1e898781/userProf.svg"
            alt=""
          />
          <span>Adiministrador</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
