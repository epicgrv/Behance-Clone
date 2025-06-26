import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
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
    <Container fluid className="px-3 px-md-5 py-4 flex-grow-1">
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
        <Button variant="secondary" size="sm" className="rounded-pill d-flex align-items-center behance-pill">
          <i className="bi bi-chevron-right"></i> {/* Chevron right for "more" pills */}
        </Button>
      </div>

      {/* project griid */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className="h-100 shadow-sm border-0 rounded-lg overflow-hidden project-card-hover">
              <div className="position-relative overflow-hidden">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: '180px', objectFit: 'cover'}}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 d-flex justify-content-center align-items-center opacity-0 hover-opacity-100 transition-opacity">
                  <Button variant="light" className="rounded-circle me-2 p-2">
                    <i className="bi bi-bookmark fs-6"></i> 
                  </Button>
                  <Button variant="light" className="rounded-circle p-2 text-danger">
                    <i className="bi bi-heart-fill fs-6"></i> 
                  </Button>
                </div>
              </div>
              <Card.Body className="p-3">
                <Card.Title className="mb-1 text-truncate fw-semibold">{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted small">{project.author}</Card.Subtitle>
                <div className="d-flex justify-content-between align-items-center text-secondary small">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-eye-fill me-1 small"></i> 
                    <span>{project.views}</span>
                    <i className="bi bi-heart-fill ms-2 me-1 small"></i> 
                    <span>{project.likes}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Button variant="link" className="text-secondary p-1">
                      <i className="bi bi-plus-circle fs-6"></i> 
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
