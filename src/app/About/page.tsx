import Image from 'next/image';


const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Heading */}
      <h1 className="about-title">
        About Us
      </h1>

      {/* Image */}
      <div className="about-image-container">
        <Image
          src="/aboutpic.png"
          alt="About Image"
          width={900}
          height={1200}
          className="about-image"
        />
      </div>

      {/* Text */}
      <div className="about-text">
        <p className="about-paragraph">
          Welcome to our website! We are passionate about delivering the best
          products and services to our customers. Our team is dedicated to
          providing exceptional experiences and ensuring customer satisfaction.
          Our journey has been exciting, and we look forward to growing and
          innovating further. Thank you for being a part of our community.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
