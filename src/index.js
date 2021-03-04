const modal = window.toshi.createBookingIntegration({
  api: {
    url: "https://staging.api.toshi.co",
    key: "faf3dadd971a4fc8bbe680110db72082"
  }
});

// This is fired by the ecommerce integration when the customer attempts to
// proceed without selecting a timeslot.
window.showErrorMessage = () => {
  modal.setInlineErrorMessage(
    "This is an example error message. Please add your details before proceeding!"
  );
};
window.hideErrorMessage = () => {
  modal.setInlineErrorMessage(undefined);
};

modal.setFirstName("Jon");
modal.setLastName("Lambert");
modal.setEmail("jon@toshi.co");
modal.setPhone("07890123456");
modal.setAddress({
  addressLine1: "41-42 Foley St",
  town: "London",
  province: "Greater London",
  postcode: "W1W7TS",
  country: "GB"
});

const createProduct = (name, sku) => {
  return {
    // Mandatory properties
    name: name,
    size: "36",
    sku: sku,
    quantity: 1,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0006/1495/7171/products/SEQUIN_COLUMN_DRESS_PEARL_FRONT_181x271@2x.jpg?v=1540388474",
    retailPrice: 2000,

    // Optional properties
    productCategory: "dresses",
    description:
      "A modern take on sequins that is as clean as it is eye-catching, this style shimmers as you move and is a delight to wear.",
    promotionPrice: 1999.99,
    finalPrice: 1999.99,
    colour: "red",
    availableAdditionalSizes: [
      { variantSku: "902-34", size: "34", isAvailable: true },
      { variantSku: "902-38", size: "38" },
      { variantSku: "902-40", size: "40", isAvailable: true }
    ]
  };
};

modal.setProducts([
  createProduct("Paillette Column Dress", "902-36"),
  createProduct("Red Row Dress", "903-36")
]);

modal.mount(document.getElementById("app"));
