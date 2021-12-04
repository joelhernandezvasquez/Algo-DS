// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

// We'll represent each customer order as a unique integer.

// As an example,

//   Take Out Orders: [1, 3, 5]
//  Dine In Orders: [2, 4, 6]
//   Served Orders: [1, 2, 4, 6, 5, 3]
// would not be first-come, first-served, since order 3 
// was requested before order 5 but order 5 was served first.

// But,

//   Take Out Orders: [17, 8, 24]
//  Dine In Orders: [12, 19, 2]
//   Served Orders: [17, 8, 12, 19, 24, 2]
// would be first-come, first-served.

// Note: Order numbers are arbitrary. 
// They do not have to be in increasing order.


function firstInFirstServed (takeOutOrders,dineInOrders,servedOrders)
{
  if(servedOrders.length === 0) // base case
    return true;

    if( takeOutOrders.length > 0 &&  takeOutOrders[0] === servedOrders[0])
    {
        return firstInFirstServed(takeOutOrders.slice(1),dineInOrders,servedOrders.slice(1))
    }

    else if( dineInOrders.length > 0 &&   dineInOrders[0] === servedOrders[0])
    {
        return firstInFirstServed(takeOutOrders,dineInOrders.slice(1),servedOrders.slice(1))
    }

    else{
        return false;
    }

   
}

const fn = firstInFirstServed([17, 8, 24], [12, 19, 2],[17, 8, 12, 19, 24, 2])
console.log(fn);