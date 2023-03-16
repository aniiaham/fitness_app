import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Classes.
            Studios to get the Body Shapes That ypu Dream of... Get Yout Dream
            Body now.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Random Text</p>
          <p className="my-5">Random Text Here Too</p>
          <p>Lalala Random</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Random Text</p>
          <p>(631)234-1213</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
