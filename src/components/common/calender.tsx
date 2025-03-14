import Datetime from "react-datetime";
// import "react-datetime/css/react-datetime.css";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";

export default function Calender() {
    return (
        <Datetime
            input={true}
            initialValue={new Date()}
            dateFormat={"DD-MMM-YYYY"}
        />
    );
}
