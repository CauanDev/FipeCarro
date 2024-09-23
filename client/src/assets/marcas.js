const marcasCarros = [
    {
        "codigo": "1",
        "nome": "Acura",
        'img':'https://imgs.search.brave.com/fS_OzZPRJBeR4wfVzTWdz5rI6qoRZhR_ZqsAkw5wZfY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2FmL0Fj/dXJhX2xvZ28uc3Zn/LzY0MHB4LUFjdXJh/X2xvZ28uc3ZnLnBu/Zw'
    },
    {
        "codigo": "2",
        "nome": "Agrale",
        "img":"https://cdn.worldvectorlogo.com/logos/agrale.svg"
    },
    {
        "codigo": "3",
        "nome": "Alfa Romeo",
        'img':'https://upload.wikimedia.org/wikipedia/pt/5/5a/Logotipo_da_Alfa_Romeo.png'
    },
    {
        "codigo": "4",
        "nome": "AM Gen"
    },
    {
        "codigo": "5",
        "nome": "Asia Motors",
        'img':"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Asia_Motors_Logo.svg/2560px-Asia_Motors_Logo.svg.png"
    },
    {
        "codigo": "189",
        "nome": "ASTON MARTIN",
        'img':'https://upload.wikimedia.org/wikipedia/it/thumb/5/5b/Logo_della_Aston_Martin.svg/1200px-Logo_della_Aston_Martin.svg.png'
    },
    {
        "codigo": "6",
        "nome": "Audi",
        'img':'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/2560px-Audi-Logo_2016.svg.png'
    },
    {
        "codigo": "207",
        "nome": "Baby",
    },
    {
        "codigo": "7",
        "nome": "BMW",
        'img':'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png'

    },
    {
        "codigo": "8",
        "nome": "BRM"
    },
    {
        "codigo": "123",
        "nome": "Bugre",
        'img':"https://www.webmotors.com.br/imagens/prod/portal/img/logos/carro/bugre.webp?w=175&h=175&q=80&t=true&z=3106"
    },
    {
        "codigo": "238",
        "nome": "BYD",
        'img':'https://upload.wikimedia.org/wikipedia/commons/e/e2/BYD_Auto_2022_logo.svg'
    },
    {
        "codigo": "236",
        "nome": "CAB Motors",
        'img':'https://cabmotors.ind.br/wp-content/uploads/2021/05/cab-logo-black.png'
    },
    {
        "codigo": "10",
        "nome": "Cadillac",
        'img':'https://blog.logomyway.com/wp-content/uploads/2021/11/cadillac-logo-png.png'
    },
    {
        "codigo": "245",
        "nome": "Caoa Chery"
    },
    {
        "codigo": "161",
        "nome": "Caoa Chery/Chery"
    },
    {
        "codigo": "11",
        "nome": "CBT Jipe"
    },
    {
        "codigo": "136",
        "nome": "CHANA"
    },
    {
        "codigo": "182",
        "nome": "CHANGAN"
    },
    {
        "codigo": "12",
        "nome": "Chrysler"
    },
    {
        "codigo": "13",
        "nome": "Citroën"
    },
    {
        "codigo": "14",
        "nome": "Cross Lander"
    },
    {
        "codigo": "241",
        "nome": "D2D Motors"
    },
    {
        "codigo": "15",
        "nome": "Daewoo"
    },
    {
        "codigo": "16",
        "nome": "Daihatsu"
    },
    {
        "codigo": "246",
        "nome": "DFSK"
    },
    {
        "codigo": "17",
        "nome": "Dodge"
    },
    {
        "codigo": "147",
        "nome": "EFFA"
    },
    {
        "codigo": "18",
        "nome": "Engesa"
    },
    {
        "codigo": "19",
        "nome": "Envemo"
    },
    {
        "codigo": "20",
        "nome": "Ferrari"
    },
    {
        "codigo": "21",
        "nome": "Fiat"
    },
    {
        "codigo": "149",
        "nome": "Fibravan"
    },
    {
        "codigo": "22",
        "nome": "Ford"
    },
    {
        "codigo": "190",
        "nome": "FOTON"
    },
    {
        "codigo": "170",
        "nome": "Fyber"
    },
    {
        "codigo": "199",
        "nome": "GEELY"
    },
    {
        "codigo": "23",
        "nome": "GM - Chevrolet"
    },
    {
        "codigo": "153",
        "nome": "GREAT WALL"
    },
    {
        "codigo": "24",
        "nome": "Gurgel"
    },
    {
        "codigo": "240",
        "nome": "GWM"
    },
    {
        "codigo": "152",
        "nome": "HAFEI"
    },
    {
        "codigo": "214",
        "nome": "HITECH ELECTRIC"
    },
    {
        "codigo": "25",
        "nome": "Honda"
    },
    {
        "codigo": "26",
        "nome": "Hyundai"
    },
    {
        "codigo": "27",
        "nome": "Isuzu"
    },
    {
        "codigo": "208",
        "nome": "IVECO"
    },
    {
        "codigo": "177",
        "nome": "JAC"
    },
    {
        "codigo": "28",
        "nome": "Jaguar"
    },
    {
        "codigo": "29",
        "nome": "Jeep"
    },
    {
        "codigo": "154",
        "nome": "JINBEI"
    },
    {
        "codigo": "30",
        "nome": "JPX"
    },
    {
        "codigo": "31",
        "nome": "Kia Motors"
    },
    {
        "codigo": "32",
        "nome": "Lada"
    },
    {
        "codigo": "171",
        "nome": "LAMBORGHINI"
    },
    {
        "codigo": "33",
        "nome": "Land Rover"
    },
    {
        "codigo": "34",
        "nome": "Lexus"
    },
    {
        "codigo": "168",
        "nome": "LIFAN"
    },
    {
        "codigo": "127",
        "nome": "LOBINI"
    },
    {
        "codigo": "35",
        "nome": "Lotus"
    },
    {
        "codigo": "140",
        "nome": "Mahindra"
    },
    {
        "codigo": "36",
        "nome": "Maserati"
    },
    {
        "codigo": "37",
        "nome": "Matra"
    },
    {
        "codigo": "38",
        "nome": "Mazda"
    },
    {
        "codigo": "211",
        "nome": "Mclaren"
    },
    {
        "codigo": "39",
        "nome": "Mercedes-Benz"
    },
    {
        "codigo": "40",
        "nome": "Mercury"
    },
    {
        "codigo": "167",
        "nome": "MG"
    },
    {
        "codigo": "156",
        "nome": "MINI"
    },
    {
        "codigo": "41",
        "nome": "Mitsubishi"
    },
    {
        "codigo": "42",
        "nome": "Miura"
    },
    {
        "codigo": "43",
        "nome": "Nissan"
    },
    {
        "codigo": "44",
        "nome": "Peugeot"
    },
    {
        "codigo": "45",
        "nome": "Plymouth"
    },
    {
        "codigo": "46",
        "nome": "Pontiac"
    },
    {
        "codigo": "47",
        "nome": "Porsche"
    },
    {
        "codigo": "185",
        "nome": "RAM"
    },
    {
        "codigo": "186",
        "nome": "RELY"
    },
    {
        "codigo": "48",
        "nome": "Renault"
    },
    {
        "codigo": "195",
        "nome": "Rolls-Royce"
    },
    {
        "codigo": "49",
        "nome": "Rover"
    },
    {
        "codigo": "50",
        "nome": "Saab"
    },
    {
        "codigo": "51",
        "nome": "Saturn"
    },
    {
        "codigo": "52",
        "nome": "Seat"
    },
    {
        "codigo": "247",
        "nome": "SERES"
    },
    {
        "codigo": "183",
        "nome": "SHINERAY"
    },
    {
        "codigo": "157",
        "nome": "smart"
    },
    {
        "codigo": "125",
        "nome": "SSANGYONG"
    },
    {
        "codigo": "54",
        "nome": "Subaru"
    },
    {
        "codigo": "55",
        "nome": "Suzuki"
    },
    {
        "codigo": "165",
        "nome": "TAC"
    },
    {
        "codigo": "56",
        "nome": "Toyota"
    },
    {
        "codigo": "57",
        "nome": "Troller"
    },
    {
        "codigo": "58",
        "nome": "Volvo"
    },
    {
        "codigo": "59",
        "nome": "VW - VolksWagen"
    },
    {
        "codigo": "163",
        "nome": "Wake"
    },
    {
        "codigo": "120",
        "nome": "Walk"
    }
];


