export interface ChaiCardProps {
  name: string;
  price: number;
  isSpecial?: boolean; // Optional property
}

export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProps) {
  return (
    <article>
      <h2>
        {name} {isSpecial && <span>*</span>}
      </h2>
      <p>Price: {price}</p>
    </article>
  );
}