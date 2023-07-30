import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-485x485-optimized.jpeg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://www.91-img.com/gallery_images_uploads/2/2/22bff588e44cb76219ceba8969ec2f35ccaa31eb.jpg?tr=h-630,c-at_max,q-80",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 4,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/iphone1164gbpurple_2_1.png",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

const addresses = [
  {
    name: "Aman Trivedi",
    street: "12th Main",
    city: "Kanpur",
    pincode: 209033,
    state: "UttarPradesh",
    phone: "6392641968",
  },
  {
    name: "Mudit Agarwal",
    street: "12th Main",
    city: "Kanpur",
    pincode: 209033,
    state: "UttarPradesh",
    phone: "6757483823",
  },
];
const CheckoutPage = () => {
  return (
    <>
      <div className="grid grid-cols-1  px-4  py-4 sm:px-14   gap-x-8 gap-y-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form className=" ">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="sm:text-4xl text-2xl  font-bold   text-gray-900">
                  Shipping Info
                </h2>

                <div className="mt-10   grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-2 text-dark transition-all  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-inset focus:ring-black/50 focus:ring-4 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-2 text-dark transition-all  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-inset focus:ring-black/50 focus:ring-4 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-2 text-dark transition-all  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-inset focus:ring-black/50 focus:ring-4 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-dark"
                    >
                      Country
                    </label>
                    <div className="">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-2 text-dark transition-all  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-inset focus:ring-black/50 focus:ring-4 sm:text-sm sm:leading-6"
                      >
                        <option>United States</option>
                        <option>India</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Local address
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 py-2 text-dark transition-all  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-inset focus:ring-black/50 focus:ring-4 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-2 text-dark transition-all  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-inset focus:ring-black/50 focus:ring-4 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-2 text-dark transition-all  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-inset focus:ring-black/50 focus:ring-4 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Pin Code
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-0 py-2 text-dark transition-all  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-inset focus:ring-black/50 focus:ring-4 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex w-full items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold px-5 hover:bg-red-400 focus:ring-[#FF6666] focus:ring-4 hover:text-main transition-all duration-200  py-2 border rounded-md leading-6 text-dark w-full"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md w-full  focus:ring-black/50 focus:ring-4 bg-dark hover:bg-deepdark px-6 py-3 text-sm font-semibold text-main shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Save
                </button>
              </div>
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-deepdark">
                  Address
                </h2>
                <p className="mt-1 text-sm leading-6 text-dark">
                  Choose From Existing Address
                </p>

                <ul>
                  {addresses.map((address) => (
                    <li
                      key={address.email}
                      className="flex border-2 rounded-lg p-2 mb-3 border-gray-200 justify-between gap-x-6 py-5"
                    >
                      <div className="flex gap-x-4">
                        <input
                          id="payments"
                          name="address"
                          type="radio"
                          className="h-4 w-4 mt-1 border-gray-300 text-dark focus:ring-black/50 focus:ring-4"
                        />
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {address.name}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {address.street}
                          </p>
                          <p className="text-sm leading-6 text-gray-500">
                            {address.pincode}
                          </p>
                        </div>
                      </div>

                      <div className=" sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-500">
                          {address.phone}
                        </p>

                        <p className="text-sm leading-6 text-gray-500">
                          {address.state}
                        </p>
                        <p className="text-sm leading-6 text-gray-500">
                          {address.city}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Payment Method
                    </legend>

                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="cash"
                          name="payments"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-dark focus:ring-black/50 focus:ring-4"
                        />
                        <label
                          htmlFor="cash"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Cash on Delievery
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="card"
                          name="payments"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-dark focus:ring-black/50 focus:ring-4"
                        />
                        <label
                          htmlFor="card"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Pay Via a Card
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:col-span-2">
          <div className="mx-auto max-w-7xl sm:py-6 lg:px-8">
            <div className="mt-8 p-4 w-full ">
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-dark">
                  {products.map((product) => (
                    <li key={product.id} className="flex  py-4 ">
                      <div className="h-24 w-24    flex-shrink-0 overflow-hidden rounded-md ">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full   w-full object-contain object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-dark">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-dark">
                            {product.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-dark">
                            <label
                              htmlFor="Quantity"
                              className="inline mr-4 text-base font-medium leading-6 text-dark"
                            >
                              Qty:
                            </label>
                            <select className="border-none -p-4 focus:ring-black/50 rounded-lg focus:ring-4 ">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="3">4</option>
                              <option value="3">5</option>
                            </select>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-red-600 opacity-60 hover:opacity-90"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className=" p-4  w-full ">
              <div className="flex justify-between text-base font-medium text-dark">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-800">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <Link
                  to="/pay"
                  className="flex items-center justify-center rounded-md border  focus:ring-black/50 focus:ring-4 border-transparent bg-dark px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-deepdark"
                >
                  Order now
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  <Link
                    to="/"
                    className="font-medium text-dark hover:text-deepdark"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
