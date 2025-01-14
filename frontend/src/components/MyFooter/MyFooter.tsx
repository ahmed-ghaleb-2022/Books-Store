import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer bgDark>
    <div className="w-full bg-sky-800 !text-white">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <Footer.Title className="text-white" title="Company" />
          <Footer.LinkGroup col>
            <Footer.Link className="text-white" href="#">About</Footer.Link>
            <Footer.Link className="text-white" href="#">Careers</Footer.Link>
            <Footer.Link className="text-white" href="#">Brand Center</Footer.Link>
            <Footer.Link className="text-white" href="#">Blog</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title className="text-white" title="help center" />
          <Footer.LinkGroup col>
            <Footer.Link className="text-white" href="#">Discord Server</Footer.Link>
            <Footer.Link className="text-white" href="#">Twitter</Footer.Link>
            <Footer.Link className="text-white" href="#">Facebook</Footer.Link>
            <Footer.Link className="text-white" href="#">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title className="text-white" title="legal" />
          <Footer.LinkGroup col>
            <Footer.Link className="text-white" href="#">Privacy Policy</Footer.Link>
            <Footer.Link className="text-white" href="#">Licensing</Footer.Link>
            <Footer.Link className="text-white" href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title className="text-white" title="download" />
          <Footer.LinkGroup col>
            <Footer.Link className="text-white" href="#">iOS</Footer.Link>
            <Footer.Link className="text-white" href="#">Android</Footer.Link>
            <Footer.Link className="text-white" href="#">Windows</Footer.Link>
            <Footer.Link className="text-white" href="#">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <div className="w-full bg-sky-800  px-4 py-6 sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Flowbite™" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
          <Footer.Icon className="text-white" href="#" icon={BsInstagram} />
          <Footer.Icon className="text-white" href="#" icon={BsTwitter} />
          <Footer.Icon className="text-white" href="#" icon={BsGithub} />
          <Footer.Icon className="text-white" href="#" icon={BsDribbble} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter