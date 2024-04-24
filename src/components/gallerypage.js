import React from 'react';
import { Container } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../components/styles/main.css'; // Consolidate CSS imports

// Import local assets directly
import img1 from '../components/Assets/IMG-20240414-WA0055.png';
import img2 from '../components/Assets/IMG-20240414-WA0042.jpg';
import img3 from '../components/Assets/img3.png';
import img4 from '../components/Assets/img4.jpg';
import img5 from '../components/Assets/IMG-20240421-WA0046.jpg';
import video from '../components/Assets/home background (online-video-cutter.com).mp4'; // Import your video file

const GalleryPage = () => {
    const galleryItems = [
        { id: 1, type: 'image', url: img1 },
        { id: 2, type: 'image', url: img2 },
        { id: 3, type: 'image', url: img3 },
        { id: 4, type: 'video', url: video },
        { id: 5, type: 'image', url: img4 },
        { id: 6, type: 'image', url: img5 }
    ];

    return (
        <Container className="mt-5 gallery-container" id="gallery">
            <h2 className="text-center mb-4">Gallery</h2>
            <Carousel
                autoPlay        // Enable autoplay
                interval={3000} // Set interval between slides (in milliseconds)
                infiniteLoop    // Enable infinite loop
                showStatus={false} // Hide status indicators
                showThumbs={false} // Hide thumbnail navigation
                className="slideshow" // Custom class name for styling
            >
                {galleryItems.map((item) => (
                    <div key={item.id}>
                        {item.type === 'image' ? (
                            <img src={item.url} alt={`Image ${item.id}`} />
                        ) : (
                            <video controls style={{height: '500px', maxWidth: '100%'}}>
                                <source src={item.url} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>

                        )}
                    </div>
                ))}
            </Carousel>
        </Container>
    );
};

export default GalleryPage;
