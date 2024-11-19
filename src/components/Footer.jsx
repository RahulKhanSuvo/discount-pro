import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#8529CD] text-white py-8 ">
      <div className="lg:container mx-3 lg:mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copyright Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">© 2024 Discount Pro. All Rights Reserved.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Developer Profile Link */}
        <div>
          <Link
            to="https://github.com/RahulKhanSuvo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition text-sm"
          >
            Developed by Rahul
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
