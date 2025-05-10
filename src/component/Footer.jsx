import homeimg from "../assets/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white pt-5 pb-4" style={{backgroundColor:"#03732e"}}>
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col lg={8}>
            <img 
              src={homeimg} 
              alt="Company Logo" 
              className="mb-4"
              style={{ maxHeight: "80px" }}
            />
            <h2 className="mb-4">Join Our Community Today!</h2>
            <p className="mb-4 lead">
              Shop fresh and local with MealMingle—your one-stop destination 
              for quality groceries right in your neighborhood! Whether you're stocking 
              up for the week or grabbing last-minute essentials, we offer a handpicked 
              selection of fresh produce, pantry staples, and household favorites.
            </p>
            {/* Social Media Links */}
            <div className="social-icons mt-4">
              <a href="#" className="text-white mx-3">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white mx-3">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white mx-3">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white mx-3">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>
        
     </Container>
      
      {/* Copyright */}
      <div className="text-center py-3">
        <Container>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} MealMingle. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;