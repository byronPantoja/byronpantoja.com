import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-gray-500 tracking-wide uppercase">
            Hi, my name is
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Byron Pantoja
          </p>
          <div className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            <p>I'm an aspiring ReactJS developer currently going through</p>
            <Link href="https://epicreact.dev/" passHref={true}>
              <span className="text-indigo-600">
                Epic React by Kent C. Dodds.
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          {/* Details section */}
          <section aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2
                id="details-heading"
                className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Working on the details...
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                I decided to push a hard reset on my website and my learning.
              </p>
            </div>

            {/*<div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">*/}
            {/*  <div>*/}
            {/*    <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">*/}
            {/*      <img*/}
            {/*        src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"*/}
            {/*        alt="Drawstring top with elastic loop closure and textured interior padding."*/}
            {/*        className="w-full h-full object-center object-cover"*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <p className="mt-8 text-base text-gray-500">*/}
            {/*      The 20L model has enough space for 370 candy bars, 6 cylinders*/}
            {/*      of chips, 1220 standard gumballs, or any combination of*/}
            {/*      on-the-go treats that your heart desires. Yes, we did the*/}
            {/*      math.*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*  <div>*/}
            {/*    <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">*/}
            {/*      <img*/}
            {/*        src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"*/}
            {/*        alt="Front zipper pouch with included key ring."*/}
            {/*        className="w-full h-full object-center object-cover"*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <p className="mt-8 text-base text-gray-500">*/}
            {/*      Up your snack organization game with multiple compartment*/}
            {/*      options. The quick-access stash pouch is ready for even the*/}
            {/*      most unexpected snack attacks and sharing needs.*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </section>
        </div>
      </div>
    </div>
  );
}
