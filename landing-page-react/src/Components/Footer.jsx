import { resourcesLinks, platformLinks, communityLinks } from "../data";
const Footer = () => {
  return (
    <footer className="mt-20 border-t w-[90%] border-neutral-700 mx-auto p-4  place-content-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        <div className=" ">
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="flex flex-col gap-2">
          {resourcesLinks.map((link, index) => (
          <li key={index}>
              <a href={link.href} className="text-neutral-300 hover:text-white"> {link.text} </a>
              </li>
            ))}
         </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="flex flex-col gap-2">
            {platformLinks.map((link, index) => (
            <li key={index}>
            <a href={link.href} className="text-neutral-300 hover:text-white"> {link.text} </a>
             </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="flex flex-col gap-2">
          {communityLinks.map((link, index) => (
          <li key={index}> <a href={link.href} className="text-neutral-300 hover:text-white"> {link.text} </a>
          </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;