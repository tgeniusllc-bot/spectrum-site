import { areasNeeded, typeOfLocation } from "../formData";
import { FormWrapper } from "../FormWrapper";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Select from "react-select";

type FormOneData = {
    location: {};
    areas: {};
};

type FormOneProps = FormOneData & {
    updateFields: (fields: Partial<FormOneData>) => void;
};
function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}
export function FormOne({ updateFields, location, areas }: FormOneProps) {
    const [selectedLocation, setSelectedLocation] = useState(location);
    const [selectedAreasNeeded, setSelectedAreasNeeded] = useState(areas);
    function handleLocationChange(values: any) {
        setSelectedLocation(values);
        updateFields({ location: values });
    }

    function handleAreasChange(values: any) {
        setSelectedAreasNeeded(values);
        updateFields({ areas: values });
    }

    return (
        <FormWrapper>
            <div className="">
                <fieldset className="mt-4">
                    <p className="text-xl text-gray-700 pb-4 font-bold">
                        What is the timing for this project?
                    </p>
                    <RadioGroup
                        value={selectedLocation}
                        onChange={handleLocationChange}
                        name="location"
                        id="location"
                    >
                        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                            {typeOfLocation.map((item) => (
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
                        Select the areas needing power washing.
                    </p>
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <div className="z-40">
                            {/* <Controller
                                name="targetAudience"
                                control={control}
                                defaultValue={[]}
                                render={({}) => (
                                    <Select
                                        id="areas"
                                        placeholder="Select multiple..."
                                        defaultValue={selectedAreasNeeded}
                                        value={selectedAreasNeeded}
                                        onChange={handleAreasChange2}
                                        options={areasNeeded}
                                        isMulti
                                    />
                                )}
                            /> */}

                            <Select
                                isSearchable={false}
                                placeholder="Select multiple..."
                                defaultValue={selectedAreasNeeded}
                                value={selectedAreasNeeded}
                                onChange={handleAreasChange}
                                options={areasNeeded}
                                isMulti
                                name="areas"
                                id="areas"
                            />
                        </div>
                        {/* <Listbox
                            value={selectedAreasNeeded}
                            onChange={setSelectedAreasNeeded}
                            multiple
                        >
                            {({ open }) => (
                                <>
                                    <div className="relative mt-1">
                                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                            {selectedAreasNeeded
                                                .map((item) => item.title)
                                                .join(", ")}
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {areasNeeded.map((item) => (
                                                    <Listbox.Option
                                                        key={item.id}
                                                        className={({
                                                            active,
                                                        }) =>
                                                            classNames(
                                                                active
                                                                    ? "text-white bg-indigo-600"
                                                                    : "text-gray-900",
                                                                "relative cursor-default select-none py-2 pl-8 pr-4"
                                                            )
                                                        }
                                                        value={item}
                                                    >
                                                        {({
                                                            selected,
                                                            active,
                                                        }) => (
                                                            <>
                                                                <span
                                                                    className={classNames(
                                                                        selected
                                                                            ? "font-semibold"
                                                                            : "font-normal",
                                                                        "block truncate"
                                                                    )}
                                                                >
                                                                    {item.title}
                                                                </span>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active
                                                                                ? "text-white"
                                                                                : "text-indigo-600",
                                                                            "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                                                        )}
                                                                    >
                                                                        <CheckIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox> */}
                    </div>
                </fieldset>
            </div>
        </FormWrapper>
    );
}
