import Razorpay from "razorpay";
import shortid from "shortid";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: "rzp_test_WjOtHCtWT76ZeX",
      key_secret: "VvhohHH0GsJHNzNHdbvkLr8L",
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = 6000;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    // try {
    const response = await razorpay.orders.create(options);
    return NextResponse.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
    // } catch (err) {
    //   console.error("Error creating Razorpay order:");
    //   // res.status(500).json({ message: "Error creating Razorpay order" });
    //   // return "error in razorpay";
    //   return NextResponse({ message: "Email sent successfully!" });

    // }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
