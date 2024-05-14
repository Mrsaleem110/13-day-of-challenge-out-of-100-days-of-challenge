// Question 37: Large Shirts: Default values in make_shirt().
// Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Make a ".concat(size, " size T-shirt and print a message ").concat(message, " on it."));
}
make_shirt();
make_shirt("small");
make_shirt("medium", "dive into coding");
