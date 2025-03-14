import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import { FormWrapper } from "../FormWrapper";

type FormFiveAddressData = {
    address: string;
    city: string;
    zip: string;
 };

type FormFiveAddressProps = FormFiveAddressData & {
    updateFields: (fields: Partial<FormFiveAddressData>) => void;
};

const FormFiveAddress: React.FC<FormFiveAddressProps> = ({
    updateFields,
    address,
    city,
    zip,
 }) => {
    const {
        register,
        formState: { errors },
    } = useForm<FormFiveAddressData>();

    return (
        <FormWrapper>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                Proprty Address
            </h2>

            <div className="flex flex-col space-y-4 lg:space-y-5">
					 
					<Input
						labelKey="forms:label-address"
						{...register("address", {
							required: "forms:address-required",
						})}
						variant="solid"
                        name="address"
                            id="address"
                             onChange={(e) =>
                                updateFields({ address: e.target.value })
                            }
                            value={address}
					/>
					 
					<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
						<Input
							labelKey="forms:label-city"
							{...register("city")}
							variant="solid"
							className="w-full lg:w-1/2 "
                            name="city"
                            id="city"
                             onChange={(e) =>
                                updateFields({ city: e.target.value })
                            }
                            value={city}
						/>

						<Input
							labelKey="forms:label-postcode"
							{...register("zipCode")}
							variant="solid"
							className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
                            name="zip"
                            id="zip"
                             onChange={(e) =>
                                updateFields({ zip: e.target.value })
                            }
                            value={zip}
						/>
					</div>
					 
				</div> 
         </FormWrapper>
    );
};

export default FormFiveAddress;
