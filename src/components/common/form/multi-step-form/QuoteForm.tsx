import Button from "@components/ui/button";
import { FormEvent, useState } from "react";
import { useMultistepForm } from "./useMultistepForm";
import { FormOne } from "./forms/FormOne";
import { FormTwo } from "./forms/FormTwo";
import { FormThree } from "./forms/FormThree";
import FormFour from "./forms/FormFour";
import StepBar from "../steps";
import FormFive from "./forms/FormFive";
import FormSix from "./forms/FormSix";
import FormSuccess from "./form-sucess";
import { TimeFrame, typeOfLocation } from "./formData";
import { useForm } from "@formspree/react";
import FormFiveAddress from "./forms/FormFiveAddress";

type FormData = {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    phone: string;
    address: string;
    details: string;
    pictures: any;
    location: any;
    areas: any;
    timeFrame: any;
    needForWash: any;
    surfaces: any;
    schedule: any;
    contactDetails: any;
};

const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    address: "",
    details: "",
    pictures: [],
    location: typeOfLocation[0],
    areas: [],
    timeFrame: TimeFrame[0],
    needForWash: [],
    surfaces: [],
    schedule: "",
    contactDetails: "",
};

function QuoteForm() {
    const [data, setData] = useState(INITIAL_DATA);
    const [state, handleSubmit] = useForm("QuoteForm");
    function updateFields(fields: Partial<FormData>) {
        setData((prev) => {
            return { ...prev, ...fields };
        });
    }

    const {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        isLastStep,
        back,
        next,
        goTo,
    } = useMultistepForm([
        <FormOne {...data} updateFields={updateFields} key="QuoteForm" />,
        <FormTwo {...data} updateFields={updateFields} key="QuoteForm" />,
        <FormThree {...data} updateFields={updateFields} key="QuoteForm" />,
        <FormFour {...data} updateFields={updateFields} key="QuoteForm" />,
        <FormFiveAddress {...data} updateFields={updateFields} key="QuoteForm" />,
        <FormSix {...data} updateFields={updateFields} key="QuoteForm" />,
    ]);

    function getFields(list: any, field: any) {
        //  reduce the provided list to an array only containing the requested field
        return list.reduce(function (carry: any, item: any) {
            //  check if the item is actually an object and does contain the field
            if (typeof item === "object" && field in item) {
                carry.push(item[field]);
            }

            //  return the 'carry' (which is the list of matched field values)
            return carry;
        }, []);
    }

    //Merge Address Into One Field
    const formatedData = {
        FirstName: data.firstName,
        LastName: data.lastName,
        City: data.city,
        AreaCode: data.zip,
        EmailAddress: data.email,
        Phone: data.phone,
        Address: data.address,
        AdditionalDetails: data.details,
        Pictures: data.pictures,
        Location: data.location.label,
        Areas: getFields(data.areas, "label"),
        TimeFrame: data.timeFrame.label,
        ReasonOfWash: getFields(data.needForWash, "label"),
        Surfaces: getFields(data.surfaces, "label"),
        Schedule: data.schedule,
        PropertyAddress: data.contactDetails,
    };

    function handleOnSubmit(e: FormEvent) {
        e.preventDefault();
        if (!isLastStep) return next();
        if (isLastStep) return handleSubmit({ ...formatedData });
    }
    if (state.succeeded) {
        return <FormSuccess />;
    }

    console.log("formatedData", formatedData.Pictures);

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <StepBar
                    currentStepIndex={currentStepIndex}
                    steps={steps}
                    goTo={goTo}
                />
                {step}
                <div className="flex items-center justify-center sm:justify-end mt-5 gap-5">
                    {!isFirstStep && (
                        <Button
                            type="button"
                            onClick={back}
                            variant="flat"
                            disabled={state.submitting}
                        >
                            Back
                        </Button>
                    )}
                    <Button
                        type="submit"
                        variant="flat"
                        disabled={state.submitting}
                    >
                        {isLastStep ? "Finish" : "Next"}
                    </Button>
                </div>
                {/* <span className="text-red-600">
                    <ValidationError
                        field="Address"
                        prefix="Address"
                        errors={state.errors}
                    />
                    <ValidationError
                        field="EmailAddress"
                        prefix="Email Address"
                        errors={state.errors}
                    />
                    <ValidationError
                        field="Phone"
                        prefix="Phone"
                        errors={state.errors}
                    />
                </span> */}
            </form>
        </div>
    );
}

export default QuoteForm;
