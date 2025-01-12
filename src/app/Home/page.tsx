import Image from 'next/image';

const HeroSection = () => {
const images = [
    { src: "/pic1.png", width: 330, height: 500 },
    { src: "/pic2.png", width: 400, height: 500 },
    { src: "/pic3.png", width: 400, height: 500 },
    { src: "/pic4.png", width: 250, height: 100 },
    { src: "/pic5.png", width: 400, height: 500 },
    { src: "/pic6.png", width: 310, height: 500 },
    { src: "/pic7.png", width: 330, height: 500 },
    { src: "/pic8.png", width: 500, height: 500 },
    { src: "/pic9.png", width: 310, height: 500 },
    { src: "/pic10.png", width: 320, height: 500 },
    { src: "/pic11.png", width: 350, height: 500 },
    { src: "/pic12.png", width: 220, height: 500 },
    { src: "/pic13.png", width: 300, height: 500 },
    { src: "/pic14.png", width: 300, height: 500 },
    { src: "/pic15.png", width: 300, height: 500 },
    { src: "/pic16.png", width: 270, height: 500 },
    { src: "/pic17.png", width: 320, height: 500 },
    { src: "/pic18.png", width: 410, height: 500 },
  ];

  return (
    <div className="hero-section">
      {/* HERO SECTION  */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <Image
          src="/homepic.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
          className="hero-image"
        />
      </div>
      <h1 className="hero-title">
        OUR BEST PRODUCTS
      </h1>

      {/* PRODUCTS */}
      <div className="product-grid">
        {images.map((img, index) => (
          <div key={index} className="product-card">
            <div className="card-container">
              <Image
                src={img.src}
                alt={`Product Image ${index + 1}`}
                width={img.width}
                height={img.height}
                className="product-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
