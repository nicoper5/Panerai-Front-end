import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/navbar.css";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

export default function Navigation() {
  const bag = useSelector((state) => state.bag);
  const token = useSelector((state) => state.token);
  const [collections, setCollections] = useState(null);
  const [items, setItems] = useState(null);
  useEffect(() => {
    const getCollections = async () => {
      const response = await axios({
        method: "get",
        url: process.env.REACT_APP_API_URL + "/collections",
      });

      setCollections(response.data);
    };
    getCollections();
  }, []);

  useEffect(() => {
    const bagItems = () => {
      let cont = 0;
      for (const product of bag) {
        cont += product.qty;
      }
      setItems(cont);
    };
    bagItems();
  }, [bag]);
  return (
    <Navbar bg="black" variant="dark" expand="lg" sticky="top">
      <div className="container">
        <Navbar.Brand as="span" className="fs-6 logo-panerai nav-margin">
          <Link to="/" className="logo-panerai">
            PANERAI
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-margin" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex flex-column flex-grow-1">
            <div className="d-flex justify-content-end menu-text">
              <NavDropdown
                title="COLLECTIONS"
                id="basic-nav-dropdown"
                className="collection-dropDown"
              >
                {collections &&
                  collections.map((collection) => (
                    <NavDropdown.Item key={collection._id} as="span">
                      <Link to={`/collection/${collection.slug}`} className="collections-links ">
                        {collection.name}
                      </Link>
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
              <Nav.Link className="text-white" href="/about-this-project" id="about-project">
                ABOUT THIS PROJECT
              </Nav.Link>
              {!token && (
                <Nav.Link as="span">
                  <Link to="/login" className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="15px"
                      id="nav-profile"
                    >
                      <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                    </svg>
                  </Link>
                </Nav.Link>
              )}
              {token && (
                <Nav.Link as="span">
                  <Link to="/profile" className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="15px"
                      id="nav-profile"
                    >
                      <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                    </svg>
                  </Link>
                </Nav.Link>
              )}
              <Nav.Link className="bag-padding px-0">
                <Link to="/bag" className="text-white margin-bag px-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="15px"
                    id="nav-bag"
                  >
                    <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm200-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z" />
                  </svg>
                  {items > 0 && (
                    <Badge bg="danger" id="bag-badge">
                      {items}
                    </Badge>
                  )}
                </Link>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
