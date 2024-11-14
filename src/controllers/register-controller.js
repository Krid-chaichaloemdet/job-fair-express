const prisma = require("../models/prisma");

exports.register = async (req, res, next) => {
  try {
    const timeStamp = Date.now();
    const { email, phoneNumber } = req.body;
    req.body.createdAt = "" + timeStamp;
    console.log(req.body);
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

exports.createTestRecord = async (req, res, next) => {
  try {
    const timeStamp = Date.now();
    // console.log(req.body);
    const {
      email,
      phoneNumber,
      score,
      totalClick,
      totalSkip,
      totalTime,
      testScore,
      testTime,
      test1,
      test2,
      test3,
      test4,
      test5,
      test6,
      test7,
      test8,
    } = req.body;
    req.body.createdAt = "" + timeStamp;
    const isMatchEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (isMatchEmail) {
      const picTimes = [];
      for (let i = 1; i <= 30; i++) {
        const picTime = req.body[`pic${i}`];
        picTimes.push(picTime);
      }
      const clickCounts = [];
      for (let i = 1; i <= 30; i++) {
        const clickCount = req.body[`click${i}`];
        clickCounts.push(clickCount);
      }
      const scoreCounts = [];
      for (let i = 1; i <= 30; i++) {
        const scoreCount = req.body[`isCorrect${i}`];
        scoreCounts.push(scoreCount);
      }

      const skipCounts = [];
      for (let i = 1; i <= 30; i++) {
        const skipCount = req.body[`skip${i}`];
        skipCounts.push(skipCount);
      }

      await prisma.differ.create({
        data: {
          userId: +isMatchEmail.userId,
          timeCounts: JSON.stringify(picTimes),
          clickCounts: JSON.stringify(clickCounts),
          scoreCounts: JSON.stringify(scoreCounts),
          skipCounts: JSON.stringify(skipCounts),
          createdAt: "" + timeStamp,
          score: "" + score,
          totalClick: +totalClick,
          totalSkip: +totalSkip,
          totalTime: "" + totalTime,
        },
      });

    const testRes =   await prisma.test.create({
        data: {
          userId: +isMatchEmail.userId,
          testScore: "" + testScore,
          testTime: "" + testTime,
          test1,
          test2,
          test3,
          test4,
          test5,
          test6,
          test7,
          test8,
          createdAt: "" + timeStamp,
        },
      });
      console.log("testRes",testRes)
      return res.status(200).json({ message: "created success" });
    }

    const isMatchPhoneNumber = await prisma.user.findFirst({
      where: {
        phoneNumber,
      },
    });
    if (isMatchPhoneNumber) {
      return res.status(200).json({ message: "registation success" });
    }
  } catch (error) {
    console.log(error);
  }
};
