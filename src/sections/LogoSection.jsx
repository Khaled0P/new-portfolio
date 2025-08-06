import { logoIconsList } from '../constants';
import Marquee from 'react-fast-marquee';

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center md:mx-6 mx-2 md:w-40 w-32">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <Marquee speed={50} gradient={false}>
          {logoIconsList.map((icon, i) => (
            <LogoIcon key={i} icon={icon} />
          ))}
          {logoIconsList.map((icon, i) => (
            <LogoIcon key={`2-${i}`} icon={icon} />
          ))}
          </Marquee>
    </div>
  );
};

export default LogoSection;
