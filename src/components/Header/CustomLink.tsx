// React-Scroll
import { Link } from 'react-scroll';
// Types
import { ICustomLink } from './@types';
export const CustomLink = ({ title, target }: ICustomLink) => {
  return (
    <li className="group">
      <Link
        to={target}
        smooth={true}
        duration={500}
        className="cursor-pointer"
        offset={-120}
      >
        {title}
      </Link>
      <span className="block m-auto w-1 h-1 rounded-lg bg-white group-hover:w-full transition-all duration-300"></span>
    </li>
  );
};
