
const products = [
    {name:'banana' , type:'fruit'},
    {name:'tomato' , type:'vegetable'},
    {name:'banana' , type:'fruit'}
]

function filter(products)
{
   const filterProducts = products.filter((product) => product.type === 'fruit')
   return filterProducts;
}

const f = filter(products)
console.log(f)