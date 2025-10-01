'use client';

import { useState } from 'react';

interface Project {
  roomNo: string;
  occupants: { name: string; entity: string; phoneNo: string }[];
  gender: string;
  keyHolder: string;
}

const PROJECTS: Project[] = [
    {
      roomNo: "236",
      occupants: [
        { name: "Lakshitha Wijethunga", entity: "Ruhuna", phoneNo: "94767594953" },
        { name: "Uditha Ranasinghe", entity: "Ruhuna", phoneNo: "94772182472" },
        { name: "Linal Hansana", entity: "Ruhuna", phoneNo: "94704537041" }
      ],
      gender: "Male",
      keyHolder: "Lakshitha Wijethunga",
    },
    {
      roomNo: "237",
      occupants: [
        { name: "Mahima Yasas", entity: "USJ", phoneNo: "94766355536" },
        { name: "Tharuka Gunarathne", entity: "USJ", phoneNo: "94767575568" },
        { name: "Dulain Jayasumana", entity: "USJ", phoneNo: "94701506924" }
      ],
      gender: "Male",
      keyHolder: "Mahima Yasas",
    },
    {
      roomNo: "238",
      occupants: [
        { name: "Chelaka Wijesekara", entity: "SLIIT", phoneNo: "94769430928" },
        { name: "Dilum Kalubowila", entity: "SLIIT", phoneNo: "94711920878" },
        { name: "Yenul Perera", entity: "SLIIT", phoneNo: "94774791096" }
      ],
      gender: "Male",
      keyHolder: "Chelaka Wijesekara",
    },
    {
      roomNo: "239",
      occupants: [
        { name: "Godfri John", entity: "CC", phoneNo: "94787093942" }
      ],
      gender: "Male",
      keyHolder: "Godfri John",
    },
    {
      roomNo: "240",
      occupants: [
        { name: "Mohamad Shaahid", entity: "NSBM", phoneNo: "94707260460" },
        { name: "Yehan Namarathna", entity: "NSBM", phoneNo: "94716135868" },
        { name: "Vismitha Gunasekara", entity: "NSBM", phoneNo: "94788298929" }
      ],
      gender: "Male",
      keyHolder: "Mohamad Shaahid",
    },
    {
      roomNo: "241",
      occupants: [
        { name: "Lahiru Dinusha", entity: "Kandy", phoneNo: "94767208047" },
        { name: "Sudeera Jayarathna", entity: "Kandy", phoneNo: "94779708258" },
        { name: "Vihanga Deemantha", entity: "Kandy", phoneNo: "94771141262" }
      ],
      gender: "Male",
      keyHolder: "Lahiru Dinusha",
    },
    {
      roomNo: "242",
      occupants: [
        { name: "Divya Dulanjali", entity: "NIBM", phoneNo: "94776022600" },
        { name: "Pamali Amesha", entity: "NIBM", phoneNo: "94704202837" },
        { name: "Heshani Navodya", entity: "NIBM", phoneNo: "94725292660" }
      ],
      gender: "Female",
      keyHolder: "Divya Dulanjali",
    },
    {
      roomNo: "243",
      occupants: [
        { name: "Sadavi Kuruwitaarachchige", entity: "CN", phoneNo: "94776427122" },
        { name: "Viduni Kongahage", entity: "CN", phoneNo: "94717593972" },
        { name: "Navodya Thilini", entity: "CN", phoneNo: "94760217270" }
      ],
      gender: "Female",
      keyHolder: "Sadavi Kuruwitaarachchige",
    },
    {
      roomNo: "244",
      occupants: [
        { name: "Mahendri Hemachandra", entity: "Wayamba", phoneNo: "94761265503" },
        { name: "Chamodya Bandarawatta", entity: "Wayamba", phoneNo: "94766966488" },
        { name: "Subodha Emanuwel", entity: "Wayamba", phoneNo: "94713432024" }
      ],
      gender: "Female",
      keyHolder: "Mahendri Hemachandra",
    },
    {
      roomNo: "245",
      occupants: [
        { name: "Aamina Riffath", entity: "Rajarata", phoneNo: "94774144786" },
        { name: "Kavindhya Malshani", entity: "Rajarata", phoneNo: "94709039863" },
        { name: "Amoda Fernando", entity: "Rajarata", phoneNo: "94717664227" }
      ],
      gender: "Female",
      keyHolder: "Aamina Riffath",
    },
    {
      roomNo: "250",
      occupants: [
        { name: "Minangi Jayasinghe", entity: "CS", phoneNo: "94714158559" },
        { name: "Savithmi Minsaree", entity: "CS", phoneNo: "94706970740" },
        { name: "Poojanee Weerasena", entity: "CS", phoneNo: "94702276237" }
      ],
      gender: "Female",
      keyHolder: "Minangi Jayasinghe",
    },
    {
      roomNo: "251",
      occupants: [
        { name: "Shenan Nathaniel", entity: "USJ", phoneNo: "94769248763" },
        { name: "Sasith Vishwa Darshana", entity: "CN", phoneNo: "94740862458" },
        { name: "Vishwa Kaushalya", entity: "CS", phoneNo: "94726544878" }
      ],
      gender: "Male",
      keyHolder: "Shenan Nathaniel",
    },
    {
      roomNo: "252",
      occupants: [
        { name: "Sakila Thejana", entity: "Rajarata", phoneNo: "94702061844" },
        { name: "Bhanuka Induwara", entity: "CN", phoneNo: "94703820350" },
        { name: "Amzal Foumi", entity: "SLIIT", phoneNo: "94701588018" }
      ],
      gender: "Male",
      keyHolder: "Sakila Thejana",
    },
    {
      roomNo: "253",
      occupants: [
        { name: "Kalindu De Silva", entity: "CN", phoneNo: "94772216647" },
        { name: "Mevinu Liyanage", entity: "CS", phoneNo: "94743686140" },
        { name: "Dinil Hansara", entity: "USJ", phoneNo: "94715565890" }
      ],
      gender: "Male",
      keyHolder: "Kalindu De Silva",
    },
    {
      roomNo: "254",
      occupants: [
        { name: "Imindu Jayasekara", entity: "CS", phoneNo: "94760595305" },
        { name: "Yeshan KP", entity: "SLIIT", phoneNo: "94766035565" },
        { name: "Kavindu Prabhash", entity: "Wayamba", phoneNo: "94750268992" }
      ],
      gender: "Male",
      keyHolder: "Imindu Jayasekara",
    },
    {
      roomNo: "255",
      occupants: [
        { name: "Ravinesh Perera", entity: "CS", phoneNo: "94774338021" },
        { name: "Harith Sandundeniya", entity: "CN", phoneNo: "94750750252" },
        { name: "Sabeelur Rashaad Mohamed Razeen", entity: "SLIIT", phoneNo: "94774226876" }
      ],
      gender: "Male",
      keyHolder: "Ravinesh Perera",
    },
    {
      roomNo: "256",
      occupants: [
        { name: "Janindu Hasanka", entity: "SLIIT", phoneNo: "94763021483" },
        { name: "Rumeth Amarasiri", entity: "CN", phoneNo: "94701550547" },
        { name: "Supun Jayasinghe", entity: "Ruhuna", phoneNo: "94776900119" }
      ],
      gender: "Male",
      keyHolder: "Janindu Hasanka",
    },
    {
      roomNo: "257",
      occupants: [
        { name: "Saneesha Dulhara", entity: "Wayamba", phoneNo: "94786719717" },
        { name: "Yuneth Withanachchi", entity: "CN", phoneNo: "94773677822" },
        { name: "Dishan Bashitha", entity: "CS", phoneNo: "94760868809" }
      ],
      gender: "Male",
      keyHolder: "Saneesha Dulhara",
    },
    {
      roomNo: "258",
      occupants: [
        { name: "Kavindu Madushan", entity: "NIBM", phoneNo: "94701618355" },
        { name: "Vihan Hettiarachchi", entity: "CS", phoneNo: "94702607679" },
        { name: "Dileepa Bandara", entity: "USJ", phoneNo: "94761273695" },
        ],
      gender: "Male",
      keyHolder: "Kavindu Madushan",
    },
    {
      roomNo: "259",
      occupants: [
        { name: "Dahamya Vinradi", entity: "SLIIT", phoneNo: "94703810059" },
        { name: "Fathima Isthikar", entity: "Kandy", phoneNo: "94729211093" },
        { name: "Jayashni Rodrigo", entity: "USJ", phoneNo: "94763105304" }
      ],
      gender: "Female",
      keyHolder: "Dahamya Vinradi",
    },
    {
      roomNo: "260",
      occupants: [
        { name: "Harithanjali Weerakkody", entity: "Rajarata", phoneNo: "94702426576" },
        { name: "Umayangana Madurawala", entity: "CN", phoneNo: "94743585702" }
      ],
      gender: "Female",
      keyHolder: "Harithanjali Weerakkody",
    },
    {
      roomNo: "261",
      occupants: [
        { name: "Venuki Wijeratne", entity: "NIBM", phoneNo: "94782998998" },
        { name: "Nilma Malkini", entity: "CN", phoneNo: "94762130406" }
      ],
      gender: "Female",
      keyHolder: "Venuki Wijeratne",
    },
    {
      roomNo: "262",
      occupants: [
        { name: "Senaya Dharmadasa", entity: "Ruhuna", phoneNo: "94775801320" },
        { name: "Kethaki Wijesooriya", entity: "CN", phoneNo: "94776799200" }
      ],
      gender: "Female",
      keyHolder: "Senaya Dharmadasa",
    },
    {
      roomNo: "263",
      occupants: [
        { name: "Dinuki Masakorala", entity: "USJ", phoneNo: "94771410592" },
        { name: "Lakshajini Ruparajan", entity: "Kandy", phoneNo: "94772160467" }
      ],
      gender: "Female",
      keyHolder: "Dinuki Masakorala",
    },
    {
      roomNo: "264",
      occupants: [
        { name: "Rashmika Guruge", entity: "CN", phoneNo: "94716536353" },
        { name: "Gayani Malalgoda", entity: "SLIIT", phoneNo: "94774405237" },
        { name: "Savandi Liyanayapa", entity: "USJ", phoneNo: "94711496849" }
      ],
      gender: "Female",
      keyHolder: "Rashmika Guruge",
    },
    {
      roomNo: "265",
      occupants: [
        { name: "Leeza Gilbert", entity: "NSBM", phoneNo: "94766007514" },
        { name: "Sanumi Nimethra", entity: "Ruhuna", phoneNo: "94701583016" }
      ],
      gender: "Female",
      keyHolder: "Leeza Gilbert",
    },
    {
      roomNo: "266",
      occupants: [
        { name: "Nadali Hansani", entity: "SLIIT", phoneNo: "94716946480" },
        { name: "Samadhi Hemantha", entity: "CN", phoneNo: "94705574044" }
      ],
      gender: "Female",
      keyHolder: "Nadali Hansani",
    },
    {
      roomNo: "267",
      occupants: [
        { name: "Dineth Wijesuriya", entity: "Ruhuna", phoneNo: "94702669006" },
        { name: "Rashdhan Mohomed", entity: "CN", phoneNo: "94764115733" },
        { name: "Ishan Balasooriya", entity: "CS", phoneNo: "94702262003" },
        ],
      gender: "Male",
      keyHolder: "Dineth Wijesuriya",
    },
    {
      roomNo: "268",
      occupants: [
        { name: "Thisara Kawinda", entity: "USJ", phoneNo: "94779010683" },
        { name: "Anuja Mahamalage", entity: "CS", phoneNo: "94701505650" },
        { name: "Tharindu Widanagama", entity: "NIBM", phoneNo: "94710562603" }
      ],
      gender: "Male",
      keyHolder: "Thisara Kawinda",
    },
    {
      roomNo: "269",
      occupants: [
        { name: "Dulen Withanage", entity: "CS", phoneNo: "94717684052" },
        { name: "Damith Wijemanna", entity: "CN", phoneNo: "94778699927" },
        { name: "Shamli Bin Jameel", entity: "SLIIT", phoneNo: "94762513357" },
        { name: "Srimuralitharan Elilavan", entity: "Ruhuna", phoneNo: "94706007580" }
      ],
      gender: "Male",
      keyHolder: "Dulen Withanage",
    },
    {
      roomNo: "270",
      occupants: [
        { name: "Raj Waidyasekara", entity: "CS", phoneNo: "94714225445" },
        { name: "Thisara Randam", entity: "Rajarata", phoneNo: "94761991541" },
        { name: "Thumal Kariyapperuma", entity: "Wayamba", phoneNo: "94788451504" },
        { name: "Bawantha Jayanath", entity: "SLIIT", phoneNo: "94763368848" }
      ],
      gender: "Male",
      keyHolder: "Raj Waidyasekara",
    },
    {
      roomNo: "271",
      occupants: [
        { name: "Nadun Weerakkody", entity: "SLIIT", phoneNo: "94717439912" },
        { name: "Tilan Eranga", entity: "CN", phoneNo: "94781777611" },
        { name: "Balamurali Pakeetharan", entity: "Wayamba", phoneNo: "94771910998" },
        { name: "Induwara Lakthila", entity: "Ruhuna", phoneNo: "94763952940" }
      ],
      gender: "Male",
      keyHolder: "Nadun Weerakkody",
    },
    {
      roomNo: "272",
      occupants: [
        { name: "Mihan Ekanayake", entity: "NIBM", phoneNo: "94716865034" },
        { name: "Benjamin Gnanapragasam", entity: "CN", phoneNo: "94740553044" },
        { name: "Methal Abeywickrama", entity: "CS", phoneNo: "94710464985" },
        { name: "Sandaru Dissanayake", entity: "Ruhuna", phoneNo: "94770040360" }
      ],
      gender: "Male",
      keyHolder: "Mihan Ekanayake",
    },
    {
      roomNo: "273",
      occupants: [
        { name: "Adithya Kalhan", entity: "USJ", phoneNo: "94775734259" },
        { name: "Janindu Wijesinghe", entity: "CN", phoneNo: "94723367936" },
        { name: "Aflal Zahreen", entity: "NIBM", phoneNo: "94710416000" },
        { name: "Manindu Upek", entity: "Ruhuna", phoneNo: "94701775749" }
      ],
      gender: "Male",
      keyHolder: "Adithya Kalhan",
    },
    {
      roomNo: "274",
      occupants: [
        { name: "Jemima Mohamed", entity: "USJ", phoneNo: "94772198975" },
        { name: "Kasundi Sanara", entity: "SLIIT", phoneNo: "94719166045" },
        { name: "A.B.Shishanika Kavindya", entity: "Ruhuna", phoneNo: "94719415975" },
        { name: "Subanki Subaschandran", entity: "NIBM", phoneNo: "94769620635" }
      ],
      gender: "Female",
      keyHolder: "Jemima Mohamed",
    },
    {
      roomNo: "275",
      occupants: [
        { name: "Christy Binni", entity: "Kandy", phoneNo: "94768091121" },
        { name: "Uthpala Kalupathirana", entity: "CN", phoneNo: "94757114093" },
        { name: "Puravi Kulathunga", entity: "CC", phoneNo: "94711386658" },
        { name: "Minethma Wickramasinghe", entity: "USJ", phoneNo: "94760456144" }
      ],
      gender: "Female",
      keyHolder: "Christy Binni",
    },
    {
      roomNo: "276",
      occupants: [
        { name: "Manisha Selvanayagam", entity: "CC", phoneNo: "94742933039" },
        { name: "Minduli Atapattu", entity: "CN", phoneNo: "94771994835" },
        { name: "Methya Weeraratne", entity: "NSBM", phoneNo: "94760733788" },
        { name: "Devmi Galagedara", entity: "USJ", phoneNo: "94740994528" }
      ],
      gender: "Female",
      keyHolder: "Manisha Selvanayagam",
    },
    {
      roomNo: "277",
      occupants: [
        { name: "Pavani Attanayake", entity: "CN", phoneNo: "94771627915" },
        { name: "Sanduni Wijekoon", entity: "CS", phoneNo: "94703183050" },
        { name: "Sehansa Palliyaguru", entity: "NSBM", phoneNo: "94740448286" },
        { name: "Disandi Sandithna", entity: "Ruhuna", phoneNo: "94743377431" }
      ],
      gender: "Female",
      keyHolder: "Pavani Attanayake",
    },
    {
      roomNo: "278",
      occupants: [
        { name: "Savidya Wijayakulasooriya", entity: "NSBM", phoneNo: "94705282925" },
        { name: "Nethmi Maduhara", entity: "CN", phoneNo: "94763533485" },
        { name: "Maheesha Deraniyagala", entity: "CC", phoneNo: "94762404517" },
        { name: "Pethara Ranasinghe", entity: "SLIIT", phoneNo: "94741993650" }
      ],
      gender: "Female",
      keyHolder: "Savidya Wijayakulasooriya",
    },
    {
      roomNo: "279",
      occupants: [
        { name: "Dinithi Thilakaratne", entity: "CS", phoneNo: "94761891878" },
        { name: "Tracey Johnson", entity: "NSBM", phoneNo: "94760325677" },
        { name: "Chamie Ranawakaarachchi", entity: "Ruhuna", phoneNo: "94778751214" },
        { name: "Pumuthu Weerakoon", entity: "USJ", phoneNo: "94761020132" }
      ],
      gender: "Female",
      keyHolder: "Dinithi Thilakaratne",
    },
    {
      roomNo: "280",
      occupants: [
        { name: "Chamlika Wijesinghe", entity: "CN", phoneNo: "94761429338" },
        { name: "Bumini Uyanahewa", entity: "CC", phoneNo: "94765787899" },
        { name: "Kithmini Hettiarachchi", entity: "Ruhuna", phoneNo: "94702707583" },
        { name: "Navapriyah Krishnan", entity: "USJ", phoneNo: "94750553351" }
      ],
      gender: "Female",
      keyHolder: "Chamlika Wijesinghe",
    },
    {
      roomNo: "281",
      occupants: [
        { name: "Amasha Fernando", entity: "CN", phoneNo: "94716168872" },
        { name: "Dinidi Senanayake", entity: "SLIIT", phoneNo: "94766388408" },
        { name: "CHITHMI NAVODYA", entity: "Ruhuna", phoneNo: "94782498942" },
        { name: "Upetha Ariyarathne", entity: "USJ", phoneNo: "94711125295" }
      ],
      gender: "Female",
      keyHolder: "Amasha Fernando",
    },
    {
      roomNo: "282",
      occupants: [
        { name: "Kavindya Bandara", entity: "Wayamba", phoneNo: "94765493421" },
        { name: "Sachini Rajapaksha", entity: "CN", phoneNo: "94763614876" },
        { name: "Thehasa Hewavitharana", entity: "NSBM", phoneNo: "94717938936" },
        { name: "Pumudi Peduruarachchi", entity: "USJ", phoneNo: "94742328666" }
      ],
      gender: "Female",
      keyHolder: "Kavindya Bandara",
    },
    {
      roomNo: "283",
      occupants: [
        { name: "Madhunishaa Yogendran", entity: "NIBM", phoneNo: "94775429433" },
        { name: "Shimasha Manawadu", entity: "CN", phoneNo: "94703926342" },
        { name: "Sadeeshie Ravindya", entity: "Ruhuna", phoneNo: "94774982239" },
        { name: "Gimhani Jayasekara", entity: "USJ", phoneNo: "94703400336" }
      ],
      gender: "Female",
      keyHolder: "Madhunishaa Yogendran",
    },
    {
      roomNo: "284",
      occupants: [
        { name: "Tharuka Fernando", entity: "Ruhuna", phoneNo: "94776371756" },
        { name: "Navoda Sandamini", entity: "Wayamba", phoneNo: "94776293098" },
        { name: "Kavini Wijesiriwardena", entity: "SLIIT", phoneNo: "94712140436" },
        { name: "Limantha Adikari", entity: "NSBM", phoneNo: "94701408627" }
      ],
      gender: "Female",
      keyHolder: "Tharuka Fernando",
    },
    {
      roomNo: "285",
      occupants: [
        { name: "H.A.Promodi maheshika", entity: "Wayamba", phoneNo: "94765851795" },
        { name: "Oshadi Liyanage", entity: "CS", phoneNo: "94702502890" },
        { name: "Sayumi Ekanayake", entity: "NSBM", phoneNo: "94719369539" },
        { name: "Duwasha Algama", entity: "USJ", phoneNo: "94704533048" }
      ],
      gender: "Female",
      keyHolder: "H.A.Promodi maheshika",
    },
    {
      roomNo: "286",
      occupants: [
        { name: "Shinthurie Markandakuganathan", entity: "CS", phoneNo: "94760028575" },
        { name: "Nirmani Weerakoon", entity: "CN", phoneNo: "94703416997" },
        { name: "Anjalee perera", entity: "NSBM", phoneNo: "94775732437" },
        { name: "Malithi Dharmasiri", entity: "USJ", phoneNo: "94774144673" }
      ],
      gender: "Female",
      keyHolder: "Shinthurie Markandakuganathan",
    },
    {
      roomNo: "287",
      occupants: [
        { name: "Amani Jayasekara", entity: "Rajarata", phoneNo: "94754074725" },
        { name: "Hansika Bandara", entity: "CN", phoneNo: "94764803345" },
        { name: "Bavisyanthe Shanmugadas", entity: "Ruhuna", phoneNo: "94741770192" }
      ],
      gender: "Female",
      keyHolder: "Amani Jayasekara",
    },
    {
      roomNo: "288",
      occupants: [
        { name: "Vihangi Ranaweera", entity: "USJ", phoneNo: "94705031384" },
        { name: "Zahra Bathool", entity: "Kandy", phoneNo: "94741123891" },
        { name: "Imaya Jayarathna", entity: "USJ", phoneNo: "94776674606" }
      ],
      gender: "Female",
      keyHolder: "Vihangi Ranaweera",
    },
    {
      roomNo: "289",
      occupants: [
        { name: "Thisuni Kuruwitaarachchige", entity: "CS", phoneNo: "94706633546" },
        { name: "Nayanalochana Handapangoda", entity: "NSBM", phoneNo: "94775227140" },
        { name: "Mithuni Nadeesha", entity: "Ruhuna", phoneNo: "94743731948" }
      ],
      gender: "Female",
      keyHolder: "Thisuni Kuruwitaarachchige",
    },
    {
      roomNo: "290",
      occupants: [
        { name: "Nawoda Uththarani", entity: "Wayamba", phoneNo: "94711348416" },
        { name: "Sachini Gunawardhana", entity: "CN", phoneNo: "94785533463" },
        { name: "Monali Edirisinghe", entity: "SLIIT", phoneNo: "94742430091" }
      ],
      gender: "Female",
      keyHolder: "Nawoda Uththarani",
    },
    {
      roomNo: "291",
      occupants: [
        { name: "Methara Wanigasinghe", entity: "CN", phoneNo: "94706884002" },
        { name: "Shahnaas Rafi", entity: "Kandy", phoneNo: "94740993634" },
        { name: "Gayathmee Perera", entity: "USJ", phoneNo: "94766330511" }
      ],
      gender: "Female",
      keyHolder: "Methara Wanigasinghe",
    },
    {
      roomNo: "292",
      occupants: [
        { name: "Raveesha Bandara", entity: "SLIIT", phoneNo: "94763418889" },
        { name: "Dilthara de Silva", entity: "CN", phoneNo: "94763948894" },
        { name: "Melanie Dassanayake", entity: "USJ", phoneNo: "94725007922" }
      ],
      gender: "Female",
      keyHolder: "Raveesha Bandara",
    },
    {
      roomNo: "293",
      occupants: [
        { name: "Dinithi Pamudika", entity: "NIBM", phoneNo: "94701505609" },
        { name: "Imandi Amalna", entity: "Rajarata", phoneNo: "94777426076" }
      ],
      gender: "Female",
      keyHolder: "Dinithi Pamudika",
    },
    {
      roomNo: "294",
      occupants: [
        { name: "Sachinthani Ketakumbura", entity: "CN", phoneNo: "94702182939" },
        { name: "Vinuli Gunaratne", entity: "NSBM", phoneNo: "94742655177" },
        { name: "Methpani Rathnayake", entity: "Ruhuna", phoneNo: "94702420113" }
      ],
      gender: "Female",
      keyHolder: "Sachinthani Ketakumbura",
    },
    {
      roomNo: "295",
      occupants: [
        { name: "Nethuli Paranavidana", entity: "NIBM", phoneNo: "94712720917" },
        { name: "ANUKI VIMAYA ADIKARI", entity: "Rajarata", phoneNo: "94703968501" },
        { name: "Dinadi Jayathilaka", entity: "SLIIT", phoneNo: "94760006189" }
      ],
      gender: "Female",
      keyHolder: "Nethuli Paranavidana",
    },
    {
      roomNo: "296",
      occupants: [
        { name: "Imelsha Fernando Aththachchi", entity: "Wayamba", phoneNo: "94763556275" },
        { name: "Samindi Keel", entity: "CN", phoneNo: "94763034975" },
        { name: "Samithri Miulandi Gunasekara", entity: "NIBM", phoneNo: "94784370627" }
      ],
      gender: "Female",
      keyHolder: "Imelsha Fernando Aththachchi",
    },
    {
      roomNo: "297",
      occupants: [
        { name: "Samadhi Wadithya", entity: "CN", phoneNo: "94775943287" },
        { name: "Omali Weerasinghe", entity: "SLIIT", phoneNo: "94710568010" },
        { name: "Hashini Hapuarachchi", entity: "NIBM", phoneNo: "94741903553" }
      ],
      gender: "Female",
      keyHolder: "Samadhi Wadithya",
    },
    {
      roomNo: "298",
      occupants: [
        { name: "Dinuri Geeganage", entity: "CN", phoneNo: "94716290834" },
        { name: "Ayshah Shaheed", entity: "Ruhuna", phoneNo: "94773181478" },
        { name: "Hani Rudhthiya", entity: "NIBM", phoneNo: "94778548068" }
      ],
      gender: "Female",
      keyHolder: "Dinuri Geeganage",
    },
    {
      roomNo: "299",
      occupants: [
        { name: "Nethma Dewmini", entity: "CN", phoneNo: "94767323946" },
        { name: "Senugi Mendis", entity: "CS", phoneNo: "94705732848" },
        { name: "Shenise Pronk", entity: "SLIIT", phoneNo: "94764684101" }
      ],
      gender: "Female",
      keyHolder: "Nethma Dewmini",
    },
    {
      roomNo: "300",
      occupants: [
        { name: "Mishara Athukorala", entity: "CN", phoneNo: "94772048459" },
        { name: "Ravindu Jayasekara", entity: "CS", phoneNo: "94722523560" },
        { name: "Savinda Sithum", entity: "SLIIT", phoneNo: "94765460938" }
      ],
      gender: "Male",
      keyHolder: "Mishara Athukorala",
    },
    {
      roomNo: "301",
      occupants: [
        { name: "Desandu Wanniarachchi", entity: "CS", phoneNo: "94740950191" },
        { name: "Vishal Hadharshan", entity: "NIBM", phoneNo: "94762250660" },
        { name: "Thedapun Wanninaika", entity: "NSBM", phoneNo: "94701727409" }
      ],
      gender: "Male",
      keyHolder: "Desandu Wanniarachchi",
    },
    {
      roomNo: "302",
      occupants: [
        { name: "Nikila Silva", entity: "Kandy", phoneNo: "94740776378" },
        { name: "Mathumithan Arulanantham", entity: "CN", phoneNo: "94772272952" },
        { name: "Vabeeshan Vasantharajan", entity: "NIBM", phoneNo: "94723872823" }
      ],
      gender: "Male",
      keyHolder: "Nikila Silva",
    },
    {
      roomNo: "303",
      occupants: [
        { name: "Yohan Wickramasinghe", entity: "SLIIT", phoneNo: "94760299469" },
        { name: "Hiran Samahon", entity: "CS", phoneNo: "94763570108" },
        { name: "Ryan Fonseka", entity: "NIBM", phoneNo: "94719826400" }
      ],
      gender: "Male",
      keyHolder: "Yohan Wickramasinghe",
    },
    {
      roomNo: "304",
      occupants: [
        { name: "Oshan Indusara", entity: "NIBM", phoneNo: "94756812492" },
        { name: "Gayan Kanchana", entity: "Ruhuna", phoneNo: "94718873392" },
        { name: "Chamin Jayasoma", entity: "USJ", phoneNo: "94710822825" }
      ],
      gender: "Male",
      keyHolder: "Oshan Indusara",
    },
    {
      roomNo: "305",
      occupants: [
        { name: "Deveen Chandira", entity: "CS", phoneNo: "94772124515" },
        { name: "Nirmal Dilip", entity: "Ruhuna", phoneNo: "94773685523" },
        { name: "Kokulan Kugathasan", entity: "SLIIT", phoneNo: "94767520033" }
      ],
      gender: "Male",
      keyHolder: "Deveen Chandira",
    },
    {
      roomNo: "306",
      occupants: [
        { name: "Dinuka Wimalagunasekara", entity: "USJ", phoneNo: "94740901606" },
        { name: "Ashfaaq Ashrak", entity: "CN", phoneNo: "94717531646" },
        { name: "Thisuka De Silva", entity: "CS", phoneNo: "94758924827" }
      ],
      gender: "Male",
      keyHolder: "Dinuka Wimalagunasekara",
    },
  ];

