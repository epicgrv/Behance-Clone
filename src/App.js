import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
  Dropdown,
  Row,
  Col,
  Card,
} from "react-bootstrap";
// Note: Bootstrap Icons are linked via CDN in public/index.html,
// so you use their class names directly like <i className="bi bi-search"></i>

function App() {
  // Dummy data for project cards, adjusted to match screenshot titles/stats
  const projects = [
    {
      id: 1,
      image: "https://placehold.co/400x300/a0aec0/ffffff?text=Project+1",
      title: "Web and animation: retro gadgets /",
      author: "Multiple Owners",
      views: "521",
      likes: "4.8K",
    },
    {
      id: 2,
      image: "https://placehold.co/400x300/f6ad55/ffffff?text=Project+2",
      title: "The BAR.",
      author: "Multiple Owners",
      views: "534",
      likes: "5.3K",
    },
    {
      id: 3,
      image: "https://placehold.co/400x300/667eea/ffffff?text=Project+3",
      title: "Maira Marques - Limited Edition",
      author: "Multiple Owners",
      views: "227",
      likes: "1.4K",
    },
    {
      id: 4,
      image: "https://placehold.co/400x300/9f7aea/ffffff?text=Project+4",
      title: "BUMBUM: Queer music by Queer people",
      author: "Jun ioneda",
      views: "156",
      likes: "992",
    },
    {
      id: 5,
      image: "https://placehold.co/400x300/48bb78/ffffff?text=Project+5",
      title: "Fantasy Book Illustrations",
      author: "Illustra Dreams",
      views: "1.1K",
      likes: "280",
    },
    {
      id: 6,
      image: "https://placehold.co/400x300/ecc94b/ffffff?text=Project+6",
      title: "E-commerce Website",
      author: "Code Wizards",
      views: "1.3K",
      likes: "270",
    },
    {
      id: 7,
      image: "https://placehold.co/400x300/ed8936/ffffff?text=Project+7",
      title: "Architectural Visualization",
      author: "Vizualize Studio",
      views: "750",
      likes: "140",
    },
    {
      id: 8,
      image: "https://placehold.co/400x300/4299e1/ffffff?text=Project+8",
      title: "Abstract Motion Reel",
      author: "Kinetic Arts",
      views: "1.0K",
      likes: "200",
    },
    {
      id: 9,
      image: "https://placehold.co/400x300/a0aec0/ffffff?text=Project+9",
      title: "Smart Home Device",
      author: "Innovate Products",
      views: "900",
      likes: "180",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light font-inter">
      {/* top header navbar */}
      <Navbar
        bg="white"
        expand="lg"
        className="shadow-sm py-2 sticky-top z-index-100 border-bottom"
      >
        <Container fluid className="px-3 px-md-5">
          <div className="d-flex align-items-center me-auto">
            <Navbar.Brand href="#" className="fw-bold text-dark fs-4 me-4">
              <img src="/behancelogo.png" height="30" />
            </Navbar.Brand>

            {/* primary navigation links*/}
            <Nav className="d-none d-lg-flex align-items-center">
              <Nav.Link
                href="#"
                className="text-dark me-3 fw-bold active-behance-nav"
              >
                <strong>Explore</strong>
              </Nav.Link>
              <Nav.Link href="#" className="text-dark me-3">
                <strong>Find Jobs</strong>
              </Nav.Link>
              {/* dropdown for hire freelancers */}
              <Dropdown className="me-3">
                <Dropdown.Toggle
                  variant="link"
                  id="hire-freelancers-dropdown"
                  className="text-dark text-decoration-none p-0 fw-normal dropdown-arrow-icon"
                >
                  <strong>Hire Freelancers</strong>
                  <i className="bi bi-chevron-down ms-1 small"></i>{" "}
                  {/* it isdropdown indicator icon */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <strong>My Freelance Projects</strong>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <strong>Find Creatives</strong>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <strong>Hiring on Behance</strong>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <strong>New Freelance Project</strong>
                  </Dropdown.Item>
                  <hr></hr>
                  <Dropdown.Item href="#">Logo Designers</Dropdown.Item>
                  <Dropdown.Item href="#">Brand Designers</Dropdown.Item>
                  <Dropdown.Item href="#">Website Designers</Dropdown.Item>
                  <Dropdown.Item href="#">Illustrators</Dropdown.Item>
                  <Dropdown.Item href="#">Social Media Designers</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* dropdown option for career resources */}
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  id="career-resources-dropdown"
                  className="text-dark text-decoration-none p-0 fw-normal dropdown-arrow-icon"
                >
                  <strong>Career Resources</strong>
                  <i className="bi bi-chevron-down ms-1 small"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <strong>Overview</strong>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <strong>Career Guides</strong>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <strong>Commissioned</strong>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <strong>Creative Aprenticeship</strong>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
          <Nav className="ms-auto d-flex align-items-center">
            <Button className="me-2 rounded-pill px-3 py-1 btn-behance-gradient">
              Start Free Trial
            </Button>
            <Button
              variant="Outline-Secondary"
              className="me-2 rounded-pill px-3 py-1"
            >
              Sign In
            </Button>
            {/* adobe icon and dropdown */}
            <Dropdown drop="start">
              <Dropdown.Toggle
                variant="link"
                id="adobe-dropdown"
                className="text-dark text-decoration-none d-flex align-items-center"
              >
                <img
                  src="/adobelogo.png"
                  alt="Adobe Logo"
                  className="rounded-sm"
                  style={{ width: "28px", height: "28px" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/28x28/cccccc/ffffff?text=A`;
                  }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="p-2"
                style={{
                  minWidth: "300px",
                  maxWidth: "100vw",
                  whiteSpace: "normal",
                  overflowWrap: "break-word",
                }}
              >
                {/* go to Adobe.com */}
                <Dropdown.Item href="https://www.adobe.com" target="_blank">
                  <div className="d-flex align-items-start">
                    <img
                      src="/adobered.png"
                      alt="Adobe"
                      style={{ width: "24px", height: "24px" }}
                      className="me-2"
                    />
                    <div>
                      <div className="fw-semibold small">Go to adobe.com</div>
                      <div className="text-muted small">
                        Access your apps, services, files, and more
                      </div>
                    </div>
                  </div>
                </Dropdown.Item>

                {/* adobe xpress */}
                <Dropdown.Item href="https://www.adobe.com/express/">
                  <div className="d-flex align-items-start">
                    <img src="adobexpress.png" style={{width: "24px", height: "24px"}}/>
                    <i className="bi text-warning me-2 fs-5"></i>
                    <div>
                      <div className="fw-semibold small">
                        Get Adobe Express free
                      </div>
                      <div className="text-muted small">
                        Thousands of free templates
                      </div>
                    </div>
                  </div>
                </Dropdown.Item>

                {/* behance pro */}
                <Dropdown.Item href="https://www.behance.net/">
                  <div className="d-flex align-items-start">
                    <img src="behancelogo.png" style={{ height: "24px"}}/>
                    <div>
                      <div className="fw-semibold small">
                        7-day free trial of Behance Pro
                      </div>
                      <div className="text-muted small">
                        Supercharge your creative career
                      </div>
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
