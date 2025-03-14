import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import { FormWrapper } from "../FormWrapper";

type FormSixData = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
};

type FormSixProps = FormSixData & {
    updateFields: (fields: Partial<FormSixData>) => void;
};

const FormSix: React.FC<FormSixProps> = ({
    updateFields,
    firstName,
    lastName,
    phone,
    email,
}) => {
    const {
        register,
        formState: { errors },
    } = useForm<FormSixData>();

    return (
        <FormWrapper>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                Contact Information
            </h2>
            <fieldset className="w-full mx-auto flex flex-col justify-center ">
                <div className="flex flex-col space-y-4 lg:space-y-5">
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                        <Input
                            labelKey="forms:label-first-name"
                            {...register("firstName", {
                                required: "forms:first-name-required",
                            })}
                            name="FirstName"
                            id="FirstName"
                            errorKey={errors.firstName?.message}
                            variant="solid"
                            onChange={(e) =>
                                updateFields({ firstName: e.target.value })
                            }
                            value={firstName}
                            className="w-full lg:w-1/2 "
                        />
                        <Input
                            labelKey="forms:label-last-name"
                            {...register("lastName", {
                                required: "forms:last-name-required",
                            })}
                            name="LastName"
                            id="LastName"
                            errorKey={errors.lastName?.message}
                            variant="solid"
                            onChange={(e) =>
                                updateFields({ lastName: e.target.value })
                            }
                            value={lastName}
                            className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                        <Input
                            type="tel"
                            labelKey="forms:label-phone"
                            {...register("phone", {
                                required: "forms:phone-required",
                            })}
                            name="Phone"
                            id="Phone"
                            errorKey={errors.phone?.message}
                            variant="solid"
                            onChange={(e) =>
                                updateFields({ phone: e.target.value })
                            }
                            value={phone}
                            className="w-full lg:w-1/2 "
                        />

                        <Input
                            type="email"
                            labelKey="forms:label-email-star"
                            {...register("email", {
                                required: "forms:email-required",
                                pattern: {
                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "forms:email-error",
                                },
                            })}
                            name="EmailAddress"
                            id="EmailAddress"
                            errorKey={errors.email?.message}
                            variant="solid"
                            onChange={(e) =>
                                updateFields({ email: e.target.value })
                            }
                            value={email}
                            className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
                        />
                    </div>
                </div>
            </fieldset>
        </FormWrapper>
    );
};

export default FormSix;
