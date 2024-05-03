import React from 'react';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  onRemove: (itemId: number) => void;
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
}

export default function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>): void {
    onUpdateQuantity(item.id, parseInt(e.target.value));
  }

  return (
    <div className="border-b py-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-gray-500">Price: ${item.price}</p>
        <input 
          type="number" 
          min="1" 
          className="border rounded px-2 py-1 mt-2" 
          value={item.quantity} 
          onChange={handleQuantityChange} 
        />
        <button 
          className="text-red-500 hover:text-red-700 font-semibold mt-2"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
      <div>
        <p className="font-bold">Total: ${item.price * item.quantity}</p>
      </div>
    </div>
  );
}