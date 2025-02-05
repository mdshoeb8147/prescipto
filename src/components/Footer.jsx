import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left */}
        <div className="">
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            error, tenetur iure ad praesentium voluptates numquam laborum
            laudantium sapiente quidem!
          </p>
        </div>
        {/* center */}
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right */}
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-123456879</li>
            <li>info@prescripto.com</li>
          </ul>
        </div>
      </div>
      {/* copy right text */}
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Prescripto - All Right Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
