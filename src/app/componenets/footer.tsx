import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const socialLinks = {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
    youtube: "https://www.youtube.com",
  };

  return (
    <footer className="bg-[#7c7e78] text-gray-800 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-8 mb-6 md:mb-0">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/menu" className="hover:text-black">
            Menu
          </Link>
          <Link href="/team" className="hover:text-black">
            Team
          </Link>
          <Link href="/events" className="hover:text-black">
            Events
          </Link>
        </div>

        {/* logo image */}
        <div className="mb-6 md:mb-0">
        <img src="/LOGO.png" alt="logo" />
        </div>

        {/* Signup */}
        <div className="flex flex-col items-start">
          <p className="mb-2">Sign up to our newsletter</p>
          <div className="flex items-center border-b border-black">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none py-1 px-2"
            />
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
           <FaFacebook className="h-6 w-6 hover:text-blue-600" />
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="h-6 w-6 hover:text-pink-500" />
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="h-6 w-6 hover:text-blue-400" />
        </a>
        <a
          href={socialLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube className="h-6 w-6 hover:text-red-600" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;