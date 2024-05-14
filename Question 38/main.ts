// Question 38: Cities: Describing cities with a function.

// Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.
 
function cities(city:string,country:string="pakistan"){
    console.log(`${city} is in ${country}`)
}
cities("karachi")
cities("lahore")
cities("sharjah","Dubai")