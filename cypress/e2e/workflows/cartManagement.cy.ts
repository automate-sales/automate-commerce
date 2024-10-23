// An admin creates a new cart and shares it with a lead
// the lead navigates to a cart/[id] page

// the new cart doesnt exist
    // should reroute to the cart page
    // current cart should be the same as before
    // should display an error message: the cart doesnt exist or is not active

// the new cart belongs to another lead
    // should reroute to the cart page
    // current cart should be the same as before
    // should display an error message: the cart is not available

// the new cart belongs to the current lead
    // should reroute to the cart page

// the new cart doesnt belong to anybody

    // the current cart is empty   
        // current cart should be inactive
        // new cart should belong to the current lead
        // should reroute to the cart page
        // should display a success message: the cart has been claimed

    // the current cart is not empty
        // should display a modal dialog asking for confirmation to swap carts
        
        // user confirms
            // current cart should be inactive
            // new cart should belong to the current lead
            // should reroute to the cart page
            // should display a success message: the cart has been claimed
        
        // user cancels
            // should reroute to the cart page
            // current cart should be the same as before

