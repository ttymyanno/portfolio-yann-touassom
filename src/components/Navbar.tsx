import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <img 
          src="/images/photo_pro.jpg" 
          className="w3-hover-opacity" 
          style={{ width: '100%' }} 
          alt="Profile" 
        />
        <Link href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
          <i className="fa fa-home w3-xxlarge"></i>
          <p>HOME</p>
        </Link>
        <Link href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-user w3-xxlarge"></i>
          <p>ABOUT</p>
        </Link>
        <Link href="#projects" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-eye w3-xxlarge"></i>
          <p>PROJETS</p>
        </Link>
        <Link href="#veille" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-book w3-xxlarge"></i>
          <p>VEILLE</p>
        </Link>
        <Link href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACT</p>
        </Link>
      </nav>

      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <Link href="#" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>HOME</Link>
          <Link href="#about" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>ABOUT</Link>
          <Link href="#projects" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>PROJETS</Link>
          <Link href="#veille" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>VEILLE</Link>
          <Link href="#contact" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>CONTACT</Link>
        </div>
      </div>
    </>
  );
}
