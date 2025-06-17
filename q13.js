const checkout = {
  items: [],
  total: 0,

  addItem(item) {
   
    // Convert item.price to a number 
    const price = Number(item.price);

  
    // Check if the converted price is a valid number
    if (isNaN(price)) {
      console.log("Invalid price.");
      return;
    }

  
 
    this.items.push(item);
    this.total += price;
  },

  getTotal() {
   
   
    return `Total: $${this.total.toFixed(2)}`;
  }
};


checkout.addItem({ name: "Coffee Maker", price: "9" }); 
checkout.addItem({ name: "Chapati", price: "100.25" }); 
checkout.addItem({ name: "Milk", price: 300.5 });            

// ✅ Test the total output
console.log(checkout.getTotal());
