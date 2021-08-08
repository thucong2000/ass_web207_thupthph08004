import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { signOut, isAuthenticate } from "../../auth/index";
import { useLocation } from "react-router-dom";

const Header = () => {
  const history = useHistory(); // sau khi logout thì quay về trang nào đó
  const { pathname } = useLocation(); // pathname: Để lấy cái đường dẫn sau domain ví dụ: dantri.com/[pathname]
  const [isLogged, setIsLogged] = useState(false); // set state để sau này check trạng thái đã đăng nhập hay chưa
  const { email, sub } = isAuthenticate(); // lấy thông tin từ localStorage: email, id để hiển thị ra ngoài và check quyền
  useEffect(() => {
    // render sau khi return chạy
    isAuthenticate() && setIsLogged(true); // nếu mà thằng user đăng nhập (có thông tin localStorage) thì set state là true
  }, [pathname, isLogged]); // thằng useEffect được gọi là khi thằng pathname hoặc thằng state thay đổi
  const checkLogin = () => {
    if (pathname !== "/signin" && isLogged) {
      // nếu pathname thay đổi (!= signin) và đã đăng nhập
      return (
        <>
          <ul className="nav navbar-nav menu_nav ml-auto">
            <li className="nav-item">
              <Link
                exact
                className="nav-link"
                aria-current="page"
                to={sub == 1 ? "/user/dashboard" : "/admin/dashboard"}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  signOut(() => {
                    setIsLogged(false);
                    history.push("/");
                  })
                }
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </>
      );
    } else if (pathname === "/signin" && isLogged) {
      // neu đã login và truy cập vào đường dẫn /signin
      return <Redirect to="/" />;
    } else {
      // ngược lại khi signout
      return (
        <>
          <ul className="nav navbar-nav menu_nav ml-auto">
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                {" "}
                Sign In{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                {" "}
                Sign Up{" "}
              </Link>
            </li>
          </ul>
        </>
      );
    }
  };
  return (
    <header className="header_area sticky-header">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light main_box">
          <div className="container">
            <Link to="/">
              <img
                height={50}
                src="https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_FPT_Polytechnic.jpg"
                alt=""
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>

            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link">Features</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>

                {checkLogin()}

                <a className="py-2 d-none d-md-inline-block" href="#">
                  {email}
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
