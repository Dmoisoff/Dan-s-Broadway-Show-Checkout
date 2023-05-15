import React from "react";
import { PROCESSING_FEE, SERVICE_FEE } from "~/utils/const";
import { mockShows } from "~/utils/mockdata";
import { type Option } from "~/types/types";
import Link from "next/link";
import {
  type Control,
  Controller,
  type FieldValues,
  type UseFormReset,
} from "react-hook-form";
import Button from "./button";
import { getTotalPrice } from "~/utils/paymentFormating";

interface OrderDetailsProps {
  showInfo: Option | undefined;
  ticketQuantity: Option | undefined;
  control: Control;
  reset: UseFormReset<FieldValues>;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({
  ticketQuantity,
  showInfo,
  control,
  reset,
}) => {
  const hasShowId = !!showInfo?.value;
  const hasTicketQuantity = !!ticketQuantity?.value;
  return (
    <>
      <div className="bg-gray col-span-2 col-start-4 row-span-4 row-start-1 rounded-md border-2 border-gray-300 bg-white p-4 text-black ">
        <div className="font-Roboto flex justify-between pb-4 text-lg font-semibold">
          <h4>Total</h4>
          <div>
            {hasShowId && ticketQuantity
              ? `$${getTotalPrice(
                  mockShows,
                  ticketQuantity.value,
                  showInfo.value
                ).toFixed(2)}`
              : `$${SERVICE_FEE + PROCESSING_FEE}`}
          </div>
        </div>

        <div className="font-Roboto flex justify-between pb-4">
          <h4 className="font-semibold">Tickets</h4>
          <div className="text-sm font-light">
            {hasShowId && hasTicketQuantity
              ? `$${mockShows[showInfo?.value]?.price || 0} x ${
                  ticketQuantity.value
                }`
              : "..."}
          </div>
        </div>

        <div className=" pb-4">
          <p className="font-Roboto pb-2 font-semibold">Notes About Show</p>
          <div className="min-h-20 h-20 max-h-20 overflow-auto">
            <div className="min-h-20 h-20 max-h-20 overflow-auto border-4 border-gray-200">
              {hasShowId ? (
                <p className="pl-2 text-sm font-light">
                  {mockShows[showInfo?.value]?.note}
                </p>
              ) : (
                <p className="text-sm text-gray-500">Please Select A Show...</p>
              )}
            </div>
          </div>
        </div>

        {/* fees */}
        <div>
          <h3 className="font-Roboto pb-2 font-semibold">Fees</h3>
          <div>
            <div className="flex justify-between">
              <p className="font-Roboto text-sm font-light">
                Service Fee: ${SERVICE_FEE}{" "}
                {hasTicketQuantity ? `x ${ticketQuantity?.value}` : "x 1"}
              </p>
              <p className="font-Roboto text-sm font-light">
                {hasTicketQuantity
                  ? `$${ticketQuantity.value * SERVICE_FEE}`
                  : `$${SERVICE_FEE}`}
              </p>
            </div>
            <div className="flex justify-between pb-4">
              <p className="font-Roboto text-sm font-light">Order Processing Fee</p>
              <p className="font-Roboto text-sm font-light">${PROCESSING_FEE}</p>
            </div>
          </div>
        </div>

        <h3 className="font-Roboto pb-2 font-semibold">Delivery</h3>
        <div className="flex justify-between pb-4">
          <p className="font-Roboto text-sm font-light">Moblie Entry</p>
          <p className="font-Roboto text-sm font-light">Free!</p>
        </div>

        <div className="pb-6 text-blue-600 font-Roboto text-sm  font-semibold">
          <Link href="" onClick={() => reset({ show: "", ticketQuantity: 0 })}>
            Reset Order
          </Link>
        </div>

        <div className="pb-4">
          <p className="pb-2 text-sm font-semibold">*All Sales Final - No Refunds</p>
          <div>
            <Controller
              name="terms"
              control={control}
              render={({ field }) => <input type="checkbox" {...field} />}
              rules={{ required: true }}
            />{" "}
            <span className="text-sm font-semibold">I have read and agree to the current{" "}
            <span className="text-blue-600">Terms of Use</span>.
            </span>
          </div>
        </div>
        <div className="flex justify-evenly pb-4">
          <Button
            className="w-11/12 bg-green-600 h-10 text-white"
            onClick={() => {
              return;
            }}
            type={"submit"}
          >
            <p>Place Order</p>
          </Button>
        </div>

        <div>
          <p className="font-semibold text-[10px]">
            *Expections may apply, see our{" "}
            <span className="text-blue-600">Terms of Use</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
