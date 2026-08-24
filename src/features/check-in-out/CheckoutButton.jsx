import Button from "../../ui/Button.jsx";
import { useCheckOut } from "./useCheckOut.jsx";

function CheckoutButton({ bookingId }) {
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

export default CheckoutButton;
