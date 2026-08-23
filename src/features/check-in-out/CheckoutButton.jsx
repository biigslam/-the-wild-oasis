import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckOut";

function CheckOutButton({ bookingId }) {
  const { isLoading, mutate: checkOut } = useCheckOut();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkOut(bookingId)}
      disabled={isLoading}
    >
      Check out
    </Button>
  );
}

export default CheckOutButton;
