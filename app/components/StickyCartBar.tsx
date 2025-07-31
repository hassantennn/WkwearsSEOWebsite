import {useState} from 'react';
import type {ProductFragment} from 'storefrontapi.generated';
import {AddToCartButton} from './AddToCartButton';
import {useAside} from './Aside';

export function StickyCartBar({
  selectedVariant,
}: {
  selectedVariant: ProductFragment['selectedOrFirstAvailableVariant'];
}) {
  const {open} = useAside();
  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(false);

  const size = selectedVariant?.selectedOptions?.find(
    (o) => o.name.toLowerCase() === 'size',
  )?.value;

  const disabled =
    !selectedVariant || quantity < 1 || !selectedVariant.availableForSale;
  const buttonText = !selectedVariant ? 'Select size' : 'Add to cart';

  function handleClick() {
    setAdded(true);
    open('cart');
    setTimeout(() => setAdded(false), 800);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-2 flex items-center gap-4 text-sm">
      <div className="flex items-center gap-4 flex-1">
        <span>{size ? `Size: ${size}` : 'Size: -'}</span>
        <div className="flex items-center border rounded">
          <button
            type="button"
            className="px-2"
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
          >
            -
          </button>
          <span className="px-2 w-6 text-center">{quantity}</span>
          <button type="button" className="px-2" onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>
      </div>
      <AddToCartButton
        disabled={disabled}
        onClick={handleClick}
        className={`flex-1 py-2 rounded text-white transition-colors duration-300 ${
          added ? 'bg-green-500' : 'bg-black'
        }`}
        lines={
          selectedVariant
            ? [
                {
                  merchandiseId: selectedVariant.id,
                  quantity,
                  selectedVariant,
                },
              ]
            : []
        }
      >
        {added ? '✓ Added' : buttonText}
      </AddToCartButton>
    </div>
  );
}
