import React from 'react';
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
  Card
} from 'react-bootstrap';
// Note: Bootstrap Icons are linked via CDN in public/index.html,
// so you use their class names directly like <i className="bi bi-search"></i>

function App() {
  // Dummy data for project cards, adjusted to match screenshot titles/stats
  const projects = [
    {
      id: 1,
      image: 'https://placehold.co/400x300/a0aec0/ffffff?text=Project+1',
      title: 'Web and animation: retro gadgets /',
      author: 'Multiple Owners',
      views: '521',
      likes: '4.8K'
    },
    {
      id: 2,
      image: 'https://placehold.co/400x300/f6ad55/ffffff?text=Project+2',
      title: 'The BAR.',
      author: 'Multiple Owners',
      views: '534',
      likes: '5.3K'
    },
    {
      id: 3,
      image: 'https://placehold.co/400x300/667eea/ffffff?text=Project+3',
      title: 'Maira Marques - Limited Edition',
      author: 'Multiple Owners',
      views: '227',
      likes: '1.4K'
    },
    {
      id: 4,
      image: 'https://placehold.co/400x300/9f7aea/ffffff?text=Project+4',
      title: 'BUMBUM: Queer music by Queer people',
      author: 'Jun ioneda',
      views: '156',
      likes: '992'
    },
    {
      id: 5,
      image: 'https://placehold.co/400x300/48bb78/ffffff?text=Project+5',
      title: 'Fantasy Book Illustrations',
      author: 'Illustra Dreams',
      views: '1.1K',
      likes: '280'
    },
    {
      id: 6,
      image: 'https://placehold.co/400x300/ecc94b/ffffff?text=Project+6',
      title: 'E-commerce Website',
      author: 'Code Wizards',
      views: '1.3K',
      likes: '270'
    },
    {
      id: 7,
      image: 'https://placehold.co/400x300/ed8936/ffffff?text=Project+7',
      title: 'Architectural Visualization',
      author: 'Vizualize Studio',
      views: '750',
      likes: '140'
    },
    {
      id: 8,
      image: 'https://placehold.co/400x300/4299e1/ffffff?text=Project+8',
      title: 'Abstract Motion Reel',
      author: 'Kinetic Arts',
      views: '1.0K',
      likes: '200'
    },
    {
      id: 9,
      image: 'https://placehold.co/400x300/a0aec0/ffffff?text=Project+9',
      title: 'Smart Home Device',
      author: 'Innovate Products',
      views: '900',
      likes: '180'
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light font-inter">
      {/* top header navbar */}
      <Navbar bg="white" expand="lg" className="shadow-sm py-2 sticky-top z-index-100 border-bottom">
        <Container fluid className="px-3 px-md-5">
          <div className="d-flex align-items-center me-auto">
            <Navbar.Brand href="#" className="fw-bold text-dark fs-4 me-4"><img src='/behancelogo.png' height='30'/></Navbar.Brand>

            {/* primary navigation links*/}
            <Nav className="d-none d-lg-flex align-items-center">
              <Nav.Link href="#" className="text-dark me-3 fw-bold active-behance-nav"><strong>Explore</strong></Nav.Link>
              <Nav.Link href="#" className="text-dark me-3"><strong>Find Jobs</strong></Nav.Link>
              {/* dropdown for hire freelancers */}
              <Dropdown className="me-3">
                <Dropdown.Toggle variant="link" id="hire-freelancers-dropdown" className="text-dark text-decoration-none p-0 fw-normal dropdown-arrow-icon">
                  <strong>Hire Freelancers</strong>
                  <i className="bi bi-chevron-down ms-1 small"></i> {/* it isdropdown indicator icon */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#"><strong>My Freelance Projects</strong></Dropdown.Item>
                  <Dropdown.Item href="#"><strong>Find Creatives</strong></Dropdown.Item>
                  <Dropdown.Item href="#"><strong>Hiring on Behance</strong></Dropdown.Item>
                  <Dropdown.Item href="#"><strong>New Freelance Project</strong></Dropdown.Item>
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
                <Dropdown.Toggle variant="link" id="career-resources-dropdown" className="text-dark text-decoration-none p-0 fw-normal dropdown-arrow-icon">
                  <strong>Career Resources</strong>
                  <i className="bi bi-chevron-down ms-1 small"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#"><strong>Overview</strong></Dropdown.Item>
                  <Dropdown.Item href="#"><strong>Career Guides</strong></Dropdown.Item>
                  <Dropdown.Item href="#"><strong>Commissioned</strong></Dropdown.Item>
                  <Dropdown.Item href="#"><strong>Creative Aprenticeship</strong></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
          <Nav className="ms-auto d-flex align-items-center">
          <Button className="me-2 rounded-pill px-3 py-1 btn-behance-gradient">Start Free Trial</Button>
            <Button variant="Outline-Secondary" className="me-2 rounded-pill px-3 py-1">Sign In</Button>
            {/* Adobe icon and dropdown */}
            <Dropdown>
              <Dropdown.Toggle variant="link" id="adobe-dropdown" className="text-dark text-decoration-none d-flex align-items-center">
                <img
                  src="/adobelogo.png"
                  alt="Adobe Logo"
                  className="rounded-sm"
                  style={{ width: '28px', height: '28px' }}
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/28x28/cccccc/ffffff?text=A`; }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end"> 
                <Dropdown.Item href="#">Adobe Portfolio</Dropdown.Item>
                <Dropdown.Item href="#">Creative Cloud</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* Second Header Row: Filter, Search Bar, Projects/People/More */}
      <Navbar bg="white" className="py-2 shadow-sm border-bottom">
        <Container fluid className="px-3 px-md-5 d-flex align-items-center">
          {/* Filter Button */}
          <Button variant="light" className="rounded-lg d-flex align-items-center me-3 px-3 py-2 text-dark filter-button">
            <i className="bi bi-funnel-fill me-2 small"></i> {/* Bootstrap Icon for filter */}
            Filter
          </Button>

          {/* Search Bar */}
          <Form className="d-flex flex-grow-1 me-3">
            <InputGroup className="behance-search-input-group">
              <InputGroup.Text className="bg-transparent border-end-0 border-0 ps-3">
                <i className="bi bi-search text-secondary"></i> {/* Search icon */}
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search Behance..."
                className="border-start-0 border-0 ps-0 pe-3 rounded-end"
                aria-label="Search"
              />
            </InputGroup>
          </Form>

          {/* Right Section: Projects, People, More Dropdowns - use flex-nowrap to keep them in one line */}
          <Nav className="d-flex align-items-center flex-nowrap overflow-auto hide-scroll"> {/* overflow-auto to allow horizontal scroll on small screens */}
            <Dropdown className="ms-2">
              <Dropdown.Toggle variant="light" id="projects-dropdown" className="text-dark text-decoration-none dropdown-arrow-icon">
                Projects
                <i className="bi bi-chevron-down ms-1 small"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">All Projects</Dropdown.Item>
                <Dropdown.Item href="#">My Projects</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="ms-2">
              <Dropdown.Toggle variant="light" id="people-dropdown" className="text-dark text-decoration-none dropdown-arrow-icon">
                People
                <i className="bi bi-chevron-down ms-1 small"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">All People</Dropdown.Item>
                <Dropdown.Item href="#">Following</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="ms-2">
              <Dropdown.Toggle variant="light" id="more-dropdown" className="text-dark text-decoration-none dropdown-arrow-icon">
                More
                <i className="bi bi-chevron-down ms-1 small"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Assets</Dropdown.Item>
                <Dropdown.Item href="#">Jobs</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content Area */}
      <Container fluid className="px-3 px-md-5 py-4 flex-grow-1">
        {/* Sub-Filters: For You, Following, Best of Behance etc. (Pills) */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          <Button variant="secondary" size="sm" className="rounded-pill d-flex align-items-center behance-pill active">
            For You
          </Button>
          <Button variant="secondary" size="sm" className="rounded-pill d-flex align-items-center behance-pill">
            Following
          </Button>
          <Button variant="secondary" size="sm" className="rounded-pill d-flex align-items-center behance-pill">
            Best of Behance
          </Button>
          <Button variant="secondary" size="sm" className="rounded-pill d-flex align-items-center behance-pill">
            Graphic Design
          </Button>
          <Button variant="secondary" size="sm" className="rounded-pill d-flex align-items-center behance-pill">
            Photography
          </Button>
          <Button variant="secondary" size="sm" className="rounded-pill d-flex align-items-center behance-pill">
            Illustration
          </Button>
          <Button variant="secondary" size="sm" className="rounded-pill d-flex align-items-center behance-pill">
            3D Art
          </Button>
          <Button variant="secondary" size="sm" className="rounded-pill d-flex align-items-center behance-pill">
            UI/UX
          </Button>
          {/* Add more pills as needed based on the screenshot, or a chevron right to indicate more */}
          <Button variant="secondary" size="sm" className="rounded-pill d-flex align-items-center behance-pill">
            <i className="bi bi-chevron-right"></i> {/* Chevron right for "more" pills */}
          </Button>
        </div>

        {/* Project Grid */}
        <Row xs={1} sm={2} lg={3} xl={4} className="g-4"> {/* Responsive grid */}
          {projects.map((project) => (
            <Col key={project.id}>
              <Card className="h-100 shadow-sm border-0 rounded-lg overflow-hidden project-card-hover">
                <div className="position-relative overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover' }}
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/a0aec0/ffffff?text=Image+Error`; }} // Fallback
                  />
                  {/* Overlay for hover effects - initially hidden (opacity-0), visible on hover */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 d-flex justify-content-center align-items-center opacity-0 hover-opacity-100 transition-opacity">
                    <Button variant="light" className="rounded-circle me-2 p-2">
                      <i className="bi bi-bookmark fs-6"></i> {/* Bookmark Icon */}
                    </Button>
                    <Button variant="light" className="rounded-circle p-2 text-danger">
                      <i className="bi bi-heart-fill fs-6"></i> {/* Heart Icon */}
                    </Button>
                  </div>
                </div>
                <Card.Body className="p-3">
                  <Card.Title className="mb-1 text-truncate fw-semibold">{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted small">{project.author}</Card.Subtitle>
                  <div className="d-flex justify-content-between align-items-center text-secondary small">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-eye-fill me-1 small"></i> {/* Eye icon for views */}
                      <span>{project.views}</span>
                      <i className="bi bi-heart-fill ms-2 me-1 small"></i> {/* Heart icon for likes */}
                      <span>{project.likes}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <Button variant="link" className="text-secondary p-1">
                        <i className="bi bi-plus-circle fs-6"></i> {/* Plus Circle Icon */}
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white-50 py-4 px-4 text-center mt-auto">
        <p className="mb-1 small">&copy; 2025 Behance Clone by Gemini. All rights reserved.</p>
        <div className="d-flex justify-content-center gap-3 mt-2 small">
          <a href="#" className="text-white-50 text-decoration-none hover-text-white">About</a>
          <a href="#" className="text-white-50 text-decoration-none hover-text-white">Terms of Use</a>
          <a href="#" className="text-white-50 text-decoration-none hover-text-white">Privacy Policy</a>
          <a href="#" className="text-white-50 text-decoration-none hover-text-white">Community Guidelines</a>
        </div>
      </footer>

      {/* Custom CSS for specific Behance look and feel */}
      <style>
        {`
        /* Apply Inter font globally */
        body {
            font-family: 'Inter', sans-serif;
        }

        /* Ensure sticky headers have a high z-index */
        .z-index-100 {
            z-index: 100;
        }

        /* Behance specific styling for filter pills */
        .behance-pill {
            background-color: #e0e0e0; /* Light gray */
            color: #555;
            border: none;
            padding: 0.35rem 0.9rem;
            font-size: 0.85rem;
            font-weight: 500;
            transition: background-color 0.2s, color 0.2s;
        }
        .behance-pill:hover, .behance-pill:focus {
            background-color: #d0d0d0; /* Slightly darker gray on hover */
            color: #333;
            box-shadow: none;
            outline: none;
        }
        .behance-pill.active {
            background-color: #0055f7 !important; /* Behance primary blue */
            color: white !important;
        }

        /* Active navigation link in the top header */
        .active-behance-nav {
            border-bottom: 2px solid #0055f7; /* Behance primary blue underline */
            color: #0055f7 !important;
            font-weight: 600 !important;
        }

        /* Custom search input group styling to match screenshot */
        .behance-search-input-group {
            background-color: #e9ecef; /* Light gray background for the entire input group */
            border: 1px solid #ced4da;
            border-radius: 0.5rem; /* Rounded corners for the entire group */
            display: flex;
            align-items: center;
        }
        .behance-search-input-group .input-group-text {
            background-color: transparent; /* Transparent background for the icon area */
            border: none;
            padding-right: 0; /* No right padding */
            padding-left: 1rem; /* More padding on the left */
        }
        .behance-search-input-group .form-control {
            background-color: transparent; /* Transparent background for the input field itself */
            border: none;
            padding-left: 0; /* Remove default left padding */
            height: calc(2.5rem + 2px); /* Adjust height to match typical button height */
            box-shadow: none !important; /* Remove default Bootstrap focus shadow */
        }
        .behance-search-input-group .form-control:focus {
            border-color: transparent; /* No border color change on focus */
            background-color: transparent; /* Keep background transparent */
        }
        .behance-search-input-group .form-control::placeholder {
            color: #888; /* Placeholder color */
        }

        /* Filter button styling to match screenshot */
        .filter-button {
            background-color: #e9ecef; /* Light gray background */
            border-color: #ced4da; /* Light border */
            font-weight: 500;
            color: #333 !important; /* Darker text */
            transition: background-color 0.2s, border-color 0.2s;
        }
        .filter-button:hover, .filter-button:focus {
            background-color: #d0d0d0; /* Slightly darker on hover */
            border-color: #b0b0b0;
            box-shadow: none; /* Remove default Bootstrap focus shadow */
        }

        /* General dropdown toggle arrow removal for custom icon */
        .dropdown-arrow-icon.dropdown-toggle::after {
            display: none !important;
        }

        /* Card hover effects (lift and shadow) */
        .project-card-hover {
            transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        .project-card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }

        /* Generic hover background for light elements (buttons, links) */
        .hover-bg-light:hover {
          background-color: #f8f9fa !important;
        }
        /* Generic hover text color for white-ish text on dark background */
        .hover-text-white:hover {
          color: white !important;
        }

        /* Card image overlay for bookmark/heart buttons on hover */
        .hover-opacity-100 {
            opacity: 0; /* Initially hidden */
            transition: opacity 0.3s ease-in-out;
        }
        .project-card-hover:hover .hover-opacity-100 {
            opacity: 1; /* Visible on card hover */
        }

        /* Hide scrollbar for overflowing elements (like the right-side dropdowns in second header) but allow scrolling */
        .hide-scroll {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        `}
      </style>
    </div>
  );
}

export default App;
