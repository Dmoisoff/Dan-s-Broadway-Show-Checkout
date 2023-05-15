import React from "react";
import Select from "react-select";
import { Control, Controller } from "react-hook-form";
import { mockShows } from "~/utils/mockdata";
import { TICKET_QUANTITY_OPTIONS } from "~/utils/const";

interface SelectShowDetailsProps {
  control: Control;
}

const SelectShowDetails: React.FC<SelectShowDetailsProps> = ({ control }) => {
  const dropDownOptions = Object.values(mockShows).map((show) => ({
    value: show.id,
    label: `${show.name} - $${show.price}`,
  }));

  return (
    <div className="max-w-l bg-gray col-span-3 rounded-md border-2 border-gray-300 bg-white p-4 text-black">
      <h3 className="flex justify-around text-2xl font-bold">
        Select Show Details
      </h3>
      <div className="flex w-full justify-evenly pt-4">
        {/*  */}
        <div>
          <div className=" flex w-8/12 flex-row items-center ">
            <h6 className="text-1xl pr-2">Show:</h6>
            <Controller
              name="show"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  classNames={{
                    control: () => "border border-gray-300 rounded-md w-48",
                  }}
                  options={dropDownOptions}
                  placeholder={"Select Show..."}
                />
              )}
              rules={{ required: true }}
            />
          </div>
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
                placeholder={"0"}
              />
            )}
            rules={{ required: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectShowDetails;