// Question 37: Large Shirts: Default values in make_shirt().

// Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.
function  make_shirt (size:string="large",message:string="I love typescript")
{console.log(`Make a ${size} size T-shirt and print a message ${message} on it.`)}
make_shirt()
make_shirt("small")
make_shirt("medium","dive into coding")