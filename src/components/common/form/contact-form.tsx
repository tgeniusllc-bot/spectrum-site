import Input from "@components/ui/input";
import Button from "@components/ui/button";
import TextArea from "@components/ui/text-area";
import { useTranslation } from "next-i18next";
import { useForm, ValidationError } from "@formspree/react";
import FormSuccess from "./multi-step-form/form-sucess";

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm("ContactForm");
    const { t } = useTranslation();

    if (state.succeeded) {
        return <FormSuccess />;
    }

    return (
        <form
            method="post"
            onSubmit={handleSubmit}
            className="w-full mx-auto flex flex-col justify-center "
        >
            <div className="flex flex-col space-y-5">
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <Input
                        type="text"
                        name="Name"
                        id="Name"
                        autoComplete="family-name"
                        labelKey="forms:label-name-required"
                        placeholderKey="forms:placeholder-name"
                        className="w-full md:w-1/2 "
                        variant="solid"
                        validation={
                            <ValidationError
                                prefix="Name"
                                field="Name"
                                errors={state.errors}
                            />
                        }
                    />
                    <Input
                        type="email"
                        name="Email"
                        id="Email"
                        autoComplete="email"
                        labelKey="forms:label-email-required"
                        placeholderKey="forms:placeholder-email"
                        className="w-full md:w-1/2 md:ms-2.5 lg:ms-5 mt-2 md:mt-0"
                        variant="solid"
                        validation={
                            <ValidationError
                                prefix="Email"
                                field="Email"
                                errors={state.errors}
                            />
                        }
                    />
                </div>
                <Input
                    type="text"
                    name="Subject"
                    id="Subject"
                    labelKey="forms:label-subject"
                    className="relative"
                    placeholderKey="forms:placeholder-subject"
                    variant="solid"
                    validation={
                        <ValidationError
                            prefix="Subject"
                            field="Subject"
                            errors={state.errors}
                        />
                    }
                />
                <TextArea
                    id="Message"
                    name="Message"
                    rows={4}
                    aria-describedby="message-max"
                    defaultValue={""}
                    labelKey="forms:label-message"
                    className="relative mb-4"
                    placeholderKey="forms:placeholder-message"
                    validation={
                        <ValidationError
                            prefix="Message"
                            field="Message"
                            errors={state.errors}
                        />
                    }
                />
                <div className="relative">
                    <Button
                        disabled={state.submitting}
                        type="submit"
                        className="h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                    >
                        {t("common:button-send-message")}
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
