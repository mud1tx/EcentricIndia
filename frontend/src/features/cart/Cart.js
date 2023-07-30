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
const Cart = () => {
  return (
    <>
      <h1 className="mx-auto max-w-7xl text-dark font-bold sm:py-4 p-3 text-3xl lg:px-8">
        Shopingcart
      </h1>
      <div className="mx-auto flex   sm:flex-row flex-col  sm:items-start items-center   gap-4   max-w-7xl sm:py-6 lg:px-8">
        <div className="mt-8 w-4/5 ">
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
                      <p className="mt-1 text-sm text-dark">{product.color}</p>
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

        <div className=" px-4 py-6 sm:w-1/2 w-full sm:px-6">
          <div className="flex justify-between text-base font-medium text-dark">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-800">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border  focus:ring-black/50 focus:ring-4 border-transparent bg-dark px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-deepdark"
            >
              Checkout
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
    </>
  );
};

export default Cart;
