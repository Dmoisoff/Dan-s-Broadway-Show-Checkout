import React from "react";
import Select from "react-select";
import { Control, Controller } from "react-hook-form";
import { mockShows } from "~/utils/mockdata";
import { TICKET_QUANTITY_OPTIONS } from "~/utils/const";
import { ErrorMessage } from "@hookform/error-message";

interface SelectShowDetailsProps {
  control: Control;
  errors: FormState<FieldValues>;
}

const SelectShowDetails: React.FC<SelectShowDetailsProps> = ({ control,errors, }) => {
  const dropDownOptions = Object.values(mockShows).map((show) => ({
    value: show.id,
    label: `${show.name} - $${show.price}`,
  }));

  return (
    <div className="max-w-l bg-gray col-span-3 min-w-[614px] rounded-md border-2 border-gray-300 bg-white p-4 text-black">
      <h3 className="flex justify-around text-2xl font-bold">
        Select Show Details
      </h3>
      <div className="flex w-full justify-evenly pt-4">
        {/*  */}
        <div className="">
          <div className=" flex w-8/12 flex-row items-center ">
            <h6 className="text-1xl pr-2">Show:</h6>
            <Controller
              name="show"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  classNames={{
                    control: () =>
                      "border border-gray-300 rounded-md  w-max",
                  }}
                  options={dropDownOptions}
                  placeholder={"Select Show..."}
                />
              )}
              rules={{ required: "Please select a show" }}
            />
          </div>
          {errors?.show && <div className="absolute  text-red-600"><ErrorMessage errors={errors} name="show" /></div> }
        </div>

        <div className=" flex w-4/12 flex-row items-center ">
          <h6 className="text-1xl pr-2">Ticket Quantity:</h6>
          <Controller
            name="ticketQuantity"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                classNames={{
                  control: () => "border border-gray-300 rounded-md",
                }}
                options={TICKET_QUANTITY_OPTIONS.map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            )}
            rules={{ required: true }}
            defaultValue={{
              value: 1,
              label: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectShowDetails;
