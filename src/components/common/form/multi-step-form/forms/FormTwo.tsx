import { needForWashOptions, surface } from "../formData";
import { FormWrapper } from "../FormWrapper";
import { useState } from "react";
import Select from "react-select";

type FormTwoData = {
    surfaces: {};
    needForWash: {};
};

type FormTwoProps = FormTwoData & {
    updateFields: (fields: Partial<FormTwoData>) => void;
};

export function FormTwo({ surfaces, needForWash, updateFields }: FormTwoProps) {
    const [selectedSurface, setSelectedSurface] = useState(surfaces);
    const [selectedNeedForWash, setSelectedNeedForWash] = useState(needForWash);

    function handleSurfaceChange(values: any) {
        setSelectedSurface(values);
        updateFields({ surfaces: values });
    }

    function handleWashChange(values: any) {
        setSelectedNeedForWash(values);
        updateFields({ needForWash: values });
    }
    return (
        <FormWrapper>
            <div className="">
                <fieldset className="mt-6">
                    <p className="text-xl text-gray-700 pb-4 font-bold">
                        Select the areas needing power washing.
                    </p>
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <div className="z-20">
                            <Select
                                isSearchable={false}
                                id="surfaces"
                                name="surfaces"
                                placeholder="Select multiple..."
                                defaultValue={selectedSurface}
                                onChange={handleSurfaceChange}
                                options={surface}
                                isMulti
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
                <fieldset className="mt-6">
                    <p className="text-xl text-gray-700 pb-4 font-bold">
                        Why do you need power/pressure washing?
                    </p>
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <div className="z-10">
                            <Select
                                isSearchable={false}
                                id="needForWash"
                                name="needForWash"
                                placeholder="Select multiple..."
                                defaultValue={selectedNeedForWash}
                                onChange={handleWashChange}
                                options={needForWashOptions}
                                isMulti
                            />
                        </div>
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
