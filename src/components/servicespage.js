import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/main.css';
import companyImage from './Assets/IMG-20240414-WA0035.jpg';
import { Link } from 'react-scroll';

// Import images for each service
import vipProtectionImage from './Assets/VIP_protection.jpg';
import accessControlImage from './Assets/IMG-20240421-WA0056.jpg';
import armedUnarmedGuardsImage from './Assets/armedUnarmed.jpg';
import escortProtectionImage from './Assets/IMG-20240414-WA0028.jpg';
import officeResidentialGuardingImage from './Assets/IMG-20240414-WA0042.jpg';
import specialEventsProtectionImage from './Assets/IMG-20240421-WA0037.jpg';
import specialisedInterventionImage from './Assets/IMG-20240421-WA0033.jpg';
import tacticalResponseImage from './Assets/img3.png';
import technicalDivisionImage from './Assets/technical.jpg';

const ServicesPage = () => {
    const services = [
        {
            sectionId: "vip-protection",
            title: "VIP Protection",
            image: vipProtectionImage,
            description: "Our VIP Protection service ensures the safety and security of high-profile individuals, celebrities, and executives. We deploy highly trained personnel with advanced security protocols to safeguard our clients."
        },
        {
            sectionId: "access-control",
            title: "Access Control",
            image: accessControlImage,
            description: "We provide advanced access control solutions for commercial and residential properties, ensuring authorized entry and maintaining security."
        },
        {
            sectionId: "armed-unarmed-guards",
            title: "Armed & Unarmed Guards",
            image: armedUnarmedGuardsImage,
            description: "Our armed and unarmed guards are trained to handle various security scenarios, ensuring protection for businesses, events, and private properties."
        },
        {
            sectionId: "escort-protection",
            title: "Escort Protection",
            image: escortProtectionImage,
            description: "We offer escort protection services for secure transportation of individuals and valuable assets, providing a safe environment during transit."
        },
        {
            sectionId: "office-residential-guarding",
            title: "Office & Residential Guarding",
            image: officeResidentialGuardingImage,
            description: "Our office and residential guarding services maintain a secure environment, offering surveillance and immediate response to security threats."
        },
        {
            sectionId: "special-events-protection",
            title: "Special Events Protection",
            image: specialEventsProtectionImage,
            description: "For special events, our protection services ensure safety and order, providing peace of mind to event organizers and attendees."
        },
        {
            sectionId: "specialised-intervention",
            title: "Specialised Intervention Division",
            image: specialisedInterventionImage,
            description: "Our specialised intervention division handles complex security situations with strategic planning and expert response to mitigate risks."
        },
        {
            sectionId: "tactical-response",
            title: "Tactical Response",
            image: tacticalResponseImage,
            description: "We offer tactical response services to address critical incidents swiftly and effectively, minimizing potential threats and ensuring safety."
        },
        {
            sectionId: "technical-division",
            title: "Technical Division (Alarm/Camera etc)",
            image: technicalDivisionImage,
            description: "Our technical division provides advanced security solutions including alarm systems, CCTV cameras, and other technical measures for comprehensive protection."
        }
    ];

    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (sectionId) => {
        setSelectedService(sectionId === selectedService ? null : sectionId);
    };

    return (
        <div className="services" id="services">
            <Container>
                <Row>
                    <Col md={5}>
                        {selectedService ? (
                            <div
                                className="image-container1"
                                style={{
                                    backgroundImage: `url(${services.find(service => service.sectionId === selectedService).image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '100vh', // Optionally set a specific height
                                    color: 'whitesmoke',
                                     /* Make sure the image does not exceed its container width */
                                }}
                            >
                                <div className="image-overlay">
                                    <h2>{services.find(service => service.sectionId === selectedService).title}</h2>
                                    <p>{services.find(service => service.sectionId === selectedService).description}</p>
                                </div>
                            </div>
                        ) : (
                            <img
                                src={companyImage}
                                alt="Early Rise Security Services Office Entrance"
                                className="img-fluid"

                            />
                        )}
                    </Col>
                    <Col>
                        <h1 >Our Services</h1>
                        <p >
                            We offer a comprehensive range of security services to meet your needs:
                        </p>
                        <ul >
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        to={service.sectionId}
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        offset={-70}
                                        onClick={() => handleServiceClick(service.sectionId)}
                                        style={{ color: 'whitesmoke', textDecoration: 'none', cursor: 'pointer' }}
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesPage;
