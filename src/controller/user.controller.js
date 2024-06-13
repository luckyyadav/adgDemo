// create db
const customerDB = [];

export const createEmployee = (req, res, next) => {
  const { name, email, phone } = req.body;
  try {
    // validation check
    if (!name || !email || !phone) {
      const missingFields = [];
      if (!name) missingFields.push("name");
      if (!email) missingFields.push("email");
      if (!phone) missingFields.push("phone");

      // return the error if any thing is missing
      return res.status(400).send({
        message:
          "Something went wrong. fileds missing " + missingFields.join(", "),
      });
    }

    // check for existing email
    /*     const duplicateEmail = customerDB
      .map((item) => item.email)
      .filter((email, ind) => customerDB.indexOf(email) !== ind);
    console.log(duplicateEmail);
    if (duplicateEmail.length > 0) {
      duplicateEmail.length = 0;
      return res.json({
        status: 400,
        message: "Email already exists.",
      });
    } */

    // if all validation is passed the add to the db

    const user = {
      name,
      email,
      id: Math.floor(Math.random() * 100),
      phone,
    };

    customerDB.push(user);
    return res.json({
      status: 200,
      message: "user is created",
    });
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = (req, res, next) => {
  // get all users
  try {
    const allCustomers = customerDB;
    res.json({
      status: 200,
      message: "Users fetched",
      data: allCustomers,
    });
  } catch (err) {
    next(err);
  }
};

export const getSingleUser = (req, res, next) => {
  // get id from the params
  const userID = req.params.id;
  try {
    const customer = customerDB.find((item) => item.id == parseInt(userID));
    if (!customer) {
      return res.json({
        status: 200,
        message: "customer not found",
      });
    }

    return res.json({
      status: 200,
      message: "user fetched",
      data: customer,
    });
  } catch (err) {
    next(err);
  }
};

export const updateUser = (req, res, next) => {
  const userID = req.params.id;
  const { name, email, phone } = req.body;
  try {
    const user = customerDB.find((item) => item.id == parseInt(userID));
    // check if user not found
    if (!user) {
      res.json({
        status: 400,
        message: "user not found",
      });
    }
    user.name = name;
    user.email = email;
    user.phone = phone;

    res.json({
      status: 200,
      message: "user updated",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = (req, res, next) => {
  const userID = req.params.id;
  try {
    const indexID = customerDB.findIndex((item) => item.id == parseInt(userID));
    customerDB.splice(indexID, 1);
    if (indexID == -1) {
      return res.json({
        status: 400,
        message: "user not found.",
      });
    }
    res.json({
      status: 200,
      message: "user is deleted",
    });
  } catch (err) {
    next(err);
  }
};
