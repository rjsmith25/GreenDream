const { insert, findBy } = require("./customer.model");

async function createCustomer(req, res) {
  const { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email) {
    return res
      .status(400)
      .json({ message: "First name, Last name and Email is required" });
  }

  try {
    let customer = await insert(req.body);
    res.status(201).json(customer);
  } catch (e) {
    res.status(500).json({ message: "Unable to create customer" });
  }
}

module.exports = { createCustomer };
