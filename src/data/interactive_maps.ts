export default [
  {
    key: 'streets-of-tarkov',
    projection: 'interactive',
    minZoom: 1,
    maxZoom: 5,
    transform: [
      0.38,
      0,
      0.38,
      0,
    ],
    coordinateRotation: 180,
    bounds: [
      [
        323,
        -317,
      ],
      [
        -280,
        549,
      ],
    ],
    heightRange: [
      -6,
      10,
    ],
    author: 'Shebuka',
    authorLink: 'https://github.com/TarkovTracker/tarkovdata/',
    svgPath: 'https://assets.tarkov.dev/maps/svg/StreetsOfTarkov-Ground_Level.svg',
    layers: [
      {
        name: 'Underground',
        svgPath: 'https://assets.tarkov.dev/maps/svg/StreetsOfTarkov-Underground_Level.svg',
        show: false,
        extents: [
          {
            height: [
              -10000,
              -6,
            ],
          },
        ],
      },
      {
        name: '2nd Floor',
        svgPath: 'https://assets.tarkov.dev/maps/svg/StreetsOfTarkov-Second_Floor.svg',
        show: false,
        extents: [
          {
            height: [
              10,
              15,
            ],
          },
        ],
      },
      {
        name: '3rd Floor',
        svgPath: 'https://assets.tarkov.dev/maps/svg/StreetsOfTarkov-Third_Floor.svg',
        show: false,
        extents: [
          {
            height: [
              15,
              20,
            ],
          },
        ],
      },
      {
        name: '4th Floor',
        svgPath: 'https://assets.tarkov.dev/maps/svg/StreetsOfTarkov-Fourth_Floor.svg',
        show: false,
        extents: [
          {
            height: [
              20,
              25,
            ],
          },
        ],
      },
      {
        name: '5th Floor',
        svgPath: 'https://assets.tarkov.dev/maps/svg/StreetsOfTarkov-Fifth_Floor.svg',
        show: false,
        extents: [
          {
            height: [
              25,
              10000,
            ],
          },
        ],
      },
    ],
    labels: [
      {
        position: [
          9,
          308,
        ],
        text: 'Primorsky Ave.',
        rotation: -90,
        size: 80,
      },
      {
        position: [
          9,
          104,
        ],
        text: 'Primorsky Ave.',
        rotation: -90,
        size: 80,
      },
      {
        position: [
          9,
          -80,
        ],
        text: 'Primorsky Ave.',
        rotation: -90,
        size: 80,
      },
      {
        position: [
          125,
          10,
        ],
        text: 'Kilmov St.',
        size: 80,
      },
      {
        position: [
          -104,
          28,
        ],
        text: 'Kilmov St.',
        rotation: 10,
        size: 80,
      },
      {
        position: [
          -125,
          210,
        ],
        text: 'Nikitskaya St.',
        size: 80,
      },
      {
        position: [
          -112,
          361,
        ],
        text: 'Verhnyaya St.',
        size: 80,
      },
      {
        position: [
          -200,
          290,
        ],
        text: 'Malevecha St.',
        rotation: -64,
        size: 80,
      },
      {
        position: [
          111,
          251,
        ],
        text: 'Chekannaya St.',
        size: 80,
      },
      {
        position: [
          -101,
          441,
        ],
        text: 'Nizhnyaya St.',
        size: 80,
      },
      {
        position: [
          174,
          430,
        ],
        text: 'Razvedchikov St.',
        rotation: -30,
        size: 80,
      },
      {
        position: [
          140,
          150,
        ],
        text: 'Zmejskij Alley',
        rotation: -68,
        size: 80,
      },
      {
        position: [
          232,
          100,
        ],
        text: 'Kamchatskaya St.',
        rotation: -90,
        size: 80,
      },
      {
        position: [
          -128,
          -35,
        ],
        text: 'Kilmov Shopping Mall',
        size: 90,
      },
      {
        position: [
          -45,
          -52,
        ],
        text: 'Beluga',
        size: 90,
      },
      {
        position: [
          99,
          -71,
        ],
        text: 'Cardinal Apartments',
        size: 90,
      },
      {
        position: [
          230,
          295,
        ],
        text: 'Construction',
        size: 90,
      },
      {
        position: [
          66,
          305,
        ],
        text: 'Lexos',
        size: 90,
      },
      {
        position: [
          140,
          300,
        ],
        text: 'Sparja Grocery',
        size: 90,
      },
      {
        position: [
          -175,
          400,
        ],
        text: 'Cinema',
        size: 90,
      },
      {
        position: [
          -218,
          135,
        ],
        text: 'Shestyorochka',
        size: 90,
      },
      {
        position: [
          -35,
          64,
        ],
        text: 'Pinewood Hotel',
        size: 90,
      },
      {
        position: [
          65,
          398,
        ],
        text: 'Teppakot / Koener',
        size: 70,
      },
      {
        position: [
          140,
          362,
        ],
        text: 'Concordia',
        size: 70,
      },
      {
        position: [
          89,
          -20,
        ],
        text: 'Cardinal Bank',
        size: 70,
      },
      {
        position: [
          239,
          -60,
        ],
        text: 'LERM Expo',
        size: 70,
      },
      {
        position: [
          -64,
          166,
        ],
        text: 'Sparja Express',
        size: 70,
      },
      {
        position: [
          -30,
          138,
        ],
        text: 'Burger Spot',
        size: 70,
      },
      {
        position: [
          42,
          97,
        ],
        text: 'Post Office',
        size: 70,
      },
      {
        position: [
          42,
          160,
        ],
        text: 'Pharmacy 1',
        size: 70,
      },
      {
        position: [
          -173,
          226,
        ],
        text: 'Office',
        size: 70,
      },
      {
        position: [
          -197,
          340,
        ],
        text: 'Corner Restaurant',
        size: 70,
      },
      {
        position: [
          -43,
          335,
        ],
        text: 'Pharmacy 2',
        size: 70,
      },
      {
        position: [
          90,
          -277,
        ],
        text: 'Pharmacy 3',
        size: 70,
      },
      {
        position: [
          67,
          230,
        ],
        text: 'Tarbank',
        size: 70,
      },
      {
        position: [
          211,
          129,
        ],
        text: 'School',
        size: 70,
      },
      {
        position: [
          222,
          173,
        ],
        text: 'Vet Clinic',
        size: 70,
      },
      {
        position: [
          -212,
          300,
        ],
        text: 'Hive',
        size: 70,
      },
      {
        position: [
          -223,
          279,
        ],
        text: 'Family Market',
        size: 70,
      },
      {
        position: [
          -200,
          248,
        ],
        text: 'Marked Hotel',
        size: 70,
      },
      {
        position: [
          -175,
          297,
        ],
        text: 'South Hotel',
        size: 70,
      },
      {
        position: [
          -119,
          287,
        ],
        text: 'Abandon Factory',
        size: 70,
      },
      {
        position: [
          -80,
          235,
        ],
        text: 'Diner',
        size: 70,
      },
      {
        position: [
          -13,
          244,
        ],
        text: 'Primorskij 49',
        size: 70,
      },
      {
        position: [
          39,
          230,
        ],
        text: 'Prestigio Cafe',
        rotation: -45,
        size: 60,
      },
      {
        position: [
          -70,
          343,
        ],
        text: 'Bilbo Coffee',
        size: 60,
      },
    ],
    id: '5714dc692459777137212e12',
    tarkovDataId: null,
    name: '塔科夫街区',
    normalizedName: 'streets-of-tarkov',
    wiki: 'https://escapefromtarkov.fandom.com/wiki/Streets_of_Tarkov',
    description: '塔科夫市中心拥有所有诸如银行，购物中心和旅馆等大都市需要的便利设施。',
    enemies: [
      'Scav',
      '狙击手',
      'Kollontay',
      ' 保镖 (Security)',
      ' 保镖 (Assault)',
      'Kaban',
      'Kaban Guard',
      ' 保镖',
      ' 保镖',
    ],
    raidDuration: 50,
    players: '12-16',
    bosses: [
      {
        boss: {
          id: 'bossKolontay',
          name: 'Kollontay',
          normalizedName: 'kollontay',
          imagePortraitLink: 'https://assets.tarkov.dev/kollontay-portrait.png',
          imagePosterLink: 'https://assets.tarkov.dev/kollontay-poster.jpg',
        },
        spawnChance: 0.15,
        spawnLocations: [
          {
            spawnKey: 'ZoneClimova',
            name: 'Klimov Shopping Mall',
            chance: 0.5,
          },
          {
            spawnKey: 'ZoneMvd',
            name: 'Ministry of the Interior Academy',
            chance: 0.5,
          },
        ],
      },
      {
        boss: {
          id: 'bossBoar',
          name: 'Kaban',
          normalizedName: 'kaban',
          imagePortraitLink: 'https://assets.tarkov.dev/kaban-portrait.png',
          imagePosterLink: 'https://assets.tarkov.dev/kaban-poster.jpg',
        },
        spawnChance: 0.15,
        spawnLocations: [
          {
            spawnKey: 'ZoneCarShowroom',
            name: 'Car Dealership',
            chance: 1,
          },
        ],
      },
    ],
    spawns: [
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 142.932,
          y: 6.69,
          z: 361.238,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 203.780014,
          y: 1.170002,
          z: 190.65,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 204.66,
          y: 3.545,
          z: 404.31,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneCard1',
        position: {
          x: 63.6960144,
          y: 0.270000458,
          z: -55.2399979,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -133.321,
          y: 0.6079955,
          z: -26.729,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: 39.257,
          y: 2.829,
          z: 200.375,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConstruction',
        position: {
          x: 204.58,
          y: 6.91,
          z: 297.1,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 171.993011,
          y: 0.544002533,
          z: 153.186,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '05381357-3db8-406b-b007-e7290f406ede',
        position: {
          x: -178.507,
          y: 2.451,
          z: 415.023,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '055b9120-abe9-4455-a08b-9841bb1fb1e7',
        position: {
          x: 184.824,
          y: 2.528,
          z: 186.987,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '061e1b50-93bb-4d8e-8a78-79c6d4235b83',
        position: {
          x: 100.71,
          y: -1.854,
          z: -162.53,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '06e00b7c-c4b2-4b41-9b5f-f185b9caf444',
        position: {
          x: 53.182,
          y: 4.531,
          z: -138.587,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 58.914,
          y: 2.65034533,
          z: 324.237,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: '07beeaca-f6b0-4ff1-ae20-dbbe9cfc0ca4',
        position: {
          x: 53.22,
          y: 4.781,
          z: -130.649,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '08d42d8a-2c4d-4c8d-b23c-3e06b284df92',
        position: {
          x: 232.64,
          y: 3.49,
          z: 409.53,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 271.1,
          y: 3.526,
          z: 374.04,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '0a1cae8d-6b53-40d2-a7e5-91771dc05803',
        position: {
          x: -134.814,
          y: 3.058,
          z: 399.605,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '0a95f5de-4fed-4aab-8381-b537a5415d88',
        position: {
          x: -163.933,
          y: 3.158,
          z: 183.069,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneFactory',
        position: {
          x: -164.56,
          y: 2.26,
          z: 291.57,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: 39.23,
          y: 2.872,
          z: 222.293,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '0afff689-6beb-46a2-aece-4c1380e986fd',
        position: {
          x: -59.838,
          y: 3.202,
          z: -147.273,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 269.506,
          y: -1.227,
          z: 379.56,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -50.196,
          y: 5.152,
          z: -31.695,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneHotel_1',
        position: {
          x: -84.273,
          y: 1.464,
          z: 177.886,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 224.564011,
          y: 0.5250015,
          z: 182.244,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSnipeStilo',
        position: {
          x: -147.78,
          y: 14.9,
          z: -7.22999954,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 100.996,
          y: 2.6838336,
          z: 271.171021,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: '0fc1edd9-6234-49d5-b6f2-fdbca041de7a',
        position: {
          x: 211.142,
          y: -1.221,
          z: 341.592,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 226.77002,
          y: 0.458999634,
          z: 218.89,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '12aec958-35b1-4808-810d-3a446152514c',
        position: {
          x: -231.978,
          y: 2.312,
          z: 344.996,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '12bb197b-bc6b-449c-9cf1-54ed289a364b',
        position: {
          x: 228.841,
          y: 0.663,
          z: 173.562,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 236.810013,
          y: 0.458999634,
          z: 216.9,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: 39.037,
          y: 2.848,
          z: 203.36,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneHotel_2',
        position: {
          x: -74.66,
          y: 0.9370003,
          z: 75.15,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneHotel_2',
        position: {
          x: -76.42,
          y: 0.9370003,
          z: 76.47,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '1642625e-f60d-48fa-a83a-462639772442',
        position: {
          x: -59.862,
          y: 3.737,
          z: -148.574,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -47.515,
          y: 0.612,
          z: -67.681,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConstruction',
        position: {
          x: 215.331,
          y: 3.37095356,
          z: 331.588,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '193e004b-47e0-4a83-9346-c042cfdb0e0d',
        position: {
          x: 208.555,
          y: 3.935,
          z: 296.639,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1a12fe62-5b4c-4569-9442-226daeb537be',
        position: {
          x: 186.85,
          y: 3.529,
          z: 460.53,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1a739b38-2308-4cdf-9997-ed0a40f835d7',
        position: {
          x: -44.833,
          y: 6.678,
          z: -114.215,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1b431641-ac71-49e5-a807-7988e4799d44',
        position: {
          x: 209.973,
          y: -1.221,
          z: 341.66,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1c5de52e-7857-41a4-8fa6-a0437a1046c1',
        position: {
          x: -227.329,
          y: 5.26,
          z: 277.332,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1c9382e9-e618-4ebe-9034-f53406add842',
        position: {
          x: -58.206,
          y: 3.214,
          z: -146.784,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1cb8c71d-cba3-4641-a415-b1832dd587df',
        position: {
          x: -16.305,
          y: 2.763,
          z: -133.662,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSnipeStilo',
        position: {
          x: -132.87,
          y: 14.9,
          z: -10.3600006,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: '1da69ad5-800f-4c52-a49c-83ad83567849',
        position: {
          x: -136.856,
          y: 2.565,
          z: 399.57,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -158.92,
          y: 0.74,
          z: -27.77,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 214.87001,
          y: -4.46999741,
          z: 30.41,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneHotel_2',
        position: {
          x: -96.61,
          y: 0.9370003,
          z: 83.2299957,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '1fa87642-c899-4952-b848-2401a677f05d',
        position: {
          x: 228.391,
          y: 0.642,
          z: 171.365,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 60.7000122,
          y: 0.520000458,
          z: 169.49,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneFactory',
        position: {
          x: -170.34,
          y: 2.26,
          z: 287.44,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '205c1c16-f3d6-4504-a1f0-5916e08fe58b',
        position: {
          x: 232.682,
          y: -2.049,
          z: -103.148,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '20a712ad-fd79-4983-89e4-5234075c9638',
        position: {
          x: 221.194,
          y: 0.646,
          z: 170.919,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 85.81,
          y: 5.4,
          z: 348.52,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 235.6,
          y: 0.458999634,
          z: 213.8,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 256.02,
          y: -1.227,
          z: 357.65,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneCard1',
        position: {
          x: 137.993011,
          y: -1.41999817,
          z: -55.086,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 76.42502,
          y: -0.629997253,
          z: 86.182,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSnipeCarShowroom',
        position: {
          x: 55.02,
          y: 11.9036674,
          z: 297.38,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneCinema',
        position: {
          x: -189.93,
          y: 8.76,
          z: 421.67,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '27a58c7b-bbe4-450f-b7fc-9232111ac811',
        position: {
          x: -134.489,
          y: 2.515,
          z: 399.622,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '2860e2ed-22f6-4163-b8e2-d64fcd051a7e',
        position: {
          x: -176.75,
          y: 1.218,
          z: 105.23,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '287a00e5-afa8-4255-991d-598e2cc0f455',
        position: {
          x: 231.865,
          y: -2.049,
          z: -106.136,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneHotel_1',
        position: {
          x: -86.032,
          y: 1.464,
          z: 178.024,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 71.815,
          y: 2.701,
          z: 266.432,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 164.554016,
          y: 0.544002533,
          z: 138.12,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '2a0f649a-ad74-43ae-a6a9-26dd04f64eb0',
        position: {
          x: -205.115,
          y: 3.367,
          z: 182.111,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '2a63de9c-7537-41ca-9670-de45fba8892c',
        position: {
          x: 187.061,
          y: 1.574,
          z: 189.557,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConstruction',
        position: {
          x: 214.818,
          y: 3.37095356,
          z: 329.919,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '2e7b1c7a-a66e-4c90-9937-53a61ca5e7da',
        position: {
          x: -179.339,
          y: 2.451,
          z: 416.352,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '2e904d20-0a47-458c-92e2-6f51d7b600dc',
        position: {
          x: 261.511,
          y: -5.94,
          z: 49.977,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: -16.872,
          y: 2.633,
          z: 242.265,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '31802d49-5363-437c-86d4-bdf80b7d0e94',
        position: {
          x: -176.596,
          y: 2.455,
          z: 466.984,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneHotel_1',
        position: {
          x: -70.735,
          y: 1.464,
          z: 154.221008,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '324de29c-ed55-45f0-8b62-5a6f125d89ee',
        position: {
          x: 271.36,
          y: -1.16,
          z: 376.28,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneMvd',
        position: {
          x: -258.28,
          y: 2.86,
          z: 140.75,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: '333d8134-55fa-4556-9214-59703d6fd4cf',
        position: {
          x: -111.692,
          y: 0.659,
          z: -28.424,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '34f4b186-867c-431d-b706-d4114867c969',
        position: {
          x: -203.631,
          y: 3.367,
          z: 180.776,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '3563d32b-aae5-4f04-a95d-36d8455b42f0',
        position: {
          x: 234.745,
          y: -2.049,
          z: -103.385,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '35c84f0b-bdc1-4499-814d-f904a9dfe896',
        position: {
          x: 102.07,
          y: -1.854,
          z: -158.58,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '35f2a220-0007-455b-ac2d-a79a402ed0e1',
        position: {
          x: -192.295,
          y: 3.137,
          z: 345.684,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 201.178,
          y: 3.545,
          z: 401.783,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '379f1724-3244-4a26-a604-857607bab059',
        position: {
          x: -150.644,
          y: 0.65,
          z: -63.383,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '3928558f-893e-4c30-a981-1a93e4ba9468',
        position: {
          x: -182.94,
          y: 2.41,
          z: 413.56,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '39637b62-6c87-4fee-bc32-446b3e76ad65',
        position: {
          x: -152.333,
          y: 0.736,
          z: -66.574,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '3a49af12-a9d4-44fb-b6e1-241cfd48661f',
        position: {
          x: 175.964,
          y: 3.093,
          z: 234.797,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '3c5202ab-9df1-464d-bceb-f7b0c94978b3',
        position: {
          x: -192.658,
          y: 4.993,
          z: 386.326,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '3d6f0b05-6fa2-414a-8e6a-1c725ee7c98b',
        position: {
          x: 52.732,
          y: 4.531,
          z: -135.649,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '3da963bd-5ff6-4d70-ab3c-50dbc5291d93',
        position: {
          x: -50.879,
          y: 0.668,
          z: -67.271,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 244.650009,
          y: -5.369999,
          z: 28.72,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '3f2579e6-c7a4-46c3-8b3f-c5e46b2f2179',
        position: {
          x: 185.6,
          y: 3.529,
          z: 459.37,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '40456b8a-17a5-48ec-acfc-fcaccffbb369',
        position: {
          x: -235.154,
          y: 2.846,
          z: 345.06,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '415f3cfd-a781-4cce-af45-a6e5e540c2d8',
        position: {
          x: 99.35,
          y: 2.76,
          z: 446.78,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: -15.846,
          y: 2.633,
          z: 232.6,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSnipeStilo',
        position: {
          x: -161.81,
          y: 14.9,
          z: -4.299999,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: '434372f3-b06c-4ff2-bddd-ea5c49e64980',
        position: {
          x: 155.767,
          y: 3.624,
          z: 428.614,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSnipeCard',
        position: {
          x: 41.18,
          y: 28.512,
          z: -20.71,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: 'ZoneSnipeBuilding',
        position: {
          x: -24.67,
          y: 21.1835,
          z: 228.13,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: '449f9c89-4da0-4cce-a2d1-768eab547d90',
        position: {
          x: -65.996,
          y: 2.699,
          z: 459.747,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4598a010-a486-47b8-8242-fd738fccb250',
        position: {
          x: 270.52,
          y: -4.431,
          z: 88.67,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '459dcb35-edf8-4a0f-b8c3-292aed6e54f8',
        position: {
          x: -242.312,
          y: 3.685,
          z: 242.94,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '45ee04b7-c90a-45d9-a774-a2462823e1d9',
        position: {
          x: 45.792,
          y: 2.717,
          z: 417.082,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 167.700012,
          y: -3.73999786,
          z: 29.57,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '461b6342-cc1c-4217-8d98-ddd3f56471ba',
        position: {
          x: 157,
          y: 3.624,
          z: 430.76,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '489874fa-2e4b-4351-b54a-40785d13404f',
        position: {
          x: 186.511,
          y: 1.574,
          z: 188.445,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4954677b-e5db-40c3-a31a-991cf0078667',
        position: {
          x: 186.79,
          y: 3.529,
          z: 454.4,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '49dbe3ee-602c-41ad-977b-03391cb6ef85',
        position: {
          x: -106.422,
          y: 0.662,
          z: -29.223,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4a2321cc-5cff-43fb-9fd9-8503c30409b5',
        position: {
          x: -231.985,
          y: 2.196,
          z: 342.49,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 195.240021,
          y: 1.24000168,
          z: 221.27,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 172.87001,
          y: 0.544002533,
          z: 154.790009,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '4afab3b8-1bf3-4a60-add4-c35c282330de',
        position: {
          x: -243.129,
          y: 3.43,
          z: 240.565,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConstruction',
        position: {
          x: 204.5,
          y: 4.051,
          z: 297.93,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '4be30299-8bd5-40a7-8ddb-567fcf24fe8e',
        position: {
          x: -10.37,
          y: 2.763,
          z: -135.41,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCard1',
        position: {
          x: 144.930008,
          y: -1.41999817,
          z: -42.8000031,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '4e394534-0f48-48d1-9eea-9f220a71ab7c',
        position: {
          x: -180.504,
          y: 2.451,
          z: 419.05,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4e6a55b9-afc8-43a5-8829-a975360bdd1d',
        position: {
          x: 233.368,
          y: -2.049,
          z: -107.123,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 243.63,
          y: -5.369999,
          z: 29.31,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '4eac1ca9-b5e9-4152-8a37-1b6a9ceb31c0',
        position: {
          x: 227.6,
          y: 3.351,
          z: 410.72,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4ef9cea7-5a05-48f7-a2f9-ec3d8c293e46',
        position: {
          x: -175.222,
          y: 2.455,
          z: 468.656,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4f151837-42df-4901-a690-eb2a0e8da35b',
        position: {
          x: -152.769,
          y: 9.669,
          z: -26.856,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4f682901-0a40-4edf-a6c6-498a55dd3eb0',
        position: {
          x: -61.464,
          y: 2.699,
          z: 457.351,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -155.71,
          y: 0.74,
          z: -22.7799988,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '4fa6a8fd-fbae-4fb9-8a46-2fd88ac12e03',
        position: {
          x: -150.592,
          y: 9.644,
          z: -23.594,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 78.042,
          y: 2.837,
          z: 286.172,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: '507e4e1d-a245-4f88-9f2b-6050cd4a6c38',
        position: {
          x: 231.32,
          y: 3.49,
          z: 410.43,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneMvd',
        position: {
          x: -253.98999,
          y: 3.09,
          z: 125.359993,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: '513389c0-537c-4b78-8605-eb3a3bedc851',
        position: {
          x: -47.652,
          y: 0.668,
          z: -65.516,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '51d31613-2013-4a87-911f-5b2fb4d44c25',
        position: {
          x: 44.472,
          y: 2.717,
          z: 414.922,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '523ddb61-fa1c-460d-be68-4f7638f6d80d',
        position: {
          x: 244.71,
          y: -3.21,
          z: -36.95,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 170.02002,
          y: -3.73999786,
          z: 30.06,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneClimova',
        position: {
          x: -123.55,
          y: 5.102994,
          z: -31.5099983,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: '5419341d-08ed-4bee-bad9-a964af07ac11',
        position: {
          x: -234.277,
          y: 2.196,
          z: 342.105,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 200.801,
          y: 3.545,
          z: 405.031,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 258.023,
          y: -1.227,
          z: 357.136,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '55969eb0-e827-41db-974a-cd045ff773b4',
        position: {
          x: 175.713,
          y: 3.172,
          z: 236.73,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 144.582,
          y: 3.531,
          z: 357.876,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '566d2f6b-240c-47b2-a985-0868f5a20b38',
        position: {
          x: -48.546,
          y: 0.668,
          z: -67.733,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '56ae82fe-7073-45e7-82bf-a94494b5a509',
        position: {
          x: 179.062,
          y: 3.048,
          z: 233.031,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '587f4c37-b43e-4319-a238-f394bf59609d',
        position: {
          x: -226.569,
          y: 5.26,
          z: 279.065,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '5b161871-7fe0-4764-925b-75a5d9320859',
        position: {
          x: -65.728,
          y: 2.699,
          z: 457.559,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneHotel_2',
        position: {
          x: -80.18,
          y: 0.9370003,
          z: 74.08,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -29.74,
          y: 5.15,
          z: -64.77,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '5cfd77db-4ab6-45ec-a4d4-a4a30c9e75ce',
        position: {
          x: 211.905,
          y: -0.33,
          z: 343.2,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -50.974,
          y: 5.152,
          z: -29.5530014,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '5e92a302-e46c-4acc-adc8-b349b40b5fd7',
        position: {
          x: 272.018,
          y: -1.16,
          z: 375.369,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -46.111,
          y: 0.616,
          z: -67.664,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '60ac962f-60e7-4049-b52b-bbcc48bd2a86',
        position: {
          x: 257.34,
          y: -5.94,
          z: 50.955,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '61264e7e-0ca3-42ea-8537-fa9b655df5be',
        position: {
          x: 170.335,
          y: -1.451,
          z: -129.286,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCinema',
        position: {
          x: -52.284,
          y: -0.179458022,
          z: 386.267,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneFactory',
        position: {
          x: -100.35,
          y: 2.32,
          z: 268.45,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 76.02602,
          y: -0.629997253,
          z: 88.469,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 114.480011,
          y: 0.920002,
          z: 189.07,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '6255df32-b929-4e02-8db9-ddf69e716491',
        position: {
          x: -188.923,
          y: 3.137,
          z: 340.446,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '6334d0e4-3651-4ed3-ba11-5dcb4a8ac4e6',
        position: {
          x: -176.32,
          y: 1.218,
          z: 106.89,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConstruction',
        position: {
          x: 209.379,
          y: 4.051,
          z: 298.748,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '6425842e-d951-4538-8b44-ab6fccfae4c4',
        position: {
          x: 205.631,
          y: 3.935,
          z: 296.404,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCard1',
        position: {
          x: 44.8300171,
          y: 0.270000458,
          z: -36.85,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 212.68,
          y: -1.22,
          z: 350.13,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneClimova',
        position: {
          x: -147.52,
          y: 0.13,
          z: -67.43,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: '65894af8-198d-4e4a-ac91-315d3aaf72d4',
        position: {
          x: -135.79,
          y: 2.34,
          z: 401.49,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneHotel_1',
        position: {
          x: -71.95,
          y: 1.464,
          z: 154.769989,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 143.03,
          y: 3.52,
          z: 359.66,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConstruction',
        position: {
          x: 206.164,
          y: 6.932,
          z: 299.252,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 271.007,
          y: 3.526,
          z: 371.175,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 89.824,
          y: 2.6838336,
          z: 314.917,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: '699750da-15c5-4b86-9997-7dc18be81b1c',
        position: {
          x: 209.839,
          y: 3.935,
          z: 297.28,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '6c27f4e5-06ad-4932-a056-b0c2c343d498',
        position: {
          x: 258.622,
          y: -5.94,
          z: 48.843,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '6c90c26e-cfca-4e75-986b-de60d0c7459c',
        position: {
          x: 211.97,
          y: 0.444,
          z: 345.289,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '6cfbccb6-7a27-4476-897d-049e95a5386b',
        position: {
          x: 274.053,
          y: 4.782,
          z: 518.326,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '6d99aad4-c884-48fe-ac03-6edbbdc51052',
        position: {
          x: 106.65,
          y: -1.854,
          z: -162.6,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 271.827,
          y: 3.526,
          z: 369.477,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneCinema',
        position: {
          x: -134.383,
          y: 2.545,
          z: 395.888,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneHotel_1',
        position: {
          x: -69.316,
          y: 1.464,
          z: 156.097,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 142.39,
          y: 3.52,
          z: 361.571,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '6f685b3e-cf6a-4e34-8a6e-c5fee3b1308d',
        position: {
          x: -157.981,
          y: 9.684,
          z: -26.729,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '6fa19d8b-0a96-4aa3-8441-9d9d66649d3c',
        position: {
          x: -195.373,
          y: 4.992,
          z: 384.652,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -1.164,
          y: -3.71,
          z: -4.179001,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '71098951-d846-4225-a9bc-6b418505bdcc',
        position: {
          x: 177.294,
          y: 3.093,
          z: 234.762,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 81.4,
          y: 2.757,
          z: 297.38,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 224.400009,
          y: 0.458999634,
          z: 219.96,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneFactory',
        position: {
          x: -162,
          y: 2.26,
          z: 289.52,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 251.740021,
          y: -1.06999969,
          z: 148.39,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '7358f6b2-61ea-47db-8b99-e8ed4df5f93c',
        position: {
          x: -161.686,
          y: 3.221,
          z: 180.655,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '7433262f-ef82-43b6-b06e-a8c77ba35fd8',
        position: {
          x: 211.022,
          y: 0.465,
          z: 346.075,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '7476377d-3918-48b1-9a1c-e5b54b54b1ef',
        position: {
          x: -225.555,
          y: 5.226,
          z: 282.178,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '74effe05-4c97-43b5-aabe-7d21e692d290',
        position: {
          x: -243.08,
          y: 3.685,
          z: 243.479,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSnipeSW01',
        position: {
          x: 89.28,
          y: 35.02,
          z: 101.34,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: 'ZoneHotel_1',
        position: {
          x: -84.9,
          y: 1.464,
          z: 175.6,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '75be936b-36ee-4cc4-8172-ef1298934a7d',
        position: {
          x: -14.886,
          y: 2.763,
          z: -139.338,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '75ce069c-ef5a-4ae0-b129-7242d1464303',
        position: {
          x: -162.757,
          y: 3.221,
          z: 177.965,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '7676ad3f-03fb-4038-8496-aa2de51085ba',
        position: {
          x: -178.03,
          y: 1.218,
          z: 107.92,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 251.63,
          y: -1.06999969,
          z: 145.41,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneHotel_2',
        position: {
          x: -77.38,
          y: 0.9370003,
          z: 75.04,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 207.76,
          y: 3.545,
          z: 404.55,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 173.44,
          y: -1.21999741,
          z: 57.7399979,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '783ff352-0728-4169-8f1e-42c2695ae52c',
        position: {
          x: 158.33,
          y: 3.624,
          z: 428.53,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '7869473c-17c2-4db8-ab57-c5a0546d5a69',
        position: {
          x: -155.781,
          y: 9.671,
          z: -26.933,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '789e2418-ed73-40b7-be6c-e3ed899e1a40',
        position: {
          x: 244.86,
          y: -3.21,
          z: -40.06,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneHotel_2',
        position: {
          x: -93.88,
          y: 0.9370003,
          z: 86.85,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '796cca85-8415-45d3-833c-c3fa8ca9bddb',
        position: {
          x: -52.407,
          y: 0.668,
          z: -66.38,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCinema',
        position: {
          x: -135.394,
          y: 2.545,
          z: 399.657,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '79a51362-4e5f-47ba-afaf-290b94f9cf9e',
        position: {
          x: -206.343,
          y: 3.367,
          z: 180.998,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '7da44254-8e5b-4118-ac6a-abcc0ae75548',
        position: {
          x: -190.088,
          y: 3.137,
          z: 338.111,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '7f644e0e-ba02-4107-a625-f38c4c31f714',
        position: {
          x: 166.96,
          y: -1.451,
          z: -132.76,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: -16.71,
          y: 2.684,
          z: 238.5,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 165.540009,
          y: -1.27999878,
          z: 106.77,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '8246f7ef-a3d2-40e1-ba24-1388d889f5f6',
        position: {
          x: -65.706,
          y: 2.699,
          z: 461.359,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8285cec6-97d0-431f-82ff-e57d864866ca',
        position: {
          x: -31.202,
          y: 2.615,
          z: 465.022,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneHotel_1',
        position: {
          x: -87.68,
          y: 1.464,
          z: 178.296,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '84983058-e647-4955-a40a-1efe6c6b959b',
        position: {
          x: 245.03,
          y: -3.21,
          z: -38.56,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 173.77002,
          y: -1.21999741,
          z: 56.25,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '882227cc-5a26-41d8-9cb9-a0d8d10b8444',
        position: {
          x: -227.27,
          y: 5.226,
          z: 282.533,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCard1',
        position: {
          x: 38.52002,
          y: 0.11000061,
          z: -46.7979965,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneClimova',
        position: {
          x: -136.07,
          y: 0.13,
          z: -71.29,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: '89342b83-2833-4b91-8ec9-5657095bd0b0',
        position: {
          x: -191.392,
          y: 3.137,
          z: 344.702,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCard1',
        position: {
          x: 140.690018,
          y: -1.41999817,
          z: -51.709,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '89d6c4f6-9c38-4163-b3ac-ac926bf47b6f',
        position: {
          x: -165.629,
          y: 3.158,
          z: 183.074,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8b0b1cf1-f045-4a53-bf61-6f14adc71f75',
        position: {
          x: -151.106,
          y: 0.736,
          z: -66.902,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8b2329e2-3502-4c63-b744-6f3065ff3530',
        position: {
          x: -58.333,
          y: 3.214,
          z: -145.348,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 79.89801,
          y: 0.8840027,
          z: 165.156,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 259.068024,
          y: -5.336998,
          z: 76.575,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '8cec45df-ee6b-47bf-84f3-c3c4d38088a2',
        position: {
          x: -61.886,
          y: 2.699,
          z: 461.654,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8e8fd66a-db92-49fd-9c82-2cd7a7ff1d5e',
        position: {
          x: -136.26,
          y: 2.34,
          z: 402.74,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8eb7065a-df86-48c9-ace7-bc6e59372ad3',
        position: {
          x: 226.448,
          y: 0.696,
          z: 171.106,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 184.840012,
          y: -4.199997,
          z: 30.2,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '8ee254ee-954f-4f9f-b04d-23abb8cecf7e',
        position: {
          x: -31.017,
          y: 2.615,
          z: 466.544,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8f1d72e8-8dee-4a6b-b86c-412a0cca080c',
        position: {
          x: 234.399,
          y: -2.049,
          z: -105.547,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8faf7e0f-ba4a-4b7b-9ed7-642d84db17d2',
        position: {
          x: -43.209,
          y: 6.7,
          z: -114.198,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '906d71d5-db71-47c1-8a58-0f48f58daea1',
        position: {
          x: -32.585,
          y: 2.615,
          z: 466.542,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '91635471-4f27-4156-9801-9dbdf80f2970',
        position: {
          x: -226.153,
          y: 5.226,
          z: 280.783,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneClimova',
        position: {
          x: -153.62,
          y: 0.13,
          z: -64.64,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneSnipeCard',
        position: {
          x: 43.74,
          y: 28.512,
          z: -17.0099983,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: '934cdbef-b43f-4690-aa4a-b34dc193abd0',
        position: {
          x: 99.03,
          y: -1.854,
          z: -158.78,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '95453f5c-5ca5-405f-8872-ea088ca155c3',
        position: {
          x: -32.607,
          y: 2.615,
          z: 465.087,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -3.191,
          y: -3.71,
          z: -6.13499832,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 208.592,
          y: -1.22,
          z: 350.427,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConstruction',
        position: {
          x: 184.84,
          y: 3.41262436,
          z: 328.16,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSnipeCinema',
        position: {
          x: -166.71,
          y: 23.1993332,
          z: 390.43,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 114.210007,
          y: 1.25,
          z: 192.06,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '9a479113-f5ac-433e-aa4b-b6f6c6b8d5e4',
        position: {
          x: -106.95,
          y: 0.662,
          z: -30.759,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '9b4cc2e1-662c-4f96-af4f-f022527d9868',
        position: {
          x: 167.909988,
          y: -1.451,
          z: -128.53,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '9c57887e-d1c9-4e0f-94e6-558d49b96faf',
        position: {
          x: 229.38,
          y: 3.37,
          z: 410.74,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 222.497009,
          y: 0.5250015,
          z: 182.676,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: -16.387,
          y: 2.633,
          z: 231.312,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 271.591,
          y: -1.227,
          z: 379.893,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: 38.39,
          y: 2.159,
          z: 194.976,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: '9e3be350-92e3-434b-befc-b12ccbb2af45',
        position: {
          x: -244.442,
          y: 2.193,
          z: 237.972,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 147.22,
          y: 3.531,
          z: 358,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 189.16,
          y: 1.670002,
          z: 206.87,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 188.930023,
          y: 0.6000023,
          z: 195.19,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'a0bca4c5-ae22-462c-9aa1-290ba3023b84',
        position: {
          x: -230.641,
          y: 2.196,
          z: 342.45,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCinema',
        position: {
          x: -192.37,
          y: 8.76,
          z: 421.58,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'a2afda58-3556-4186-aad7-72c7f34a1334',
        position: {
          x: 211.085,
          y: 3.935,
          z: 297.4,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'a3ab1bc5-47c5-4b00-a364-770d046ce559',
        position: {
          x: -108.95,
          y: 0.662,
          z: -28.307,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 142.932,
          y: 3.622,
          z: 357.98,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 81.32602,
          y: 0.8840027,
          z: 163.591,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'a6ac7812-b011-4b25-9b74-9743e79ad4ee',
        position: {
          x: -111.445,
          y: 0.668,
          z: -30.917,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'a6b0f695-68d1-480c-8f64-996725d71036',
        position: {
          x: 168.3,
          y: -1.451,
          z: -130.72,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 77.91002,
          y: 0.700000763,
          z: 165.45,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 95.922,
          y: 2.684,
          z: 306.475,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 164.280014,
          y: 0.544002533,
          z: 136.68,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 269.852,
          y: -1.227,
          z: 381.269,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'a9bd8162-167c-40e5-9027-20a2fe5b6ef9',
        position: {
          x: -195.641,
          y: 4.992,
          z: 387.005,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'a9dffad6-bc0d-48ae-a314-acd62b128fd8',
        position: {
          x: 45.106,
          y: 2.717,
          z: 413.596,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'aa9222f5-c4ee-4569-8e5e-7689d4bad545',
        position: {
          x: 93.93,
          y: 2.579,
          z: 451.26,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ac155f80-d9a7-431b-8608-0e6e74287afd',
        position: {
          x: 273.3,
          y: -1.16,
          z: 377.25,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCinema',
        position: {
          x: -194.21,
          y: 8.76,
          z: 423.09,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: -12.53,
          y: 2.633,
          z: 231.915,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 260.210022,
          y: -1.199997,
          z: 130.040009,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ad71c83a-8552-468e-9bbb-7530d53b1cb0',
        position: {
          x: 104.25,
          y: -1.854,
          z: -162.48,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'adce64c7-8895-4530-bbd2-16644a35224a',
        position: {
          x: 185.35,
          y: 3.529,
          z: 451.26,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ade8885f-b41b-4e5f-a31d-4a5ff0aef1e7',
        position: {
          x: -162.386,
          y: 3.158,
          z: 182.139,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneHotel_2',
        position: {
          x: -98.32,
          y: 0.9370003,
          z: 86.31,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'aea27585-1f8c-49dc-9524-88fe4e9f0bdd',
        position: {
          x: 46.174,
          y: 2.717,
          z: 415.754,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'aeab5681-09ec-47fb-87d5-571b6e33522f',
        position: {
          x: -181.525,
          y: 2.451,
          z: 415.068,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'aeb13e1b-ba7b-4f2c-92a8-3d7120b32dbe',
        position: {
          x: -50.789,
          y: 0.668,
          z: -65.073,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'af2c001e-a978-4c68-9acc-eac8709cdc7c',
        position: {
          x: 177.514,
          y: 3.093,
          z: 236.545,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSnipeStilo',
        position: {
          x: -119.24,
          y: 14.9,
          z: -12.25,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: 'ZoneCinema',
        position: {
          x: -135.905,
          y: 2.545,
          z: 395.469,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'b14d74dc-3024-493a-bc59-2f3fc244a185',
        position: {
          x: 275.666,
          y: -4.431,
          z: 88.001,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCard1',
        position: {
          x: 70.99402,
          y: 0.270000458,
          z: -49.2839966,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 245.6,
          y: -5.68999863,
          z: 24.8699989,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'b375b2e4-d13f-4e81-9b58-672da90131f0',
        position: {
          x: -152.382,
          y: 0.663,
          z: -62.95,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -31.626,
          y: 0.615,
          z: -59.596,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConstruction',
        position: {
          x: 215.231,
          y: 3.37095356,
          z: 330.802,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -30.119,
          y: 0.691,
          z: -63.183,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 234.572021,
          y: 0.458999634,
          z: 215.794,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 210.467,
          y: -1.22,
          z: 351.635,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'bb776772-5164-40f4-984b-67ce81dc2e4b',
        position: {
          x: 206.924,
          y: 3.935,
          z: 295.835,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneHotel_1',
        position: {
          x: -35.53,
          y: 1.464,
          z: 156.55,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConstruction',
        position: {
          x: 207.14,
          y: 4.051,
          z: 298.55,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'bdf5a017-bab7-4abe-be10-4a1879de7662',
        position: {
          x: -175.044,
          y: 2.455,
          z: 466.141,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 186.52002,
          y: -4.37999725,
          z: 30.82,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 75.69002,
          y: 0.5612259,
          z: 165.33,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'c0247ccc-9087-47fc-8260-2d23ac5bbb5b',
        position: {
          x: 259.911,
          y: -5.94,
          z: 52.289,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSnipeCinema',
        position: {
          x: -166.03,
          y: 23.1993332,
          z: 410.85,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneCinema',
        position: {
          x: -191.95,
          y: 8.76,
          z: 423.31,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'c1e6eaa9-74de-4da9-ac49-62faf320c4ab',
        position: {
          x: 185.446,
          y: 3.529,
          z: 456.849,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'c2477145-0481-4d79-a1cb-5e13f6454478',
        position: {
          x: -176.05,
          y: 1.218,
          z: 108.38,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: -16.204,
          y: 2.633,
          z: 253.572,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'c2a3cb3b-a64f-485b-bf2b-c14fc5ec3938',
        position: {
          x: 50.602,
          y: 4.465,
          z: -134.514,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 82.266,
          y: 2.791,
          z: 266.358,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneFactory',
        position: {
          x: -171.35,
          y: 2.36,
          z: 285.08,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 101.45,
          y: 4.99,
          z: 312.85,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 117.27002,
          y: 0.580001831,
          z: 188.66,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 258.721,
          y: -5.336998,
          z: 77.856,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'c736ae69-2631-4d51-b5ac-6a466c7c8dd8',
        position: {
          x: 185.557,
          y: 1.574,
          z: 188.963,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 192.330017,
          y: 1.06999969,
          z: 221.81,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'c8a3c9e4-7998-41fa-b311-9e9feb35588c',
        position: {
          x: -204.056,
          y: 3.367,
          z: 179.404,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 202.85,
          y: 3.545,
          z: 402.46,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordia_1',
        position: {
          x: 142.866,
          y: 3.622,
          z: 363.484,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneFactory',
        position: {
          x: -105.041,
          y: 2.32,
          z: 267.041016,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -36.052,
          y: 5.22,
          z: -64.392,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 75.18001,
          y: -0.629997253,
          z: 92.28,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneCinema',
        position: {
          x: -139.949,
          y: 2.545,
          z: 401.048,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'cf94127f-36e9-4222-80fe-21168a27bee1',
        position: {
          x: 244.576,
          y: -3.21,
          z: -41.784,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'cfa21779-49ad-49b5-ae7a-33bc0bd0f620',
        position: {
          x: 98.71,
          y: 2.76,
          z: 450.63,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 257.73,
          y: -1.227,
          z: 359.39,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'cfdbef81-7026-4035-af30-b22d33815b18',
        position: {
          x: -153.903,
          y: 0.654,
          z: -64.471,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCard1',
        position: {
          x: 126.700012,
          y: -1.41999817,
          z: -27.66,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneHotel_1',
        position: {
          x: -70.471,
          y: 1.464,
          z: 152.372009,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'd0bcc73b-7a8c-49d4-b715-1841f401cd51',
        position: {
          x: -59.728,
          y: 4.488,
          z: -149.696,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'd193cee0-4e4f-486a-a8cc-26834fd64b1a',
        position: {
          x: -176.548,
          y: 2.455,
          z: 468.992,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'd4125c7a-6690-405b-ad08-ab66c3aa6d85',
        position: {
          x: -42.942,
          y: 6.67,
          z: -115.674,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneMvd',
        position: {
          x: -254.2,
          y: 3.47,
          z: 149.62999,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: 'd4dcb5bb-9231-4404-b0ba-3544e0f5f240',
        position: {
          x: -13.868,
          y: 2.763,
          z: -132.861,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -2.675,
          y: -3.71,
          z: -4.22299957,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'd7b6bcfb-eaeb-42e0-a63f-69cf5c2f9d33',
        position: {
          x: 53.22,
          y: 4.531,
          z: -132.52,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'd7f21299-b53b-48e4-984e-6aa9f81a5a88',
        position: {
          x: -193.63,
          y: 3.137,
          z: 346.516,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'd86d8ead-2302-4817-858e-74fa428a244e',
        position: {
          x: 216.25,
          y: 0.67,
          z: 170.56,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'd87780be-c25b-44b0-8340-27714ea6d4d0',
        position: {
          x: -174.294,
          y: 1.218,
          z: 107.643,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'da0cccb8-0123-4e04-b765-f31434dc56a6',
        position: {
          x: -195.947,
          y: 4.993,
          z: 389.306,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'dae85c43-6039-4755-bfe0-c0a3de2a9f3b',
        position: {
          x: 272,
          y: -1.16,
          z: 374.65,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'db356917-3655-4cb0-8e01-47eb593510e0',
        position: {
          x: -149.896,
          y: 9.669,
          z: -27.344,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -31.45,
          y: 0.6080003,
          z: -70.643,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'dbdc91e7-8a95-4cb6-abf0-9d5de4ee1da0',
        position: {
          x: 226.23,
          y: 3.351,
          z: 410.5,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'dd8b106c-8f50-4e33-bb3b-39388c0eab41',
        position: {
          x: 43.754,
          y: 2.717,
          z: 416.533,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneHotel_2',
        position: {
          x: -96.1,
          y: 0.9370003,
          z: 87,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'de0cd670-1399-475e-afca-036ff914ad5c',
        position: {
          x: 268.66,
          y: -4.431,
          z: 88.95,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: 39.309,
          y: 2.816,
          z: 220.356,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'df295b85-971d-4e9e-8239-018033690b5b',
        position: {
          x: 274.105,
          y: -1.16,
          z: 376.208,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 271.213,
          y: -1.227,
          z: 378.527,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneCinema',
        position: {
          x: -141.018,
          y: 2.545,
          z: 400.981,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 203.155,
          y: -1.227,
          z: 405.033,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneFactory',
        position: {
          x: -103.881,
          y: 2.32,
          z: 267.981018,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 165.540009,
          y: -1.27999878,
          z: 106.77,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 101.469,
          y: 2.676,
          z: 290.25,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: 'e3b84d57-bdd7-4e38-ac5f-62dad937e572',
        position: {
          x: -193.902,
          y: 4.993,
          z: 389.207,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW01',
        position: {
          x: 75.3500061,
          y: -0.6969986,
          z: 90.2299957,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'e401a964-689a-464e-8b66-c485933f9c0d',
        position: {
          x: 226.23,
          y: 3.351,
          z: 410.5,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'e5c87107-42a5-4019-a437-ef8f6d703122',
        position: {
          x: 273.202,
          y: 4.781,
          z: 516.697,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'e5e1d18b-da5b-4d2d-a445-54bd9117eee7',
        position: {
          x: -203.697,
          y: 3.367,
          z: 182.271,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'e6509e2d-3b03-4079-8904-c499dc2efba4',
        position: {
          x: 274.738,
          y: 4.782,
          z: 517.334,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'e751b2f9-4919-40d1-8877-b9c4bcbf5435',
        position: {
          x: 275.417,
          y: 4.782,
          z: 516.126,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCard1',
        position: {
          x: 143.030014,
          y: -1.41999817,
          z: -36.03,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSnipeCard',
        position: {
          x: 65.73,
          y: 28.512,
          z: -16.0600014,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 273.069,
          y: -1.227,
          z: 375.708,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'e8b8754b-c2a7-4563-be0f-74bc4b34cdee',
        position: {
          x: 277.164,
          y: -4.431,
          z: 87.967,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -50.032,
          y: 5.22,
          z: -62.1,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 216.150009,
          y: -4.46999741,
          z: 30.71,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ea574eed-cdcd-4448-801b-a8398cc6b8df',
        position: {
          x: 154.142,
          y: 3.624,
          z: 428.129,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 164.554016,
          y: 0.544002533,
          z: 138.12,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'eb9c6017-661e-409c-9bb6-ec997683109d',
        position: {
          x: -173.311,
          y: 2.455,
          z: 467.431,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ecafbe6f-9432-4728-b829-4a2f6530364d',
        position: {
          x: 272.043,
          y: 4.773,
          z: 516.173,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCarShowroom',
        position: {
          x: 76.327,
          y: 2.838,
          z: 288.368,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -159.77,
          y: 0.74,
          z: -21.0299988,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneHotel_2',
        position: {
          x: -109.617,
          y: 1.464,
          z: 73.128,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneCard1',
        position: {
          x: 57.3770142,
          y: 0.270000458,
          z: -55.4929962,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'edd5229f-7229-4ef0-9093-daaac227f875',
        position: {
          x: 272.319,
          y: -4.493,
          z: 87.688,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSnipeCarShowroom',
        position: {
          x: 58.61,
          y: 11.9036674,
          z: 309.91,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ef5737c8-b0f7-4db9-a986-4206aea8fbb1',
        position: {
          x: -42.919,
          y: 6.677,
          z: -117.171,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 210.91,
          y: -1.22,
          z: 350.161,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'f2e231e6-a45f-4f2a-a220-eb2fb3acd888',
        position: {
          x: 91.666,
          y: 2.579,
          z: 450.023,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'f2f4ba88-575b-41f9-b1e4-7f611a152dd9',
        position: {
          x: -10.48,
          y: 2.763,
          z: -137.96,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCard1',
        position: {
          x: 43.5800171,
          y: 0.270000458,
          z: -43.65,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 256.983,
          y: -5.336998,
          z: 77.123,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneFactory',
        position: {
          x: -101.15,
          y: 2.32,
          z: 269.47,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'f3b6a67b-2630-487a-aec0-56062d52e87e',
        position: {
          x: 186.308,
          y: 1.65,
          z: 186.469,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneStilo',
        position: {
          x: -32.96,
          y: 0.6080003,
          z: -69.863,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'f6b9cd44-6c11-4c17-ac58-897b2af338ac',
        position: {
          x: 155.154,
          y: 3.624,
          z: 430.339,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'f6cc8fe9-efc2-4b01-bd68-87565e068436',
        position: {
          x: -29.893,
          y: 2.615,
          z: 465.548,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 207.360016,
          y: 1.170002,
          z: 190.41,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneConcordiaParking',
        position: {
          x: 259.267,
          y: -1.227,
          z: 358.498,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 187.990021,
          y: 1.78000259,
          z: 191.28,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'fb27922a-bde1-4d4e-8d54-2bebcc0985d4',
        position: {
          x: 95.66,
          y: 2.65,
          z: 448.81,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneColumn',
        position: {
          x: 38.27,
          y: 2.159,
          z: 196.95,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'ZoneSW00',
        position: {
          x: 164.554016,
          y: 0.544002533,
          z: 138.12,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
        ],
      },
      {
        zoneName: 'fc8c0d11-fecf-4e65-9b95-ec8afe78073d',
        position: {
          x: 244.69,
          y: -3.21,
          z: -35.49,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneClimova',
        position: {
          x: -155.72,
          y: 0.13,
          z: -58.1299973,
        },
        sides: [
          'scav',
        ],
        categories: [
          'all',
          'boss',
        ],
      },
      {
        zoneName: 'fd538d06-6c39-4b38-8386-c45d0ed446b1',
        position: {
          x: -46.121,
          y: 6.062,
          z: -114.006,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'fe07dac4-1e9e-4ec8-9a4a-aef4c2fbe6aa',
        position: {
          x: -242.591,
          y: 3.685,
          z: 242.089,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'fe111b2d-c512-47e8-b233-8b34d46d4595',
        position: {
          x: 260.742,
          y: -5.94,
          z: 48.666,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'fe3633fa-5a3d-46f1-9c56-8f30c2b61cc1',
        position: {
          x: 170.078,
          y: -1.451,
          z: -132.837,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
    ],
    extracts: [
      {
        id: 'e952fffc64bda06fb61d0db3fb9cd30a61111cb3',
        name: '地下室楼梯间',
        faction: 'scav',
        switches: [],
        position: {
          x: 74.769,
          y: -0.701999664,
          z: 49.22,
        },
        outline: [
          {
            x: 71.97598,
            y: -0.701999664,
            z: 47.79709,
          },
          {
            x: 77.54544,
            y: -0.701999664,
            z: 47.7650452,
          },
          {
            x: 77.56201,
            y: -0.701999664,
            z: 50.6429138,
          },
          {
            x: 71.99255,
            y: -0.701999664,
            z: 50.6749573,
          },
        ],
        top: 1.282932,
        bottom: -2.68693161,
      },
      {
        id: '8fcf0902c03e68a2201173fc1fb9ba62376353a7',
        name: '墓穴入口',
        faction: 'scav',
        switches: [],
        position: {
          x: -249.008026,
          y: 2.566,
          z: 243.797,
        },
        outline: [
          {
            x: -254.290741,
            y: 2.566,
            z: 242.43515,
          },
          {
            x: -246.391815,
            y: 2.566,
            z: 239.009827,
          },
          {
            x: -243.725311,
            y: 2.566,
            z: 245.158844,
          },
          {
            x: -251.624237,
            y: 2.566,
            z: 248.584167,
          },
        ],
        top: 4.55093145,
        bottom: 0.5810685,
      },
      {
        id: '14828b7f158d3d3c623ad25f7a21f59bebb15e68',
        name: '通风管道',
        faction: 'scav',
        switches: [],
        position: {
          x: -124.127106,
          y: 3.114,
          z: 423.93,
        },
        outline: [
          {
            x: -126.622894,
            y: 3.114,
            z: 420.94873,
          },
          {
            x: -121.686554,
            y: 3.114,
            z: 420.90332,
          },
          {
            x: -121.631317,
            y: 3.114,
            z: 426.911255,
          },
          {
            x: -126.567657,
            y: 3.114,
            z: 426.956665,
          },
        ],
        top: 7.22222137,
        bottom: -0.994220734,
      },
      {
        id: '81520cac6bc2000d30eb8d1adc403774d8e6ec93',
        name: '下水道',
        faction: 'scav',
        switches: [],
        position: {
          x: 276.113,
          y: 5.356,
          z: 345.389984,
        },
        outline: [
          {
            x: 274.281158,
            y: 5.356,
            z: 343.2018,
          },
          {
            x: 277.9043,
            y: 5.356,
            z: 343.168518,
          },
          {
            x: 277.944824,
            y: 5.356,
            z: 347.578156,
          },
          {
            x: 274.321716,
            y: 5.356,
            z: 347.611481,
          },
        ],
        top: 8.37131,
        bottom: 2.34069,
      },
      {
        id: '62b57ca54c93d9004db81f424db031efa2b0e7a9',
        name: 'Kamchatskaya大街拱门',
        faction: 'scav',
        switches: [],
        position: {
          x: 259.57,
          y: -3.929,
          z: 48.72,
        },
        outline: [
          {
            x: 255.111557,
            y: -3.929,
            z: 42.62088,
          },
          {
            x: 263.957977,
            y: -3.929,
            z: 42.5699768,
          },
          {
            x: 264.028442,
            y: -3.929,
            z: 54.8191223,
          },
          {
            x: 255.182022,
            y: -3.929,
            z: 54.8700256,
          },
        ],
        top: -1.94406748,
        bottom: -5.913933,
      },
      {
        id: 'a92c7dcc94b188316921781856aa7a15fb4a4ebc',
        name: 'Cardinal公寓停车场',
        faction: 'scav',
        switches: [],
        position: {
          x: 104.84,
          y: 0.130000114,
          z: -161.170013,
        },
        outline: [
          {
            x: 95.0504761,
            y: 0.130000114,
            z: -167.3995,
          },
          {
            x: 114.521622,
            y: 0.130000114,
            z: -167.565887,
          },
          {
            x: 114.629517,
            y: 0.130000114,
            z: -154.940552,
          },
          {
            x: 95.15837,
            y: 0.130000114,
            z: -154.77417,
          },
        ],
        top: 2.11493158,
        bottom: -1.85493135,
      },
      {
        id: '2f79c92d99215405c202d8b7f1e6eace137f9b5f',
        name: 'Klimov交易中心撤离点',
        faction: 'scav',
        switches: [],
        position: {
          x: -163.821014,
          y: 1.59100008,
          z: -5.65802,
        },
        outline: [
          {
            x: -167.698059,
            y: 1.59100008,
            z: -7.441925,
          },
          {
            x: -160.768341,
            y: 1.59100008,
            z: -8.640442,
          },
          {
            x: -159.94397,
            y: 1.59100008,
            z: -3.874115,
          },
          {
            x: -166.873688,
            y: 1.59100008,
            z: -2.67559814,
          },
        ],
        top: 2.62506,
        bottom: 0.5569401,
      },
      {
        id: '65f6067829924e26e0cb31d4ac24fee1870ec944',
        name: '院子',
        faction: 'pmc',
        switches: [],
        position: {
          x: -148.947,
          y: 1.78600025,
          z: 500.151978,
        },
        outline: [
          {
            x: -153.065613,
            y: 2.552606,
            z: 499.0822,
          },
          {
            x: -147.930267,
            y: 2.552606,
            z: 499.169,
          },
          {
            x: -147.96405,
            y: 2.552606,
            z: 501.168732,
          },
          {
            x: -153.0994,
            y: 2.552606,
            z: 501.08194,
          },
        ],
        top: 4.546441,
        bottom: 0.5587716,
      },
      {
        id: '264ee7ea338658549942113cbbf0a6ea31402975',
        name: 'Primorsky大道出租车载具撤离点',
        faction: 'pmc',
        switches: [],
        position: {
          x: -2.191315,
          y: 3.2,
          z: 461.232971,
        },
        outline: [
          {
            x: -4.779974,
            y: 3.2,
            z: 457.373,
          },
          {
            x: -4.779973,
            y: 3.2,
            z: 457.373,
          },
          {
            x: 0.5069294,
            y: 3.2,
            z: 457.448761,
          },
          {
            x: 0.506929636,
            y: 3.2,
            z: 457.448761,
          },
          {
            x: 0.39734292,
            y: 3.2,
            z: 465.093,
          },
          {
            x: 0.397342443,
            y: 3.2,
            z: 465.093,
          },
          {
            x: -4.889559,
            y: 3.2,
            z: 465.0172,
          },
          {
            x: -4.88955975,
            y: 3.2,
            z: 465.0172,
          },
        ],
        top: 4.771307,
        bottom: 1.62869334,
      },
      {
        id: 'cb867ea360a89dbc48694c43d193553d564529f9',
        name: '升降梯',
        faction: 'pmc',
        switches: [],
        position: {
          x: -44.7435,
          y: 11.04,
          z: -72.15,
        },
        outline: [
          {
            x: -49.622818,
            y: 11.04,
            z: -74.17816,
          },
          {
            x: -40.71722,
            y: 11.04,
            z: -75.57203,
          },
          {
            x: -39.86418,
            y: 11.04,
            z: -70.12184,
          },
          {
            x: -48.76978,
            y: 11.04,
            z: -68.7279739,
          },
        ],
        top: 13.0409441,
        bottom: 9.039056,
      },
      {
        id: '99e05bbf5d6f6dad97773774af735e37ae3edd44',
        name: '坠机现场',
        faction: 'pmc',
        switches: [],
        position: {
          x: 312.74,
          y: 6.8,
          z: 405.96,
        },
        outline: [
          {
            x: 301.61792,
            y: 6.8,
            z: 395.7585,
          },
          {
            x: 323.862061,
            y: 6.8,
            z: 395.7585,
          },
          {
            x: 323.862061,
            y: 6.8,
            z: 416.161469,
          },
          {
            x: 301.61792,
            y: 6.8,
            z: 416.161469,
          },
        ],
        top: 10.4120159,
        bottom: 3.18798447,
      },
      {
        id: '974e40db5a7ac4d1937688eb6415b2333f9a3766',
        name: '污水河',
        faction: 'pmc',
        switches: [],
        position: {
          x: -267.04,
          y: -1.535,
          z: 219.48,
        },
        outline: [
          {
            x: -278.7468,
            y: -1.535,
            z: 209.289581,
          },
          {
            x: -260.57663,
            y: -1.535,
            z: 205.36908,
          },
          {
            x: -255.333221,
            y: -1.535,
            z: 229.67041,
          },
          {
            x: -273.5034,
            y: -1.535,
            z: 233.590912,
          },
        ],
        top: -0.476986766,
        bottom: -2.59301329,
      },
      {
        id: '29cd42c5025edb6a619dd961fbc20ad639127189',
        name: '受损的房屋',
        faction: 'pmc',
        switches: [],
        position: {
          x: -248.971,
          y: 7.195,
          z: 344.275,
        },
        outline: [
          {
            x: -254.439255,
            y: 6.710009,
            z: 342.242981,
          },
          {
            x: -241.180527,
            y: 6.710009,
            z: 342.242981,
          },
          {
            x: -241.180527,
            y: 6.710009,
            z: 346.912445,
          },
          {
            x: -254.439255,
            y: 6.710009,
            z: 346.912445,
          },
        ],
        top: 8.794275,
        bottom: 4.62574244,
      },
      {
        id: '59f13279288d9ac630955c14dc3368b492061e7c',
        name: '倒塌的吊车',
        faction: 'pmc',
        switches: [],
        position: {
          x: 216.12,
          y: 3.44,
          z: 272.7,
        },
        outline: [
          {
            x: 204.956558,
            y: 3.44,
            z: 264.997772,
          },
          {
            x: 210.580246,
            y: 3.44,
            z: 260.320251,
          },
          {
            x: 227.283432,
            y: 3.44,
            z: 280.402252,
          },
          {
            x: 221.659744,
            y: 3.44,
            z: 285.079773,
          },
        ],
        top: 6.933983,
        bottom: -0.0539829731,
      },
      {
        id: '19b2c9157d56629da496df0bc42dbe5c49439e4c',
        name: 'Klimov大街（Улица Климова）',
        faction: 'pmc',
        switches: [],
        position: {
          x: -263.41,
          y: 2.9,
          z: 43.19,
        },
        outline: [
          {
            x: -310.0907,
            y: 2.9,
            z: 13.4296474,
          },
          {
            x: -231.4089,
            y: 2.9,
            z: -1.98407364,
          },
          {
            x: -216.729309,
            y: 2.9,
            z: 72.95035,
          },
          {
            x: -295.4111,
            y: 2.9,
            z: 88.3640747,
          },
        ],
        top: 5.0160265,
        bottom: 0.7839737,
      },
      {
        id: 'd830108cdf0fcd33b785ca39d380255658905371',
        name: 'Pinewood地下室（合作撤离点）',
        faction: 'shared',
        switches: [],
        position: {
          x: -114.28,
          y: -2.05,
          z: 64.88,
        },
        outline: [
          {
            x: -122.086365,
            y: -2.05,
            z: 63.8814468,
          },
          {
            x: -107.215393,
            y: -2.05,
            z: 61.4118958,
          },
          {
            x: -106.473633,
            y: -2.05,
            z: 65.87855,
          },
          {
            x: -121.344604,
            y: -2.05,
            z: 68.3481,
          },
        ],
        top: 0.7442348,
        bottom: -4.84423447,
      },
      {
        id: 'b17b3bec8b22bdd99d6e9589ed0d9a41f2f6aac8',
        name: '展览馆撤离点',
        faction: 'pmc',
        switches: [],
        position: {
          x: 213.12,
          y: 0.09,
          z: -104.96,
        },
        outline: [
          {
            x: 197.765121,
            y: 0.09,
            z: -113.891861,
          },
          {
            x: 228.440887,
            y: 0.09,
            z: -113.950012,
          },
          {
            x: 228.474869,
            y: 0.09,
            z: -96.02814,
          },
          {
            x: 197.7991,
            y: 0.09,
            z: -95.969986,
          },
        ],
        top: 2.20602632,
        bottom: -2.02602649,
      },
    ],
    hazards: [
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: -262.27655,
          y: 10.4000015,
          z: 438.665741,
        },
        outline: [
          {
            x: -317.517181,
            y: 10.4000015,
            z: 410.703827,
          },
          {
            x: -206.516449,
            y: 10.4000015,
            z: 411.7547,
          },
          {
            x: -207.03595,
            y: 10.4000015,
            z: 466.627625,
          },
          {
            x: -318.036682,
            y: 10.4000015,
            z: 465.576752,
          },
        ],
        top: 23.084671,
        bottom: -2.284668,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: 5.128189,
          y: 17,
          z: 497.241577,
        },
        outline: [
          {
            x: -9.242245,
            y: 17,
            z: 463.33847,
          },
          {
            x: 20.0370445,
            y: 17,
            z: 463.571777,
          },
          {
            x: 19.4986153,
            y: 17,
            z: 531.144653,
          },
          {
            x: -9.780678,
            y: 17,
            z: 530.9114,
          },
        ],
        top: 34.768837,
        bottom: -0.768837,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: 16.3364811,
          y: 10.4000015,
          z: 472.3588,
        },
        outline: [
          {
            x: -0.1727333,
            y: 10.4000015,
            z: 462.4586,
          },
          {
            x: 33.0943527,
            y: 10.4000015,
            z: 462.8856,
          },
          {
            x: 32.84569,
            y: 10.4000015,
            z: 482.259,
          },
          {
            x: -0.421394348,
            y: 10.4000015,
            z: 481.832,
          },
        ],
        top: 23.084671,
        bottom: -2.284668,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: -253.610016,
          y: 10.4000015,
          z: 42.7300034,
        },
        outline: [
          {
            x: -315.4209,
            y: 10.4000015,
            z: 13.0899811,
          },
          {
            x: -206.210129,
            y: 10.4000015,
            z: -6.791397,
          },
          {
            x: -191.7991,
            y: 10.4000015,
            z: 72.37002,
          },
          {
            x: -301.0099,
            y: 10.4000015,
            z: 92.25139,
          },
        ],
        top: 23.084671,
        bottom: -2.284668,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: 306.6229,
          y: 2.16000366,
          z: 8.47236252,
        },
        outline: [
          {
            x: 251.348267,
            y: 2.16000366,
            z: -15.9092674,
          },
          {
            x: 362.349,
            y: 2.16000366,
            z: -14.8589363,
          },
          {
            x: 361.897522,
            y: 2.16000366,
            z: 32.8539848,
          },
          {
            x: 250.89679,
            y: 2.16000366,
            z: 31.8036613,
          },
        ],
        top: 14.8446732,
        bottom: -10.5246735,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: 218.585663,
          y: 4.080002,
          z: -197.71817,
        },
        outline: [
          {
            x: 163.39386,
            y: 4.080002,
            z: -230.853943,
          },
          {
            x: 274.3946,
            y: 4.080002,
            z: -229.8036,
          },
          {
            x: 273.777466,
            y: 4.080002,
            z: -164.5824,
          },
          {
            x: 162.776733,
            y: 4.080002,
            z: -165.632721,
          },
        ],
        top: 16.7646713,
        bottom: -8.604675,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: 274.013336,
          y: 10.4000015,
          z: 246.433029,
        },
        outline: [
          {
            x: 218.6258,
            y: 10.4000015,
            z: 233.98645,
          },
          {
            x: 329.626526,
            y: 10.4000015,
            z: 235.036789,
          },
          {
            x: 329.4009,
            y: 10.4000015,
            z: 258.879639,
          },
          {
            x: 218.400177,
            y: 10.4000015,
            z: 257.829285,
          },
        ],
        top: 23.084671,
        bottom: -2.284668,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: -13.5321312,
          y: 8.5,
          z: 491.63,
        },
        outline: [
          {
            x: -20.6438065,
            y: 8.5,
            z: 460.973633,
          },
          {
            x: -5.40374,
            y: 8.5,
            z: 461.2274,
          },
          {
            x: -6.420456,
            y: 8.5,
            z: 522.286438,
          },
          {
            x: -21.66053,
            y: 8.5,
            z: 522.032654,
          },
        ],
        top: 25.0992126,
        bottom: -8.099213,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 98.29026,
          y: 3.80659986,
          z: 374.367584,
        },
        outline: [
          {
            x: 99.28048,
            y: 3.80659986,
            z: 371.952637,
          },
          {
            x: 100.446289,
            y: 3.80659986,
            z: 372.8965,
          },
          {
            x: 97.30004,
            y: 3.80659986,
            z: 376.782532,
          },
          {
            x: 96.13423,
            y: 3.80659986,
            z: 375.838654,
          },
        ],
        top: 4.3066,
        bottom: 3.30659986,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 52.2661972,
          y: 3.05429983,
          z: 273.15744,
        },
        outline: [
          {
            x: 53.8931656,
            y: 3.05429983,
            z: 271.1165,
          },
          {
            x: 54.74795,
            y: 3.05429983,
            z: 272.349121,
          },
          {
            x: 50.63923,
            y: 3.05429983,
            z: 275.1984,
          },
          {
            x: 49.7844429,
            y: 3.05429983,
            z: 273.965759,
          },
        ],
        top: 3.55429983,
        bottom: 2.55429983,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 47.10037,
          y: 2.99,
          z: 269.18692,
        },
        outline: [
          {
            x: 49.0744972,
            y: 2.99,
            z: 267.4795,
          },
          {
            x: 49.6883621,
            y: 2.99,
            z: 268.8481,
          },
          {
            x: 45.126236,
            y: 2.99,
            z: 270.894348,
          },
          {
            x: 44.51237,
            y: 2.99,
            z: 269.5257,
          },
        ],
        top: 3.49,
        bottom: 2.49,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 106.140839,
          y: 3.57385826,
          z: 369.987579,
        },
        outline: [
          {
            x: 104.574829,
            y: 3.57385826,
            z: 367.9598,
          },
          {
            x: 104.553291,
            y: 3.57385826,
            z: 367.876221,
          },
          {
            x: 105.958191,
            y: 3.57385826,
            z: 367.35083,
          },
          {
            x: 105.979736,
            y: 3.57385826,
            z: 367.4344,
          },
          {
            x: 107.706841,
            y: 3.57385826,
            z: 372.015381,
          },
          {
            x: 107.728386,
            y: 3.57385826,
            z: 372.098938,
          },
          {
            x: 106.323479,
            y: 3.57385826,
            z: 372.624359,
          },
          {
            x: 106.301941,
            y: 3.57385826,
            z: 372.5408,
          },
        ],
        top: 4.293369,
        bottom: 2.85434771,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 44.64121,
          y: 3.10839987,
          z: 291.587646,
        },
        outline: [
          {
            x: 42.0854836,
            y: 3.10839987,
            z: 291.05777,
          },
          {
            x: 47.06656,
            y: 3.10839987,
            z: 290.6232,
          },
          {
            x: 47.1969376,
            y: 3.10839987,
            z: 292.117523,
          },
          {
            x: 42.21586,
            y: 3.10839987,
            z: 292.5521,
          },
        ],
        top: 3.60839987,
        bottom: 2.60839987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 95.7244,
          y: 3.23599982,
          z: 263.040222,
        },
        outline: [
          {
            x: 97.8745041,
            y: 3.23599982,
            z: 261.560516,
          },
          {
            x: 98.33396,
            y: 3.23599982,
            z: 262.9884,
          },
          {
            x: 93.5743,
            y: 3.23599982,
            z: 264.519928,
          },
          {
            x: 93.11484,
            y: 3.23599982,
            z: 263.092041,
          },
        ],
        top: 3.73599982,
        bottom: 2.73599982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 45.1479073,
          y: 3.03499985,
          z: 299.645233,
        },
        outline: [
          {
            x: 46.0253067,
            y: 3.03499985,
            z: 297.187042,
          },
          {
            x: 47.2335434,
            y: 3.03499985,
            z: 298.075958,
          },
          {
            x: 44.270504,
            y: 3.03499985,
            z: 302.103424,
          },
          {
            x: 43.0622673,
            y: 3.03499985,
            z: 301.2145,
          },
        ],
        top: 3.53499985,
        bottom: 2.53499985,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 48.84616,
          y: 2.99,
          z: 266.746674,
        },
        outline: [
          {
            x: 47.8574944,
            y: 2.99,
            z: 264.3311,
          },
          {
            x: 49.3504372,
            y: 2.99,
            z: 264.18576,
          },
          {
            x: 49.8348274,
            y: 2.99,
            z: 269.162231,
          },
          {
            x: 48.3418846,
            y: 2.99,
            z: 269.307556,
          },
        ],
        top: 3.49,
        bottom: 2.49,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 46.76609,
          y: 3.0463,
          z: 322.244537,
        },
        outline: [
          {
            x: 48.2252,
            y: 3.0463,
            z: 320.080383,
          },
          {
            x: 49.175518,
            y: 3.0463,
            z: 321.240967,
          },
          {
            x: 45.30698,
            y: 3.0463,
            z: 324.408661,
          },
          {
            x: 44.3566628,
            y: 3.0463,
            z: 323.2481,
          },
        ],
        top: 3.5463,
        bottom: 2.5463,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 43.10012,
          y: 3.04339981,
          z: 281.5648,
        },
        outline: [
          {
            x: 44.1078339,
            y: 3.04339981,
            z: 279.1571,
          },
          {
            x: 45.26676,
            y: 3.04339981,
            z: 280.1094,
          },
          {
            x: 42.0924034,
            y: 3.04339981,
            z: 283.972473,
          },
          {
            x: 40.9334755,
            y: 3.04339981,
            z: 283.020172,
          },
        ],
        top: 3.54339981,
        bottom: 2.54339981,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.3175,
          y: 3.37935615,
          z: 349.772644,
        },
        outline: [
          {
            x: 104.898972,
            y: 3.37935615,
            z: 347.189575,
          },
          {
            x: 105.067009,
            y: 3.37935615,
            z: 347.178955,
          },
          {
            x: 106.3585,
            y: 3.37935615,
            z: 347.432831,
          },
          {
            x: 106.526543,
            y: 3.37935615,
            z: 347.42218,
          },
          {
            x: 105.736023,
            y: 3.37935615,
            z: 352.355743,
          },
          {
            x: 105.567986,
            y: 3.37935615,
            z: 352.366364,
          },
          {
            x: 104.276489,
            y: 3.37935615,
            z: 352.1125,
          },
          {
            x: 104.108452,
            y: 3.37935615,
            z: 352.1231,
          },
        ],
        top: 4.089286,
        bottom: 2.66942668,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 40.8940926,
          y: 2.9549,
          z: 275.213959,
        },
        outline: [
          {
            x: 38.6270332,
            y: 2.9549,
            z: 273.920563,
          },
          {
            x: 43.49875,
            y: 2.9549,
            z: 275.045868,
          },
          {
            x: 43.1611481,
            y: 2.9549,
            z: 276.5074,
          },
          {
            x: 38.2894325,
            y: 2.9549,
            z: 275.38205,
          },
        ],
        top: 3.4549,
        bottom: 2.4549,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 51.6951561,
          y: 3.0657,
          z: 323.70108,
        },
        outline: [
          {
            x: 49.1279831,
            y: 3.0657,
            z: 323.229767,
          },
          {
            x: 49.81136,
            y: 3.0657,
            z: 321.89447,
          },
          {
            x: 54.2623253,
            y: 3.0657,
            z: 324.1724,
          },
          {
            x: 53.57895,
            y: 3.0657,
            z: 325.5077,
          },
        ],
        top: 3.5657,
        bottom: 2.5657,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 108.400833,
          y: 4.02750158,
          z: 367.41803,
        },
        outline: [
          {
            x: 105.995186,
            y: 4.02750158,
            z: 366.2891,
          },
          {
            x: 106.215027,
            y: 4.02750158,
            z: 366.2891,
          },
          {
            x: 110.813751,
            y: 4.02750158,
            z: 367.065155,
          },
          {
            x: 111.033592,
            y: 4.02750158,
            z: 367.065155,
          },
          {
            x: 110.806473,
            y: 4.02750158,
            z: 368.546967,
          },
          {
            x: 110.586632,
            y: 4.02750158,
            z: 368.546967,
          },
          {
            x: 105.987907,
            y: 4.02750158,
            z: 367.770935,
          },
          {
            x: 105.768066,
            y: 4.02750158,
            z: 367.770935,
          },
        ],
        top: 5.08380651,
        bottom: 2.97119665,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 51.5772,
          y: 3.046,
          z: 326.6874,
        },
        outline: [
          {
            x: 48.96729,
            y: 3.046,
            z: 326.658142,
          },
          {
            x: 53.7722168,
            y: 3.046,
            z: 325.275146,
          },
          {
            x: 54.1871147,
            y: 3.046,
            z: 326.716644,
          },
          {
            x: 49.3821869,
            y: 3.046,
            z: 328.09964,
          },
        ],
        top: 3.546,
        bottom: 2.546,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.935272,
          y: 3.47649741,
          z: 361.259,
        },
        outline: [
          {
            x: 103.503204,
            y: 3.47649741,
            z: 360.189117,
          },
          {
            x: 103.687347,
            y: 3.47649741,
            z: 360.189117,
          },
          {
            x: 108.375648,
            y: 3.47649741,
            z: 360.841736,
          },
          {
            x: 108.5598,
            y: 3.47649741,
            z: 360.841736,
          },
          {
            x: 108.367348,
            y: 3.47649741,
            z: 362.328918,
          },
          {
            x: 108.1832,
            y: 3.47649741,
            z: 362.328918,
          },
          {
            x: 103.4949,
            y: 3.47649741,
            z: 361.67627,
          },
          {
            x: 103.310753,
            y: 3.47649741,
            z: 361.67627,
          },
        ],
        top: 4.44240856,
        bottom: 2.510586,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 59.19367,
          y: 8.690525,
          z: 318.844,
        },
        outline: [
          {
            x: 56.560936,
            y: 8.690525,
            z: 318.7389,
          },
          {
            x: 56.63666,
            y: 8.690525,
            z: 318.450745,
          },
          {
            x: 57.09966,
            y: 8.690525,
            z: 317.4111,
          },
          {
            x: 57.17538,
            y: 8.690525,
            z: 317.122955,
          },
          {
            x: 61.8264,
            y: 8.690525,
            z: 318.9491,
          },
          {
            x: 61.7506752,
            y: 8.690525,
            z: 319.237244,
          },
          {
            x: 61.2876778,
            y: 8.690525,
            z: 320.2769,
          },
          {
            x: 61.211956,
            y: 8.690525,
            z: 320.565033,
          },
        ],
        top: 9.480718,
        bottom: 7.9003334,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 38.732193,
          y: 2.93439984,
          z: 265.59436,
        },
        outline: [
          {
            x: 38.84512,
            y: 2.93439984,
            z: 262.986725,
          },
          {
            x: 40.2618637,
            y: 2.93439984,
            z: 263.479523,
          },
          {
            x: 38.6192627,
            y: 2.93439984,
            z: 268.202,
          },
          {
            x: 37.20252,
            y: 2.93439984,
            z: 267.709229,
          },
        ],
        top: 3.43439984,
        bottom: 2.43439984,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 64.24139,
          y: 3.06029987,
          z: 261.460876,
        },
        outline: [
          {
            x: 61.63131,
            y: 3.06029987,
            z: 261.4599,
          },
          {
            x: 62.0628624,
            y: 3.06029987,
            z: 260.023315,
          },
          {
            x: 66.85146,
            y: 3.06029987,
            z: 261.461823,
          },
          {
            x: 66.41991,
            y: 3.06029987,
            z: 262.8984,
          },
        ],
        top: 3.56029987,
        bottom: 2.56029987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 35.96441,
          y: 3.0389,
          z: 266.919128,
        },
        outline: [
          {
            x: 35.6531334,
            y: 3.0389,
            z: 264.327667,
          },
          {
            x: 37.1310234,
            y: 3.0389,
            z: 264.584259,
          },
          {
            x: 36.27568,
            y: 3.0389,
            z: 269.510559,
          },
          {
            x: 34.79779,
            y: 3.0389,
            z: 269.253967,
          },
        ],
        top: 3.5389,
        bottom: 2.5389,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 95.6681442,
          y: 3.7314,
          z: 373.8406,
        },
        outline: [
          {
            x: 97.55734,
            y: 3.7314,
            z: 372.039673,
          },
          {
            x: 98.23671,
            y: 3.7314,
            z: 373.377,
          },
          {
            x: 93.77894,
            y: 3.7314,
            z: 375.641571,
          },
          {
            x: 93.09957,
            y: 3.7314,
            z: 374.30423,
          },
        ],
        top: 4.2314,
        bottom: 3.2314,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 100.1442,
          y: 3.7982,
          z: 375.337219,
        },
        outline: [
          {
            x: 99.94649,
            y: 3.7982,
            z: 372.73465,
          },
          {
            x: 101.411751,
            y: 3.7982,
            z: 373.0556,
          },
          {
            x: 100.341911,
            y: 3.7982,
            z: 377.9398,
          },
          {
            x: 98.8766556,
            y: 3.7982,
            z: 377.618835,
          },
        ],
        top: 4.2982,
        bottom: 3.2982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 87.1404953,
          y: 3.2707,
          z: 258.958374,
        },
        outline: [
          {
            x: 87.8286362,
            y: 3.2707,
            z: 256.440643,
          },
          {
            x: 89.10091,
            y: 3.2707,
            z: 257.2352,
          },
          {
            x: 86.4523544,
            y: 3.2707,
            z: 261.4761,
          },
          {
            x: 85.1800842,
            y: 3.2707,
            z: 260.681549,
          },
        ],
        top: 3.7707,
        bottom: 2.7707,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 93.1514359,
          y: 3.7453,
          z: 370.7593,
        },
        outline: [
          {
            x: 91.33321,
            y: 3.7453,
            z: 368.886719,
          },
          {
            x: 92.6642456,
            y: 3.7453,
            z: 368.1951,
          },
          {
            x: 94.9696655,
            y: 3.7453,
            z: 372.631866,
          },
          {
            x: 93.6386261,
            y: 3.7453,
            z: 373.3235,
          },
        ],
        top: 4.24530029,
        bottom: 3.2453,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 84.05898,
          y: 3.2707,
          z: 259.312439,
        },
        outline: [
          {
            x: 81.81758,
            y: 3.2707,
            z: 257.975037,
          },
          {
            x: 82.9239044,
            y: 3.2707,
            z: 256.9621,
          },
          {
            x: 86.3003845,
            y: 3.2707,
            z: 260.6498,
          },
          {
            x: 85.19406,
            y: 3.2707,
            z: 261.662781,
          },
        ],
        top: 3.7707,
        bottom: 2.7707,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 51.97367,
          y: 3.15099978,
          z: 261.684052,
        },
        outline: [
          {
            x: 54.1444054,
            y: 3.15099978,
            z: 260.234772,
          },
          {
            x: 54.5837021,
            y: 3.15099978,
            z: 261.669,
          },
          {
            x: 49.8029366,
            y: 3.15099978,
            z: 263.133331,
          },
          {
            x: 49.363636,
            y: 3.15099978,
            z: 261.6991,
          },
        ],
        top: 3.65099978,
        bottom: 2.65099978,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 47.0782776,
          y: 3.1352,
          z: 263.104431,
        },
        outline: [
          {
            x: 44.5017052,
            y: 3.1352,
            z: 262.6876,
          },
          {
            x: 45.15666,
            y: 3.1352,
            z: 261.338135,
          },
          {
            x: 49.6548538,
            y: 3.1352,
            z: 263.5213,
          },
          {
            x: 48.9999,
            y: 3.1352,
            z: 264.870758,
          },
        ],
        top: 3.6352,
        bottom: 2.6352,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.2689247,
          y: 3.05429983,
          z: 271.969482,
        },
        outline: [
          {
            x: 47.6613274,
            y: 3.05429983,
            z: 271.855682,
          },
          {
            x: 48.1545753,
            y: 3.05429983,
            z: 270.4391,
          },
          {
            x: 52.87652,
            y: 3.05429983,
            z: 272.083252,
          },
          {
            x: 52.3832741,
            y: 3.05429983,
            z: 273.499847,
          },
        ],
        top: 3.55429983,
        bottom: 2.55429983,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.39599,
          y: 3.05429983,
          z: 273.57,
        },
        outline: [
          {
            x: 52.3911972,
            y: 3.05429983,
            z: 271.887268,
          },
          {
            x: 52.988,
            y: 3.05429983,
            z: 273.263428,
          },
          {
            x: 48.40078,
            y: 3.05429983,
            z: 275.252747,
          },
          {
            x: 47.80398,
            y: 3.05429983,
            z: 273.8766,
          },
        ],
        top: 3.55429983,
        bottom: 2.55429983,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.935272,
          y: 3.47649741,
          z: 364.003,
        },
        outline: [
          {
            x: 103.503204,
            y: 3.47649741,
            z: 362.9331,
          },
          {
            x: 103.687347,
            y: 3.47649741,
            z: 362.9331,
          },
          {
            x: 108.375648,
            y: 3.47649741,
            z: 363.585724,
          },
          {
            x: 108.5598,
            y: 3.47649741,
            z: 363.585724,
          },
          {
            x: 108.367348,
            y: 3.47649741,
            z: 365.0729,
          },
          {
            x: 108.1832,
            y: 3.47649741,
            z: 365.0729,
          },
          {
            x: 103.4949,
            y: 3.47649741,
            z: 364.420258,
          },
          {
            x: 103.310753,
            y: 3.47649741,
            z: 364.420258,
          },
        ],
        top: 4.44240856,
        bottom: 2.510586,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.6348839,
          y: 3.0446,
          z: 329.3586,
        },
        outline: [
          {
            x: 48.439846,
            y: 3.0446,
            z: 327.9464,
          },
          {
            x: 53.2447968,
            y: 3.0446,
            z: 329.3293,
          },
          {
            x: 52.8299255,
            y: 3.0446,
            z: 330.7708,
          },
          {
            x: 48.02497,
            y: 3.0446,
            z: 329.3879,
          },
        ],
        top: 3.5446,
        bottom: 2.5446,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 59.1572456,
          y: 8.166663,
          z: 317.859528,
        },
        outline: [
          {
            x: 56.6069679,
            y: 8.166663,
            z: 317.2005,
          },
          {
            x: 56.66167,
            y: 8.166663,
            z: 317.2135,
          },
          {
            x: 61.59587,
            y: 8.166663,
            z: 317.006836,
          },
          {
            x: 61.6505737,
            y: 8.166663,
            z: 317.019836,
          },
          {
            x: 61.7075233,
            y: 8.166663,
            z: 318.5186,
          },
          {
            x: 61.65282,
            y: 8.166663,
            z: 318.505585,
          },
          {
            x: 56.71862,
            y: 8.166663,
            z: 318.71225,
          },
          {
            x: 56.6639175,
            y: 8.166663,
            z: 318.699249,
          },
        ],
        top: 8.812588,
        bottom: 7.52073956,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 91.41502,
          y: 3.7646,
          z: 377.442078,
        },
        outline: [
          {
            x: 92.4083557,
            y: 3.7646,
            z: 375.0284,
          },
          {
            x: 93.5729446,
            y: 3.7646,
            z: 375.9738,
          },
          {
            x: 90.4216843,
            y: 3.7646,
            z: 379.855743,
          },
          {
            x: 89.2570953,
            y: 3.7646,
            z: 378.91037,
          },
        ],
        top: 4.26460028,
        bottom: 3.2646,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 40.8374367,
          y: 3.04409981,
          z: 277.831848,
        },
        outline: [
          {
            x: 42.8557625,
            y: 3.04409981,
            z: 276.1769,
          },
          {
            x: 43.43344,
            y: 3.04409981,
            z: 277.561218,
          },
          {
            x: 38.81911,
            y: 3.04409981,
            z: 279.486816,
          },
          {
            x: 38.2414322,
            y: 3.04409981,
            z: 278.1025,
          },
        ],
        top: 3.54409981,
        bottom: 2.54409981,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 43.797184,
          y: 3.0463,
          z: 272.3539,
        },
        outline: [
          {
            x: 45.8784027,
            y: 3.0463,
            z: 270.7788,
          },
          {
            x: 46.40176,
            y: 3.0463,
            z: 272.18454,
          },
          {
            x: 41.71597,
            y: 3.0463,
            z: 273.929047,
          },
          {
            x: 41.19261,
            y: 3.0463,
            z: 272.523315,
          },
        ],
        top: 3.5463,
        bottom: 2.5463,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 38.8946877,
          y: 3.0433,
          z: 272.792175,
        },
        outline: [
          {
            x: 36.31677,
            y: 3.0433,
            z: 272.3837,
          },
          {
            x: 36.9673157,
            y: 3.0433,
            z: 271.032135,
          },
          {
            x: 41.4726067,
            y: 3.0433,
            z: 273.200623,
          },
          {
            x: 40.82206,
            y: 3.0433,
            z: 274.5522,
          },
        ],
        top: 3.5433,
        bottom: 2.5433,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 106.527588,
          y: 4.04200029,
          z: 297.545,
        },
        outline: [
          {
            x: 106.380447,
            y: 4.04200029,
            z: 294.9391,
          },
          {
            x: 107.8392,
            y: 4.04200029,
            z: 295.288422,
          },
          {
            x: 106.674728,
            y: 4.04200029,
            z: 300.15094,
          },
          {
            x: 105.215973,
            y: 4.04200029,
            z: 299.8016,
          },
        ],
        top: 4.54200029,
        bottom: 3.542,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 40.9452744,
          y: 3.04519987,
          z: 270.0834,
        },
        outline: [
          {
            x: 38.3687019,
            y: 3.04519987,
            z: 269.666565,
          },
          {
            x: 39.0236549,
            y: 3.04519987,
            z: 268.3171,
          },
          {
            x: 43.52185,
            y: 3.04519987,
            z: 270.500275,
          },
          {
            x: 42.8668976,
            y: 3.04519987,
            z: 271.849731,
          },
        ],
        top: 3.54519987,
        bottom: 2.54519987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 60.4692268,
          y: 7.61811,
          z: 323.054474,
        },
        outline: [
          {
            x: 59.302,
            y: 7.61811,
            z: 320.688843,
          },
          {
            x: 59.3370972,
            y: 7.61811,
            z: 320.746979,
          },
          {
            x: 60.78072,
            y: 7.61811,
            z: 320.43988,
          },
          {
            x: 60.81582,
            y: 7.61811,
            z: 320.498047,
          },
          {
            x: 61.63646,
            y: 7.61811,
            z: 325.4201,
          },
          {
            x: 61.60136,
            y: 7.61811,
            z: 325.361969,
          },
          {
            x: 60.1577377,
            y: 7.61811,
            z: 325.669067,
          },
          {
            x: 60.12264,
            y: 7.61811,
            z: 325.6109,
          },
        ],
        top: 8.293591,
        bottom: 6.94262934,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 104.695457,
          y: 3.25144768,
          z: 354.874359,
        },
        outline: [
          {
            x: 104.300438,
            y: 3.25144768,
            z: 352.28064,
          },
          {
            x: 104.434624,
            y: 3.25144768,
            z: 352.29126,
          },
          {
            x: 105.766853,
            y: 3.25144768,
            z: 352.5239,
          },
          {
            x: 105.901031,
            y: 3.25144768,
            z: 352.534515,
          },
          {
            x: 105.090477,
            y: 3.25144768,
            z: 357.468048,
          },
          {
            x: 104.956291,
            y: 3.25144768,
            z: 357.457428,
          },
          {
            x: 103.624069,
            y: 3.25144768,
            z: 357.224823,
          },
          {
            x: 103.489883,
            y: 3.25144768,
            z: 357.214172,
          },
        ],
        top: 3.87591672,
        bottom: 2.62697887,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 43.3747253,
          y: 3.0406,
          z: 267.263733,
        },
        outline: [
          {
            x: 40.8820877,
            y: 3.0406,
            z: 266.489624,
          },
          {
            x: 41.71983,
            y: 3.0406,
            z: 265.245361,
          },
          {
            x: 45.8673668,
            y: 3.0406,
            z: 268.037842,
          },
          {
            x: 45.0296249,
            y: 3.0406,
            z: 269.2821,
          },
        ],
        top: 3.5406,
        bottom: 2.5406,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 46.4836426,
          y: 2.99,
          z: 269.225769,
        },
        outline: [
          {
            x: 44.17034,
            y: 2.99,
            z: 268.017,
          },
          {
            x: 49.0803146,
            y: 2.99,
            z: 268.961548,
          },
          {
            x: 48.7969475,
            y: 2.99,
            z: 270.43454,
          },
          {
            x: 43.8869743,
            y: 2.99,
            z: 269.49,
          },
        ],
        top: 3.49,
        bottom: 2.49,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.686646,
          y: 4.053,
          z: 303.521454,
        },
        outline: [
          {
            x: 106.534668,
            y: 4.053,
            z: 301.052979,
          },
          {
            x: 107.753418,
            y: 4.053,
            z: 301.927429,
          },
          {
            x: 104.838623,
            y: 4.053,
            z: 305.989929,
          },
          {
            x: 103.619873,
            y: 4.053,
            z: 305.115479,
          },
        ],
        top: 4.553,
        bottom: 3.553,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 104.435974,
          y: 3.748,
          z: 379.711823,
        },
        outline: [
          {
            x: 101.902946,
            y: 3.748,
            z: 379.0823,
          },
          {
            x: 106.897224,
            y: 3.748,
            z: 378.843048,
          },
          {
            x: 106.969,
            y: 3.748,
            z: 380.3413,
          },
          {
            x: 101.974731,
            y: 3.748,
            z: 380.5806,
          },
        ],
        top: 4.248,
        bottom: 3.248,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 104.219856,
          y: 3.8205092,
          z: 375.2205,
        },
        outline: [
          {
            x: 104.960274,
            y: 3.8205092,
            z: 372.7782,
          },
          {
            x: 105.002106,
            y: 3.8205092,
            z: 372.693451,
          },
          {
            x: 106.249329,
            y: 3.8205092,
            z: 373.526581,
          },
          {
            x: 106.207489,
            y: 3.8205092,
            z: 373.611328,
          },
          {
            x: 103.479446,
            y: 3.8205092,
            z: 377.6628,
          },
          {
            x: 103.437614,
            y: 3.8205092,
            z: 377.747528,
          },
          {
            x: 102.190392,
            y: 3.8205092,
            z: 376.9144,
          },
          {
            x: 102.232224,
            y: 3.8205092,
            z: 376.829681,
          },
        ],
        top: 4.561747,
        bottom: 3.07927132,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 61.0239563,
          y: 3.06029987,
          z: 263.59494,
        },
        outline: [
          {
            x: 58.5471344,
            y: 3.06029987,
            z: 262.7716,
          },
          {
            x: 63.5449677,
            y: 3.06029987,
            z: 262.9189,
          },
          {
            x: 63.5007744,
            y: 3.06029987,
            z: 264.418274,
          },
          {
            x: 58.5029449,
            y: 3.06029987,
            z: 264.270966,
          },
        ],
        top: 3.56029987,
        bottom: 2.56029987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 86.5768,
          y: 3.7218,
          z: 373.79837,
        },
        outline: [
          {
            x: 84.0074,
            y: 3.7218,
            z: 373.339355,
          },
          {
            x: 88.97456,
            y: 3.7218,
            z: 372.7672,
          },
          {
            x: 89.1462,
            y: 3.7218,
            z: 374.257355,
          },
          {
            x: 84.17904,
            y: 3.7218,
            z: 374.8295,
          },
        ],
        top: 4.22180033,
        bottom: 3.2218,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 70.08499,
          y: 3.097,
          z: 262.621674,
        },
        outline: [
          {
            x: 67.47829,
            y: 3.097,
            z: 262.489,
          },
          {
            x: 72.33426,
            y: 3.097,
            z: 261.297577,
          },
          {
            x: 72.6916962,
            y: 3.097,
            z: 262.754364,
          },
          {
            x: 67.8357239,
            y: 3.097,
            z: 263.9458,
          },
        ],
        top: 3.597,
        bottom: 2.597,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 38.9437523,
          y: 3.148,
          z: 261.85083,
        },
        outline: [
          {
            x: 36.44423,
            y: 3.148,
            z: 261.099243,
          },
          {
            x: 41.44423,
            y: 3.148,
            z: 261.102417,
          },
          {
            x: 41.44327,
            y: 3.148,
            z: 262.602417,
          },
          {
            x: 36.44327,
            y: 3.148,
            z: 262.599243,
          },
        ],
        top: 3.648,
        bottom: 2.648,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 51.20634,
          y: 3.045,
          z: 265.964264,
        },
        outline: [
          {
            x: 49.4329376,
            y: 3.045,
            z: 264.0492,
          },
          {
            x: 50.7799644,
            y: 3.045,
            z: 263.389252,
          },
          {
            x: 52.979744,
            y: 3.045,
            z: 267.879364,
          },
          {
            x: 51.6327133,
            y: 3.045,
            z: 268.539276,
          },
        ],
        top: 3.545,
        bottom: 2.545,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.40731,
          y: 4.04200029,
          z: 290.133942,
        },
        outline: [
          {
            x: 104.4262,
            y: 4.04200029,
            z: 287.7153,
          },
          {
            x: 105.919594,
            y: 4.04200029,
            z: 287.574646,
          },
          {
            x: 106.38842,
            y: 4.04200029,
            z: 292.5526,
          },
          {
            x: 104.895027,
            y: 4.04200029,
            z: 292.693268,
          },
        ],
        top: 4.54200029,
        bottom: 3.542,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.13409,
          y: 3.0451,
          z: 267.833069,
        },
        outline: [
          {
            x: 47.5867577,
            y: 3.0451,
            z: 267.264221,
          },
          {
            x: 52.5738945,
            y: 3.0451,
            z: 266.9058,
          },
          {
            x: 52.681427,
            y: 3.0451,
            z: 268.401917,
          },
          {
            x: 47.69429,
            y: 3.0451,
            z: 268.760376,
          },
        ],
        top: 3.5451,
        bottom: 2.5451,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 44.0876045,
          y: 3.0463,
          z: 270.9211,
        },
        outline: [
          {
            x: 42.2141266,
            y: 3.0463,
            z: 269.103821,
          },
          {
            x: 43.5238533,
            y: 3.0463,
            z: 268.37265,
          },
          {
            x: 45.9610825,
            y: 3.0463,
            z: 272.738434,
          },
          {
            x: 44.6513519,
            y: 3.0463,
            z: 273.4696,
          },
        ],
        top: 3.5463,
        bottom: 2.5463,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 39.51414,
          y: 3.04199982,
          z: 271.35614,
        },
        outline: [
          {
            x: 37.12978,
            y: 3.04199982,
            z: 270.2944,
          },
          {
            x: 38.1079826,
            y: 3.04199982,
            z: 269.157227,
          },
          {
            x: 41.8985,
            y: 3.04199982,
            z: 272.4179,
          },
          {
            x: 40.9203,
            y: 3.04199982,
            z: 273.555054,
          },
        ],
        top: 3.54199982,
        bottom: 2.54199982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 45.95237,
          y: 3.0406,
          z: 265.48764,
        },
        outline: [
          {
            x: 44.6499329,
            y: 3.0406,
            z: 263.225739,
          },
          {
            x: 46.1100922,
            y: 3.0406,
            z: 262.882324,
          },
          {
            x: 47.2548065,
            y: 3.0406,
            z: 267.749542,
          },
          {
            x: 45.7946472,
            y: 3.0406,
            z: 268.092957,
          },
        ],
        top: 3.5406,
        bottom: 2.5406,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 91.65181,
          y: 3.7093,
          z: 372.937347,
        },
        outline: [
          {
            x: 89.77474,
            y: 3.7093,
            z: 371.123749,
          },
          {
            x: 91.08302,
            y: 3.7093,
            z: 370.39,
          },
          {
            x: 93.52888,
            y: 3.7093,
            z: 374.750946,
          },
          {
            x: 92.2206,
            y: 3.7093,
            z: 375.4847,
          },
        ],
        top: 4.2093,
        bottom: 3.2093,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 101.163834,
          y: 3.23599982,
          z: 262.744171,
        },
        outline: [
          {
            x: 98.69047,
            y: 3.23599982,
            z: 261.910553,
          },
          {
            x: 103.687637,
            y: 3.23599982,
            z: 262.078674,
          },
          {
            x: 103.637207,
            y: 3.23599982,
            z: 263.57782,
          },
          {
            x: 98.64003,
            y: 3.23599982,
            z: 263.4097,
          },
        ],
        top: 3.73599982,
        bottom: 2.73599982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.70871,
          y: 3.487789,
          z: 364.55545,
        },
        outline: [
          {
            x: 105.408981,
            y: 3.487789,
            z: 361.966,
          },
          {
            x: 105.57827,
            y: 3.487789,
            z: 361.942749,
          },
          {
            x: 106.855545,
            y: 3.487789,
            z: 362.2812,
          },
          {
            x: 107.024834,
            y: 3.487789,
            z: 362.2579,
          },
          {
            x: 106.008438,
            y: 3.487789,
            z: 367.1449,
          },
          {
            x: 105.839142,
            y: 3.487789,
            z: 367.168182,
          },
          {
            x: 104.561874,
            y: 3.487789,
            z: 366.829742,
          },
          {
            x: 104.392586,
            y: 3.487789,
            z: 366.853027,
          },
        ],
        top: 4.24603462,
        bottom: 2.72954321,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 107.508667,
          y: 3.51274538,
          z: 352.579742,
        },
        outline: [
          {
            x: 105.104019,
            y: 3.51274538,
            z: 351.508362,
          },
          {
            x: 105.222939,
            y: 3.51274538,
            z: 351.374176,
          },
          {
            x: 110.1331,
            y: 3.51274538,
            z: 352.184723,
          },
          {
            x: 110.014183,
            y: 3.51274538,
            z: 352.3189,
          },
          {
            x: 109.913315,
            y: 3.51274538,
            z: 353.651154,
          },
          {
            x: 109.7944,
            y: 3.51274538,
            z: 353.785339,
          },
          {
            x: 104.884232,
            y: 3.51274538,
            z: 352.974762,
          },
          {
            x: 105.003151,
            y: 3.51274538,
            z: 352.840576,
          },
        ],
        top: 4.35941553,
        bottom: 2.66607523,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.401627,
          y: 3.738,
          z: 310.22226,
        },
        outline: [
          {
            x: 104.066734,
            y: 3.738,
            z: 307.97937,
          },
          {
            x: 105.5218,
            y: 3.738,
            z: 307.614929,
          },
          {
            x: 106.736511,
            y: 3.738,
            z: 312.465149,
          },
          {
            x: 105.281448,
            y: 3.738,
            z: 312.829559,
          },
        ],
        top: 4.238,
        bottom: 3.238,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 85.23104,
          y: 3.1701,
          z: 263.365143,
        },
        outline: [
          {
            x: 82.78166,
            y: 3.1701,
            z: 262.46347,
          },
          {
            x: 87.77228,
            y: 3.1701,
            z: 262.769653,
          },
          {
            x: 87.68042,
            y: 3.1701,
            z: 264.266846,
          },
          {
            x: 82.6898041,
            y: 3.1701,
            z: 263.960663,
          },
        ],
        top: 3.6701,
        bottom: 2.6701,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 89.85899,
          y: 3.7073,
          z: 369.811584,
        },
        outline: [
          {
            x: 90.57159,
            y: 3.7073,
            z: 367.3007,
          },
          {
            x: 91.83607,
            y: 3.7073,
            z: 368.107574,
          },
          {
            x: 89.14639,
            y: 3.7073,
            z: 372.3225,
          },
          {
            x: 87.88191,
            y: 3.7073,
            z: 371.515625,
          },
        ],
        top: 4.2073,
        bottom: 3.2073,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 90.44106,
          y: 3.2707,
          z: 262.326447,
        },
        outline: [
          {
            x: 87.9649353,
            y: 3.2707,
            z: 261.501068,
          },
          {
            x: 88.82818,
            y: 3.2707,
            z: 260.274353,
          },
          {
            x: 92.91719,
            y: 3.2707,
            z: 263.151855,
          },
          {
            x: 92.05395,
            y: 3.2707,
            z: 264.37854,
          },
        ],
        top: 3.7707,
        bottom: 2.7707,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.2931671,
          y: 3.05429983,
          z: 273.340179,
        },
        outline: [
          {
            x: 52.0516624,
            y: 3.05429983,
            z: 271.411377,
          },
          {
            x: 52.8229828,
            y: 3.05429983,
            z: 272.697876,
          },
          {
            x: 48.534668,
            y: 3.05429983,
            z: 275.268951,
          },
          {
            x: 47.7633476,
            y: 3.05429983,
            z: 273.982452,
          },
        ],
        top: 3.55429983,
        bottom: 2.55429983,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.188858,
          y: 3.05429983,
          z: 272.2082,
        },
        outline: [
          {
            x: 47.8928452,
            y: 3.05429983,
            z: 270.9669,
          },
          {
            x: 52.7889977,
            y: 3.05429983,
            z: 271.980652,
          },
          {
            x: 52.4848747,
            y: 3.05429983,
            z: 273.4495,
          },
          {
            x: 47.5887222,
            y: 3.05429983,
            z: 272.43573,
          },
        ],
        top: 3.55429983,
        bottom: 2.55429983,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 47.1856155,
          y: 3.1352,
          z: 262.876678,
        },
        outline: [
          {
            x: 44.5766754,
            y: 3.1352,
            z: 262.799683,
          },
          {
            x: 45.04988,
            y: 3.1352,
            z: 261.376282,
          },
          {
            x: 49.7945557,
            y: 3.1352,
            z: 262.953644,
          },
          {
            x: 49.3213463,
            y: 3.1352,
            z: 264.377045,
          },
        ],
        top: 3.6352,
        bottom: 2.6352,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 52.0501671,
          y: 3.15099978,
          z: 261.92395,
        },
        outline: [
          {
            x: 54.0131645,
            y: 3.15099978,
            z: 260.203735,
          },
          {
            x: 54.6359062,
            y: 3.15099978,
            z: 261.568359,
          },
          {
            x: 50.0871735,
            y: 3.15099978,
            z: 263.644165,
          },
          {
            x: 49.4644279,
            y: 3.15099978,
            z: 262.279541,
          },
        ],
        top: 3.65099978,
        bottom: 2.65099978,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 59.1696854,
          y: 8.170616,
          z: 318.111,
        },
        outline: [
          {
            x: 56.610405,
            y: 8.170616,
            z: 317.800354,
          },
          {
            x: 56.555706,
            y: 8.170616,
            z: 317.787384,
          },
          {
            x: 61.47715,
            y: 8.170616,
            z: 316.9433,
          },
          {
            x: 61.53185,
            y: 8.170616,
            z: 316.956268,
          },
          {
            x: 61.7289658,
            y: 8.170616,
            z: 318.421631,
          },
          {
            x: 61.78367,
            y: 8.170616,
            z: 318.434631,
          },
          {
            x: 56.8622246,
            y: 8.170616,
            z: 319.278717,
          },
          {
            x: 56.80752,
            y: 8.170616,
            z: 319.265717,
          },
        ],
        top: 8.815667,
        bottom: 7.525565,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.5680237,
          y: 3.0446,
          z: 329.601349,
        },
        outline: [
          {
            x: 48.20743,
            y: 3.0446,
            z: 328.487762,
          },
          {
            x: 53.151783,
            y: 3.0446,
            z: 329.231659,
          },
          {
            x: 52.92861,
            y: 3.0446,
            z: 330.714966,
          },
          {
            x: 47.98426,
            y: 3.0446,
            z: 329.971069,
          },
        ],
        top: 3.5446,
        bottom: 2.5446,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.96476,
          y: 3.482022,
          z: 363.753,
        },
        outline: [
          {
            x: 103.415443,
            y: 3.482022,
            z: 363.003,
          },
          {
            x: 103.599594,
            y: 3.482022,
            z: 363.003,
          },
          {
            x: 108.329933,
            y: 3.482022,
            z: 363.003,
          },
          {
            x: 108.514084,
            y: 3.482022,
            z: 363.003,
          },
          {
            x: 108.514084,
            y: 3.482022,
            z: 364.503,
          },
          {
            x: 108.329933,
            y: 3.482022,
            z: 364.503,
          },
          {
            x: 103.599586,
            y: 3.482022,
            z: 364.503,
          },
          {
            x: 103.415443,
            y: 3.482022,
            z: 364.503,
          },
        ],
        top: 4.43384457,
        bottom: 2.53019929,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 91.61232,
          y: 3.7646,
          z: 377.5985,
        },
        outline: [
          {
            x: 92.28211,
            y: 3.7646,
            z: 375.075836,
          },
          {
            x: 93.56013,
            y: 3.7646,
            z: 375.8611,
          },
          {
            x: 90.94253,
            y: 3.7646,
            z: 380.1212,
          },
          {
            x: 89.664505,
            y: 3.7646,
            z: 379.3359,
          },
        ],
        top: 4.26460028,
        bottom: 3.2646,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 40.9370651,
          y: 3.04409981,
          z: 278.0631,
        },
        outline: [
          {
            x: 42.72211,
            y: 3.04409981,
            z: 276.158875,
          },
          {
            x: 43.4755363,
            y: 3.04409981,
            z: 277.455933,
          },
          {
            x: 39.1520233,
            y: 3.04409981,
            z: 279.967346,
          },
          {
            x: 38.3985977,
            y: 3.04409981,
            z: 278.6703,
          },
        ],
        top: 3.54409981,
        bottom: 2.54409981,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 41.0526123,
          y: 3.04519987,
          z: 269.855652,
        },
        outline: [
          {
            x: 38.4436722,
            y: 3.04519987,
            z: 269.778656,
          },
          {
            x: 38.9168777,
            y: 3.04519987,
            z: 268.355255,
          },
          {
            x: 43.6615524,
            y: 3.04519987,
            z: 269.932617,
          },
          {
            x: 43.188343,
            y: 3.04519987,
            z: 271.356018,
          },
        ],
        top: 3.54519987,
        bottom: 2.54519987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 60.2214966,
          y: 7.62422371,
          z: 323.099121,
        },
        outline: [
          {
            x: 58.79358,
            y: 7.62422371,
            z: 320.962128,
          },
          {
            x: 58.7584839,
            y: 7.62422371,
            z: 320.904,
          },
          {
            x: 60.19242,
            y: 7.62422371,
            z: 320.464417,
          },
          {
            x: 60.2275162,
            y: 7.62422371,
            z: 320.522583,
          },
          {
            x: 61.6494141,
            y: 7.62422371,
            z: 325.236084,
          },
          {
            x: 61.68451,
            y: 7.62422371,
            z: 325.29422,
          },
          {
            x: 60.2505722,
            y: 7.62422371,
            z: 325.7338,
          },
          {
            x: 60.215477,
            y: 7.62422371,
            z: 325.675629,
          },
        ],
        top: 8.300171,
        bottom: 6.94827652,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 106.773117,
          y: 4.04200029,
          z: 297.600861,
        },
        outline: [
          {
            x: 106.287094,
            y: 4.04200029,
            z: 295.0364,
          },
          {
            x: 107.778961,
            y: 4.04200029,
            z: 295.192383,
          },
          {
            x: 107.25914,
            y: 4.04200029,
            z: 300.165283,
          },
          {
            x: 105.767265,
            y: 4.04200029,
            z: 300.009338,
          },
        ],
        top: 4.54200029,
        bottom: 3.542,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 38.7880936,
          y: 3.0433,
          z: 273.0203,
        },
        outline: [
          {
            x: 36.1789169,
            y: 3.0433,
            z: 272.9518,
          },
          {
            x: 36.64748,
            y: 3.0433,
            z: 271.526855,
          },
          {
            x: 41.39727,
            y: 3.0433,
            z: 273.088745,
          },
          {
            x: 40.9287071,
            y: 3.0433,
            z: 274.5137,
          },
        ],
        top: 3.5433,
        bottom: 2.5433,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 43.8877373,
          y: 3.0463,
          z: 272.588867,
        },
        outline: [
          {
            x: 45.7455521,
            y: 3.0463,
            z: 270.755554,
          },
          {
            x: 46.4479179,
            y: 3.0463,
            z: 272.080963,
          },
          {
            x: 42.0299225,
            y: 3.0463,
            z: 274.42218,
          },
          {
            x: 41.3275566,
            y: 3.0463,
            z: 273.096771,
          },
        ],
        top: 3.5463,
        bottom: 2.5463,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 104.94207,
          y: 3.28524971,
          z: 354.912323,
        },
        outline: [
          {
            x: 104.214973,
            y: 3.28524971,
            z: 352.38446,
          },
          {
            x: 104.349159,
            y: 3.28524971,
            z: 352.395081,
          },
          {
            x: 105.700577,
            y: 3.28524971,
            z: 352.432434,
          },
          {
            x: 105.834763,
            y: 3.28524971,
            z: 352.443054,
          },
          {
            x: 105.669159,
            y: 3.28524971,
            z: 357.440216,
          },
          {
            x: 105.534973,
            y: 3.28524971,
            z: 357.4296,
          },
          {
            x: 104.183556,
            y: 3.28524971,
            z: 357.392242,
          },
          {
            x: 104.04937,
            y: 3.28524971,
            z: 357.381622,
          },
        ],
        top: 3.8971262,
        bottom: 2.673373,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 43.2365074,
          y: 3.0406,
          z: 267.474182,
        },
        outline: [
          {
            x: 40.66415,
            y: 3.0406,
            z: 267.032074,
          },
          {
            x: 41.3323174,
            y: 3.0406,
            z: 265.6891,
          },
          {
            x: 45.8088646,
            y: 3.0406,
            z: 267.916321,
          },
          {
            x: 45.1406975,
            y: 3.0406,
            z: 269.259277,
          },
        ],
        top: 3.5406,
        bottom: 2.5406,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.8929,
          y: 4.053,
          z: 303.6659,
        },
        outline: [
          {
            x: 106.411461,
            y: 4.053,
            z: 301.107849,
          },
          {
            x: 107.733925,
            y: 4.053,
            z: 301.815735,
          },
          {
            x: 105.374329,
            y: 4.053,
            z: 306.223938,
          },
          {
            x: 104.051865,
            y: 4.053,
            z: 305.516052,
          },
        ],
        top: 4.553,
        bottom: 3.553,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 46.4389153,
          y: 2.99,
          z: 269.473572,
        },
        outline: [
          {
            x: 43.98763,
            y: 2.99,
            z: 268.5771,
          },
          {
            x: 48.9788857,
            y: 2.99,
            z: 268.872681,
          },
          {
            x: 48.8902054,
            y: 2.99,
            z: 270.370056,
          },
          {
            x: 43.89895,
            y: 2.99,
            z: 270.074463,
          },
        ],
        top: 3.49,
        bottom: 2.49,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 104.421043,
          y: 3.748,
          z: 379.46048,
        },
        outline: [
          {
            x: 101.827522,
            y: 3.748,
            z: 379.167,
          },
          {
            x: 106.747833,
            y: 3.748,
            z: 378.277863,
          },
          {
            x: 107.014565,
            y: 3.748,
            z: 379.753967,
          },
          {
            x: 102.094254,
            y: 3.748,
            z: 380.643066,
          },
        ],
        top: 4.248,
        bottom: 3.248,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 104.430809,
          y: 3.82334423,
          z: 375.357941,
        },
        outline: [
          {
            x: 104.839149,
            y: 3.82334423,
            z: 372.836639,
          },
          {
            x: 104.880981,
            y: 3.82334423,
            z: 372.751923,
          },
          {
            x: 106.226,
            y: 3.82334423,
            z: 373.415924,
          },
          {
            x: 106.184166,
            y: 3.82334423,
            z: 373.500671,
          },
          {
            x: 104.022461,
            y: 3.82334423,
            z: 377.879242,
          },
          {
            x: 103.980629,
            y: 3.82334423,
            z: 377.964,
          },
          {
            x: 102.635612,
            y: 3.82334423,
            z: 377.299957,
          },
          {
            x: 102.677452,
            y: 3.82334423,
            z: 377.2152,
          },
        ],
        top: 4.557352,
        bottom: 3.08933616,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 61.0284843,
          y: 3.06029987,
          z: 263.34317,
        },
        outline: [
          {
            x: 58.46539,
            y: 3.06029987,
            z: 262.8502,
          },
          {
            x: 63.43969,
            y: 3.06029987,
            z: 262.343872,
          },
          {
            x: 63.59158,
            y: 3.06029987,
            z: 263.836182,
          },
          {
            x: 58.6172829,
            y: 3.06029987,
            z: 264.342468,
          },
        ],
        top: 3.56029987,
        bottom: 2.56029987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 86.60848,
          y: 3.7218,
          z: 374.048157,
        },
        outline: [
          {
            x: 84.00115,
            y: 3.7218,
            z: 373.928436,
          },
          {
            x: 88.8511353,
            y: 3.7218,
            z: 372.71286,
          },
          {
            x: 89.21581,
            y: 3.7218,
            z: 374.167847,
          },
          {
            x: 84.36582,
            y: 3.7218,
            z: 375.383453,
          },
        ],
        top: 4.22180033,
        bottom: 3.2218,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 70.0221939,
          y: 3.097,
          z: 262.377838,
        },
        outline: [
          {
            x: 72.0793839,
            y: 3.097,
            z: 260.771484,
          },
          {
            x: 72.62391,
            y: 3.097,
            z: 262.169159,
          },
          {
            x: 67.965,
            y: 3.097,
            z: 263.984222,
          },
          {
            x: 67.42047,
            y: 3.097,
            z: 262.586548,
          },
        ],
        top: 3.597,
        bottom: 2.597,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 38.9410248,
          y: 3.148,
          z: 261.59906,
        },
        outline: [
          {
            x: 36.3647842,
            y: 3.148,
            z: 261.180145,
          },
          {
            x: 41.3224258,
            y: 3.148,
            z: 260.53067,
          },
          {
            x: 41.5172653,
            y: 3.148,
            z: 262.017975,
          },
          {
            x: 36.5596237,
            y: 3.148,
            z: 262.667419,
          },
        ],
        top: 3.648,
        bottom: 2.648,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.98151,
          y: 3.045,
          z: 266.077637,
        },
        outline: [
          {
            x: 48.97331,
            y: 3.045,
            z: 264.4104,
          },
          {
            x: 50.2226753,
            y: 3.045,
            z: 263.5803,
          },
          {
            x: 52.98971,
            y: 3.045,
            z: 267.744873,
          },
          {
            x: 51.740345,
            y: 3.045,
            z: 268.574982,
          },
        ],
        top: 3.545,
        bottom: 2.545,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 43.86917,
          y: 3.0463,
          z: 271.0464,
        },
        outline: [
          {
            x: 41.7745171,
            y: 3.0463,
            z: 269.489166,
          },
          {
            x: 42.9776039,
            y: 3.0463,
            z: 268.5933,
          },
          {
            x: 45.96383,
            y: 3.0463,
            z: 272.603577,
          },
          {
            x: 44.7607422,
            y: 3.0463,
            z: 273.499451,
          },
        ],
        top: 3.5463,
        bottom: 2.5463,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.113163,
          y: 3.0451,
          z: 267.582153,
        },
        outline: [
          {
            x: 47.51337,
            y: 3.0451,
            z: 267.350677,
          },
          {
            x: 52.4110565,
            y: 3.0451,
            z: 266.34433,
          },
          {
            x: 52.71295,
            y: 3.0451,
            z: 267.81366,
          },
          {
            x: 47.81527,
            y: 3.0451,
            z: 268.819977,
          },
        ],
        top: 3.5451,
        bottom: 2.5451,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.657707,
          y: 4.04200029,
          z: 290.107452,
        },
        outline: [
          {
            x: 104.369293,
            y: 4.04200029,
            z: 287.837555,
          },
          {
            x: 105.831551,
            y: 4.04200029,
            z: 287.503174,
          },
          {
            x: 106.946121,
            y: 4.04200029,
            z: 292.37738,
          },
          {
            x: 105.483864,
            y: 4.04200029,
            z: 292.711731,
          },
        ],
        top: 4.54200029,
        bottom: 3.542,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 39.6761436,
          y: 3.04199982,
          z: 271.1634,
        },
        outline: [
          {
            x: 37.1735954,
            y: 3.04199982,
            z: 270.421936,
          },
          {
            x: 37.995,
            y: 3.04199982,
            z: 269.16684,
          },
          {
            x: 42.17869,
            y: 3.04199982,
            z: 271.904846,
          },
          {
            x: 41.35729,
            y: 3.04199982,
            z: 273.159973,
          },
        ],
        top: 3.54199982,
        bottom: 2.54199982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 45.70794,
          y: 3.0406,
          z: 265.5481,
        },
        outline: [
          {
            x: 44.12141,
            y: 3.0406,
            z: 263.475555,
          },
          {
            x: 45.5242538,
            y: 3.0406,
            z: 262.9445,
          },
          {
            x: 47.29447,
            y: 3.0406,
            z: 267.620636,
          },
          {
            x: 45.89163,
            y: 3.0406,
            z: 268.1517,
          },
        ],
        top: 3.5406,
        bottom: 2.5406,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 101.169411,
          y: 3.23599982,
          z: 262.492462,
        },
        outline: [
          {
            x: 98.60839,
            y: 3.23599982,
            z: 261.9888,
          },
          {
            x: 103.584763,
            y: 3.23599982,
            z: 261.5032,
          },
          {
            x: 103.730431,
            y: 3.23599982,
            z: 262.996124,
          },
          {
            x: 98.75407,
            y: 3.23599982,
            z: 263.4817,
          },
        ],
        top: 3.73599982,
        bottom: 2.73599982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 91.4336243,
          y: 3.7093,
          z: 373.063019,
        },
        outline: [
          {
            x: 89.3359,
            y: 3.7093,
            z: 371.509949,
          },
          {
            x: 90.53721,
            y: 3.7093,
            z: 370.611725,
          },
          {
            x: 93.53136,
            y: 3.7093,
            z: 374.6161,
          },
          {
            x: 92.33004,
            y: 3.7093,
            z: 375.514343,
          },
        ],
        top: 4.2093,
        bottom: 3.2093,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.465317,
          y: 3.44715285,
          z: 364.505371,
        },
        outline: [
          {
            x: 104.83284,
            y: 3.44715285,
            z: 361.9653,
          },
          {
            x: 105.002129,
            y: 3.44715285,
            z: 361.942017,
          },
          {
            x: 106.306824,
            y: 3.44715285,
            z: 362.086426,
          },
          {
            x: 106.476112,
            y: 3.44715285,
            z: 362.063141,
          },
          {
            x: 106.097794,
            y: 3.44715285,
            z: 367.045441,
          },
          {
            x: 105.928505,
            y: 3.44715285,
            z: 367.068726,
          },
          {
            x: 104.6238,
            y: 3.44715285,
            z: 366.924347,
          },
          {
            x: 104.454514,
            y: 3.44715285,
            z: 366.947632,
          },
        ],
        top: 4.156357,
        bottom: 2.737949,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 107.542725,
          y: 3.55049753,
          z: 352.33313,
        },
        outline: [
          {
            x: 105.014191,
            y: 3.55049753,
            z: 351.574615,
          },
          {
            x: 105.13311,
            y: 3.55049753,
            z: 351.44043,
          },
          {
            x: 110.096893,
            y: 3.55049753,
            z: 351.606049,
          },
          {
            x: 109.977974,
            y: 3.55049753,
            z: 351.740234,
          },
          {
            x: 110.071259,
            y: 3.55049753,
            z: 353.091644,
          },
          {
            x: 109.952339,
            y: 3.55049753,
            z: 353.22583,
          },
          {
            x: 104.988556,
            y: 3.55049753,
            z: 353.0602,
          },
          {
            x: 105.107475,
            y: 3.55049753,
            z: 352.926025,
          },
        ],
        top: 4.43396664,
        bottom: 2.66702819,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.645157,
          y: 3.738,
          z: 310.1583,
        },
        outline: [
          {
            x: 104.028931,
            y: 3.738,
            z: 308.108826,
          },
          {
            x: 105.423981,
            y: 3.738,
            z: 307.5576,
          },
          {
            x: 107.261383,
            y: 3.738,
            z: 312.207764,
          },
          {
            x: 105.866333,
            y: 3.738,
            z: 312.758972,
          },
        ],
        top: 4.238,
        bottom: 3.238,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 85.243576,
          y: 3.1701,
          z: 263.113678,
        },
        outline: [
          {
            x: 82.69746,
            y: 3.1701,
            z: 262.5394,
          },
          {
            x: 87.68534,
            y: 3.1701,
            z: 262.191559,
          },
          {
            x: 87.7896957,
            y: 3.1701,
            z: 263.687927,
          },
          {
            x: 82.80181,
            y: 3.1701,
            z: 264.035767,
          },
        ],
        top: 3.6701,
        bottom: 2.6701,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 89.645195,
          y: 3.7073,
          z: 369.6786,
        },
        outline: [
          {
            x: 90.02396,
            y: 3.7073,
            z: 367.09613,
          },
          {
            x: 91.3829346,
            y: 3.7073,
            z: 367.731079,
          },
          {
            x: 89.26643,
            y: 3.7073,
            z: 372.261047,
          },
          {
            x: 87.90745,
            y: 3.7073,
            z: 371.6261,
          },
        ],
        top: 4.2073,
        bottom: 3.2073,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 90.29853,
          y: 3.2707,
          z: 262.534027,
        },
        outline: [
          {
            x: 87.73585,
            y: 3.2707,
            z: 262.038879,
          },
          {
            x: 88.43159,
            y: 3.2707,
            z: 260.71,
          },
          {
            x: 92.86121,
            y: 3.2707,
            z: 263.029144,
          },
          {
            x: 92.16547,
            y: 3.2707,
            z: 264.358032,
          },
        ],
        top: 3.7707,
        bottom: 2.7707,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 98.48776,
          y: 3.80659986,
          z: 374.523773,
        },
        outline: [
          {
            x: 99.1543,
            y: 3.80659986,
            z: 372.0002,
          },
          {
            x: 100.433327,
            y: 3.80659986,
            z: 372.783844,
          },
          {
            x: 97.82122,
            y: 3.80659986,
            z: 377.0473,
          },
          {
            x: 96.54219,
            y: 3.80659986,
            z: 376.263672,
          },
        ],
        top: 4.3066,
        bottom: 3.30659986,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 52.12035,
          y: 3.05429983,
          z: 272.952179,
        },
        outline: [
          {
            x: 53.467,
            y: 3.05429983,
            z: 270.716339,
          },
          {
            x: 54.47536,
            y: 3.05429983,
            z: 271.826843,
          },
          {
            x: 50.7736969,
            y: 3.05429983,
            z: 275.188049,
          },
          {
            x: 49.7653351,
            y: 3.05429983,
            z: 274.077545,
          },
        ],
        top: 3.55429983,
        bottom: 2.55429983,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 106.375641,
          y: 3.57131243,
          z: 369.8967,
        },
        outline: [
          {
            x: 104.551735,
            y: 3.57131243,
            z: 368.092255,
          },
          {
            x: 104.53019,
            y: 3.57131243,
            z: 368.008667,
          },
          {
            x: 105.854607,
            y: 3.57131243,
            z: 367.3051,
          },
          {
            x: 105.876144,
            y: 3.57131243,
            z: 367.388672,
          },
          {
            x: 108.199547,
            y: 3.57131243,
            z: 371.701172,
          },
          {
            x: 108.221092,
            y: 3.57131243,
            z: 371.784729,
          },
          {
            x: 106.896683,
            y: 3.57131243,
            z: 372.4883,
          },
          {
            x: 106.875137,
            y: 3.57131243,
            z: 372.404724,
          },
        ],
        top: 4.29435158,
        bottom: 2.84827375,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 46.9946938,
          y: 2.99,
          z: 268.958374,
        },
        outline: [
          {
            x: 48.7290726,
            y: 2.99,
            z: 267.007874,
          },
          {
            x: 49.5163269,
            y: 2.99,
            z: 268.284668,
          },
          {
            x: 45.26032,
            y: 2.99,
            z: 270.908875,
          },
          {
            x: 44.47306,
            y: 2.99,
            z: 269.63205,
          },
        ],
        top: 3.49,
        bottom: 2.49,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 95.64453,
          y: 3.23599982,
          z: 262.801422,
        },
        outline: [
          {
            x: 97.5831,
            y: 3.23599982,
            z: 261.0537,
          },
          {
            x: 98.2250061,
            y: 3.23599982,
            z: 262.409424,
          },
          {
            x: 93.70596,
            y: 3.23599982,
            z: 264.549133,
          },
          {
            x: 93.06406,
            y: 3.23599982,
            z: 263.19342,
          },
        ],
        top: 3.73599982,
        bottom: 2.73599982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 44.66597,
          y: 3.10839987,
          z: 291.838226,
        },
        outline: [
          {
            x: 42.0629463,
            y: 3.10839987,
            z: 291.646454,
          },
          {
            x: 46.9446869,
            y: 3.10839987,
            z: 290.56543,
          },
          {
            x: 47.2689934,
            y: 3.10839987,
            z: 292.029968,
          },
          {
            x: 42.3872528,
            y: 3.10839987,
            z: 293.111,
          },
        ],
        top: 3.60839987,
        bottom: 2.60839987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 45.35242,
          y: 3.03499985,
          z: 299.7921,
        },
        outline: [
          {
            x: 45.90146,
            y: 3.03499985,
            z: 297.240448,
          },
          {
            x: 47.2153854,
            y: 3.03499985,
            z: 297.96405,
          },
          {
            x: 44.8033829,
            y: 3.03499985,
            z: 302.343781,
          },
          {
            x: 43.4894562,
            y: 3.03499985,
            z: 301.620178,
          },
        ],
        top: 3.53499985,
        bottom: 2.53499985,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 48.5958481,
          y: 2.99,
          z: 266.773926,
        },
        outline: [
          {
            x: 47.3003426,
            y: 2.99,
            z: 264.508057,
          },
          {
            x: 48.7615471,
            y: 2.99,
            z: 264.169128,
          },
          {
            x: 49.8913536,
            y: 2.99,
            z: 269.0398,
          },
          {
            x: 48.43015,
            y: 2.99,
            z: 269.378754,
          },
        ],
        top: 3.49,
        bottom: 2.49,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 43.29648,
          y: 3.04339981,
          z: 281.7224,
        },
        outline: [
          {
            x: 43.981308,
            y: 3.04339981,
            z: 279.203766,
          },
          {
            x: 45.25462,
            y: 3.04339981,
            z: 279.996674,
          },
          {
            x: 42.6116524,
            y: 3.04339981,
            z: 284.241028,
          },
          {
            x: 41.33834,
            y: 3.04339981,
            z: 283.448151,
          },
        ],
        top: 3.54339981,
        bottom: 2.54339981,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 46.9278374,
          y: 3.0463,
          z: 322.4375,
        },
        outline: [
          {
            x: 48.0919876,
            y: 3.0463,
            z: 320.10144,
          },
          {
            x: 49.1856575,
            y: 3.0463,
            z: 321.128021,
          },
          {
            x: 45.7636833,
            y: 3.0463,
            z: 324.7736,
          },
          {
            x: 44.6700172,
            y: 3.0463,
            z: 323.746979,
          },
        ],
        top: 3.5463,
        bottom: 2.5463,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.07206,
          y: 3.33792448,
          z: 349.73468,
        },
        outline: [
          {
            x: 104.3234,
            y: 3.33792448,
            z: 347.2174,
          },
          {
            x: 104.491447,
            y: 3.33792448,
            z: 347.2068,
          },
          {
            x: 105.8014,
            y: 3.33792448,
            z: 347.265381,
          },
          {
            x: 105.969444,
            y: 3.33792448,
            z: 347.254761,
          },
          {
            x: 105.820709,
            y: 3.33792448,
            z: 352.251923,
          },
          {
            x: 105.652672,
            y: 3.33792448,
            z: 352.262543,
          },
          {
            x: 104.342712,
            y: 3.33792448,
            z: 352.203949,
          },
          {
            x: 104.174675,
            y: 3.33792448,
            z: 352.214569,
          },
        ],
        top: 3.99612,
        bottom: 2.679729,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 40.84024,
          y: 2.9549,
          z: 275.45993,
        },
        outline: [
          {
            x: 38.423748,
            y: 2.9549,
            z: 274.47348,
          },
          {
            x: 43.4006729,
            y: 2.9549,
            z: 274.9533,
          },
          {
            x: 43.25673,
            y: 2.9549,
            z: 276.446381,
          },
          {
            x: 38.2798042,
            y: 2.9549,
            z: 275.966583,
          },
        ],
        top: 3.4549,
        bottom: 2.4549,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 51.58302,
          y: 3.0657,
          z: 323.926544,
        },
        outline: [
          {
            x: 48.9762955,
            y: 3.0657,
            z: 323.794342,
          },
          {
            x: 49.4795341,
            y: 3.0657,
            z: 322.381256,
          },
          {
            x: 54.1897469,
            y: 3.0657,
            z: 324.058746,
          },
          {
            x: 53.68651,
            y: 3.0657,
            z: 325.4718,
          },
        ],
        top: 3.5657,
        bottom: 2.5657,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 51.64962,
          y: 3.046,
          z: 326.928558,
        },
        outline: [
          {
            x: 53.6415176,
            y: 3.046,
            z: 325.241882,
          },
          {
            x: 54.24102,
            y: 3.046,
            z: 326.616882,
          },
          {
            x: 49.65772,
            y: 3.046,
            z: 328.6152,
          },
          {
            x: 49.05822,
            y: 3.046,
            z: 327.240234,
          },
        ],
        top: 3.546,
        bottom: 2.546,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 108.436172,
          y: 4.03546524,
          z: 367.168854,
        },
        outline: [
          {
            x: 105.90641,
            y: 4.03546524,
            z: 366.35675,
          },
          {
            x: 106.126251,
            y: 4.03546524,
            z: 366.35675,
          },
          {
            x: 110.78257,
            y: 4.03546524,
            z: 366.481445,
          },
          {
            x: 111.002419,
            y: 4.03546524,
            z: 366.481445,
          },
          {
            x: 110.965927,
            y: 4.03546524,
            z: 367.981,
          },
          {
            x: 110.746086,
            y: 4.03546524,
            z: 367.981,
          },
          {
            x: 106.089767,
            y: 4.03546524,
            z: 367.8563,
          },
          {
            x: 105.869919,
            y: 4.03546524,
            z: 367.8563,
          },
        ],
        top: 5.07678032,
        bottom: 2.99415064,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.96476,
          y: 3.482022,
          z: 361.009,
        },
        outline: [
          {
            x: 103.415443,
            y: 3.482022,
            z: 360.259,
          },
          {
            x: 103.599594,
            y: 3.482022,
            z: 360.259,
          },
          {
            x: 108.329933,
            y: 3.482022,
            z: 360.259,
          },
          {
            x: 108.514084,
            y: 3.482022,
            z: 360.259,
          },
          {
            x: 108.514084,
            y: 3.482022,
            z: 361.759,
          },
          {
            x: 108.329933,
            y: 3.482022,
            z: 361.759,
          },
          {
            x: 103.599586,
            y: 3.482022,
            z: 361.759,
          },
          {
            x: 103.415443,
            y: 3.482022,
            z: 361.759,
          },
        ],
        top: 4.43384457,
        bottom: 2.53019929,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 59.10593,
          y: 8.615973,
          z: 319.067932,
        },
        outline: [
          {
            x: 56.54499,
            y: 8.615973,
            z: 319.001434,
          },
          {
            x: 56.82125,
            y: 8.615973,
            z: 317.9016,
          },
          {
            x: 56.8969765,
            y: 8.615973,
            z: 317.613464,
          },
          {
            x: 61.7425957,
            y: 8.615973,
            z: 318.846283,
          },
          {
            x: 61.66687,
            y: 8.615973,
            z: 319.13443,
          },
          {
            x: 61.3906059,
            y: 8.615973,
            z: 320.234222,
          },
          {
            x: 61.3148842,
            y: 8.615973,
            z: 320.522369,
          },
          {
            x: 56.469265,
            y: 8.615973,
            z: 319.289551,
          },
        ],
        top: 9.322837,
        bottom: 7.90911055,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 38.49344,
          y: 2.93439984,
          z: 265.514374,
        },
        outline: [
          {
            x: 38.2650375,
            y: 2.93439984,
            z: 262.9143,
          },
          {
            x: 39.7339821,
            y: 2.93439984,
            z: 263.217957,
          },
          {
            x: 38.7218437,
            y: 2.93439984,
            z: 268.114441,
          },
          {
            x: 37.2528954,
            y: 2.93439984,
            z: 267.8108,
          },
        ],
        top: 3.43439984,
        bottom: 2.43439984,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 95.55154,
          y: 3.7314,
          z: 373.617462,
        },
        outline: [
          {
            x: 97.18951,
            y: 3.7314,
            z: 371.585327,
          },
          {
            x: 98.03761,
            y: 3.7314,
            z: 372.82254,
          },
          {
            x: 93.91356,
            y: 3.7314,
            z: 375.6496,
          },
          {
            x: 93.06545,
            y: 3.7314,
            z: 374.412384,
          },
        ],
        top: 4.2314,
        bottom: 3.2314,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 35.715847,
          y: 3.0389,
          z: 266.878876,
        },
        outline: [
          {
            x: 35.068985,
            y: 3.0389,
            z: 264.35025,
          },
          {
            x: 36.5677261,
            y: 3.0389,
            z: 264.411743,
          },
          {
            x: 36.36271,
            y: 3.0389,
            z: 269.407532,
          },
          {
            x: 34.86397,
            y: 3.0389,
            z: 269.346039,
          },
        ],
        top: 3.5389,
        bottom: 2.5389,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 64.31106,
          y: 3.06029987,
          z: 261.2189,
        },
        outline: [
          {
            x: 61.96353,
            y: 3.06029987,
            z: 260.078,
          },
          {
            x: 66.8989258,
            y: 3.06029987,
            z: 260.879181,
          },
          {
            x: 66.65858,
            y: 3.06029987,
            z: 262.3598,
          },
          {
            x: 61.7231827,
            y: 3.06029987,
            z: 261.558624,
          },
        ],
        top: 3.56029987,
        bottom: 2.56029987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 100.390762,
          y: 3.7982,
          z: 375.388275,
        },
        outline: [
          {
            x: 99.85504,
            y: 3.7982,
            z: 372.833771,
          },
          {
            x: 101.349663,
            y: 3.7982,
            z: 372.960724,
          },
          {
            x: 100.926491,
            y: 3.7982,
            z: 377.94278,
          },
          {
            x: 99.43187,
            y: 3.7982,
            z: 377.815826,
          },
        ],
        top: 4.2982,
        bottom: 3.2982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 86.925415,
          y: 3.2707,
          z: 258.827454,
        },
        outline: [
          {
            x: 87.27904,
            y: 3.2707,
            z: 256.241455,
          },
          {
            x: 88.6441345,
            y: 3.2707,
            z: 256.863159,
          },
          {
            x: 86.571785,
            y: 3.2707,
            z: 261.413452,
          },
          {
            x: 85.2066956,
            y: 3.2707,
            z: 260.791748,
          },
        ],
        top: 3.7707,
        bottom: 2.7707,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 93.37352,
          y: 3.7453,
          z: 370.640656,
        },
        outline: [
          {
            x: 91.32643,
            y: 3.7453,
            z: 369.021423,
          },
          {
            x: 92.5558,
            y: 3.7453,
            z: 368.161957,
          },
          {
            x: 95.4206161,
            y: 3.7453,
            z: 372.2599,
          },
          {
            x: 94.19124,
            y: 3.7453,
            z: 373.119324,
          },
        ],
        top: 4.24530029,
        bottom: 3.2453,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 83.87524,
          y: 3.2707,
          z: 259.4846,
        },
        outline: [
          {
            x: 81.47845,
            y: 3.2707,
            z: 258.451172,
          },
          {
            x: 82.4430847,
            y: 3.2707,
            z: 257.3025,
          },
          {
            x: 86.2720261,
            y: 3.2707,
            z: 260.517975,
          },
          {
            x: 85.30738,
            y: 3.2707,
            z: 261.666656,
          },
        ],
        top: 3.7707,
        bottom: 2.7707,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 43.0948372,
          y: 3.0406,
          z: 267.749939,
        },
        outline: [
          {
            x: 40.48678,
            y: 3.0406,
            z: 267.647369,
          },
          {
            x: 40.9739342,
            y: 3.0406,
            z: 266.228668,
          },
          {
            x: 45.7028961,
            y: 3.0406,
            z: 267.852539,
          },
          {
            x: 45.21574,
            y: 3.0406,
            z: 269.27124,
          },
        ],
        top: 3.5406,
        bottom: 2.5406,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.248962,
          y: 3.326957,
          z: 354.926239,
        },
        outline: [
          {
            x: 104.201088,
            y: 3.326957,
            z: 352.507355,
          },
          {
            x: 104.335274,
            y: 3.326957,
            z: 352.517975,
          },
          {
            x: 105.680466,
            y: 3.326957,
            z: 352.359222,
          },
          {
            x: 105.814651,
            y: 3.326957,
            z: 352.369843,
          },
          {
            x: 106.296829,
            y: 3.326957,
            z: 357.345154,
          },
          {
            x: 106.162643,
            y: 3.326957,
            z: 357.3345,
          },
          {
            x: 104.817451,
            y: 3.326957,
            z: 357.493256,
          },
          {
            x: 104.683266,
            y: 3.326957,
            z: 357.482635,
          },
        ],
        top: 3.98110342,
        bottom: 2.67281055,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 59.9239845,
          y: 7.629617,
          z: 323.186127,
        },
        outline: [
          {
            x: 58.2250175,
            y: 7.629617,
            z: 321.256744,
          },
          {
            x: 58.18992,
            y: 7.629617,
            z: 321.198578,
          },
          {
            x: 59.5545349,
            y: 7.629617,
            z: 320.575928,
          },
          {
            x: 59.5896339,
            y: 7.629617,
            z: 320.6341,
          },
          {
            x: 61.62295,
            y: 7.629617,
            z: 325.11554,
          },
          {
            x: 61.65805,
            y: 7.629617,
            z: 325.173676,
          },
          {
            x: 60.2934341,
            y: 7.629617,
            z: 325.796326,
          },
          {
            x: 60.2583351,
            y: 7.629617,
            z: 325.738159,
          },
        ],
        top: 8.303,
        bottom: 6.956234,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 41.1542053,
          y: 3.04519987,
          z: 269.562744,
        },
        outline: [
          {
            x: 38.8409042,
            y: 3.04519987,
            z: 268.353973,
          },
          {
            x: 43.7508736,
            y: 3.04519987,
            z: 269.298523,
          },
          {
            x: 43.4675064,
            y: 3.04519987,
            z: 270.7715,
          },
          {
            x: 38.5575333,
            y: 3.04519987,
            z: 269.826965,
          },
        ],
        top: 3.54519987,
        bottom: 2.54519987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 38.687458,
          y: 3.0433,
          z: 273.3135,
        },
        outline: [
          {
            x: 36.3702278,
            y: 3.0433,
            z: 272.1123,
          },
          {
            x: 41.28325,
            y: 3.0433,
            z: 273.040833,
          },
          {
            x: 41.00469,
            y: 3.0433,
            z: 274.51474,
          },
          {
            x: 36.0916634,
            y: 3.0433,
            z: 273.5862,
          },
        ],
        top: 3.5433,
        bottom: 2.5433,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 107.081017,
          y: 4.04200029,
          z: 297.637054,
        },
        outline: [
          {
            x: 106.264427,
            y: 4.04200029,
            z: 295.15802,
          },
          {
            x: 107.763893,
            y: 4.04200029,
            z: 295.1179,
          },
          {
            x: 107.897606,
            y: 4.04200029,
            z: 300.1161,
          },
          {
            x: 106.398148,
            y: 4.04200029,
            z: 300.156219,
          },
        ],
        top: 4.54200029,
        bottom: 3.542,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 44.0293579,
          y: 3.0463,
          z: 272.864655,
        },
        outline: [
          {
            x: 45.6319847,
            y: 3.0463,
            z: 270.804535,
          },
          {
            x: 46.5013428,
            y: 3.0463,
            z: 272.026917,
          },
          {
            x: 42.42673,
            y: 3.0463,
            z: 274.924774,
          },
          {
            x: 41.5573769,
            y: 3.0463,
            z: 273.7024,
          },
        ],
        top: 3.5463,
        bottom: 2.5463,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 41.0893173,
          y: 3.04409981,
          z: 278.33316,
        },
        outline: [
          {
            x: 42.6105347,
            y: 3.04409981,
            z: 276.212219,
          },
          {
            x: 43.5268135,
            y: 3.04409981,
            z: 277.399841,
          },
          {
            x: 39.5680962,
            y: 3.04409981,
            z: 280.4541,
          },
          {
            x: 38.6518173,
            y: 3.04409981,
            z: 279.2665,
          },
        ],
        top: 3.54409981,
        bottom: 2.54409981,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 91.8743439,
          y: 3.7646,
          z: 377.764221,
        },
        outline: [
          {
            x: 92.20914,
            y: 3.7646,
            z: 375.1757,
          },
          {
            x: 93.57872,
            y: 3.7646,
            z: 375.787445,
          },
          {
            x: 91.53956,
            y: 3.7646,
            z: 380.352722,
          },
          {
            x: 90.1699753,
            y: 3.7646,
            z: 379.740967,
          },
        ],
        top: 4.26460028,
        bottom: 3.2646,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 59.2177925,
          y: 8.177236,
          z: 318.4172,
        },
        outline: [
          {
            x: 61.35414,
            y: 8.177236,
            z: 316.954346,
          },
          {
            x: 61.408844,
            y: 8.177236,
            z: 316.967316,
          },
          {
            x: 61.79652,
            y: 8.177236,
            z: 318.387,
          },
          {
            x: 61.85122,
            y: 8.177236,
            z: 318.399963,
          },
          {
            x: 57.0814438,
            y: 8.177236,
            z: 319.880035,
          },
          {
            x: 57.02674,
            y: 8.177236,
            z: 319.867065,
          },
          {
            x: 56.6390648,
            y: 8.177236,
            z: 318.447418,
          },
          {
            x: 56.584362,
            y: 8.177236,
            z: 318.434418,
          },
        ],
        top: 8.818917,
        bottom: 7.535553,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.5179443,
          y: 3.0446,
          z: 329.907318,
        },
        outline: [
          {
            x: 48.032196,
            y: 3.0446,
            z: 329.111359,
          },
          {
            x: 53.0313454,
            y: 3.0446,
            z: 329.203522,
          },
          {
            x: 53.0036964,
            y: 3.0446,
            z: 330.703278,
          },
          {
            x: 48.0045433,
            y: 3.0446,
            z: 330.6111,
          },
        ],
        top: 3.5446,
        bottom: 2.5446,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.9687,
          y: 3.48275876,
          z: 363.443,
        },
        outline: [
          {
            x: 103.344177,
            y: 3.48275876,
            z: 363.025726,
          },
          {
            x: 103.528328,
            y: 3.48275876,
            z: 363.025726,
          },
          {
            x: 108.216629,
            y: 3.48275876,
            z: 362.3731,
          },
          {
            x: 108.40078,
            y: 3.48275876,
            z: 362.3731,
          },
          {
            x: 108.593216,
            y: 3.48275876,
            z: 363.86026,
          },
          {
            x: 108.409065,
            y: 3.48275876,
            z: 363.86026,
          },
          {
            x: 103.720764,
            y: 3.48275876,
            z: 364.512878,
          },
          {
            x: 103.536613,
            y: 3.48275876,
            z: 364.512878,
          },
        ],
        top: 4.44866943,
        bottom: 2.51684785,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.13719,
          y: 3.05429983,
          z: 273.072235,
        },
        outline: [
          {
            x: 51.6288872,
            y: 3.05429983,
            z: 270.93042,
          },
          {
            x: 52.5615273,
            y: 3.05429983,
            z: 272.105225,
          },
          {
            x: 48.6454926,
            y: 3.05429983,
            z: 275.21405,
          },
          {
            x: 47.7128525,
            y: 3.05429983,
            z: 274.039246,
          },
        ],
        top: 3.55429983,
        bottom: 2.55429983,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.12209,
          y: 3.05429983,
          z: 272.510956,
        },
        outline: [
          {
            x: 47.6836967,
            y: 3.05429983,
            z: 271.579956,
          },
          {
            x: 52.6702843,
            y: 3.05429983,
            z: 271.945953,
          },
          {
            x: 52.560482,
            y: 3.05429983,
            z: 273.441925,
          },
          {
            x: 47.5739,
            y: 3.05429983,
            z: 273.075928,
          },
        ],
        top: 3.55429983,
        bottom: 2.55429983,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 52.17523,
          y: 3.15099978,
          z: 262.207642,
        },
        outline: [
          {
            x: 53.8968964,
            y: 3.15099978,
            z: 260.2459,
          },
          {
            x: 54.6924324,
            y: 3.15099978,
            z: 261.517578,
          },
          {
            x: 50.4535637,
            y: 3.15099978,
            z: 264.169373,
          },
          {
            x: 49.6580276,
            y: 3.15099978,
            z: 262.8977,
          },
        ],
        top: 3.65099978,
        bottom: 2.65099978,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 47.28721,
          y: 3.1352,
          z: 262.583771,
        },
        outline: [
          {
            x: 44.9739075,
            y: 3.1352,
            z: 261.375,
          },
          {
            x: 49.8838768,
            y: 3.1352,
            z: 262.31955,
          },
          {
            x: 49.60051,
            y: 3.1352,
            z: 263.792542,
          },
          {
            x: 44.6905365,
            y: 3.1352,
            z: 262.848,
          },
        ],
        top: 3.6352,
        bottom: 2.6352,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 69.91338,
          y: 3.097,
          z: 262.087555,
        },
        outline: [
          {
            x: 71.7433,
            y: 3.097,
            z: 260.226379,
          },
          {
            x: 72.4656,
            y: 3.097,
            z: 261.541046,
          },
          {
            x: 68.0834656,
            y: 3.097,
            z: 263.9487,
          },
          {
            x: 67.36116,
            y: 3.097,
            z: 262.634064,
          },
        ],
        top: 3.597,
        bottom: 2.597,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 86.67996,
          y: 3.7218,
          z: 374.349823,
        },
        outline: [
          {
            x: 88.72914,
            y: 3.7218,
            z: 372.733246,
          },
          {
            x: 89.28062,
            y: 3.7218,
            z: 374.128174,
          },
          {
            x: 84.63078,
            y: 3.7218,
            z: 375.9664,
          },
          {
            x: 84.0793152,
            y: 3.7218,
            z: 374.571472,
          },
        ],
        top: 4.22180033,
        bottom: 3.2218,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 61.0010757,
          y: 3.06029987,
          z: 263.034363,
        },
        outline: [
          {
            x: 58.3955574,
            y: 3.06029987,
            z: 262.880157,
          },
          {
            x: 63.2612152,
            y: 3.06029987,
            z: 261.7289,
          },
          {
            x: 63.60659,
            y: 3.06029987,
            z: 263.1886,
          },
          {
            x: 58.7409325,
            y: 3.06029987,
            z: 264.339844,
          },
        ],
        top: 3.56029987,
        bottom: 2.56029987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 104.707016,
          y: 3.82372212,
          z: 375.498749,
        },
        outline: [
          {
            x: 104.77594,
            y: 3.82372212,
            z: 372.942322,
          },
          {
            x: 104.817772,
            y: 3.82372212,
            z: 372.857574,
          },
          {
            x: 106.237564,
            y: 3.82372212,
            z: 373.341156,
          },
          {
            x: 106.195732,
            y: 3.82372212,
            z: 373.425873,
          },
          {
            x: 104.638084,
            y: 3.82372212,
            z: 378.0552,
          },
          {
            x: 104.596252,
            y: 3.82372212,
            z: 378.139923,
          },
          {
            x: 103.17646,
            y: 3.82372212,
            z: 377.656342,
          },
          {
            x: 103.218292,
            y: 3.82372212,
            z: 377.571625,
          },
        ],
        top: 4.56496,
        bottom: 3.08248425,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 104.369858,
          y: 3.748,
          z: 379.1547,
        },
        outline: [
          {
            x: 106.522377,
            y: 3.748,
            z: 377.6785,
          },
          {
            x: 106.9795,
            y: 3.748,
            z: 379.107147,
          },
          {
            x: 102.217331,
            y: 3.748,
            z: 380.6309,
          },
          {
            x: 101.760208,
            y: 3.748,
            z: 379.20224,
          },
        ],
        top: 4.248,
        bottom: 3.248,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 106.164322,
          y: 4.053,
          z: 303.8157,
        },
        outline: [
          {
            x: 106.344559,
            y: 4.053,
            z: 301.211853,
          },
          {
            x: 107.7481,
            y: 4.053,
            z: 301.741058,
          },
          {
            x: 105.984077,
            y: 4.053,
            z: 306.419556,
          },
          {
            x: 104.580536,
            y: 4.053,
            z: 305.89035,
          },
        ],
        top: 4.553,
        bottom: 3.553,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 46.4165955,
          y: 2.99,
          z: 269.782776,
        },
        outline: [
          {
            x: 43.8692627,
            y: 2.99,
            z: 269.213928,
          },
          {
            x: 48.8564034,
            y: 2.99,
            z: 268.8555,
          },
          {
            x: 48.96393,
            y: 2.99,
            z: 270.351654,
          },
          {
            x: 43.97679,
            y: 2.99,
            z: 270.710052,
          },
        ],
        top: 3.49,
        bottom: 2.49,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.160995,
          y: 3.395551,
          z: 364.476379,
        },
        outline: [
          {
            x: 104.205139,
            y: 3.395551,
            z: 362.029327,
          },
          {
            x: 104.374428,
            y: 3.395551,
            z: 362.006042,
          },
          {
            x: 105.681335,
            y: 3.395551,
            z: 361.9543,
          },
          {
            x: 105.850624,
            y: 3.395551,
            z: 361.93103,
          },
          {
            x: 106.116844,
            y: 3.395551,
            z: 366.9234,
          },
          {
            x: 105.947556,
            y: 3.395551,
            z: 366.9467,
          },
          {
            x: 104.640656,
            y: 3.395551,
            z: 366.998444,
          },
          {
            x: 104.471367,
            y: 3.395551,
            z: 367.0217,
          },
        ],
        top: 4.052008,
        bottom: 2.73909354,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 91.18296,
          y: 3.7093,
          z: 373.245453,
        },
        outline: [
          {
            x: 88.90046,
            y: 3.7093,
            z: 371.9795,
          },
          {
            x: 89.97425,
            y: 3.7093,
            z: 370.932129,
          },
          {
            x: 93.4654541,
            y: 3.7093,
            z: 374.511444,
          },
          {
            x: 92.39166,
            y: 3.7093,
            z: 375.5588,
          },
        ],
        top: 4.2093,
        bottom: 3.2093,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 101.143288,
          y: 3.23599982,
          z: 262.183533,
        },
        outline: [
          {
            x: 98.53844,
            y: 3.23599982,
            z: 262.018463,
          },
          {
            x: 103.408852,
            y: 3.23599982,
            z: 260.887482,
          },
          {
            x: 103.748138,
            y: 3.23599982,
            z: 262.3486,
          },
          {
            x: 98.87773,
            y: 3.23599982,
            z: 263.479584,
          },
        ],
        top: 3.73599982,
        bottom: 2.73599982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 45.4166031,
          y: 3.0406,
          z: 265.6541,
        },
        outline: [
          {
            x: 43.5731239,
            y: 3.0406,
            z: 263.8064,
          },
          {
            x: 44.89465,
            y: 3.0406,
            z: 263.096741,
          },
          {
            x: 47.2600822,
            y: 3.0406,
            z: 267.501831,
          },
          {
            x: 45.93856,
            y: 3.0406,
            z: 268.211456,
          },
        ],
        top: 3.5406,
        bottom: 2.5406,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 39.849247,
          y: 3.04199982,
          z: 270.9062,
        },
        outline: [
          {
            x: 37.271328,
            y: 3.04199982,
            z: 270.497742,
          },
          {
            x: 37.9218826,
            y: 3.04199982,
            z: 269.146149,
          },
          {
            x: 42.427166,
            y: 3.04199982,
            z: 271.314667,
          },
          {
            x: 41.77661,
            y: 3.04199982,
            z: 272.66626,
          },
        ],
        top: 3.54199982,
        bottom: 2.54199982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 43.618145,
          y: 3.0463,
          z: 271.2283,
        },
        outline: [
          {
            x: 41.33815,
            y: 3.0463,
            z: 269.957825,
          },
          {
            x: 42.4140129,
            y: 3.0463,
            z: 268.9126,
          },
          {
            x: 45.89814,
            y: 3.0463,
            z: 272.4988,
          },
          {
            x: 44.8222771,
            y: 3.0463,
            z: 273.544037,
          },
        ],
        top: 3.5463,
        bottom: 2.5463,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.0546875,
          y: 3.0451,
          z: 267.2777,
        },
        outline: [
          {
            x: 52.1713562,
            y: 3.0451,
            z: 265.750549,
          },
          {
            x: 52.6624527,
            y: 3.0451,
            z: 267.167877,
          },
          {
            x: 47.93802,
            y: 3.0451,
            z: 268.80484,
          },
          {
            x: 47.4469223,
            y: 3.0451,
            z: 267.3875,
          },
        ],
        top: 3.5451,
        bottom: 2.5451,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.9608,
          y: 4.04200029,
          z: 290.042267,
        },
        outline: [
          {
            x: 104.387123,
            y: 4.04200029,
            z: 287.95993,
          },
          {
            x: 105.793228,
            y: 4.04200029,
            z: 287.437561,
          },
          {
            x: 107.534477,
            y: 4.04200029,
            z: 292.124573,
          },
          {
            x: 106.128372,
            y: 4.04200029,
            z: 292.646942,
          },
        ],
        top: 4.54200029,
        bottom: 3.542,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.7210922,
          y: 3.045,
          z: 266.24585,
        },
        outline: [
          {
            x: 48.51246,
            y: 3.045,
            z: 264.855,
          },
          {
            x: 49.6427841,
            y: 3.045,
            z: 263.868927,
          },
          {
            x: 52.92973,
            y: 3.045,
            z: 267.6367,
          },
          {
            x: 51.7994041,
            y: 3.045,
            z: 268.622772,
          },
        ],
        top: 3.545,
        bottom: 2.545,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 38.9047241,
          y: 3.148,
          z: 261.291168,
        },
        outline: [
          {
            x: 36.295845,
            y: 3.148,
            z: 261.2121,
          },
          {
            x: 41.1263,
            y: 3.148,
            z: 259.921082,
          },
          {
            x: 41.5136032,
            y: 3.148,
            z: 261.3702,
          },
          {
            x: 36.6831474,
            y: 3.148,
            z: 262.661224,
          },
        ],
        top: 3.648,
        bottom: 2.648,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 90.1512,
          y: 3.2707,
          z: 262.8068,
        },
        outline: [
          {
            x: 87.54581,
            y: 3.2707,
            z: 262.6504,
          },
          {
            x: 88.06215,
            y: 3.2707,
            z: 261.242065,
          },
          {
            x: 92.7565842,
            y: 3.2707,
            z: 262.9632,
          },
          {
            x: 92.24024,
            y: 3.2707,
            z: 264.371521,
          },
        ],
        top: 3.7707,
        bottom: 2.7707,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 89.36603,
          y: 3.7073,
          z: 369.543732,
        },
        outline: [
          {
            x: 89.40447,
            y: 3.7073,
            z: 366.93396,
          },
          {
            x: 90.83471,
            y: 3.7073,
            z: 367.386078,
          },
          {
            x: 89.32758,
            y: 3.7073,
            z: 372.153534,
          },
          {
            x: 87.8973541,
            y: 3.7073,
            z: 371.701416,
          },
        ],
        top: 4.2073,
        bottom: 3.2073,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 85.226,
          y: 3.1701,
          z: 262.804138,
        },
        outline: [
          {
            x: 82.62671,
            y: 3.1701,
            z: 262.567139,
          },
          {
            x: 87.52652,
            y: 3.1701,
            z: 261.571228,
          },
          {
            x: 87.8252945,
            y: 3.1701,
            z: 263.041168,
          },
          {
            x: 82.92548,
            y: 3.1701,
            z: 264.037079,
          },
        ],
        top: 3.6701,
        bottom: 2.6701,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.934937,
          y: 3.738,
          z: 310.0481,
        },
        outline: [
          {
            x: 104.065025,
            y: 3.738,
            z: 308.2271,
          },
          {
            x: 105.37619,
            y: 3.738,
            z: 307.4985,
          },
          {
            x: 107.80484,
            y: 3.738,
            z: 311.869049,
          },
          {
            x: 106.493683,
            y: 3.738,
            z: 312.597656,
          },
        ],
        top: 4.238,
        bottom: 3.238,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 107.551994,
          y: 3.593476,
          z: 352.026245,
        },
        outline: [
          {
            x: 104.941818,
            y: 3.593476,
            z: 351.594727,
          },
          {
            x: 105.060738,
            y: 3.593476,
            z: 351.460541,
          },
          {
            x: 109.99321,
            y: 3.593476,
            z: 350.9784,
          },
          {
            x: 109.87429,
            y: 3.593476,
            z: 351.112549,
          },
          {
            x: 110.162163,
            y: 3.593476,
            z: 352.457764,
          },
          {
            x: 110.043251,
            y: 3.593476,
            z: 352.591949,
          },
          {
            x: 105.110779,
            y: 3.593476,
            z: 353.0741,
          },
          {
            x: 105.229691,
            y: 3.593476,
            z: 352.939941,
          },
        ],
        top: 4.50704432,
        bottom: 2.67990756,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 95.51549,
          y: 3.23599982,
          z: 262.519531,
        },
        outline: [
          {
            x: 97.20935,
            y: 3.23599982,
            z: 260.533752,
          },
          {
            x: 98.02272,
            y: 3.23599982,
            z: 261.794067,
          },
          {
            x: 93.8216248,
            y: 3.23599982,
            z: 264.5053,
          },
          {
            x: 93.008255,
            y: 3.23599982,
            z: 263.245,
          },
        ],
        top: 3.73599982,
        bottom: 2.73599982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 44.7290878,
          y: 3.10839987,
          z: 292.141754,
        },
        outline: [
          {
            x: 46.8221779,
            y: 3.10839987,
            z: 290.582428,
          },
          {
            x: 47.33487,
            y: 3.10839987,
            z: 291.9921,
          },
          {
            x: 42.6359978,
            y: 3.10839987,
            z: 293.70105,
          },
          {
            x: 42.1233063,
            y: 3.10839987,
            z: 292.2914,
          },
        ],
        top: 3.60839987,
        bottom: 2.60839987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 106.65123,
          y: 3.56537056,
          z: 369.754822,
        },
        outline: [
          {
            x: 104.600815,
            y: 3.56537056,
            z: 368.205261,
          },
          {
            x: 104.579269,
            y: 3.56537056,
            z: 368.1217,
          },
          {
            x: 105.822075,
            y: 3.56537056,
            z: 367.335571,
          },
          {
            x: 105.800529,
            y: 3.56537056,
            z: 367.252,
          },
          {
            x: 108.701645,
            y: 3.56537056,
            z: 371.304352,
          },
          {
            x: 108.72319,
            y: 3.56537056,
            z: 371.3879,
          },
          {
            x: 107.480392,
            y: 3.56537056,
            z: 372.174042,
          },
          {
            x: 107.50193,
            y: 3.56537056,
            z: 372.2576,
          },
        ],
        top: 4.28808975,
        bottom: 2.84265161,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 46.8354,
          y: 2.99,
          z: 268.692383,
        },
        outline: [
          {
            x: 48.3003464,
            y: 2.99,
            z: 266.5322,
          },
          {
            x: 49.2475243,
            y: 2.99,
            z: 267.6953,
          },
          {
            x: 45.37045,
            y: 2.99,
            z: 270.8526,
          },
          {
            x: 44.42327,
            y: 2.99,
            z: 269.689453,
          },
        ],
        top: 3.49,
        bottom: 2.49,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 51.9149132,
          y: 3.05429983,
          z: 272.72,
        },
        outline: [
          {
            x: 52.95821,
            y: 3.05429983,
            z: 270.3275,
          },
          {
            x: 54.1028938,
            y: 3.05429983,
            z: 271.296875,
          },
          {
            x: 50.87162,
            y: 3.05429983,
            z: 275.1125,
          },
          {
            x: 49.7269363,
            y: 3.05429983,
            z: 274.1431,
          },
        ],
        top: 3.55429983,
        bottom: 2.55429983,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 98.75,
          y: 3.80659986,
          z: 374.689117,
        },
        outline: [
          {
            x: 99.08145,
            y: 3.80659986,
            z: 372.1002,
          },
          {
            x: 100.45182,
            y: 3.80659986,
            z: 372.710144,
          },
          {
            x: 98.41856,
            y: 3.80659986,
            z: 377.278076,
          },
          {
            x: 97.04818,
            y: 3.80659986,
            z: 376.6681,
          },
        ],
        top: 4.3066,
        bottom: 3.30659986,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 40.8065071,
          y: 2.9549,
          z: 275.768127,
        },
        outline: [
          {
            x: 38.2819366,
            y: 2.9549,
            z: 275.10553,
          },
          {
            x: 43.2789078,
            y: 2.9549,
            z: 274.9316,
          },
          {
            x: 43.33108,
            y: 2.9549,
            z: 276.430725,
          },
          {
            x: 38.3341064,
            y: 2.9549,
            z: 276.6046,
          },
        ],
        top: 3.4549,
        bottom: 2.4549,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 104.766724,
          y: 3.28602314,
          z: 349.720764,
        },
        outline: [
          {
            x: 103.699318,
            y: 3.28602314,
            z: 347.3125,
          },
          {
            x: 103.867355,
            y: 3.28602314,
            z: 347.301849,
          },
          {
            x: 105.170494,
            y: 3.28602314,
            z: 347.164368,
          },
          {
            x: 105.338531,
            y: 3.28602314,
            z: 347.153748,
          },
          {
            x: 105.834129,
            y: 3.28602314,
            z: 352.129028,
          },
          {
            x: 105.666092,
            y: 3.28602314,
            z: 352.139648,
          },
          {
            x: 104.362953,
            y: 3.28602314,
            z: 352.27713,
          },
          {
            x: 104.194916,
            y: 3.28602314,
            z: 352.287781,
          },
        ],
        top: 3.920507,
        bottom: 2.651539,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 43.557518,
          y: 3.04339981,
          z: 281.889648,
        },
        outline: [
          {
            x: 43.9077377,
            y: 3.04339981,
            z: 279.3032,
          },
          {
            x: 45.27365,
            y: 3.04339981,
            z: 279.9231,
          },
          {
            x: 43.2072945,
            y: 3.04339981,
            z: 284.476135,
          },
          {
            x: 41.84138,
            y: 3.04339981,
            z: 283.856232,
          },
        ],
        top: 3.54339981,
        bottom: 2.54339981,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 47.151123,
          y: 3.0463,
          z: 322.6526,
        },
        outline: [
          {
            x: 48.0003967,
            y: 3.0463,
            z: 320.18454,
          },
          {
            x: 49.2187042,
            y: 3.0463,
            z: 321.0596,
          },
          {
            x: 46.30185,
            y: 3.0463,
            z: 325.120636,
          },
          {
            x: 45.08354,
            y: 3.0463,
            z: 324.245575,
          },
        ],
        top: 3.5463,
        bottom: 2.5463,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 48.29296,
          y: 2.99,
          z: 266.8401,
        },
        outline: [
          {
            x: 46.7127838,
            y: 2.99,
            z: 264.7627,
          },
          {
            x: 48.1172447,
            y: 2.99,
            z: 264.235931,
          },
          {
            x: 49.87314,
            y: 2.99,
            z: 268.91748,
          },
          {
            x: 48.4686775,
            y: 2.99,
            z: 269.444244,
          },
        ],
        top: 3.49,
        bottom: 2.49,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 45.622036,
          y: 3.03499985,
          z: 299.94516,
        },
        outline: [
          {
            x: 45.8333168,
            y: 3.03499985,
            z: 297.343658,
          },
          {
            x: 47.23045,
            y: 3.03499985,
            z: 297.889557,
          },
          {
            x: 45.4107552,
            y: 3.03499985,
            z: 302.546661,
          },
          {
            x: 44.0136223,
            y: 3.03499985,
            z: 302.000763,
          },
        ],
        top: 3.53499985,
        bottom: 2.53499985,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 86.64495,
          y: 3.2707,
          z: 258.695343,
        },
        outline: [
          {
            x: 86.65801,
            y: 3.2707,
            z: 256.0853,
          },
          {
            x: 88.0925751,
            y: 3.2707,
            z: 256.5235,
          },
          {
            x: 86.63189,
            y: 3.2707,
            z: 261.305359,
          },
          {
            x: 85.19733,
            y: 3.2707,
            z: 260.867157,
          },
        ],
        top: 3.7707,
        bottom: 2.7707,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 100.699318,
          y: 3.7982,
          z: 375.4185,
        },
        outline: [
          {
            x: 99.83474,
            y: 3.7982,
            z: 372.95578,
          },
          {
            x: 101.333145,
            y: 3.7982,
            z: 372.886536,
          },
          {
            x: 101.563889,
            y: 3.7982,
            z: 377.881226,
          },
          {
            x: 100.065483,
            y: 3.7982,
            z: 377.950439,
          },
        ],
        top: 4.2982,
        bottom: 3.2982,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 95.3795547,
          y: 3.7314,
          z: 373.3595,
        },
        outline: [
          {
            x: 96.738266,
            y: 3.7314,
            z: 371.130951,
          },
          {
            x: 97.7406158,
            y: 3.7314,
            z: 372.2469,
          },
          {
            x: 94.02084,
            y: 3.7314,
            z: 375.588043,
          },
          {
            x: 93.01849,
            y: 3.7314,
            z: 374.4721,
          },
        ],
        top: 4.2314,
        bottom: 3.2314,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 35.4062729,
          y: 3.0389,
          z: 266.862183,
        },
        outline: [
          {
            x: 34.43489,
            y: 3.0389,
            z: 264.4396,
          },
          {
            x: 35.928833,
            y: 3.0389,
            z: 264.304962,
          },
          {
            x: 36.377655,
            y: 3.0389,
            z: 269.28476,
          },
          {
            x: 34.88371,
            y: 3.0389,
            z: 269.4194,
          },
        ],
        top: 3.5389,
        bottom: 2.5389,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 64.36468,
          y: 3.06029987,
          z: 260.913544,
        },
        outline: [
          {
            x: 61.88832,
            y: 3.06029987,
            z: 260.088837,
          },
          {
            x: 66.88606,
            y: 3.06029987,
            z: 260.238953,
          },
          {
            x: 66.8410339,
            y: 3.06029987,
            z: 261.738281,
          },
          {
            x: 61.84329,
            y: 3.06029987,
            z: 261.588165,
          },
        ],
        top: 3.56029987,
        bottom: 2.56029987,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 38.1906662,
          y: 2.93439984,
          z: 265.447723,
        },
        outline: [
          {
            x: 37.6248436,
            y: 2.93439984,
            z: 262.899719,
          },
          {
            x: 39.1208534,
            y: 2.93439984,
            z: 263.009,
          },
          {
            x: 38.7564926,
            y: 2.93439984,
            z: 267.995728,
          },
          {
            x: 37.26048,
            y: 2.93439984,
            z: 267.8864,
          },
        ],
        top: 3.43439984,
        bottom: 2.43439984,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 59.02931,
          y: 8.52361,
          z: 319.3538,
        },
        outline: [
          {
            x: 56.5924072,
            y: 8.52361,
            z: 318.476471,
          },
          {
            x: 56.6681328,
            y: 8.52361,
            z: 318.188354,
          },
          {
            x: 61.6254425,
            y: 8.52361,
            z: 318.806732,
          },
          {
            x: 61.5497169,
            y: 8.52361,
            z: 319.094849,
          },
          {
            x: 61.46621,
            y: 8.52361,
            z: 320.231079,
          },
          {
            x: 61.3904839,
            y: 8.52361,
            z: 320.519226,
          },
          {
            x: 56.4331741,
            y: 8.52361,
            z: 319.900818,
          },
          {
            x: 56.5089,
            y: 8.52361,
            z: 319.6127,
          },
        ],
        top: 9.325483,
        bottom: 7.721738,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 105.9687,
          y: 3.48275876,
          z: 360.699,
        },
        outline: [
          {
            x: 103.344177,
            y: 3.48275876,
            z: 360.281738,
          },
          {
            x: 103.528328,
            y: 3.48275876,
            z: 360.281738,
          },
          {
            x: 108.216629,
            y: 3.48275876,
            z: 359.62912,
          },
          {
            x: 108.40078,
            y: 3.48275876,
            z: 359.62912,
          },
          {
            x: 108.593216,
            y: 3.48275876,
            z: 361.116272,
          },
          {
            x: 108.409065,
            y: 3.48275876,
            z: 361.116272,
          },
          {
            x: 103.720764,
            y: 3.48275876,
            z: 361.7689,
          },
          {
            x: 103.536613,
            y: 3.48275876,
            z: 361.7689,
          },
        ],
        top: 4.44866943,
        bottom: 2.51684785,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 108.447609,
          y: 4.038044,
          z: 366.85907,
        },
        outline: [
          {
            x: 105.835152,
            y: 4.038044,
            z: 366.3777,
          },
          {
            x: 106.054993,
            y: 4.038044,
            z: 366.3777,
          },
          {
            x: 110.685471,
            y: 4.038044,
            z: 365.848877,
          },
          {
            x: 110.905312,
            y: 4.038044,
            z: 365.848877,
          },
          {
            x: 111.060074,
            y: 4.038044,
            z: 367.340454,
          },
          {
            x: 110.840233,
            y: 4.038044,
            z: 367.340454,
          },
          {
            x: 106.209755,
            y: 4.038044,
            z: 367.869263,
          },
          {
            x: 105.989914,
            y: 4.038044,
            z: 367.869263,
          },
        ],
        top: 5.089774,
        bottom: 2.986314,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 51.7698479,
          y: 3.046,
          z: 327.214325,
        },
        outline: [
          {
            x: 53.5245552,
            y: 3.046,
            z: 325.282074,
          },
          {
            x: 54.2984,
            y: 3.046,
            z: 326.567047,
          },
          {
            x: 50.0151443,
            y: 3.046,
            z: 329.146545,
          },
          {
            x: 49.2413,
            y: 3.046,
            z: 327.861572,
          },
        ],
        top: 3.546,
        bottom: 2.546,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 51.47525,
          y: 3.0657,
          z: 324.217224,
        },
        outline: [
          {
            x: 49.18806,
            y: 3.0657,
            z: 322.959747,
          },
          {
            x: 54.07693,
            y: 3.0657,
            z: 324.008057,
          },
          {
            x: 53.7624359,
            y: 3.0657,
            z: 325.4747,
          },
          {
            x: 48.8735657,
            y: 3.0657,
            z: 324.4264,
          },
        ],
        top: 3.5657,
        bottom: 2.5657,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 83.67281,
          y: 3.2707,
          z: 259.7194,
        },
        outline: [
          {
            x: 81.161644,
            y: 3.2707,
            z: 259.0077,
          },
          {
            x: 81.9681,
            y: 3.2707,
            z: 257.74292,
          },
          {
            x: 86.18398,
            y: 3.2707,
            z: 260.431122,
          },
          {
            x: 85.3775253,
            y: 3.2707,
            z: 261.695862,
          },
        ],
        top: 3.7707,
        bottom: 2.7707,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 93.62988,
          y: 3.7453,
          z: 370.4663,
        },
        outline: [
          {
            x: 91.3889542,
            y: 3.7453,
            z: 369.1281,
          },
          {
            x: 92.49563,
            y: 3.7453,
            z: 368.11557,
          },
          {
            x: 95.87082,
            y: 3.7453,
            z: 371.804474,
          },
          {
            x: 94.76414,
            y: 3.7453,
            z: 372.817047,
          },
        ],
        top: 4.24530029,
        bottom: 3.2453,
      },
    ],
    lootContainers: [
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: -43.20522,
          y: 5.7266984,
          z: -48.89557,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -63.46735,
          y: 6.4775,
          z: -153.182785,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -99.7761,
          y: 5.3695,
          z: -24.9606533,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -147.702316,
          y: 0.8904996,
          z: -47.24406,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -100.00914,
          y: 5.5765,
          z: -36.89744,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -115.377007,
          y: 0.985118866,
          z: -64.2658539,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -106.775063,
          y: 1.0562,
          z: -67.28148,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -98.333,
          y: 0.6420002,
          z: -38.492,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -104.067978,
          y: 0.6069999,
          z: -49.7094154,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -112.821686,
          y: 0.7420001,
          z: -41.68727,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: -47.6207123,
          y: 5.76202536,
          z: -37.45389,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -69.4312057,
          y: 6.48238134,
          z: -153.940109,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -94.46763,
          y: 5.38149738,
          z: -34.24244,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -153.983887,
          y: 0.8904996,
          z: -49.9668579,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -113.934433,
          y: 5.35738134,
          z: -40.09307,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -119.745865,
          y: 0.8664999,
          z: -47.73217,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -148.603134,
          y: 0.8633814,
          z: -69.97644,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -117.850861,
          y: 0.5668814,
          z: -35.54831,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -114.000854,
          y: 0.646881342,
          z: -17.8223114,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -121.901855,
          y: 0.7218814,
          z: -24.21631,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -45.8675461,
          y: 0.861483335,
          z: -35.05961,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -42.5629959,
          y: 1.0700016,
          z: -47.6130028,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -38.619,
          y: 9.600998,
          z: -69.776,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -21.2819862,
          y: 9.601,
          z: -59.3110123,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -44.9024544,
          y: 5.71925831,
          z: -45.7870636,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -32.40098,
          y: 0.8844838,
          z: -38.72619,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -39.7115173,
          y: 0.577981949,
          z: -63.9605026,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -48.1089325,
          y: 9.580978,
          z: -73.2148056,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -36.774826,
          y: 0.5999665,
          z: -44.0884628,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -38.24,
          y: 9.735999,
          z: -72.981,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -18.4241638,
          y: 10.4276686,
          z: -58.4230461,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -18.4241638,
          y: 10.4276686,
          z: -58.4230461,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -18.4241638,
          y: 10.4276686,
          z: -58.4230461,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -18.4241638,
          y: 10.4276686,
          z: -58.4230461,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -17.9541626,
          y: 10.4276686,
          z: -58.50605,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -17.9541626,
          y: 10.4276686,
          z: -58.50605,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -17.9541626,
          y: 10.4276686,
          z: -58.50605,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -17.9541626,
          y: 10.4276686,
          z: -58.50605,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -20.9593544,
          y: 9.839989,
          z: -55.87729,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -111.517181,
          y: 5.99,
          z: -29.353138,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -81.67691,
          y: 6.16099739,
          z: -35.4160576,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -110.670052,
          y: 1.66699982,
          z: -27.5950928,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -79.93953,
          y: 0.611000061,
          z: -26.41408,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -110.851,
          y: 0.731997,
          z: -26.7430038,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: -110.682617,
          y: 1.566,
          z: -62.29756,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -115.154,
          y: 0.593999863,
          z: -66.617,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: -110.362404,
          y: 1.57000017,
          z: -71.13318,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -60.197,
          y: 0.59800005,
          z: -80.409,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: -118.548996,
          y: 1.54400015,
          z: -56.5218658,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -116.998589,
          y: 0.593999863,
          z: -67.59922,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -118.52224,
          y: 1.42867589,
          z: -67.38883,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -118.52224,
          y: 1.42867589,
          z: -67.38883,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -118.56485,
          y: 1.4289999,
          z: -67.63072,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -118.52224,
          y: 1.42867589,
          z: -67.38883,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -118.998886,
          y: 1.42867589,
          z: -67.30478,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -119.036812,
          y: 1.4289999,
          z: -67.52007,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -118.998886,
          y: 1.42867589,
          z: -67.30478,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -118.998886,
          y: 1.42867589,
          z: -67.30478,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -63.57605,
          y: 1.423676,
          z: -66.8008347,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -63.57605,
          y: 1.423676,
          z: -66.8008347,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -63.57605,
          y: 1.423676,
          z: -66.8008347,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -63.57605,
          y: 1.423676,
          z: -66.8008347,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -48.35898,
          y: 3.58519554,
          z: -74.96192,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -62.84163,
          y: 7.4802,
          z: -145.885956,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -118.95842,
          y: 2.29609919,
          z: -63.237236,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -34.40643,
          y: 10.757,
          z: -68.26387,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -34.51924,
          y: 10.737999,
          z: -68.60875,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -26.5628357,
          y: 10.7339993,
          z: -59.2294159,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -69.4682,
          y: 0.948899746,
          z: -23.11525,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -118.697685,
          y: 4.76837158e-7,
          z: -6.757019,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -200.92955,
          y: 0.0460000038,
          z: 2.56658173,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -102.261,
          y: 5.23900032,
          z: -36.14,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -105.058105,
          y: 0.588999748,
          z: -39.7450829,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -127.853561,
          y: 1.64389992,
          z: -25.9787254,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -159.723083,
          y: 5.24104452,
          z: -45.64241,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -130.616562,
          y: 1.644,
          z: -25.9777279,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -148.211914,
          y: 1.80920029,
          z: -45.1715851,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -160.42543,
          y: 0.845000267,
          z: -19.98004,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -162.112671,
          y: 1.66559982,
          z: -33.324173,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -59.29753,
          y: 1.64211273,
          z: -46.07667,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -160.992035,
          y: 5.101044,
          z: -46.6191063,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -69.9118042,
          y: 6.188995,
          z: -58.98702,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -138.504456,
          y: 0.6079922,
          z: -44.9256744,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -134.944824,
          y: 6.167,
          z: -24.1701622,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -149.5436,
          y: 6.1619997,
          z: -17.1691666,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -120.945694,
          y: 10.667,
          z: -18.77757,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -122.644638,
          y: 10.658,
          z: -27.4516621,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -122.169464,
          y: 10.664,
          z: -25.188797,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -164.743088,
          y: 6.159,
          z: -12.9678,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -148.062637,
          y: 6.15761042,
          z: -7.810341,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -161.531311,
          y: 10.665,
          z: -10.05143,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -154.5995,
          y: 6.165,
          z: -16.950901,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -118.323677,
          y: 6.15961,
          z: -19.240572,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -135.323334,
          y: 6.1619997,
          z: -26.2073879,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -122.970856,
          y: 10.6679993,
          z: -29.73368,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -151.0132,
          y: 6.161,
          z: -24.8843,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -166.093124,
          y: 6.159,
          z: -20.8906612,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -160.243256,
          y: 5.079,
          z: -46.4105721,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -59.2965469,
          y: 1.64201355,
          z: -43.3136673,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -130.036118,
          y: 1.71,
          z: -49.8078,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -120.156662,
          y: 6.16242838,
          z: -29.1468277,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -163.437134,
          y: 10.677,
          z: -21.3626671,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -128.574951,
          y: 6.166,
          z: -12.6260529,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -162.533127,
          y: 10.674,
          z: -16.4606647,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -164.276657,
          y: 6.159,
          z: -10.3226089,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -20.375782,
          y: 3.58213615,
          z: -133.913879,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 83.5754547,
          y: 4.740056,
          z: -271.831665,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 93.63811,
          y: 4.807,
          z: -281.9716,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 84.35997,
          y: 5.174,
          z: -281.732971,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 98.8618,
          y: 5.083684,
          z: -277.952759,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 88.53276,
          y: 4.75326729,
          z: -274.826843,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 90.4404144,
          y: 4.18962765,
          z: -279.815857,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 42.4173737,
          y: 2.84000015,
          z: 159.953888,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 43.1266632,
          y: 2.78331661,
          z: 169.501,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 40.10666,
          y: 2.78231668,
          z: 163.030029,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 48.1503754,
          y: 2.848,
          z: 150.363892,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 47.235,
          y: 2.67500019,
          z: 162.497009,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 120.969986,
          y: 0.23900032,
          z: -22.5400085,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 112.468,
          y: 0.748000145,
          z: -19.8919983,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 95.99101,
          y: 0.250999928,
          z: -22.13501,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 81.29701,
          y: 0.225000381,
          z: -27.1300049,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 83.532,
          y: 0.235000134,
          z: -29.5720062,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 71.91499,
          y: 0.230000019,
          z: -25.6419983,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 105.49614,
          y: 1.3885,
          z: -23.7766266,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -20.4760361,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -20.4760361,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -20.4760361,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -20.4760361,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -19.990036,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -19.990036,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -19.990036,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -19.990036,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -19.4880371,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -19.4880371,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -19.4880371,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 71.926384,
          y: 1.0756762,
          z: -19.4880371,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 75.05681,
          y: 1.32935572,
          z: -30.2789917,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.023613,
          y: 1.0756762,
          z: -21.3989639,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.023613,
          y: 1.0756762,
          z: -21.3989639,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.023613,
          y: 1.0756762,
          z: -21.3989639,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.023613,
          y: 1.0756762,
          z: -21.3989639,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.023613,
          y: 1.0756762,
          z: -21.89096,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.023613,
          y: 1.0756762,
          z: -21.89096,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.023613,
          y: 1.0756762,
          z: -21.89096,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.023613,
          y: 1.0756762,
          z: -21.89096,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 115.545036,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 115.545036,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 115.545036,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 115.545036,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 110.015038,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 110.015038,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 110.015038,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 110.015038,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 115.06604,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 115.06604,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 115.06604,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 115.06604,
          y: 1.0756762,
          z: -27.3096161,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 101.869385,
          y: 1.0756762,
          z: -26.8260422,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 101.869385,
          y: 1.0756762,
          z: -26.8260422,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 101.869385,
          y: 1.0756762,
          z: -26.8260422,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 101.869385,
          y: 1.0756762,
          z: -26.8260422,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 101.869385,
          y: 1.0756762,
          z: -26.353035,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 101.869385,
          y: 1.0756762,
          z: -26.353035,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 101.869385,
          y: 1.0756762,
          z: -26.353035,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 101.869385,
          y: 1.0756762,
          z: -26.353035,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.898041,
          y: 1.07567668,
          z: -27.2056122,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.898041,
          y: 1.07567668,
          z: -27.2056122,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.898041,
          y: 1.07567668,
          z: -27.2056122,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.898041,
          y: 1.07567668,
          z: -27.2056122,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.668961,
          y: 1.07567668,
          z: -23.4423828,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.668961,
          y: 1.07567668,
          z: -23.4423828,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.668961,
          y: 1.07567668,
          z: -23.4423828,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.668961,
          y: 1.07567668,
          z: -23.4423828,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.172958,
          y: 1.07567668,
          z: -23.4423828,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.172958,
          y: 1.07567668,
          z: -23.4423828,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.172958,
          y: 1.07567668,
          z: -23.4423828,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 106.172958,
          y: 1.07567668,
          z: -23.4423828,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 107.411041,
          y: 1.07567668,
          z: -27.2056122,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 107.411041,
          y: 1.07567668,
          z: -27.2056122,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 107.411041,
          y: 1.07567668,
          z: -27.2056122,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 107.411041,
          y: 1.07567668,
          z: -27.2056122,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 104.546,
          y: 1.32935572,
          z: -25.4301834,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 103.20652,
          y: 0.801895857,
          z: -16.6508026,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 133.022125,
          y: -0.704820156,
          z: -114.15699,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 61.0452271,
          y: 1.073657,
          z: -77.15242,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 63.22084,
          y: 0.702549458,
          z: -75.706665,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.2748,
          y: 1.06567621,
          z: -53.84205,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.2748,
          y: 1.06567621,
          z: -53.84205,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.2748,
          y: 1.06567621,
          z: -53.84205,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.2748,
          y: 1.06567621,
          z: -53.84205,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 64.436,
          y: 1.69,
          z: -78.568,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 62.601,
          y: 0.487999916,
          z: -75.761,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 45.98662,
          y: 0.7065468,
          z: -75.5740051,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 60.15296,
          y: 1.06567621,
          z: -72.63638,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 60.15296,
          y: 1.06567621,
          z: -72.63638,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 60.15296,
          y: 1.06567621,
          z: -72.63638,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 60.15296,
          y: 1.06567621,
          z: -72.63638,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 60.956234,
          y: 1.34682178,
          z: -77.6306152,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 70.43396,
          y: 13.4756765,
          z: -124.075386,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 70.43396,
          y: 13.4756765,
          z: -124.075386,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 70.43396,
          y: 13.4756765,
          z: -124.075386,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 70.43396,
          y: 13.4756765,
          z: -124.075386,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 56.551178,
          y: 12.7512,
          z: -135.049881,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 66.09015,
          y: 13.0262728,
          z: -118.1514,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 68.59952,
          y: 13.784,
          z: -136.721588,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 126.871,
          y: 4.7826,
          z: -40.1909943,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 105.031349,
          y: 4.786,
          z: -27.0844116,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 145.66571,
          y: -0.692577839,
          z: -35.59456,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 142.8258,
          y: -0.6866851,
          z: -43.3677063,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 127.791222,
          y: -1.07541418,
          z: -34.1740341,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 129.2517,
          y: 3.636997,
          z: -44.5187225,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 102.288712,
          y: -1.49781942,
          z: -100.140259,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 56.79389,
          y: 1.19801569,
          z: -72.3862457,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 52.45135,
          y: 1.07790852,
          z: -79.74541,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 61.2337456,
          y: 0.6241803,
          z: -76.89036,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 61.5075264,
          y: 12.7599077,
          z: -138.6883,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 68.11915,
          y: 13.00418,
          z: -118.976395,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 68.58935,
          y: 13.0919085,
          z: -145.4824,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 120.020355,
          y: 4.77890825,
          z: -42.3854141,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 101.76635,
          y: 4.77890825,
          z: -18.03341,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 127.041588,
          y: -0.7049842,
          z: -38.76087,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 123.226685,
          y: -1.34109068,
          z: -26.2530212,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 140.9111,
          y: -1.0768199,
          z: -17.4033432,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 66.86393,
          y: 13.72815,
          z: -118.415527,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 44.6194229,
          y: 9.834309,
          z: -141.642883,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 139.347336,
          y: -0.9840913,
          z: -116.437538,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 136.313,
          y: 4.316,
          z: -53.503,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 119.089241,
          y: 5.8223,
          z: -27.647522,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 117.324768,
          y: 5.05140829,
          z: -18.0424881,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 236.205,
          y: -1.0079999,
          z: -100.361,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 236.8355,
          y: -1.18214607,
          z: -90.235,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 239.589417,
          y: -2.876,
          z: -60.47342,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 233.012024,
          y: -2.319,
          z: -75.77104,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 10.3125992,
          y: 4.296912,
          z: 220.170547,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 9.578907,
          y: 5.017029,
          z: 218.992737,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 17.9282837,
          y: 2.84793758,
          z: 250.384567,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 8.23222,
          y: 3.84941483,
          z: 214.2818,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 22.7000351,
          y: -2.93372774,
          z: 18.2575912,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 15.2291107,
          y: 4.04637241,
          z: 223.766022,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 14.5553741,
          y: 0.0280001163,
          z: 41.8127136,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 5.65753937,
          y: 2.518283,
          z: 205.94725,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 7.738102,
          y: 2.15791,
          z: 211.534561,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 22.1069984,
          y: 2.59499979,
          z: 251.658,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 11.4889984,
          y: 2.65600014,
          z: 252.36,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 7.05231476,
          y: 4.31304932,
          z: 215.967361,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 18.9636421,
          y: 2.6605,
          z: 242.873062,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 11.8022995,
          y: 3.49450016,
          z: 255.146912,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 23.1857071,
          y: 2.82093716,
          z: 239.229813,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 27.4803333,
          y: 4.130106,
          z: 249.452621,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 15.6029968,
          y: 0.9250001,
          z: 106.550995,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 18.54649,
          y: 1.33665323,
          z: 137.618057,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 29.6910667,
          y: 2.46568775,
          z: 251.807343,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 4.50124,
          y: 2.06932163,
          z: 206.825058,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 7.38100052,
          y: 2.9165,
          z: 244.595,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 9.757118,
          y: 4.21805954,
          z: 216.88649,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -4.244316,
          y: 2.239761,
          z: 211.1628,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 19.4870911,
          y: 2.575704,
          z: 253.410187,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 9.435997,
          y: 2.3411,
          z: 219.744644,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 21.5338554,
          y: 2.55942249,
          z: 239.059708,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 7.17297363,
          y: 2.69293737,
          z: 226.61972,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 169.103,
          y: 4.07099628,
          z: -219.564987,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 164.8645,
          y: 4.121514,
          z: -219.953964,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 117.340294,
          y: 4.24751139,
          z: -262.273376,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 134.919189,
          y: 3.94799852,
          z: -230.796,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 167.25412,
          y: 4.03303576,
          z: -230.211288,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -199.592957,
          y: 0.500319242,
          z: 49.463623,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 5.8650856,
          y: -2.609458,
          z: -5.26570129,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 8.087952,
          y: -3.1546998,
          z: -6.29598236,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 11.3019562,
          y: -3.38538551,
          z: -11.4900017,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 11.3696213,
          y: -2.561493,
          z: -10.0587959,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 6.068138,
          y: -3.74249268,
          z: -0.104656219,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 2.93613434,
          y: -3.76749277,
          z: -2.92365646,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 13.7154884,
          y: -3.62738562,
          z: -12.304657,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 4.58615875,
          y: 3.18690038,
          z: 454.5608,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 8.438187,
          y: 4.2520237,
          z: 217.942581,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 8.24054,
          y: 4.072508,
          z: 215.0666,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 8.353127,
          y: 4.02319431,
          z: 214.311432,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 9.319244,
          y: 3.18300033,
          z: 443.295837,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 11.28524,
          y: 0.92557025,
          z: -5.1544,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -197.968048,
          y: 0.6094781,
          z: 34.4439354,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -206.240356,
          y: 0.497333765,
          z: 34.9950867,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 108.3669,
          y: 4.34227228,
          z: -187.582138,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 153.371552,
          y: -1.49972773,
          z: -111.799591,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -71.77888,
          y: 0.1043731,
          z: 386.2094,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -20.9183578,
          y: 2.55672216,
          z: 270.3809,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 201.158813,
          y: -0.8505404,
          z: 280.327057,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 243.605286,
          y: 3.673064,
          z: 361.984741,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -235.491272,
          y: 2.37333441,
          z: 178.7677,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -143.844,
          y: 0.842745066,
          z: 64.14112,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -69.5783,
          y: 2.301924,
          z: 277.3045,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 87.398,
          y: 0.6500001,
          z: 110.784,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 123.572914,
          y: 2.354152,
          z: 214.984314,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 199.173,
          y: 0.587,
          z: 221.362,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 162.907,
          y: -1.02099991,
          z: 111.178,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 195.291992,
          y: -4.37,
          z: 82.798,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 163.379,
          y: -1.69299984,
          z: -16.8390045,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 146.649,
          y: -1.51,
          z: -122.591,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -20.4658813,
          y: 1.40937316,
          z: 414.4184,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -15.55838,
          y: 2.59912539,
          z: 323.292419,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 220.094421,
          y: 3.32685947,
          z: 324.394958,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 114.62944,
          y: 3.72085953,
          z: 337.1289,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -171.059113,
          y: 2.26233435,
          z: 284.0851,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -143.846008,
          y: 1.38676727,
          z: 170.634125,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -71.14739,
          y: 3.56032419,
          z: 329.7967,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 93.447,
          y: 1.904,
          z: 199.197,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 52.19306,
          y: 1.91422319,
          z: 202.871414,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 211.432983,
          y: 0.592,
          z: 204.05,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 207.09198,
          y: 0.602,
          z: 186.104,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 211.608,
          y: -4.464,
          z: 74.839,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 179.978,
          y: -1.14300013,
          z: -60.7720032,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 90.721,
          y: -1.44299984,
          z: -102.12001,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 92.786,
          y: 0.194,
          z: -47.859,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -32.844,
          y: 0.0580000877,
          z: -17.1560059,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -168.670013,
          y: 0.1270001,
          z: 15.3209991,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -19.1200027,
          y: 2.526,
          z: 311.31,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -13.6533966,
          y: 2.197,
          z: 270.8793,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -188.937012,
          y: 7.862,
          z: 280.123,
        },
      },
      {
        lootContainer: {
          id: '5d6fd13186f77424ad2a8c69',
          name: '配给物资箱',
          normalizedName: 'ration-supply-crate',
        },
        position: {
          x: -30.4993744,
          y: 3.15,
          z: 317.430481,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -34.5360031,
          y: 2.225,
          z: 262.754,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -27.235,
          y: 3.45,
          z: 243.418,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -18.3639984,
          y: 2.198,
          z: 348.70697,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -69.1079941,
          y: 3.111,
          z: 346.972,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 228.125885,
          y: -0.4721279,
          z: -106.779922,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: -250.2425,
          y: 3.02210712,
          z: 145.659988,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -256.591,
          y: 3.493,
          z: 123.852982,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -256.573,
          y: 2.223,
          z: 142.23,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -257.401978,
          y: 2.223,
          z: 130.187973,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -259.349976,
          y: 2.911,
          z: 159.913986,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: -251.448914,
          y: 3.89710712,
          z: 133.089859,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -248.949,
          y: 2.92500019,
          z: 114.475967,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -222.9742,
          y: 3.446272,
          z: 121.944992,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -227.54007,
          y: 2.501272,
          z: 138.355362,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -237.319382,
          y: 2.570272,
          z: 152.9323,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -195.82756,
          y: 2.490272,
          z: 106.287857,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: -228.550858,
          y: 2.34311628,
          z: 99.4099,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -247.599,
          y: 2.916,
          z: 132.626968,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -257.401978,
          y: 2.223,
          z: 130.187973,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -259.349976,
          y: 2.911,
          z: 159.913986,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -248.838715,
          y: 2.94072342,
          z: 132.81665,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: -216.362564,
          y: 3.220107,
          z: 109.739296,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -246.3378,
          y: 3.70349979,
          z: 129.366211,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: -254.9051,
          y: 3.0630002,
          z: 134.365036,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -249.111847,
          y: 4.03900051,
          z: 156.5628,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: -255.12822,
          y: 3.90799952,
          z: 157.117447,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -34.8340454,
          y: 2.40206242,
          z: 139.46434,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -34.5658722,
          y: 2.40206814,
          z: 141.0975,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -34.3231659,
          y: 2.40206623,
          z: 142.575684,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -69.91706,
          y: 5.16900158,
          z: 65.35351,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -61.89618,
          y: 1.64640343,
          z: 55.0685349,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -61.89618,
          y: 1.64640343,
          z: 55.0685349,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -61.89618,
          y: 1.64640343,
          z: 55.0685349,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -61.89618,
          y: 1.64640343,
          z: 55.0685349,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -61.4360428,
          y: 1.64640343,
          z: 54.98935,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -61.4360428,
          y: 1.64640343,
          z: 54.98935,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -61.4360428,
          y: 1.64640343,
          z: 54.98935,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -61.4360428,
          y: 1.64640343,
          z: 54.98935,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -121.281044,
          y: 5.58101559,
          z: 63.629982,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -88.60965,
          y: 5.793868,
          z: 70.0344238,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -79.72273,
          y: 5.05808163,
          z: 50.3105774,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -81.2226639,
          y: 2.101493,
          z: 175.812836,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -81.79015,
          y: 2.10450268,
          z: 172.503128,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -35.12085,
          y: 2.40206814,
          z: 137.717743,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -73.5596161,
          y: 2.271819,
          z: 176.08548,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -63.121254,
          y: 1.45601571,
          z: 163.297363,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -103.857742,
          y: 1.29498208,
          z: 62.09291,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -70.61151,
          y: 5.56848431,
          z: 59.4019623,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -26.2873764,
          y: 1.85899079,
          z: 84.0852356,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -93.61287,
          y: 1.93400252,
          z: 121.756744,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -78.39772,
          y: 1.98359883,
          z: 109.608414,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -85.68102,
          y: 6.59200335,
          z: 129.823,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -93.60006,
          y: 8.062008,
          z: 123.289589,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -93.12077,
          y: 8.516384,
          z: 125.241074,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -110.494064,
          y: 9.079007,
          z: 118.157,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: -110.997589,
          y: 9.009401,
          z: 119.604706,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -48.61197,
          y: 6.44500256,
          z: 149.723022,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -93.53103,
          y: 8.075011,
          z: 83.0919647,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -127.501129,
          y: 8.58174,
          z: 68.80624,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -119.012924,
          y: 11.3730011,
          z: 112.445488,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -118.645508,
          y: 11.3820057,
          z: 127.269913,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -73.7060852,
          y: 5.056876,
          z: 51.4973755,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -39.4146729,
          y: 2.01099682,
          z: 101.314079,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -41.3089142,
          y: 8.379012,
          z: 155.693024,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -88.29921,
          y: 7.93399525,
          z: 93.04468,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -98.70708,
          y: 1.41199934,
          z: 113.4402,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -22.6836853,
          y: 2.254386,
          z: 67.44161,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -88.13565,
          y: 2.49489021,
          z: 128.167786,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -57.29879,
          y: 1.77508271,
          z: 91.21315,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -36.74787,
          y: 1.594886,
          z: 168.228516,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -79.11601,
          y: 0.9169997,
          z: 141.062012,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -90.48303,
          y: 0.9379953,
          z: 140.233,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -60.61258,
          y: 1.95651412,
          z: 163.440018,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -54.0953064,
          y: 1.95651019,
          z: 149.140381,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -97.0650558,
          y: 8.201503,
          z: 130.98938,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -83.16493,
          y: 8.212106,
          z: 138.371658,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -79.77421,
          y: 8.202909,
          z: 155.575974,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -34.86885,
          y: 1.66983342,
          z: 86.39875,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -71.72191,
          y: 1.6668334,
          z: 152.010544,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -112.719574,
          y: 8.202833,
          z: 106.012161,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -208.95,
          y: 4.059,
          z: 182.011,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -164.282974,
          y: 4.25699949,
          z: 178.633972,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -208.95,
          y: 4.057,
          z: 179.655991,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -212.278992,
          y: 3.207,
          z: 295.802,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -211.747986,
          y: 3.209,
          z: 303.641,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -213.755,
          y: 3.203,
          z: 307.293,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -208.284,
          y: 3.2,
          z: 305.423981,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -205.131,
          y: 3.828,
          z: 307.831024,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -207.138,
          y: 3.19500017,
          z: 299.432,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -208.694,
          y: 3.42,
          z: 338.581024,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -205.444,
          y: 3.414,
          z: 331.90097,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -198.067,
          y: 3.416,
          z: 331.111969,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -190.383,
          y: 3.423,
          z: 333.051971,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -193.758,
          y: 3.047,
          z: 343.686,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -200.974,
          y: 3.96,
          z: 341.665,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -210.496,
          y: 3.42,
          z: 341.317,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -208.713,
          y: 3.414,
          z: 349.956024,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -192.457764,
          y: 3.44327188,
          z: 340.501251,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: -48.84749,
          y: 3.32598686,
          z: 330.427917,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: -43.9252625,
          y: 3.388,
          z: 341.942139,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: -48.1353073,
          y: 3.31314921,
          z: 326.944458,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: -57.5296936,
          y: 3.369,
          z: 337.765839,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: -50.1962738,
          y: 3.30333567,
          z: 339.509216,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -58.834,
          y: 3.174,
          z: 327.713,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -58.4640045,
          y: 3.336,
          z: 327.061,
        },
      },
      {
        lootContainer: {
          id: '5d6fe50986f77449d97f7463',
          name: '医疗物资箱',
          normalizedName: 'medical-supply-crate',
        },
        position: {
          x: -124.508,
          y: 3.25,
          z: 335.035,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -136.357437,
          y: 2.45400023,
          z: 335.2156,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -141.349289,
          y: 2.454,
          z: 326.086365,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 335.507965,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 335.507965,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 335.507965,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 335.507965,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 335.007965,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 335.007965,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 335.007965,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 335.007965,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 334.526947,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 334.526947,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 334.526947,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -142.09462,
          y: 3.03867579,
          z: 334.526947,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -135.621384,
          y: 3.038676,
          z: 325.016022,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -135.621384,
          y: 3.038676,
          z: 325.016022,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -135.621384,
          y: 3.038676,
          z: 325.016022,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -135.621384,
          y: 3.038676,
          z: 325.016022,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -130.320618,
          y: 3.03867579,
          z: 346.51297,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -130.320618,
          y: 3.03867579,
          z: 346.51297,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -130.320618,
          y: 3.03867579,
          z: 346.51297,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -130.320618,
          y: 3.03867579,
          z: 346.51297,
        },
      },
      {
        lootContainer: {
          id: '5d6fd13186f77424ad2a8c69',
          name: '配给物资箱',
          normalizedName: 'ration-supply-crate',
        },
        position: {
          x: -81.05666,
          y: 3.14799976,
          z: 346.148773,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -224.6298,
          y: 2.9090004,
          z: 275.2406,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -229.927689,
          y: 3.031676,
          z: 285.1669,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -229.927689,
          y: 3.031676,
          z: 285.1669,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -229.927689,
          y: 3.031676,
          z: 285.1669,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -229.927689,
          y: 3.031676,
          z: 285.1669,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -229.464767,
          y: 3.031676,
          z: 284.970734,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -229.464767,
          y: 3.031676,
          z: 284.970734,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -229.464767,
          y: 3.031676,
          z: 284.970734,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -229.464767,
          y: 3.031676,
          z: 284.970734,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -117.802,
          y: 5.253,
          z: 246.374,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: -113.924,
          y: 3.7869997,
          z: 248.295,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -112.663521,
          y: 3.089809,
          z: 244.556351,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -151.513947,
          y: 3.11399984,
          z: 256.486237,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -151.746445,
          y: 3.38289976,
          z: 242.2884,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -218.4563,
          y: 2.197,
          z: 270.584747,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: -204.310364,
          y: 2.7543776,
          z: 289.604675,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: -186.621521,
          y: 3.138397,
          z: 225.846115,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -162.845,
          y: 6.0644,
          z: 222.608,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -175.73,
          y: 6.0644,
          z: 228.473,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -186.8621,
          y: 3.49967623,
          z: 226.113983,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -186.8621,
          y: 3.49967623,
          z: 226.113983,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -186.8621,
          y: 3.49967623,
          z: 226.113983,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -186.8621,
          y: 3.49967623,
          z: 226.113983,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -186.8621,
          y: 3.49967623,
          z: 226.584991,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -186.8621,
          y: 3.49967623,
          z: 226.584991,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -186.8621,
          y: 3.49967623,
          z: 226.584991,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -186.8621,
          y: 3.49967623,
          z: 226.584991,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -182.105377,
          y: 3.4996767,
          z: 224.80304,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -182.105377,
          y: 3.4996767,
          z: 224.80304,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -182.105377,
          y: 3.4996767,
          z: 224.80304,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -182.105377,
          y: 3.4996767,
          z: 224.80304,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -185.723846,
          y: 2.90954256,
          z: 224.407,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -186.922791,
          y: 2.91489983,
          z: 222.324,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -162.31076,
          y: 6.3117,
          z: 228.424988,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -167.117477,
          y: 6.3117,
          z: 221.060059,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -162.559479,
          y: 6.3117,
          z: 223.858566,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -163.940277,
          y: 6.3117,
          z: 226.886017,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -163.989532,
          y: 6.3117,
          z: 230.950424,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -173.614014,
          y: 2.6637,
          z: 220.585,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: -156.2391,
          y: 2.32600021,
          z: 227.633331,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -156.2928,
          y: 3.04267621,
          z: 224.508972,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -156.2928,
          y: 3.04267621,
          z: 224.508972,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -156.2928,
          y: 3.04267621,
          z: 224.508972,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -156.2928,
          y: 3.04267621,
          z: 224.508972,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: -149.052643,
          y: 2.6914,
          z: 229.901581,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -33.0379944,
          y: 3.31200027,
          z: 239.656509,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -222.806976,
          y: 8.459499,
          z: 284.865417,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -82.697,
          y: 3.81,
          z: 249.537,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -146.95282,
          y: 7.314125,
          z: 263.864136,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -161.990448,
          y: 2.93529987,
          z: 223.914581,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -181.105225,
          y: 2.9347,
          z: 223.095688,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -187.02951,
          y: 3.961,
          z: 227.7539,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -178.4397,
          y: 3.9651,
          z: 223.1216,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -150.981,
          y: 3.442,
          z: 231.482208,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -151.293991,
          y: 3.448,
          z: 231.434,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -154.56366,
          y: 3.2056,
          z: 224.332916,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -15.636673,
          y: 3.93849969,
          z: 243.713959,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -36.63823,
          y: 3.67277765,
          z: 239.035828,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -143.892242,
          y: 6.41539955,
          z: 266.588745,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -186.509033,
          y: 2.45249987,
          z: 218.808044,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -17.21167,
          y: 2.87200022,
          z: 254.423462,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -128.950333,
          y: 0.3575003,
          z: 274.759521,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -186.078522,
          y: 7.663,
          z: 282.823029,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: -89.46414,
          y: 9.368,
          z: 284.958038,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -180.545929,
          y: 7.530272,
          z: 279.959747,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: -171.96582,
          y: 8.110001,
          z: 288.14978,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -150.535,
          y: 2.832,
          z: 340.622,
        },
      },
      {
        lootContainer: {
          id: '5d6fd13186f77424ad2a8c69',
          name: '配给物资箱',
          normalizedName: 'ration-supply-crate',
        },
        position: {
          x: -223.355331,
          y: 3.07400012,
          z: 245.859818,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -129.0981,
          y: 8.820999,
          z: 272.816,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: -230.5377,
          y: 11.8860006,
          z: 277.913116,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: -109.76712,
          y: 3.595,
          z: 283.232117,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -133.4123,
          y: 8.820999,
          z: 267.873138,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -191.994,
          y: 3.03000021,
          z: 255.193,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: -104.0016,
          y: 9.269001,
          z: 291.9345,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -222.331,
          y: 11.2069,
          z: 278.875,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -85.549,
          y: -0.1960001,
          z: 412.711,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -86.33884,
          y: -0.105000019,
          z: 396.972229,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -89.85513,
          y: 0.5185,
          z: 415.649,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -128.829163,
          y: 2.6427,
          z: 394.348236,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -88.5315857,
          y: 0.5692718,
          z: 416.840759,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -170.6842,
          y: 2.7394,
          z: 431.1394,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -145.02597,
          y: 8.980771,
          z: 405.720245,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -62.6027,
          y: 0.07640004,
          z: 396.573059,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -23.4649658,
          y: 1.17399979,
          z: 388.887482,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -178.8975,
          y: 3.55199981,
          z: 413.577484,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: -178.350647,
          y: 3.069,
          z: 413.529968,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -176.414078,
          y: 2.76099968,
          z: 411.3944,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -191.945,
          y: 5.12899971,
          z: 387.537,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -82.07742,
          y: -0.06600022,
          z: 414.576752,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -6.760399,
          y: 2.68123055,
          z: 415.135376,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -129.222687,
          y: 2.5,
          z: 404.9129,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -128.589,
          y: 2.388,
          z: 393.16,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -132.610123,
          y: 2.765272,
          z: 393.8992,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -166.44754,
          y: 8.99027252,
          z: 388.864838,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -164.279,
          y: 9.578,
          z: 399.982,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -195.045349,
          y: 9.801499,
          z: 390.833038,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: -162.625031,
          y: 14.3869009,
          z: 401.334442,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -194.85675,
          y: 9.801499,
          z: 404.6418,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -165.302,
          y: 9.4166,
          z: 394.309,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -169.942,
          y: 9.104,
          z: 405.405,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -169.85,
          y: 9.104,
          z: 402.758,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -180.536011,
          y: 8.6119,
          z: 399.652,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -185.457642,
          y: 8.8755,
          z: 383.502563,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -179.310715,
          y: 17.2664986,
          z: 380.574768,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -179.052551,
          y: 9.3165,
          z: 417.3389,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -193.995911,
          y: 4.96749973,
          z: 391.561218,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -185.9395,
          y: 4.9777,
          z: 384.1173,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -181.017,
          y: 9.967999,
          z: 388.689,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -167.26001,
          y: 14.1570005,
          z: 398.824,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -193.90509,
          y: 8.8815,
          z: 416.609436,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -165.858856,
          y: 8.8665,
          z: 391.9666,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -184.803146,
          y: 8.8665,
          z: 380.628418,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -171.190216,
          y: 11.5352716,
          z: 407.008972,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -171.195221,
          y: 11.5352716,
          z: 394.991974,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -45.1759949,
          y: 6.818,
          z: 466.243,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -46.03299,
          y: 6.82699966,
          z: 452.944977,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -41.6199951,
          y: 6.84,
          z: 459.995026,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -57.8119965,
          y: 7.401,
          z: 465.787018,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -62.17099,
          y: 2.658,
          z: 462.902985,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -66.433,
          y: 2.657,
          z: 458.610016,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -51.04599,
          y: 3.127,
          z: 462.009,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -59.2319946,
          y: 3.20200014,
          z: 455.291,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -52.19203,
          y: 3.49827456,
          z: 462.785583,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -52.192,
          y: 3.49859858,
          z: 462.567,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -52.19203,
          y: 3.49827456,
          z: 462.785583,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -52.19203,
          y: 3.49827456,
          z: 462.785583,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -50.53203,
          y: 3.49827456,
          z: 462.785583,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -50.53203,
          y: 3.49827456,
          z: 462.785583,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -50.53203,
          y: 3.49827456,
          z: 462.785583,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -50.5319977,
          y: 3.49859858,
          z: 462.5,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -51.2865,
          y: 2.90962076,
          z: 461.931,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -51.166214,
          y: 2.90965772,
          z: 462.024933,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -51.35991,
          y: 2.90962052,
          z: 461.8739,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -51.166214,
          y: 2.90965772,
          z: 462.024933,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -30.653595,
          y: 3.66407585,
          z: 468.8241,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -182.8033,
          y: 3.36672568,
          z: 460.893982,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -165.93576,
          y: 2.67537928,
          z: 463.968445,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -170.163513,
          y: 2.67537928,
          z: 463.982056,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -179.272644,
          y: 7.222,
          z: 457.114,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -170.0923,
          y: 3.71566463,
          z: 463.708282,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -166.320816,
          y: 3.71566463,
          z: 463.71405,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -145.843033,
          y: 3.305,
          z: 463.736969,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -148.367889,
          y: 3.296,
          z: 463.736969,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: -150.80603,
          y: 3.296,
          z: 463.736969,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 168.616,
          y: 1.14200008,
          z: 154.841,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 165.896729,
          y: 0.8734424,
          z: 166.269287,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 170.861084,
          y: 0.73300004,
          z: 159.026825,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 172.806,
          y: 0.7349999,
          z: 163.778992,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 167.760559,
          y: 1.05100012,
          z: 167.016113,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 166.014557,
          y: 0.8710002,
          z: 159.42511,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 163.871,
          y: 1.11900008,
          z: 153.734985,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 161.896,
          y: 0.7279999,
          z: 146.34,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 164.664154,
          y: 1.44550014,
          z: 148.357,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 156.052979,
          y: 0.7290001,
          z: 140.091,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 152.719727,
          y: 1.0144999,
          z: 139.699066,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 153.874,
          y: 1.301,
          z: 136.953,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 158.93869,
          y: 1.0095,
          z: 138.347321,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 164.135681,
          y: 1.01550007,
          z: 142.165192,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 141.2399,
          y: 4.3654,
          z: 219.5393,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 165.09021,
          y: 1.00500035,
          z: 167.343964,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 156.399765,
          y: 0.9929991,
          z: 148.530563,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 161.298538,
          y: 1.00200009,
          z: 145.329,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 162.034531,
          y: 1.00200009,
          z: 153.849,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 163.743,
          y: 1.002,
          z: 145.518463,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 162.393829,
          y: 1.23749971,
          z: 161.902145,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 166.929138,
          y: 1.13127279,
          z: 158.423248,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 94.2225952,
          y: 3.784,
          z: 234.238922,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 163.402008,
          y: -0.84131074,
          z: 38.052002,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 159.615,
          y: -0.3258109,
          z: 43.727005,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 169.134857,
          y: -1.27262139,
          z: 44.211998,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 166.75351,
          y: -1.2723105,
          z: 45.06732,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 148.616,
          y: 3.5101,
          z: 207.331,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 146.8803,
          y: 4.16445541,
          z: 209.3718,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 58.4795,
          y: 0.5444,
          z: 45.1425,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 174.733,
          y: 3.505,
          z: 233.64,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 118.784012,
          y: 4.74340057,
          z: 124.903175,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 106.909531,
          y: 4.533901,
          z: 129.451462,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 48.5625954,
          y: 0.9422717,
          z: 34.5523071,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 41.988266,
          y: 1.16139984,
          z: 31.9140472,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 48.6003265,
          y: 0.7134695,
          z: 31.9792862,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 48.8253555,
          y: 1.47473443,
          z: 35.3576736,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 51.83707,
          y: 0.7062094,
          z: 32.6728058,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 47.4867439,
          y: 1.1254071,
          z: 31.8034286,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 51.7176933,
          y: 1.46610725,
          z: 32.5970764,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 219.288,
          y: 4.2507,
          z: 110.315,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 213.732758,
          y: 0.593199968,
          z: 132.347366,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 219.331,
          y: 4.2507,
          z: 107.861,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 217.794,
          y: 4.2507,
          z: 125.815,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 211.9068,
          y: 4.2191,
          z: 133.0089,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 212.426,
          y: 4.4899,
          z: 123.016,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 39.308,
          y: 11.1044044,
          z: 94.81802,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 43.2475243,
          y: 11.402832,
          z: 121.065086,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 43.3206673,
          y: 7.444783,
          z: 103.269981,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 45.3127861,
          y: 4.566054,
          z: 87.1288,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 45.65809,
          y: 5.09810925,
          z: 93.50446,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 43.414978,
          y: 4.516,
          z: 77.2809448,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 45.531,
          y: 10.7177877,
          z: 88.53093,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 45.268,
          y: 7.188966,
          z: 116.164,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 123.050438,
          y: 11.074666,
          z: 157.576645,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 122.170204,
          y: 10.7513256,
          z: 149.371063,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 185.132446,
          y: 6.5695,
          z: 172.761749,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 187.682,
          y: 6.357,
          z: 180.691,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 187.620956,
          y: 6.62049961,
          z: 177.974426,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 186.966949,
          y: 6.8905,
          z: 174.10643,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 136.472748,
          y: -1.13749981,
          z: 84.54491,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 139.851578,
          y: -1.37299991,
          z: 81.07428,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 52.549,
          y: 6.708,
          z: 220.81,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 49.6294556,
          y: 6.4725,
          z: 222.837555,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 46.944,
          y: 7.62400055,
          z: 148.095,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 49.2830048,
          y: 5.7140007,
          z: 154.608,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 118.018,
          y: -0.3125,
          z: 44.749,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 63.663,
          y: 6.918997,
          z: 231.873,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 63.239,
          y: 9.657999,
          z: 226.842,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 48.4227867,
          y: 9.473499,
          z: 229.664627,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 190.737,
          y: -4.295,
          z: 70.993,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 191.306,
          y: -4.24900055,
          z: 58.6450043,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 189.361588,
          y: -4.4205,
          z: 52.49019,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 185.817017,
          y: -0.156000376,
          z: 60.61,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 187.872833,
          y: -0.122936726,
          z: 71.1848755,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 193.195175,
          y: -0.57369256,
          z: 52.65886,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 190.0659,
          y: -4.68697548,
          z: 76.18785,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 52.6980133,
          y: 1.055,
          z: 45.71801,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 122.063,
          y: 4.004,
          z: 121.009,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 34.7274,
          y: 10.5648727,
          z: 95.9509354,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 120.92952,
          y: -1.91252828,
          z: 50.9729919,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 108.494316,
          y: -1.2650001,
          z: 55.0431137,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 51.7603951,
          y: 8.049273,
          z: 85.51921,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 39.79701,
          y: 1.176,
          z: 113.045029,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 120.06,
          y: 13.4667,
          z: 148.438,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 68.69682,
          y: 1.4548,
          z: 129.570129,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 125.160446,
          y: 3.92407179,
          z: 230.105881,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 46.616684,
          y: 12.0962725,
          z: 139.251831,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 133.833,
          y: 5.006,
          z: 150.995,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 49.5418167,
          y: -0.05519986,
          z: 160.679123,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 60.74054,
          y: 9.590073,
          z: 236.438843,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 119.2951,
          y: 1.012,
          z: 114.0683,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 135.645,
          y: 0.7981999,
          z: 174.542,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 36.9174652,
          y: 2.7863,
          z: 168.249176,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 106.217,
          y: 2.26,
          z: 151.627,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 53.5934944,
          y: 12.0942717,
          z: 137.279861,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 67.929,
          y: 0.803500056,
          z: 109.4259,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 88.00407,
          y: 1.19903445,
          z: 170.441284,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 98.68,
          y: 4.5619,
          z: 228.8018,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 98.906,
          y: 4.5553,
          z: 229.2182,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 39.9149,
          y: 3.058725,
          z: 195.709152,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 166.224945,
          y: 0.221999884,
          z: 36.9660263,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 128.717,
          y: 9.637,
          z: 232.118,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 127.3745,
          y: 9.543,
          z: 233.7436,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 128.3836,
          y: 3.597176,
          z: 232.682037,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 128.3836,
          y: 3.597176,
          z: 232.682037,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 128.3836,
          y: 3.597176,
          z: 232.682037,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 128.3836,
          y: 3.597176,
          z: 232.682037,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 124.103615,
          y: 4.349976,
          z: 218.097046,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 124.103615,
          y: 4.349976,
          z: 218.097046,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 124.103615,
          y: 4.349976,
          z: 218.097046,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 124.103615,
          y: 4.349976,
          z: 218.097046,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 123.951004,
          y: 4.3503,
          z: 217.627,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 124.103615,
          y: 4.349976,
          z: 217.627045,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 124.103615,
          y: 4.349976,
          z: 217.627045,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 123.818,
          y: 4.3503,
          z: 217.627,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 133.635,
          y: 3.65500021,
          z: 234.943,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 106.903412,
          y: 4.23554945,
          z: 221.546829,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 153.058167,
          y: 4.6862,
          z: 209.685043,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 123.887,
          y: 4.7011,
          z: 224.743439,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 135.570938,
          y: 3.7676,
          z: 230.066208,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 58.5749321,
          y: 0.677999735,
          z: 44.52765,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.0990372,
          y: 1.36867619,
          z: 36.8683853,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.099,
          y: 1.3690002,
          z: 37.086998,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.0990372,
          y: 1.36867619,
          z: 36.8683853,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.0990372,
          y: 1.36867619,
          z: 36.8683853,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.615036,
          y: 1.36867619,
          z: 36.8683853,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.615036,
          y: 1.36867619,
          z: 36.8683853,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.6149979,
          y: 1.3690002,
          z: 37.114,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.615036,
          y: 1.36867619,
          z: 36.8683853,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 178.974,
          y: 4.01500034,
          z: 236.5204,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 187.315,
          y: 0.796999931,
          z: 231.040009,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 65.04705,
          y: 1.95399988,
          z: 210.235458,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 33.559,
          y: 1.5266515,
          z: 131.252014,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 125.694,
          y: 3.02299976,
          z: 240.09,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 198.68,
          y: -4.60999966,
          z: 26.8850021,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 218.786514,
          y: -3.23298669,
          z: 55.7853851,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 218.786514,
          y: -3.23298669,
          z: 55.7853851,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 218.786514,
          y: -3.23298669,
          z: 55.7853851,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 218.786514,
          y: -3.23298669,
          z: 55.7853851,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 227.211578,
          y: 3.53972,
          z: 80.60917,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 109.139084,
          y: 5.554903,
          z: 129.267548,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 108.835213,
          y: 1.73690033,
          z: 124.724121,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 40.281208,
          y: 1.4940002,
          z: 41.96763,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 59.4015,
          y: 1.59332585,
          z: 35.1925964,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 208.9317,
          y: 1.29070008,
          z: 105.855438,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 207.633347,
          y: 4.03199959,
          z: 118.821686,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 219.379,
          y: 4.2507,
          z: 105.95,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 213.813,
          y: 4.2507,
          z: 107.267,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 213.811,
          y: 4.2507,
          z: 104.274,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 207.904419,
          y: 0.4470005,
          z: 109.721809,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 203.400284,
          y: 0.5228002,
          z: 110.599472,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 204.803619,
          y: 1.049005,
          z: 113.949089,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 202.33905,
          y: 0.94720006,
          z: 112.361374,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 202.247147,
          y: 1.39870012,
          z: 104.713524,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 43.269,
          y: 11.5496378,
          z: 122.330017,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 40.031826,
          y: 1.42265213,
          z: 116.611908,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 44.3514671,
          y: 10.4307871,
          z: 94.9519348,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 50.3990135,
          y: 1.42265737,
          z: 105.832878,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 49.1222458,
          y: 1.42525184,
          z: 80.8742447,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 49.22692,
          y: 1.42265248,
          z: 97.50782,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 53.5477448,
          y: 1.4226526,
          z: 102.100128,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 46.09682,
          y: 8.711281,
          z: 89.99601,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 42.798336,
          y: 11.1849985,
          z: 91.49502,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 43.2209969,
          y: 11.5470018,
          z: 121.992004,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 53.79722,
          y: 8.415822,
          z: 128.211975,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 40.27089,
          y: 1.15400016,
          z: 114.3765,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 45.2051735,
          y: 10.6610031,
          z: 107.489807,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 45.24,
          y: 4.32363033,
          z: 67.72598,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 35.4640236,
          y: 1.52649319,
          z: 102.0002,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 49.4400749,
          y: 2.00612926,
          z: 83.9733353,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 49.4400749,
          y: 2.00612926,
          z: 83.9733353,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 49.4400749,
          y: 2.00612926,
          z: 83.9733353,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 49.4400749,
          y: 2.00612926,
          z: 83.9733353,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 53.0641441,
          y: 2.00632763,
          z: 94.98912,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 53.0641441,
          y: 2.00632763,
          z: 94.98912,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 53.0641441,
          y: 2.00632763,
          z: 94.98912,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 53.0641441,
          y: 2.00632763,
          z: 94.98912,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.9854965,
          y: 2.00733,
          z: 101.932693,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.9854965,
          y: 2.00733,
          z: 101.932693,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.9854965,
          y: 2.00733,
          z: 101.932693,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.9854965,
          y: 2.00733,
          z: 101.932693,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.9854965,
          y: 2.00733,
          z: 101.4487,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.9854965,
          y: 2.00733,
          z: 101.4487,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.9854965,
          y: 2.00733,
          z: 101.4487,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 46.9854965,
          y: 2.00733,
          z: 101.4487,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 37.7234077,
          y: 2.28965473,
          z: 64.15222,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 39.9775963,
          y: 2.00632763,
          z: 121.339706,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 39.9775963,
          y: 2.00632763,
          z: 121.339706,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 39.9775963,
          y: 2.00632763,
          z: 121.339706,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 39.9775963,
          y: 2.00632763,
          z: 121.339706,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 126.739,
          y: 10.7230005,
          z: 154.64946,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 136.42,
          y: -0.398,
          z: 97.489,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 134.51683,
          y: -1.14600015,
          z: 94.88405,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 139.874649,
          y: -0.397000074,
          z: 94.72696,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 137.821991,
          y: -0.396865368,
          z: 98.731,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 136.319687,
          y: -1.37202239,
          z: 96.0575,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.51619,
          y: -0.533,
          z: 77.0092,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.508163,
          y: -0.533324,
          z: 76.8568039,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.508163,
          y: -0.533324,
          z: 76.8568039,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.523209,
          y: -0.533,
          z: 77.14202,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.977173,
          y: -0.533324,
          z: 76.8318,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.977173,
          y: -0.533324,
          z: 76.8318,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.977173,
          y: -0.533324,
          z: 76.8318,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.977173,
          y: -0.533324,
          z: 76.8318,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 139.446167,
          y: -0.533323765,
          z: 76.8068,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 139.446167,
          y: -0.533323765,
          z: 76.8068,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 139.446167,
          y: -0.533323765,
          z: 76.8068,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 139.446167,
          y: -0.533323765,
          z: 76.8068,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 245.580811,
          y: -3.38589835,
          z: 53.9637451,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 244.971832,
          y: -0.06100011,
          z: 58.913063,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 244.997925,
          y: -0.0550000668,
          z: 58.2190323,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 214.446991,
          y: 3.99561071,
          z: 169.646912,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 157.0104,
          y: 1.74494994,
          z: 190.489883,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 78.59352,
          y: 1.328997,
          z: 124.437378,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 76.57499,
          y: 4.36699724,
          z: 132.901367,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.5900345,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.5900345,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.5900345,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.5900345,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 83.06404,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 83.06404,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 83.06404,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 83.06404,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 83.53704,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 83.53704,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 83.53704,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 83.53704,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 86.38109,
          y: 1.094963,
          z: 128.535629,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 86.38109,
          y: 1.094963,
          z: 128.535629,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 86.38109,
          y: 1.094963,
          z: 128.535629,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 86.38109,
          y: 1.094963,
          z: 128.535629,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7560349,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7560349,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7560349,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7560349,
          y: 1.676676,
          z: 128.529388,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7723846,
          y: 4.722676,
          z: 138.492966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7723846,
          y: 4.722676,
          z: 138.492966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7723846,
          y: 4.722676,
          z: 138.492966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7723846,
          y: 4.722676,
          z: 138.492966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7723846,
          y: 4.722676,
          z: 138.005966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7723846,
          y: 4.722676,
          z: 138.005966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7723846,
          y: 4.722676,
          z: 138.005966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.7723846,
          y: 4.722676,
          z: 138.005966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 85.0190353,
          y: 1.676676,
          z: 140.8664,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 85.0190353,
          y: 1.676676,
          z: 140.8664,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 85.0190353,
          y: 1.676676,
          z: 140.8664,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 85.0190353,
          y: 1.676676,
          z: 140.8664,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.68898,
          y: 1.092964,
          z: 141.051773,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.68898,
          y: 1.092964,
          z: 141.051773,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.68898,
          y: 1.092964,
          z: 141.051773,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.68898,
          y: 1.092964,
          z: 141.051773,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.48491,
          y: 1.53609848,
          z: 142.018051,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.48491,
          y: 1.53609848,
          z: 142.018051,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.48491,
          y: 1.53609848,
          z: 142.018051,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.48491,
          y: 1.53609848,
          z: 142.018051,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 43.167,
          y: 12.363,
          z: 218.406,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 56.8641968,
          y: 6.49199963,
          z: 226.703934,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 58.0428467,
          y: 3.948999,
          z: 231.2235,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 64.41638,
          y: 3.636675,
          z: 230.431946,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 64.41638,
          y: 3.636675,
          z: 230.431946,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 64.41638,
          y: 3.636675,
          z: 230.431946,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 64.41638,
          y: 3.636675,
          z: 230.431946,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 59.1539955,
          y: 3.05499864,
          z: 232.255524,
        },
      },
      {
        lootContainer: {
          id: '64d11702dd0cd96ab82c3280',
          name: '银行保险箱',
          normalizedName: 'bank-safe',
        },
        position: {
          x: 69.23411,
          y: 3.22939587,
          z: 232.871338,
        },
      },
      {
        lootContainer: {
          id: '64d11702dd0cd96ab82c3280',
          name: '银行保险箱',
          normalizedName: 'bank-safe',
        },
        position: {
          x: 67.33411,
          y: 3.22939587,
          z: 232.871338,
        },
      },
      {
        lootContainer: {
          id: '64d116f41a9c6143a956127d',
          name: '银行收银柜',
          normalizedName: 'bank-cash-register',
        },
        position: {
          x: 65.961,
          y: 3.83899832,
          z: 233.0485,
        },
      },
      {
        lootContainer: {
          id: '64d116f41a9c6143a956127d',
          name: '银行收银柜',
          normalizedName: 'bank-cash-register',
        },
        position: {
          x: 67.778,
          y: 3.83699846,
          z: 233.0485,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 46.1540031,
          y: 8.010017,
          z: 100.119987,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 53.1882248,
          y: 3.05227542,
          z: 157.039444,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 37.06749,
          y: 11.946,
          z: 152.1484,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 48.19072,
          y: 6.09666157,
          z: 149.911438,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 45.0723763,
          y: 3.82479954,
          z: 161.76416,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 182.598328,
          y: 1.99696445,
          z: 103.857376,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 182.598328,
          y: 1.99696445,
          z: 103.857376,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 182.598328,
          y: 1.99696445,
          z: 103.857376,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 182.598328,
          y: 1.99696445,
          z: 103.857376,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 182.238953,
          y: 2.59467649,
          z: 123.75061,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 182.238953,
          y: 2.59467649,
          z: 123.75061,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 182.238953,
          y: 2.59467649,
          z: 123.75061,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 182.238953,
          y: 2.59467649,
          z: 123.75061,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 181.772949,
          y: 2.59467649,
          z: 123.75061,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 181.772949,
          y: 2.59467649,
          z: 123.75061,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 181.772949,
          y: 2.59467649,
          z: 123.75061,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 181.772949,
          y: 2.59467649,
          z: 123.75061,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 181.540039,
          y: -0.219323874,
          z: 118.798386,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 181.540039,
          y: -0.219323874,
          z: 118.798386,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 181.540039,
          y: -0.219323874,
          z: 118.798386,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 181.540039,
          y: -0.219323874,
          z: 118.798386,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 147.8237,
          y: -1.8959,
          z: 36.858,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 59.8,
          y: 10.249999,
          z: 229.788,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.57338,
          y: 3.626678,
          z: 223.145966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.57338,
          y: 3.626678,
          z: 223.145966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.57338,
          y: 3.626678,
          z: 223.145966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.57338,
          y: 3.626678,
          z: 223.145966,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.57338,
          y: 3.626678,
          z: 222.676971,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.57338,
          y: 3.626678,
          z: 222.676971,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.57338,
          y: 3.626678,
          z: 222.676971,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.57338,
          y: 3.626678,
          z: 222.676971,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 61.6271973,
          y: 9.469,
          z: 222.183945,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 59.309,
          y: 9.326998,
          z: 232.388992,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 43.0814972,
          y: 3.936001,
          z: 208.297,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 193.001556,
          y: -4.43500042,
          z: 52.79875,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 187.407,
          y: -4.43500042,
          z: 74.386,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 190.189026,
          y: -4.43500042,
          z: 52.79854,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 192.9139,
          y: -4.43500042,
          z: 62.5200043,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 191.705963,
          y: -3.850824,
          z: 82.56461,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 191.705963,
          y: -3.850824,
          z: 82.56461,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 191.705963,
          y: -3.850824,
          z: 82.56461,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 191.705963,
          y: -3.850824,
          z: 82.56461,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 187.215622,
          y: -4.21120262,
          z: 78.51899,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 187.158,
          y: -4.43100071,
          z: 80.3778,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 191.513428,
          y: -3.85082364,
          z: 51.2356033,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 191.513428,
          y: -3.85082364,
          z: 51.2356033,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 191.513428,
          y: -3.85082364,
          z: 51.2356033,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 191.513428,
          y: -3.85082364,
          z: 51.2356033,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 190.281342,
          y: -3.850824,
          z: 62.97583,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 190.281342,
          y: -3.850824,
          z: 62.97583,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 190.281342,
          y: -3.850824,
          z: 62.97583,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 190.281342,
          y: -3.850824,
          z: 62.97583,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 190.514,
          y: -0.9370005,
          z: 56.262,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 184.59,
          y: 0.431999922,
          z: 76.20599,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 182.694,
          y: -2.80299973,
          z: 80.63799,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 182.64505,
          y: -2.805999,
          z: 81.4428253,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 177.218,
          y: 9.974,
          z: 79.282,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 175.943,
          y: 10.2330008,
          z: 80.484,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 247.610565,
          y: -4.85596561,
          z: 30.23359,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 247.22525,
          y: -3.76806569,
          z: 50.92389,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 260.962158,
          y: -5.993266,
          z: 58.32579,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 256.870056,
          y: -4.91566563,
          z: 75.57199,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 245.512573,
          y: -2.41646552,
          z: 84.1756,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 249.529572,
          y: -0.9364655,
          z: 120.493591,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 259.728546,
          y: 1.8085345,
          z: 201.400589,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 226.80307,
          y: -3.58066535,
          z: 56.0052948,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 227.196564,
          y: 2.95753455,
          z: 81.5565948,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 224.314545,
          y: -3.78546548,
          z: 63.0120926,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 259.324829,
          y: -5.12496567,
          z: 78.5191956,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 246.269928,
          y: -3.97096562,
          z: 61.64808,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 252.047943,
          y: -5.712365,
          z: 49.53408,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 212.9762,
          y: -4.56496525,
          z: 55.0141068,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 228.204254,
          y: 3.97664165,
          z: 68.2465744,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 254.167572,
          y: -5.504466,
          z: 49.73159,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 269.302551,
          y: -0.414465427,
          z: 89.25859,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 255.89975,
          y: -0.8172655,
          z: 126.985794,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 254.659546,
          y: -0.7991655,
          z: 124.668495,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 250.374451,
          y: -0.9427655,
          z: 141.75769,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 217.257965,
          y: 1.43983448,
          z: 206.008,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 228.28006,
          y: 1.03103447,
          z: 169.909088,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 213.74057,
          y: 0.304534435,
          z: 144.202591,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 213.311554,
          y: 0.332534552,
          z: 136.758591,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 214.6112,
          y: 0.888034463,
          z: 208.374557,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 247.397339,
          y: -5.8339653,
          z: 9.811531,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 237.3451,
          y: -5.27337933,
          z: 10.65918,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 194.407654,
          y: 0.0500342846,
          z: 124.0466,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 211.06665,
          y: 0.4220345,
          z: 164.3646,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 269.268829,
          y: -4.26196575,
          z: 87.025116,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 210.768,
          y: 3.946,
          z: 407.129,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 213.801,
          y: 3.346,
          z: 412.402,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 206.664078,
          y: 4.321765,
          z: 409.46936,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 204.808,
          y: 3.34,
          z: 409.459,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 194.941,
          y: 4.15,
          z: 412.425,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 203.597,
          y: 3.843,
          z: 406.869,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 191.949,
          y: 3.351,
          z: 412.909,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 266.164,
          y: 6.8951,
          z: 363.552,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 235.2186,
          y: 9.8973,
          z: 410.3419,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 74.51887,
          y: 5.9750824,
          z: 266.829163,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 80.4737854,
          y: 5.9844017,
          z: 285.167755,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 80.74899,
          y: 3.7654,
          z: 295.889,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 64.975,
          y: 6.81160069,
          z: 348.159119,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 237.826309,
          y: 4.47000027,
          z: 350.1585,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 187.414581,
          y: 3.5998,
          z: 265.369354,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 185.245789,
          y: 3.5998,
          z: 266.609955,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 204.227585,
          y: 3.7915,
          z: 329.6499,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 185.150864,
          y: 3.57171369,
          z: 324.988831,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 198.818329,
          y: 4.18591166,
          z: 300.011658,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 194.113983,
          y: 4.1973,
          z: 289.6734,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 193.675491,
          y: 4.2089,
          z: 303.372131,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 98.89821,
          y: 3.542372,
          z: 333.6153,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 99.5966,
          y: 2.82665253,
          z: 343.9659,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 95.90298,
          y: 2.81765318,
          z: 351.1806,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 79.33152,
          y: 2.818046,
          z: 290.35025,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 94.86873,
          y: 2.83830023,
          z: 335.1787,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 101.499054,
          y: 3.833654,
          z: 352.927246,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 98.48201,
          y: 3.58514261,
          z: 303.985718,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 100.041794,
          y: 3.0618,
          z: 287.866364,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 141.4464,
          y: 6.71959972,
          z: 354.826,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 151.976959,
          y: 6.71819973,
          z: 350.488251,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 134.669525,
          y: 6.7195,
          z: 346.892517,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 147.755585,
          y: 3.7443,
          z: 354.883423,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 207.981079,
          y: -0.988472,
          z: 401.533661,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 258.175323,
          y: -0.9711995,
          z: 360.5245,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 122.302422,
          y: 4.3647,
          z: 300.518555,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 122.724472,
          y: 4.36470032,
          z: 293.7967,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 254.666046,
          y: -0.9805002,
          z: 354.715637,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 153.1238,
          y: -0.9711995,
          z: 359.0051,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 61.56054,
          y: 8.123663,
          z: 313.950928,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 65.56401,
          y: 7.81811,
          z: 310.732666,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 60.2663651,
          y: 7.23656273,
          z: 269.991364,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 66.4914856,
          y: 7.235274,
          z: 275.785065,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 54.77546,
          y: 7.44676256,
          z: 292.122162,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 49.88678,
          y: 7.31899929,
          z: 278.971741,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 66.861,
          y: 7.30039072,
          z: 270.626,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 65.74938,
          y: 7.235272,
          z: 272.492645,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 70.07456,
          y: 7.772,
          z: 319.32962,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 62.0586853,
          y: 8.202999,
          z: 316.610718,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 283.156,
          y: 3.98199844,
          z: 416.323,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 147.894409,
          y: 3.92235184,
          z: 386.6694,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 142.197,
          y: 6.45350552,
          z: 356.6225,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 142.564,
          y: 3.4778,
          z: 365.679,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 149.243,
          y: 3.4778,
          z: 369.42,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 136.263,
          y: 3.4778,
          z: 377.11,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 101.49,
          y: 7.4848,
          z: 299.9,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 98.866,
          y: 7.648,
          z: 306.499,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 91.0899048,
          y: 3.2955,
          z: 319.6679,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 97.04439,
          y: 2.81619978,
          z: 316.7496,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 201.409653,
          y: -1.12679243,
          z: 354.3452,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 211.435608,
          y: -1.12848139,
          z: 343.26416,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 196.879852,
          y: -0.872728348,
          z: 375.0511,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 77.43877,
          y: 6.626271,
          z: 295.1919,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 77.88704,
          y: 4.23641634,
          z: 279.0074,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 75.86789,
          y: 4.07241869,
          z: 297.288971,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 84.016,
          y: 3.567998,
          z: 267.19,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 86.52218,
          y: 3.65400076,
          z: 296.375916,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 75.18909,
          y: 3.56515121,
          z: 331.491974,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 101.131088,
          y: 3.25515175,
          z: 329.8789,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 73.50333,
          y: 3.23061538,
          z: 265.766174,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 92.47601,
          y: 4.108152,
          z: 336.6109,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 75.407,
          y: 6.3760004,
          z: 296.446,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 66.798,
          y: 2.650998,
          z: 265.739868,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 82.36824,
          y: 3.050933,
          z: 311.0537,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 81.75833,
          y: 3.877262,
          z: 357.007935,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 84.973,
          y: 3.8595562,
          z: 298.039368,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 91.503,
          y: 3.23515129,
          z: 330.7959,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 67.47657,
          y: 2.93537188,
          z: 335.318237,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 71.09161,
          y: 2.93537188,
          z: 333.858,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 69.51879,
          y: 3.13457155,
          z: 349.897949,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 84.08272,
          y: 3.13457155,
          z: 354.6585,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 78.53404,
          y: 3.15727186,
          z: 325.261353,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 78.1600342,
          y: 3.09517336,
          z: 298.049347,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 77.47276,
          y: 5.70677233,
          z: 292.928345,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 73.0870743,
          y: 6.06740141,
          z: 350.519379,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 76.8703,
          y: 3.146699,
          z: 285.3556,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 65.62196,
          y: 2.787,
          z: 341.397034,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 58.1297836,
          y: 3.74,
          z: 345.493347,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 108.640236,
          y: 4.121472,
          z: 300.836121,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 132.0553,
          y: 4.121472,
          z: 292.855957,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 146.475113,
          y: 4.121472,
          z: 286.465881,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 116.738,
          y: 4.2382,
          z: 303.85,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 158.2,
          y: 3.7733,
          z: 313.285,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 148.567,
          y: 4.4317,
          z: 292.0667,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 120.7054,
          y: 7.2797,
          z: 288.3759,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 142.2675,
          y: 3.874907,
          z: 295.54,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 204.773758,
          y: 7.030607,
          z: 287.2211,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 208.1309,
          y: 4.029,
          z: 299.892,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 198.831863,
          y: 7.205172,
          z: 301.154236,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 198.309235,
          y: 7.221272,
          z: 306.3112,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 197.120758,
          y: 7.205172,
          z: 299.2599,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 207.2212,
          y: 7.754,
          z: 307.344818,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 201.866867,
          y: 7.205172,
          z: 285.578217,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 213.6482,
          y: 4.303972,
          z: 304.43457,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 213.544983,
          y: 4.303972,
          z: 302.848633,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 190.74437,
          y: 3.88399982,
          z: 277.673981,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 181.94902,
          y: 4.29699945,
          z: 313.677521,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 188.9885,
          y: 4.11199951,
          z: 306.947266,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 184.2474,
          y: 4.4065547,
          z: 261.883759,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 178.570435,
          y: 3.985107,
          z: 331.8649,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 181.003708,
          y: 7.022155,
          z: 312.662323,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 196.452,
          y: 3.4501,
          z: 257.808,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 180.0318,
          y: 6.4833,
          z: 309.4351,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 205.0591,
          y: 4.033,
          z: 331.1721,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 182.273,
          y: 4.048,
          z: 322.578,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 189.830719,
          y: 3.85753536,
          z: 258.5468,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 185.909561,
          y: 3.85577178,
          z: 321.9715,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 177.63,
          y: 4.0485,
          z: 288.02,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 107.396812,
          y: 4.16800737,
          z: 287.87793,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 109.866211,
          y: 4.4657073,
          z: 278.816223,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 252.73,
          y: 4.0738,
          z: 391.55,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 237.077,
          y: 4.669,
          z: 344.193,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 202.1932,
          y: 3.9547,
          z: 368.5703,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 267.375244,
          y: 7.19996357,
          z: 368.148224,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 238.135254,
          y: 9.339964,
          z: 412.867249,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 66.3296051,
          y: 5.228363,
          z: 265.5043,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 75.72658,
          y: 5.282363,
          z: 285.441528,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 77.32625,
          y: 2.86436319,
          z: 296.170227,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 59.9433136,
          y: 6.72536373,
          z: 347.753174,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 236.4018,
          y: 3.82746339,
          z: 348.897156,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 182.937515,
          y: 3.81239152,
          z: 265.415466,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 191.043,
          y: 3.47622514,
          z: 260.99707,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 206.748535,
          y: 3.75146341,
          z: 329.620483,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 188.301468,
          y: 3.724883,
          z: 330.5981,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 201.064758,
          y: 4.18546343,
          z: 288.5037,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 191.981476,
          y: 4.185263,
          z: 302.057831,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 213.731842,
          y: 4.18546343,
          z: 302.052856,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 205.8692,
          y: 4.197463,
          z: 309.171234,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 101.872452,
          y: 3.84346342,
          z: 331.677521,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 102.814987,
          y: 2.9024632,
          z: 299.1985,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 100.945663,
          y: 2.81446314,
          z: 340.114716,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 149.694412,
          y: 6.71819973,
          z: 345.683533,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 114.977119,
          y: 4.36446333,
          z: 293.963867,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 110.227509,
          y: 4.16046333,
          z: 295.754822,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 70.08018,
          y: 7.84523535,
          z: 321.312622,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 49.9424133,
          y: 7.236235,
          z: 276.9791,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 57.653244,
          y: 7.402963,
          z: 271.425232,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 61.9357147,
          y: 7.995963,
          z: 311.110382,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 285.714233,
          y: 4.384963,
          z: 414.17923,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 135.220245,
          y: 3.47496319,
          z: 366.088226,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 100.369247,
          y: 7.64396334,
          z: 310.67923,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 71.55104,
          y: 3.64596319,
          z: 347.714172,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 61.7082443,
          y: 2.91386318,
          z: 347.602234,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 126.095039,
          y: 4.121472,
          z: 299.8017,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 142.522278,
          y: 4.121472,
          z: 294.284668,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 125.381248,
          y: 6.744963,
          z: 290.068237,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 198.979248,
          y: 7.34607029,
          z: 293.350677,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 190.362442,
          y: 7.199235,
          z: 296.952545,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 208.225,
          y: 7.20023537,
          z: 299.5141,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 214.325226,
          y: 4.676735,
          z: 290.4069,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 186.993622,
          y: 4.23871231,
          z: 266.286926,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 194.491241,
          y: 3.40396333,
          z: 259.305237,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 201.603241,
          y: 4.001963,
          z: 330.174225,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 179.156158,
          y: 4.02036762,
          z: 263.587,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 178.38324,
          y: 4.29596329,
          z: 285.393219,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 104.402084,
          y: 4.838071,
          z: 281.733948,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 210.069244,
          y: 3.90696335,
          z: 360.966217,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 276.124084,
          y: 4.043,
          z: 387.531,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 276.024,
          y: 4.04299974,
          z: 385.638977,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 280.060547,
          y: 6.599,
          z: 387.550781,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 235.304886,
          y: 9.593976,
          z: 395.311371,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 200.808,
          y: 3.49669981,
          z: 402.714,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 262.4943,
          y: 7.35041237,
          z: 372.242126,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 262.2902,
          y: 5.0008,
          z: 395.81665,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 173.28067,
          y: 3.62612128,
          z: 370.084473,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 196.452332,
          y: 4.38439941,
          z: 259.608063,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 179.342,
          y: 7.011,
          z: 313.294983,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 179.387863,
          y: 6.98784256,
          z: 314.0328,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 186.114,
          y: 4.435,
          z: 324.375,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 185.474,
          y: 4.427,
          z: 324.327,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 92.15809,
          y: 3.97405028,
          z: 326.2179,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 84.8384247,
          y: 3.87157726,
          z: 348.9173,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 72.7609558,
          y: 4.06105328,
          z: 350.848633,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 77.43799,
          y: 4.07899952,
          z: 288.979156,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 65.29139,
          y: 7.684785,
          z: 310.1788,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 65.29139,
          y: 7.684785,
          z: 310.1788,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 65.29139,
          y: 7.684785,
          z: 310.1788,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 65.29139,
          y: 7.684785,
          z: 310.1788,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 65.29139,
          y: 7.706651,
          z: 309.544678,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 65.29139,
          y: 7.706651,
          z: 309.544678,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 65.29139,
          y: 7.706651,
          z: 309.544678,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 65.29139,
          y: 7.706651,
          z: 309.544678,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 68.022,
          y: 7.10414076,
          z: 302.949,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 69.4573059,
          y: 6.96768951,
          z: 319.073944,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 61.5879974,
          y: 7.2679,
          z: 324.1243,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 61.905,
          y: 7.3179,
          z: 320.444,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 135.256973,
          y: 4.305976,
          z: 355.757629,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 135.256973,
          y: 4.305976,
          z: 355.757629,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 135.256973,
          y: 4.305976,
          z: 355.757629,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 135.257,
          y: 4.3063,
          z: 355.472,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 143.856613,
          y: 4.306376,
          z: 352.768036,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 137.1655,
          y: 4.5522,
          z: 381.361084,
        },
      },
      {
        lootContainer: {
          id: '5d6fe50986f77449d97f7463',
          name: '医疗物资箱',
          normalizedName: 'medical-supply-crate',
        },
        position: {
          x: 93.121,
          y: 3.594,
          z: 316.254,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 208.63649,
          y: -0.778002739,
          z: 411.734619,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 209.013947,
          y: -1.00498915,
          z: 408.501984,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 210.51,
          y: -1.00498915,
          z: 407.633,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 247.492157,
          y: -1.1329999,
          z: 405.798981,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 264.567139,
          y: -1.1329999,
          z: 381.6,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 260.578,
          y: -0.7900996,
          z: 403.938,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 67.22166,
          y: 3.51625252,
          z: 342.560669,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 78.81704,
          y: 3.52517033,
          z: 278.550568,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 86.406,
          y: 3.39300251,
          z: 297.524,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 99.14074,
          y: 3.306777,
          z: 370.625977,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.55539,
          y: 3.58367634,
          z: 289.302948,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.55539,
          y: 3.58367634,
          z: 289.302948,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.55539,
          y: 3.58367634,
          z: 289.302948,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.55539,
          y: 3.58367634,
          z: 289.302948,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.55539,
          y: 3.58367634,
          z: 289.776947,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.55539,
          y: 3.58367634,
          z: 289.776947,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.55539,
          y: 3.58367634,
          z: 289.776947,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 75.55539,
          y: 3.58367634,
          z: 289.776947,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.71768,
          y: 3.54765987,
          z: 353.123657,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.71768,
          y: 3.54765987,
          z: 353.123657,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.71768,
          y: 3.54765987,
          z: 353.123657,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 82.71768,
          y: 3.54765987,
          z: 353.123657,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 87.8637848,
          y: 3.331295,
          z: 352.700562,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 139.527252,
          y: 6.698,
          z: 376.550385,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 55.9029541,
          y: 3.62197614,
          z: 339.365662,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 55.9029541,
          y: 3.62197614,
          z: 339.365662,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 55.9029541,
          y: 3.62197614,
          z: 339.365662,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 55.9029541,
          y: 3.62197614,
          z: 339.365662,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.7079239,
          y: 3.621376,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.7079239,
          y: 3.621376,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.7079239,
          y: 3.621376,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.7079239,
          y: 3.621376,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.5559235,
          y: 6.62467575,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.5559235,
          y: 6.62467575,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.5559235,
          y: 6.62467575,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.5559235,
          y: 6.62467575,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.0369263,
          y: 6.62467575,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.0369263,
          y: 6.62467575,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.0369263,
          y: 6.62467575,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.0369263,
          y: 6.62467575,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.9229279,
          y: 3.621076,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.9229279,
          y: 3.621076,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.9229279,
          y: 3.621076,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.9229279,
          y: 3.621076,
          z: 347.773621,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.1088562,
          y: 3.02443886,
          z: 340.428436,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.1088562,
          y: 3.02443886,
          z: 340.428436,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.1088562,
          y: 3.02443886,
          z: 340.428436,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.1088562,
          y: 3.02443886,
          z: 340.428436,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.10885,
          y: 3.02683878,
          z: 340.4285,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.10885,
          y: 3.02683878,
          z: 340.4285,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.10885,
          y: 3.02683878,
          z: 340.4285,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.10885,
          y: 3.02683878,
          z: 340.4285,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 55.877,
          y: 6.634676,
          z: 335.363434,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 55.877,
          y: 6.634676,
          z: 335.363434,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 55.877,
          y: 6.634676,
          z: 335.363434,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 55.877,
          y: 6.634676,
          z: 335.363434,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.2943726,
          y: 3.34938622,
          z: 340.348541,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.2943726,
          y: 3.34938622,
          z: 340.348541,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.2943726,
          y: 3.34938622,
          z: 340.348541,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 57.2943726,
          y: 3.34938622,
          z: 340.348541,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 3.61927581,
          z: 335.328,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 3.61927581,
          z: 335.328,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 3.61927581,
          z: 335.328,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 3.61927581,
          z: 335.328,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.630876,
          z: 335.328064,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.630876,
          z: 335.328064,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.630876,
          z: 335.328064,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.630876,
          z: 335.328064,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.62917566,
          z: 339.451019,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.62917566,
          z: 339.451019,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.62917566,
          z: 339.451019,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.62917566,
          z: 339.451019,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.630776,
          z: 338.962982,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.630776,
          z: 338.962982,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.630776,
          z: 338.962982,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.36235,
          y: 6.630776,
          z: 338.962982,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 58.10759,
          y: 6.26939726,
          z: 337.684021,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 151.65567,
          y: 4.41908,
          z: 293.954285,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 161.664673,
          y: 4.41908,
          z: 293.954285,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 148.297668,
          y: 4.42207956,
          z: 293.952271,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 158.306671,
          y: 4.42207956,
          z: 293.952271,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 126.526443,
          y: 6.9965,
          z: 289.4824,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 125.526947,
          y: 7.142506,
          z: 289.3279,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.871269,
          y: 7.56396341,
          z: 292.666962,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.871269,
          y: 7.56396341,
          z: 292.666962,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.871269,
          y: 7.56396341,
          z: 292.666962,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 121.871269,
          y: 7.56396341,
          z: 292.666962,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 122.436058,
          y: 7.56396341,
          z: 292.667,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 122.436058,
          y: 7.56396341,
          z: 292.667,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 122.436058,
          y: 7.56396341,
          z: 292.667,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 122.436058,
          y: 7.56396341,
          z: 292.667,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 142.629883,
          y: 3.90499973,
          z: 315.863739,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 208.608,
          y: 7.785,
          z: 304.256,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 195.182,
          y: 4.07599974,
          z: 289.424042,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 205.241486,
          y: 4.94499969,
          z: 300.395,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 136.809219,
          y: 3.20086884,
          z: 443.559448,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 144.709656,
          y: 6.98867559,
          z: 454.6855,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 144.709656,
          y: 6.98867559,
          z: 454.6855,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 144.709656,
          y: 6.98867559,
          z: 454.6855,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 144.462952,
          y: 6.98900032,
          z: 454.541565,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 144.3712,
          y: 6.59548759,
          z: 455.248962,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 136.0002,
          y: 3.06148744,
          z: 444.168945,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 140.891571,
          y: 3.43975925,
          z: 442.570984,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 120.822571,
          y: 3.27675915,
          z: 435.682983,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 155.060684,
          y: 4.37175941,
          z: 439.83847,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 128.1212,
          y: 5.44748735,
          z: 436.134949,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 145.2972,
          y: 3.49748755,
          z: 453.643951,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 130.8552,
          y: 2.8514874,
          z: 436.858948,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 116.995209,
          y: 3.22775936,
          z: 463.172943,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 126.821571,
          y: 3.39975929,
          z: 427.182983,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 141.099564,
          y: 4.172759,
          z: 435.69,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 136.264191,
          y: 6.58848763,
          z: 441.536957,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 135.60202,
          y: 3.67699957,
          z: 416.912,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 39.2129974,
          y: 2.984349,
          z: 376.687,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 91.38808,
          y: 3.68113232,
          z: 393.138641,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 48.2709961,
          y: 3.1288,
          z: 397.629,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 229.5379,
          y: 5.30650663,
          z: 488.9228,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 218.8843,
          y: 4.855964,
          z: 484.5355,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 275.673553,
          y: 5.684364,
          z: 518.5859,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 267.336,
          y: 4.887,
          z: 515.37,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 220.953,
          y: 5.16794062,
          z: 488.837036,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 236.224991,
          y: 4.7589407,
          z: 495.210022,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 232.14035,
          y: 4.87394047,
          z: 495.65686,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 268.384644,
          y: 5.36994076,
          z: 511.3702,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 221.651627,
          y: 4.9378,
          z: 485.18158,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 227.8017,
          y: 5.79598951,
          z: 489.138428,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 268.7335,
          y: 5.787864,
          z: 512.7532,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 231.964874,
          y: 4.42244053,
          z: 500.327026,
        },
      },
    ],
    stationaryWeapons: [
      {
        stationaryWeapon: {
          id: '5cdeb229d7f00c000e7ce174',
          name: 'NSV “Utes” 12.7x108机关枪',
          shortName: 'NSV',
        },
        position: {
          x: -157.6173,
          y: 10.801,
          z: -1.43846512,
        },
      },
      {
        stationaryWeapon: {
          id: '5cdeb229d7f00c000e7ce174',
          name: 'NSV “Utes” 12.7x108机关枪',
          shortName: 'NSV',
        },
        position: {
          x: 58.05069,
          y: 12.814743,
          z: 271.151337,
        },
      },
      {
        stationaryWeapon: {
          id: '5cdeb229d7f00c000e7ce174',
          name: 'NSV “Utes” 12.7x108机关枪',
          shortName: 'NSV',
        },
        position: {
          x: 73.61781,
          y: 3.74274325,
          z: 285.566742,
        },
      },
      {
        stationaryWeapon: {
          id: '5cdeb229d7f00c000e7ce174',
          name: 'NSV “Utes” 12.7x108机关枪',
          shortName: 'NSV',
        },
        position: {
          x: 200.297073,
          y: 7.85874367,
          z: 307.878235,
        },
      },
      {
        stationaryWeapon: {
          id: '5cdeb229d7f00c000e7ce174',
          name: 'NSV “Utes” 12.7x108机关枪',
          shortName: 'NSV',
        },
        position: {
          x: 85.7245941,
          y: 3.757744,
          z: 323.170044,
        },
      },
      {
        stationaryWeapon: {
          id: '5cdeb229d7f00c000e7ce174',
          name: 'NSV “Utes” 12.7x108机关枪',
          shortName: 'NSV',
        },
        position: {
          x: 47.3638763,
          y: 12.7126083,
          z: 142.524628,
        },
      },
      {
        stationaryWeapon: {
          id: '5d52cc5ba4b9367408500062',
          name: 'AGS 30x29毫米自动榴弹发射器',
          shortName: 'AGS',
        },
        position: {
          x: 64.71942,
          y: 6.504743,
          z: 266.183838,
        },
      },
      {
        stationaryWeapon: {
          id: '5d52cc5ba4b9367408500062',
          name: 'AGS 30x29毫米自动榴弹发射器',
          shortName: 'AGS',
        },
        position: {
          x: 80.81985,
          y: 6.619527,
          z: 324.1236,
        },
      },
    ],
  },
  {
    key: 'ground-zero',
    altMaps: [
      'ground-zero-21',
    ],
    projection: 'interactive',
    tileSize: 256,
    minZoom: 1,
    maxZoom: 6,
    transform: [
      0.524,
      167.3,
      0.524,
      65.1,
    ],
    coordinateRotation: 180,
    bounds: [
      [
        249,
        -124,
      ],
      [
        -99,
        364,
      ],
    ],
    heightRange: [
      -1000,
      28,
    ],
    author: 'Tarkov.dev',
    authorLink: 'https://tarkov.dev',
    svgPath: 'https://assets.tarkov.dev/maps/svg/GroundZero-Ground_Level.svg',
    tilePath: 'https://assets.tarkov.dev/maps/groundzero/main/{z}/{x}/{y}.png',
    layers: [
      {
        name: 'Garage',
        svgPath: 'https://assets.tarkov.dev/maps/svg/GroundZero-Underground_Level.svg',
        tilePath: 'https://assets.tarkov.dev/maps/groundzero/garage/{z}/{x}/{y}.png',
        show: false,
        extents: [
          {
            height: [
              -1000,
              21,
            ],
            bounds: [
              [
                [
                  117,
                  -100,
                ],
                [
                  43,
                  190,
                ],
                'garage',
              ],
              [
                [
                  143,
                  49,
                ],
                [
                  117,
                  80,
                ],
                'underpass',
              ],
            ],
          },
        ],
      },
      {
        name: '2nd Floor',
        svgPath: 'https://assets.tarkov.dev/maps/svg/GroundZero-Second_Floor.svg',
        tilePath: 'https://assets.tarkov.dev/maps/groundzero/2nd/{z}/{x}/{y}.png',
        show: false,
        extents: [
          {
            height: [
              28,
              32.3,
            ],
          },
          {
            height: [
              26,
              31,
            ],
            bounds: [
              [
                [
                  98,
                  216,
                ],
                [
                  91,
                  228,
                ],
                'm showroom',
              ],
            ],
          },
        ],
      },
      {
        name: '3rd Floor',
        svgPath: 'https://assets.tarkov.dev/maps/svg/GroundZero-Third_Floor.svg',
        tilePath: 'https://assets.tarkov.dev/maps/groundzero/3rd/{z}/{x}/{y}.png',
        show: false,
        extents: [
          {
            height: [
              32.3,
              1000,
            ],
          },
        ],
      },
    ],
    labels: [
      {
        position: [
          -50,
          0,
        ],
        text: 'TerraGroup',
      },
      {
        position: [
          150,
          1,
        ],
        text: 'Skyside',
      },
      {
        position: [
          141,
          142,
        ],
        text: 'Fusion',
      },
      {
        position: [
          14,
          201,
        ],
        text: 'Empire',
      },
      {
        position: [
          115,
          285,
        ],
        text: 'Capital Insight',
      },
      {
        position: [
          2,
          324,
        ],
        text: 'Nakatani',
      },
      {
        position: [
          80,
          -118,
        ],
        text: 'Elemental Global',
      },
      {
        position: [
          115,
          104,
        ],
        text: 'Oasis',
        size: 70,
      },
      {
        position: [
          115,
          30,
        ],
        text: 'ASAP Winery',
        size: 70,
      },
      {
        position: [
          43,
          150,
        ],
        text: 'Tarbank',
        size: 70,
      },
      {
        position: [
          58,
          234,
        ],
        text: 'GAGRIN Hotel',
        size: 70,
      },
      {
        position: [
          97,
          223,
        ],
        text: 'M Showroom',
        size: 70,
      },
      {
        position: [
          -13,
          48,
        ],
        text: 'Science Office',
        top: 28,
        bottom: 28,
        size: 60,
      },
    ],
    id: '65b8d6f5cdde2479cb2a3125',
    tarkovDataId: null,
    name: '中心区 21+',
    normalizedName: 'ground-zero-21',
    wiki: 'https://escapefromtarkov.fandom.com/wiki/Ground_Zero',
    description: 'The business center of Tarkov. This is where TerraGroup was headquartered. This is where it all began.',
    enemies: [
      'Scav',
      '狙击手',
      'Kollontay',
      ' 保镖 (Security)',
      '邪教徒牧师',
      '邪教徒战士',
    ],
    raidDuration: 35,
    players: '9-12',
    bosses: [
      {
        boss: {
          id: 'bossKolontay',
          name: 'Kollontay',
          normalizedName: 'kollontay',
          imagePortraitLink: 'https://assets.tarkov.dev/kollontay-portrait.png',
          imagePosterLink: 'https://assets.tarkov.dev/kollontay-poster.jpg',
        },
        spawnChance: 0.15,
        spawnLocations: [
          {
            spawnKey: 'ZoneSandbox',
            name: 'Any scav spawn',
            chance: 1,
          },
        ],
      },
      {
        boss: {
          id: 'sectantPriest',
          name: '邪教徒牧师',
          normalizedName: 'cultist-priest',
          imagePortraitLink: 'https://assets.tarkov.dev/cultist-priest-portrait.png',
          imagePosterLink: 'https://assets.tarkov.dev/cultist-priest-poster.jpg',
        },
        spawnChance: 0.02,
        spawnLocations: [
          {
            spawnKey: 'ZoneSandbox',
            name: 'Any scav spawn',
            chance: 1,
          },
        ],
      },
    ],
    spawns: [
      {
        zoneName: '0344832c-a6f2-4c58-8d89-85e9d451a7ed',
        position: {
          x: 72.81,
          y: 14.18,
          z: 5.44599962,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '0524be03-bcd4-4e28-98d4-f477dd0e550d',
        position: {
          x: 65.03,
          y: 14.722,
          z: 161.741,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '0b110691-b8a9-4020-9ea1-910386dde586',
        position: {
          x: 127.158,
          y: 23.21,
          z: 187.909,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 45.6098022,
          y: 23.30565,
          z: -99.78419,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '0dadcf0c-b3b8-4837-a16e-12ef201c21e1',
        position: {
          x: 67.59,
          y: 14.18,
          z: 104.54,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 73.69881,
          y: 14.1636515,
          z: 117.034813,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '0eebe151-c53b-417e-a349-18c070ce5dac',
        position: {
          x: 137.37,
          y: 22.74,
          z: -70.18,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 26.6068039,
          y: 23.86865,
          z: -26.9641876,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: -12.6441956,
          y: 23.8186512,
          z: -59.9541855,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '14e76203-f6d3-49d3-bb5e-300ff6bd3773',
        position: {
          x: 121.832,
          y: 22.796,
          z: -1.133,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '16b9cd7d-ebea-41eb-8c9f-fe01aa2c9245',
        position: {
          x: 111.243,
          y: 23.193,
          z: 174.479,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1c2fe835-f486-4f7e-847d-9ff1dfadc5c5',
        position: {
          x: 180.9,
          y: 16.27,
          z: 114.89,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1d60dfbb-d470-4557-8309-deb68d3cd7a4',
        position: {
          x: 184.961,
          y: 17.209,
          z: -8.589,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 44.2268066,
          y: 23.30565,
          z: -104.874191,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: -15.6471939,
          y: 23.87565,
          z: 101.716812,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 13.4328041,
          y: 23.48965,
          z: 157.559814,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '2251a0dd-f096-483c-88c6-d8abe1f0a8d8',
        position: {
          x: 117.106,
          y: 28.963,
          z: 150.689,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '22c535e6-6d49-46bd-9009-e688aace63d1',
        position: {
          x: 38.43,
          y: 23.44,
          z: 149.07,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 180.1868,
          y: 16.21865,
          z: 128.1658,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 17.0218048,
          y: 24.20565,
          z: 66.79081,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 96.2568054,
          y: 22.87865,
          z: -85.19419,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '2790d68f-c087-45d2-8b63-660e26858b34',
        position: {
          x: 143.1,
          y: 23.3,
          z: 248.83,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: -49.8631973,
          y: 24.19465,
          z: 42.17581,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 98.94981,
          y: 22.87865,
          z: -85.03119,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '31fca074-b125-48d7-9beb-4cc6f67c82d2',
        position: {
          x: 110.661,
          y: 23.193,
          z: 171.344,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '36a3716c-e3f2-43c7-8b98-ea68c59f8238',
        position: {
          x: -8.020001,
          y: 23.86,
          z: -4.959993,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 58.3678055,
          y: 23.4366512,
          z: 229.1268,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '3c5c66f2-5ce2-443f-b962-8938f67bf2b4',
        position: {
          x: 1.43,
          y: 23.89,
          z: -60.42,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '3d869992-11e2-4ebf-9d24-f160b612ed17',
        position: {
          x: 112.67,
          y: 23.193,
          z: 175.8,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 164.696808,
          y: 22.768652,
          z: -85.8841858,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 29.9268036,
          y: 23.86865,
          z: -25.2141876,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '412cc11b-b2ec-4d7b-bfbe-9691162949b7',
        position: {
          x: 67.764,
          y: 13.981,
          z: 163.128,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '419a0f20-e32e-4f17-a526-675314485814',
        position: {
          x: -0.66,
          y: 23.89,
          z: -60.43,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4274c09b-9544-45e0-aa8a-011b6e929b70',
        position: {
          x: 73.06999,
          y: 14.18,
          z: 2.27599764,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '442298dc-403c-4550-9c2f-60398a638c07',
        position: {
          x: 73.09,
          y: 14.147,
          z: -56.52,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 71.7568054,
          y: 14.1386509,
          z: 0.6758108,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 36.1368027,
          y: 22.6686516,
          z: 334.6858,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '45bf1ce6-cab7-4b6b-a420-aefc135a942a',
        position: {
          x: 64.94,
          y: 14.14,
          z: 103.31,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '469bf936-cee9-4b9c-9fa9-54ccdc5467f2',
        position: {
          x: 139.255,
          y: 14.088,
          z: 65.609,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '46cb5fbc-3d56-45a1-a6ab-18b22b51cf15',
        position: {
          x: 36.95,
          y: 23.47,
          z: 146.98,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4a3e3ae1-e6fb-442f-99c6-f74b25b06a28',
        position: {
          x: 127.454,
          y: 23.204,
          z: 196.106,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4ad4b25c-70f0-47a0-84fd-f8dc685cf399',
        position: {
          x: -6.32000065,
          y: 23.86,
          z: -2.03999472,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4e5dd2d4-cbee-4f97-8f88-18b9a7897e72',
        position: {
          x: 127.266,
          y: 23.199,
          z: 186.033,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '5051d4e9-291a-4384-9557-e10d149f3282',
        position: {
          x: 44.67,
          y: 23.276,
          z: -102.55,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '52521917-58bb-412f-b509-ed69191bf6a3',
        position: {
          x: 113.965996,
          y: 23.448,
          z: 269.982,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '551f5ea8-4bea-474d-a3d1-0af1e507aa73',
        position: {
          x: 75.1199951,
          y: 14.18,
          z: 6.036,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '564c09fb-f464-4c30-b61b-4cc1943808be',
        position: {
          x: 102.15,
          y: 28.1424046,
          z: 311.83,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 71.866806,
          y: 14.1386509,
          z: -13.0741882,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '5a4e21b9-8234-45a5-b24a-1cd71ffc9d4a',
        position: {
          x: 117.61,
          y: 28.963,
          z: 146.43,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: -60.6341934,
          y: 24.19465,
          z: 43.00981,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneSandSnipeCenter',
        position: {
          x: 104.531586,
          y: 33.44029,
          z: 107.521042,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '5cb1309d-05b9-4043-ba3a-1ef53d52c012',
        position: {
          x: 40.19,
          y: 23.45,
          z: 148.61,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '5d711f09-edc9-4ec1-94f8-2e1765929dbd',
        position: {
          x: 73.815,
          y: 14.147,
          z: -54.394,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '5fa59046-4e17-408e-8531-14766ae4a7c4',
        position: {
          x: 117.49,
          y: 28.963,
          z: 148.6,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '612fd960-fdd6-422b-9b5b-8161d4e5ec12',
        position: {
          x: 72.331,
          y: 14.147,
          z: -51.719,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 22.2868042,
          y: 23.53865,
          z: 255.1308,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '61bc3b0f-bbb7-41a6-a3cb-fc647cb4d57d',
        position: {
          x: 137.174,
          y: 14.088,
          z: 67.36,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '65f10e3a-3f0c-415a-82c9-65c494071117',
        position: {
          x: 131.006,
          y: 23.45,
          z: 268.826,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 180.9668,
          y: 16.21865,
          z: 130.085815,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '6a18e621-14cc-4de5-83e9-4dbb5d57db3d',
        position: {
          x: 180.8,
          y: 16.21,
          z: 117.5,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 137.5668,
          y: 14.1126509,
          z: 61.81581,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '6a4b6afe-e215-4d9b-8d1e-4c2f7187baef',
        position: {
          x: 46.38,
          y: 23.276,
          z: -101.48,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '6acdf3c0-2c89-4824-97b9-7d5d10969670',
        position: {
          x: 64.41,
          y: 14.702,
          z: 164.414,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 175.106812,
          y: 16.9956512,
          z: 2.17581081,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '6b4a840c-fc42-4b8c-bc68-04d7f6c2113a',
        position: {
          x: 151.47,
          y: 22.85,
          z: 243.36,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '6bb1d97d-c152-4467-b67b-bcd052438a96',
        position: {
          x: 180.58,
          y: 16.2,
          z: 123.16,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 130.6398,
          y: 14.1126509,
          z: 63.12081,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '6f70381f-dcd2-4b4b-8f7e-27a787298af6',
        position: {
          x: -4.45,
          y: 23.89,
          z: -58.9,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 22.8788033,
          y: 23.53865,
          z: 253.499817,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 182.9868,
          y: 16.21865,
          z: 127.555809,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '71e27ce2-54ef-4070-942c-c8a136e81fcf',
        position: {
          x: 113.345993,
          y: 23.448,
          z: 273.162,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '734798e9-93cc-4239-93eb-8f23476b1f3d',
        position: {
          x: 137.609,
          y: 14.088,
          z: 63.101,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '74ce5970-afa4-4bfa-9a57-5f1725adb6f6',
        position: {
          x: 73.57,
          y: 14.147,
          z: -48.848,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '74da28f8-d773-4ede-9c03-83811cf9563f',
        position: {
          x: 74.271,
          y: 14.147,
          z: -51.551,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 109.116806,
          y: 22.70865,
          z: 234.205811,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 26.1368027,
          y: 23.86865,
          z: -24.01419,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '75f2a001-06c8-40a2-99f0-715c75b38138',
        position: {
          x: 135.18,
          y: 14.088,
          z: 66.07,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '76076875-b690-43f3-8917-68f7b077742f',
        position: {
          x: 117.819,
          y: 28.963,
          z: 152.665,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '7650aa3e-7ab6-4e76-9b71-af60211b4ad1',
        position: {
          x: 143.83,
          y: 22.74,
          z: -71.39,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '7689966a-e33d-45af-bec8-7f4161438b74',
        position: {
          x: 133.66,
          y: 23.45,
          z: 268.62,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: -13.1111984,
          y: 23.87565,
          z: 98.92881,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 18.5388031,
          y: 24.20565,
          z: 73.82181,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 22.6368027,
          y: 23.53865,
          z: 257.9848,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '7abcf691-7aa8-4dff-a592-5cd860701676',
        position: {
          x: 121.494,
          y: 22.834,
          z: -2.778,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: -10.7931976,
          y: 23.982048,
          z: 16.7358112,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '7b81d205-9028-4a06-81ce-b1d73922fce0',
        position: {
          x: 115.777,
          y: 23.426,
          z: 274.272,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '7f0d4fce-32a8-4d9a-ac19-d27ab617a45a',
        position: {
          x: 132.107,
          y: 23.45,
          z: 270.349,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '811063e9-7b4c-4e88-b571-dda14fc5c422',
        position: {
          x: 111.826,
          y: 23.448,
          z: 269.082,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '818d8bb3-2bb9-4323-be8a-f03b1cfc2137',
        position: {
          x: 143.33,
          y: 22.74,
          z: -69.41,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '894397aa-eb45-4371-a2da-dcaa55bbc2df',
        position: {
          x: 111.535995,
          y: 23.448,
          z: 271.632,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8991994e-2dd2-4335-8fb9-5f906a80c0f8',
        position: {
          x: 179.893,
          y: 17.01,
          z: -6.997,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8a478f38-07d3-4e3d-8322-d2f1f6137aff',
        position: {
          x: 99.644,
          y: 28.1424046,
          z: 314.177,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8aa4f53e-1ecd-4bda-900a-3c650e197c8e',
        position: {
          x: 134.04,
          y: 23.45,
          z: 271.91,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 32.7768021,
          y: 22.6686516,
          z: 335.6558,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '8e2cf7d7-6b81-4686-be31-1f169492165f',
        position: {
          x: 144.95,
          y: 22.949,
          z: 253.29,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 46.5608063,
          y: 23.30565,
          z: -102.121193,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '8e70071b-0949-4f6a-b106-dcc689714e07',
        position: {
          x: 109.208,
          y: 23.193,
          z: 174.245,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8f3bef35-3e52-47ec-a072-02b3ad071433',
        position: {
          x: 183.821,
          y: 17.209,
          z: -6.948,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 72.74081,
          y: 14.1386509,
          z: 29.96981,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '96c84440-4cc8-410e-afd2-15dc920dca8b',
        position: {
          x: 147.74,
          y: 23.3,
          z: 253.63,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 96.9698,
          y: 22.87865,
          z: -86.9261856,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 57.486805,
          y: 14.0686512,
          z: -33.82419,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '989cfb81-3a2e-4cef-b3c1-a2a914dceaad',
        position: {
          x: 119.189,
          y: 22.834,
          z: -2.685,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 57.486805,
          y: 23.4366512,
          z: 229.5658,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '9c0e31a8-2008-41ef-b42b-b8888cc523ba',
        position: {
          x: 142.85,
          y: 22.74,
          z: -67.64,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '9cc6b2c3-948c-4902-8344-fa12d0c0e700',
        position: {
          x: 135.85,
          y: 14.088,
          z: 68.92,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '9fbe814b-9217-4d81-84c2-cc43e67f7bda',
        position: {
          x: 117.413,
          y: 28.963,
          z: 154.495,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 133.4458,
          y: 14.1126509,
          z: 66.43681,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'a5654bc0-d8a6-4897-9f9a-768c4af478c1',
        position: {
          x: -8.37,
          y: 23.86,
          z: -0.3899932,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 72.76581,
          y: 14.2016516,
          z: 113.208809,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'a8b2e367-82fd-4e64-a37c-906955df399f',
        position: {
          x: 67.72,
          y: 13.981,
          z: 164.591,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'a9f2fbc7-fa61-4538-9e91-39ca505f86e7',
        position: {
          x: -11.19,
          y: 23.86,
          z: -2.8199935,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: -15.4731979,
          y: 23.8186512,
          z: -56.62419,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'b2d85104-d574-4482-8962-9dbeae1221f5',
        position: {
          x: 74.228,
          y: 14.18,
          z: 8.865999,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'b5e02957-b03d-4295-b05d-9be69f6f2e82',
        position: {
          x: 67.816,
          y: 13.981,
          z: 166.22,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'b7183870-a16c-4429-a8e7-2c2710fe3b57',
        position: {
          x: 103.8,
          y: 28.1424046,
          z: 316.122,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ba5a0138-2a24-4ceb-bdb2-92d351fec342',
        position: {
          x: 42.021,
          y: 23.276,
          z: -104.487,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandSnipeCenter2',
        position: {
          x: 61.6479034,
          y: 35.4903679,
          z: 133.8455,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'c081b15d-fb2d-4a02-afeb-b0664e2bdb02',
        position: {
          x: 38.7,
          y: 23.48,
          z: 147.19,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'c106dee0-2b28-461f-8d43-1ca961ff1d04',
        position: {
          x: 127.225,
          y: 23.225,
          z: 192.607,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: -60.1112,
          y: 24.19465,
          z: 37.58181,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 162.2768,
          y: 22.768652,
          z: -86.23419,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 74.6868057,
          y: 13.9586515,
          z: 160.9158,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 72.22681,
          y: 13.9586515,
          z: 159.3858,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'c6b7ada3-06e1-4c17-bbfc-805297968e04',
        position: {
          x: 101.579,
          y: 28.1424046,
          z: 314.783,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 73.880806,
          y: 14.1386509,
          z: 37.23281,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'c83cfa66-d6c2-4b78-8dfd-23d3fc83413c',
        position: {
          x: 147.55,
          y: 23.3,
          z: 250.06,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'c94a8465-be54-4bf3-833b-b83822b582df',
        position: {
          x: 176.79,
          y: 17.01,
          z: -6.32,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'cbf941fc-9b66-4a2c-aa00-b1d9b1ba7f9f',
        position: {
          x: 177.581,
          y: 17.01,
          z: -4.079,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'cc5ed6f2-1e4e-43d4-9ad4-9fc3aaf1e162',
        position: {
          x: -11,
          y: 23.86,
          z: -5.77,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 57.236805,
          y: 14.0986509,
          z: -31.15419,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ced4b14f-e478-467d-bed1-0314278e555a',
        position: {
          x: 101.809,
          y: 28.1424046,
          z: 317.117,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: -10.5931931,
          y: 23.982048,
          z: 22.86581,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'd4f55d16-038b-455e-bc9a-74a49e57ab89',
        position: {
          x: 119.705,
          y: 22.834,
          z: -4.314,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 163.6168,
          y: 22.768652,
          z: -88.24419,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'd9e3c316-cf61-454b-8fca-aae78f2c0622',
        position: {
          x: 136.6,
          y: 22.74,
          z: -66.89,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 11.1888046,
          y: 23.48965,
          z: 159.016815,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'db5b9d0d-3105-4814-b413-03d28d4a87d2',
        position: {
          x: 47.123,
          y: 23.276,
          z: -103.068,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'dcbe096a-7083-4dc0-a7e2-8149e7c153d4',
        position: {
          x: 130.538,
          y: 23.45,
          z: 271.616,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 57.717804,
          y: 23.4366512,
          z: 226.737823,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'de5f4d8c-1411-446e-b67b-269830a40a15',
        position: {
          x: 60.9,
          y: 14.18,
          z: 105.16,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'df92e08a-08a9-4a19-8b90-cc8aa13b3062',
        position: {
          x: 122.356,
          y: 22.834,
          z: -4.153,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: -10.4581985,
          y: 23.982048,
          z: 19.6548119,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 8.986805,
          y: 23.48965,
          z: 158.425812,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'e545318d-f757-4a76-90be-079bf41998d2',
        position: {
          x: 180.81,
          y: 16.24,
          z: 119.29,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 55.2668037,
          y: 14.0686512,
          z: -32.35419,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: -14.633194,
          y: 23.8186512,
          z: -58.76419,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 11.5208054,
          y: 23.48965,
          z: 156.3288,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'eaa886c4-d771-4f7d-89f8-03b0c6d38365',
        position: {
          x: 110.82,
          y: 23.193,
          z: 176.03,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'eb268aaa-dfde-4021-bdfa-44faed92c139',
        position: {
          x: 64.88,
          y: 14.22,
          z: 105.85,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ec099d7a-f15a-488b-8402-4113f56c5822',
        position: {
          x: 180.85,
          y: 16.24,
          z: 121.4,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ec13b292-f7ef-4a17-85ae-84b356502878',
        position: {
          x: 4.36,
          y: 23.89,
          z: -59.74,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 17.0988045,
          y: 24.20565,
          z: 73.366806,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 172.2468,
          y: 16.9886513,
          z: 9.425811,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'f2187ee3-7751-441b-a7ef-b88e072a94c3',
        position: {
          x: -2.8,
          y: 23.89,
          z: -59.58,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 109.396805,
          y: 22.688652,
          z: 239.435822,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'f2a7bbe4-cd32-4e72-875e-3624083ec8e8',
        position: {
          x: 44.427,
          y: 23.276,
          z: -104.867,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'f5481928-9ee3-47cd-8998-77edfd1626d3',
        position: {
          x: 74.49,
          y: 14.18,
          z: 10.55,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'f5ba4d5f-08f4-411d-b246-2bac60595f01',
        position: {
          x: 66.95,
          y: 14.18,
          z: 107.25,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 176.3018,
          y: 16.9956512,
          z: 10.2488108,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'f76c3749-0412-41cb-a61c-0d7bca49e779',
        position: {
          x: 127.474,
          y: 23.225,
          z: 194.108,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'fc1387ee-e540-4433-9022-d3c53a04b8c2',
        position: {
          x: 39.85,
          y: 23.42,
          z: 150.63,
        },
        sides: [
          'all',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 112.2068,
          y: 22.688652,
          z: 220.925812,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneSandbox',
        position: {
          x: 71.97681,
          y: 14.1386509,
          z: 20.19581,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
    ],
    extracts: [
      {
        id: '78b945ec320190d896a16bda3066892d9368bf17',
        name: '警方封锁线（载具撤离点）',
        faction: 'pmc',
        switches: [],
        position: {
          x: -19.5134068,
          y: 23.7110023,
          z: 114.942139,
        },
        outline: [
          {
            x: -22.1185246,
            y: 23.7110023,
            z: 110.356392,
          },
          {
            x: -22.1185226,
            y: 23.7110023,
            z: 110.356392,
          },
          {
            x: -16.9581242,
            y: 23.7110023,
            z: 110.328438,
          },
          {
            x: -16.9581223,
            y: 23.7110023,
            z: 110.328438,
          },
          {
            x: -16.90829,
            y: 23.7110023,
            z: 119.527878,
          },
          {
            x: -22.0686913,
            y: 23.7110023,
            z: 119.555832,
          },
        ],
        top: 24.9210052,
        bottom: 22.5010014,
      },
      {
        id: 'c812e0bac1d630c34af374428e34cf10dc344e9b',
        name: 'Emercom检查点',
        faction: 'shared',
        switches: [],
        position: {
          x: 151.625,
          y: 24.662056,
          z: -97.45658,
        },
        outline: [
          {
            x: 142.220459,
            y: 24.662056,
            z: -106.067726,
          },
          {
            x: 161.029541,
            y: 24.662056,
            z: -106.067726,
          },
          {
            x: 161.029541,
            y: 24.662056,
            z: -88.8454361,
          },
          {
            x: 142.220459,
            y: 24.662056,
            z: -88.8454361,
          },
        ],
        top: 26.7090569,
        bottom: 22.6150551,
      },
      {
        id: '4fdf4eeb9e65607d68760103109e9e72dd5d816e',
        name: 'Scav检查站（合作撤离点）',
        faction: 'shared',
        switches: [],
        position: {
          x: 25.2195644,
          y: 24.5091858,
          z: -79.5413742,
        },
        outline: [
          {
            x: 16.182127,
            y: 24.5091858,
            z: -89.90186,
          },
          {
            x: 34.2570038,
            y: 24.5091858,
            z: -89.90186,
          },
          {
            x: 34.2570038,
            y: 24.5091858,
            z: -69.1808853,
          },
          {
            x: 16.182127,
            y: 24.5091858,
            z: -69.1808853,
          },
        ],
        top: 26.5561867,
        bottom: 22.4621849,
      },
      {
        id: '1bb328c35dbf9c2127defe6df5a48c630ece92a1',
        name: 'Nakatani地下室楼梯',
        faction: 'shared',
        switches: [],
        position: {
          x: -16.1249924,
          y: 14.7620564,
          z: 335.063416,
        },
        outline: [
          {
            x: -17.98841,
            y: 14.7620564,
            z: 329.6299,
          },
          {
            x: -14.2615747,
            y: 14.7620564,
            z: 329.6299,
          },
          {
            x: -14.2615747,
            y: 14.7620564,
            z: 340.4969,
          },
          {
            x: -17.98841,
            y: 14.7620564,
            z: 340.4969,
          },
        ],
        top: 19.61799,
        bottom: 9.906122,
      },
      {
        id: 'd9e23573110e4fe1dbe4a47bc3ba7e316e09cfbc',
        name: 'Mira大道',
        faction: 'pmc',
        switches: [],
        position: {
          x: 218.225,
          y: 17.9920559,
          z: -38.5065842,
        },
        outline: [
          {
            x: 203.108765,
            y: 17.9920559,
            z: -83.10464,
          },
          {
            x: 233.341248,
            y: 17.9920559,
            z: -83.10464,
          },
          {
            x: 233.341248,
            y: 17.9920559,
            z: 6.091469,
          },
          {
            x: 203.108765,
            y: 17.9920559,
            z: 6.091469,
          },
        ],
        top: 20.0390549,
        bottom: 15.945056,
      },
    ],
    hazards: [
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: 227.853851,
          y: 27.1399918,
          z: -42.09,
        },
        outline: [
          {
            x: 203.016312,
            y: 27.1399918,
            z: -107.963806,
          },
          {
            x: 253.052368,
            y: 27.1399918,
            z: -107.826569,
          },
          {
            x: 252.6914,
            y: 27.1399918,
            z: 23.7837982,
          },
          {
            x: 202.655334,
            y: 27.1399918,
            z: 23.6465645,
          },
        ],
        top: 39.82466,
        bottom: 14.4553223,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: -88.15002,
          y: 31.409996,
          z: 137.459991,
        },
        outline: [
          {
            x: -153.252533,
            y: 31.409996,
            z: 94.64397,
          },
          {
            x: -24.034996,
            y: 31.409996,
            z: 93.17892,
          },
          {
            x: -23.0475,
            y: 31.409996,
            z: 180.276031,
          },
          {
            x: -152.26503,
            y: 31.409996,
            z: 181.741089,
          },
        ],
        top: 44.0946655,
        bottom: 18.7253265,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: -45.80002,
          y: 31.409996,
          z: 295.74,
        },
        outline: [
          {
            x: -85.43869,
            y: 31.409996,
            z: 277.291321,
          },
          {
            x: -6.589813,
            y: 31.409996,
            z: 276.397339,
          },
          {
            x: -6.16134262,
            y: 31.409996,
            z: 314.18866,
          },
          {
            x: -85.0102158,
            y: 31.409996,
            z: 315.082642,
          },
        ],
        top: 44.0946655,
        bottom: 18.7253265,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: -69.20001,
          y: 31.409996,
          z: 289.199982,
        },
        outline: [
          {
            x: -108.936935,
            y: 31.409996,
            z: 262.085327,
          },
          {
            x: -30.088068,
            y: 31.409996,
            z: 261.1913,
          },
          {
            x: -29.4630871,
            y: 31.409996,
            z: 316.3147,
          },
          {
            x: -108.311958,
            y: 31.409996,
            z: 317.208679,
          },
        ],
        top: 44.0946655,
        bottom: 18.7253265,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 220.805481,
          y: 15.6500015,
          z: 133.905258,
        },
        outline: [
          {
            x: 205.079742,
            y: 15.6500015,
            z: 130.34462,
          },
          {
            x: 238.489258,
            y: 15.6500015,
            z: 127.732925,
          },
          {
            x: 236.531158,
            y: 15.6500015,
            z: 137.4659,
          },
          {
            x: 203.121674,
            y: 15.6500015,
            z: 140.077591,
          },
        ],
        top: 31.7150021,
        bottom: -0.4149971,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 222.7634,
          y: 15.6500015,
          z: 175.468857,
        },
        outline: [
          {
            x: 188.043777,
            y: 15.6500015,
            z: 140.842438,
          },
          {
            x: 262.147522,
            y: 15.6500015,
            z: 135.464767,
          },
          {
            x: 257.483032,
            y: 15.6500015,
            z: 210.095276,
          },
          {
            x: 183.379272,
            y: 15.6500015,
            z: 215.472931,
          },
        ],
        top: 31.7150021,
        bottom: -0.4149971,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 59.784,
          y: 23.8979988,
          z: 170.7,
        },
        outline: [
          {
            x: 59.13831,
            y: 23.8979988,
            z: 169.858521,
          },
          {
            x: 60.6254768,
            y: 23.8979988,
            z: 170.0543,
          },
          {
            x: 60.4296875,
            y: 23.8979988,
            z: 171.541473,
          },
          {
            x: 58.94252,
            y: 23.8979988,
            z: 171.345688,
          },
        ],
        top: 24.3979988,
        bottom: 23.3979988,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 59.721,
          y: 23.8979988,
          z: 170.799,
        },
        outline: [
          {
            x: 58.971,
            y: 23.8979988,
            z: 170.049,
          },
          {
            x: 60.471,
            y: 23.8979988,
            z: 170.049,
          },
          {
            x: 60.471,
            y: 23.8979988,
            z: 171.549,
          },
          {
            x: 58.971,
            y: 23.8979988,
            z: 171.549,
          },
        ],
        top: 24.3979988,
        bottom: 23.3979988,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 59.834,
          y: 23.8979988,
          z: 170.875992,
        },
        outline: [
          {
            x: 58.9925232,
            y: 23.8979988,
            z: 170.2303,
          },
          {
            x: 60.47969,
            y: 23.8979988,
            z: 170.034515,
          },
          {
            x: 60.67548,
            y: 23.8979988,
            z: 171.521683,
          },
          {
            x: 59.18831,
            y: 23.8979988,
            z: 171.717468,
          },
        ],
        top: 24.3979988,
        bottom: 23.3979988,
      },
    ],
    lootContainers: [
      {
        lootContainer: {
          id: '658420d8085fea07e674cdb6',
          name: '死去的平民',
          normalizedName: 'dead-civilian',
        },
        position: {
          x: 79.82588,
          y: 22.737,
          z: 242.33963,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 82.9592,
          y: 23.4532738,
          z: 241.411377,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 83.56084,
          y: 23.0361881,
          z: 240.988251,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 35.90251,
          y: 22.9930649,
          z: -80.03077,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 52.62951,
          y: 22.7500153,
          z: 114.745689,
        },
      },
      {
        lootContainer: {
          id: '658420d8085fea07e674cdb6',
          name: '死去的平民',
          normalizedName: 'dead-civilian',
        },
        position: {
          x: 80.51353,
          y: 22.74403,
          z: 81.70168,
        },
      },
      {
        lootContainer: {
          id: '658420d8085fea07e674cdb6',
          name: '死去的平民',
          normalizedName: 'dead-civilian',
        },
        position: {
          x: 79.63353,
          y: 22.7360229,
          z: 107.287712,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 114.838493,
          y: 2.98397827,
          z: 509.974762,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 84.20201,
          y: 22.77001,
          z: 134.770966,
        },
      },
      {
        lootContainer: {
          id: '658420d8085fea07e674cdb6',
          name: '死去的平民',
          normalizedName: 'dead-civilian',
        },
        position: {
          x: 74.83215,
          y: 22.6757317,
          z: 91.88204,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 215.870087,
          y: 16.1605988,
          z: 14.7894211,
        },
      },
      {
        lootContainer: {
          id: '6582e6bb0c3b9823fe6d1840',
          name: 'Scav尸体',
          normalizedName: 'scav-body',
        },
        position: {
          x: 213.565063,
          y: 16.1389923,
          z: 38.27491,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 222.411758,
          y: 16.0439911,
          z: 154.11792,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 170.604568,
          y: 16.0732918,
          z: 67.63975,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 225.219131,
          y: 16.14399,
          z: 89.0685349,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: -15.4650116,
          y: 22.76,
          z: 301.532166,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: -6.813999,
          y: 22.7519989,
          z: 299.387,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 5.54368973,
          y: 23.44575,
          z: 295.50647,
        },
      },
      {
        lootContainer: {
          id: '658420d8085fea07e674cdb6',
          name: '死去的平民',
          normalizedName: 'dead-civilian',
        },
        position: {
          x: 234.438126,
          y: 16.1576214,
          z: 62.4971,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 220.280716,
          y: 16.341053,
          z: 126.859695,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.6553879,
          y: 24.2371445,
          z: 171.99295,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.6553879,
          y: 24.2371445,
          z: 171.99295,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.6553879,
          y: 24.2371445,
          z: 171.99295,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 56.6553879,
          y: 24.2371445,
          z: 171.99295,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 54.5070152,
          y: 24.2311211,
          z: 148.031342,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 54.5070152,
          y: 24.2311211,
          z: 148.031342,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 54.5070152,
          y: 24.2311211,
          z: 148.031342,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 54.5070152,
          y: 24.2311211,
          z: 148.031342,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 52.07105,
          y: 24.2385,
          z: 174.019958,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 52.07105,
          y: 24.2385,
          z: 174.019958,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 52.07105,
          y: 24.2385,
          z: 174.019958,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 52.07105,
          y: 24.2385,
          z: 174.496948,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 52.07105,
          y: 24.2385,
          z: 174.496948,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 60.9822159,
          y: 31.1117287,
          z: 134.776276,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 61.4272079,
          y: 31.1117287,
          z: 145.835281,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 59.95133,
          y: 31.1117287,
          z: 147.445038,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 58.9568939,
          y: 31.923,
          z: 145.816925,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 38.5809479,
          y: 31.7079163,
          z: 137.114441,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 38.5809479,
          y: 31.7079163,
          z: 137.114441,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 38.5809479,
          y: 31.7079163,
          z: 137.114441,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 38.5809479,
          y: 31.7079163,
          z: 137.114441,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 38.0929451,
          y: 31.7079163,
          z: 137.114441,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 38.0929451,
          y: 31.7079163,
          z: 137.114441,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 38.0929451,
          y: 31.7079163,
          z: 137.114441,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 38.0929451,
          y: 31.7079163,
          z: 137.114441,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.1404228,
          y: 31.7079163,
          z: 150.374527,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.1404228,
          y: 31.7079163,
          z: 150.374527,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.1404228,
          y: 31.7079163,
          z: 150.374527,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 59.1404228,
          y: 31.7079163,
          z: 150.374527,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.6604233,
          y: 31.7079163,
          z: 150.374527,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.6604233,
          y: 31.7079163,
          z: 150.374527,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.6604233,
          y: 31.7079163,
          z: 150.374527,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 58.6604233,
          y: 31.7079163,
          z: 150.374527,
        },
      },
      {
        lootContainer: {
          id: '658420d8085fea07e674cdb6',
          name: '死去的平民',
          normalizedName: 'dead-civilian',
        },
        position: {
          x: 44.65702,
          y: 22.0125,
          z: 150.05304,
        },
      },
      {
        lootContainer: {
          id: '658420d8085fea07e674cdb6',
          name: '死去的平民',
          normalizedName: 'dead-civilian',
        },
        position: {
          x: 29.564785,
          y: 23.939045,
          z: 8.718117,
        },
      },
      {
        lootContainer: {
          id: '658420d8085fea07e674cdb6',
          name: '死去的平民',
          normalizedName: 'dead-civilian',
        },
        position: {
          x: 51.836998,
          y: 23.5745525,
          z: -54.6975327,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 54.623,
          y: 24.1140461,
          z: 92.63597,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 56.1682358,
          y: 22.7398014,
          z: 70.05502,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 2.13999939,
          y: 23.8230457,
          z: 3.94400024,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 17.7421074,
          y: 25.1818027,
          z: 69.9996643,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 15.8007278,
          y: 24.2740345,
          z: 71.68893,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 64.28,
          y: 23.4480457,
          z: 90.8959656,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 42.71881,
          y: 22.7002048,
          z: 101.456924,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 33.22687,
          y: 23.9430122,
          z: 37.2366867,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 45.4134178,
          y: 24.436285,
          z: 101.119781,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 7.70899963,
          y: 23.9680462,
          z: -0.9820328,
        },
      },
      {
        lootContainer: {
          id: '658420d8085fea07e674cdb6',
          name: '死去的平民',
          normalizedName: 'dead-civilian',
        },
        position: {
          x: 61.65975,
          y: 22.7537022,
          z: 89.4429855,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 16.302002,
          y: 23.9750462,
          z: 83.78197,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 101.96,
          y: 14.823081,
          z: -6.96299744,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 98.396,
          y: 16.084,
          z: 44.3350067,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 97.689,
          y: 16.091,
          z: 44.3840027,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 54.204,
          y: 14.0929995,
          z: -27.8359985,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 101.474,
          y: 15.0640812,
          z: 51.081,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 82.01365,
          y: 14.376,
          z: 181.608673,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 106.301964,
          y: 14.105,
          z: 53.5747681,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: -27.5070038,
          y: 24.3270073,
          z: 55.6059952,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -15.0389633,
          y: 30.4876747,
          z: 39.8383636,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -15.0389633,
          y: 30.4876747,
          z: 39.8383636,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -15.0389633,
          y: 30.4876747,
          z: 39.8383636,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -15.0389633,
          y: 30.4876747,
          z: 39.8383636,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -17.8699646,
          y: 30.4876747,
          z: 39.8393631,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -17.8699646,
          y: 30.4876747,
          z: 39.8393631,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -17.8699646,
          y: 30.4876747,
          z: 39.8393631,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -17.8699646,
          y: 30.4876747,
          z: 39.8393631,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -11.7009659,
          y: 30.4916763,
          z: 39.7893677,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -11.7009659,
          y: 30.4916763,
          z: 39.7893677,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -11.7009659,
          y: 30.4916763,
          z: 39.7893677,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -11.7009659,
          y: 30.4916763,
          z: 39.7893677,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -14.5459671,
          y: 30.4876747,
          z: 39.8383636,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -14.5459671,
          y: 30.4876747,
          z: 39.8383636,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -14.5459671,
          y: 30.4876747,
          z: 39.8383636,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -14.5459671,
          y: 30.4876747,
          z: 39.8383636,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: -36.4220047,
          y: 29.845005,
          z: 66.00299,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: -14.6449966,
          y: 23.9659977,
          z: -26.4980011,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: -47.2868729,
          y: 24.5690746,
          z: 28.0868759,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: -24.677002,
          y: 24.3249969,
          z: -26.7290039,
        },
      },
      {
        lootContainer: {
          id: '6582e6c6edf14c4c6023adf2',
          name: '实验室技术员尸体',
          normalizedName: 'lab-technician-body',
        },
        position: {
          x: -59.3569946,
          y: 24.4230022,
          z: 26.4859924,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -24.3079834,
          y: 30.4973278,
          z: 84.84346,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -24.3079834,
          y: 30.4973278,
          z: 84.84346,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -24.3079834,
          y: 30.4973278,
          z: 84.84346,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -24.3079834,
          y: 30.4973278,
          z: 84.84346,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: -21.7979965,
          y: 23.954998,
          z: -21.875,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: -10.18,
          y: 24.3280048,
          z: 30.5259933,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: -50.293,
          y: 24.3370075,
          z: 44.4989929,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -19.1823578,
          y: 29.9147511,
          z: 55.02748,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -19.2463989,
          y: 29.9147472,
          z: 46.3064651,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -11.52,
          y: 29.9270039,
          z: 54.8289948,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -29.47467,
          y: 29.9167538,
          z: 90.81073,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 22.44902,
          y: 23.9438229,
          z: -49.25274,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 160.829346,
          y: 22.889,
          z: -42.568367,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 183.220688,
          y: 20.515,
          z: 45.75745,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 181.577133,
          y: 21.0476112,
          z: 48.8395271,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 158.861,
          y: 22.9199982,
          z: -49.5790176,
        },
      },
      {
        lootContainer: {
          id: '658420d8085fea07e674cdb6',
          name: '死去的平民',
          normalizedName: 'dead-civilian',
        },
        position: {
          x: 147.49707,
          y: 23.034996,
          z: -95.24186,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 23.2689972,
          y: 22.88,
          z: 311.753,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 28.6802139,
          y: 23.15468,
          z: 340.9612,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 112.894875,
          y: 33.6343765,
          z: 274.522522,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 112.894875,
          y: 33.6343765,
          z: 274.522522,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 112.894875,
          y: 33.6343765,
          z: 274.522522,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 112.894875,
          y: 33.6343765,
          z: 274.522522,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 105.0363,
          y: 33.0538979,
          z: 271.799377,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 106.2372,
          y: 33.0538979,
          z: 282.316071,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 105.295662,
          y: 33.0538979,
          z: 274.751,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 106.984283,
          y: 33.0538979,
          z: 276.604675,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 101.718269,
          y: 33.0538979,
          z: 278.722015,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 105.196053,
          y: 33.0538979,
          z: 279.618652,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 112.63488,
          y: 33.6343765,
          z: 274.927551,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 112.63488,
          y: 33.6343765,
          z: 274.927551,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 112.63488,
          y: 33.6343765,
          z: 274.927551,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 112.63488,
          y: 33.6343765,
          z: 274.927551,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 109.705307,
          y: 33.0538979,
          z: 273.5864,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 111.784393,
          y: 33.0775,
          z: 276.637482,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 103.910172,
          y: 33.0538979,
          z: 268.27536,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 108.788155,
          y: 33.0538979,
          z: 260.553223,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 109.110443,
          y: 33.0538979,
          z: 262.766876,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 111.812622,
          y: 33.6343765,
          z: 270.511627,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 111.812622,
          y: 33.6343765,
          z: 270.511627,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 111.812622,
          y: 33.6343765,
          z: 270.511627,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 111.812622,
          y: 33.6343765,
          z: 270.511627,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 105.120018,
          y: 33.0538979,
          z: 261.9593,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 109.9703,
          y: 33.0538979,
          z: 266.863342,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 106.4833,
          y: 33.0538979,
          z: 265.799347,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.255264,
          y: 27.1606712,
          z: -98.4473,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.255264,
          y: 27.1606712,
          z: -98.4473,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.255264,
          y: 27.1606712,
          z: -98.4473,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 138.255264,
          y: 27.1606712,
          z: -98.4473,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 84.03392,
          y: 27.1613426,
          z: -89.89866,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 84.03392,
          y: 27.1613426,
          z: -89.89866,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 84.03392,
          y: 27.1613426,
          z: -89.89866,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 84.03392,
          y: 27.1613426,
          z: -89.89866,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 154.651,
          y: 23.43,
          z: -99.135994,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 150.653,
          y: 22.9199982,
          z: -80.16401,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 3.97108078,
          y: 22.8856087,
          z: 333.7597,
        },
      },
      {
        lootContainer: {
          id: '658420d8085fea07e674cdb6',
          name: '死去的平民',
          normalizedName: 'dead-civilian',
        },
        position: {
          x: 175.599411,
          y: 17.8746319,
          z: -10.8448029,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 172.97,
          y: 17.81,
          z: 27.45401,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 181.469009,
          y: 17.2479954,
          z: -12.94677,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 100.315224,
          y: 14.107,
          z: 3.615837,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 133.892,
          y: 17.0589981,
          z: -12.4760056,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 126.803642,
          y: 22.7504311,
          z: -0.9584503,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 100.846527,
          y: 29.3569965,
          z: -26.36988,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 113.814034,
          y: 23.267,
          z: 196.53183,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 117.77739,
          y: 23.9706745,
          z: 196.904968,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 117.77739,
          y: 23.9706745,
          z: 196.904968,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 117.77739,
          y: 23.9706745,
          z: 196.904968,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 117.77739,
          y: 23.9706745,
          z: 196.904968,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 117.77739,
          y: 23.9706745,
          z: 196.437958,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 117.77739,
          y: 23.9706745,
          z: 196.437958,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 117.77739,
          y: 23.9706745,
          z: 196.437958,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 117.77739,
          y: 23.9706745,
          z: 196.437958,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 119.604004,
          y: 23.4089985,
          z: 185.35,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 117.905556,
          y: 23.4089985,
          z: 191.092255,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 121.996,
          y: 23.4089985,
          z: 195.871,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 109.063278,
          y: 27.671,
          z: 176.029984,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 124.298058,
          y: 25.0673866,
          z: 104.06337,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 121.7352,
          y: 24.704,
          z: 105.1222,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 111.014549,
          y: 27.8436928,
          z: 201.316254,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 46.37985,
          y: 24.362999,
          z: 123.345322,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 119.545128,
          y: 24.6151161,
          z: 107.771126,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 107.31456,
          y: 24.9089985,
          z: 110.74868,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 100.8196,
          y: 24.5181942,
          z: 133.204559,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 200.287628,
          y: 16.6209984,
          z: 123.84259,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 128.224365,
          y: 22.971,
          z: 207.606476,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 184.3757,
          y: 23.0226841,
          z: 103.349831,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 171.738708,
          y: 25.1689987,
          z: 79.45656,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 94.62578,
          y: 22.9744644,
          z: 226.035065,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 97.11545,
          y: 22.9287472,
          z: 169.451172,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 191.700378,
          y: 16.4299259,
          z: 132.934647,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 192.026062,
          y: 16.5134411,
          z: 136.356323,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 66.423,
          y: 23.5609989,
          z: 190.681,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 45.871,
          y: 22.934,
          z: 246.40802,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: -6.56499863,
          y: 22.719,
          z: 287.443,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 20.7720852,
          y: 23.41219,
          z: 251.278992,
        },
      },
      {
        lootContainer: {
          id: '6582e6d7b14c3f72eb071420',
          name: 'PMC尸体',
          normalizedName: 'pmc-body',
        },
        position: {
          x: 39.687,
          y: 23.5530167,
          z: 123.478989,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 23.704,
          y: 24.344,
          z: 14.4980011,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 34.56,
          y: 24.36,
          z: 20.181,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 32.506,
          y: 24.188,
          z: 60.084,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 17.1829987,
          y: 24.241,
          z: 84.114,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 4.5719986,
          y: 24.267,
          z: 33.231,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 41.409,
          y: 24.342,
          z: -6.425003,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 112.624,
          y: 23.433,
          z: -75.074,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 120.355,
          y: 23.433,
          z: -77.301,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 140.385,
          y: 23.433,
          z: -77.355,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 139.667,
          y: 23.315,
          z: -71.7869949,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 116.344,
          y: 23.334,
          z: -96.3559952,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 85.557,
          y: 23.237,
          z: -67.010994,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 186.693,
          y: 17.666,
          z: -38.109993,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 195.079,
          y: 17.508,
          z: -43.3100052,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 183.739,
          y: 17.658,
          z: -38.1290054,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 194.622,
          y: 16.97,
          z: -22.862999,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 199.69,
          y: 17.037,
          z: -4.939003,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 200.381,
          y: 16.747,
          z: 103.451,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 194.796,
          y: 16.741,
          z: 90.543,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 200.225,
          y: 16.605,
          z: 106.337,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 181.781,
          y: 25.089,
          z: 95.349,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 194.223,
          y: 16.944,
          z: 81.704,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 178.354,
          y: 17.081,
          z: 114.553,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 105.277,
          y: 23.549,
          z: 219.799,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 116.972,
          y: 23.408,
          z: 227.159,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 124.421,
          y: 23.408,
          z: 229.512,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 144.109,
          y: 23.328,
          z: 229.285,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 133.121,
          y: 23.268,
          z: 218.23,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 37.021,
          y: 23.359,
          z: 276.562,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 35.829,
          y: 23.153,
          z: 260.154,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 54.405,
          y: 23.61,
          z: 263.195,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 71.739,
          y: 23.368,
          z: 296.132,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 81.136,
          y: 23.301,
          z: 289.841,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 31.02177,
          y: 22.753,
          z: 284.355255,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 160.570267,
          y: 23.5518,
          z: -77.33747,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 154.948853,
          y: 23.562,
          z: -83.49903,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 152.058548,
          y: 23.0714,
          z: -83.5051956,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 154.638565,
          y: 22.748,
          z: -90.2664261,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 149.888016,
          y: 23.4756,
          z: -77.33672,
        },
      },
      {
        lootContainer: {
          id: '5d6fd13186f77424ad2a8c69',
          name: '配给物资箱',
          normalizedName: 'ration-supply-crate',
        },
        position: {
          x: 122.281052,
          y: 25.355999,
          z: 144.039856,
        },
      },
      {
        lootContainer: {
          id: '5d6fd13186f77424ad2a8c69',
          name: '配给物资箱',
          normalizedName: 'ration-supply-crate',
        },
        position: {
          x: 121.028587,
          y: 25.357,
          z: 137.8912,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 128.914841,
          y: 24.6554985,
          z: 163.7237,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 113.543564,
          y: 24.6555,
          z: 164.461868,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 115.4312,
          y: 23.4195,
          z: 170.9961,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 129.4982,
          y: 25.1499,
          z: 165.45108,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 125.435013,
          y: 24.935,
          z: 90.91302,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 131.200012,
          y: 24.935,
          z: 93.582016,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 113.994011,
          y: 24.893,
          z: 113.743019,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 106.116013,
          y: 24.944,
          z: 114.181015,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 122.366013,
          y: 24.7069988,
          z: 118.392014,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 124.14901,
          y: 24.99,
          z: 101.487015,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 118.651009,
          y: 25.298,
          z: 126.382019,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 121.38501,
          y: 24.385,
          z: 130.85701,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 126.444008,
          y: 24.386,
          z: 134.661011,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 104.53801,
          y: 29.4289989,
          z: 115.706017,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 100.548012,
          y: 28.889,
          z: 109.168015,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 131.271286,
          y: 29.546999,
          z: 88.782486,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 122.057907,
          y: 24.4665,
          z: 157.003021,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 120.233009,
          y: 24.4665,
          z: 156.194016,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 119.087006,
          y: 24.8599987,
          z: 162.413025,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 124.328011,
          y: 24.835,
          z: 158.572021,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 127.859009,
          y: 24.854,
          z: 163.439011,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 108.263,
          y: 23.079,
          z: 5.277977,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 113.846,
          y: 22.768,
          z: -0.416023254,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 110.190994,
          y: 23.0796,
          z: -11.3160172,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 104.348,
          y: 23.232,
          z: -12.4210205,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 114.113,
          y: 23.656,
          z: -5.63802338,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 123.313873,
          y: 23.0334988,
          z: 6.23636627,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 129.447647,
          y: 23.0334988,
          z: 9.534004,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 123.655479,
          y: 23.0335,
          z: 13.9900436,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 111.671,
          y: 23.249,
          z: 32.9030075,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 106.528992,
          y: 23.3305,
          z: 28.2430038,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 110.137993,
          y: 23.578,
          z: 26.5990067,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 122.006996,
          y: 23.4704,
          z: 23.45301,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 124.629,
          y: 23.244,
          z: 29.6880112,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 127.867836,
          y: 23.0305,
          z: 20.6557083,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 129.6282,
          y: 23.8319,
          z: 21.1632156,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 123.44416,
          y: 23.0335,
          z: 25.7569885,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 179.735977,
          y: 16.921999,
          z: 30.5779762,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 179.283981,
          y: 16.921999,
          z: 35.303978,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 171.189972,
          y: 16.921999,
          z: 34.5359764,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 179.358978,
          y: 17.374,
          z: 21.3159714,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 171.21698,
          y: 21.373,
          z: 27.5029755,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 176.714981,
          y: 21.373,
          z: 20.3679733,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 109.562012,
          y: 24.0159988,
          z: 284.349,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 114.793007,
          y: 24.0159988,
          z: 279.487,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 111.194008,
          y: 24.0159988,
          z: 273.758,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 120.730011,
          y: 24.407999,
          z: 281.587,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 109.352013,
          y: 24.0159988,
          z: 287.719,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 103.632011,
          y: 24.362999,
          z: 290.621,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 113.064011,
          y: 33.408,
          z: 277.022,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 121.447006,
          y: 32.806,
          z: 282.336,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 121.682007,
          y: 32.801,
          z: 292.645,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 107.785011,
          y: 33.431,
          z: 285.952,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 107.267014,
          y: 33.589,
          z: 275.259,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 105.091011,
          y: 33.589,
          z: 273.835,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 110.313011,
          y: 33.552002,
          z: 261.62,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 107.99601,
          y: 33.552002,
          z: 268.926,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 104.814011,
          y: 32.801,
          z: 266.60498,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 105.402008,
          y: 32.801,
          z: 260.189,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -39.802002,
          y: 24.768,
          z: 37.35599,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -41.33,
          y: 24.631,
          z: 22.0979919,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -31.2569962,
          y: 24.562,
          z: 27.73899,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -44.5759964,
          y: 30.167,
          z: 62.1719933,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -37.266,
          y: 29.687,
          z: 62.9239922,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -45.586,
          y: 29.652,
          z: 67.885994,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -45.9519958,
          y: 29.652,
          z: 56.3949928,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -27.8809967,
          y: 30.282,
          z: 54.6629944,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -7.681999,
          y: 30.26,
          z: 48.0239944,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -9.903999,
          y: 30.46,
          z: 52.340992,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -18.6449966,
          y: 30.46,
          z: 51.9509926,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -8.233997,
          y: 29.661,
          z: 45.4369926,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -19.5369949,
          y: 29.661,
          z: 47.2229919,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -21.585,
          y: 30.219,
          z: 74.09099,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -23.8399963,
          y: 30.2729988,
          z: 81.4549942,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -22.9659958,
          y: 29.657999,
          z: 88.84699,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -13.5679932,
          y: 29.657999,
          z: 81.38699,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -15.445,
          y: 29.737999,
          z: 68.5519943,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -3.7009964,
          y: 29.6619987,
          z: 63.7309952,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -27.904,
          y: 30.296999,
          z: 52.9629936,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -23.7169952,
          y: 29.657,
          z: 56.12799,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -28.1669922,
          y: 30.128,
          z: 80.62299,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -28.5745544,
          y: 29.9285,
          z: 74.62695,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -27.384552,
          y: 30.2104988,
          z: 71.98795,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -24.9958649,
          y: 29.9305,
          z: 87.07776,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -25.0304871,
          y: 29.9305,
          z: 82.2673,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 99.088,
          y: 14.5939989,
          z: 63.60299,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 106.634995,
          y: 14.2219982,
          z: 69.85299,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 127.590996,
          y: 14.8939991,
          z: 61.35199,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 127.224335,
          y: 15.1554995,
          z: 60.00315,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 101.065094,
          y: 13.6070986,
          z: 49.7341232,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 104.129066,
          y: 12.6764984,
          z: 47.19061,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 98.23266,
          y: 14.9544983,
          z: 43.78568,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 97.2324142,
          y: 14.2054987,
          z: 42.5176964,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 83.823,
          y: 14.5278988,
          z: 86.3879852,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 88.5519943,
          y: 15.848999,
          z: 97.48099,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 57.8049965,
          y: 15.0859985,
          z: 107.077988,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 73.37399,
          y: 15.0309982,
          z: 126.023987,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 80.004,
          y: 15.2399988,
          z: 120.312988,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 83.9109955,
          y: 15.3479986,
          z: 121.925987,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 88.4809952,
          y: 14.9049988,
          z: 132.794983,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 79.888,
          y: 14.9379988,
          z: 149.986,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 71.129,
          y: 14.8979988,
          z: 157.152,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 62.0669975,
          y: 14.7609987,
          z: 163.030991,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 69.001,
          y: 14.914999,
          z: 163.875,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 82.169,
          y: 14.1939983,
          z: 178.836,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 90.446,
          y: 14.9789982,
          z: 21.7369919,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 83.765,
          y: 15.2869987,
          z: 4.488991,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 64.492,
          y: 15.0191984,
          z: 28.4449921,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 101.228,
          y: 15.6589985,
          z: 43.27499,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 85.6069946,
          y: 14.926199,
          z: 57.88599,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 79.0239944,
          y: 14.6879988,
          z: -40.018013,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 83.9799957,
          y: 14.9179983,
          z: -20.9240112,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 81.94299,
          y: 14.5439987,
          z: -57.79801,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 84.6461945,
          y: 14.5959988,
          z: -24.8834076,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 92.377,
          y: 14.822999,
          z: -49.9080124,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 68.30266,
          y: 14.8719988,
          z: 156.540863,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 65.99105,
          y: 14.8719988,
          z: 163.183746,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 71.88733,
          y: 15.8659992,
          z: 164.27417,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 63.7859955,
          y: 14.9179983,
          z: 26.96196,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 67.94057,
          y: 14.9199982,
          z: 22.5584183,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 65.69703,
          y: 14.9179983,
          z: 22.5909882,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 117.775993,
          y: 23.618,
          z: 188.134018,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 118.425995,
          y: 23.618,
          z: 190.527023,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 121.124992,
          y: 23.618,
          z: 186.058014,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 121.575989,
          y: 23.618,
          z: 195.28302,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 117.46,
          y: 23.5619984,
          z: 192.058823,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 129.18219,
          y: 23.562,
          z: 190.49202,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 128.780182,
          y: 23.562,
          z: 182.495026,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 122.838989,
          y: 23.562,
          z: 197.151215,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 49.1314354,
          y: 23.7902718,
          z: 154.148346,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 51.7422562,
          y: 23.7902718,
          z: 154.781937,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 47.4403038,
          y: 23.786272,
          z: 154.158432,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 25.0444031,
          y: 24.1997,
          z: 156.1347,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 19.7560043,
          y: 24.038,
          z: 156.230011,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 12.5440025,
          y: 24.038,
          z: 160.150009,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 17.4920044,
          y: 23.407,
          z: 157.839,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 55.7250023,
          y: 24.046,
          z: 142.645,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 25.2780037,
          y: 23.953,
          z: 137.212311,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 49.038002,
          y: 24.3599987,
          z: 142.934,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 54.696003,
          y: 23.954,
          z: 136.85701,
        },
      },
      {
        lootContainer: {
          id: '5d6fe50986f77449d97f7463',
          name: '医疗物资箱',
          normalizedName: 'medical-supply-crate',
        },
        position: {
          x: 63.14752,
          y: 31.822998,
          z: 133.436874,
        },
      },
      {
        lootContainer: {
          id: '5d6fe50986f77449d97f7463',
          name: '医疗物资箱',
          normalizedName: 'medical-supply-crate',
        },
        position: {
          x: 63.3037453,
          y: 31.82,
          z: 149.271484,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 48.0824661,
          y: 31.822998,
          z: 160.134247,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 49.8713036,
          y: 31.822998,
          z: 127.304832,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 48.9798355,
          y: 31.8432732,
          z: 135.910538,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 50.552536,
          y: 31.2452717,
          z: 137.794174,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 58.367836,
          y: 31.2452717,
          z: 129.111542,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 181.978989,
          y: 17.778,
          z: -11.0040131,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 187.105988,
          y: 17.778,
          z: -10.89901,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 171.056,
          y: 17.15,
          z: -9.080009,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 181.898987,
          y: 17.784,
          z: -4.88900757,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 171.332,
          y: 17.37,
          z: 17.79599,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 172.612991,
          y: 17.959,
          z: 2.7869873,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 158.1238,
          y: 17.9435,
          z: 8.33979,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 151.911865,
          y: 17.1934986,
          z: -1.48796082,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 147.2464,
          y: 17.1934986,
          z: -1.67598724,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 147.2334,
          y: 17.6175,
          z: -9.312988,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 134.173233,
          y: 17.1898,
          z: -10.2857819,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 139.7555,
          y: 17.1898,
          z: -10.9265671,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 136.6283,
          y: 17.1895,
          z: -14.59185,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 188.692764,
          y: 16.4574986,
          z: 134.6635,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 197.045685,
          y: 16.4574986,
          z: 137.691467,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 194.392578,
          y: 16.4574986,
          z: 129.520966,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 80.796,
          y: 23.028,
          z: 131.538,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 83.23,
          y: 22.629,
          z: 134.645,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 101.316986,
          y: 22.781,
          z: 220.366959,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 97.06999,
          y: 22.781,
          z: 226.806976,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 95.32199,
          y: 27.288,
          z: 225.144958,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 95.12599,
          y: 27.909,
          z: 220.601959,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 93.9747543,
          y: 23.0485,
          z: 223.656464,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 96.4938049,
          y: 23.0505,
          z: 226.231537,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 95.02957,
          y: 23.0525,
          z: 226.979279,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 17.8579941,
          y: 24.389,
          z: -52.0209732,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 9.707993,
          y: 24.3599987,
          z: -43.7269821,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -10.28701,
          y: 24.99,
          z: -34.527977,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 28.8279915,
          y: 23.8109989,
          z: -21.6829758,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -15.2488327,
          y: 23.980999,
          z: -38.663002,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -15.0260086,
          y: 24.3129978,
          z: -40.751976,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -16.51648,
          y: 24.271,
          z: -39.333107,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -10.250946,
          y: 22.72941,
          z: 326.52655,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -18.2840881,
          y: 21.4841213,
          z: 339.14032,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: -5.42783737,
          y: 22.8968945,
          z: 332.256775,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 175.877,
          y: 17.0449963,
          z: 12.403244,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 106.057571,
          y: 14.3604994,
          z: 9.501549,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 115.202339,
          y: 23.5452728,
          z: 195.458389,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 111.845,
          y: 29.728981,
          z: 161.0518,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 109.138,
          y: 29.9129982,
          z: 161.824,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 99.72046,
          y: 14.503,
          z: 171.207184,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 136.358627,
          y: 27.6398849,
          z: 107.697983,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 108.624634,
          y: 24.994,
          z: 153.210358,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 119.224907,
          y: 24.960886,
          z: 155.858292,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 118.766,
          y: 25.3380013,
          z: 137.849,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 191.037415,
          y: 16.7716846,
          z: 100.784637,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 172.353943,
          y: 25.039,
          z: 104.307442,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 172.279678,
          y: 24.902607,
          z: 82.8226547,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 174.9792,
          y: 25.1222725,
          z: 79.0661,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 97.89871,
          y: 25.4779987,
          z: 79.66956,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 105.602913,
          y: 24.7451839,
          z: 84.16972,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 115.82222,
          y: 25.1905,
          z: 93.63992,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 174.686539,
          y: 25.2951851,
          z: 115.696449,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 186.452,
          y: 16.854,
          z: 130.909,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 48.8240128,
          y: 31.1295,
          z: 131.2507,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 40.35461,
          y: 23.5297527,
          z: 125.362709,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 61.051,
          y: 23.384,
          z: 129.775,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 44.84317,
          y: 23.7762871,
          z: 124.069466,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 48.2372322,
          y: 24.3592873,
          z: 123.540657,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 62.0375,
          y: 30.86274,
          z: 142.200989,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 12.166,
          y: 23.329,
          z: 327.504,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: -18.3162842,
          y: 17.3165,
          z: 331.9835,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 39.2884521,
          y: 23.9024143,
          z: 336.203674,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 183.468353,
          y: 17.282,
          z: -8.171486,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 95.2853,
          y: 14.4285,
          z: -9.733658,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 121.388641,
          y: 23.5392723,
          z: 184.784668,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 102.437996,
          y: 24.50898,
          z: 144.321808,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 124.197,
          y: 29.3650017,
          z: 163.526,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 101.525,
          y: 18.587,
          z: 170.762,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 122.190948,
          y: 25.1703987,
          z: 129.959229,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 117.371979,
          y: 25.1588,
          z: 138.786057,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: 193.6368,
          y: 16.7716846,
          z: 103.124687,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 176.454391,
          y: 24.819,
          z: 114.511162,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 173.051376,
          y: 24.9237061,
          z: 83.4879,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 177.113953,
          y: 24.7782726,
          z: 84.3255157,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 106.384,
          y: 24.937,
          z: 81.615,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 170.349319,
          y: 24.668499,
          z: 80.92142,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 97.17261,
          y: 24.668499,
          z: 88.6849442,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 170.817154,
          y: 24.9895,
          z: 116.087433,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 176.633,
          y: 25.078001,
          z: 112.943,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 58.5129,
          y: 31.1295,
          z: 148.2924,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 48.4129829,
          y: 23.5301056,
          z: 125.10936,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 49.943,
          y: 23.974,
          z: 124.281,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 48.2929,
          y: 23.7822723,
          z: 129.72316,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -14.673996,
          y: 24.1716,
          z: 91.983,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 2.79999924,
          y: 24.3483,
          z: 59.442,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 70.9302139,
          y: 23.2842522,
          z: 313.060547,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 50.3193779,
          y: 26.7407722,
          z: 152.302887,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 123.485886,
          y: 23.14648,
          z: 63.9226532,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 101.500092,
          y: 15.644,
          z: -9.330994,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 54.36,
          y: 14.555,
          z: -29.3099976,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 143.041,
          y: 14.061,
          z: 66.425,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 97.74,
          y: 14.3575,
          z: 52.6714058,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 106.8786,
          y: 12.6735811,
          z: 48.336,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 76.88451,
          y: 14.2755,
          z: -33.2349625,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 91.85268,
          y: 14.9871674,
          z: 14.45797,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 105.095,
          y: 12.874,
          z: 44.988,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 102.83284,
          y: 13.302,
          z: 47.33304,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 102.665543,
          y: 13.300107,
          z: 48.1396027,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 114.266655,
          y: 14.866107,
          z: 51.46521,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 106.757668,
          y: 13.4584,
          z: 47.84982,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 111.949478,
          y: 14.9558172,
          z: 54.3466148,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 103.750824,
          y: 13.1942711,
          z: 50.5383263,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 83.5775,
          y: 14.337081,
          z: 116.9411,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 22.2255173,
          y: 23.94627,
          z: 315.210571,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -29.86435,
          y: 24.3023033,
          z: 31.0682335,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -45.040596,
          y: 24.3023071,
          z: 44.0092964,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -19.99369,
          y: 23.9643,
          z: -26.7177658,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -25.4585419,
          y: 24.3053055,
          z: -0.647209167,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -22.6914368,
          y: 29.792305,
          z: 56.92238,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: -13.1718826,
          y: 30.2550545,
          z: 66.1286,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -22.9659958,
          y: 24.6209183,
          z: 93.9736557,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 153.991974,
          y: 23.7287979,
          z: 32.398632,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: -15.3834152,
          y: 22.7612572,
          z: 302.9927,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 191.142014,
          y: 16.413,
          z: 69.46,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 157.830719,
          y: 17.6816158,
          z: 60.2844963,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 157.111,
          y: 17.628,
          z: 60.214,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 204.153534,
          y: 17.3044,
          z: 35.97107,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 204.94957,
          y: 16.9342728,
          z: 33.8554268,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 83.811,
          y: 14.15408,
          z: 182.048,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -3.66320038,
          y: 24.401,
          z: 84.5851,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 0.480999,
          y: 24.3483,
          z: 18.9780045,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 54.79811,
          y: 23.9683781,
          z: 155.259415,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 43.29366,
          y: 31.2382717,
          z: 149.9008,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 120.190849,
          y: 23.4636555,
          z: 60.75271,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 105.923508,
          y: 15.06,
          z: 3.06318665,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 97.039,
          y: 14.41,
          z: -5.16200256,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 107.977,
          y: 12.408,
          z: 49.454,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 105.434311,
          y: 14.3375006,
          z: 69.7777252,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 106.1386,
          y: 12.6755,
          z: 46.244,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 92.1315,
          y: 14.2035007,
          z: 19.2580566,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 106.476,
          y: 12.874,
          z: 47.442,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 106.150345,
          y: 12.8301077,
          z: 45.531208,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 93.2,
          y: 14.1727,
          z: 141.189,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -31.0209961,
          y: 24.3023033,
          z: 27.0169983,
        },
      },
      {
        lootContainer: {
          id: '5c052cea86f7746b2101e8d8',
          name: '塑料手提箱',
          normalizedName: 'plastic-suitcase',
        },
        position: {
          x: -31.7580185,
          y: 24.3023071,
          z: 35.034,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: -11.803997,
          y: 30.2550545,
          z: 67.97675,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: -8.071129,
          y: 23.2893982,
          z: 297.176,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 125.751053,
          y: 22.9431763,
          z: 66.25792,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 207.08493,
          y: 16.4054,
          z: 34.06144,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 185.0277,
          y: 21.7872715,
          z: 93.78077,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 87.70216,
          y: 23.1952019,
          z: -8.333893,
        },
      },
    ],
    stationaryWeapons: [
      {
        stationaryWeapon: {
          id: '5cdeb229d7f00c000e7ce174',
          name: 'NSV “Utes” 12.7x108机关枪',
          shortName: 'NSV',
        },
        position: {
          x: 57.2261047,
          y: 32.0727425,
          z: 128.323532,
        },
      },
      {
        stationaryWeapon: {
          id: '5d52cc5ba4b9367408500062',
          name: 'AGS 30x29毫米自动榴弹发射器',
          shortName: 'AGS',
        },
        position: {
          x: 98.5608,
          y: 33.9177437,
          z: 277.282654,
        },
      },
    ],
  },
  {
    key: 'customs',
    projection: 'interactive',
    tileSize: 256,
    minZoom: 2,
    maxZoom: 6,
    transform: [
      0.239,
      168.65,
      0.239,
      136.35,
    ],
    coordinateRotation: 180,
    bounds: [
      [
        698,
        -307,
      ],
      [
        -372,
        237,
      ],
    ],
    heightRange: [
      -1000,
      1000,
    ],
    author: 'Tarkov.dev',
    authorLink: 'https://tarkov.dev/',
    svgPath: 'https://assets.tarkov.dev/maps/svg/Customs-Ground_Level.svg',
    tilePath: 'https://assets.tarkov.dev/maps/customs_v4/main/{z}/{x}/{y}.png',
    layers: [
      {
        name: 'Underground',
        svgPath: 'https://assets.tarkov.dev/maps/svg/Customs-Underground_Level.svg',
        tilePath: 'https://assets.tarkov.dev/maps/customs_v4/underground/{z}/{x}/{y}.png',
        show: false,
        extents: [
          {
            height: [
              -1000,
              0.5,
            ],
            bounds: [
              [
                [
                  635,
                  -137,
                ],
                [
                  620,
                  -125,
                ],
                'zb-1011',
              ],
              [
                [
                  473,
                  -122,
                ],
                [
                  458,
                  -110,
                ],
                'zb-1012',
              ],
              [
                [
                  314,
                  -173,
                ],
                [
                  308,
                  -184,
                ],
                'old gas',
              ],
              [
                [
                  349,
                  -88,
                ],
                [
                  323,
                  -32,
                ],
                'switch basement',
              ],
              [
                [
                  219,
                  -158,
                ],
                [
                  193,
                  -137,
                ],
                'zb-013',
              ],
            ],
          },
        ],
      },
      {
        name: '2nd Floor',
        svgPath: 'https://assets.tarkov.dev/maps/svg/Customs-Second_Floor.svg',
        tilePath: 'https://assets.tarkov.dev/maps/customs_v4/2nd/{z}/{x}/{y}.png',
        show: false,
        extents: [
          {
            height: [
              2.7,
              6.5,
            ],
            bounds: [
              [
                [
                  243,
                  190,
                ],
                [
                  165,
                  125,
                ],
                'dorms',
              ],
              [
                [
                  116,
                  -83,
                ],
                [
                  72,
                  -170,
                ],
                'mechanic',
              ],
              [
                [
                  356,
                  -30,
                ],
                [
                  341,
                  -84,
                ],
                'switch 2nd',
              ],
              [
                [
                  334,
                  -52,
                ],
                [
                  321,
                  -59,
                ],
                'switch 2nd',
              ],
              [
                [
                  589,
                  10,
                ],
                [
                  577,
                  -1,
                ],
                'scav checkpoint',
              ],
              [
                [
                  580,
                  -104,
                ],
                [
                  532,
                  -134,
                ],
                'dead scav warehouse',
              ],
              [
                [
                  625,
                  -120,
                ],
                [
                  599,
                  -139,
                ],
                'pump 2nd',
              ],
            ],
          },
          {
            height: [
              5.7,
              1000,
            ],
            bounds: [
              [
                [
                  580,
                  -104,
                ],
                [
                  532,
                  -134,
                ],
                'dead scav warehouse',
              ],
              [
                [
                  -199,
                  -90,
                ],
                [
                  -223,
                  -131,
                ],
                'big red 2nd',
              ],
              [
                [
                  239,
                  3,
                ],
                [
                  169,
                  -160,
                ],
                'skeleton',
              ],
              [
                [
                  336,
                  -56,
                ],
                [
                  316,
                  -95,
                ],
                'switch snipe',
              ],
              [
                [
                  584,
                  -46,
                ],
                [
                  556,
                  -92,
                ],
                'USEC 2nd',
              ],
              [
                [
                  93,
                  0,
                ],
                [
                  65,
                  -22,
                ],
                'construction 2nd',
              ],
            ],
          },
          {
            height: [
              14,
              15,
            ],
            bounds: [
              [
                [
                  497,
                  -44,
                ],
                [
                  450,
                  -90,
                ],
                'chemical warehouse sniper scav',
              ],
            ],
          },
        ],
      },
      {
        name: '3rd Floor',
        svgPath: 'https://assets.tarkov.dev/maps/svg/Customs-Third_Floor.svg',
        tilePath: 'https://assets.tarkov.dev/maps/customs_v4/3rd/{z}/{x}/{y}.png',
        show: false,
        extents: [
          {
            height: [
              5.7,
              1000,
            ],
            bounds: [
              [
                [
                  243,
                  190,
                ],
                [
                  165,
                  125,
                ],
                'dorms',
              ],
            ],
          },
        ],
      },
    ],
    labels: [
      {
        position: [
          -215,
          -119,
        ],
        text: 'Big Red',
      },
      {
        position: [
          200,
          150,
        ],
        text: 'Dorms',
      },
      {
        position: [
          404,
          31,
        ],
        text: 'New Gas',
      },
      {
        position: [
          331,
          -173,
        ],
        text: 'Old Gas',
      },
      {
        position: [
          201,
          -127,
        ],
        text: 'Fortress',
      },
      {
        position: [
          83,
          -153,
        ],
        text: 'Crackhouse',
      },
      {
        position: [
          567,
          -67,
        ],
        text: 'Streamer House',
        size: 90,
      },
      {
        position: [
          -69,
          9,
        ],
        text: 'Main Bridge',
        rotation: '6',
        size: 90,
      },
      {
        position: [
          110,
          85,
        ],
        text: 'Sniper Hill',
        size: 90,
      },
      {
        position: [
          -288,
          -134,
        ],
        text: 'Storage',
        size: 90,
      },
      {
        position: [
          -211,
          -219,
        ],
        text: 'Trailer Park',
        size: 90,
      },
      {
        position: [
          -66,
          46,
        ],
        text: 'Junk Bridge',
        size: 90,
      },
      {
        position: [
          106,
          -90,
        ],
        text: 'Repair Shop',
        size: 90,
      },
      {
        position: [
          491,
          63,
        ],
        text: 'Sniper Ridge',
        rotation: '5',
      },
      {
        position: [
          75,
          -9,
        ],
        text: 'Old Construction',
        size: 90,
      },
      {
        position: [
          200,
          -13,
        ],
        text: 'Skeleton',
        rotation: '-9',
      },
      {
        position: [
          390,
          -94,
        ],
        text: 'Warehouse 3',
      },
      {
        position: [
          472,
          -67,
        ],
        text: 'Depot',
      },
      {
        position: [
          555,
          -118,
        ],
        text: 'Warehouse 7',
      },
      {
        position: [
          572,
          0,
        ],
        text: 'Military Checkpoint',
      },
      {
        position: [
          238,
          53,
        ],
        text: 'Bus Station',
        size: 90,
      },
      {
        position: [
          333,
          -67,
        ],
        text: 'Warehouse 4',
      },
      {
        position: [
          497,
          110,
        ],
        text: 'Powerline Tower',
      },
      {
        position: [
          46,
          -59,
        ],
        text: 'Warehouse 17',
        size: 90,
      },
    ],
    id: '56f40101d2720b2a4d8b45d6',
    tarkovDataId: '1',
    name: '海关',
    normalizedName: 'customs',
    wiki: 'https://escapefromtarkov.fandom.com/wiki/Customs',
    description: '一个位于工厂附近的大型工业园区。此区域设有海关站、燃料储存设施、办公室、宿舍以及其它基础设施。',
    enemies: [
      'Scav',
      '狙击手',
      'Death Knight',
      '游荡者',
      'Big Pipe',
      'Birdeye',
      'Reshala',
      'Reshala Guard',
      '邪教徒牧师',
      '邪教徒战士',
    ],
    raidDuration: 40,
    players: '10-12',
    bosses: [
      {
        boss: {
          id: 'bossKnight',
          name: 'Death Knight',
          normalizedName: 'death-knight',
          imagePortraitLink: 'https://assets.tarkov.dev/death-knight-portrait.png',
          imagePosterLink: 'https://assets.tarkov.dev/death-knight-poster.jpg',
        },
        spawnChance: 0.15,
        spawnLocations: [
          {
            spawnKey: 'ZoneScavBase',
            name: 'Stronghold',
            chance: 1,
          },
        ],
      },
      {
        boss: {
          id: 'bossBully',
          name: 'Reshala',
          normalizedName: 'reshala',
          imagePortraitLink: 'https://assets.tarkov.dev/reshala-portrait.png',
          imagePosterLink: 'https://assets.tarkov.dev/reshala-poster.jpg',
        },
        spawnChance: 0.15,
        spawnLocations: [
          {
            spawnKey: 'ZoneDormitory',
            name: 'Dorms',
            chance: 0.33,
          },
          {
            spawnKey: 'ZoneGasStation',
            name: 'New Gas Station',
            chance: 0.33,
          },
          {
            spawnKey: 'ZoneScavBase',
            name: 'Stronghold',
            chance: 0.33,
          },
        ],
      },
      {
        boss: {
          id: 'sectantPriest',
          name: '邪教徒牧师',
          normalizedName: 'cultist-priest',
          imagePortraitLink: 'https://assets.tarkov.dev/cultist-priest-portrait.png',
          imagePosterLink: 'https://assets.tarkov.dev/cultist-priest-poster.jpg',
        },
        spawnChance: 0.2,
        spawnLocations: [
          {
            spawnKey: 'ZoneScavBase',
            name: 'Stronghold',
            chance: 1,
          },
        ],
      },
    ],
    spawns: [
      {
        zoneName: 'ZoneBlockPost',
        position: {
          x: 510.865,
          y: 3.43099976,
          z: 46.168,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneOldAZS',
        position: {
          x: 310.722839,
          y: 1.33199024,
          z: -157.0032,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneWade',
        position: {
          x: 20.0500031,
          y: 1.138802,
          z: -115.49,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneBrige',
        position: {
          x: -9.670734,
          y: -6.85845947,
          z: 127.67,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '0327c5d1-cc7f-432f-92dc-f95fb4719f1b',
        position: {
          x: 571.41,
          y: 1.49,
          z: -53.4799957,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneTankSquare',
        position: {
          x: 119.710007,
          y: 1.10880566,
          z: -34.1,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '06305c94-bdc3-4355-b2df-4b9060f54ed2',
        position: {
          x: 584.06,
          y: 9.66,
          z: 146.22,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneScavBase',
        position: {
          x: 252.16629,
          y: 1.21224034,
          z: -108.459213,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneScavBase',
        position: {
          x: 236.2663,
          y: 1.21224034,
          z: -95.11922,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneScavBase',
        position: {
          x: 208.2033,
          y: 1.78224027,
          z: -116.860214,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneGasStation',
        position: {
          x: 423.79,
          y: 1.0539999,
          z: 42.34,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '0a780428-48e0-4268-9ef8-0a7f999cc632',
        position: {
          x: -220.212,
          y: 1.0710001,
          z: -141.936,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '0bfe7760-902e-4b79-8722-7ce2ad0a970c',
        position: {
          x: 288.068,
          y: 1.718,
          z: -201.166,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneScavBase',
        position: {
          x: 255.4663,
          y: 1.21224034,
          z: -108.379227,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneGasStation',
        position: {
          x: 447.43,
          y: 7.59999943,
          z: 111.09,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '0f054aeb-dae4-4de4-8f19-e96baac1def6',
        position: {
          x: 531.88,
          y: 9.52,
          z: 195.790009,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '0fd52df3-8419-4644-917f-efd18d99c85a',
        position: {
          x: 546.888,
          y: 2.208,
          z: 45.5639954,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '105e161c-c1ad-4004-8c02-f3c95164a75e',
        position: {
          x: 574,
          y: 1.46,
          z: -114.85,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneBlockPost',
        position: {
          x: 487.64,
          y: 1.68252087,
          z: 41.11,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '11e7dc8d-ee50-4800-a400-a2f2761b6e9f',
        position: {
          x: -195.952,
          y: 1.458,
          z: -234.646,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneFactoryCenter',
        position: {
          x: 365.1455,
          y: 1.32006228,
          z: -108.90036,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '158ea18b-12e5-4495-8774-0cb185ce83ba',
        position: {
          x: 587.85,
          y: 8.89,
          z: 141.949982,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '15a5b4ce-8d57-41b8-8f2b-bcf806a8e803',
        position: {
          x: -223.232,
          y: 1.118,
          z: -147.516,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneBrige',
        position: {
          x: 19.3312683,
          y: -0.88446,
          z: 36.432,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneOldAZS',
        position: {
          x: 313.802277,
          y: 1.16418183,
          z: -191.568161,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '1a39d596-25e4-4b63-b6da-325aa8409576',
        position: {
          x: 570.06,
          y: 1.49,
          z: -54.9799957,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1b636e5b-ae6d-4df3-93ea-159f5a2437fd',
        position: {
          x: -132.9,
          y: -1.66999984,
          z: 39.8999939,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneScavBase',
        position: {
          x: 195.336288,
          y: 1.78624034,
          z: -126.129227,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '1b9fddbc-f667-4344-98ef-3d198229bd41',
        position: {
          x: -151.782,
          y: 1.258,
          z: -129.81601,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSnipeFactory',
        position: {
          x: 476.11853,
          y: 14.7500124,
          z: -71.85715,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: '1c26a886-b1f5-490e-8fdd-153d991dc393',
        position: {
          x: 363.248,
          y: 12.698,
          z: 155.594,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1d0f26c8-85e5-42d0-b115-7d8f325f97d4',
        position: {
          x: -130.65,
          y: -2.11,
          z: 38.9100037,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1d80614c-e211-42d5-b661-8e2bb1aeae79',
        position: {
          x: 100.598007,
          y: 1.168,
          z: -110.826004,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '1fb2eba7-250e-4fd1-ba2a-75fb3d640ed7',
        position: {
          x: -131.27,
          y: -2.09,
          z: 42.6900024,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '20495255-3094-4add-8744-14efc6e05308',
        position: {
          x: 525.62,
          y: 8.88,
          z: 199,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '2051eb7b-3ae8-49b8-adcb-c13f0ddc7972',
        position: {
          x: 317.338,
          y: 1.128,
          z: -78.756,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCrossRoad',
        position: {
          x: 191.46,
          y: 1.22457552,
          z: -2.51000214,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneDormitory',
        position: {
          x: 171.889282,
          y: 2.83300018,
          z: 172.208786,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneGasStation',
        position: {
          x: 411.6,
          y: 0.96478796,
          z: 0.100000381,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -333.830017,
          y: -0.424789667,
          z: -84.4799957,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '253e504c-4d28-4aa0-926d-14dcbdeebc1c',
        position: {
          x: -309.95,
          y: 0.99,
          z: -94.51,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneBrige',
        position: {
          x: 46.75,
          y: -3.94977927,
          z: 126.18,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneOldAZS',
        position: {
          x: 291.5036,
          y: 2.35399628,
          z: -169.449524,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '27aa4110-1b16-4454-b505-35026255b7f9',
        position: {
          x: -147.872,
          y: 1.678,
          z: -135.636,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -311.924,
          y: 0.966500759,
          z: -124.966,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneFactorySide',
        position: {
          x: 603.5282,
          y: 1.14991,
          z: -139.339142,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneFactorySide',
        position: {
          x: 663.252441,
          y: 1.21781647,
          z: -99.46105,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneGasStation',
        position: {
          x: 454.8,
          y: 2.0766468,
          z: 61.09,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '2b5a6af0-0e2e-4fa1-bbf3-a390276b0b13',
        position: {
          x: -216.552,
          y: -1.46199989,
          z: -2.10600281,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneDormitory',
        position: {
          x: 178.5893,
          y: -0.1337597,
          z: 181.282791,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '2c286540-f748-4719-9a6d-6bd0e9a3c143',
        position: {
          x: 13.0980072,
          y: 1.19800007,
          z: -125.625992,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -162.957016,
          y: 3.21176076,
          z: -168.46,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '2c5cc586-9010-4b6c-8a67-fbfacb76a225',
        position: {
          x: 518.3,
          y: 8.35,
          z: 187.459991,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '2cb9950d-20ec-484e-919c-5489bb7abd5c',
        position: {
          x: 478,
          y: 2.7,
          z: -83.14,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneFactorySide',
        position: {
          x: 569.0529,
          y: 1.46199012,
          z: -54.5297432,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneBlockPost',
        position: {
          x: 568.8878,
          y: -1.46942234,
          z: -25.5359821,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneDormitory',
        position: {
          x: 186.527283,
          y: 2.84524035,
          z: 173.873779,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -300.564,
          y: 0.032841444,
          z: -44.071,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneWade',
        position: {
          x: -17.1999969,
          y: 0.0100492239,
          z: -140.959991,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '3735903c-ebbd-407d-ba27-46129dc360c3',
        position: {
          x: 539.688,
          y: 2.948,
          z: 48.0039978,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '38a13157-f0cd-48d5-bada-dff42472b410',
        position: {
          x: 569.75,
          y: 1.49,
          z: -52.54001,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '38aaf44a-c4a7-49a0-a669-96520c28332d',
        position: {
          x: 582.31,
          y: 9.79,
          z: 147.5,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneGasStation',
        position: {
          x: 418.83,
          y: 1.10948467,
          z: 56.67,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneOldAZS',
        position: {
          x: 339.321442,
          y: 1.189998,
          z: -190.771988,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '3b128730-ba41-4ac8-9c08-517655a787dd',
        position: {
          x: 570.45,
          y: 1.48,
          z: -111.76,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneWade',
        position: {
          x: 5.78900528,
          y: 1.16781759,
          z: -103.391,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '3bb03dcc-70b9-455d-ab44-058121da9469',
        position: {
          x: -221.702,
          y: -0.741999865,
          z: -3.35600281,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCrossRoad',
        position: {
          x: 175.290009,
          y: 1.21891308,
          z: -5.380005,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '3ef3c5d0-afaf-44cb-82c5-530c0e6300ab',
        position: {
          x: 385.709961,
          y: 1.12,
          z: -116.17,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '413a6ac7-3f9d-4a38-9652-f3c68505dcc0',
        position: {
          x: -154.35199,
          y: 1.038,
          z: -128.096008,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '41440b15-7ff8-42fa-893a-5b4b59eaf13b',
        position: {
          x: -313.92,
          y: 0.940000057,
          z: -88.66,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneDormitory',
        position: {
          x: 172.605286,
          y: 2.84324026,
          z: 157.337784,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '426e619c-f5a9-4529-b10b-4796f82d9f6d',
        position: {
          x: -190.972,
          y: 1.518,
          z: -236.686,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '42904c13-d45a-4375-9bd1-67a9da6cdb2e',
        position: {
          x: -218.681992,
          y: 1.072,
          z: -148.428009,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '42933fa9-9478-4db3-a97f-7d120afa4ca9',
        position: {
          x: 503.2,
          y: 1.18,
          z: -59.83,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4293a264-a66e-4d7d-8ce7-65cade015117',
        position: {
          x: 585.74,
          y: 9.53,
          z: 145.81,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneFactoryCenter',
        position: {
          x: 471.196716,
          y: 2.6568923,
          z: -54.2984543,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -161.647,
          y: 3.21376324,
          z: -126.492004,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '468b8eec-29bd-430f-920b-e32d89e2beda',
        position: {
          x: 548.068,
          y: 2.838,
          z: 47.554,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '471799c4-3aed-4c0e-9489-fabc2e76dd06',
        position: {
          x: -14.371994,
          y: -7.74200058,
          z: 126.363983,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneTankSquare',
        position: {
          x: 172.51001,
          y: 1.22871351,
          z: -6.28000259,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '4ba3ef50-0c41-4f25-9419-58152197b15b',
        position: {
          x: 315.797,
          y: 1.128,
          z: -82.132,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4c18262a-245d-47ee-99c9-f4d36a095d56',
        position: {
          x: 645.31,
          y: 1.5,
          z: 46.22,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4d2e6d0c-078c-4918-8227-8df098a47a39',
        position: {
          x: 478.86,
          y: 2.7,
          z: -79.23001,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4d676699-1243-452b-b4d7-3353616854fb',
        position: {
          x: 614.44,
          y: -0.3499999,
          z: -102.62,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '4fb8d6d8-c158-42f5-b4d2-5e28feb8c675',
        position: {
          x: 503.829956,
          y: 1.19,
          z: -55.25,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneScavBase',
        position: {
          x: 133.786285,
          y: 1.74224031,
          z: -82.02922,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '51169827-146f-4993-af37-0de3ccec8d45',
        position: {
          x: 291.65802,
          y: 1.45800006,
          z: -197.106,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '519599b1-5b4d-4c91-8530-13042c3a3a37',
        position: {
          x: -197.232,
          y: 1.508,
          z: -233.506,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '52e74209-8ff4-4121-85ef-a54b5b6689be',
        position: {
          x: 391.589966,
          y: 1.32,
          z: -117.73,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '53635fda-547d-4b4c-af82-e9adfd93daf2',
        position: {
          x: -217.642,
          y: 1.06800008,
          z: -144.936,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '537c1307-b83a-4c57-8c51-21380f5605a1',
        position: {
          x: 641.47,
          y: 1.27,
          z: 43.53,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneBlockPost',
        position: {
          x: 571.71,
          y: -0.9350004,
          z: 6.60000038,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneTankSquare',
        position: {
          x: 101.430008,
          y: 1.22583747,
          z: 22.07,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '54991d80-f85d-49fd-8ae0-f686d6fdf828',
        position: {
          x: -1.93199158,
          y: -5.042,
          z: 126.95401,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneOldAZS',
        position: {
          x: 294.9489,
          y: 2.10008216,
          z: -160.2394,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '5621e44b-9f44-494b-9695-143a88146d43',
        position: {
          x: 294.288025,
          y: 1.398,
          z: -195.736008,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '582b9ea6-4404-4af1-8443-da3db48fcaad',
        position: {
          x: 480.55,
          y: 2.7,
          z: -81.46,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '58a91424-a24c-44e1-9f8a-c5cc6c66489f',
        position: {
          x: 314.128,
          y: 1.20800006,
          z: -90.7260056,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '5a551a12-ca0e-41af-9845-270ffce6808a',
        position: {
          x: 620.14,
          y: -0.3499999,
          z: -96.98,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneTankSquare',
        position: {
          x: 141.97,
          y: 1.14876676,
          z: -14.9800034,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneTankSquare',
        position: {
          x: 87.05,
          y: 1.04846621,
          z: -59.2000046,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '61e3a2a4-55af-4b66-bf4f-302f9cdac5b2',
        position: {
          x: 348.438,
          y: 8.858,
          z: 152.824,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '62a46181-d31d-4abb-855d-3e24886e171b',
        position: {
          x: -323.862,
          y: 1.16,
          z: -225.596008,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneWade',
        position: {
          x: 6.49000549,
          y: 1.26882577,
          z: -95.06,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '66ab21e5-21b1-42aa-bb0a-e7525f793536',
        position: {
          x: 569.89,
          y: 1.49,
          z: -50.4499969,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneFactorySide',
        position: {
          x: 537.491455,
          y: 1.08002615,
          z: -130.868164,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '6889bd40-9338-4297-8c15-0f1af8f4f74f',
        position: {
          x: 15.9580078,
          y: 1.30800009,
          z: -126.866005,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCrossRoad',
        position: {
          x: 213.6,
          y: 1.24984646,
          z: 1.949997,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '6d8626ec-449b-4d63-a066-38e802756ec9',
        position: {
          x: 480.24,
          y: 2.7,
          z: -84.47,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '6df008d3-3928-4213-b05b-8285bd15e7c2',
        position: {
          x: 377.708,
          y: 1.418,
          z: -93.356,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '6fbb2585-70d7-4f2f-9242-11f88d8dc2f3',
        position: {
          x: 647.48,
          y: 1.88,
          z: 48.3699951,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneScavBase',
        position: {
          x: 225.976288,
          y: 1.10224032,
          z: -80.73921,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneScavBase',
        position: {
          x: 195.096283,
          y: 1.49224031,
          z: -170.1392,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -286.342,
          y: 0.228545427,
          z: -232.641,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneFactorySide',
        position: {
          x: 657.8154,
          y: 1.12998486,
          z: -134.82048,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '75b634c6-60a6-4846-8d15-c8e79cab0c78',
        position: {
          x: -134.19,
          y: -1.37000012,
          z: 38.11,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneGasStation',
        position: {
          x: 430.815033,
          y: 1.88306046,
          z: 54.8594666,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneBrige',
        position: {
          x: -30.9607353,
          y: -12.0579987,
          z: 126.24,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '7994d5ba-6c84-44fc-a66e-a16a169fbaed',
        position: {
          x: -206.282,
          y: -1.28199983,
          z: 2.2440033,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -157.741013,
          y: 1.60435379,
          z: -190.766,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneDormitory',
        position: {
          x: 181.1043,
          y: -0.1127597,
          z: 178.053787,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '7afa635c-296e-42be-8a76-26be3f736827',
        position: {
          x: 375.088,
          y: 1.418,
          z: -88.7960052,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '7bf576fa-4a6f-48dc-90a8-8ddd3029816f',
        position: {
          x: 519.84,
          y: 7.7699995,
          z: 204.15,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '7c349cb6-2e80-4166-919d-63ae486f618c',
        position: {
          x: 98.088,
          y: 1.138,
          z: -107.216,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneBrige',
        position: {
          x: 19.3192673,
          y: 1.28754,
          z: -109.24,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '7d47b29d-9758-4925-a614-3e70ed1374f4',
        position: {
          x: -148.302,
          y: 1.608,
          z: -143.646,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneFactorySide',
        position: {
          x: 658.0241,
          y: 1.12983537,
          z: -59.1834259,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '81fa9972-7d9f-4ad9-9f86-6db8656e211c',
        position: {
          x: 544.698,
          y: 2.898,
          z: 48.0639954,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneBrige',
        position: {
          x: 19.389267,
          y: 1.14054,
          z: -66.09,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '85efb186-180f-4fdc-9d1b-abf4b1b07696',
        position: {
          x: 394.927979,
          y: 1.418,
          z: -84.026,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneBlockPostSniper',
        position: {
          x: 581.8,
          y: 3.06499958,
          z: 0.9200001,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: '8878252a-9516-4f33-a54d-56f9705098b6',
        position: {
          x: 617.51,
          y: -0.3499999,
          z: -103.12,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneFactoryCenter',
        position: {
          x: 463.7923,
          y: 1.207964,
          z: -117.402084,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '8998cdf3-aa44-40e9-b34e-df32f1bf4540',
        position: {
          x: 642.1,
          y: 1.43,
          z: 45.54001,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '89fe6e6f-7ebc-458e-8297-621824d1d6ac',
        position: {
          x: 568.08,
          y: 1.48,
          z: -111.66,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8bae21f5-6d20-4368-a820-0a05730f81ad',
        position: {
          x: 569.03,
          y: 1.48,
          z: -117.38,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneWade',
        position: {
          x: 21.010006,
          y: 1.28880048,
          z: -109.49,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneFactoryCenter',
        position: {
          x: 323.287872,
          y: 1.64894223,
          z: -98.48353,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '8cb5b38c-2355-4093-8b47-f99c6673a566',
        position: {
          x: 355.818,
          y: 10.018,
          z: 152.064,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8d6e133a-e996-431b-a120-efa9a96f69e7',
        position: {
          x: -151.962,
          y: 1.288,
          z: -137.946,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8e31a0d6-0d23-4e79-bf7d-089bf232f4ac',
        position: {
          x: 378.977966,
          y: 1.22,
          z: -116.846,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '8e59cd3f-750b-4d00-841a-9ebfc41a1ac1',
        position: {
          x: 8.678009,
          y: 1.258,
          z: -127.796005,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneFactoryCenter',
        position: {
          x: 356.541382,
          y: 1.15009761,
          z: -24.1884918,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneGasStation',
        position: {
          x: 420.47,
          y: 1.14899969,
          z: 22.5500011,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: '92eddb79-cfd5-491d-85ed-23769ee28f95',
        position: {
          x: 368.438,
          y: 1.418,
          z: -90.076004,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '95259830-27ef-4056-8bee-cfbba562dedc',
        position: {
          x: -309.94,
          y: 1,
          z: -96.98,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -329.382019,
          y: 1.01902342,
          z: -211.054,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: '967f3d09-de07-4f11-b68f-2f42ba684f51',
        position: {
          x: -14.7019958,
          y: -7.74200058,
          z: 121.603973,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '989f1148-f609-4191-8a09-de4d40b117e4',
        position: {
          x: 571.17,
          y: 1.49,
          z: -51.70999,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '9a904fab-076c-4fc5-89e3-d6983cba8d89',
        position: {
          x: 90.12901,
          y: 1.357,
          z: -102.023,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '9b6a8b4a-f315-4dc2-b294-49094c0c0490',
        position: {
          x: 388.419983,
          y: 1.12,
          z: -114.33,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '9d396201-600c-4920-a915-3e5d0aff2280',
        position: {
          x: 545.018,
          y: 3.238,
          z: 50.95401,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: '9d4a13b3-bad7-41ee-9d4e-d83149736816',
        position: {
          x: 388.888,
          y: 1.418,
          z: -97.196,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSnipeBrige',
        position: {
          x: 107.138275,
          y: 16.2157822,
          z: -47.88827,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: 'ZoneFactorySide',
        position: {
          x: 629.6786,
          y: 1.42986572,
          z: -135.632492,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'a092494e-01bf-496f-b789-8e9790639784',
        position: {
          x: 502.349976,
          y: 1.18,
          z: -64.42999,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneGasStation',
        position: {
          x: 467.41,
          y: 1.56773758,
          z: 60.0600052,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'a1e820f6-34ae-474c-818f-aa67c35266aa',
        position: {
          x: -194.301987,
          y: 1.558,
          z: -232.946,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneScavBase',
        position: {
          x: 260.2963,
          y: 1.21224034,
          z: -91.08922,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'a44d5d64-8570-48b7-b696-52db3db8ac13',
        position: {
          x: 648.75,
          y: 1.81,
          z: 50.1600037,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'a64e8bd1-42f5-4c0d-b132-ddc01cd46d33',
        position: {
          x: -189.071991,
          y: 1.538,
          z: -235.216,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'a8dafd79-4811-4598-9061-7062654a1200',
        position: {
          x: 96.618,
          y: 1.268,
          z: -106.206,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -335.62,
          y: 0.307707071,
          z: -159.7,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'a97b15dc-9f2b-4de6-ae02-ec4417bef821',
        position: {
          x: 394.919983,
          y: 2.18,
          z: -120.68,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneFactorySide',
        position: {
          x: 536.939453,
          y: 1.38835239,
          z: -114.267776,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneBrige',
        position: {
          x: 29.8222656,
          y: 1.11054,
          z: -29.4749985,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'b1a57f2f-89ab-49ae-81ab-3d4e5f6e9f1c',
        position: {
          x: -217.362,
          y: 1.19,
          z: -136.956009,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'b523d044-6957-4cd1-b039-b653cd4acbe4',
        position: {
          x: -320.612,
          y: 0.940000057,
          z: -223.796,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCrossRoad',
        position: {
          x: 188.06,
          y: 1.289891,
          z: -1.38000488,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'b54ce786-74b8-41b1-889f-0fe62c36d8e0',
        position: {
          x: 481.06,
          y: 2.7,
          z: -79.22,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'b5552110-2313-4285-9a06-769077e3c16b',
        position: {
          x: -132.87,
          y: -1.81000018,
          z: 43.9799957,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'b623ab89-4538-4afa-b6a6-49e9aad4324a',
        position: {
          x: -21.2619934,
          y: -8.542,
          z: 115.303986,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'b736a3e7-270e-4797-92d0-6c3a7927f008',
        position: {
          x: 18.778,
          y: 1.358,
          z: -127.086,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneTankSquare',
        position: {
          x: 73.591,
          y: 1.11978245,
          z: -63.465004,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'bb1128eb-b548-48b8-a785-c18ef08d7c37',
        position: {
          x: 571.59,
          y: 11.37,
          z: 145.269989,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'c11f719c-3491-4a60-901e-cf20832b432e',
        position: {
          x: 617.72,
          y: -0.3499999,
          z: -96.86,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -179.40802,
          y: 1.42873216,
          z: -235.034,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'c21695bd-f460-4e72-8138-54d7aa92b965',
        position: {
          x: 522.43,
          y: 10.14,
          z: 179.68,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'c26390c5-80e1-428e-a11f-5d34d33fcc69',
        position: {
          x: -323.872,
          y: 1.13,
          z: -222.056,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneTankSquare',
        position: {
          x: 57.6700058,
          y: 1.18891406,
          z: -37.5,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'c351748e-915b-4be3-ae56-2bb13470f278',
        position: {
          x: 296.557983,
          y: 1.868,
          z: -200.606,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneDormitory',
        position: {
          x: 174.652283,
          y: -0.12775971,
          z: 152.706787,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneWade',
        position: {
          x: 5.87000275,
          y: 1.37882686,
          z: -90.5099945,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'c70da15f-6bc8-4dda-b666-e4163754bcd5',
        position: {
          x: 576.38,
          y: 1.48,
          z: -115.35,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'c838176a-28e6-4871-89a2-827ec044b3f4',
        position: {
          x: -321.022,
          y: 0.950000048,
          z: -220.866013,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneBlockPost',
        position: {
          x: 580,
          y: -0.594014168,
          z: 33.12,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'c98a753b-d534-4fa4-9430-478b7d8bf27d',
        position: {
          x: 502.7,
          y: 1.18,
          z: -62.1199951,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneSnipeTower',
        position: {
          x: 255.2391,
          y: 53.4429932,
          z: -27.01771,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'sniper',
        ],
      },
      {
        zoneName: 'cd52aa33-141e-4f89-9120-2dd899fd23f2',
        position: {
          x: -209.142,
          y: -1.43199992,
          z: 0.694000244,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ce469ace-55c1-4381-b3a1-6458f1bea611',
        position: {
          x: 503.409973,
          y: 1.18,
          z: -57.5599976,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'cfb2039d-a575-4246-9903-bd20336478de',
        position: {
          x: 315.768,
          y: 1.128,
          z: -79.116,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -247.488,
          y: -0.234708309,
          z: -14.3019981,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'd12962b9-c23f-47c4-96fa-afe2b1ef30be',
        position: {
          x: -19.7720032,
          y: -8.492001,
          z: 113.283966,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneScavBase',
        position: {
          x: 109.876289,
          y: 1.24224031,
          z: -109.7592,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneBrige',
        position: {
          x: 34.1792679,
          y: 1.08854008,
          z: -49.5179977,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'd591be31-c6f9-444d-9b7e-15faf5825066',
        position: {
          x: 288.998,
          y: 1.388,
          z: -196.146,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'd7bae537-f5a0-416d-9849-d939cc3575f4',
        position: {
          x: 615.61,
          y: -0.3499999,
          z: -96.83,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneFactoryCenter',
        position: {
          x: 410.909271,
          y: 1.38835239,
          z: -112.0087,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'dbab2e51-b5f5-4bd8-9324-9f3fd4cc977f',
        position: {
          x: 365.458,
          y: 11.478,
          z: 149.264,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneDormitory',
        position: {
          x: 185.443283,
          y: 2.83624029,
          z: 182.801788,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'dd81d0d1-c0de-48c2-afed-49522f652d00',
        position: {
          x: -306.09,
          y: 1.01,
          z: -89.42,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneBlockPost',
        position: {
          x: 529.57,
          y: 2.519843,
          z: 43.679,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneScavBase',
        position: {
          x: 227.906281,
          y: 1.29224026,
          z: -86.3992157,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneFactorySide',
        position: {
          x: 604.9504,
          y: 1.21291232,
          z: -119.5414,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneFactoryCenter',
        position: {
          x: 454.29303,
          y: 2.67591476,
          z: -81.5390244,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'e765e08d-9ea3-46f0-ad0b-774d78da5478',
        position: {
          x: 91.29799,
          y: 1.218,
          z: -104.936005,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'e8dcecc5-1fda-4553-bffb-7efbd681c11d',
        position: {
          x: 20.428009,
          y: 1.218,
          z: -124.846,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'f02af868-e415-4779-bbf6-a1eabeee7ae3',
        position: {
          x: -214.582,
          y: -1.23199987,
          z: -0.3959961,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -273.483,
          y: 0.9775678,
          z: -72.127,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneFactoryCenter',
        position: {
          x: 391.856567,
          y: 1.39002156,
          z: -86.1867752,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'f2755660-ab11-4982-a774-26119ce5241e',
        position: {
          x: 359.958,
          y: 11.478,
          z: 154.314,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneCrossRoad',
        position: {
          x: 227.562,
          y: -0.695065,
          z: 124.912994,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneGasStation',
        position: {
          x: 422.29,
          y: 4.16,
          z: 97.16,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
          'boss',
        ],
      },
      {
        zoneName: 'ZoneBrige',
        position: {
          x: 27.54927,
          y: -1.12046,
          z: 127.26,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'f87de9ef-e4f7-4cf4-b241-85cc17724acd',
        position: {
          x: -303.39,
          y: 1.01,
          z: -89.49,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'f8fa00b6-4941-4c21-b10b-77ff30b0c382',
        position: {
          x: 314.867981,
          y: 1.158,
          z: -93.1160049,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
      {
        zoneName: 'ZoneDormitory',
        position: {
          x: 190.702286,
          y: -0.1337597,
          z: 175.85379,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'ZoneCustoms',
        position: {
          x: -236.430008,
          y: 1.4996326,
          z: -235.900009,
        },
        sides: [
          'scav',
        ],
        categories: [
          'bot',
        ],
      },
      {
        zoneName: 'fd246e19-a658-4f37-ad29-43b37ca413a1',
        position: {
          x: -320.572021,
          y: 0.940000057,
          z: -227.806,
        },
        sides: [
          'pmc',
        ],
        categories: [
          'player',
        ],
      },
    ],
    extracts: [
      {
        id: 'd0781374be523027a2a8e1edf6fe08449c45c382',
        name: 'ZB-013',
        faction: 'pmc',
        switches: [
          {
            id: 'ae4bdfc1fc5b30100701158b56ae4d20840e0550',
            name: 'ZB-013 Power Switch',
            switchType: 'Open',
            position: {
              x: 352.230316,
              y: 2.61458874,
              z: -40.8052826,
            },
          },
        ],
        position: {
          x: 200.9755,
          y: -1.1484108,
          z: -153.086456,
        },
        outline: [
          {
            x: 200.082642,
            y: -1.1484108,
            z: -156.58197,
          },
          {
            x: 202.995148,
            y: -1.1484108,
            z: -156.0759,
          },
          {
            x: 201.868347,
            y: -1.1484108,
            z: -149.590927,
          },
          {
            x: 198.955841,
            y: -1.1484108,
            z: -150.096985,
          },
        ],
        top: 0.484295845,
        bottom: -2.78111744,
      },
      {
        id: 'feafaf9787defedcb6b7ea3da97f342870bc8073',
        name: '宿舍载具撤离点',
        faction: 'pmc',
        switches: [],
        position: {
          x: 181.08,
          y: -0.71,
          z: 213.25,
        },
        outline: [
          {
            x: 177.484436,
            y: -0.71,
            z: 212.390961,
          },
          {
            x: 177.534058,
            y: -0.71,
            z: 212.264832,
          },
          {
            x: 181.64389,
            y: -0.71,
            z: 209.674881,
          },
          {
            x: 181.693527,
            y: -0.71,
            z: 209.548752,
          },
          {
            x: 184.675568,
            y: -0.71,
            z: 214.109039,
          },
          {
            x: 184.625946,
            y: -0.71,
            z: 214.235168,
          },
          {
            x: 180.516113,
            y: -0.71,
            z: 216.825119,
          },
          {
            x: 180.466476,
            y: -0.71,
            z: 216.951248,
          },
        ],
        top: 1.24756718,
        bottom: -2.66756725,
      },
      {
        id: '02cdf102e32c481d3b5fabcf1dcf3df3962522bb',
        name: 'ZB-1011',
        faction: 'pmc',
        switches: [],
        position: {
          x: 621.4962,
          y: -2.07000017,
          z: -128.604919,
        },
        outline: [
          {
            x: 609.9442,
            y: -2.07000017,
            z: -130.307037,
          },
          {
            x: 632.284851,
            y: -2.07000017,
            z: -133.071732,
          },
          {
            x: 633.0483,
            y: -2.07000017,
            z: -126.902794,
          },
          {
            x: 610.707642,
            y: -2.07000017,
            z: -124.138092,
          },
          {
            x: 610.707642,
            y: -2.07000017,
            z: -124.1381,
          },
        ],
        top: 0.108500004,
        bottom: -4.24850035,
      },
      {
        id: '7c993e82fe52ccedbdf9591f92e3bf9fe4352a4e',
        name: '十字路口',
        faction: 'shared',
        switches: [],
        position: {
          x: -334.804016,
          y: 2.19002676,
          z: -87.97917,
        },
        outline: [
          {
            x: -343.468567,
            y: 2.19002676,
            z: -97.4123154,
          },
          {
            x: -323.5146,
            y: 2.19002676,
            z: -94.0294647,
          },
          {
            x: -326.139465,
            y: 2.19002676,
            z: -78.54604,
          },
          {
            x: -346.0935,
            y: 2.19002676,
            z: -81.928894,
          },
        ],
        top: 5.063989,
        bottom: -0.6839967,
      },
      {
        id: 'e0e61c2ed23ae5387b02dfc1acb88dab0c83ff95',
        name: '老加油站',
        faction: 'pmc',
        switches: [],
        position: {
          x: 309.499634,
          y: -2.182013,
          z: -174.320175,
        },
        outline: [
          {
            x: 307.846741,
            y: -2.182013,
            z: -178.5385,
          },
          {
            x: 312.81073,
            y: -2.182013,
            z: -177.412659,
          },
          {
            x: 311.1526,
            y: -2.182013,
            z: -170.101868,
          },
          {
            x: 306.1886,
            y: -2.182013,
            z: -171.227722,
          },
        ],
        top: -0.00351572037,
        bottom: -4.36051035,
      },
      {
        id: '0df2e62edcfb6e0f1c36fd7be585a5850dd83eed',
        name: '拖车停车场',
        faction: 'pmc',
        switches: [],
        position: {
          x: -313.720276,
          y: -1.72000742,
          z: -233.280121,
        },
        outline: [
          {
            x: -331.066956,
            y: -1.72000742,
            z: -247.039673,
          },
          {
            x: -298.218018,
            y: -1.72000742,
            z: -249.0888,
          },
          {
            x: -296.373474,
            y: -1.72000742,
            z: -219.520569,
          },
          {
            x: -329.222473,
            y: -1.72000742,
            z: -217.471436,
          },
        ],
        top: 8.256189,
        bottom: -11.6962032,
      },
      {
        id: 'b113904d09c836e3b6fb937ebd1201f30a5900e6',
        name: 'RUAF路障',
        faction: 'pmc',
        switches: [],
        position: {
          x: -10.250061,
          y: 1.92000723,
          z: -138.450043,
        },
        outline: [
          {
            x: -18.840332,
            y: 1.92000723,
            z: -146.91925,
          },
          {
            x: 0.9493408,
            y: 1.92000723,
            z: -142.932373,
          },
          {
            x: -1.65991211,
            y: 1.92000723,
            z: -129.98082,
          },
          {
            x: -21.449585,
            y: 1.92000723,
            z: -133.967682,
          },
        ],
        top: 5.58883047,
        bottom: -1.748816,
      },
      {
        id: 'a8ee669bcd17e9c578059cf322f1efe5f70f8e07',
        name: '走私者的船',
        faction: 'pmc',
        switches: [],
        position: {
          x: -42.31012,
          y: -12.1700191,
          z: 120.800018,
        },
        outline: [
          {
            x: -47.7737427,
            y: -12.1700191,
            z: 113.490479,
          },
          {
            x: -34.4424438,
            y: -12.1700191,
            z: 116.176208,
          },
          {
            x: -36.8464966,
            y: -12.1700191,
            z: 128.109543,
          },
          {
            x: -50.1777954,
            y: -12.1700191,
            z: 125.423813,
          },
        ],
        top: -8.789648,
        bottom: -15.55039,
      },
      {
        id: '93659bafaf3bbedfdf9c7c235aba751177850f13',
        name: 'ZB-1012',
        faction: 'pmc',
        switches: [],
        position: {
          x: 459.427826,
          y: -2.31699228,
          z: -111.042969,
        },
        outline: [
          {
            x: 448.3258,
            y: -2.31699228,
            z: -112.800781,
          },
          {
            x: 469.766449,
            y: -2.31699228,
            z: -115.4541,
          },
          {
            x: 470.529877,
            y: -2.31699228,
            z: -109.285156,
          },
          {
            x: 449.089233,
            y: -2.31699228,
            z: -106.631836,
          },
        ],
        top: -0.138494968,
        bottom: -4.495505,
      },
      {
        id: '372308f8ae6c385c1a1397bf925af53847545a7d',
        name: '军事基地检查站',
        faction: 'scav',
        switches: [],
        position: {
          x: 644.87915,
          y: 2.400003,
          z: 126.867371,
        },
        outline: [
          {
            x: 640.3835,
            y: 2.400003,
            z: 123.039719,
          },
          {
            x: 648.7581,
            y: 2.400003,
            z: 122.415894,
          },
          {
            x: 649.3748,
            y: 2.400003,
            z: 130.695038,
          },
          {
            x: 649.3748,
            y: 2.400003,
            z: 130.695068,
          },
          {
            x: 641.0002,
            y: 2.400003,
            z: 131.318878,
          },
          {
            x: 641.0002,
            y: 2.400003,
            z: 131.318848,
          },
        ],
        top: 4.578503,
        bottom: 0.221502781,
      },
      {
        id: 'de953d179a503c836b89f8497600c448b1d7067d',
        name: '石间小道',
        faction: 'scav',
        switches: [],
        position: {
          x: 539.394,
          y: 11.8200016,
          z: 200.3388,
        },
        outline: [
          {
            x: 533.1549,
            y: 11.8200016,
            z: 196.329132,
          },
          {
            x: 533.1549,
            y: 11.8200016,
            z: 196.3291,
          },
          {
            x: 545.670044,
            y: 11.8200016,
            z: 196.387238,
          },
          {
            x: 545.633057,
            y: 11.8200016,
            z: 204.34845,
          },
          {
            x: 533.1179,
            y: 11.8200016,
            z: 204.290314,
          },
        ],
        top: 13.9984989,
        bottom: 9.641497,
      },
      {
        id: '7097325dad6b074566fc1e7744d8490151b001e7',
        name: '通往军事基地的铁路',
        faction: 'scav',
        switches: [],
        position: {
          x: 489.058228,
          y: 3.950006,
          z: 221.391266,
        },
        outline: [
          {
            x: 494.790955,
            y: 3.950006,
            z: 213.244232,
          },
          {
            x: 498.521973,
            y: 3.950006,
            z: 218.280853,
          },
          {
            x: 483.3255,
            y: 3.950006,
            z: 229.5383,
          },
          {
            x: 479.594452,
            y: 3.950006,
            z: 224.50174,
          },
          {
            x: 479.594452,
            y: 3.950006,
            z: 224.501709,
          },
        ],
        top: 6.93700552,
        bottom: 0.9630065,
      },
      {
        id: '977d435f5b1510a2fe4d662a8fc30d7cc19bd90c',
        name: '老路大门',
        faction: 'scav',
        switches: [],
        position: {
          x: 181.769958,
          y: 1.4999938,
          z: 214.01001,
        },
        outline: [
          {
            x: 175.027863,
            y: 1.4999938,
            z: 212.53595,
          },
          {
            x: 182.812042,
            y: 1.4999938,
            z: 207.187744,
          },
          {
            x: 188.512085,
            y: 1.4999938,
            z: 215.4841,
          },
          {
            x: 180.727875,
            y: 1.4999938,
            z: 220.8323,
          },
        ],
        top: 5.11153555,
        bottom: -2.111548,
      },
      {
        id: 'd048daa472b3806f452fdb3d4991032bab4366d5',
        name: '狙击手路障',
        faction: 'scav',
        switches: [],
        position: {
          x: 15.0805054,
          y: 0.139977932,
          z: 126.291855,
        },
        outline: [
          {
            x: 7.076599,
            y: 0.139977932,
            z: 121.39035,
          },
          {
            x: 22.0708,
            y: 0.139977932,
            z: 120.028961,
          },
          {
            x: 23.0844727,
            y: 0.139977932,
            z: 131.193359,
          },
          {
            x: 8.09021,
            y: 0.139977932,
            z: 132.554749,
          },
        ],
        top: 3.12697744,
        bottom: -2.84702158,
      },
      {
        id: '90ab07a4eacd76a88ae6a51bf8c2f17c92828691',
        name: '通往港口的铁路',
        faction: 'scav',
        switches: [],
        position: {
          x: -149.109558,
          y: -0.629980564,
          z: 46.68419,
        },
        outline: [
          {
            x: -162.481689,
            y: -0.629980564,
            z: 42.96492,
          },
          {
            x: -136.625916,
            y: -0.629980564,
            z: 40.61737,
          },
          {
            x: -135.737366,
            y: -0.629980564,
            z: 50.4034729,
          },
          {
            x: -161.59314,
            y: -0.629980564,
            z: 52.7510071,
          },
        ],
        top: 4.05269766,
        bottom: -5.31272,
      },
      {
        id: '606fa68466f40d1d349f443bd89df5934097ceaa',
        name: '拖车停车场工人棚屋',
        faction: 'scav',
        switches: [],
        position: {
          x: -248.543152,
          y: 2.550012,
          z: -232.991119,
        },
        outline: [
          {
            x: -253.47113,
            y: 2.550012,
            z: -239.575928,
          },
          {
            x: -244.233582,
            y: 2.550012,
            z: -239.996231,
          },
          {
            x: -243.6153,
            y: 2.550012,
            z: -226.406311,
          },
          {
            x: -252.852722,
            y: 2.550012,
            z: -225.986,
          },
        ],
        top: 5.835962,
        bottom: -0.7359376,
      },
      {
        id: '299a91e6562ad4d55747ac15f15c9e8608cff9d4',
        name: '通往塔科夫的铁路',
        faction: 'scav',
        switches: [],
        position: {
          x: -163.4682,
          y: 3.389978,
          z: -217.452026,
        },
        outline: [
          {
            x: -175.25177,
            y: 3.389978,
            z: -223.276718,
          },
          {
            x: -175.25177,
            y: 3.389978,
            z: -223.276733,
          },
          {
            x: -151.98761,
            y: 3.389978,
            z: -223.853424,
          },
          {
            x: -151.684509,
            y: 3.389978,
            z: -211.627289,
          },
          {
            x: -174.948669,
            y: 3.389978,
            z: -211.0506,
          },
        ],
        top: 6.99892569,
        bottom: -0.218969822,
      },
      {
        id: '8574c32eb626a3e230f454d65b9262d4f9e9fbf8',
        name: 'RUAF路障',
        faction: 'scav',
        switches: [],
        position: {
          x: -9.436584,
          y: 1.6499877,
          z: -138.743988,
        },
        outline: [
          {
            x: -19.4795532,
            y: 1.6499877,
            z: -148.371735,
          },
          {
            x: 3.20904541,
            y: 1.6499877,
            z: -144.544052,
          },
          {
            x: 0.606323242,
            y: 1.6499877,
            z: -129.116272,
          },
          {
            x: -22.0822754,
            y: 1.6499877,
            z: -132.943939,
          },
        ],
        top: 4.055017,
        bottom: -0.7550416,
      },
      {
        id: '1bcdc243701067f1469ee4d177ddde7c53aaecb6',
        name: '17号仓库',
        faction: 'scav',
        switches: [],
        position: {
          x: 45.9998779,
          y: 3.61000967,
          z: -78.43004,
        },
        outline: [
          {
            x: 39.1865845,
            y: 3.61000967,
            z: -83.9354248,
          },
          {
            x: 39.1865845,
            y: 3.61000967,
            z: -83.93543,
          },
          {
            x: 54.3983765,
            y: 3.61000967,
            z: -80.91896,
          },
          {
            x: 52.81317,
            y: 3.61000967,
            z: -72.92463,
          },
          {
            x: 37.60138,
            y: 3.61000967,
            z: -75.9411,
          },
        ],
        top: 6.014978,
        bottom: 1.20498037,
      },
      {
        id: '8194ee54571a0670e4d5bd0a02bdcb1cbb77a03e',
        name: '工厂棚屋',
        faction: 'scav',
        switches: [],
        position: {
          x: 205.5899,
          y: 3.719995,
          z: 3.31001282,
        },
        outline: [
          {
            x: 198.776642,
            y: 3.719995,
            z: -2.19539642,
          },
          {
            x: 213.988434,
            y: 3.719995,
            z: 0.821075439,
          },
          {
            x: 212.4032,
            y: 3.719995,
            z: 8.815414,
          },
          {
            x: 197.191376,
            y: 3.719995,
            z: 5.79895,
          },
        ],
        top: 6.124994,
        bottom: 1.31499624,
      },
      {
        id: '3fd0602903f1971d6930874e8f6cd4d754bceb58',
        name: '4号仓库',
        faction: 'scav',
        switches: [],
        position: {
          x: 341.569946,
          y: 3.550012,
          z: -25.84999,
        },
        outline: [
          {
            x: 333.2455,
            y: 3.550012,
            z: -28.57647,
          },
          {
            x: 348.536865,
            y: 3.550012,
            z: -31.15966,
          },
          {
            x: 349.8944,
            y: 3.550012,
            z: -23.12352,
          },
          {
            x: 334.603058,
            y: 3.550012,
            z: -20.540329,
          },
        ],
        top: 5.955011,
        bottom: 1.14498281,
      },
      {
        id: '00e4ba8e84314ddf6878090f2e7d3aaddcb43f53',
        name: '老加油站',
        faction: 'scav',
        switches: [],
        position: {
          x: 300.509,
          y: 3.469995,
          z: -198.522247,
        },
        outline: [
          {
            x: 292.922241,
            y: 3.469995,
            z: -206.711914,
          },
          {
            x: 310.8306,
            y: 3.469995,
            z: -202.7761,
          },
          {
            x: 308.0958,
            y: 3.469995,
            z: -190.332565,
          },
          {
            x: 290.187439,
            y: 3.469995,
            z: -194.268387,
          },
        ],
        top: 5.874994,
        bottom: 1.06499624,
      },
      {
        id: 'f162159cfa266422af986074b4397587616effcb',
        name: '工厂远角',
        faction: 'scav',
        switches: [],
        position: {
          x: 652.454834,
          y: 3.19999838,
          z: -160.48848,
        },
        outline: [
          {
            x: 644.045166,
            y: 3.19999838,
            z: -171.725128,
          },
          {
            x: 657.815857,
            y: 3.19999838,
            z: -173.459351,
          },
          {
            x: 660.864441,
            y: 3.19999838,
            z: -149.251816,
          },
          {
            x: 647.09375,
            y: 3.19999838,
            z: -147.517609,
          },
        ],
        top: 5.604997,
        bottom: 0.7949977,
      },
      {
        id: '988603509e1d1a6d59642e9b6c4514386416053f',
        name: '行政区大门',
        faction: 'scav',
        switches: [],
        position: {
          x: 671.13,
          y: 3.19999838,
          z: -54.6699753,
        },
        outline: [
          {
            x: 658.884766,
            y: 3.13287878,
            z: -62.78351,
          },
          {
            x: 679.4501,
            y: 3.13287878,
            z: -65.37342,
          },
          {
            x: 679.4501,
            y: 3.13287878,
            z: -65.37341,
          },
          {
            x: 681.8182,
            y: 3.13287878,
            z: -46.5695343,
          },
          {
            x: 661.2528,
            y: 3.13287878,
            z: -43.9796143,
          },
        ],
        top: 5.86072874,
        bottom: 0.4050269,
      },
      {
        id: 'cbb161149bdb3062b2a27447fbc804385948f671',
        name: 'Scav检查站',
        faction: 'scav',
        switches: [],
        position: {
          x: 652.24,
          y: 1.00499988,
          z: -27.1200027,
        },
        outline: [
          {
            x: 648.926636,
            y: 1.00499988,
            z: -31.4836311,
          },
          {
            x: 653.941162,
            y: 1.00499988,
            z: -32.30727,
          },
          {
            x: 655.4943,
            y: 1.00499988,
            z: -22.8513412,
          },
          {
            x: 650.4798,
            y: 1.00499988,
            z: -22.0277023,
          },
        ],
        top: 3.18349981,
        bottom: -1.17350006,
      },
    ],
    hazards: [
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: 154.953033,
          y: 10.4799957,
          z: -257.847382,
        },
        outline: [
          {
            x: 119.37793,
            y: 10.4799957,
            z: -264.979919,
          },
          {
            x: 155.221268,
            y: 10.4799957,
            z: -294.129456,
          },
          {
            x: 190.528152,
            y: 10.4799957,
            z: -250.714828,
          },
          {
            x: 154.684814,
            y: 10.4799957,
            z: -221.565292,
          },
        ],
        top: 20.776001,
        bottom: 0.183990479,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: 176.073029,
          y: 10.8999939,
          z: -279.4474,
        },
        outline: [
          {
            x: 139.948181,
            y: 10.8999939,
            z: -307.270752,
          },
          {
            x: 157.153625,
            y: 10.8999939,
            z: -320.934753,
          },
          {
            x: 212.197876,
            y: 10.8999939,
            z: -251.624023,
          },
          {
            x: 194.992432,
            y: 10.8999939,
            z: -237.960022,
          },
        ],
        top: 21.196,
        bottom: 0.603988647,
      },
      {
        hazardType: 'sniper',
        name: '狙击手',
        position: {
          x: 195.073029,
          y: 9.199997,
          z: -287.247375,
        },
        outline: [
          {
            x: 167.7802,
            y: 9.199997,
            z: -300.8979,
          },
          {
            x: 187.1408,
            y: 9.199997,
            z: -316.714569,
          },
          {
            x: 222.36586,
            y: 9.199997,
            z: -273.5969,
          },
          {
            x: 203.005264,
            y: 9.199997,
            z: -257.7802,
          },
        ],
        top: 19.4960022,
        bottom: -1.0960083,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: 50.7,
          y: -8.600006,
          z: 183.6,
        },
        outline: [
          {
            x: 25.44943,
            y: -8.600006,
            z: 138.084564,
          },
          {
            x: 67.48397,
            y: -8.600006,
            z: 134.329865,
          },
          {
            x: 75.95057,
            y: -8.600006,
            z: 229.115448,
          },
          {
            x: 33.91603,
            y: -8.600006,
            z: 232.870148,
          },
        ],
        top: 7.46499443,
        bottom: -24.6650066,
      },
      {
        hazardType: 'minefield',
        name: '地雷',
        position: {
          x: -17.7669678,
          y: -8.600006,
          z: 247.472626,
        },
        outline: [
          {
            x: -59.3667755,
            y: -8.600006,
            z: 135.981018,
          },
          {
            x: 6.31843567,
            y: -8.600006,
            z: 130.935867,
          },
          {
            x: 23.83284,
            y: -8.600006,
            z: 358.964233,
          },
          {
            x: -41.85237,
            y: -8.600006,
            z: 364.0094,
          },
        ],
        top: 7.46499443,
        bottom: -24.6650066,
      },
    ],
    lootContainers: [
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 180.439835,
          y: 0.6686764,
          z: 154.566574,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 180.439835,
          y: 0.6686764,
          z: 154.566574,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 180.439835,
          y: 0.6686764,
          z: 154.566574,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 180.439835,
          y: 0.6686764,
          z: 154.566574,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -205.450546,
          y: 2.00561547,
          z: -32.75649,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -205.450546,
          y: 2.00561547,
          z: -32.75649,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -205.450546,
          y: 2.00561547,
          z: -32.75649,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -205.450546,
          y: 2.00561547,
          z: -32.75649,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 358.43927,
          y: 2.046676,
          z: -9.13113,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 358.43927,
          y: 2.046676,
          z: -9.13113,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 358.43927,
          y: 2.046676,
          z: -9.13113,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 358.43927,
          y: 2.046676,
          z: -9.13113,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -185.733963,
          y: 2.5446496,
          z: -184.193344,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -185.733963,
          y: 2.5446496,
          z: -184.193344,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -185.733963,
          y: 2.5446496,
          z: -184.193344,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: -185.733963,
          y: 2.5446496,
          z: -184.193344,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 193.344055,
          y: 0.656677,
          z: 179.924957,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 193.344055,
          y: 0.656677,
          z: 179.924957,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 193.344055,
          y: 0.656677,
          z: 179.924957,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 193.344055,
          y: 0.656677,
          z: 179.924957,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 78.77167,
          y: 5.49324226,
          z: -167.997589,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 78.77167,
          y: 5.49324226,
          z: -167.997589,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 78.77167,
          y: 5.49324226,
          z: -167.997589,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 78.77167,
          y: 5.49324226,
          z: -167.997589,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 173.62146,
          y: 0.656676769,
          z: 177.416656,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 173.62146,
          y: 0.656676769,
          z: 177.416656,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 173.62146,
          y: 0.656676769,
          z: 177.416656,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 173.62146,
          y: 0.656676769,
          z: 177.416656,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.2602844,
          y: 5.49324226,
          z: -167.903244,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.2602844,
          y: 5.49324226,
          z: -167.903244,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.2602844,
          y: 5.49324226,
          z: -167.903244,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 79.2602844,
          y: 5.49324226,
          z: -167.903244,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 86.59143,
          y: 3.29996347,
          z: -159.702667,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 86.59143,
          y: 3.29996347,
          z: -159.702667,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 86.59143,
          y: 3.29996347,
          z: -159.702667,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 86.59143,
          y: 3.29996347,
          z: -159.702667,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 235.033478,
          y: 3.69827271,
          z: 135.873459,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 235.033478,
          y: 3.69827271,
          z: 135.873459,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 234.997971,
          y: 3.698597,
          z: 135.630432,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 235.033478,
          y: 3.69827271,
          z: 135.873459,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 225.684219,
          y: 3.69827485,
          z: 130.810043,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 225.684219,
          y: 3.69827485,
          z: 130.810043,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 225.684219,
          y: 3.69827485,
          z: 130.810043,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 225.684219,
          y: 3.69827485,
          z: 130.810043,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 226.164215,
          y: 3.69827485,
          z: 130.747055,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 226.164215,
          y: 3.69827485,
          z: 130.747055,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 226.164215,
          y: 3.69827485,
          z: 130.747055,
        },
      },
      {
        lootContainer: {
          id: '578f87b7245977356274f2cd',
          name: '抽屉',
          normalizedName: 'drawer',
        },
        position: {
          x: 226.126953,
          y: 3.69859886,
          z: 130.463882,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 174.0837,
          y: 0.299000263,
          z: 125.442955,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 416.799,
          y: 2.03378487,
          z: 27.7436848,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 15.7364807,
          y: -0.0490000248,
          z: 35.38472,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 417.027527,
          y: 2.02706,
          z: 29.6684933,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 416.514038,
          y: 2.040341,
          z: 25.86846,
        },
      },
      {
        lootContainer: {
          id: '578f879c24597735401e6bc6',
          name: '收银机',
          normalizedName: 'cash-register',
        },
        position: {
          x: 417.2687,
          y: 2.0248127,
          z: 31.18905,
        },
      },
      {
        lootContainer: {
          id: '5d6fe50986f77449d97f7463',
          name: '医疗物资箱',
          normalizedName: 'medical-supply-crate',
        },
        position: {
          x: 191.604065,
          y: 2.85412836,
          z: -99.23601,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 623.9413,
          y: 2.398,
          z: -125.481476,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 223.41008,
          y: 2.032876,
          z: -121.030334,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 232.791016,
          y: 3.7539103,
          z: -61.85577,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 219.645737,
          y: 8.274253,
          z: -8.180008,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: -271.1256,
          y: 0.9920018,
          z: -116.357376,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 213.664063,
          y: 1.35366178,
          z: -269.762268,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 85.084,
          y: 1.62344933,
          z: -150.348,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 234.728,
          y: -0.006000042,
          z: 148.215,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 468.1447,
          y: -2.68441939,
          z: -113.725822,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 87.17124,
          y: 1.464,
          z: -159.2316,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 27.5649567,
          y: 1.09809268,
          z: -110.118011,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 196.658249,
          y: 4.09148169,
          z: -251.53418,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 573.2312,
          y: 1.84200287,
          z: -111.776276,
        },
      },
      {
        lootContainer: {
          id: '5909e4b686f7747f5b744fa4',
          name: '死去的Scav',
          normalizedName: 'dead-scav',
        },
        position: {
          x: 98.72471,
          y: -1.03003883,
          z: 47.9650078,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 351.480865,
          y: 2.318,
          z: -58.03105,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 228.143738,
          y: 0.8530003,
          z: 149.606918,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -183.039963,
          y: 2.61266446,
          z: -188.842957,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 70.388,
          y: 2.39299965,
          z: -169.086,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 172.726181,
          y: 6.853401,
          z: 180.5876,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 180.490936,
          y: 6.85299969,
          z: 147.313934,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 171.9308,
          y: 0.9949,
          z: 149.1618,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 232.957962,
          y: 3.845,
          z: 133.393967,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 181.350449,
          y: 0.853000164,
          z: 153.493484,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 191.966644,
          y: 0.805200338,
          z: 170.827454,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 226.026428,
          y: 3.773,
          z: 153.02124,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 194.427811,
          y: 2.9076,
          z: 181.566513,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 178.980713,
          y: 0.7263999,
          z: 147.554337,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 564.8261,
          y: 7.86500168,
          z: -55.7503853,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -248.749985,
          y: 4.294,
          z: -221.396881,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 80.3195953,
          y: 2.358,
          z: -156.254578,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 86.4516,
          y: 2.358,
          z: -153.682587,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -248.8368,
          y: 4.28146839,
          z: -221.9261,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 191.771423,
          y: 4.18685341,
          z: 170.3134,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 570.5385,
          y: 7.791293,
          z: -84.65414,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 80.29341,
          y: 2.358,
          z: -156.885544,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -255.46373,
          y: 2.12187386,
          z: -68.04414,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 463.142731,
          y: 3.90212631,
          z: -64.986,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 602.2436,
          y: 5.981,
          z: -125.061584,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 172.113983,
          y: 4.28301,
          z: 148.563,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 237.366348,
          y: 3.89799976,
          z: 151.603,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 237.7551,
          y: 3.89799976,
          z: 151.5669,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 232.361954,
          y: 1.40953434,
          z: 133.580582,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 178.881,
          y: 3.92268133,
          z: 151.172,
        },
      },
      {
        lootContainer: {
          id: '5937ef2b86f77408a47244b3',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 179.378,
          y: 3.92268133,
          z: 151.096,
        },
      },
      {
        lootContainer: {
          id: '59387ac686f77401442ddd61',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 579.0292,
          y: 0.1329999,
          z: -2.77159977,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 228.491318,
          y: 0.8616003,
          z: 149.483948,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -204.265,
          y: 8.207099,
          z: -98.373,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 566.2071,
          y: 7.68464756,
          z: -87.75611,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 181.697083,
          y: 0.8620002,
          z: 153.372559,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 172.379532,
          y: 6.862401,
          z: 180.708527,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 233.304031,
          y: 3.855,
          z: 133.26889,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 180.837585,
          y: 6.86200047,
          z: 147.193008,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 20.2430573,
          y: 1.585,
          z: -24.975975,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 226.378448,
          y: 3.783,
          z: 152.93895,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 194.589508,
          y: 2.86159968,
          z: 180.740356,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 192.097473,
          y: 0.8152001,
          z: 171.172729,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 179.2638,
          y: 0.7263999,
          z: 147.411957,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 197.087891,
          y: 3.0650003,
          z: -103.656311,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -183.349777,
          y: 2.61997342,
          z: -188.875946,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 564.8259,
          y: 7.85000038,
          z: -56.0705948,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 601.615,
          y: 5.988,
          z: -125.036011,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -248.723587,
          y: 4.306219,
          z: -221.644791,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 172.388,
          y: 4.22533464,
          z: 148.619,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: -291.125671,
          y: 2.24,
          z: -113.742378,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 566.458862,
          y: 2.550741,
          z: -54.0948753,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 196.4646,
          y: 3.06000018,
          z: -103.730476,
        },
      },
      {
        lootContainer: {
          id: '578f8778245977358849a9b5',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 231.9266,
          y: 1.3842274,
          z: 133.693146,
        },
      },
      {
        lootContainer: {
          id: '5914944186f774189e5e76c2',
          name: '夹克',
          normalizedName: 'jacket',
        },
        position: {
          x: 383.55777,
          y: 2.479,
          z: -109.670555,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 520.638062,
          y: 2.031869,
          z: -98.1241455,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 608.833252,
          y: 4.856324,
          z: -124.694565,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 566.3806,
          y: 6.9668684,
          z: -79.27827,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -203.2852,
          y: 7.29399967,
          z: -105.046928,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 520.8157,
          y: 2.03186917,
          z: -98.54548,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 564.9174,
          y: 7.82436,
          z: -79.00784,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 606.078735,
          y: 4.85502434,
          z: -124.460907,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -201.3072,
          y: 7.29399967,
          z: -105.115929,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: -204.120712,
          y: 7.29399872,
          z: -108.5563,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 171.6862,
          y: 0.1998012,
          z: 179.6481,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 168.608612,
          y: 3.08699942,
          z: 153.854263,
        },
      },
      {
        lootContainer: {
          id: '59139c2186f77411564f8e42',
          name: '电脑机箱',
          normalizedName: 'pc-block',
        },
        position: {
          x: 238.990265,
          y: 0.1165967,
          z: 159.621918,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 196.674988,
          y: 3.469,
          z: -129.162,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 344.054016,
          y: 1.68300009,
          z: -79.58501,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 570.471,
          y: 9.826003,
          z: -123.468,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 203.401,
          y: 2.39999962,
          z: -123.140991,
        },
      },
      {
        lootContainer: {
          id: '5909d89086f77472591234a0',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 556.413,
          y: 4.88392544,
          z: -125.966,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 508.466064,
          y: 15.2399445,
          z: 119.504944,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -182.813156,
          y: 1.846,
          z: -185.766373,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 222.8436,
          y: 0.2746005,
          z: 138.380966,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 189.71991,
          y: 2.303001,
          z: -99.68798,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 226.859009,
          y: 0.3379972,
          z: 136.743622,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 416.705322,
          y: 1.59625423,
          z: 40.7256622,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 96.63037,
          y: -0.617923737,
          z: 45.4421234,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: -201.462112,
          y: 7.511999,
          z: -101.935677,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 238.815338,
          y: 0.337593555,
          z: 160.231644,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 229.098984,
          y: 0.3375957,
          z: 161.736237,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 176.22229,
          y: 3.2979908,
          z: 185.286545,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 206.6405,
          y: 0.08395171,
          z: 175.404785,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 116.306,
          y: 1.43540072,
          z: 27.9560013,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 222.192062,
          y: 0.0304999352,
          z: 140.071381,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 224.5627,
          y: 0.8821,
          z: 140.673615,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 526.9274,
          y: 3.6534,
          z: 43.6040726,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 579.9737,
          y: 0.954708338,
          z: 5.80328846,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 581.358154,
          y: 0.693400145,
          z: 2.20708084,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 40.8679657,
          y: 1.08800685,
          z: -83.23402,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -13.3480682,
          y: -0.406008482,
          z: -103.879021,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 179.68,
          y: 2.802,
          z: 148.28,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 526.348,
          y: 2.7539,
          z: 43.64,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 224.45697,
          y: 7.49400043,
          z: -21.8990021,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 303.845,
          y: 4.324875,
          z: 152.827728,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 115.402,
          y: 1.34000015,
          z: 27.8850021,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -253.584335,
          y: 1.02248156,
          z: -91.9951,
        },
      },
      {
        lootContainer: {
          id: '5d6fd13186f77424ad2a8c69',
          name: '配给物资箱',
          normalizedName: 'ration-supply-crate',
        },
        position: {
          x: 197.741089,
          y: 8.687887,
          z: -101.102371,
        },
      },
      {
        lootContainer: {
          id: '5d6fd13186f77424ad2a8c69',
          name: '配给物资箱',
          normalizedName: 'ration-supply-crate',
        },
        position: {
          x: 198.780014,
          y: 8.688,
          z: -102.970078,
        },
      },
      {
        lootContainer: {
          id: '5d6fe50986f77449d97f7463',
          name: '医疗物资箱',
          normalizedName: 'medical-supply-crate',
        },
        position: {
          x: 197.131775,
          y: 8.688875,
          z: -130.593063,
        },
      },
      {
        lootContainer: {
          id: '5d6fe50986f77449d97f7463',
          name: '医疗物资箱',
          normalizedName: 'medical-supply-crate',
        },
        position: {
          x: 205.662613,
          y: 8.69,
          z: -144.763168,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 208.58638,
          y: 8.676875,
          z: -119.424545,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 201.646332,
          y: 8.679999,
          z: -119.013046,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 96.60874,
          y: 2.06278515,
          z: -123.545,
        },
      },
      {
        lootContainer: {
          id: '5d6fd45b86f774317075ed43',
          name: '技术物资箱',
          normalizedName: 'technical-supply-crate',
        },
        position: {
          x: 97.82143,
          y: 2.0630002,
          z: -116.971329,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 171.412,
          y: 3.278,
          z: 170.452011,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 173.13,
          y: 3.278,
          z: 167.080261,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 235.967026,
          y: 3.359,
          z: 158.773,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 236.229309,
          y: 3.359,
          z: 161.822571,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 466.152161,
          y: 3.239,
          z: -49.7811241,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 475.7317,
          y: 3.239,
          z: -52.4293633,
        },
      },
      {
        lootContainer: {
          id: '578f8782245977354405a1e3',
          name: '保险箱',
          normalizedName: 'safe',
        },
        position: {
          x: 170.936218,
          y: 4.3826,
          z: 149.329651,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: -260.1949,
          y: 1.49269962,
          z: -166.735489,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 294.966431,
          y: 1.68519,
          z: -190.649277,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 416.984,
          y: 1.48821211,
          z: 36.2754,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 502.828735,
          y: 16.141,
          z: 94.0438461,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 235.154556,
          y: 0.6247163,
          z: 159.243683,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 416.48407,
          y: 1.3180002,
          z: 35.71989,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: -204.660233,
          y: 2.209,
          z: -33.52762,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 187.2726,
          y: 2.447,
          z: -102.5111,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 209.9214,
          y: 7.90400028,
          z: -140.334579,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 83.70425,
          y: 2.6869998,
          z: -144.682953,
        },
      },
      {
        lootContainer: {
          id: '5909d4c186f7746ad34e805a',
          name: '医药箱',
          normalizedName: 'medcase',
        },
        position: {
          x: 331.371,
          y: -2.877,
          z: -62.8162956,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 562.8048,
          y: 7.13157654,
          z: -88.0697,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 233.447189,
          y: 0.14049983,
          z: 136.397568,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 514.954041,
          y: 14.3790951,
          z: 106.2846,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 654.7954,
          y: 1.61650014,
          z: -12.7036324,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 574.430664,
          y: 1.68911994,
          z: -117.224907,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 454.898,
          y: 5.03250027,
          z: 177.1004,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 559.0112,
          y: 6.979476,
          z: -89.58462,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 203.639816,
          y: 8.788401,
          z: -126.289108,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 115.089928,
          y: 5.2755003,
          z: -85.87193,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 611.037231,
          y: 4.87649965,
          z: -125.201767,
        },
      },
      {
        lootContainer: {
          id: '5909d50c86f774659e6aaebe',
          name: '工具箱',
          normalizedName: 'toolbox',
        },
        position: {
          x: 623.505066,
          y: 4.86410046,
          z: -127.15094,
        },
      },
      {
        lootContainer: {
          id: '5d6d2b5486f774785c2ba8ea',
          name: '物资埋藏箱',
          normalizedName: 'ground-cache',
        },
        position: {
          x: 277.826,
          y: -1.865,
          z: 72.766,
        },
      },
      {
        lootContainer: {
          id: '5d6d2b5486f774785c2ba8ea',
          name: '物资埋藏箱',
          normalizedName: 'ground-cache',
        },
        position: {
          x: 428.027466,
          y: 1.08973241,
          z: -10.7794647,
        },
      },
      {
        lootContainer: {
          id: '5d6d2b5486f774785c2ba8ea',
          name: '物资埋藏箱',
          normalizedName: 'ground-cache',
        },
        position: {
          x: 560.603,
          y: 11.678,
          z: 115.131,
        },
      },
      {
        lootContainer: {
          id: '5d6d2b5486f774785c2ba8ea',
          name: '物资埋藏箱',
          normalizedName: 'ground-cache',
        },
        position: {
          x: 554.848,
          y: 11.399,
          z: 192.654,
        },
      },
      {
        lootContainer: {
          id: '5d6d2b5486f774785c2ba8ea',
          name: '物资埋藏箱',
          normalizedName: 'ground-cache',
        },
        position: {
          x: 607.301636,
          y: 1.15767312,
          z: -37.1151123,
        },
      },
      {
        lootContainer: {
          id: '5d6d2b5486f774785c2ba8ea',
          name: '物资埋藏箱',
          normalizedName: 'ground-cache',
        },
        position: {
          x: 670.25,
          y: 1.04399991,
          z: -47.57,
        },
      },
      {
        lootContainer: {
          id: '5d6d2b5486f774785c2ba8ea',
          name: '物资埋藏箱',
          normalizedName: 'ground-cache',
        },
        position: {
          x: 656.736,
          y: 1.109,
          z: -149.654,
        },
      },
      {
        lootContainer: {
          id: '5d6d2b5486f774785c2ba8ea',
          name: '物资埋藏箱',
          normalizedName: 'ground-cache',
        },
        position: {
          x: -40.483,
          y: -8.267,
          z: -76.69699,
        },
      },
      {
        lootContainer: {
          id: '5d6d2b5486f774785c2ba8ea',
          name: '物资埋藏箱',
          normalizedName: 'ground-cache',
        },
        position: {
          x: 184.295,
          y: 1.18199992,
          z: -227.100983,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 173.0546,
          y: 4.06297445,
          z: 171.649445,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 174.923859,
          y: 3.21727133,
          z: 171.989243,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 235.840546,
          y: 3.27027178,
          z: 155.2304,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 234.561829,
          y: 3.27027178,
          z: 155.439529,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 361.783264,
          y: 1.62927246,
          z: -14.5357475,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -171.970535,
          y: 1.43414,
          z: -82.73695,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 345.654968,
          y: 1.50727177,
          z: -160.769562,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -125.8022,
          y: 2.36200047,
          z: -0.4000821,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -122.8094,
          y: 2.362,
          z: -0.864849567,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 415.421082,
          y: 2.76897669,
          z: 41.1331,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 419.113342,
          y: 1.58797741,
          z: 36.9645271,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 491.3382,
          y: 16.2130013,
          z: 103.195984,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 487.042847,
          y: 16.051,
          z: 104.30938,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -253.788254,
          y: 2.03100014,
          z: -62.454113,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -257.993469,
          y: 1.28100014,
          z: -66.083786,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -296.494873,
          y: 1.388,
          z: -117.042252,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -290.270935,
          y: 1.36399984,
          z: -114.185532,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 564.1863,
          y: 2.012,
          z: -52.3841362,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 565.980835,
          y: 1.85300016,
          z: -47.4499168,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 565.033264,
          y: 1.835,
          z: -53.60911,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 564.7928,
          y: 1.835,
          z: -58.7502556,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 194.151016,
          y: 3.365,
          z: -103.765137,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 190.359879,
          y: 2.632,
          z: -104.535736,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 208.4771,
          y: 7.74574661,
          z: -2.20347261,
        },
      },
      {
        lootContainer: {
          id: '5909d7cf86f77470ee57d75a',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 209.2562,
          y: 8.151746,
          z: -2.198773,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 224.248856,
          y: 0.889999866,
          z: 144.519379,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 225.0563,
          y: 0.5749998,
          z: 147.733246,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 200.396408,
          y: 3.96170282,
          z: 12.1741982,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 201.776428,
          y: 3.962,
          z: 14.40041,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 372.6802,
          y: 2.540803,
          z: -94.98816,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 372.422882,
          y: 2.13288546,
          z: -89.0513153,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 345.9142,
          y: 2.09519982,
          z: -26.91595,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 347.852417,
          y: 2.47434855,
          z: -25.5616875,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -202.441757,
          y: 2.29599977,
          z: -105.942337,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: -202.8589,
          y: 1.6170001,
          z: -111.131638,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 562.738647,
          y: 1.50400019,
          z: -53.7843742,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 562.452,
          y: 2.361,
          z: -53.8102837,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 187.81459,
          y: 2.72600079,
          z: -99.90245,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 189.432449,
          y: 2.29010057,
          z: -104.398392,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 198.420151,
          y: 2.662,
          z: -147.063156,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 199.6996,
          y: 2.51,
          z: -149.534836,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 332.157166,
          y: 10.372,
          z: -59.55366,
        },
      },
      {
        lootContainer: {
          id: '5909d5ef86f77467974efbd8',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 330.821075,
          y: 9.5668,
          z: -59.94807,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 197.806412,
          y: 6.238,
          z: 171.922836,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 196.541046,
          y: 6.238,
          z: 183.073257,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 418.353119,
          y: 1.74699974,
          z: -85.9755554,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 419.78302,
          y: 1.74699974,
          z: -87.88301,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 493.688721,
          y: 14.4673777,
          z: 129.383713,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 492.455017,
          y: 14.90673,
          z: 125.726624,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 579.299866,
          y: 0.923807144,
          z: 5.014484,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 579.6693,
          y: 0.6531067,
          z: 2.79495573,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 347.786621,
          y: -2.338,
          z: -36.6005669,
        },
      },
      {
        lootContainer: {
          id: '5909d76c86f77471e53d2adf',
          name: '武器箱',
          normalizedName: 'weapon-box',
        },
        position: {
          x: 339.069641,
          y: -2.338,
          z: -33.1545525,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 601.966431,
          y: 1.55510712,
          z: -134.755966,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 604.178955,
          y: 2.60310721,
          z: -136.370163,
        },
      },
      {
        lootContainer: {
          id: '5909d36d86f774660f0bb900',
          name: '手榴弹箱',
          normalizedName: 'grenade-box',
        },
        position: {
          x: 603.7757,
          y: 2.603107,
          z: -135.898666,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 468.7058,
          y: -2.53659987,
          z: -114.465469,
        },
      },
      {
        lootContainer: {
          id: '5909d45286f77465a8136dc6',
          name: '木制弹药箱',
          normalizedName: 'wooden-ammo-box',
        },
        position: {
          x: 466.057922,
          y: -2.4293,
          z: -111.194443,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 76.8569,
          y: 1.72600079,
          z: -156.710159,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 81.2140961,
          y: 1.46369982,
          z: -154.394791,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 488.21814,
          y: 5.557,
          z: -140.239151,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 489.490051,
          y: 5.613,
          z: -138.334732,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 498.697144,
          y: 6.3972,
          z: -141.6555,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 342.131073,
          y: -2.75100017,
          z: -34.1810875,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 332.641876,
          y: -2.75100017,
          z: -32.505764,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 333.661224,
          y: -2.76899981,
          z: -37.7401543,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 227.073029,
          y: 0.4420004,
          z: 149.533,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 228.53508,
          y: -0.0419998169,
          z: 149.540466,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 192.672012,
          y: 2.81599426,
          z: 172.734009,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 194.284836,
          y: 2.816,
          z: 169.737854,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -274.323242,
          y: 0.8380003,
          z: -169.445175,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -267.749451,
          y: 0.8379998,
          z: -171.278336,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -257.650024,
          y: 3.63599944,
          z: -234.841049,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -255.194778,
          y: 3.8829,
          z: -231.157272,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 573.2321,
          y: 7.19400024,
          z: -79.94527,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 574.370239,
          y: 7.597,
          z: -90.65321,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 570.1681,
          y: 6.71399975,
          z: -88.45404,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 80.4189,
          y: 1.94999981,
          z: -163.005142,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 76.9008,
          y: 2.025,
          z: -158.024246,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 169.203979,
          y: -0.09841108,
          z: 163.458,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 170.755508,
          y: -0.1630001,
          z: 164.138657,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 89.96791,
          y: 1.92599964,
          z: -149.7882,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 84.7730255,
          y: 1.93100023,
          z: -149.305038,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 227.940033,
          y: 0.3838997,
          z: 141.179,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 234.121979,
          y: -0.138999939,
          z: 136.772171,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 202.974976,
          y: 2.193,
          z: -120.628189,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 205.319962,
          y: 2.1417,
          z: -115.870865,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -187.853745,
          y: 1.71751785,
          z: -184.089188,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -183.208908,
          y: 1.78100014,
          z: -188.635239,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 234.770035,
          y: 3.429,
          z: 152.667,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 236.236145,
          y: 2.859,
          z: 152.343689,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -201.963181,
          y: 1.025013,
          z: -141.357559,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -213.12468,
          y: 1.158,
          z: -132.800461,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -214.126328,
          y: 1.158,
          z: -150.298233,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 411.2492,
          y: 1.634028,
          z: 36.50214,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 410.9683,
          y: 1.63399982,
          z: 39.6730461,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -201.631912,
          y: 7.538002,
          z: -107.437576,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: -203.8993,
          y: 7.03600025,
          z: -104.526016,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 560.5023,
          y: 7.10300064,
          z: -78.08612,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 564.3916,
          y: 6.7130003,
          z: -78.88536,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 561.211731,
          y: 7.196,
          z: -86.14818,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 648.6435,
          y: 0.2119999,
          z: -20.7142754,
        },
      },
      {
        lootContainer: {
          id: '578f87a3245977356274f2cb',
          name: '旅行包',
          normalizedName: 'duffle-bag',
        },
        position: {
          x: 652.8103,
          y: 0.260000229,
          z: -20.224102,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 567.1455,
          y: 7.0216,
          z: -88.84065,
        },
      },
      {
        lootContainer: {
          id: '5909d24f86f77466f56e6855',
          name: 'SMU06 医疗包',
          normalizedName: 'medbag-smu06',
        },
        position: {
          x: 564.438049,
          y: 6.857401,
          z: -89.988205,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 565.6158,
          y: 7.29727268,
          z: -47.36668,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 572.8897,
          y: 7.062272,
          z: -48.2855949,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -223.667526,
          y: 1.40427208,
          z: -149.405869,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -224.410812,
          y: 1.54227209,
          z: -143.8011,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 386.802368,
          y: 1.27727079,
          z: 9.87505,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 388.198975,
          y: 1.84127188,
          z: 11.4391212,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 2.85318,
          y: -0.479204178,
          z: 67.38272,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -0.759979248,
          y: -0.5763459,
          z: 67.88306,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 102.326462,
          y: 4.3122716,
          z: 27.4271584,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 96.9144058,
          y: 4.3122716,
          z: 28.6204414,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -14.5121155,
          y: 0.260289669,
          z: -132.940079,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -15.6280823,
          y: 0.260272026,
          z: -136.400589,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 322.9122,
          y: 3.18927169,
          z: -59.5113029,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 322.317139,
          y: 3.82227182,
          z: -61.81132,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -330.123962,
          y: 0.7432718,
          z: -90.52818,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -331.4248,
          y: 0.7432718,
          z: -92.46147,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 601.4648,
          y: 4.99427176,
          z: -121.466537,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 605.162964,
          y: 4.99427176,
          z: -121.18486,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 609.6555,
          y: 4.99427176,
          z: -125.911545,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 436.373718,
          y: 1.20927191,
          z: -0.876812458,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 434.545837,
          y: 1.16407776,
          z: -4.0957303,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 112.113243,
          y: -2.46022868,
          z: 162.470078,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 108.298279,
          y: -2.56272769,
          z: 161.713181,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 104.86718,
          y: -2.763728,
          z: 169.320221,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 177.100815,
          y: 3.214272,
          z: 175.838882,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 182.9831,
          y: 3.214272,
          z: 178.625916,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 186.318222,
          y: 3.214272,
          z: 178.692184,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 227.941162,
          y: 0.269271851,
          z: 143.214615,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 230.773,
          y: 0.269271851,
          z: 140.479843,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 372.167175,
          y: 1.464272,
          z: -76.4176941,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 369.461853,
          y: 1.6175766,
          z: -53.4754753,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 563.1734,
          y: 1.9372201,
          z: -49.65205,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 568.8285,
          y: 1.786272,
          z: -47.51118,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -340.800171,
          y: -0.110728264,
          z: -88.3416,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: -339.228027,
          y: -0.00472784042,
          z: -90.30742,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 575.310669,
          y: -0.199728489,
          z: 2.753696,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 574.5013,
          y: -0.199728489,
          z: -1.51339388,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 178.9903,
          y: 6.235272,
          z: 150.8691,
        },
      },
      {
        lootContainer: {
          id: '578f87ad245977356274f2cc',
          name: '木制板条箱',
          normalizedName: 'wooden-crate',
        },
        position: {
          x: 176.05986,
          y: 6.235272,
          z: 148.344543,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 204.007874,
          y: -2.931658,
          z: 70.91833,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 212.011856,
          y: -1.26669383,
          z: 38.5095177,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 152.2533,
          y: -1.784694,
          z: 47.81419,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 162.350433,
          y: -1.19808316,
          z: 14.7094307,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 257.505249,
          y: -1.18825078,
          z: 32.8986664,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 218.338867,
          y: 0.5405748,
          z: 18.0747032,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 314.861267,
          y: -0.513181,
          z: 26.6847248,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 335.8783,
          y: 1.89209354,
          z: 75.9049,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 341.884338,
          y: 1.91606355,
          z: 79.4533,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 368.0431,
          y: -1.40473962,
          z: 31.83318,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 418.0852,
          y: 0.9943428,
          z: 56.400177,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 410.22702,
          y: 3.090856,
          z: 81.10801,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 391.809,
          y: 15.2763653,
          z: 204.783112,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 407.3587,
          y: 13.2218771,
          z: 211.221558,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 430.1357,
          y: 12.86352,
          z: 207.753891,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 452.8422,
          y: 7.017599,
          z: 220.203308,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 403.752533,
          y: 1.29847038,
          z: 63.75535,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 376.4537,
          y: 0.214396954,
          z: 23.3787861,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 403.280457,
          y: 1.21703172,
          z: -8.128334,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 436.550232,
          y: 1.09599555,
          z: 29.1125336,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 429.403625,
          y: -1.53239989,
          z: -84.72633,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 425.120117,
          y: 1.2389617,
          z: -91.85288,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 438.9086,
          y: 2.062275,
          z: -101.461662,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 465.458984,
          y: 1.09217918,
          z: -102.9959,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 515.665344,
          y: 13.7958956,
          z: 127.0757,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 504.552368,
          y: 13.4092131,
          z: 131.761581,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 458.9379,
          y: 12.1957674,
          z: 100.923149,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 522.8997,
          y: 13.395956,
          z: 117.0268,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 660.5046,
          y: 0.792645335,
          z: 125.893753,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 642.567139,
          y: -0.165466309,
          z: 117.880547,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 617.052246,
          y: -0.0802121162,
          z: 74.2924042,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 588.9445,
          y: 8.566159,
          z: 139.452072,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 616.1579,
          y: 1.28816712,
          z: -120.158791,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 583.525452,
          y: 1.21252847,
          z: -130.298,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 580.234436,
          y: 1.13402915,
          z: -78.29914,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 647.9005,
          y: -0.42653513,
          z: -64.90734,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -46.0551,
          y: -7.92914,
          z: -102.672783,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -41.1875763,
          y: -8.416024,
          z: -74.70531,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -79.00282,
          y: -9.649792,
          z: -46.75732,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: -49.2335663,
          y: -11.8996477,
          z: -25.5060158,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 96.4383545,
          y: 1.36613774,
          z: -86.3659058,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 73.64198,
          y: 1.165641,
          z: -102.4106,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 88.8680954,
          y: 1.10068333,
          z: -70.79745,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 85.9944153,
          y: 1.07997394,
          z: -84.21442,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 227.151,
          y: 1.22100019,
          z: -241.808014,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 211.565521,
          y: 1.11536133,
          z: -270.26355,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 177.44252,
          y: 1.22836137,
          z: -232.092545,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 169.868515,
          y: 1.12096131,
          z: -208.132553,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 286.395,
          y: 1.681,
          z: -205.56601,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 294.105042,
          y: 1.18947423,
          z: -191.005234,
        },
      },
      {
        lootContainer: {
          id: '5d6d2bb386f774785b07a77a',
          name: '物资埋藏桶',
          normalizedName: 'buried-barrel-cache',
        },
        position: {
          x: 289.6825,
          y: 3.49204254,