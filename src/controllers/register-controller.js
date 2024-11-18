const prisma = require("../models/prisma");

exports.register = async (req, res, next) => {
  try {
    console.log("dd", req.body)
    const timeStamp = Date.now();

    const { targetUserId, firstName, lastName, address ,dateOfBirth ,gender ,phoneNumber ,email ,university ,education ,faculty ,department ,interestedPosition} = req.body
    await prisma.user.update({
      where:{
        userId : +targetUserId
      },data:{
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
        createdAt: '' + timeStamp
      }
    })

    res.status(200).json({ message: "created" })
    // const { email, phoneNumber } = req.body;
    // req.body.createdAt = "" + timeStamp;
    // console.log(req.body);
    // const isMatchEmail = await prisma.user.findFirst({
    //   where: {
    //     email,
    //   },
    // });
    // if (isMatchEmail) {
    //   return res.status(200).json({ message: "registation success" });
    // }

    // const isMatchPhoneNumber = await prisma.user.findFirst({
    //   where: {
    //     phoneNumber,
    //   },
    // });
    // if (isMatchPhoneNumber) {
    //   return res.status(200).json({ message: "registation success" });
    // }

    // const response = await prisma.user.create({
    //   data: req.body,
    // });

    // res.status(201).json({ message: "created" });
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

      const allTestResult = []
      for (let i = 1; i <= 8; i++){
        const test = req.body[`test${i}`]
        allTestResult.push(test)
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

          testAllResult: JSON.stringify(allTestResult),
          testTotalScore: "" + testScore,
          testTime: "" + testTime,
        },
      });

 

    // const testRes =   await prisma.test.create({
    //     data: {
    //       userId: +isMatchEmail.userId,
    //       testTotalScore: "" + testScore,
    //       testTime: "" + testTime,
    //       testAllResult: JSON.stringify(allTestResult),
    //       createdAt: "" + timeStamp,
    //     },
    //   });
    //   console.log("testRes",testRes)
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


exports.searchProvince = async (req,res,next) =>{
  try {
    const { q } = req.query;

  const response =  await prisma.province.findMany({
    where:{
      OR :[
        { province_name_en : { contains: q , }, },
        { province_name_th : { contains: q , }, },

      ]
    }
  })
console.log(response)
  res.status(200).json(response)
  } catch (error) {
    console.log(error)
  }
}

exports.searchDistrict = async (req, res, next) =>{
  try {
    const { q } = req.query;

    const response =  await prisma.district.findMany({
      where:{
        OR :[
          { province_code : { contains: q , }, },
        ]
      }
    })
  console.log(response)
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
  }
}

exports.searchSubDistrict = async (req,res,next) =>{
  try {
    const { q } = req.query;

    const response =  await prisma.subDistrict.findMany({
      where:{
        OR :[
          { district_code : { contains: q , }, }
        ]
      }
    })
  console.log(response)
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
  }
}

exports.searchUniversity = async (req,res,next) =>{
  try {
    const { q } = req.query;

    const response = await prisma.university.findMany({
      where:{
        OR:[
          { university : { contains : q }}
        ]
      }
    })
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
  }
}

exports.searchEducation = async (req, res, next) =>{
  try {
    const { q } = req.query;

    const response = await prisma.education.findMany()
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
  }
}