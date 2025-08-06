import React from 'react';
import { socialImgs } from '../constants';
import { toast } from 'sonner';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              toast.info('Blog under construction');
            }}
          >
            Visit my blog
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a
              href={img.url}
              className="icon"
              target="_blank"
              rel="noreferrer"
              key={img.url}
            >
              <img src={img.imgPath} alt={`${img.name} icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Khaled | Web Developer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
