import { Link } from "react-router";
import { BsBox2HeartFill } from "react-icons/bs";
export default function Sidebar() {
  return (
    <aside
      className="d-flex align-items-start flex-column p-4 bg-primary min-vh-100"
      style={{ width: "auto", height: "100%", overflowY: "auto" }}
      data-bs-theme="dark"
    >
      <div className="flex-grow-1">
        <nav className="navbar align-items-start flex-column">
          <h3 className="navbar-brand">Marathon App</h3>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                <BsBox2HeartFill />
                <span className="d-md-inline px-2">Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
