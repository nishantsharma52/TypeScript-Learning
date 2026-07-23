import { useState, ChangeEvent, FormEvent } from 'react';

export interface OrderFormProps {
  onSubmit: (order: { name: string; cups: number }) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, cups });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Chai Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
        />
      </label>
      <label>
        Cups:
        <input 
          type="number" 
          value={cups} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value))} 
        />
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
}