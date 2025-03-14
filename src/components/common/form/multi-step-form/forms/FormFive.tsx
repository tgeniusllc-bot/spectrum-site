import Input from "@components/ui/input";
import { Controller, useForm } from "react-hook-form";
import GooglePlacesAutocomplete from "../../google-places-autocomplete";
import { FormWrapper } from "../FormWrapper";
import { Config } from "@config/index";
import { useRouter } from "next/router";
import { ContactDetailsInput } from "@framework/types";
import { useState } from "react";

type FormFiveData = {
    contactDetails: ContactDetailsInput;
};

type FormFiveProps = FormFiveData & {
    updateFields: (fields: Partial<FormFiveData>) => void;
};

const FormFive: React.FC<FormFiveProps> = ({
    updateFields,
    contactDetails,
}) => {
    const {
        register,
        control,
        getValues,
        formState: { errors },
    } = useForm<FormFiveProps>();
    const { locale } = useRouter();

    const [propertyAddress, setPropertyAddress] = useState(contactDetails);

    function handlePropertyAddressChange(values: any) {
        setPropertyAddress(values);
        updateFields({ contactDetails: values });
    }

    const isNotDefaultSettingsPage = Config.defaultLanguage !== locale;

    return (
        <FormWrapper>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                Property Address
            </h2>
            <fieldset className="w-full mx-auto flex flex-col justify-center ">
                <div className="flex flex-col space-y-4 lg:space-y-5">
                    <Controller
                        control={control}
                        name="contactDetails.location"
                        render={({ field: { onChange } }) => (
                            <GooglePlacesAutocomplete
                                onChange={onChange}
                                data={getValues("contactDetails.location")!}
                                disabled={isNotDefaultSettingsPage}
                            />
                        )}
                    />
                    {/* <Input
                        labelKey="forms:label-address"
                        {...register("address", {
                            required: "forms:address-required",
                        })}
                        errorKey={errors.address?.message}
                        variant="solid"
                        value={address}
                        id="address"
                        name="address"
                        onChange={(e) =>
                            updateFields({ address: e.target.value })
                        }
                    />
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                        <Input
                            labelKey="forms:label-city"
                            {...register("city")}
                            variant="solid"
                            className="w-full lg:w-1/2 "
                            onChange={(e) =>
                                updateFields({ city: e.target.value })
                            }
                            value={city}
                            id="city"
                            name="city"
                        />

                        <Input
                            labelKey="forms:label-postcode"
                            {...register("zip")}
                            variant="solid"
                            className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
                            onChange={(e) =>
                                updateFields({ zip: e.target.value })
                            }
                            value={zip}
                            id="zip"
                            name="zip"
                        />
                    </div> */}
                </div>
            </fieldset>
        </FormWrapper>
    );
};

export default FormFive;
