import { TimeFrame } from "../formData";
import { FormWrapper } from "../FormWrapper";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Datetime from "react-datetime";
import moment from "moment";

type FormThreeData = {
    timeFrame: {};
    schedule: "";
};

type FormThreeProps = FormThreeData & {
    updateFields: (fields: Partial<FormThreeData>) => void;
};
function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}
export function FormThree({
    timeFrame,
    schedule,
    updateFields,
}: FormThreeProps) {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState(timeFrame);
    const [selectedSchedule, setSelectedSchedule] = useState(schedule);

    function handleTimeFrameChange(values: any) {
        setSelectedTimeFrame(values);
        updateFields({ timeFrame: values });
    }
    function handleScheduleChange(values: any) {
        setSelectedSchedule(values);
        updateFields({ schedule: values });
    }
    console.log(moment(schedule).format("dddd, MMMM Do YYYY, h:mm:ss a"));
    return (
        <FormWrapper>
            <div className="">
                <fieldset className="mt-4">
                    <p className="text-xl text-gray-700 pb-4 font-bold">
                        What is the timing for this project?
                    </p>
                    <RadioGroup
                        value={selectedTimeFrame}
                        id="timeFrame"
                        name="timeFrame"
                        onChange={handleTimeFrameChange}
                    >
                        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                            {TimeFrame.map((item) => (
                                <RadioGroup.Option
                                    key={item.value}
                                    value={item}
                                    className={({ checked, active }) =>
                                        classNames(
                                            checked
                                                ? "border-transparent"
                                                : "border-gray-300",
                                            active ? "ring-2 ring-heading" : "",
                                            "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                                        )
                                    }
                                >
                                    {({ checked, active }) => (
                                        <>
                                            <span className="flex flex-1">
                                                <span className="flex flex-col">
                                                    <RadioGroup.Label
                                                        as="span"
                                                        className="block text-sm font-medium text-gray-900"
                                                    >
                                                        {item.label}
                                                    </RadioGroup.Label>
                                                </span>
                                            </span>
                                            {checked ? (
                                                <CheckCircleIcon
                                                    className="h-5 w-5 text-primary"
                                                    aria-hidden="true"
                                                />
                                            ) : null}
                                            <span
                                                className={classNames(
                                                    active
                                                        ? "border"
                                                        : "border-2",
                                                    checked
                                                        ? "border-heading"
                                                        : "border-transparent",
                                                    "pointer-events-none absolute -inset-px rounded-lg"
                                                )}
                                                aria-hidden="true"
                                            />
                                        </>
                                    )}
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>
                </fieldset>
                <fieldset className="mt-6">
                    <p className="text-xl text-gray-700 pb-4 font-bold">
                        When is a good time for you to schedule the project?
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                        <Datetime
                            onChange={handleScheduleChange}
                            value={selectedSchedule}
                            input={true}
                            open={true}
                            initialValue={new Date()}
                            dateFormat={"dddd, MMMM Do YYYY, h:mm:ss a"}
                        />
                        <input
                            className="hidden"
                            id="schedule"
                            name="schedule"
                            value={moment(schedule).format(
                                "dddd, MMMM Do YYYY, h:mm:ss a"
                            )}
                        />
                    </div>
                </fieldset>
            </div>
            {/* <label>First Name</label>
            <input
                autoFocus
                required
                type="text"
                value={firstName}
                onChange={(e) => updateFields({ firstName: e.target.value })}
            />
            <label>Last Name</label>
            <input
                required
                type="text"
                value={lastName}
                onChange={(e) => updateFields({ lastName: e.target.value })}
            />
            <label>Age</label>
            <input
                required
                min={1}
                type="number"
                value={age}
                onChange={(e) => updateFields({ age: e.target.value })}
            /> */}
        </FormWrapper>
    );
}
