const prisma = require("../models/prisma");

exports.register = async (req, res, next) => {
  try {
    const timeStamp = Date.now();
    const { email, phoneNumber } = req.body;
    req.body.createdAt = "" + timeStamp;

    const isMatchEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (isMatchEmail) {
      return res.status(200).json({ message: "registation success" });
    }

    const isMatchPhoneNumber = await prisma.user.findFirst({
      where: {
        phoneNumber,
      },
    });
    if (isMatchPhoneNumber) {
      return res.status(200).json({ message: "registation success" });
    }

    const response = await prisma.user.create({
      data: req.body,
    });

    res.status(201).json({ message: "created" });
  } catch (error) {
    console.log(error);
  }
};