const marcasMotos = [
    {
      "codigo": "60",
      "nome": "ADLY"
    },
    {
      "codigo": "61",
      "nome": "AGRALE"
    },
    {
      "codigo": "131",
      "nome": "AMAZONAS"
    },
    {
      "codigo": "62",
      "nome": "APRILIA"
    },
    {
      "codigo": "63",
      "nome": "ATALA"
    },
    {
      "codigo": "216",
      "nome": "AVELLOZ"
    },
    {
      "codigo": "64",
      "nome": "BAJAJ"
    },
    {
      "codigo": "205",
      "nome": "BEE"
    },
    {
      "codigo": "162",
      "nome": "Benelli"
    },
    {
      "codigo": "65",
      "nome": "BETA"
    },
    {
      "codigo": "66",
      "nome": "BIMOTA"
    },
    {
      "codigo": "67",
      "nome": "BMW"
    },
    {
      "codigo": "68",
      "nome": "BRANDY"
    },
    {
      "codigo": "130",
      "nome": "BRAVA"
    },
    {
      "codigo": "150",
      "nome": "BRP"
    },
    {
      "codigo": "117",
      "nome": "BUELL"
    },
    {
      "codigo": "155",
      "nome": "BUENO"
    },
    {
      "codigo": "212",
      "nome": "BULL"
    },
    {
      "codigo": "69",
      "nome": "byCristo"
    },
    {
      "codigo": "70",
      "nome": "CAGIVA"
    },
    {
      "codigo": "71",
      "nome": "CALOI"
    },
    {
      "codigo": "72",
      "nome": "DAELIM"
    },
    {
      "codigo": "145",
      "nome": "DAFRA"
    },
    {
      "codigo": "137",
      "nome": "DAYANG"
    },
    {
      "codigo": "142",
      "nome": "DAYUN"
    },
    {
      "codigo": "73",
      "nome": "DERBI"
    },
    {
      "codigo": "74",
      "nome": "DUCATI"
    },
    {
      "codigo": "75",
      "nome": "EMME"
    },
    {
      "codigo": "248",
      "nome": "FEVER"
    },
    {
      "codigo": "132",
      "nome": "FOX"
    },
    {
      "codigo": "209",
      "nome": "FUSCO MOTOSEGURA"
    },
    {
      "codigo": "128",
      "nome": "FYM"
    },
    {
      "codigo": "143",
      "nome": "GARINNI"
    },
    {
      "codigo": "76",
      "nome": "GAS GAS"
    },
    {
      "codigo": "133",
      "nome": "GREEN"
    },
    {
      "codigo": "138",
      "nome": "HAOBAO"
    },
    {
      "codigo": "203",
      "nome": "HAOJUE"
    },
    {
      "codigo": "77",
      "nome": "HARLEY-DAVIDSON"
    },
    {
      "codigo": "78",
      "nome": "HARTFORD"
    },
    {
      "codigo": "79",
      "nome": "HERO"
    },
    {
      "codigo": "80",
      "nome": "HONDA"
    },
    {
      "codigo": "81",
      "nome": "HUSABERG"
    },
    {
      "codigo": "82",
      "nome": "HUSQVARNA"
    },
    {
      "codigo": "202",
      "nome": "INDIAN"
    },
    {
      "codigo": "158",
      "nome": "IROS"
    },
    {
      "codigo": "141",
      "nome": "JIAPENG VOLCANO"
    },
    {
      "codigo": "174",
      "nome": "JOHNNYPAG"
    },
    {
      "codigo": "151",
      "nome": "JONNY"
    },
    {
      "codigo": "129",
      "nome": "KAHENA"
    },
    {
      "codigo": "118",
      "nome": "KASINSKI"
    },
    {
      "codigo": "85",
      "nome": "KAWASAKI"
    },
    {
      "codigo": "87",
      "nome": "KTM"
    },
    {
      "codigo": "204",
      "nome": "KYMCO"
    },
    {
      "codigo": "159",
      "nome": "LANDUM"
    },
    {
      "codigo": "88",
      "nome": "L'AQUILA"
    },
    {
      "codigo": "89",
      "nome": "LAVRALE"
    },
    {
      "codigo": "139",
      "nome": "LERIVO"
    },
    {
      "codigo": "178",
      "nome": "LIFAN"
    },
    {
      "codigo": "148",
      "nome": "Lon-V"
    },
    {
      "codigo": "175",
      "nome": "MAGRÃO TRICICLOS"
    },
    {
      "codigo": "146",
      "nome": "Malaguti"
    },
    {
      "codigo": "126",
      "nome": "MIZA"
    },
    {
      "codigo": "90",
      "nome": "MOTO GUZZI"
    },
    {
      "codigo": "201",
      "nome": "MOTOCAR"
    },
    {
      "codigo": "200",
      "nome": "MOTORINO"
    },
    {
      "codigo": "160",
      "nome": "MRX"
    },
    {
      "codigo": "91",
      "nome": "MV AGUSTA"
    },
    {
      "codigo": "92",
      "nome": "MVK"
    },
    {
      "codigo": "239",
      "nome": "NIU"
    },
    {
      "codigo": "93",
      "nome": "ORCA"
    },
    {
      "codigo": "164",
      "nome": "PEGASSI"
    },
    {
      "codigo": "94",
      "nome": "PEUGEOT"
    },
    {
      "codigo": "95",
      "nome": "PIAGGIO"
    },
    {
      "codigo": "210",
      "nome": "POLARIS"
    },
    {
      "codigo": "173",
      "nome": "REGAL RAPTOR"
    },
    {
      "codigo": "198",
      "nome": "RIGUETE"
    },
    {
      "codigo": "192",
      "nome": "Royal Enfield"
    },
    {
      "codigo": "96",
      "nome": "SANYANG"
    },
    {
      "codigo": "134",
      "nome": "SHINERAY"
    },
    {
      "codigo": "97",
      "nome": "SIAMOTO"
    },
    {
      "codigo": "98",
      "nome": "SUNDOWN"
    },
    {
      "codigo": "237",
      "nome": "SUPER SOCO"
    },
    {
      "codigo": "99",
      "nome": "SUZUKI"
    },
    {
      "codigo": "176",
      "nome": "TARGOS"
    },
    {
      "codigo": "187",
      "nome": "TIGER"
    },
    {
      "codigo": "119",
      "nome": "TRAXX"
    },
    {
      "codigo": "100",
      "nome": "TRIUMPH"
    },
    {
      "codigo": "244",
      "nome": "Ventane Motors"
    },
    {
      "codigo": "180",
      "nome": "VENTO"
    },
    {
      "codigo": "215",
      "nome": "VOLTZ"
    },
    {
      "codigo": "243",
      "nome": "WATTS"
    },
    {
      "codigo": "135",
      "nome": "WUYANG"
    },
    {
      "codigo": "101",
      "nome": "YAMAHA"
    },
    {
      "codigo": "242",
      "nome": "ZONTES"
    }
  ];


