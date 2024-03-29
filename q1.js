const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 1. Add 'Meat' in the beginning if not already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// 2. Add 'Sugar' at the end if not already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// 3. Remove 'Honey' if it is allergic
const allergicToHoney = true; // Set allergicToHoney to true
if (allergicToHoney) {
    const indexToRemove = shoppingCart.indexOf('Honey');
    if (indexToRemove !== -1) {
        shoppingCart.splice(indexToRemove, 1);
    }
}

// 4. Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

// Display the updated shopping cart
console.log(shoppingCart);
