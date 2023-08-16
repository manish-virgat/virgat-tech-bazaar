import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <br></br><br></br>
            <h2>Discover Tomorrow's Tech Today</h2>
            <p>
            At Virgat Tech Bazaar, we're not just about selling gadgets. 
            We're about exploring the endless possibilities that technology brings. 
            Our passion for innovation drives us to curate a collection of the latest electronics that empower and inspire. 
            Whether you're a gadget enthusiast, a tech-savvy professional, 
            or someone who simply appreciates the convenience of modern electronics, you've come to the right place.
            </p>
            <br></br><br></br>
            <h2>Unleash the Power of Connectivity</h2>
            <p>
            From cutting-edge smartphones that keep you connected to the world, 
            to immersive headphones that transport you to another realm, 
            our handpicked selection of electronics is designed to enhance every aspect of your life. 
            We understand that technology is more than just a tool – it's a bridge to new experiences, a window into the future.</p>
            <br></br><br></br>
            <h2>Why Choose Virgat Tech Bazaar?</h2>
            <p>
            🚀 Curated Excellence: Our team scours the market for the most innovative 
            and reliable products, ensuring that you receive only the best.
            <p/>
            
            <p>
            🌟 Personalized Service: With a commitment to customer satisfaction, 
            we're here to assist you in finding the perfect tech companions tailored to your needs.
            </p>

            <p>
            🔒 Secure Shopping: Your online safety is our priority. 
            Shop with confidence, knowing that your transactions are protected.
            </p>

            <p>
            🌍 Global Reach: We're not just local; we're global. 
            Wherever you are, we're here to deliver the future of electronics to your doorstep.
            </p>
            
            Join us on a journey of discovery, as we present a world of technology that's ready to transform your everyday life. 
            Embrace the future with Virgat Tech Bazaar – where innovation meets inspiration.
            </p>
            <NavLink>
              <Button>Start exploring now!</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
