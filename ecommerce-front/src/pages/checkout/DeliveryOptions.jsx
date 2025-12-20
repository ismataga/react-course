import dayjs from "dayjs";
import { formatMoney } from "../../utils/Money";

export function DeliveryOptions({ deliveryOptions, cartItem }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>

      {deliveryOptions.map((deliveryOption) => {
        let priceString = "FREE Shipping";

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
        }

        return (
          <div key={deliveryOption.id} className="delivery-option">
            <input
              type="radio"
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              readOnly
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimateDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
