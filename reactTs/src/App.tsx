import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";
import { ChaiList } from "./components/ChaiList";
import OrderForm from "./components/OrderForm";
import { Card } from "./components/Card";
import type { Chai } from "./types";

function App() {
  const menu: Chai[] = [
    { id: 1, name: "Masala", price: 30 },
    { id: 2, name: "Ginger", price: 25 },
    { id: 3, name: "Lemon", price: 20 },
  ];

  return (
    <div>
      {/* 1. Basic Props */}
      <ChaiCard name="Headphones" price={5000} isSpecial={true} />
      
      {/* 2. Counter with UseState Number */}
      <Counter />

      {/* 3. Passing Data Arrays to Components */}
      <ChaiList items={menu} />

      {/* 4. Form Event Handling */}
      <OrderForm onSubmit={(order) => {
        console.log("Placed Order: ", order.name, order.cups);
      }} />

      {/* 5. PropsWithChildren usage */}
      <Card 
        title="Chai aur Typescript" 
        footer={<p>Hitesh</p>}
      >
        <p>This is a children element</p>
      </Card>
    </div>
  );
}

export default App;