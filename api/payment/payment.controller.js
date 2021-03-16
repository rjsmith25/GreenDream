require("dotenv").config();
const { insert } = require("./payment.model");
const StripePrivateKey = process.env.stripeTestPrivateKey;
const stripe = require("stripe")(StripePrivateKey);

async function createPayment(req, res) {
  const { token, price, booking_id } = req.body;
  if (!token || !price || !booking_id) {
    return res.status(400).json({
      message: "token, price and booking id is required",
    });
  }
  try {
    let charge = await stripe.charges.create({
      amount: +price * 100,
      currency: "usd",
      source: token,
      description: "GreenDream hotel rental",
    });

    await insert({
      booking_id,
      price: price.toString(),
      payment_id: charge.id,
    });
    res.status(200).json({ message: "successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Unable to make payments",
    });
  }
}

module.exports = { createPayment };
