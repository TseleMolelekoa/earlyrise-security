import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './styles/main.css';
import vipProtectionImage from "./Assets/IMG-20240421-WA0038.jpg"; // Import custom CSS styles
import CYBER from "./Assets/cyber.jpg";

const BlogPage = () => {
    // Sample blog posts (you can replace this with your actual blog data)
    const blogPosts = [
        {
            id: 1,
            title: 'Exciting News!',
            image: vipProtectionImage,
            linkUrl: 'https://www.ditholwanatrust.co.za/',
            content: 'On the 17th April 2024, we provided event protection inclusive of risk assessment, VIP protection, access control, tactical services at Tiveka Game Lordge for Ditholwana Tsa Rena Community Trust for High profile companies and local Municipalities!',

        },
        {
            id: 2,
            title: 'Cyber Attacks updates',
            image: CYBER,
            content: 'Learn about cyber security and its attacks.',
            linkUrl: 'https://www.nbcnews.com/health/health-care/change-healthcare-ransom-cyberattack-patient-data-rcna148959'
        },
        // Add more blog posts as needed
    ];

    return (
        <div className="mt-5 blog-container" id="blog">
            <h2 className="text-center mb-4 white-heading">Latest News</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {blogPosts.map((post) => (
                    <Col key={post.id}>
                        <Card className="blog-card">
                            {/* Render the image and link */}
                            <a href={post.linkUrl}>
                                <Card.Img variant="top" src={post.image} alt={post.title} />
                            </a>
                            {/* Render the title and content */}
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BlogPage;
