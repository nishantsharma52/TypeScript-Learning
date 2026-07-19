let subs: number | string = 12;
let apiRequest: 'pending' | 'success' | 'error' = "pending";

apiRequest = "success"

let airLineSeat: 'aisle' | 'window' | 'middle' = "middle";
airLineSeat = "aisle"

const orders = ['12', '13', '14']

let currentOrder: string | undefined;

for (let order of orders) {
    if (order === '12') {
        currentOrder = order
        break
    }
}
console.log(currentOrder);
