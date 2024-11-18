// const axios = require('axios');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProvince = async() =>{
    // let provinceJson = [
    //     {
    //       "id": 1,
    //       "provinceCode": 10,
    //       "provinceNameEn": "Bangkok",
    //       "provinceNameTh": "กรุงเทพมหานคร"
    //     },
    //     {
    //       "id": 2,
    //       "provinceCode": 11,
    //       "provinceNameEn": "Samut Prakan",
    //       "provinceNameTh": "สมุทรปราการ"
    //     },
    //     {
    //       "id": 3,
    //       "provinceCode": 12,
    //       "provinceNameEn": "Nonthaburi",
    //       "provinceNameTh": "นนทบุรี"
    //     },
    //     {
    //       "id": 4,
    //       "provinceCode": 13,
    //       "provinceNameEn": "Pathum Thani",
    //       "provinceNameTh": "ปทุมธานี"
    //     },
    //     {
    //       "id": 5,
    //       "provinceCode": 14,
    //       "provinceNameEn": "Phra Nakhon Si Ayutthaya",
    //       "provinceNameTh": "พระนครศรีอยุธยา"
    //     },
    //     {
    //       "id": 6,
    //       "provinceCode": 15,
    //       "provinceNameEn": "Ang Thong",
    //       "provinceNameTh": "อ่างทอง"
    //     },
    //     {
    //       "id": 7,
    //       "provinceCode": 16,
    //       "provinceNameEn": "Loburi",
    //       "provinceNameTh": "ลพบุรี"
    //     },
    //     {
    //       "id": 8,
    //       "provinceCode": 17,
    //       "provinceNameEn": "Sing Buri",
    //       "provinceNameTh": "สิงห์บุรี"
    //     },
    //     {
    //       "id": 9,
    //       "provinceCode": 18,
    //       "provinceNameEn": "Chai Nat",
    //       "provinceNameTh": "ชัยนาท"
    //     },
    //     {
    //       "id": 10,
    //       "provinceCode": 19,
    //       "provinceNameEn": "Saraburi",
    //       "provinceNameTh": "สระบุรี"
    //     },
    //     {
    //       "id": 11,
    //       "provinceCode": 20,
    //       "provinceNameEn": "Chon Buri",
    //       "provinceNameTh": "ชลบุรี"
    //     },
    //     {
    //       "id": 12,
    //       "provinceCode": 21,
    //       "provinceNameEn": "Rayong",
    //       "provinceNameTh": "ระยอง"
    //     },
    //     {
    //       "id": 13,
    //       "provinceCode": 22,
    //       "provinceNameEn": "Chanthaburi",
    //       "provinceNameTh": "จันทบุรี"
    //     },
    //     {
    //       "id": 14,
    //       "provinceCode": 23,
    //       "provinceNameEn": "Trat",
    //       "provinceNameTh": "ตราด"
    //     },
    //     {
    //       "id": 15,
    //       "provinceCode": 24,
    //       "provinceNameEn": "Chachoengsao",
    //       "provinceNameTh": "ฉะเชิงเทรา"
    //     },
    //     {
    //       "id": 16,
    //       "provinceCode": 25,
    //       "provinceNameEn": "Prachin Buri",
    //       "provinceNameTh": "ปราจีนบุรี"
    //     },
    //     {
    //       "id": 17,
    //       "provinceCode": 26,
    //       "provinceNameEn": "Nakhon Nayok",
    //       "provinceNameTh": "นครนายก"
    //     },
    //     {
    //       "id": 18,
    //       "provinceCode": 27,
    //       "provinceNameEn": "Sa Kaeo",
    //       "provinceNameTh": "สระแก้ว"
    //     },
    //     {
    //       "id": 19,
    //       "provinceCode": 30,
    //       "provinceNameEn": "Nakhon Ratchasima",
    //       "provinceNameTh": "นครราชสีมา"
    //     },
    //     {
    //       "id": 20,
    //       "provinceCode": 31,
    //       "provinceNameEn": "Buri Ram",
    //       "provinceNameTh": "บุรีรัมย์"
    //     },
    //     {
    //       "id": 21,
    //       "provinceCode": 32,
    //       "provinceNameEn": "Surin",
    //       "provinceNameTh": "สุรินทร์"
    //     },
    //     {
    //       "id": 22,
    //       "provinceCode": 33,
    //       "provinceNameEn": "Si Sa Ket",
    //       "provinceNameTh": "ศรีสะเกษ"
    //     },
    //     {
    //       "id": 23,
    //       "provinceCode": 34,
    //       "provinceNameEn": "Ubon Ratchathani",
    //       "provinceNameTh": "อุบลราชธานี"
    //     },
    //     {
    //       "id": 24,
    //       "provinceCode": 35,
    //       "provinceNameEn": "Yasothon",
    //       "provinceNameTh": "ยโสธร"
    //     },
    //     {
    //       "id": 25,
    //       "provinceCode": 36,
    //       "provinceNameEn": "Chaiyaphum",
    //       "provinceNameTh": "ชัยภูมิ"
    //     },
    //     {
    //       "id": 26,
    //       "provinceCode": 37,
    //       "provinceNameEn": "Amnat Charoen",
    //       "provinceNameTh": "อำนาจเจริญ"
    //     },
    //     {
    //       "id": 27,
    //       "provinceCode": 38,
    //       "provinceNameEn": "Bueng Kan",
    //       "provinceNameTh": "บึงกาฬ"
    //     },
    //     {
    //       "id": 28,
    //       "provinceCode": 39,
    //       "provinceNameEn": "Nong Bua Lam Phu",
    //       "provinceNameTh": "หนองบัวลำภู"
    //     },
    //     {
    //       "id": 29,
    //       "provinceCode": 40,
    //       "provinceNameEn": "Khon Kaen",
    //       "provinceNameTh": "ขอนแก่น"
    //     },
    //     {
    //       "id": 30,
    //       "provinceCode": 41,
    //       "provinceNameEn": "Udon Thani",
    //       "provinceNameTh": "อุดรธานี"
    //     },
    //     {
    //       "id": 31,
    //       "provinceCode": 42,
    //       "provinceNameEn": "Loei",
    //       "provinceNameTh": "เลย"
    //     },
    //     {
    //       "id": 32,
    //       "provinceCode": 43,
    //       "provinceNameEn": "Nong Khai",
    //       "provinceNameTh": "หนองคาย"
    //     },
    //     {
    //       "id": 33,
    //       "provinceCode": 44,
    //       "provinceNameEn": "Maha Sarakham",
    //       "provinceNameTh": "มหาสารคาม"
    //     },
    //     {
    //       "id": 34,
    //       "provinceCode": 45,
    //       "provinceNameEn": "Roi Et",
    //       "provinceNameTh": "ร้อยเอ็ด"
    //     },
    //     {
    //       "id": 35,
    //       "provinceCode": 46,
    //       "provinceNameEn": "Kalasin",
    //       "provinceNameTh": "กาฬสินธุ์"
    //     },
    //     {
    //       "id": 36,
    //       "provinceCode": 47,
    //       "provinceNameEn": "Sakon Nakhon",
    //       "provinceNameTh": "สกลนคร"
    //     },
    //     {
    //       "id": 37,
    //       "provinceCode": 48,
    //       "provinceNameEn": "Nakhon Phanom",
    //       "provinceNameTh": "นครพนม"
    //     },
    //     {
    //       "id": 38,
    //       "provinceCode": 49,
    //       "provinceNameEn": "Mukdahan",
    //       "provinceNameTh": "มุกดาหาร"
    //     },
    //     {
    //       "id": 39,
    //       "provinceCode": 50,
    //       "provinceNameEn": "Chiang Mai",
    //       "provinceNameTh": "เชียงใหม่"
    //     },
    //     {
    //       "id": 40,
    //       "provinceCode": 51,
    //       "provinceNameEn": "Lamphun",
    //       "provinceNameTh": "ลำพูน"
    //     },
    //     {
    //       "id": 41,
    //       "provinceCode": 52,
    //       "provinceNameEn": "Lampang",
    //       "provinceNameTh": "ลำปาง"
    //     },
    //     {
    //       "id": 42,
    //       "provinceCode": 53,
    //       "provinceNameEn": "Uttaradit",
    //       "provinceNameTh": "อุตรดิตถ์"
    //     },
    //     {
    //       "id": 43,
    //       "provinceCode": 54,
    //       "provinceNameEn": "Phrae",
    //       "provinceNameTh": "แพร่"
    //     },
    //     {
    //       "id": 44,
    //       "provinceCode": 55,
    //       "provinceNameEn": "Nan",
    //       "provinceNameTh": "น่าน"
    //     },
    //     {
    //       "id": 45,
    //       "provinceCode": 56,
    //       "provinceNameEn": "Phayao",
    //       "provinceNameTh": "พะเยา"
    //     },
    //     {
    //       "id": 46,
    //       "provinceCode": 57,
    //       "provinceNameEn": "Chiang Rai",
    //       "provinceNameTh": "เชียงราย"
    //     },
    //     {
    //       "id": 47,
    //       "provinceCode": 58,
    //       "provinceNameEn": "Mae Hong Son",
    //       "provinceNameTh": "แม่ฮ่องสอน"
    //     },
    //     {
    //       "id": 48,
    //       "provinceCode": 60,
    //       "provinceNameEn": "Nakhon Sawan",
    //       "provinceNameTh": "นครสวรรค์"
    //     },
    //     {
    //       "id": 49,
    //       "provinceCode": 61,
    //       "provinceNameEn": "Uthai Thani",
    //       "provinceNameTh": "อุทัยธานี"
    //     },
    //     {
    //       "id": 50,
    //       "provinceCode": 62,
    //       "provinceNameEn": "Kamphaeng Phet",
    //       "provinceNameTh": "กำแพงเพชร"
    //     },
    //     {
    //       "id": 51,
    //       "provinceCode": 63,
    //       "provinceNameEn": "Tak",
    //       "provinceNameTh": "ตาก"
    //     },
    //     {
    //       "id": 52,
    //       "provinceCode": 64,
    //       "provinceNameEn": "Sukhothai",
    //       "provinceNameTh": "สุโขทัย"
    //     },
    //     {
    //       "id": 53,
    //       "provinceCode": 65,
    //       "provinceNameEn": "Phitsanulok",
    //       "provinceNameTh": "พิษณุโลก"
    //     },
    //     {
    //       "id": 54,
    //       "provinceCode": 66,
    //       "provinceNameEn": "Phichit",
    //       "provinceNameTh": "พิจิตร"
    //     },
    //     {
    //       "id": 55,
    //       "provinceCode": 67,
    //       "provinceNameEn": "Phetchabun",
    //       "provinceNameTh": "เพชรบูรณ์"
    //     },
    //     {
    //       "id": 56,
    //       "provinceCode": 70,
    //       "provinceNameEn": "Ratchaburi",
    //       "provinceNameTh": "ราชบุรี"
    //     },
    //     {
    //       "id": 57,
    //       "provinceCode": 71,
    //       "provinceNameEn": "Kanchanaburi",
    //       "provinceNameTh": "กาญจนบุรี"
    //     },
    //     {
    //       "id": 58,
    //       "provinceCode": 72,
    //       "provinceNameEn": "Suphan Buri",
    //       "provinceNameTh": "สุพรรณบุรี"
    //     },
    //     {
    //       "id": 59,
    //       "provinceCode": 73,
    //       "provinceNameEn": "Nakhon Pathom",
    //       "provinceNameTh": "นครปฐม"
    //     },
    //     {
    //       "id": 60,
    //       "provinceCode": 74,
    //       "provinceNameEn": "Samut Sakhon",
    //       "provinceNameTh": "สมุทรสาคร"
    //     },
    //     {
    //       "id": 61,
    //       "provinceCode": 75,
    //       "provinceNameEn": "Samut Songkhram",
    //       "provinceNameTh": "สมุทรสงคราม"
    //     },
    //     {
    //       "id": 62,
    //       "provinceCode": 76,
    //       "provinceNameEn": "Phetchaburi",
    //       "provinceNameTh": "เพชรบุรี"
    //     },
    //     {
    //       "id": 63,
    //       "provinceCode": 77,
    //       "provinceNameEn": "Prachuap Khiri Khan",
    //       "provinceNameTh": "ประจวบคีรีขันธ์"
    //     },
    //     {
    //       "id": 64,
    //       "provinceCode": 80,
    //       "provinceNameEn": "Nakhon Si Thammarat",
    //       "provinceNameTh": "นครศรีธรรมราช"
    //     },
    //     {
    //       "id": 65,
    //       "provinceCode": 81,
    //       "provinceNameEn": "Krabi",
    //       "provinceNameTh": "กระบี่"
    //     },
    //     {
    //       "id": 66,
    //       "provinceCode": 82,
    //       "provinceNameEn": "Phangnga",
    //       "provinceNameTh": "พังงา"
    //     },
    //     {
    //       "id": 67,
    //       "provinceCode": 83,
    //       "provinceNameEn": "Phuket",
    //       "provinceNameTh": "ภูเก็ต"
    //     },
    //     {
    //       "id": 68,
    //       "provinceCode": 84,
    //       "provinceNameEn": "Surat Thani",
    //       "provinceNameTh": "สุราษฎร์ธานี"
    //     },
    //     {
    //       "id": 69,
    //       "provinceCode": 85,
    //       "provinceNameEn": "Ranong",
    //       "provinceNameTh": "ระนอง"
    //     },
    //     {
    //       "id": 70,
    //       "provinceCode": 86,
    //       "provinceNameEn": "Chumphon",
    //       "provinceNameTh": "ชุมพร"
    //     },
    //     {
    //       "id": 71,
    //       "provinceCode": 90,
    //       "provinceNameEn": "Songkhla",
    //       "provinceNameTh": "สงขลา"
    //     },
    //     {
    //       "id": 72,
    //       "provinceCode": 91,
    //       "provinceNameEn": "Satun",
    //       "provinceNameTh": "สตูล"
    //     },
    //     {
    //       "id": 73,
    //       "provinceCode": 92,
    //       "provinceNameEn": "Trang",
    //       "provinceNameTh": "ตรัง"
    //     },
    //     {
    //       "id": 74,
    //       "provinceCode": 93,
    //       "provinceNameEn": "Phatthalung",
    //       "provinceNameTh": "พัทลุง"
    //     },
    //     {
    //       "id": 75,
    //       "provinceCode": 94,
    //       "provinceNameEn": "Pattani",
    //       "provinceNameTh": "ปัตตานี"
    //     },
    //     {
    //       "id": 76,
    //       "provinceCode": 95,
    //       "provinceNameEn": "Yala",
    //       "provinceNameTh": "ยะลา"
    //     },
    //     {
    //       "id": 77,
    //       "provinceCode": 96,
    //       "provinceNameEn": "Narathiwat",
    //       "provinceNameTh": "นราธิวาส"
    //     }
    //   ]
    
    let subdistrictraw = ' ...'
    
    //   const transformedProvinces = provinceJson.map(({ provinceNameEn,provinceNameTh,provinceCode,id, ...rest }) => ({
    //     ...rest,
    //     province_name_en: provinceNameEn, // Rename the key
    //     province_name_th: provinceNameTh,
    //     province_code: ''+ provinceCode,
    //     province_id: id
    // }));
    

   

                     

    // const transformedDistrict = district.map(({districtNameEn, districtNameTh, id,provinceCode, postalCode,districtCode, ...rest}) =>({
    //     ...rest,
    //     district_id: id,
    //     district_name_en : districtNameEn,
    //     district_name_th: districtNameTh,
    //     district_code:''+ districtCode,
    //     postal_code:''+ postalCode,
    //     province_code :''+ provinceCode

    // }))

 
   const uni = [
    {
        "university": "มหาวิทยาลัยกาฬสินธุ์",
        "thCode": "มกส.",
        "enCode": "KSU"
    },
    {
        "university": "มหาวิทยาลัยนครพนม",
        "thCode": "มนพ.",
        "enCode": "NPU"
    },
    {
        "university": "มหาวิทยาลัยนราธิวาสราชนครินทร์",
        "thCode": "มนร.",
        "enCode": "PNU"
    },
    {
        "university": "มหาวิทยาลัยนเรศวร",
        "thCode": "มน.",
        "enCode": "NU"
    },
    {
        "university": "มหาวิทยาลัยมหาสารคาม",
        "thCode": "มมส.",
        "enCode": "MSU"
    },
    {
        "university": "มหาวิทยาลัยรามคำแหง",
        "thCode": "มร.",
        "enCode": "RU"
    },
    {
        "university": "มหาวิทยาลัยสุโขทัยธรรมาธิราช",
        "thCode": "มสธ.",
        "enCode": "STOU"
    },
    {
        "university": "มหาวิทยาลัยอุบลราชธานี",
        "thCode": "ม.อบ.",
        "enCode": "UBU"
    },
    {
        "university": "สถาบันบัณฑิตพัฒนบริหารศาสตร์",
        "thCode": "สพบ.",
        "enCode": "นิด้า (NIDA)"
    },
    {
        "university": "สถาบันเทคโนโลยีปทุมวัน",
        "thCode": "สปท.",
        "enCode": "PIT"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏกาญจนบุรี",
        "thCode": "มร.กจ.",
        "enCode": "KRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏกำแพงเพชร",
        "thCode": "มรภ.กพ.",
        "enCode": "KPRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏจันทรเกษม",
        "thCode": "มจษ.",
        "enCode": "CRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏชัยภูมิ",
        "thCode": "มชย.",
        "enCode": "CPRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏเชียงราย",
        "thCode": "มร.ชร.",
        "enCode": "CRRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏเชียงใหม่",
        "thCode": "มร.ชม.",
        "enCode": "CMRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏเทพสตรี",
        "thCode": "มรท.",
        "enCode": "TRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏธนบุรี",
        "thCode": "มรธ.",
        "enCode": "DRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏนครปฐม",
        "thCode": "มรน.",
        "enCode": "NPRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏนครราชสีมา",
        "thCode": "มร.นม.",
        "enCode": "NRRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏนครศรีธรรมราช",
        "thCode": "มร.นศ.",
        "enCode": "NSTRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏนครสวรรค์",
        "thCode": "มร.นว.",
        "enCode": "NSRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏบ้านสมเด็จเจ้าพระยา",
        "thCode": "มบส.",
        "enCode": "BSRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏบุรีรัมย์",
        "thCode": "มรภ.บร.",
        "enCode": "BRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏพระนคร",
        "thCode": "มรภ.พระนคร",
        "enCode": "PNRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏพระนครศรีอยุธยา",
        "thCode": "มร.อย.",
        "enCode": "ARU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏพิบูลสงคราม",
        "thCode": "มร.พส.",
        "enCode": "PSRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏเพชรบุรี",
        "thCode": "มรภ.พบ.",
        "enCode": "PBRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏเพชรบูรณ์",
        "thCode": "มร.พช.",
        "enCode": "PCRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏภูเก็ต",
        "thCode": "มรภ.",
        "enCode": "PKRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏมหาสารคาม",
        "thCode": "มรม.",
        "enCode": "RMU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏยะลา",
        "thCode": "มรย.",
        "enCode": "YRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏร้อยเอ็ด",
        "thCode": "มรภ.รอ.",
        "enCode": "RERU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏราชนครินทร์",
        "thCode": "มรร.",
        "enCode": "RRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏรำไพพรรณี",
        "thCode": "มร.รพ.",
        "enCode": "RBRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏลำปาง",
        "thCode": "มร.ลป.",
        "enCode": "LPRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏเลย",
        "thCode": "มรล.",
        "enCode": "LRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์",
        "thCode": "มรว.",
        "enCode": "VRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏศรีสะเกษ",
        "thCode": "มรภ.ศก.",
        "enCode": "SSKRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏสกลนคร",
        "thCode": "มร.สน.",
        "enCode": "SNRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏสงขลา",
        "thCode": "มรภ.สข.",
        "enCode": "SKRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏสวนสุนันทา",
        "thCode": "มร.สส.",
        "enCode": "SSRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏสุราษฎร์ธานี",
        "thCode": "มรส.",
        "enCode": "SRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏสุรินทร์",
        "thCode": "มรภ.สร.",
        "enCode": "SRRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏหมู่บ้านจอมบึง",
        "thCode": "มร.มจ.",
        "enCode": "MCRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏอุดรธานี",
        "thCode": "มร.อด.",
        "enCode": "UDRU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏอุตรดิตถ์",
        "thCode": "มรอ.",
        "enCode": "URU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏอุบลราชธานี",
        "thCode": "มรภ.อบ.",
        "enCode": "UBRU"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ",
        "thCode": "มทร.กรุงเทพ",
        "enCode": "RMUTK"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก",
        "thCode": "มทร.ตะวันออก",
        "enCode": "RMUTTO"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี",
        "thCode": "มทร.ธัญบุรี",
        "enCode": "RMUTT"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร",
        "thCode": "มทร.พระนคร",
        "enCode": "RMUTP"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีราชมงคลรัตนโกสินทร์",
        "thCode": "มทร.รัตนโกสินทร์",
        "enCode": "RMUTR"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา",
        "thCode": "มทร.ล้านนา",
        "enCode": "RMUTL"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย",
        "thCode": "มทร.ศรีวิชัย",
        "enCode": "RMUTSV"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ",
        "thCode": "มทร.สุวรรณภูมิ",
        "enCode": "RUS"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน",
        "thCode": "มทร.อีสาน",
        "enCode": "RMUTI"
    },
    {
        "university": "สถาบันการอาชีวศึกษาเกษตรภาคเหนือ",
        "thCode": "สอกน.",
        "enCode": "NVIA"
    },
    {
        "university": "สถาบันการอาชีวศึกษาเกษตรภาคใต้",
        "thCode": "สอกต.",
        "enCode": "SVIA"
    },
    {
        "university": "สถาบันการอาชีวศึกษาเกษตรภาคกลาง",
        "thCode": "สอกก.",
        "enCode": "IVACRER"
    },
    {
        "university": "สถาบันการอาชีวศึกษาเกษตรภาคตะวันออกเฉียงเหนือ",
        "thCode": "สอกฉ.",
        "enCode": "NEVIA"
    },
    {
        "university": "สถาบันการอาชีวศึกษากรุงเทพมหานคร",
        "thCode": "สอกท.",
        "enCode": "IVEB"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคเหนือ ๑",
        "thCode": "สอน. ๑",
        "enCode": "IVEN 1"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคเหนือ ๒",
        "thCode": "สอน. ๒",
        "enCode": "IVENR 2"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคเหนือ ๓",
        "thCode": "สอน. ๓",
        "enCode": "IVEN 3"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคเหนือ ๔",
        "thCode": "สอน. ๔",
        "enCode": "IVENR 4"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคใต้ ๑",
        "thCode": "สอต. ๑",
        "enCode": "VEIS 1"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคใต้ ๒",
        "thCode": "สอต. ๒",
        "enCode": "VEIS 2"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคใต้ ๓",
        "thCode": "สอต. ๓",
        "enCode": "VEIS 3"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคกลาง ๑",
        "thCode": "สอก. ๑",
        "enCode": "CVEI 1"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคกลาง ๒",
        "thCode": "สอก. ๒",
        "enCode": "IVECR 2"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคกลาง ๓",
        "thCode": "สอก. ๓",
        "enCode": "IVEC 3"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคกลาง ๔",
        "thCode": "สอก. ๔",
        "enCode": "IVEC 4"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคกลาง ๕",
        "thCode": "สอก. ๕",
        "enCode": "VEI 5"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคตะวันออก",
        "thCode": "สออ.",
        "enCode": "EIVT"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคตะวันออกเฉียงเหนือ ๑",
        "thCode": "สอฉ. ๑",
        "enCode": "IVENE 1"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคตะวันออกเฉียงเหนือ ๒",
        "thCode": "สอฉ. ๒",
        "enCode": "IVENE 2"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคตะวันออกเฉียงเหนือ ๓",
        "thCode": "สอฉ. ๓",
        "enCode": "IVENE 3"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคตะวันออกเฉียงเหนือ ๔",
        "thCode": "สอฉ. ๔",
        "enCode": "IVENE 4"
    },
    {
        "university": "สถาบันการอาชีวศึกษาภาคตะวันออกเฉียงเหนือ ๕",
        "thCode": "สอฉ. ๕",
        "enCode": "IVENE 5"
    },
    {
        "university": "โรงเรียนนายร้อยตำรวจ",
        "thCode": "รร.นรต.",
        "enCode": "RPCA"
    },
    {
        "university": "โรงเรียนนายร้อยพระจุลจอมเกล้า",
        "thCode": "รร.จปร.",
        "enCode": "CRMA"
    },
    {
        "university": "โรงเรียนนายเรือ",
        "thCode": "รร.นร.",
        "enCode": "RTNA"
    },
    {
        "university": "โรงเรียนนายเรืออากาศนวมินทกษัตริยาธิราช",
        "thCode": "รร.นนก.",
        "enCode": "NKRAFA"
    },
    {
        "university": "วิทยาลัยพยาบาลกองทัพบก"
    },
    {
        "university": "วิทยาลัยพยาบาลกองทัพเรือ"
    },
    {
        "university": "วิทยาลัยพยาบาลตำรวจ"
    },
    {
        "university": "วิทยาลัยพยาบาลทหารอากาศ"
    },
    {
        "university": "วิทยาลัยแพทยศาสตร์พระมงกุฎเกล้า",
        "thCode": "วพม.",
        "enCode": "PCM"
    },
    {
        "university": "วิทยาลัยการชลประทาน",
        "thCode": "วชป."
    },
    {
        "university": "สถาบันการบินพลเรือน",
        "thCode": "สบพ.",
        "enCode": "CATC"
    },
    {
        "university": "สถาบันการพลศึกษา",
        "thCode": "สพล.",
        "enCode": "IPE"
    },
    {
        "university": "สถาบันบัณฑิตพัฒนศิลป์",
        "thCode": "BPI"
    },
    {
        "university": "สถาบันพระบรมราชชนก",
        "thCode": "สบช.",
        "enCode": "PI"
    },
    {
        "university": "ศูนย์ฝึกพาณิชย์นาวี",
        "thCode": "MMTC"
    },
    {
        "university": "มหาวิทยาลัยเกษตรศาสตร์",
        "thCode": "มก.",
        "enCode": "KU"
    },
    {
        "university": "มหาวิทยาลัยขอนแก่น",
        "thCode": "มข.",
        "enCode": "KKU"
    },
    {
        "university": "จุฬาลงกรณ์มหาวิทยาลัย",
        "thCode": "จุฬาฯ",
        "enCode": "CU"
    },
    {
        "university": "มหาวิทยาลัยเชียงใหม่",
        "thCode": "มช.",
        "enCode": "CMU"
    },
    {
        "university": "มหาวิทยาลัยทักษิณ",
        "thCode": "มทษ.",
        "enCode": "TSU"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
        "thCode": "มจธ.",
        "enCode": "KMUTT"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
        "thCode": "มจพ.",
        "enCode": "KMUTNB"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีสุรนารี",
        "thCode": "มทส.",
        "enCode": "SUT"
    },
    {
        "university": "มหาวิทยาลัยธรรมศาสตร์",
        "thCode": "มธ.",
        "enCode": "TU"
    },
    {
        "university": "มหาวิทยาลัยนวมินทราธิราช",
        "thCode": "นมร.",
        "enCode": "NMU"
    },
    {
        "university": "มหาวิทยาลัยบูรพา",
        "thCode": "มบ.",
        "enCode": "BUU"
    },
    {
        "university": "มหาวิทยาลัยพะเยา",
        "thCode": "มพ.",
        "enCode": "UP"
    },
    {
        "university": "มหาวิทยาลัยมหาจุฬาลงกรณราชวิทยาลัย",
        "thCode": "มจร",
        "enCode": "MCU"
    },
    {
        "university": "มหาวิทยาลัยมหามกุฏราชวิทยาลัย",
        "thCode": "มมร",
        "enCode": "MBU"
    },
    {
        "university": "มหาวิทยาลัยมหิดล",
        "thCode": "มม.",
        "enCode": "MU"
    },
    {
        "university": "มหาวิทยาลัยแม่โจ้",
        "thCode": "มมจ.",
        "enCode": "MJU"
    },
    {
        "university": "มหาวิทยาลัยแม่ฟ้าหลวง",
        "thCode": "มฟล.",
        "enCode": "MFU"
    },
    {
        "university": "มหาวิทยาลัยวลัยลักษณ์",
        "thCode": "มวล.",
        "enCode": "WU"
    },
    {
        "university": "มหาวิทยาลัยศรีนครินทรวิโรฒ",
        "thCode": "มศว",
        "enCode": "SWU"
    },
    {
        "university": "มหาวิทยาลัยศิลปากร",
        "thCode": "มศก.",
        "enCode": "SU"
    },
    {
        "university": "มหาวิทยาลัยสงขลานครินทร์",
        "thCode": "ม.อ.",
        "enCode": "PSU"
    },
    {
        "university": "มหาวิทยาลัยสวนดุสิต",
        "thCode": "มสด.",
        "enCode": "SDU"
    },
    {
        "university": "สถาบันการพยาบาลศรีสวรินทิรา สภากาชาดไทย"
    },
    {
        "university": "สถาบันดนตรีกัลยาณิวัฒนา",
        "thCode": "สกว.",
        "enCode": "PGVIM"
    },
    {
        "university": "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
        "thCode": "สจล.",
        "enCode": "KMITL"
    },
    {
        "university": "สถาบันบัณฑิตศึกษาจุฬาภรณ์",
        "thCode": "สบจ.",
        "enCode": "CGI"
    },
    {
        "university": "วิทยาลัยวิทยาศาสตร์การแพทย์เจ้าฟ้าจุฬาภรณ์",
        "thCode": "PCCMS"
    },
    {
        "university": "มหาวิทยาลัยกรุงเทพสุวรรณภูมิ",
        "thCode": "มกส.",
        "enCode": "BSU"
    },
    {
        "university": "มหาวิทยาลัยการจัดการและเทคโนโลยีอีสเทิร์น",
        "thCode": "มจท.",
        "enCode": "UMT"
    },
    {
        "university": "มหาวิทยาลัยเกริก",
        "thCode": "มกร.",
        "enCode": "KRU"
    },
    {
        "university": "มหาวิทยาลัยเกษมบัณฑิต",
        "thCode": "มกบ.",
        "enCode": "KBU"
    },
    {
        "university": "มหาวิทยาลัยคริสเตียน",
        "thCode": "มคต.",
        "enCode": "CTU"
    },
    {
        "university": "มหาวิทยาลัยเฉลิมกาญจนา",
        "thCode": "มฉน.",
        "enCode": "CNU"
    },
    {
        "university": "มหาวิทยาลัยตาปี",
        "thCode": "มตป.",
        "enCode": "TPU"
    },
    {
        "university": "มหาวิทยาลัยเจ้าพระยา",
        "thCode": "มจพ.",
        "enCode": "CPU"
    },
    {
        "university": "มหาวิทยาลัยชินวัตร",
        "thCode": "มชว.",
        "enCode": "SIU"
    },
    {
        "university": "มหาวิทยาลัยเซนต์จอห์น",
        "thCode": "มซจ.",
        "enCode": "SJU"
    },
    {
        "university": "มหาวิทยาลัยเทคโนโลยีมหานคร",
        "thCode": "มทม.",
        "enCode": "MUT"
    },
    {
        "university": "มหาวิทยาลัยธนบุรี",
        "thCode": "มธร.",
        "enCode": "TRU"
    },
    {
        "university": "มหาวิทยาลัยธุรกิจบัณฑิตย์",
        "thCode": "มธบ.",
        "enCode": "DPU"
    },
    {
        "university": "มหาวิทยาลัยนอร์ทกรุงเทพ",
        "thCode": "มนก.",
        "enCode": "NBU"
    },
    {
        "university": "มหาวิทยาลัยนอร์ท-เชียงใหม่",
        "thCode": "มนช.",
        "enCode": "NCU"
    },
    {
        "university": "มหาวิทยาลัยนานาชาติแสตมฟอร์ด",
        "thCode": "มนชส.",
        "enCode": "STIU"
    },
    {
        "university": "มหาวิทยาลัยนานาชาติเอเชีย-แปซิฟิก",
        "thCode": "มนอ.",
        "enCode": "AIU"
    },
    {
        "university": "มหาวิทยาลัยเนชั่น",
        "thCode": "มนช.",
        "enCode": "NTU"
    },
    {
        "university": "มหาวิทยาลัยปทุมธานี",
        "thCode": "มปท.",
        "enCode": "PTU"
    },
    {
        "university": "มหาวิทยาลัยพายัพ",
        "thCode": "มพย.",
        "enCode": "PYU"
    },
    {
        "university": "มหาวิทยาลัยพิษณุโลก",
        "thCode": "มพล.",
        "enCode": "PLU"
    },
    {
        "university": "มหาวิทยาลัยฟาฏอนี",
        "thCode": "มฟน.",
        "enCode": "FTU"
    },
    {
        "university": "มหาวิทยาลัยฟาร์อีสเทอร์น",
        "thCode": "มฟอ.",
        "enCode": "FEU"
    },
    {
        "university": "มหาวิทยาลัยภาคกลาง",
        "thCode": "ม.ภก.",
        "enCode": "UCT"
    },
    {
        "university": "มหาวิทยาลัยภาคตะวันออกเฉียงเหนือ",
        "thCode": "มภน.",
        "enCode": "NEU"
    },
    {
        "university": "มหาวิทยาลัยรังสิต",
        "thCode": "มรส.",
        "enCode": "RSU"
    },
    {
        "university": "มหาวิทยาลัยรัตนบัณฑิต",
        "thCode": "มรบ.",
        "enCode": "RBAC"
    },
    {
        "university": "มหาวิทยาลัยราชธานี",
        "thCode": "มรธ.",
        "enCode": "RTU"
    },
    {
        "university": "มหาวิทยาลัยราชพฤกษ์",
        "thCode": "มรพ.",
        "enCode": "RPU"
    },
    {
        "university": "มหาวิทยาลัยวงษ์ชวลิตกุล",
        "thCode": "มว.",
        "enCode": "VU"
    },
    {
        "university": "มหาวิทยาลัยเว็บสเตอร์ (ประเทศไทย)",
        "thCode": "มวท.",
        "enCode": "WTUT"
    },
    {
        "university": "มหาวิทยาลัยเวสเทิร์น",
        "thCode": "มท.",
        "enCode": "WTU"
    },
    {
        "university": "มหาวิทยาลัยศรีปทุม",
        "thCode": "มศป.",
        "enCode": "SPU"
    },
    {
        "university": "มหาวิทยาลัยสยาม",
        "thCode": "มส.",
        "enCode": "SU"
    },
    {
        "university": "มหาวิทยาลัยหอการค้าไทย",
        "thCode": "มกค.",
        "enCode": "UTCC"
    },
    {
        "university": "มหาวิทยาลัยหัวเฉียวเฉลิมพระเกียรติ",
        "thCode": "มฉก.",
        "enCode": "HCU"
    },
    {
        "university": "มหาวิทยาลัยหาดใหญ่",
        "thCode": "มหญ.",
        "enCode": "HU"
    },
    {
        "university": "มหาวิทยาลัยอัสสัมชัญ",
        "thCode": "มอช.",
        "enCode": "ABAC"
    },
    {
        "university": "มหาวิทยาลัยอีสเทิร์นเอเชีย",
        "thCode": "มอท.",
        "enCode": "EAU"
    },
    {
        "university": "มหาวิทยาลัยเอเชียอาคเนย์",
        "thCode": "มออ.",
        "enCode": "SAU"
    },
    {
        "university": "สถาบันกันตนา",
        "thCode": "สก.",
        "enCode": "KI"
    },
    {
        "university": "สถาบันการจัดการปัญญาภิวัฒน์",
        "thCode": "สกป.",
        "enCode": "PIM"
    },
    {
        "university": "สถาบันวิทยาการจัดการแห่งแปซิฟิค",
        "thCode": "สวป.",
        "enCode": "PIMS"
    },
    {
        "university": "สถาบันการเรียนรู้เพื่อปวงชน",
        "thCode": "สรพ.",
        "enCode": "LIFE"
    },
    {
        "university": "สถาบันเทคโนโลยีไทย-ญี่ปุ่น",
        "thCode": "สทญ.",
        "enCode": "TNI"
    },
    {
        "university": "สถาบันเทคโนโลยียานยนต์มหาชัย",
        "thCode": "สทม.",
        "enCode": "MIAT"
    },
    {
        "university": "สถาบันเทคโนโลยีแห่งสุวรรณภูมิ",
        "thCode": "สทส.",
        "enCode": "SVIT"
    },
    {
        "university": "สถาบันเทคโนโลยีแห่งอโยธยา",
        "thCode": "สทอ.",
        "enCode": "ITA"
    },
    {
        "university": "สถาบันเทคโนโลยีแห่งเอเชีย",
        "thCode": "สทอ.",
        "enCode": "AIT"
    },
    {
        "university": "สถาบันรัชต์ภาคย์",
        "thCode": "สรภ.",
        "enCode": "RPI"
    },
    {
        "university": "สถาบันวิทยสิริเมธี",
        "thCode": "สวส.",
        "enCode": "VISTEC"
    },
    {
        "university": "สถาบันอาศรมศิลป์",
        "thCode": "สอศ.",
        "enCode": "ASIA"
    },
    {
        "university": "วิทยาลัยเฉลิมกาญจนาระยอง",
        "thCode": "วฉก.",
        "enCode": "CKC"
    },
    {
        "university": "วิทยาลัยเชียงราย",
        "thCode": "ว.ชร.",
        "enCode": "CRC"
    },
    {
        "university": "วิทยาลัยเซนต์หลุยส์",
        "thCode": "วซล.",
        "enCode": "SLC"
    },
    {
        "university": "วิทยาลัยเซาธ์อีสท์บางกอก",
        "thCode": "ว.ซอบ.",
        "enCode": "SBC"
    },
    {
        "university": "วิทยาลัยดุสิตธานี",
        "thCode": "วดธ.",
        "enCode": "DTC"
    },
    {
        "university": "วิทยาลัยทองสุข",
        "thCode": "วทส.",
        "enCode": "TSC"
    },
    {
        "university": "วิทยาลัยเทคโนโลยีจิตรลดา",
        "thCode": "วทจด.",
        "enCode": "CDTC"
    },
    {
        "university": "วิทยาลัยเทคโนโลยีพนมวันท์",
        "thCode": "วทพ.",
        "enCode": "PCT"
    },
    {
        "university": "วิทยาลัยเทคโนโลยีภาคใต้",
        "thCode": "วทต.",
        "enCode": "SCT"
    },
    {
        "university": "วิทยาลัยเทคโนโลยีสยาม",
        "thCode": "วทส.",
        "enCode": "STC"
    },
    {
        "university": "วิทยาลัยนครราชสีมา",
        "thCode": "วนม.",
        "enCode": "NMC"
    },
    {
        "university": "วิทยาลัยนานาชาติเซนต์เทเรซา",
        "thCode": "วนซท.",
        "enCode": "STIC"
    },
    {
        "university": "วิทยาลัยนานาชาติราฟเฟิลส์",
        "thCode": "วนร.",
        "enCode": "RIC"
    },
    {
        "university": "วิทยาลัยบัณฑิตเอเซีย",
        "thCode": "วบอ.",
        "enCode": "CAS"
    },
    {
        "university": "วิทยาลัยพิชญบัณฑิต",
        "thCode": "วพบ.",
        "enCode": "PCBC"
    },
    {
        "university": "วิทยาลัยพุทธศาสนานานาชาติ",
        "thCode": "วพน.",
        "enCode": "IBC"
    },
    {
        "university": "วิทยาลัยนอร์ทเทิร์น",
        "thCode": "วนท.",
        "enCode": "NTC"
    },
    {
        "university": "วิทยาลัยสันตพล",
        "thCode": "วสพ.",
        "enCode": "STC"
    },
    {
        "university": "วิทยาลัยแสงธรรม",
        "thCode": "วสธ.",
        "enCode": "STC"
    },
    {
        "university": "วิทยาลัยอินเตอร์เทคลำปาง",
        "thCode": "วอล.",
        "enCode": "LIT"
    },
    {
        "university": "สถาบันเทคโนโลยีพระจอมเกล้า"
    },
    {
        "university": "มหาวิทยาลัยนานาชาติศิรินสยาม"
    },
    {
        "university": "มหาวิทยาลัยบริติช (ประเทศไทย)"
    },
    {
        "university": "วิทยาลัยบัณฑิตสกลนคร"
    },
    {
        "university": "วิทยาลัยพัฒนา"
    },
    {
        "university": "มหาวิทยาลัยโยนก",
        "thCode": "มยน.",
        "enCode": "YNU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏกาฬสินธุ์",
        "thCode": "มกส.",
        "enCode": "KSU"
    },
    {
        "university": "มหาวิทยาลัยราชภัฏนครพนม"
    },
    {
        "university": "วิทยาลัยรามาอโยธยา"
    },
    {
        "university": "วิทยาลัยเทคโนโลยีราชธานีอุดร"
    },
    {
        "university": "วิทยาลัยศรีโสภณ",
        "thCode": "ว.ศส.",
        "enCode": "SSC"
    },
    {
        "university": "วิทยาลัยศรีอีสาน (คณาสวัสดิ์อุทิศ)"
    },
    {
        "university": "มหาวิทยาลัยอีสาน",
        "thCode": "ม.อส.",
        "enCode": "ESU"
    },
    {
        "university": "มหาวิทยาลัยเอเชียน",
        "thCode": "ม.เอเชียน",
        "enCode": "AsianU"
    },
    {
        "university": "มหาวิทยาลัยรัตนบัณฑิตวิทยาศาสตร์และเทคโนโลยี",
        "thCode": "มรวท.",
        "enCode": "RUST"
    },
    {
        "university": "มหาวิทยาลัยการกีฬาแห่งชาติ"
    },
    {
        "university": "มหาวิทยาลัยชุมพร"
    },
    {
        "university": "มหาวิทยาลัยตากสิน"
    },
    {
        "university": "มหาวิทยาลัยเทคนิคไทย-เยอรมัน ขอนแก่น หรือมหาวิทยาลัยเทคโนโลยีไทย-เยอรมัน ขอนแก่น"
    },
    {
        "university": "มหาวิทยาลัยนานาชาตินครแม่สอด"
    },
    {
        "university": "มหาวิทยาลัยน่าน"
    },
    {
        "university": "มหาวิทยาลัยพ่อหลวง หรือมหาวิทยาลัยประจวบคีรีขันธ์"
    },
    {
        "university": "มหาวิทยาลัยพระพุทธยอดฟ้าจุฬาโลก"
    },
    {
        "university": "มหาวิทยาลัยแพร่"
    },
    {
        "university": "มหาวิทยาลัยมุกดาหาร เฉลิมพระเกียรติ"
    },
    {
        "university": "มหาวิทยาลัยแม่ฮ่องสอน"
    },
    {
        "university": "มหาวิทยาลัยสุราษฎร์ธานี"
    },
    {
        "university": "มหาวิทยาลัยสุรินทร์"
    },
    {
        "university": "มหาวิทยาลัยหนองคาย"
    },
    {
        "university": "มหาวิทยาลัยอันดามัน"
    },
    {
        "university": "มหาวิทยาลัยอุดรธานี"
    },
    {
        "university": "สถาบันเทคโนโลยีจิตรลดา"
    }
]


    //   const transformedSubDistrict = subdistrictraw.map(({id, provinceCode,districtCode,subdistrictCode,subdistrictNameEn, subdistrictNameTh ,postalCode,...rest}) =>({
    //     ...rest,
    //     sub_district_id: id,
    //     province_code:''+ provinceCode,
    //     district_code:''+ districtCode,
    //     sub_district_code:''+ subdistrictCode,
    //     sub_district_name_en :subdistrictNameEn,
    //     sub_district_name_th :subdistrictNameTh,
    //     postal_code: ''+ postalCode
    // }))

    // const transformUni = uni.map(({ university, ...rest}) =>{
    //   ...rest,
    //   u
    // })

  const res =   await prisma.university.createMany({
        data:uni
    })
    

    console.log(res)
}

// createProvince()



// provinceJson.forEach(element => {
//     console.log(element.provinceNameEn)
// });



