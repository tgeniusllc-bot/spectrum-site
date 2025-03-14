import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";

const Footer: React.FC = () => (
    <footer className=" ">
        {/* <Widgets widgets={widgets} /> */}
        <Copyright />
    </footer>
);

export default Footer;
