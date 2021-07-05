let shopingList = [
    { 
      name: 'bread',
      amount: 1,
      value: 'bought', 
    },
    { 
      name: 'orange',
      amount: 5,
      value: 'not bought', 
    },
    { 
      name: 'cockies',
      amount: 10,
      value: 'not bought',
    },
    {
      name: 'potatoes',
      amount: 15,
      value: 'bought',
    },
    {
      name: 'tomatoes',
      amount: 4,
      value: 'bought',
    }
  ]
let newItem = {
    name: 'carrot',
    amount: 3,
    value: 'bought'
}
function addItem(){
    shopingList.push(newItem)
}
addItem()
console.log(shopingList);

