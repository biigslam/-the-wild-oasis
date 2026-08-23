import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const {
    isLoading,
    error,
    data: cabins,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBooking,
  });

  return { isLoading, error, cabins };
}
