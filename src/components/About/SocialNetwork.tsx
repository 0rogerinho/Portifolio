import { ISocialNetwork } from './@types';

export const SocialNetwork = ({ link, logo }: ISocialNetwork) => {
  return (
    <li>
      <a href={link} target="_blank">
        <div className="cursor-pointer text-[1.375rem] md:text-3xl xl:text-[2.4375rem] hover:text-[#1EA6DB] transition-all duration-200 hover:scale-110">
          {logo}
        </div>
      </a>
    </li>
  );
};
