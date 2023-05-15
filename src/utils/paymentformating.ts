import { Shows } from "~/types/types";
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
  ticketQuantity: number,
  showInfo: number
) => {
  return (
    (mockShows[showInfo]?.price || 0) * ticketQuantity +
    (ticketQuantity * SERVICE_FEE || SERVICE_FEE) +
    PROCESSING_FEE
  );
};
