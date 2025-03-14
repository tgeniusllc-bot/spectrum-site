import { Fragment, useState } from "react";
import { Combobox, RadioGroup, Listbox, Transition } from "@headlessui/react";

import { CheckCircleIcon } from "@heroicons/react/20/solid";

type Option = {
    id: string;
    title: string;
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export function Radio({ fieldValue, options, label }) {
    const currentSelectedItem = options?.find(
        (o: any) => o.title === fieldValue?.title
    );

    const [selectedItem, setSelectedItem] =
        useState<Option>(currentSelectedItem);

    function handleItemClick(values: Option) {
        setSelectedItem(values);
    }
    function handleSelectChange(values: Option) {
        setSelectedItem((prevData) => ({ ...prevData, values }));
    }
    console.log("fieldValue", fieldValue);
    console.log("selectedItem", selectedItem);

    return (
        <>
            <RadioGroup value={selectedItem} onChange={handleItemClick}>
                <RadioGroup.Label className="text-lg font-bold text-gray-700">
                    {label}
                </RadioGroup.Label>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                    {options.map((item) => (
                        <RadioGroup.Option
                            key={item.id}
                            value={item}
                            className={({ checked, active }) =>
                                classNames(
                                    checked
                                        ? "border-transparent"
                                        : "border-gray-300",
                                    active ? "ring-2 ring-indigo-500" : "",
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
                                                {item.title}
                                            </RadioGroup.Label>
                                        </span>
                                    </span>
                                    {checked ? (
                                        <CheckCircleIcon
                                            className="h-5 w-5 text-indigo-600"
                                            aria-hidden="true"
                                        />
                                    ) : null}
                                    <span
                                        className={classNames(
                                            active ? "border" : "border-2",
                                            checked
                                                ? "border-indigo-500"
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
        </>
    );
}
