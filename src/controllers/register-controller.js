const prisma = require("../models/prisma");

exports.register = async (req, res, next) => {
  try {
    const timeStamp = Date.now();
    console.log(req.body)
    const {
      targetUserId,
      firstName,
      lastName,
      address,
      dateOfBirth,
      gender,
      phoneNumber,
      email,
      university,
      education,
      faculty,
      department,
      interestedPosition,
      interestingRate,
      likedRate,
      
    } = req.body;

    const isRegister = await prisma.user.findFirst({
      where:{
        phoneNumber
      }
    })

    if(isRegister){
      return res.status(400).json({ message: 'This phone number is already registered.'})
    }

    await prisma.user.update({
      where: {
        userId: +targetUserId,
      },
      data: {
        firstName,
        lastName,
        address,
        dateOfBirth,
        gender,
        phoneNumber,
        email,
        university,
        education,
        faculty,
        department,
        interestedPosition,
        interestingRate,
        likedRate,
        createdAt: "" + timeStamp,
      },
    });

    res.status(200).json({ message: "created" });
  } catch (error) {
    console.log(error);
  }
};

exports.checkPhoneNumber = async (req, res, next) =>{
  try {
    const { phoneNumber} = req.body
    const isMatch = await prisma.user.findFirst({
      where:{
        phoneNumber
      }
    })
    if(!isMatch){
      return res.status(400).json({ message : "Invalid phone number. Please enter the phone number you submitted during the registration."})
    }
    console.log(" isMatch ", isMatch)

    const isTestExist = await prisma.differ.findFirst({
      where:{
        userId : isMatch.userId
      }
    })
    if(isTestExist){
      return res.status(400).json({ message : "This phone number has already been used to participate in this quiz."})
    }
    res.status(200).json({ message : "valid phone number"})
  } catch (error) {
    console.log(error)
  }
}
exports.createTestRecord = async (req, res, next) => {
  try {
    const timeStamp = Date.now();
    const {
      email,
      phoneNumber,
      score,
      totalClick,
      totalSkip,
      totalTime,
      testScore,
      testTime,
      time
    } = req.body;

    console.log("create", req.body)
    req.body.createdAt = "" + timeStamp;

    const isMatchPhoneNumber = await prisma.user.findFirst({
      where: {
        phoneNumber: phoneNumber,
      },
    });

    if (!isMatchPhoneNumber) {
      return res.status(400).json({ message: "invalid credential" });
    }

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

    const allTestResult = [];
    for (let i = 1; i <= 8; i++) {
      const test = req.body[`test${i}`];
      allTestResult.push(test);
    }
    const testResponse = await prisma.differ.create({
      data: {
        userId: +isMatchPhoneNumber.userId,
        timeCounts: JSON.stringify(picTimes),
        clickCounts: JSON.stringify(clickCounts),
        scoreCounts: JSON.stringify(scoreCounts),
        skipCounts: JSON.stringify(skipCounts),
        createdAt: "" + timeStamp,
        score: "" + score,
        totalClick: +totalClick,
        totalSkip: +totalSkip,
        totalTime: "" + time,

        testAllResult: JSON.stringify(allTestResult),
        testTotalScore: "" + testScore,
        testTime: "" + testTime,
      },
    });

    res.status(200).json({ message: "test record created" });
  } catch (error) {
    console.log(error);
  }
};

exports.searchProvince = async (req, res, next) => {
  try {
    const { q } = req.query;

    const response = await prisma.province.findMany({
      where: {
        OR: [
          { province_name_en: { contains: q } },
          { province_name_th: { contains: q } },
        ],
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

exports.searchDistrict = async (req, res, next) => {
  try {
    const { q } = req.query;

    const response = await prisma.district.findMany({
      where: {
        OR: [{ province_code: { contains: q } }],
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

exports.searchSubDistrict = async (req, res, next) => {
  try {
    const { q } = req.query;

    const response = await prisma.subDistrict.findMany({
      where: {
        OR: [{ district_code: { contains: q } }],
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

exports.searchUniversity = async (req, res, next) => {
  try {
    const { q } = req.query;

    const response = await prisma.university.findMany({
      where: {
        OR: [{ university: { contains: q } }, { enCode: { contains: q } }],
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

exports.searchEducation = async (req, res, next) => {
  try {
    const response = await prisma.education.findMany();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const response = await prisma.user.findFirst({
      where: {
        userId: +req.body.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