const marcasCaminhoes = [
    {
      "codigo": "102",
      "nome": "AGRALE"
    },
    {
      "codigo": "206",
      "nome": "BEPOBUS"
    },
    {
      "codigo": "103",
      "nome": "CHEVROLET"
    },
    {
      "codigo": "121",
      "nome": "CICCOBUS"
    },
    {
      "codigo": "197",
      "nome": "DAF"
    },
    {
      "codigo": "179",
      "nome": "EFFA-JMC"
    },
    {
      "codigo": "104",
      "nome": "FIAT"
    },
    {
      "codigo": "105",
      "nome": "FORD"
    },
    {
      "codigo": "191",
      "nome": "FOTON"
    },
    {
      "codigo": "106",
      "nome": "GMC"
    },
    {
      "codigo": "181",
      "nome": "HYUNDAI"
    },
    {
      "codigo": "122",
      "nome": "IVECO"
    },
    {
      "codigo": "188",
      "nome": "JAC"
    },
    {
      "codigo": "184",
      "nome": "MAN"
    },
    {
      "codigo": "108",
      "nome": "MARCOPOLO"
    },
    {
      "codigo": "196",
      "nome": "MASCARELLO"
    },
    {
      "codigo": "194",
      "nome": "MAXIBUS"
    },
    {
      "codigo": "109",
      "nome": "MERCEDES-BENZ"
    },
    {
      "codigo": "110",
      "nome": "NAVISTAR"
    },
    {
      "codigo": "111",
      "nome": "NEOBUS"
    },
    {
      "codigo": "112",
      "nome": "PUMA-ALFA"
    },
    {
      "codigo": "113",
      "nome": "SAAB-SCANIA"
    },
    {
      "codigo": "114",
      "nome": "SCANIA"
    },
    {
      "codigo": "193",
      "nome": "SHACMAN"
    },
    {
      "codigo": "166",
      "nome": "SINOTRUK"
    },
    {
      "codigo": "115",
      "nome": "VOLKSWAGEN"
    },
    {
      "codigo": "116",
      "nome": "VOLVO"
    },
    {
      "codigo": "144",
      "nome": "WALKBUS"
    }
  ]


export default {
    marcasCaminhoes,
    marcasCarros,
    marcasMotos
};