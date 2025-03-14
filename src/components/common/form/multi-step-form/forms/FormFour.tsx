import { useForm } from "react-hook-form";
import { FormWrapper } from "../FormWrapper";
import TextArea from "@components/ui/text-area";
import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.css";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

type FormFourData = {
    details: string;
    pictures: any;
};

type FormFourProps = FormFourData & {
    updateFields: (fields: Partial<FormFourData>) => void;
};

const FormFour: React.FC<FormFourProps> = ({
    updateFields,
    details,
    pictures,
}) => {
    const {} = useForm<FormFourData>();

    const [files, setFiles] = useState(pictures);

    function handleFileChange(file: any) {
        setFiles(file);
        updateFields({ pictures: file });
    }
    return (
        <FormWrapper>
            <fieldset>
                <p className="text-xl text-gray-700 pb-4 font-bold">
                    What other details would be helpful for the pro to know?
                </p>

                <TextArea
                    id="details"
                    name="details"
                    onChange={(e) => updateFields({ details: e.target.value })}
                    variant="normal"
                    value={details}
                />
            </fieldset>
            {/* <fieldset className="mt-6">
                <p className="text-xl text-gray-700  font-bold">
                    Do you have any pictures?
                </p>
                <div className=" space-y-6 sm:mt-5 sm:space-y-5">
                    <div className="mt-1 sm:col-span-2 sm:mt-0 ">
                        <FilePond
                            id="file"
                            files={files}
                            storeAsFile={true}
                            allowReorder={false}
                            onupdatefiles={handleFileChange}
                            allowMultiple={true}
                            maxFiles={5}
                            name="files"  
                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                        />
                    </div>
                </div>
            </fieldset> */}
        </FormWrapper>
    );
};

export default FormFour;
