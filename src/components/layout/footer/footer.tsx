import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";

const Footer: React.FC = () => (
    <footer className=" ">
        {/* <Widgets widgets={widgets} /> */}
        <Copyright />

        <div
            style={{
                textAlign: "center",
                fontSize: "12px",
                paddingBottom: "10px",
                color: "red",
                fontWeight: "bold",
            }}
        >
            FOOTER TEST KEREMIYO
        </div>
    </footer>
);

export default Footer;