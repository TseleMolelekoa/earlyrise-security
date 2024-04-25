import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Card, Container } from 'react-bootstrap';
import './styles/main.css';
import vipProtectionImage from "./Assets/IMG-20240421-WA0038.jpg";
import CYBER from "./Assets/cyber.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const BlogPage = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Exciting News!',
            image: vipProtectionImage,
            linkUrl: 'https://www.ditholwanatrust.co.za/',
            content: 'On the 17th April 2024, we provided event protection inclusive of risk assessment, VIP protection, access control, tactical services at Tiveka Game Lodge for Ditholwana Tsa Rena Community Trust for High profile companies and local Municipalities!'
        },
        {
            id: 2,
            title: 'Cyber Attacks updates',
            image: CYBER,
            linkUrl: 'https://www.nbcnews.com/health/health-care/change-healthcare-ransom-cyberattack-patient-data-rcna148959',
            content: 'Learn about cyber security and its attacks.'
        },
        // Add more blog posts as needed
    ];

    return (
        <div className="mt-5 blog-container" id="blog">
            <Container>
            <h2 className="text-center mb-4 white-heading">Latest News</h2>
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false} showThumbs={false}>
                {blogPosts.map((post) => (
                    <div key={post.id}>
                        <Card className="blog-card">
                            <a href={post.linkUrl}>
                                <Card.Img variant="top" src={post.image} alt={post.title} />
                            </a>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Carousel>
                </Container>
        </div>
    );
};

export default BlogPage;
