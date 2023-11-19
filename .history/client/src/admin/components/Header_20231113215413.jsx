import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed w-full">
      <div className="flex">
        <div className="span"></div>
        <div className="">
          <div className="flex">
            <Dropdown as="li" className="nav-item dropdown header-profile">
              <Dropdown.Toggle
                variant=""
                as="a"
                className="nav-link i-false c-pointer"
              >
                <img src={profile} width={20} alt="" />
              </Dropdown.Toggle>
              <Dropdown.Menu
                align="right"
                className="mt-3 dropdown-menu dropdown-menu-end"
              >
                <Link to="/app-profile" className="dropdown-item ai-icon">
                  <svg
                    id="icon-user1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary me-1"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  <span className="ms-2">Profile </span>
                </Link>
                <Link to="/email-inbox" className="dropdown-item ai-icon">
                  <svg
                    id="icon-inbox"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-success me-1"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="ms-2">Inbox </span>
                </Link>
                <LogoutPage />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
