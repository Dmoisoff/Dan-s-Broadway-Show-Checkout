import { Shows, type Options } from "~/types/types";
import { PROCESSING_FEE, SERVICE_FEE } from "~/utils/const";

export const formatDate = (event: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue: string = event?.target?.value;
  const cleanedValue = inputValue.replace(/\D/g, "");
  const formattedValue = cleanedValue.replace(/^(\d{2})/, "$1/");
  event.target.value = formattedValue;
};

export const formatCard = (event: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue: string = event?.target?.value;
  const numericValue = inputValue.replace(/\D/g, "");
  const formattedValue = numericValue
    .slice(0, 23)
    .replace(/(\d{4})(?=\d)/g, "$1 ");
  event.target.value = formattedValue;
};

export const getTotalPrice = (
  mockShows: Shows,
  ticketQuantity: Options,
  showInfo: Options
) => {
  return (
    (mockShows[showInfo?.value]?.price || 0) * ticketQuantity.value +
    (ticketQuantity.value * SERVICE_FEE || SERVICE_FEE) +
    PROCESSING_FEE
  ).toFixed(2);
};
