# Payment Pointer Protector

[Web Monetization](https://webmonetization.org) is a new web standard that only requires one line of HTML code for your website to support it.

    <meta name="monetization" content="$example.payment.pointer" />

But I realize it can be easily tampered using the inspection tool that comes along with browsers (and may be even script injection). I tried doing some web search but found no articles relating to this concern. So, I came up with this module that helps guard the payment pointer, and if not, at least make it a litle bit harder to tamper with.

## Goals

It is designed (but not guaranteed) to prevent people from:
* Removing your payment pointer
* Modifying your payment pointer
* Inserting their own payment pointer

## Installation
The best way to use it for the time being is to clone/download this repo, and copy+rename the `lib` directory into your own project.

I'm currently having trouble trying to wrap it up in a package for npm. There's a wrapper for React now and I'd like to try create wrappers for Vue, Angular and Web Components if possible. If you know how and want to help, I'd greatly appreciate that. You can open a new issue if you think it's relevant or just contact me at [dev.chin98edwin@gmail.com](mailto:dev.chin98edwin@gmail.com).

## How to use it
If your `<meta>` tag already exists in the `<head>`, the Protector will guard it when you call `guard()`. Otherwise, it will automatically create a new `<meta>` tag with the payment pointer you provide in the constructor then guard it. Note that if the tag was automatically created, it will be removed when you call `release()`.

    // Assuming that you renamed 'lib' to 'payment-pointer-protector'
    import PaymentPointerProtector from './payment-pointer-protector'

    // Initializing/Instantiation
    const paymentPointer = '$example.payment.pointer'
    const p = new PaymentPointerProtector(paymentPointer)

    // Start watching
    p.guard()

    // Stop watching
    p.release()

Bonus: There's also a React component that wraps around the core of this module. To use it:

    // Assuming that you renamed 'lib' to 'payment-pointer-protector'
    import PaymentPointerProtector from './payment-pointer-protector/react'

    const paymentPointer = '$example.payment.pointer'

    function MyComponent() {
      return (
        <PaymentPointerProtector paymentPointer={paymentPointer} />
      )
    }

## Others
Do not hesitate to open an issue if there's a bug.
I am currently testing it outside of this repo in an empty [`create-react-app`](https://github.com/facebook/create-react-app) project.
