let loggedIn = true;
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']

if (loggedIn) {
    for (let c in cart){
        console.log(cart[c])
    }
}
 else {
    console.log("You must log in to see your cart.")
}