export default function RoomSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<Project | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setNotFound(false);
    setSearchResult(null);

    if (term.trim() === '') {
      return;
    }

    // Search for the person in all rooms
    const foundRoom = PROJECTS.find(room =>
      room.occupants.some(occupant =>
        occupant.name.toLowerCase().includes(term.toLowerCase())
      )
    );

    if (foundRoom) {
      setSearchResult(foundRoom);
    } else {
      setNotFound(true);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setSearchResult(null);
    setNotFound(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 pt-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Room Allocation</h1>
          <p className="text-gray-600 mb-6">Enter your name to find your room, roomates and keyholder</p>

          {/* Search Input */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Enter name to search..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchTerm && (
              <button
                onClick={handleClear}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Search Results */}
          {searchResult && (
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-indigo-900">Room {searchResult.roomNo}</h2>
                <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  searchResult.gender === 'Male' 
                    ? 'bg-blue-200 text-blue-800' 
                    : 'bg-pink-200 text-pink-800'
                }`}>
                  {searchResult.gender}
                </span>
              </div>

              {/* Key Holder */}
              <div className="mb-4 p-4 bg-white rounded-lg border-l-4 border-amber-400">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">Key Holder</p>
                    <p className="text-sm font-bold text-gray-800">{searchResult.keyHolder}</p>
                  </div>
                </div>
              </div>

              {/* Roommates */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  Occupants ({searchResult.occupants.length})
                </h3>
                <div className="space-y-2">
                  {searchResult.occupants.map((occupant, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg transition-colors ${
                        occupant.name.toLowerCase().includes(searchTerm.toLowerCase())
                          ? 'bg-indigo-100 border-2 border-indigo-300'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className="text-gray-800 font-medium">{occupant.name}</div>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Entity:</span> {occupant.entity} | <span className="font-semibold">Phone:</span> {occupant.phoneNo}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Not Found Message */}
          {notFound && searchTerm && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
              <svg className="h-12 w-12 text-red-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-800 font-semibold">No results found</p>
              <p className="text-red-600 text-sm mt-1">No one with the name {searchTerm} was found in the room allocation.</p>
            </div>
          )}

          {/* Initial State */}
          {!searchTerm && !searchResult && !notFound && (
            <div className="text-center py-12">
              <svg className="h-20 w-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <p className="text-gray-500">Start typing a name to search</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}