const CD_RED = 'cd-red';
const VS_RED = 'vs-red';
const SW_RED = 'sw-red';

const AFFINITY_NULL = 'No Type Effect';
const ATK = 'atk';
const ATK_BOOST = 'atk-boost';
const ATK_DOWN = 'atk-down';
const BAR_GD = 'bar-gd';
const BAR_GT = 'bar-gt';
const BAR_HP = 'bar-hp';
const BAR_P = 'bar-p';
const BAR_SLOT = 'bar-slot';
const BIND = 'bind';
const BLIND = 'blind';
const BLOW_AWAY = 'blow-away';
const BURN = 'burn';
const BURN_P = 'burn-p';
const CD_REW = 'cd-rew';
const CHAIN_ATK_DOWN_MIN = 'chain-atk-down-min';
const CHAIN_ATK_DOWN_MAX = 'chain-atk-down-max';
const CHAIN_DOWN = 'chain-down';
const CHAIN_LOCK = 'chain-lock';
const CLEAR_BUFF = 'clear-buff';
const DEF = 'def';
const DEF_NULL = 'def-null';
const DEF_PERC = 'def-perc';
const DEF_THRES = 'def-thres';
const DESP = 'desp';
const DMG_LIMIT = 'dmg-limit';
const DMG_NORMAL = 'dmg-normal';
const FEAR = 'fear';
const INC_DMG = 'inc-dmg';
const HP_CUT = 'hp-cut'
const HUNGER = 'hunger';
const IMMU_ALL = 'immu-all';
const IMMU_DEF = 'immu-def';
const IMMU_DELAY = 'immu-delay';
const IMMU_EXCEPT = 'immu-except';
const IMMU_POISON = 'immu-poison';
const INTIM = 'intim';
const NAO = 'nao';
const HEAL_BIND = 'heal-bind';
const PAIN = 'pain';
const PARA = 'para';
const RESIL = 'resil';
const SHIP_BIND = 'ship-bind';
const SLOT_ATK_DOWN = 'Slot Atk Down';
const SLOT_BIND = 'slot-bind';
const SLOT_BLOCK = 'slot-block';
const SLOT_BOOST = 'orb-boost';
const SLOT_CHANGE = 'slot-change';
const SLOT_EFT_DOWN = 'Slot Effect Down';
const SLOT_NEG = 'slot-neg';
const SLOT_PARA = 'slot-para';
const SLOT_POISON = 'slot-poison';
const SP_BIND = 'sp-bind';
const SP_LIMIT = 'sp-limit';
const STUN = 'stun';
const TARGET_LOCK = 'target-lock';
const TERRITORY = 'Territory';

var tm_opponents = {
    // ========== Mihawk ==========
    1808: [
        {
            name: 'Moria',
            type: 'DEX'
        },
        {
            name: 'Hancock',
            type: 'PSY'
        },
        {
            name: 'Kuma',
            type: 'PSY'
        },
        {
            name: ['Dofla', 'mingo'],
            type: ['DEX', 'INT']
        },
        {
            name: 'Mihawk',
            type: 'STR'
        }
    ],

    // ========== Whitebeard ==========
    1853: [
        {
            name: 'Marco',
            type: 'PSY'
        },
        {
            name: 'Jozu',
            type: 'STR'
        },
        {
            name: 'Vista',
            type: 'QCK'
        },
        {
            name: 'Ace',
            type: 'DEX'
        },
        {
            name: 'WB',
            type: 'INT'
        }
    ],

    // ========== Cavendish ==========
    1889: [
        {
            name: 'Law',
            type: 'STR'
        },
        {
            name: 'Tashigi',
            type: 'PSY'
        },
        {
            name: 'Sabo',
            type: 'INT'
        },
        {
            name: 'Bonney',
            type: 'PSY'
        },
        {
            name: 'Cavendish',
            type: 'PSY'
        }
    ],

    // ========== G4 ==========
    1916: {
        1364: {
            name: 'Franky',
            type: 'PSY',
            pos: 0
        },
        1532: {
            name: 'Usopp',
            type: 'DEX',
            pos: 2
        },
        1549: {
            name: 'Robin',
            type: 'PSY',
            pos: 1
        },
        1921: {
            name: 'Zoro',
            type: 'DEX',
            pos: 3
        },
        1916: {
            name: 'Gear 4',
            type: 'QCK',
            pos: 4
        }
    },

    // ========== Ace ==========
    1941: {
        410: {
            name: 'Jinbe',
            type: 'QCK',
            pos: 3
        },
        645: {
            name: 'Whitey Bay',
            type: 'INT',
            pos: 0
        },
        1222: {
            name: 'Oars Jr',
            type: 'STR',
            pos: 1
        },
        1851: {
            name: 'Squard',
            type: 'DEX',
            pos: 2
        },
        1941: {
            name: 'Ace',
            type: 'STR',
            pos: 4
        }
    },

    // ========== Valentine Sabo ==========
    1972: {
        1404: {
            name: 'Luffy',
            type: 'QCK',
            pos: 3
        },
        1467: {
            name: 'Cavendish',
            type: 'PSY',
            pos: 2
        },
        1536: {
            name: 'Duval',
            type: 'PSY',
            pos: 0
        },
        1926: {
            name: 'Coby',
            type: 'INT',
            pos: 1
        },
        1972: {
            name: 'Sabo',
            type: 'DEX',
            pos: 4
        }
    },

    // ========== Sanji & Zoro ==========
    2000: {
        265: {
            name: ['Meppo & ', 'Coby'],
            type: ['INT', 'QCK'],
            pos: 1
        },
        1491: {
            name: ['Mr. 5 & ', 'Ms. Val'],
            type: ['QCK', 'STR'],
            pos: 0
        },
        1543: {
            name: ['Usopp & ', 'Chopper'],
            type: ['DEX', 'QCK'],
            pos: 3
        },
        1759: {
            name: ['Brook & ', 'Pedro'],
            type: ['QCK', 'INT'],
            pos: 2
        },
        2000: {
            name: ['Sanji & ', 'Zoro'],
            type: ['PSY', 'DEX'],
            pos: 4
        }
    },

    // ========== Kizaru ==========
    2064: {
        459: {
            name: 'Sengoku',
            type: 'PSY',
            pos: 2
        },
        611: {
            name: 'Purinpurin',
            type: 'PSY',
            pos: 1
        },
        1423: {
            name: 'T-Bone',
            type: 'QCK',
            pos: 0
        },
        1983: {
            name: ['Smoker & ', 'Tashigi'],
            type: ['INT', 'PSY'],
            pos: 3
        },
        2064: {
            name: 'Kizaru',
            type: 'DEX',
            pos: 4
        }
    },

    // ========== Kizaru (JPN) ==========
    '2064_jpn': [
        {
            name: 'Sengoku',
            type: 'PSY'
        },
        {
            name: 'T-Bone',
            type: 'QCK'
        },
        {
            name: ['Smoker & ', 'Tashigi'],
            type: ['INT', 'PSY']
        },
        {
            name: 'Purinpurin',
            type: 'PSY'
        },
        {
            name: 'Kizaru',
            type: 'DEX'
        }
    ],

    // ========== Big Mom ==========
    2109: {
        2065: {
            name: 'Pudding',
            type: 'PSY',
            pos: 0
        },
        2076: {
            name: 'Nami',
            type: 'INT',
            pos: 3
        },
        2080: {
            name: 'Brook',
            type: 'STR',
            pos: 2
        },
        2082: {
            name: 'Pedro',
            type: 'QCK',
            pos: 1
        },
        1815: {
            name: 'Sanji',
            type: 'STR',
            pos: 4
        },
        2109: {
            name: 'Big Mom',
            type: 'STR',
            pos: 5
        }
    },

    // ========== Crocodile ==========
    2137: {
        257: {
            name: 'Izo',
            type: 'DEX',
            pos: 0
        },
        1245: {
            name: 'Luffy',
            type: 'PSY',
            pos: 2
        },
        1806: {
            name: 'Buggy',
            type: 'QCK',
            pos: 1
        },
        1849: {
            name: 'Akainu',
            type: 'STR',
            pos: 3
        },
        2137: {
            name: 'Croc',
            type: 'INT',
            pos: 4
        }
    },

    // ========== Jack ==========
    2175: {
        1716: {
            name: 'Caesar',
            type: 'STR',
            pos: 3
        },
        1880: {
            name: 'Hody',
            type: 'INT',
            pos: 2
        },
        1895: {
            name: 'Urouge',
            type: 'QCK',
            pos: 1
        },
        2111: {
            name: 'Kid',
            type: 'DEX',
            pos: 0
        },
        2175: {
            name: 'Jack',
            type: 'QCK',
            pos: 4
        }
    },

    // ========== Eneru ==========
    2211: {
        463: {
            name: 'Satori',
            type: 'PSY',
            pos: 0
        },
        1197: {
            name: 'Ohm',
            type: 'INT',
            pos: 3
        },
        1253: {
            name: 'Shura',
            type: 'DEX',
            pos: 1
        },
        1341: {
            name: 'Gedatsu',
            type: 'QCK',
            pos: 2
        },
        2211: {
            name: 'Eneru',
            type: 'PSY',
            pos: 4
        }
    },

    // ========== Shanks ==========
    2261: {
        777: {
            name: 'Lucky Roux',
            type: 'PSY',
            pos: 0
        },
        2046: {
            name: 'Yasopp',
            type: 'STR',
            pos: 1
        },
        2256: {
            name: 'Mihawk',
            type: 'DEX',
            pos: 3
        },
        2257: {
            name: 'Ace',
            type: 'QCK',
            pos: 2
        },
        1770: {
            name: 'Beckman',
            type: 'INT',
            pos: 4
        },
        2261: {
            name: 'Shanks',
            type: 'DEX',
            pos: 5
        }
    },

    // ========== Boa Hancock ==========
    2299: {
        1300: {
            name: 'Rebecca',
            type: 'STR',
            pos: 3
        },
        1306: {
            name: 'Sugar',
            type: 'QCK',
            pos: 1
        },
        2292: {
            name: 'Vivi',
            type: 'INT',
            pos: 0
        },
        2297: {
            name: 'Perona',
            type: 'DEX',
            pos: 2
        },
        2295: {
            name: 'Moria',
            type: 'QCK',
            pos: 4
        },
        2299: {
            name: 'Hancock',
            type: 'INT',
            pos: 5
        }
    },

    // ========== Law ==========
    2336: {
        1004: {
            name: 'Sachi & Penguin',
            type: 'QCK',
            pos: 1
        },
        1532: {
            name: 'Usopp',
            type: 'DEX',
            pos: 2
        },
        1593: {
            name: 'Luffy',
            type: 'PSY',
            pos: 3
        },
        1749: {
            name: 'Bepo',
            type: 'QCK',
            pos: 0
        },
        1412: {
            name: 'Chopper',
            type: 'STR',
            pos: 4
        },
        2336: {
            name: 'Law',
            type: 'STR',
            pos: 5
        }
    },

    // ========== Christmas Nami ==========
    2362: {
        1413: {
            name: 'Whitebeard',
            type: 'STR',
            pos: 3
        },
        1635: {
            name: 'Brownbeard',
            type: 'PSY',
            pos: 0
        },
        1882: {
            name: 'Rayleigh',
            type: 'DEX',
            pos: 2
        },
        2197: {
            name: 'Blackbeard',
            type: 'INT',
            pos: 1
        },
        2362: {
            name: 'Nami',
            type: 'PSY',
            pos: 4
        }
    },

    // ========== Kaido ==========
    2387: {
        418: {
            name: 'Doffy',
            type: 'DEX',
            pos: 2
        },
        1091: {
            name: 'X Drake',
            type: 'PSY',
            pos: 0
        },
        1830: {
            name: 'Caesar',
            type: 'INT',
            pos: 3
        },
        2230: {
            name: 'Sheepshead',
            type: 'STR',
            pos: 1
        },
        2231: {
            name: 'Jack',
            type: 'STR',
            pos: 4
        },
        2387: {
            name: 'Kaido',
            type: 'STR',
            pos: 5
        }
    },

    // ========== Doffy ==========
    2443: {
        1401: {
            name: 'Gladius',
            type: 'STR',
            pos: 0
        },
        1902: {
            name: 'Pica',
            type: 'INT',
            pos: 1
        },
        1906: {
            name: 'Sugar',
            type: 'PSY',
            pos: 2
        },
        2144: {
            name: 'Diamante',
            type: 'DEX',
            pos: 3
        },
        2443: {
            name: 'Doflamingo',
            type: 'QCK',
            pos: 4
        },
        1943: {
            name: 'Pink',
            type: 'STR',
            pos: 5
        }
    },

    // ========== Smoothie & Oven ==========
    2469: {
        2240: {
            name: 'Perospero',
            type: 'DEX',
            pos: 3
        },
        2344: {
            name: 'Bavarois',
            type: 'PSY',
            pos: 0
        },
        2346: {
            name: 'Galette',
            type: 'INT',
            pos: 2
        },
        2369: {
            name: 'Montd\'Or',
            type: 'STR',
            pos: 1
        },
        2234: {
            name: 'Big Mom',
            type: 'STR',
            pos: 4
        },
        2469: {
            name: ['Smoothie & ', 'Oven'],
            type: ['PSY', 'QCK'],
            pos: 5
        }
    },

    // ========== Weevil ==========
    2510: {
        836: {
            name: 'Kuma',
            type: 'STR',
            pos: 1
        },
        1445: {
            name: 'Hancock',
            type: 'QCK',
            pos: 2
        },
        2277: {
            name: 'Buggy',
            type: 'INT',
            pos: 0
        },
        2475: {
            name: 'Mihawk',
            type: 'DEX',
            pos: 3
        },
        2510: {
            name: 'Weevil',
            type: 'PSY',
            pos: 4
        },
        1751: {
            name: 'Law',
            type: 'QCK',
            pos: 5
        }
    },

    // ========== Shanks & Beckman ==========
    2557: {
        860: {
            name: 'Coby',
            type: 'PSY',
            pos: 0
        },
        1192: {
            name: 'Aokiji',
            type: 'QCK',
            pos: 3
        },
        1780: {
            name: 'Kizaru',
            type: 'DEX',
            pos: 2
        },
        2197: {
            name: 'Blackbeard',
            type: 'INT',
            pos: 1
        },
        1314: {
            name: 'Akainu',
            type: 'STR',
            pos: 4
        },
        2557: {
            name: ['Shanks & ', 'Beckman'],
            type: ['INT', 'DEX'],
            pos: 5
        }
    },

    // ========== Lucci ==========
    2583: {
        963: {
            name: 'Charlos',
            type: 'STR',
            pos: 0
        },
        964: {
            name: 'Roswald',
            type: 'DEX',
            pos: 1
        },
        1595: {
            name: 'Fujitora',
            type: 'PSY',
            pos: 2
        },
        2340: {
            name: 'Stussy',
            type: 'QCK',
            pos: 3
        },
        2583: {
            name: 'Lucci',
            type: 'INT',
            pos: 4
        },
        1926: {
            name: 'Coby',
            type: 'INT',
            pos: 5
        },
    },

    // ========== Sakazuki & Issho ==========
    2618: {
        927: {
            name: 'Doberman',
            type: 'INT',
            pos: 0
        },
        1320: {
            name: 'Tsuru',
            type: 'QCK',
            pos: 2
        },
        2251: {
            name: 'Garp',
            type: 'PSY',
            pos: 3
        },
        2605: {
            name: 'Coby',
            type: 'STR',
            pos: 1
        },
        2618: {
            name: ['Sakazuki & ', 'Issho'],
            type: ['STR', 'INT'],
            pos: 4
        },
        2507: {
            name: 'Kizaru',
            type: 'PSY',
            pos: 5
        },
    },

    // ========== Smoker ==========
    2659: {
        1974: {
            name: 'Hawkins',
            type: 'STR',
            pos: 1
        },
        2302: {
            name: 'Bege',
            type: 'INT',
            pos: 3
        },
        2642: {
            name: 'Kid & Killer',
            type: 'STR',
            pos: 0
        },
        2644: {
            name: 'Drake & Urouge',
            type: 'DEX',
            pos: 2
        },
        2633: {
            name: 'Luffy',
            type: 'PSY',
            pos: 4
        },
        2659: {
            name: 'Smoker',
            type: 'QCK',
            pos: 5
        }
    },

    // ========== Blackbeard (INT) ==========
    2690: {
        418: {
            name: 'Doffy',
            type: 'DEX',
            pos: 3
        },
        972: {
            name: 'PX-5',
            type: 'INT',
            pos: 0
        },
        1274: {
            name: 'Burgess',
            type: 'QCK',
            pos: 2
        },
        1278: {
            name: 'Doc Q',
            type: 'PSY',
            pos: 1
        },
        2690: {
            name: 'Blackbeard',
            type: 'INT',
            pos: 4
        },
        1313: {
            name: 'Akainu',
            type: 'STR',
            pos: 5
        }
    },

    // ========== Hawkins ==========
    2729: {
        2385: {
            name: 'Apoo',
            type: 'QCK',
            pos: 2
        },
        2702: {
            name: 'Jack',
            type: 'DEX',
            pos: 3
        },
        2704: {
            name: 'Holdem',
            type: 'PSY',
            pos: 1
        },
        2706: {
            name: 'Speed',
            type: 'QCK',
            pos: 0
        },
        2729: {
            name: 'Hawkins',
            type: 'QCK',
            pos: 4
        },
        2700: {
            name: 'Kaido',
            type: 'DEX',
            pos: 5
        }
    },

    // ========== Halloween Nami ==========
    2763: {
        765: {
            name: 'Chopper',
            type: 'INT',
            pos: 0
        },
        2295: {
            name: 'Moria',
            type: 'STR',
            pos: 3
        },
        2743: {
            name: 'Koala',
            type: 'PSY',
            pos: 2
        },
        2745: {
            name: 'Reiju',
            type: 'PSY',
            pos: 1
        },
        2299: {
            name: 'Hancock',
            type: 'PSY',
            pos: 4
        },
        2763: {
            name: 'Nami',
            type: 'INT',
            pos: 5
        }
    },

    // ========== O-Robi ==========
    2792: {
        2707: {
            name: 'Zorojuro',
            type: 'PSY',
            pos: 1,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Zorojuro', 'PSY'],
                    hp: 450000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-down',      '3T, 0.5x'],
                                ['chain-lock',      '3T, 1.1x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['inc-dmg',         '3T, 1.25x']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['hp-cut',          '20%'],
                                ['atk',             '99+T, 2.5x']
                            ]
                        }
                    ]
                }
            ]
        },
        2776: {
            name: 'Komurasaki',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Komurasaki', 'QCK'],
                    hp: 150000,
                    atk: 2000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '3T'],
                                ['immu-def',        '99+T'],
                                ['slot-change',     'RCV'],
                                ['fixed-target',    '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['bar-p',           '99+T, 3x'],
                                ['slot-change',     'Bad']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff & Values']
                            ]
                        }
                    ]
                }
            ]
        },
        2778: {
            name: 'O-Kiku',
            type: 'PSY',
            pos: 2,
            guide: [
                {
                    stageNum: 7,
                    boss: ['O-Kiku', 'PSY'],
                    hp: 500000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['immu-def',        '99+T'],
                                ['resil',           '2T'],
                                ['cd-rew',          '1T, Row 1'],
                                ['def-thres',       '2T, 99%, 1000']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['hp-cut',          '30%']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['blow-away',       '99+T, Random 2'],
                                ['heal',            '30%']
                            ]
                        }
                    ]
                }
            ]
        },
        2780: {
            name: 'O-Tama',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 7,
                    boss: ['O-Tama', 'INT'],
                    hp: 400000,
                    atk: 2600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '5T'],
                                ['slot-change',     'EMPTY'],
                                ['atk',             '99+T, 1.5x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['bar-hit',         '3T, 20x']
                            ]
                        }
                    ]
                }
            ]
        },
        2792: {
            name: 'O-Robi',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 6,
                    boss: ['Chopperemon', 'QCK'],
                    hp: 400000,
                    atk: 3200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['blind',           '2T'],
                                ['def',             '2T, 500x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['slot-change',     'STR']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 7,
                    boss: ['O-Robi', 'STR'],
                    hp: 1250000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '3T, 50%'],
                                ['bar-p',           '1T, 4x'],
                                ['immu-def',        '99+T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def',             '2T, 500x']
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['atk',             '99+T, 2x'],
                                ['hp-cut',          '20%']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                }
            ]
        },
        2774: {
            name: 'O-Nami',
            type: 'STR',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',           '10T, QCK/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['O-Nami', 'QCK'],
                    hp: 500000,
                    atk: 3200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-boost',       '3T, 1.2x'],
                                ['orb-boost',       '3T, 1.2x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['O-Nami', 'STR'],
                    hp: 1250000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-lock',      '3T, 1.1x'],
                                ['slot-lock',       '1T'],
                                ['immu-delay',      '99+T'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '1T'],
                                ['heal-bind',       '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['para',            '3T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['heal',            '50%']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                }
            ]
        }
    },

    // ========== X Drake ==========
    2823: {
        2432: {
            name: 'Jack',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Jack', 'STR'],
                    hp: 500000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['immu-all',        '99+T'],
                                ['slot-block',      'All'],
                                ['def-thres',       '3T, 99%, 1000'],
                                ['def',             '3T, 300x'],
                                ['def-perc',        '3T']
                            ]
                        },
                        {
                            type: 'Turn 3, Every 2 Turns',
                            action: [
                                ['slot-block',      'All'],
                                ['para',            '1T, Row 1']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '20%'],
                                ['para',            '2T']
                            ]
                        }
                    ]
                }
            ]
        },
        2704: {
            name: 'Holdem',
            type: 'PSY',
            pos: 0,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Holdem', 'PSY'],
                    hp: 400000,
                    atk: 3400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '2T, Row 2 3'],
                                ['atk-down',        '2T'],
                                ['slot-block',      'All'],
                                ['hp-cut',          '60%']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['burn',            '5T, 5000'],
                                ['slot-block',      'All']
                            ]
                        }
                    ]
                }
            ]
        },
        2785: {
            name: 'Kyoshiro',
            type: 'INT',
            pos: 2,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Kyoshiro', 'INT'],
                    hp: 500000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['immu-delay',      '99+T'],
                                ['resil',           '3T'],
                                ['slot-change',     'Bad']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['desp',            '5T'],
                                ['enrage',          '99+T, 3x']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['def-null',        '1T']
                            ]
                        }
                    ]
                }
            ]
        },
        2813: {
            name: 'Shutenmaru',
            type: 'DEX',
            pos: 1,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Shutenmaru', 'DEX'],
                    hp: 450000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 1'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['atk',             '99+T, 2x'],
                                ['slot-change',     'Random']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['desp',            '7T'],
                                ['def',             '3T, 2000x']
                            ]
                        }
                    ]
                }
            ]
        },
        2823: {
            name: 'X Drake',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 6,
                    boss: ['Hawkins', 'QCK'],
                    hp: 400000,
                    atk: 3200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['immu-delay',      '99+T'],
                                ['desp',            '5T'],
                                ['inc-dmg',         '2T, 2x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 7,
                    boss: ['X Drake', 'STR'],
                    hp: 1250000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['immu-delay',      '99+T'],
                                ['slot-bind',       '2T, Row 1'],
                                ['slot-change',     'EMPTY'],
                                ['para',            '2T, Row 1']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['slot-bind',       '1T, Row 2 3']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['blow-away',       '99+T, Row 3']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '300x']
                            ]
                        }
                    ]
                }
            ]
        },
        2804: {
            name: 'Soba Mask',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',           '10T, Slasher/Free Spirit']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Soba Mask', 'QCK'],
                    hp: 500000,
                    atk: 3200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['burn',            '3T, 5000'],
                                ['immu-delay',      '99+T'],
                                ['bar-p',           '99+T, 1x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Soba Mask', 'QCK'],
                    hp: 1500000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '2T'],
                                ['immu-delay',      '99+T'],
                                ['blow-away',       '1T, Bottom Right'],
                                ['def-thres',       '2T, 99%, 1000'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['atk',             '99+T, 2x'],
                                ['dmg-eot-e',       '99+T, 10%']
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-block',      'All'],
                                ['def-perc',        '3T']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '300x']
                            ]
                        }
                    ]
                }
            ]
        }
    },

    // ========== Rebecca & Viola ==========
    2850: {
        1968: {
            name: 'Hancock',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Hancock', 'STR'],
                    hp: 500000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '2T, Row 2 3'],
                                ['immu-delay',      '99+T'],
                                ['immu-def',        '99+T'],
                                ['atk',             '10T, 1.5x']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['def-null',        '1T, QCK']
                            ]
                        },
                        {
                            type: '<20%, interrupt, once',
                            action: [
                                ['blow-away',       '99+T, Random 1'],
                                ['resil',           '3T']
                            ]
                        },
                        {
                            type: '<20%, interrupt, Every Turn',
                            action: [
                                ['blow-away',       '99+T, Random 1']
                            ]
                        }
                    ]
                }
            ]
        },
        2084: {
            name: 'Reiju',
            type: 'QCK',
            pos: 1,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Reiju', 'QCK'],
                    hp: 450000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Random 2'],
                                ['def-thres',       '4T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['poison',          '99+T'],
                                ['def',             '5T, 2000x']
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['bind',            '5T, Random 2']
                            ]
                        }
                    ]
                }
            ]
        },
        2548: {
            name: 'Perona',
            type: 'DEX',
            pos: 0,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Perona', 'DEX'],
                    hp: 400000,
                    atk: 3400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['immu-all',        '99+T'],
                                ['bar-p',           '2T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blind',           '99+T'],
                                ['bar-p',           '5T, 3x']
                            ]
                        },
                        {
                            type: '<20%, interrupt',
                            action: [
                                ['desp',            '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        2743: {
            name: 'Koala',
            type: 'PSY',
            pos: 2,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Koala', 'PSY'],
                    hp: 500000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['immu-delay',      '99+T'],
                                ['chain-lock',      '3T, 1.1x'],
                                ['slot-change',     'Bad']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk',             '99+T, 1.5x']
                            ]
                        },
                        {
                            type: '<20%, interrupt',
                            action: [
                                ['dmg-normal',      '20000']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '30000']
                            ]
                        }
                    ]
                }
            ]
        },
        2850: {
            name: ['Rebecca & ', 'Viola'],
            type: ['QCK', 'PSY'],
            pos: 4,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Rebecca', 'QCK'],
                    hp: 350000,
                    atk: 3200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['immu-delay',      '99+T'],
                                ['heal',            '99+T, 150000, EoT'],
                                ['def',             '2T, 2000x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 6,
                    boss: ['Viola', 'PSY'],
                    hp: 400000,
                    atk: 3200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['immu-delay',      '99+T'],
                                ['chain-down',      '2T'],
                                ['slot-change',     'EMPTY']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-change',     'EMPTY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 7,
                    boss: ['Rebecca & Viola', 'PSY'],
                    hp: 1250000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '4T'],
                                ['desp',            '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 3 Turns',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['def',             '2T, 2000x']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['bind',            '5T, Row 1']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['atk',             '99+T, 2x']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                }
            ]
        },
        2078: {
            name: 'Carrot',
            type: 'PSY',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',           '10T, DEX/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Carrot', 'PSY'],
                    hp: 500000,
                    atk: 3200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 2'],
                                ['slot-change',     'EMPTY'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '50%'],
                                ['atk',             '99+T, 1.5x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Carrot', 'PSY'],
                    hp: 1500000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '3T'],
                                ['immu-all',        '99+T'],
                                ['def-perc',        '3T'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: 'Turn 3, Every 2 Turns',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['hp-cut',          '20%']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['slot-bind',       '3T']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '300x']
                            ]
                        }
                    ]
                }
            ]
        }
    },

    // ========== Vivi ==========
    2879: {
        11: {
            name: 'Nami',
            type: 'PSY',
            pos: 0,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Nami', 'PSY'],
                    hp: 120000,
                    atk: 1400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '3T, Row 2 3'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['bind',            '5T, Random 1']
                            ]
                        }
                    ]
                }
            ]
        },
        18: {
            name: 'Sanji',
            type: 'QCK',
            pos: 2,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Sanji', 'QCK'],
                    hp: 500000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-null',        '1T'],
                                ['slot-change',     'EMPTY'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['blow-away',       '99+T, Random 2'],
                                ['slot-change',     'EMPTY']
                            ]
                        },
                        {
                            type: '<20%, interrupt',
                            action: [
                                ['blow-away',       '99+T, Row 1']
                            ]
                        }
                    ]
                }
            ]
        },
        23: {
            name: 'Chopper',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Chopper', 'INT'],
                    hp: 450000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '5T, 60%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 3, Every 2 Turns',
                            action: [
                                ['atk-down',        '2T, 80%'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['hp-cut',          '50%']
                            ]
                        }
                    ]
                }
            ]
        },
        219: {
            name: 'Zoro',
            type: 'DEX',
            pos: 3,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Zoro', 'DEX'],
                    hp: 500000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '7T, Row 1'],
                                ['atk-down',        '4T, 30%'],
                                ['def',             '4T, 1000x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['dmg-eot-e',       '99+T, 20%'],
                                ['atk',             '99+T, 2x']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '100x']
                            ]
                        }
                    ]
                }
            ]
        },
        2879: {
            name: 'Vivi',
            type: 'INT',
            pos: 4,
            guide: [
                {
                    stageNum: 6,
                    boss: ['Koza', 'STR'],
                    hp: 400000,
                    atk: 3200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '3T'],
                                ['chain-down',      '5T, 0.3x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 7,
                    boss: ['Vivi', 'INT'],
                    hp: 1250000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['resil',           '5T'],
                                ['atk',             '99+T, 1.5x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['inc-dmg',         '99+T, 1.5x']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['heal',            '50%'],
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                }
            ]
        },
        727: {
            name: 'Luffy',
            type: 'DEX',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',           '10T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Luffy', 'DEX'],
                    hp: 500000,
                    atk: 5200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-perc',        '3T, 80%'],
                                ['immu-delay',      '99+T'],
                                ['hp-cut',          '70%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Luffy', 'DEX'],
                    hp: 1500000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 2'],
                                ['para',            '3T'],
                                ['immu-delay',      '99+T'],
                                ['slot-change',     'Bad']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['enrage',          '99+T, 3x'],
                                ['slot-change',     'Bad']
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['cd-rew',          '5T, Row 1'],
                                ['hp-cut',          '50%']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '300x']
                            ]
                        }
                    ]
                }
            ]
        }
    },

    // ========== Shirahoshi ==========
    2913: {
        1477: {
            name: 'Fukaboshi',
            type: 'DEX',
            pos: 2,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Fukaboshi', 'DEX'],
                    hp: 500000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-down',      '5T, 0.1x'],
                                ['immu-delay',      '99+T'],
                                ['def-perc',        '5T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['hp-cut',          '30%'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: '<20%, interrupt',
                            action: [
                                ['blind',           '5T'],
                                ['bar-p',           '5T, 2x']
                            ]
                        }
                    ]
                }
            ]
        },
        1598: {
            name: 'Ryuboshi',
            type: 'STR',
            pos: 1,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Ryuboshi', 'STR'],
                    hp: 450000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '60%'],
                                ['desp',            '5T'],
                                ['def',             '2T, 300x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 3 Turns',
                            action: [
                                ['def',             '2T, 1000x']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['desp',            '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        1599: {
            name: 'Manboshi',
            type: 'STR',
            pos: 0,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Manboshi', 'STR'],
                    hp: 400000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['resil',           '3T'],
                                ['immu-delay',      '99+T'],
                                ['dmg-eot-e',       '99+T, 10%'],
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['bar-hit',         '3T, 20x']
                            ]
                        }
                    ]
                }
            ]
        },
        2123: {
            name: 'Neptune',
            type: 'INT',
            pos: 3,
            guide: [
                {
                    stageNum: 7,
                    boss: ['Neptune', 'INT'],
                    hp: 600000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '5T'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['immu-delay',      '99+T'],
                                ['slot-change',     'TND']
                            ]
                        },
                        {
                            type: 'Turn 3, Every 2 Turns',
                            action: [
                                ['sp-bind',         '2T'],
                                ['atk',             '2T, 2.5x'],
                                ['slot-change',     'TND']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '100x']
                            ]
                        }
                    ]
                }
            ]
        },
        2913: {
            name: 'Shirahoshi',
            type: 'INT',
            pos: 4,
            guide: [
                {
                    stageNum: 6,
                    boss: ['Zoro', 'DEX'],
                    hp: 430000,
                    atk: 4800,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['def-thres',       '5T, 99%, 1000']
                            ]
                        },
                        {
                            type: 'Turn 1, Every Turn After',
                            action: [
                                ['slot-change',     'Bad']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 7,
                    boss: ['Luffy', 'INT'],
                    hp: 1250000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['immu-delay',      '99+T'],
                                ['def-perc',        '5T'],
                                ['heal',            '99+T, 300,000'],
                                ['bar-gt',          '3T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['inc-dmg',         '99+T, 1.5x']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['def-null',        '1T'],
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '300x']
                            ]
                        }
                    ]
                }
            ]
        },
        2066: {
            name: 'Jinbe',
            type: 'DEX',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',           '10T, STR/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Robin', 'INT'],
                    hp: 430000,
                    atk: 4800,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['inc-dmg',         '3T, 2x'],
                                ['slot-block',      'All'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Jinbe', 'DEX'],
                    hp: 1500000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '3T'],
                                ['atk-down',        '3T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 3, Every 3 Turns',
                            action: [
                                ['blow-away',       'Random 1']
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['enrage',          '99+T, 2x']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '300x']
                            ]
                        }
                    ]
                }
            ]
        }
    },

    // ========== Anni Luffy ==========
    2977: {
        1707: {
            name: 'Shanks',
            type: 'PSY',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Shanks', 'PSY'],
                    hp: 300000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['bind',            '5T, Row 1'],
                                ['def',             '5T, 500x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every Turn After',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['atk',             '99+T, 3x'],
                                ['slot-change',     'EMPTY']
                            ]
                        },
                        {
                            type: 'Turn 2 (Beckman)',
                            action: [
                                ['bind',            '5T, Row 2']
                            ]
                        },
                        {
                            type: 'Turn 2 (Lucky Roux)',
                            action: [
                                ['bind',            '5T, Row 3']
                            ]
                        },
                        {
                            type: 'Turn 2 (Yasopp)',
                            action: [
                                ['atk-down',        '5T']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '100x']
                            ]
                        }
                    ]
                }
            ]
        },
        2500: {
            name: 'Big Mom',
            type: 'DEX',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Big Mom', 'DEX'],
                    hp: 450000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'BOMB'],
                                ['burn',            '3T, 3000'],
                                ['def-perc',        '3T, 80%'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 3 Turns',
                            action: [
                                ['bind',            '5T, Random 2']
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-change',     'BOMB'],
                                ['slot-lock',       '2T']
                            ]
                        }
                    ]
                }
            ]
        },
        2700: {
            name: 'Kaido',
            type: 'PSY',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Kaido', 'PSY'],
                    hp: 550000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['sp-bind',         '2T'],
                                ['hp-cut',          '20%'],
                                ['def-thres',       '2T, 99%, 1000'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every Turn After',
                            action: [
                                ['dmg-eot-e',       '20%']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['hp-cut',          '99%']
                            ]
                        }
                    ]
                }
            ]
        },
        2964: {
            name: 'Blackbeard',
            type: 'DEX',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Blackbeard', 'DEX'],
                    hp: 500000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'DEX/PSY'],
                                ['slot-change',     'Bad'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '3T, Row 2']
                            ]
                        }
                    ]
                }
            ]
        },
        2977: {
            name: 'Luffy',
            type: 'PSY',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Nami', 'PSY'],
                    hp: 430000,
                    atk: 4800,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '20%'],
                                ['cd-rew',          '2T, Row 2 3'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Luffy', 'PSY'],
                    hp: 1250000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['chain-down',      '5T, 0.2x'],
                                ['hp-cut',          '30%'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every Turn After',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['atk',             '99+T, 2x']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '99+T, Random 2']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                }
            ]
        },
        2578: {
            name: 'Akainu',
            type: 'DEX',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Fujitora', 'DEX'],
                    hp: 430000,
                    atk: 4800,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'S.BOMB, Row 2'],
                                ['para',            '5T, Col L'],
                                ['desp',            '5T'],
                                ['immu-all',        '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Akainu', 'DEX'],
                    hp: 1500000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '5T'],
                                ['atk-down',        '5T'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['inc-dmg',         '2T, 2x']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['cd-rew',          '3T'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '300x']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Zorojuro ==========
    2995: {
        2774: {
            name: 'O-Nami',
            type: 'QCK',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['O-Nami', 'QCK'],
                    hp: 550000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def',             '5T, 1000x'],
                                ['def-thres',       '4T, 99%, 1000'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 4, Every 3 Turns',
                            action: [
                                ['heal',            '100%']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['para',            '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        2804: {
            name: 'Soba Mask',
            type: 'INT',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Soba Mask', 'INT'],
                    hp: 600000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['sp-bind',         '3T, Row 2 3'],
                                ['chain-down',      '3T, 0.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 3, Every 3 Turns',
                            action: [
                                ['para',            '3T'],
                                ['sp-bind',         '3T, Row 2 3']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '100x']
                            ]
                        }
                    ]
                }
            ]
        },
        2806: {
            name: 'Usohachi',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Usohachi', 'INT'],
                    hp: 100000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bar-gt',          '99T, 3x'],
                                ['bar-slot',        '99T, 3x, PSY'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['def',             '3T, 100x']
                            ]
                        }
                    ]
                }
            ]
        },
        2810: {
            name: 'Carrot',
            type: 'QCK',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Carrot', 'QCK'],
                    hp: 450000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['slot-lock',       '1T'],
                                ['atk-down',        '4T'],
                                ['def-perc',        '4T, 80%'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['slot-change',     'Bad'],
                                ['hp-cut',          '30%']
                            ]
                        },
                        {
                            type: '<50%, on atk',
                            action: [
                                ['para',            '2T']
                            ]
                        }
                    ]
                }
            ]
        },
        2709: {
            name: 'Law',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Chopperemon', 'QCK'],
                    hp: 430000,
                    atk: 8800,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['chain-down',      '5T, 0.5x']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['hp-cut',          '70%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Law', 'QCK'],
                    hp: 1250000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '5T'],
                                ['def-thres',       '3T, 99%, 1000'],
                                ['atk',             '3T, 1.3x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every Turn After',
                            action: [
                                ['dmg-eot-e',       '99+T, 20%']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['resil',           '3T']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '300x']
                            ]
                        }
                    ]
                }
            ]
        },
        2995: {
            name: 'Zorojuro',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, DEX']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Bonekichi', 'QCK'],
                    hp: 430000,
                    atk: 4800,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'BOMB'],
                                ['def-perc',        '3T, 80%'],
                                ['blind',           '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Zorojuro', 'QCK'],
                    hp: 1500000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 1'],
                                ['slot-neg',        '3T, QCK/PSY'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 3, Every Turn After',
                            action: [
                                ['enrage',          '99+T, 2x']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['blow-away',       '99+T, Random 2']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '300x']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Reiju ==========
    3022: {
        3004: {
            name: 'Kuma',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Kuma', 'STR'],
                    hp: 550000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['atk-down',        '3T'],
                                ['para',            '3T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 3 Turns',
                            action: [
                                ['blow-away',       '1T, Random 1']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['blow-away',       '1T, Row 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3005: {
            name: 'Moria',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Moria', 'QCK'],
                    hp: 600000,
                    atk: 4500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['desp',            '5T'],
                                ['chain-down',      '5T, 0.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['enrage',          '99+T, 2.5x']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['dmg-normal',      '100x']
                            ]
                        }
                    ]
                }
            ]
        },
        3011: {
            name: 'Caesar',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Caesar', 'INT'],
                    hp: 100000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['immu-delay',      '99+T'],
                                ['bar-p',           '3T, 4x'],
                                ['bar-gt',          '3T, 4x'],
                                ['bar-gd',          '3T, 4x']
                            ]
                        }
                    ]
                }
            ]
        },
        3013: {
            name: 'Bonney',
            type: 'DEX',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Bonney', 'DEX'],
                    hp: 450000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bar-slot',        '1T, 3x, QCK'],
                                ['def-thres',       '4T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every Turn After',
                            action: [
                                ['bar-slot',        '3T, 3x, QCK']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['heal',            '50%']
                            ]
                        }
                    ]
                }
            ]
        },
        3022: {
            name: 'Reiju',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Sanji', 'STR'],
                    hp: 430000,
                    atk: 8800,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['slot-lock',       '1T'],
                                ['desp',            '5T'],
                                ['def-perc',        '5T, 80%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Reiju', 'STR'],
                    hp: 1250000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '3T, Col L'],
                                ['para',            '4T, Row 2 3'],
                                ['poison',          '99+T, 600→6000'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 3, Every Turn After',
                            action: [
                                ['para',            '3T, Row 2 3']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['heal',            '50%']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                }
            ]
        },
        3015: {
            name: 'Ivankov',
            type: 'STR',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, QCK']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Inazuma', 'STR'],
                    hp: 430000,
                    atk: 4800,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['def',             '5T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ivankov', 'STR'],
                    hp: 1500000,
                    atk: 6400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '3T'],
                                ['burn',            '3T, 3000'],
                                ['def-thres',       '3T, 99%, 1000'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['bind',            '5T, Random 2']
                            ]
                        },
                        {
                            type: '<50%, interrupt',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '2T, Row 1']
                            ]
                        },
                        {
                            type: '<20%, on atk',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Nami & Sanji ==========
    3060: {
        2707: {
            name: 'Zorojuro',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Zorojuro', 'QCK'],
                    hp: 1000000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '8T, Row 2 3'],
                                ['dmg-eot-e',       '30%'],
                                ['heal',            '1M, EoT'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['inc-dmg',         '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        2787: {
            name: 'Chopperemon',
            type: 'QCK',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Chopperemon', 'QCK'],
                    hp: 100000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad, RCV, TND']
                            ]
                        }
                    ]
                }
            ]
        },
        2789: {
            name: 'Bonekichi',
            type: 'INT',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Bonekichi', 'INT'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['sp-bind',         '3T'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['bar-gd',          '2T, 4x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['atk',             '99+T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['inc-dmg',         '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        2808: {
            name: 'Franosuke',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Franosuke', 'INT'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'TND, Row 2'],
                                ['slot-change',     'EMPTY, Row 1 3'],
                                ['bind',            '5T, Row 2'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['bind',            '5T, Row 3']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['bind',            '5T, Row 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3060: {
            name: 'Nami & Sanji',
            type: 'INT',
            pos: 4,
            guide: [
                {
                    stageNum: 3,
                    boss: ['Nami', 'INT'],
                    hp: 500000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['slot-lock',       '1T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 4,
                    boss: ['Sanji', 'QCK'],
                    hp: 500000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-perc',        '5T, 80%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Nami & Sanji', 'INT'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 1'],
                                ['def',             '5T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['para',            '2T, Row 1'],
                                ['slot-change',     'Bad']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['desp',            '5T'],
                                ['blow-away',       'Random 2']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                }
            ]
        },
        3029: {
            name: 'Luffy',
            type: 'INT',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, DEX/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Sabo', 'INT'],
                    hp: 1000000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['para',            '5T, Row 2 3'],
                                ['blind',           '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Luffy', 'INT'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['atk-down',        '5T, 90%'],
                                ['chain-down',      '5T, 0.1x'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['bind',            '5T, Row 2 3, Random 1']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '2T, Row 1, Random 1']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Jinbe ==========
    3094: {
        3067: {
            name: 'Nami',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Nami', 'INT'],
                    hp: 100000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '6T, Row 2'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3078: {
            name: 'Brook',
            type: 'DEX',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Brook', 'DEX'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['para',            '3T'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['heal',            '280,000']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '20,000']
                            ]
                        }
                    ]
                }
            ]
        },
        3080: {
            name: 'Carrot',
            type: 'PSY',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Carrot', 'PSY'],
                    hp: 1000000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['atk-down',        '5T, 90%'],
                                ['def-perc',        '5T, 80%'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every Turn After',
                            action: [
                                ['blow-away',       '99+T, Random 1']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3081: {
            name: 'Chobro',
            type: 'INT',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Chobro', 'INT'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['stun',            'Row 2'],
                                ['sp-bind',         '5T, Row 3'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['stun',            'Row 2 3']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['bind',            '5T, Row 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3094: {
            name: 'Jinbe',
            type: 'DEX',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Aladdin', 'INT'],
                    hp: 500000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['para',            '2T'],
                                ['atk-down',        '5T, 90%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Jinbe', 'DEX'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '4T, Row 1'],
                                ['chain-down',      '3T, 0.1x'],
                                ['def',             '5T, 2000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['para',            '2T, Row 1'],
                                ['bind',            '5T, Random 2']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '3T, Captain'],
                                ['para',            '5T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        2919: {
            name: 'Sanji & Pudding',
            type: 'DEX',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, STR/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Luffy', 'DEX'],
                    hp: 1000000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['burn',            '3T, 5000'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sanji & Pudding', 'DEX'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '5T'],
                                ['sp-limit',        '1T, 3x'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 4 Turns',
                            action: [
                                ['desp',            '5T'],
                                ['slot-change',     'Random'],
                                ['burn',            '3T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['bind',            '5T, Row 2 3']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Pudding ==========
    3115: {
        2294: {
            name: 'Katakuri',
            type: 'INT',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Katakuri', 'INT'],
                    hp: 1000000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['blind',           '99+T'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['sp-bind',         '7T, Row 2 3'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['bar-p',           '5T, 5x']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        2741: {
            name: 'Ace',
            type: 'PSY',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Ace', 'PSY'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['para',            '5T'],
                                ['def',             '5T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['burn',            '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        2745: {
            name: 'Reiju',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Reiju', 'INT'],
                    hp: 100000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '3T'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        2749: {
            name: 'Luffy',
            type: 'PSY',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Luffy', 'PSY'],
                    hp: 800000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '4T'],
                                ['burn',            '5T, 3000'],
                                ['atk-down',        '5T, 80%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['hp-cut',          '20%'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['enrage',          '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3115: {
            name: 'Pudding',
            type: 'PSY',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Sanji', 'PSY'],
                    hp: 500000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['atk-down',        '3T, 90%'],
                                ['bar-slot',        'Random, 2x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Pudding', 'PSY'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '5T, Mid Right'],
                                ['def-perc',        '5T, 80%'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['slot-block',      'All'],
                                ['para',            '5T, Mid Left']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['para',            '10T, Row 1']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                }
            ]
        },
        2758: {
            name: 'Sabo',
            type: 'PSY',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Koala', 'PSY'],
                    hp: 1000000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['bind',            '5T, Row 1'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sabo', 'PSY'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '1T'],
                                ['desp',            '5T'],
                                ['chain-down',      '5T, 0.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['desp',            '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['desp',            '5T'],
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Kid ==========
    3150: {
        2787: {
            name: 'Chopperemon',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Chopperemon', 'INT'],
                    hp: 100000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '2T'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3083: {
            name: 'O-Kiku',
            type: 'PSY',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['O-Kiku', 'PSY'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '1T'],
                                ['def',             '3T, 1000x'],
                                ['resil',           '3T'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3145: {
            name: 'Kamazo',
            type: 'PSY',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Kamazo', 'PSY'],
                    hp: 1000000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'STR/DEX/QCK'],
                                ['para',            '5T'],
                                ['bind',            '5T, Row 1'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every Turn After',
                            action: [
                                ['blow-away',       '99+T, Random 1']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['inc-dmg',         '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3147: {
            name: ['Hyo', 'goro'],
            type: ['DEX', 'INT'],
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Hyogoro', 'DEX'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['para',            '1T']
                            ]
                        }
                    ]
                }
            ]
        },
        3150: {
            name: 'Kid',
            type: 'DEX',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Hawkins', 'DEX'],
                    hp: 500000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['burn',            '4T, 5000'],
                                ['def-perc',        '4T, 80%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Kid', 'DEX'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['atk-down',        '5T, 90%'],
                                ['chain-down',      '3T, 0.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '99+T, Random Captain']
                            ]
                        },
                        {
                            type: 'Turn 4',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        2726: {
            name: 'Raizo',
            type: 'PSY',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, STR/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Kinemon', 'DEX'],
                    hp: 1000000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'RCV/TND'],
                                ['bind',            '5T, Row 1'],
                                ['blind',           '5T'],
                                ['sp-bind',         '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Raizo', 'PSY'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'RCV/TND'],
                                ['chain-lock',      '3T, 1.1x'],
                                ['bar-p',           '2T, 1x'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 3 Turns',
                            action: [
                                ['para',            '3T, Row 1'],
                                ['slot-change',     'Random']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['heal',            '75%']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Garp ==========
    3197: {
        1018: {
            name: 'Brownbeard',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Brownbeard', 'INT'],
                    hp: 100000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def',             '3T, 100x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        1355: {
            name: 'Rayleigh',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Rayleigh', 'INT'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['heal',            '75%']
                            ]
                        }
                    ]
                }
            ]
        },
        2686: {
            name: 'Whitebeard',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Whitebeard', 'QCK'],
                    hp: 1000000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['bar-slot',        '5T, 2x, STR'],
                                ['def-perc',        '10T, 50%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 3 Turns',
                            action: [
                                ['def-thres',       '2T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        2687: {
            name: 'Sengoku',
            type: 'DEX',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Sengoku', 'DEX'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'BOMB'],
                                ['desp',            '5T'],
                                ['bind',            '5T, Row 2'],
                                ['para',            '5T, Row 3'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['desp',            '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['bind',            '5T, Row 2'],
                                ['para',            '5T, Row 3']
                            ]
                        }
                    ]
                }
            ]
        },
        3197: {
            name: 'Garp',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Coby', 'INT'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Empty'],
                                ['desp',            '5T'],
                                ['burn',            '5T, 5000']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Garp', 'STR'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['atk-down',        '3T, 90%'],
                                ['blind',           '99+T'],
                                ['bar-gd',          '1T, 2x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['desp',            '5T'],
                                ['slot-bind',       '2T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['bar-gd',          '3T, 3x']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                }
            ]
        },
        3154: {
            name: 'Blackbeard',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, Striker/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Van Augur', 'STR'],
                    hp: 1000000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['bind',            '5T, Row 2 3'],
                                ['chain-lock',      '5T, 1.1x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Blackbeard', 'QCK'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '5T, Row 1'],
                                ['resil',           '3T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every Turn After',
                            action: [
                                ['blow-away',       '99+T, Random 2']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['sp-bind',         '5T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Komurasaki ==========
    3217: {
        2785: {
            name: 'Kyoshiro',
            type: 'INT',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Kyoshiro', 'INT'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '2T, Col L'],
                                ['sp-bind',         '5T, Col R'],
                                ['blind',           '99+T'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3110: {
            name: 'Page One',
            type: 'DEX',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Page One', 'DEX'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '50%'],
                                ['def-perc',        '4T, 80%'],
                                ['resil',           '4T'],
                                ['def',             '4T, 1000x']
                            ]
                        }
                    ]
                }
            ]
        },
        3139: {
            name: 'Queen',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Queen', 'INT'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-down',      '10T, 0.5x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '10,000']
                            ]
                        }
                    ]
                }
            ]
        },
        3210: {
            name: 'X Drake',
            type: 'QCK',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['X Drake', 'QCK'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['para',            '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3217: {
            name: 'Komurasaki',
            type: 'INT',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['?', '?'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Empty'],
                                ['desp',            '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Komurasaki', 'INT'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '4T'],
                                ['slot-neg',        'Type'],
                                ['clear-buff',      'Buff & Values'],
                                ['immu-def',        '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3049: {
            name: 'Orochi',
            type: 'DEX',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, STR/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['?', '?'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['atk-down',        '3T, 90%'],
                                ['def-thres',       '5T, 99%, 1000']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Orochi', 'DEX'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock-tap',   '1x Great, Row 2'],
                                ['chain-lock',      '4T, 1.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Queen ==========
    3239: {
        2433: {
            name: 'Jack',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Jack', 'STR'],
                    hp: 1000000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '7T'],
                                ['atk-down',        '4T, 80%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['blow-away',       '3T, Row 1, Random']
                            ]
                        }
                    ]
                }
            ]
        },
        2990: {
            name: 'King',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['King', 'QCK'],
                    hp: 1000000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['para',            '2T'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['para',            '2T'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '50,000']
                            ]
                        }
                    ]
                }
            ]
        },
        3110: {
            name: 'Page One',
            type: 'STR',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Page One', 'STR'],
                    hp: 900000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['def',             '3T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['hp-cut',          '30%']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['def-null',        '2T']
                            ]
                        }
                    ]
                }
            ]
        },
        3210: {
            name: 'X Drake',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['X Drake', 'INT'],
                    hp: 100000,
                    atk: 4400,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock',       '2T'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3239: {
            name: 'Queen',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Queen', 'STR'],
                    hp: 500000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '50%'],
                                ['sp-bind',         '2T'],
                                ['slot-change',     'BOMB'],
                                ['bind',            '5T, Row 2']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Queen', 'QCK'],
                    hp: 2000000,
                    atk: 10500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '2T, Row 2 3'],
                                ['sp-bind',         '2T'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-lock-tap',   'Great 1x'],
                                ['slot-change',     'BOMB']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['hp-cut',          '50%']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3236: {
            name: 'O-Lin',
            type: 'STR',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, DEX/QCK']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Chopperemon', 'QCK'],
                    hp: 1000000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Empty'],
                                ['dmg-eot-e',       '20%'],
                                ['atk-boost',       '3T, 1.2x'],
                                ['orb-boost',       '3T, 1.2x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['O-Lin', 'STR'],
                    hp: 2000000,
                    atk: 10500,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['burn',            '4T, 5000'],
                                ['resil',           '5T'],
                                ['bar-p',           '1T, 3x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-thres',       '2T'],
                                ['def-perc',        '2T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['enrage',          '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['bind',            '30T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Luffy & Ace ==========
    3273: {
        2066: {
            name: 'Jinbe',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Jinbe', 'STR'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['def-perc',        '5T, 90%'],
                                ['resil',           '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-lock-tap',   'Good 1x'],
                                ['slot-change',     'EMPTY']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['desp',            '5T'],
                                ['atk',             '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        2694: {
            name: 'Buggy',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Buggy', 'INT'],
                    hp: 100000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['dmg-normal',      '1.3x'],
                                ['bind',            '3T, Row 1'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        2698: {
            name: 'Croc',
            type: 'DEX',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Croc', 'DEX'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'TND'],
                                ['atk-down',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['hp-cut',          '50%']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '30,000']
                            ]
                        }
                    ]
                }
            ]
        },
        3262: {
            name: 'Whitebeard',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Whitebeard', 'QCK'],
                    hp: 1000000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['para',            '3T'],
                                ['bar-p',           '3T, 4x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blow-away',       'Random 3']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3273: {
            name: 'Luffy & Ace',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Boa Hancock', 'STR'],
                    hp: 500000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '5T'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['desp',            '4T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Luffy & Ace', 'STR'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['burn',            '5T, 3000'],
                                ['chain-down',      '3T, 0.1x'],
                                ['bar-hit',         '99+T, 12x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['heal',            '100%'],
                                ['atk',             '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['desp',            '4T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '25%']
                            ]
                        }
                    ]
                }
            ]
        },
        2692: {
            name: 'Ivankov',
            type: 'DEX',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, STR/QCK']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Inazuma', 'STR'],
                    hp: 1000000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['blind',           '99+T'],
                                ['desp',            '5T'],
                                ['def-thres',       '5T, 99%, 1000']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ivankov', 'DEX'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['blow-away',       '5T, Bottom Right'],
                                ['cd-rew',          '2T'],
                                ['para',            '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blow-away',       'Random 1']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['inc-dmg',         '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['blow-away',       'All']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Shiryu ==========
    3297: {
        3283: {
            name: 'Pizarro',
            type: 'QCK',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Pizarro', 'QCK'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 2 3'],
                                ['burn',            '5T, 3000'],
                                ['desp',            '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['dmg-eot-e',       '99+T, 20%']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['blind',           '5T'],
                                ['bar-p',           '5T, 2x']
                            ]
                        }
                    ]
                }
            ]
        },
        3286: {
            name: 'Burgess',
            type: 'STR',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Burgess', 'STR'],
                    hp: 100000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '3T'],
                                ['bind',            '3T, Col R'],
                                ['para',            '3T, Col L']
                            ]
                        }
                    ]
                }
            ]
        },
        3287: {
            name: 'Vasco Shot',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Vasco Shot', 'STR'],
                    hp: 1000000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bar-hp',          '5T, 2M'],
                                ['def',             '10T, 2000x'],
                                ['immu-delay',      '99+T'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['heal',            '?'],
                                ['atk',             '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3294: {
            name: 'Van Augur',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Van Augur', 'INT'],
                    hp: 900000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['sp-bind',         '4T'],
                                ['chain-lock',      '4T, 1.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['atk-down',        '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        3297: {
            name: 'Shiryu',
            type: 'PSY',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Devon', 'INT'],
                    hp: 1000000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['def-thres',       '3T, 90%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock-tap',   'Good 1x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Shiryu', 'PSY'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '5T, Row 1'],
                                ['bind',            '5T, Row 1'],
                                ['def-perc',        '4T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['sp-bind',         '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['bind',            '5T, Row 2 3']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3280: {
            name: 'Blackbeard',
            type: 'PSY',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, Driven/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['San Juan Wolf', 'INT'],
                    hp: 1000000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '5T, 90%'],
                                ['dmg-eot-e',       '99+T, 10%'],
                                ['bar-gd',          '1T, 4x']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '0.8x atk']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Blackbeard', 'PSY'],
                    hp: 2000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['para',            '5T'],
                                ['resil',           '3T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every Turn After',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-change',     'EMPTY']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['inc-dmg',         '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['blow-away',       'All']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '30,000']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Koala ==========
    3339: {
        675: {
            name: 'Ivankov',
            type: 'DEX',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Ivankov', 'DEX'],
                    hp: 1300000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '2T'],
                                ['chain-lock',      '4T, 1.1x'],
                                ['chain-down',      '4T, 0.1x'],
                                ['bind',            '6T, Row 1 2'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '50%']
                            ]
                        },
                        {
                            type: 'Turn 5',
                            action: [
                                ['hp-cut',          '50%']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        2565: {
            name: 'Belo Betty',
            type: 'STR',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Belo Betty', 'STR'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['def-thres',       '3T, 90%, 1000'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-lock-tap',   'Great 1x']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['hp-cut',          '30%'],
                                ['heal',            '?']
                            ]
                        }
                    ]
                }
            ]
        },
        2567: {
            name: 'Karasu',
            type: 'DEX',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Karasu', 'DEX'],
                    hp: 1200000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['desp',            '5T'],
                                ['para',            '5T, Row 2 3']
                            ]
                        }
                    ]
                }
            ]
        },
        2569: {
            name: 'Morley',
            type: 'PSY',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Morley', 'PSY'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['blind',           '3T'],
                                ['atk-down',        '5T, 90%'],
                                ['burn',            '3T, 3000'],
                                ['bar-p',           '5T, 2x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['desp',            '5T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['desp',            '5T'],
                                ['atk-down',        '4T']
                            ]
                        }
                    ]
                }
            ]
        },
        3339: {
            name: 'Koala',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Hack', 'STR'],
                    hp: 1300000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '30%'],
                                ['slot-change',     'EMPTY'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Koala', 'STR'],
                    hp: 2500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '5T, Row 1'],
                                ['atk-down',        '5T, 90%'],
                                ['heal-bind',       '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['atk',             '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['def-null',        '2T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        669: {
            name: 'Sabo',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, All'],
                                ['orb-boost',       '3T, 2x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Lindbergh', 'DEX'],
                    hp: 1300000,
                    atk: 15000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['def',             '5T, 100x']
                            ]
                        },
                        {
                            type: 'Turn 3, Every 3 Turns',
                            action: [
                                ['bind',            '7T, Mid Left']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sabo', 'QCK'],
                    hp: 2500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 1'],
                                ['desp',            '5T'],
                                ['sp-limit',        '1T, 2x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every Turn After',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['blow-away',       '99+T, Random 2']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['heal',            '?']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== MUGIWARA 56 Zoro ==========
    3368: {
        3364: {
            name: 'Sanji',
            type: 'PSY',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Sanji', 'PSY'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['def-perc',        '4T, 90%'],
                                ['def-thres',       '4T, 90%, 1000'],
                                ['resil',           '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every Turn After',
                            action: [
                                ['blow-away',       '2T, Random 2']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3365: {
            name: 'Luffy',
            type: 'INT',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Luffy', 'INT'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['bind',            '5T, Row 2'],
                                ['def',             '5T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['bind',            '5T, Row 3']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['bind',            '5T, Row 1'],
                                ['blow-away',       '99+T, Random 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3366: {
            name: 'Chopper',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Chopper', 'INT'],
                    hp: 600000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '2T'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['inc-dmg',         '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3367: {
            name: 'Nami',
            type: 'QCK',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Nami', 'QCK'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '6T, 50%'],
                                ['chain-down',      '6T, 0.5x'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['para',            '4T, Row 2 3']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['heal',            '100%'],
                                ['atk',             '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3368: {
            name: 'Zoro',
            type: 'INT',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Law', 'INT'],
                    hp: 1300000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['burn',            '5T, 3000'],
                                ['bar-p',           '2T, 3x']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['slot-lock-tap',   '1x Perfect, Row 1 3']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Zoro', 'INT'],
                    hp: 2500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 1'],
                                ['desp',            '5T'],
                                ['sp-bind',         '3T, Row 2 3'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['bind',            '5T, Row 2 3'],
                                ['bar-gd',          '5T, 3x']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3071: {
            name: 'Germa 66',
            type: 'INT',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Judge', 'INT'],
                    hp: 1300000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['atk-down',        '5T, 90%'],
                                ['resil',           '5T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['para',            '3T, Row 2 3']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Germa 66', 'INT'],
                    hp: 2500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '5T'],
                                ['chain-down',      '4T, 0.1x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock-tap',   '1x Good'],
                                ['enrage',          '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '30%'],
                                ['sp-limit',        '99+T, 1x']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Dragon Kaido ==========
    3389: {
        2231: {
            name: 'Jack',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Jack', 'STR'],
                    hp: 720000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-down',      '4T, 0.1x'],
                                ['tap-limit',       '4T, 3x'],
                                ['slot-neg',        '5T, Type & RCV'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['heal-bind',       '10T'],
                                ['slot-change',     'RCV']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['hp-cut',          '50%']
                            ]
                        }
                    ]
                }
            ]
        },
        3110: {
            name: 'Page One',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Page One', 'INT'],
                    hp: 600000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '3T'],
                                ['slot-block',      'All'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blow-away',       '3T, Random 1'],
                                ['atk',             '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        3137: {
            name: 'King',
            type: 'STR',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['King', 'STR'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '4T'],
                                ['def',             '4T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-neg',        '3T, Type'],
                                ['type-change',     'Random']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['slot-lock-tap',   '1x Good, Row 1'],
                                ['type-change',     'Random']
                            ]
                        }
                    ]
                }
            ]
        },
        3139: {
            name: 'Queen',
            type: 'INT',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Queen', 'INT'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['ca-swap',         '2T, Row 2'],
                                ['def-perc',        '6T, 90%'],
                                ['def-thres',       '6T, 90%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['ca-swap',         '5T, Row 3'],
                                ['blow-away',       '99+T, Friend Cap']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3236: {
            name: 'O-Lin',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Chopperemon', 'QCK'],
                    hp: 1300000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '7T, Row 1'],
                                ['burn',            '4T, 8000'],
                                ['cd-rew',          '2T, Row 2'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '2T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['O-Lin', 'STR'],
                    hp: 2500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['atk-down',        '5T, 90%'],
                                ['sp-limit',        '3T, 2x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['def-null',        '1T']
                            ]
                        },
                        {
                            type: '<30%',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['blow-away',       '99+T, Random 2']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3389: {
            name: 'Kaido',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, DEX/QCK']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Orochi', 'STR'],
                    hp: 1300000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'BOMB'],
                                ['para',            '4T'],
                                ['def',             '5T, 2000x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['bind',            '5T, Row 1']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kaido', 'QCK'],
                    hp: 2500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['resil',           '3T'],
                                ['bar-hit',         '99+T, 15x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-block',      'All'],
                                ['atk',             '99+T'],
                                ['cd-rew',          '2T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '99+T, Random 2'],
                                ['clear-buff',      'Buff & Values']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Stussy ==========
    3416: {
        3059: {
            name: 'Perona',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Perona', 'QCK'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['atk-down',        '4T, 90%'],
                                ['bar-slot',        '2T, 2x, STR'],
                                ['resil',           '4T'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['atk',             '99+T, 2x'],
                                ['bar-slot',        '99+T, 4x, DEX']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['sp-bind',         '10T'],
                                ['blow-away',       '99+T, Captain']
                            ]
                        }
                    ]
                }
            ]
        },
        3412: {
            name: 'Tashigi',
            type: 'PSY',
            pos: 1,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Tashigi', 'PSY'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '4T, Row 2 3'],
                                ['sp-bind',         '2T, Row 2 3'],
                                ['slot-block',      'BLOCK/TND'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['sp-bind',         '2T'],
                                ['bind',            '4T, Row 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3413: {
            name: 'Makino',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Makino', 'INT'],
                    hp: 600000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-thres',       '2T, 90%, 1000'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['heal',            '?'],
                                ['desp',            '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        3414: {
            name: 'Hina',
            type: 'DEX',
            pos: 2,
            guide: [
                {
                    stageNum: 5,
                    boss: ['Hina', 'DEX'],
                    hp: 720000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['desp',            '5T'],
                                ['para',            '5T, Row 2 3'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['para',            '5T, Row 1'],
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '50%'],
                                ['type-change',     'QCK']
                            ]
                        }
                    ]
                }
            ]
        },
        3416: {
            name: 'Stussy',
            type: 'DEX',
            pos: 4,
            guide: [
                {
                    stageNum: 4,
                    boss: ['Nami', 'PSY'],
                    hp: 970000,
                    atk: 5000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '5T'],
                                ['def',             '5T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['sp-bind',         '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Stussy', 'DEX'],
                    hp: 1875000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '10T, Row 1'],
                                ['def-thres',       '5T, 90%, 1000'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['atk',             '99+T'],
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['sp-bind',         '10T, Row 1'],
                                ['clear-buff',      'Buff & Values']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3057: {
            name: 'Vivi',
            type: 'PSY',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, Free Spirit/Cerebral/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Alvida', 'DEX'],
                    hp: 975000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['atk-down',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['para',            '5T, Row 1']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Vivi', 'PSY'],
                    hp: 1875000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '1T'],
                                ['bind',            '5T, Col R'],
                                ['para',            '10T, Col L'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['slot-block',      'All'],
                                ['hp-cut',          '30%']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['bind',            '5T, Col L'],
                                ['para',            '10T, Col R'],
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Beast Pirates Luffy ==========
    3443: {
        3439: {
            name: ['Zo', 'ro'],
            type: ['STR', 'QCK'],
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Zoro', 'STR'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'STR/QCK'],
                                ['chain-down',      '5T, 0.1x'],
                                ['def-thres',       '5T, 90%, 1000'],
                                ['bar-hit',         '1T, 25x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3440: {
            name: 'Sanji',
            type: 'DEX',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Cerebral/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sanji', 'DEX'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '4T, Row 2 3'],
                                ['cd-rew',          '1T'],
                                ['slot-block',      'All'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3441: {
            name: 'Nami',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Nami', 'INT'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def',             '12T, 1000x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '20,000']
                            ]
                        }
                    ]
                }
            ]
        },
        3442: {
            name: 'Brook',
            type: 'QCK',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/QCK']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Brook', 'QCK'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '5T, 90%'],
                                ['desp',            '5T'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3443: {
            name: 'Luffy',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, DEX/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['?', '?'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'BLOCK/Bad'],
                                ['tap-limit',       '10T, 5x'],
                                ['bar-slot',        '1T, 4x, DEX'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Luffy', 'QCK'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 1'],
                                ['sp-bind',         '4T'],
                                ['slot-change',     'G/TND/BOMB'],
                                ['def',             '10T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3444: {
            name: 'Jinbe',
            type: 'PSY',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, DEX/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['?', '?'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '1T, Row 2 3'],
                                ['slot-block',      'All'],
                                ['slot-lock',       '1T'],
                                ['burn',            '5T, 5000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['hp-cut',          '60%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Jinbe', 'PSY'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '5T'],
                                ['para',            '5T'],
                                ['resil',           '5T'],
                                ['bar-p',           '1T, 3x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Halloween Robin ==========
    3467: {
        2758: {
            name: 'Sabo',
            type: 'PSY',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Shooter/Free Spirit/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sabo', 'PSY'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'BLOCK/EMPTY/BOMB'],
                                ['para',            '5T'],
                                ['chain-down',      '5T, 0.1x'],
                                ['burn',            '5T, 8000'],
                                ['bar-p',           '5T, 2x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3462: {
            name: 'Koala',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Striker/Free Spirit']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Koala', 'STR'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '5T'],
                                ['bind',            '5T, Row 2'],
                                ['sp-bind',         '5T, Row 3'],
                                ['atk-down',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3463: {
            name: 'Karasu',
            type: 'PSY',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Karasu', 'PSY'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock',       '2T'],
                                ['sp-bind',         '4T, Row 2 3'],
                                ['slot-neg',        '3T, Type'],
                                ['def-perc',        '4T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3464: {
            name: 'Morley',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Morley', 'INT'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def',             '3T, 1000x'],
                                ['immu-all',        '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3467: {
            name: 'Robin',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, QCK/DEX/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['?', '?'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['para',            '5T'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Robin', 'QCK'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['cd-rew',          '10T, Row 2'],
                                ['chain-down',      '5T, 0.1x'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        2763: {
            name: 'Nami',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, QCK/DEX/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['?', '?'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '5T'],
                                ['slot-change',     'Bad'],
                                ['anti-rcv',        '10T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['hp-cut',          '80%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Nami', 'QCK'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['bind',            '5T, Row 1'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['def-thres',       '5T, 90%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Moria ==========
    3491: {
        2000: {
            name: 'Zoro & Sanji',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Powerhouse/Driven/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Zoro & Sanji', 'STR'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '70%'],
                                ['bind',            '8T, Row 1'],
                                ['para',            '5T'],
                                ['nao',             '99+T'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        2395: {
            name: 'Chopper & Franky',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Chopper & Usopp', 'INT'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['sp-bind',         '2T, Row 2 3'],
                                ['immu-all',        '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        2397: {
            name: 'Usopp & Robin',
            type: 'DEX',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Powerhouse/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Usopp & Robin', 'DEX'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['sp-bind',         '5T'],
                                ['desp',            '5T'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        2888: {
            name: 'Nami',
            type: 'PSY',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Cerebral/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Nami', 'PSY'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock',       '1T'],
                                ['burn',            '4T, 8000'],
                                ['atk-down',        '4T, 70%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '20%'],
                                ['hp-cut',          '50%'],
                                ['sp-limit',        '1x']
                            ]
                        }
                    ]
                }
            ]
        },
        2887: {
            name: 'Luffy',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, Cerebral/Free Spirit/Driven']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['?', '?'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'QCK/G/RCV'],
                                ['chain-down',      '10T, 0.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Luffy', 'QCK'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '1T, Row 2 3'],
                                ['atk-down',        '5T, 90%'],
                                ['def-thres',       '5T, 90%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3491: {
            name: 'Moria',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '10T, Cerebral/Free Spirit/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['?', '?'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'QCK'],
                                ['burn',            '5T, 10000'],
                                ['def',             '5T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Moria', 'QCK'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'QCK'],
                                ['bind',            '6T, Row 1'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Hyogoro ==========
    3506: {
        3391: {
            name: 'Toki',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Powerhouse/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Toki', 'STR'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-boost',       '5T, 1.2x'],
                                ['orb-boost',       '5T, 1.2x'],
                                ['def',             '5T, 1000x'],
                                ['resil',           '5T'],
                                ['bar-hit',         '1T, 25x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '100%']
                            ]
                        }
                    ]
                }
            ]
        },
        3502: {
            name: 'Kinemon',
            type: 'DEX',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Powerhouse/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kinemon', 'DEX'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '8T'],
                                ['bind',            '8T, Row 3'],
                                ['slot-change',     'STR'],
                                ['slot-neg',        '5T, STR'],
                                ['slot-lock-tap',   '1x Good'],
                                ['nao',             '99+T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '50,000']
                            ]
                        }
                    ]
                }
            ]
        },
        3503: {
            name: 'Denjiro',
            type: 'DEX',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Denjiro', 'DEX'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['chain-down',      '3T, 0.1x'],
                                ['resil',           '8T'],
                                ['def',             '3T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3504: {
            name: 'O-Tsuru',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['O-Tsuru', 'INT'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-down',      '3T, 0.1x'],
                                ['immu-all',        '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3175: {
            name: 'Oden',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, Fighter/Cerebral/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['?', '?'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'DEX/PSY'],
                                ['slot-change',     'Bad'],
                                ['chain-down',      '4T, 0.1x'],
                                ['immu-def',        '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Oden', 'QCK'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '6T, 90%'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['def-perc',        '6T, 90%'],
                                ['def-thres',       '6T, 90%, 1000'],
                                ['immu-def',        '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3506: {
            name: 'Hyogoro',
            type: 'DEX',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, Fighter/Cerebral/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['?', '?'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '4T, Captain'],
                                ['bind',            '4T, Friend'],
                                ['sp-bind',         '6T, Row 2 3'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '100%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Hyogoro', 'DEX'],
                    hp: 0,
                    atk: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Type'],
                                ['cd-rew',          '1T'],
                                ['chain-lock',      '6T, 1.1x'],
                                ['para',            '6T'],
                                ['immu-def',        '99+T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Tashigi ==========
    3527: {
        1577: {
            name: 'Kinemon',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kinemon', 'INT'],
                    hp: 500000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '5T'],
                                ['atk-down',        '3T, 90%'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['desp',            '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        2097: {
            name: 'Zoro',
            type: 'DEX',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Free Spirit/Striker']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Zoro', 'DEX'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '1T'],
                                ['slot-bind',       '10T, Row 1'],
                                ['bar-gd',          '2T, 3x'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['ship-bind',       '4T'],
                                ['def',             '5T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['atk',             '99+T'],
                                ['def-null',        '2T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '30%'],
                                ['slot-change',     'EMPTY'],
                                ['slot-lock-tap',   '1x Good']
                            ]
                        }
                    ]
                }
            ]
        },
        3007: {
            name: 'Smoker',
            type: 'DEX',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/QCK']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Smoker', 'DEX'],
                    hp: 2400000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-neg',        '5T, Type'],
                                ['def-thres',       '4T, 90%, 1000']
                            ]
                        },
                        {
                            type: 'Turn 1 / 2',
                            action: [
                                ['blow-away',       '2T, Random 1']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '99+T, Random 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3330: {
            name: 'Law & Chopper',
            type: 'STR',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Slasher/Powerhouse/Fighter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Law & Chopper', 'STR'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['sp-bind',         '5T'],
                                ['para',            '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hunger',          '3x'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['heal',            '?'],
                                ['para',            '1T']
                            ]
                        }
                    ]
                }
            ]
        },
        1600: {
            name: 'Luffy',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Momonosuke', 'INT'],
                    hp: 1300000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-down',      '5T, 0.1x'],
                                ['def',             '6T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['heal',            '100%'],
                                ['cd-rew',          '3T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Luffy', 'STR'],
                    hp: 2500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '8T'],
                                ['bind',            '5T, Row 1'],
                                ['slot-block',      'All'],
                                ['hunger',          '3x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['para',            '1T'],
                                ['hp-cut',          '10%']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['anti-rcv',        '5T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3527: {
            name: ['Ta', 'shi', 'gi'],
            type: ['STR', 'DEX', 'QCK'],
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, Fighter/Free Spirit/Slasher']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Sanji', 'PSY'],
                    hp: 1560000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'PSY/INT'],
                                ['sp-limit',        '1T, 2x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['heal',            '100%'],
                                ['ship-bind',       '5T'],
                                ['atk',             '99+T, 2x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Tashigi', 'STR'],
                    hp: 2750000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'STR/DEX/QCK'],
                                ['slot-block',      'All'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['chain-down',      '99+T, 0.5x'],
                                ['chain-atk-down-min','99+T, <2x Chain, 90%'],
                                ['slot-neg',        '99+T, Type'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Chain Lock, Add Chain',
                            action: [
                                ['blow-away',       '99+T, Random 2 Sailor'],
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['type-change',     'STR/DEX/QCK'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['slot-block',      'All'],
                                ['inc-dmg',         '15T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '60,000']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Perospero ==========
    3547: {
        2922: {
            name: 'Kaido',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Slasher/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kaido', 'QCK'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['cd-rew',          '1T'],
                                ['def-thres',       '4T, 90%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['desp',            '5T'],
                                ['blow-away',       '99+T, Random 2']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3137: {
            name: 'King',
            type: 'DEX',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/QCK']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['King', 'DEX'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'PSY/INT/TND'],
                                ['burn',            '7T, 10000'],
                                ['bar-hit',         '2T, 28x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '1'],
                                ['hp-cut',          '30%']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['bar-slot',        '20T, 2x, Random'],
                                ['slot-change',     'PSY/INT/TND'],
                                ['blow-away',       '99+T, Random 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3139: {
            name: 'Queen',
            type: 'QCK',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Slasher/Driven']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Queen', 'QCK'],
                    hp: 1200000,
                    atk: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['sp-bind',         '5T, Row 2 3'],
                                ['def',             '5T, 10000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 3 Turns',
                            action: [
                                ['hp-cut',          '30%']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['blow-away',       '99+T, Random 2'],
                                ['slot-change',     'Bad']
                            ]
                        }
                    ]
                }
            ]
        },
        3141: {
            name: 'Jack',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Jack', 'INT'],
                    hp: 500000,
                    atk: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['resil',           '2T'],
                                ['def-thres',       '2T, 90%, 1000'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['atk-down',        '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '99+T, Random 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3498: {
            name: 'O-Lin',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/QCK']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Ulti & Page One', 'STR'],
                    hp: 1300000,
                    atk: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '6T'],
                                ['para',            '5T, Row 1'],
                                ['resil',           '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['para',            '5T'],
                                ['desp',            '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['O-Lin', 'QCK'],
                    hp: 2500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '3T, Row 2 3'],
                                ['chain-down',      '5T, 0.1x'],
                                ['def-null',        '1T'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-thres',       '4T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['bar-hit',         '99+T, 20x'],
                                ['heal',            '80%']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3547: {
            name: 'Perospero',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, Fighter/Slasher/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Perospero', 'STR'],
                    hp: 1560000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '3T, 90%'],
                                ['slot-lock',       '1T'],
                                ['para',            '3T'],
                                ['def-thres',       '5T, 90%, 1000'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['cd-rew',          '3T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-change',     'Random'],
                                ['slot-lock-tap',   '1x Good'],
                                ['ship-bind',       '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Perospero', 'QCK'],
                    hp: 2750000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-limit',        '1T, 2x'],
                                ['slot-bind',       '5T, Row 1'],
                                ['bar-slot',        '10T, 4x, STR'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['para',            '3T'],
                                ['slot-block',      'All'],
                                ['resil',           '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['slot-bind',       '3T'],
                                ['clear-buff',      'Buff & Values']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Kanjuro ==========
    3567: {
        3431: {
            name: 'Sasaki',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/QCK/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sasaki', 'STR'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '5T, 90%'],
                                ['para',            '5T'],
                                ['chain-atk-down-max','99+T, >3x Chain, 90%'],
                                ['resil',           '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '30%'],
                                ['para',            '5T']
                            ]
                        },
                        {
                            type: 'Turn 5',
                            action: [
                                ['heal',            '?'],
                                ['sp-bind',         '5T, Row 2 3']
                            ]
                        }
                    ]
                }
            ]
        },
        3434: {
            name: 'Black Maria',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Slasher/Free Spirit']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Black Maria', 'QCK'],
                    hp: 500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '8T'],
                                ['atk-boost',       '3T, 1.1x'],
                                ['orb-boost',       '3T, 1.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change',
                            action: [
                                ['slot-change',     'Random Type'],
                                ['slot-lock-tap',   '2x Good']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '100%'],
                                ['nao',             '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every 2 Turns',
                            action: [
                                ['blow-away',       '99+T, Random 2']
                            ]
                        }
                    ]
                }
            ]
        },
        3435: {
            name: 'Who\'s-Who',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Shooter/Slasher/Free Spirit']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Who\'s-Who', 'INT'],
                    hp_: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'BLOCK/Bad/EMPTY'],
                                ['bind',            '8T, Row 1'],
                                ['sp-bind',         '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every Turn After',
                            action: [
                                ['slot-block',      'BLOCK/Bad/EMPTY']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['heal',            '?']
                            ]
                        }
                    ]
                }
            ]
        },
        3436: {
            name: 'X Drake',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['X Drake', 'INT'],
                    hp_: 500000,
                    atk_: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 3'],
                                ['para',            '3T, Row 2'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['para',            '3T, Row 1'],
                                ['chain-lock',      '3T, 1.1x']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['hp-cut',          '50%']
                            ]
                        }
                    ]
                }
            ]
        },
        3433: {
            name: 'Ulti & Page One',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/QCK/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Page One', 'STR'],
                    hp_: 1300000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '5T, 90%'],
                                ['para',            '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['bind',            '8T, Row 3']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ulti & Page One', 'STR'],
                    hp: 2500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '8T'],
                                ['slot-change',     'Bad'],
                                ['def-thres',       '5T, 90%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Orb Boost',
                            action: [
                                ['hp-cut',          '50%'],
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['bar-gd',          '5T, 3x']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['para',            '10T'],
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3567: {
            name: 'Kanjuro',
            type: 'STR',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, Slasher/Free Spirit/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Orochi', 'INT'],
                    hp_: 1560000,
                    atk_: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-atk-down-min','5T, <2.5x Chain, 90%'],
                                ['def-perc',        '4T, 90%'],
                                ['def',             '4T, 1000x'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '5T'],
                                ['ship-bind',       '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kanjuro', 'STR'],
                    hp_: 2750000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '70%'],
                                ['sp-bind',         '6T'],
                                ['chain-lock',      '3T, 1.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '80,000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '5T, Col R']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Ulti ==========
    3588: {
        2062: {
            name: 'Apoo',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Apoo', 'INT'],
                    hp: 500000,
                    atk_: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['atk-down',        '3T, 90%'],
                                ['sp-bind',         '2T'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-lock-tap',   '1x Great']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['heal',            '?']
                            ]
                        }
                    ]
                }
            ]
        },
        3498: {
            name: 'O-Lin',
            type: 'DEX',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Powerhouse/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['O-Lin', 'DEX'],
                    hp: 1500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'TND/Bad'],
                                ['desp',            '7T'],
                                ['nao',             '99+T'],
                                ['atk-down',        '4T, 90%'],
                                ['def',             '4T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['chain-atk-down-min','5T, <3x Chain']
                            ]
                        }
                    ]
                }
            ]
        },
        3547: {
            name: 'Perospero',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Cerebral/Striker/Free Spirit']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Perospero', 'INT'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-bind',       '2T'],
                                ['resil',           '5T'],
                                ['bar-slot',        '1T, 2x, PSY'],
                                ['nao',             '99+T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['bar-slot',        '3T, 3x, PSY']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['slot-bind',       '99+T, Row 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3580: {
            name: ['Haw', 'kins'],
            type: ['STR', 'INT'],
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/QCK/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Hawkins', 'STR'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'STR/INT'],
                                ['slot-block',      'BLOCK/Bad'],
                                ['sp-bind',         '5T'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['type-change',     'DEX'],
                                ['cd-rew',          '2T'],
                                ['def-null',        '1T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['heal',            '100%']
                            ]
                        }
                    ]
                }
            ]
        },
        3508: {
            name: ['Kaido & ', 'Lead Performers'],
            type: ['QCK', 'INT'],
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/QCK/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Lead Performers', 'STR'],
                    hp: 1300000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '8T'],
                                ['slot-change',     'Poison, Row 2 3'],
                                ['poison',          '99+T, 3000'],
                                ['resil',           '5T'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['desp',            '10T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kaido & Lead Performers', 'QCK'],
                    hp: 2500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'QCK/INT'],
                                ['atk-down',        '8T, 90%'],
                                ['para',            '3T'],
                                ['def-thres',       '5T, 90%, 1000'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['blow-away',       '3T, Col R'],
                                ['clear-buff',      'Buff & Values']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '3T, Col L'],
                                ['clear-buff',      'Buff & Values']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3588: {
            name: 'Ulti',
            type: 'STR',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, Slasher/Free Spirit/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Page One', 'QCK'],
                    hp: 1300000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '8T'],
                                ['hp-cut',          '80%'],
                                ['def',             '5T, 15000x'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2, Every Turn After',
                            action: [
                                ['heal',            '?']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ulti', 'STR'],
                    hp: 2500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['dmg-normal',      '30,000'],
                                ['cd-rew',          '1T, Row 1'],
                                ['cd-rew',          '2T, Row 2 3'],
                                ['chain-atk-down-min','5T, <3.2x Chain, 90%'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost, Orb Boost',
                            action: [
                                ['blow-away',       '99+T, Random 2 Sailor']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '50%'],
                                ['enrage',          '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '5T, Captain']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Sabo ==========
    3621: {
        1590: {
            name: 'Shanks',
            type: 'DEX',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Striker/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Shanks', 'DEX'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['sp-bind',         '5T'],
                                ['def-perc',        '5T, 90%'],
                                ['def-thres',       '5T, 90%, 1000'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blow-away',       '99+T, Random 2']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '99+T, Random 2']
                            ]
                        }
                    ]
                }
            ]
        },
        2974: {
            name: 'Chopper',
            type: 'QCK',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Chopper', 'QCK'],
                    hp: 1200000,
                    atk_: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'EMPTY/BLOCK/BOMB'],
                                ['atk-down',        '8T, 90%'],
                                ['bar-hit',         '3T, 30x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['atk-boost',       '8T'],
                                ['orb-boost',       '8T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['sp-bind',         '10T, Row 2 3'],
                                ['dmg-eot',         '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        2977: {
            name: ['Lu', 'ffy'],
            type: ['PSY', 'INT'],
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Luffy', 'PSY'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'PSY/INT'],
                                ['cd-rew',          '1T'],
                                ['para',            '5T'],
                                ['def',             '5T, 10000x'],
                                ['resil',           '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '2T'],
                                ['atk',             '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['heal',            '100%']
                            ]
                        }
                    ]
                }
            ]
        },
        3613: {
            name: 'Hancock & Nami & Robin',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Free Spirit/Slasher']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Hancock & Nami & Robin', 'QCK'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '8T'],
                                ['sp-bind',         '4T'],
                                ['slot-neg',        '2T, Type'],
                                ['def-perc',        '4T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['desp',            '6T'],
                                ['enrage',          '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3339: {
            name: 'Koala',
            type: 'DEX',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Perona', 'PSY'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock',       '1T'],
                                ['def-null',        '1T'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '3T'],
                                ['ship-bind',       '10T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['hunger',          '3x'],
                                ['dmg-eot',         '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Koala', 'DEX'],
                    hp: 6000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '6T, 90%'],
                                ['para',            '6T'],
                                ['clear-buff',      'Buff Only'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['dmg-limit',       '3T, 2M']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['bind',            '8T, Row 2 3'],
                                ['sp-bind',         '3T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3621: {
            name: 'Sabo',
            type: 'DEX',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, Free Spirit/Striker/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Rebecca', 'DEX'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '10T, Captain'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['nao',             '1T'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['heal',            '100%'],
                                ['hp-cut',          '70%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sabo', 'DEX'],
                    hp: 2000000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '8T, Row 2'],
                                ['slot-change',     'STR'],
                                ['slot-neg',        'STR'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '100%'],
                                ['dmg-normal',      '80,000'],
                                ['nao',             '99+T'],
                                ['bar-hp',          '3T, 50M']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['def-null',        '1T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['bind',            '8T, Row 3'],
                                ['cd-lock',         '2x Perfect']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Moria v2 ==========
    3645: {
        3283: {
            name: 'Pizarro',
            type: 'PSY',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Pizarro', 'PSY'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'TND, Col R'],
                                ['slot-change',     'Bad, Col L'],
                                ['cd-rew',          '1T, Row 1'],
                                ['bind',            '8T, Row 1'],
                                ['atk-boost',       '2T, 1.1x'],
                                ['orb-boost',       '2T, 1.1x'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-def',        '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        3284: {
            name: 'Devon',
            type: 'PSY',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Devon', 'PSY'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['para',            '3T'],
                                ['def-perc',        '3T, 90%'],
                                ['def',             '3T, 10000x'],
                                ['resil',           '10T'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-block',      'All'],
                                ['atk',             '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['heal',            '100%']
                            ]
                        }
                    ]
                }
            ]
        },
        3287: {
            name: 'Vasco Shot',
            type: 'QCK',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Vasco Shot', 'QCK'],
                    hp: 1200000,
                    atk_: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'STR, Row 1'],
                                ['slot-change',     'QCK, Row 2'],
                                ['slot-change',     'DEX, Row 3'],
                                ['slot-lock-tap',   '1x Good'],
                                ['sp-bind',         '3T'],
                                ['bar-p',           '2T, 3x'],
                                ['def',             '3T, 3000x']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-neg',        '3T, Type'],
                                ['nao',             '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['sp-limit',        '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        3643: {
            name: 'Shiryu',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Cerebral/Free Spirit/Driven']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Shiryu', 'STR'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '60%'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['sp-bind',         '5T, Col L'],
                                ['para',            '8T, Col R'],
                                ['immu-poison',     '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '?%'],
                                ['def-null',        '1T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3641: {
            name: 'Blackbeard',
            type: 'PSY',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Free Spirit/Powerhouse/Driven']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Lafitte', 'PSY'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['bind',            '8T, Row 2'],
                                ['para',            '5T'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['hunger',          '3x'],
                                ['dmg-eot-e',       '99+T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['slot-bind',       '3T'],
                                ['ship-bind',       '10T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Blackbeard', 'PSY'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-change',     'Type'],
                                ['bind',            '8T, Row 3'],
                                ['slot-neg',        '5T, Type'],
                                ['tap-limit',       '2T, 5x'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Preemp',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['tap-limit',       '10T, 4x'],
                                ['bind',            '5T, Row 2 3']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3645: {
            name: 'Moria',
            type: 'PSY',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, DEX/QCK/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Absalom', 'PSY'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '90%'],
                                ['slot-block',      'All'],
                                ['cd-rew',          '5T, Row 2'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['blow-away',       '99+T, Random 1, Row 3']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['dmg-eot-e',       '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Moria', 'PSY'],
                    hp: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '4T, Row 2 3'],
                                ['atk-down',        '5T, 90%'],
                                ['chain-down',      '5T, 0.1x'],
                                ['chain-atk-down-min','5T, <1.5x chain, 80%'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost, Set Chain Boundary',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['desp',            '10T'],
                                ['blow-away',       '1T, Random 2 Sailor']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['bind',            '5T, Row 2 3']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['def-null',        '2T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Franky ==========
    3663: {
        1709: {
            name: 'Nami',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Powerhouse/Cerebral/Striker']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Nami', 'STR'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'EMPTY/BLOCK/BOMB'],
                                ['para',            '8T'],
                                ['chain-down',      '5T, 0.1x'],
                                ['nao',             '99+T'],
                                ['def-null',        '1T'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['hp-cut',          '30%'],
                                ['slot-block',      'EMPTY/BLOCK/BOMB']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['type-change',     'DEX/QCK'],
                                ['heal',            '80%']
                            ]
                        }
                    ]
                }
            ]
        },
        2622: {
            name: 'Kalifa',
            type: 'PSY',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Powerhouse/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kalifa', 'PSY'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'Random'],
                                ['slot-poison',     'Random'],
                                ['sp-bind',         '5T, Row 2 3'],
                                ['def',             '5T, 3000x'],
                                ['resil',           '5T'],
                                ['bar-hit',         '1T, 30x'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['ca-swap',         '5T'],
                                ['def',             '3T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['sp-bind',         '5T'],
                                ['para',            '5T, Row 2 3']
                            ]
                        }
                    ]
                }
            ]
        },
        2626: {
            name: 'Carrot',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Carrot', 'INT'],
                    hp: 1200000,
                    atk_: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['sp-bind',         '2T'],
                                ['fear',            '1T'],
                                ['hunger',          '1x'],
                                ['chain-atk-down-min','3T, <2.3x chain, 90%'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['para',            '1T, Col L'],
                                ['bind',            '4T, Col R'],
                                ['enrage',          '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['hunger',          '2x']
                            ]
                        }
                    ]
                }
            ]
        },
        3042: {
            name: 'Robin',
            type: 'DEX',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/QCK']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Robin', 'DEX'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '8T'],
                                ['bind',            '8T, Row 1'],
                                ['atk-down',        '5T, 90%'],
                                ['chain-atk-down-min','3T, <3.5x chain, 90%'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['heal',            '100%'],
                                ['type-change',     'STR/QCK'],
                                ['blow-away',       '5T, Random 1']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3038: {
            name: 'Hancock',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Striker/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Marguerite', 'QCK'],
                    hp: 1800000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['atk-down',        '5T, 90%'],
                                ['sp-bind',         '5T, Row 2 3'],
                                ['def-null',        '1T, STR/QCK/INT'],
                                ['bar-p',           '3T, 2x'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['ca-swap',         '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['dmg-eot-e',       '99+T, 50%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Hancock', 'QCK'],
                    hp: 3200000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'INT'],
                                ['bind',            '8T, Col L'],
                                ['chain-down',      '12T, 0.1x'],
                                ['para',            '5T, Col R'],
                                ['p-hard',          '99+T'],
                                ['bar-p',           '3T, 2x'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['atk',             '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['para',            '5T, Col L'],
                                ['bind',            '5T, Col R']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3663: {
            name: ['Fran', 'ky'],
            type: ['QCK', 'INT'],
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Free Spirit/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Franky', 'QCK'],
                    hp: 1800000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '6T, Row 2 3'],
                                ['slot-neg',        '5T, STR/DEX/QCK'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '100,000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '10T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Franky', 'QCK'],
                    hp: 3200000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'QCK/INT'],
                                ['slot-block',      'All'],
                                ['atk-down',        '8T, 90%, STR/QCK/INT'],
                                ['sp-bind',         '5T'],
                                ['para',            '5T'],
                                ['hunger',          '2x'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every Turn After',
                            action: [
                                ['type-change',     'QCK/INT'],
                                ['blow-away',       '99+T, Random 1']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['def-null',        '2T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== RED Sanji ==========
    3689: {
        3682: {
            name: 'Chopper',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Chopper', 'QCK'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['para',            '5T'],
                                ['burn',            '5T, 20,000'],
                                ['cd-rew',          '3T'],
                                ['bar-slot',        '1T, 3x, PSY'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '100%'],
                                ['type-change',     'INT'],
                                ['slot-block',      'All'],
                                ['bind',            '15T, Captain']
                            ]
                        },
                        {
                            type: 'Turn 1 (Not after revive)',
                            action: [
                                ['def-null',        '1T, STR/QCK/INT'],
                                ['atk',             '10T'],
                                ['bar-slot',        '2T, 3x, DEX']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3683: {
            name: 'Brook',
            type: 'QCK',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Slasher/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Brook', 'QCK'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-thres',       '6T, 99%, 1000'],
                                ['slot-neg',        '3T, Type'],
                                ['desp',            '10T'],
                                ['cd-rew',          '1T'],
                                ['nao',             '99+T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['resil',           '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['sp-bind',         '7T, Row 2 3'],
                                ['atk-down',        '7T']
                            ]
                        }
                    ]
                }
            ]
        },
        3684: {
            name: 'Nami',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Nami', 'INT'],
                    hp: 800000,
                    atk_: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '3T'],
                                ['slot-block',      'Row 1 3'],
                                ['slot-bind',       '3T, Row 2'],
                                ['def-thres',       '4T, 99%, 1000'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '50,000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['enrage',          '99+T'],
                                ['heal-bind',       '6T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['dmg-limit',       '2T, 500,000']
                            ]
                        }
                    ]
                }
            ]
        },
        3685: {
            name: 'Robin',
            type: 'PSY',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Cerebral/Free Spirit']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Robin', 'PSY'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['bind',            '9T, Col L'],
                                ['chain-down',      '5T, 0.1x'],
                                ['chain-atk-down-min','5T, <2.5x chain, 90%'],
                                ['atk-down',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['hp-cut',          '?%'],
                                ['heal',            '?%']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['bind',            '5T, Row 2 3'],
                                ['para',            '5T, Row 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3672: {
            name: 'Luffy',
            type: 'PSY',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    boss: ['Zoro', 'PSY'],
                    hp_: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/INT'],
                                ['para',            '2T, Row 1']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Jinbe', 'PSY'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['chain-atk-down-min','2T, <3x chain, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '3T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['dmg-eot-e',       '?%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Luffy', 'PSY'],
                    hp: 3200000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['sp-bind',         '5T'],
                                ['burn',            '5T, 30,000'],
                                ['bar-p',           '2T, 4x'],
                                ['resil',           '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['atk',             '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '99+T, Random 2'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3689: {
            name: 'Sanji',
            type: 'PSY',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    boss: ['Usopp', 'PSY'],
                    hp_: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Free Spirit/Powerhouse'],
                                ['para',            '1T, Row 2 3']
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost, Orb Boost',
                            action: [
                                ['slot-bind',       '2T, Row 1']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Franky', 'PSY'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bar-slot',        '2T, 5x, INT'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost, Orb Boost',
                            action: [
                                ['para',            '3T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['ship-bind',       '10T'],
                                ['slot-bind',       '10T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sanji', 'PSY'],
                    hp: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '8T'],
                                ['clear-buff',      'Buff & Values'],
                                ['cd-rew',          '3T, Row 1'],
                                ['def',             '5T, 10000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost, Orb Boost',
                            action: [
                                ['desp',            '9T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['burn',            '99+T, 30,000'],
                                ['enrage',          '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== RED Chopper v2 ==========
    3712: {
        3695: {
            name: 'Shanks',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Free Spirit/Shooter/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Shanks', 'STR'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '4T, Row 1'],
                                ['nao',             '99+T'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['def',             '7T, 30000x'],
                                ['def-perc',        '6T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['desp',            '8T'],
                                ['atk',             '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['bar-gd',          '5T, 4x']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3697: {
            name: 'Beckman & Lucky Roux',
            type: 'QCK',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/QCK/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Beckman & Lucky Roux', 'QCK'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'DEX/QCK/PSY/INT'],
                                ['slot-block',      'All'],
                                ['def-perc',        '5T, 90%'],
                                ['desp',            '8T'],
                                ['chain-atk-down-min','5T, <3x chain, 90%'],
                                ['resil',           '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 5 Turns',
                            action: [
                                ['def-thres',       '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '99+T, Random 2'],
                                ['slot-block',      'All']
                            ]
                        }
                    ]
                }
            ]
        },
        3698: {
            name: 'Gordon',
            type: 'STR',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Gordon', 'STR'],
                    hp_: 800000,
                    atk_: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['ship-bind',       '5T'],
                                ['p-hard',          '99+T'],
                                ['slot-block',      'Bad/BLOCK/BOMB'],
                                ['bind',            '6T, Row 1'],
                                ['chain-down',      '10T, 0.1x'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-change',     'Bad'],
                                ['enrage',          '99+T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-limit',       '2T, 500,000']
                            ]
                        }
                    ]
                }
            ]
        },
        3708: {
            name: 'Usopp & Yasopp',
            type: 'STR',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/QCK/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Usopp & Yasopp', 'STR'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '2T'],
                                ['ship-bind',       '10T'],
                                ['para',            '5T'],
                                ['def-null',        '1T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['para',            '5T'],
                                ['nao',             '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['heal',            '100%'],
                                ['def-null',        '1T']
                            ]
                        }
                    ]
                }
            ]
        },
        3713: {
            name: 'Uta',
            type: 'INT',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Free Spirit/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Uta', 'INT'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '7T, Friend Cap'],
                                ['desp',            '7T, Captain'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['bind',            '8T, Captain'],
                                ['desp',            '8T, Friend Cap']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Uta', 'INT'],
                    hp: 3200000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '3T'],
                                ['sp-bind',         '10T, Row 1'],
                                ['tap-limit',       '1T, 4x'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['nao',             '99+T'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['dmg-limit',       '2T, 500,000'],
                                ['atk',             '99+T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['dmg-limit',       '2T, 500,000']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['slot-block',      'All'],
                                ['def-null',        '2T']
                            ]
                        }
                    ]
                }
            ]
        },
        3712: {
            name: 'Chopper',
            type: 'INT',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Free Spirit/Cerebral/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Usopp', 'INT'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'EMPTY'],
                                ['para',            '4T'],
                                ['bar-slot',        '3T, 1x, QCK'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['Heal Team',       '100%'],
                                ['heal-bind',       '6T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '10T'],
                                ['ship-bind',       '10T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Chopper', 'INT'],
                    hp: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '6T, 90%'],
                                ['nao',             '99+T'],
                                ['desp',            '9T'],
                                ['clear-buff',      'Buff Only'],
                                ['def',             '5T, 10000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost, Orb Boost, Affinity',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['hp-cut',          '40%']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '50,000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '?%'],
                                ['sp-bind',         '10T, Row 2 3']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '3T, Friend Cap']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Law v2 ==========
    3736: {
        842: {
            name: 'Monet',
            type: 'INT',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Free Spirit/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Monet', 'INT'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['hp-cut',          '99%'],
                                ['cd-rew',          '4T, Row 1'],
                                ['sp-bind',         '5T, Row 2 3'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-fixed',       '10,000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['def-thres',       '5T'],
                                ['bar-hp',          '5T, 10M']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '99+T, Random 2'],
                                ['slot-block',      'All']
                            ]
                        }
                    ]
                }
            ]
        },
        3285: {
            name: 'Vergo',
            type: 'INT',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Slasher/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Vergo', 'INT'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'Random'],
                                ['para',            '5T'],
                                ['nao',             '99+T'],
                                ['tap-limit',       '1T, 4x'],
                                ['atk-down',        '5T, 90%'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['heal',            '?%'],
                                ['def-null',        '1T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['heal',            '100%'],
                                ['bind',            '8T, Row 1']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3732: {
            name: 'Smoker',
            type: 'PSY',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Smoker', 'PSY'],
                    hp: 800000,
                    atk_: 4000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['bar-hit',         '3T, 15x'],
                                ['counter',         '50%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Affinity',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['- Max HP',        '10,000']
                            ]
                        }
                    ]
                }
            ]
        },
        3733: {
            name: 'Tashigi',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/QCK/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Tashigi', 'INT'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['chain-atk-down-min','5T, <2.5x chain, 90%'],
                                ['nao',             '99+T'],
                                ['def-thres',       '3T, 99%, 1000'],
                                ['def',             '3T, 10000x'],
                                ['immu-poison',     '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['type-change',     'DEX'],
                                ['heal',            '75%'],
                                ['sp-limit',        '3T, 1x']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '99+T, Random 2']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '99+T, Random 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3011: {
            name: 'Caesar',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Brownbeard', 'STR'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['nao',             '99+T'],
                                ['resil',           '5T'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '5T'],
                                ['ship-bind',       '10T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Caesar', 'STR'],
                    hp: 3200000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '5T'],
                                ['para',            '5T'],
                                ['desp',            '5T'],
                                ['atk-down',        '8T, 90%'],
                                ['chain-atk-down-min','5T, <3.3x chain, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['heal',            '?%']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['slot-block',      'EMPTY/BOMB/BLOCK'],
                                ['dmg-limit',       '3T, 2M']
                            ]
                        }
                    ]
                }
            ]
        },
        3736: {
            name: 'Law',
            type: 'STR',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Striker/Cerebral/Free Spirit'],
                                ['Bad Slot+',       '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Luffy', 'STR'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '5T, Row 2 3'],
                                ['def',             '5T, 10000x'],
                                ['chain-atk-down-min','10x, <2.5x chain, 90%'],
                                ['bind',            '5T, Row 1'],
                                ['chain-down',      '10T, 0.1x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['ship-bind',       '10T'],
                                ['slot-bind',       '10T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Law', 'STR'],
                    hp: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'EMPTY/BLOCK/BOMB'],
                                ['nao',             '99+T'],
                                ['burn',            '5T, 30000'],
                                ['cd-rew',          '1T'],
                                ['def',             '6T, 10000x'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['bar-slot',        '3T, 4x, QCK'],
                                ['slot-neg',        'Type'],
                                ['heal',            '10%']
                            ]
                        },
                        {
                            type: 'Turn 1 (Not after revive)',
                            action: [
                                ['bind',            '5T, Row 2 3'],
                                ['def-null',        '1T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['bind',            '8T, Row 1'],
                                ['atk',             '99+T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== O-Lin ==========
    3758: {
        3308: {
            name: 'Apoo',
            type: 'QCK',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Apoo', 'QCK'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '50%'],
                                ['slot-block',      'All'],
                                ['cd-rew',          '1T'],
                                ['def',             '3T, 10000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Dmg Reduction',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['hp-cut',          '30%']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '50%'],
                                ['ca-swap',         '3T'],
                                ['dmg-normal',      '50000']
                            ]
                        }
                    ]
                }
            ]
        },
        3580: {
            name: 'Hawkins',
            type: 'STR',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Striker/Driven/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Hawkins', 'STR'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-perc',        '5T, 80%'],
                                ['sp-bind',         '5T'],
                                ['resil',           '10T'],
                                ['hp-cut',          '50%'],
                                ['immu-poison',     '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '50%'],
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['hp-cut',          '50%'],
                                ['def-null',        '1T']
                            ]
                        }
                    ]
                }
            ]
        },
        3752: {
            name: 'Orochi',
            type: 'PSY',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Slasher/Cerebral/Free Spirit']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'BOMB'],
                                ['atk',             '2.5x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Orochi', 'PSY'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'S.BLOCK'],
                                ['nao',             '99+T'],
                                ['desp',            '10T'],
                                ['sp-bind',         '5T, Row 2 3'],
                                ['slot-lock-tap',   '1x Good'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['para',            '3T'],
                                ['atk-down',        '3T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['slot-change',     'S.BLOCK'],
                                ['desp',            '?T']
                            ]
                        }
                    ]
                }
            ]
        },
        3753: {
            name: 'Kanjuro',
            type: 'PSY',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kanjuro', 'PSY'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['bind',            '8T, Friend Cap'],
                                ['cd-rew',          '3T, Row 2'],
                                ['sp-bind',         '6T, Row 3'],
                                ['def',             '5T, 30000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['sp-bind',         '6T, Row 2'],
                                ['cd-rew',          '4T, Row 3'],
                                ['def-perc',        '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['bind',            '5T, Row 2 3']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3609: {
            name: 'Kaido',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Slasher/Free Spirit/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['King', 'DEX'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'TND'],
                                ['chain-atk-down-min','4T, <3.2x chain, 90%'],
                                ['nao',             '99+T'],
                                ['def',             '6T, 1000x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '5T'],
                                ['ship-bind',       '10T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kaido', 'QCK'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-thres',       '5T, 99%, 1000'],
                                ['desp',            '8T'],
                                ['bar-gd',          '2T, 3x'],
                                ['def-perc',        '6T, 80%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['heal',            '?%'],
                                ['clear-buff',      'Buff & Values'],
                                ['desp',            '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['slot-block',      'BLOCK/EMPTY/BOMB'],
                                ['dmg-limit',       '3T, 2M']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3758: {
            name: 'O-Lin',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Perospero', 'DEX'],
                    hp: 1000000, // Fixed
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-limit',        '2T, 2x'],
                                ['nao',             '99+T'],
                                ['tap-limit',       '1T, 2x'],
                                ['def-null',        '1T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['ship-bind',       '10T'],
                                ['slot-bind',       '10T'],
                                ['atk',             '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['O-Lin', 'QCK'],
                    hp: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['ca-swap',         '3T, Bottom Right'],
                                ['para',            '5T'],
                                ['nao',             '99+T'],
                                ['cd-rew',          '1T'],
                                ['atk-down',        '5T, 90%'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-null',        '2T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-pos',        '5T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Who's-Who  ==========
    3778: {
        3210: {
            name: 'X Drake',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['X Drake', 'INT'],
                    hp: 950000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '70%'],
                                ['def-thres',       '3T, 99%, 1000'],
                                ['bind',            '8T, Row 2 3'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['hp-cut',          '30%'],
                                ['slot-change',     'EMPTY']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['atk-down',        '3T'],
                                ['heal',            '?%']
                            ]
                        }
                    ]
                }
            ]
        },
        3654: {
            name: 'Sasaki',
            type: 'PSY',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sasaki', 'PSY'],
                    hp: 3000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '5T, 90%'],
                                ['slot-block',      'All'],
                                ['sp-bind',         '5T'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['nao',             '99+T'],
                                ['dmg-eot-e',       '99+T, 10%']
                            ]
                        },
                        {
                            type: 'Interrupt - Affinity',
                            action: [
                                ['bind',            '5T, Row 2 3'],
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '10T, Row 1'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3655: {
            name: 'Ulti',
            type: 'QCK',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Slasher/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ulti', 'QCK'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-neg',        '5T, Type'],
                                ['def-thres',       '7T, 99%, 1000'],
                                ['def',             '6T, 100Kx'],
                                ['bar-hp',          '3T, 3M'],
                                ['resil',           '6T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-perc',        '3T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '3T, Captain'],
                                ['slot-change',     'EMPTY']
                            ]
                        }
                    ]
                }
            ]
        },
        3656: {
            name: 'Page One',
            type: 'QCK',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Slasher/Free Spirit/Fighter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Page One', 'QCK'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['hunger',          '2x'],
                                ['atk-down',        '5T, 90%'],
                                ['slot-neg',        '3T, Type'],
                                ['immu-poison',     '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '50%'],
                                ['para',            '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '3T, Row 2']
                            ]
                        }
                    ]
                }
            ]
        },
        3650: {
            name: 'Black Maria',
            type: 'INT',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Powerhouse/Slasher']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Black Maria', 'INT'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['desp',            '7T'],
                                ['def-thres',       '3T, 99%, 1000'],
                                ['atk-down',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '?%']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Black Maria', 'INT'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '5T'],
                                ['slot-change',     'Bad'],
                                ['def-perc',        '10T, 90%'],
                                ['def',             '5T, 100Kx'],
                                ['atk-down',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '50%'],
                                ['def-thres',       '3T'],
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '99+T, Row 2']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3778: {
            name: 'Who\'s-Who',
            type: 'INT',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Who\'s-Who', 'PSY'],
                    hp: 3000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['cd-rew',          '3T, Col R'],
                                ['para',            '5T, Row 2-L, Row 3-L'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '10T'],
                                ['ship-bind',       '10T'],
                                ['atk',             '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Who\'s-Who', 'INT'],
                    hp: 4500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['hp-cut',          '50%'],
                                ['nao',             '99+T'],
                                ['chain-down',      '5T, 0.1x'],
                                ['chain-atk-down-min','5T, <2.8x chain, 90%'],
                                ['def-perc',        '6T, 90%'],
                                ['def-thres',       '3T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change',
                            action: [
                                ['slot-change',     'Bad'],
                                ['bind',            '99+T, Row 3-R'],
                                ['def-thres',       '3T, 99%, 1000']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '50000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-neg',        '5T, Type']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '99+T, Random 2']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Wyper ==========
    3801: {
        583: {
            name: 'Raki',
            type: 'INT',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/PSY'],
                                ['vs-red',          '10T, STR/DEX/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Raki', 'INT'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '10T'],
                                ['blind',           '5T'],
                                ['atk-down',        '8T, 90%'],
                                ['nao',             '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '3T, Random 2']
                            ]
                        }
                    ]
                }
            ]
        },
        2207: {
            name: 'Luffy',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/QCK/PSY'],
                                ['vs-red',          '10T, DEX/QCK/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Luffy', 'QCK'],
                    hp: 3000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['desp',            '15T'],
                                ['chain-lock',      '5T, 1.1x'],
                                ['slot-neg',        '3T, Type'],
                                ['nao',             '99+T'],
                                ['chain-atk-down-min','5T, <2.2x chain, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '10T, Row 1']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        2209: {
            name: 'Ganfor',
            type: 'PSY',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Striker/Driven/Cerebral'],
                                ['vs-red',          '10T, Striker/Driven/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ganfor', 'PSY'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-boost',       '5T, 1.1x'],
                                ['sp-bind',         '3T, Col L'],
                                ['cd-rew',          '3T, Col R'],
                                ['slot-neg',        '8T, TND'],
                                ['def-perc',        '6T, 90%']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '?%'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3062: {
            name: 'Conis',
            type: 'STR',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '10T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Conis', 'STR'],
                    hp: 1500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['burn',            '5T, 30000'],
                                ['def-perc',        '5T, 90%'],
                                ['def-thres',       '5T, 90%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '300,000'],
                                ['dmg-normal',      '30000']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['heal',            '100%'],
                                ['clear-buff',      'Buff Only']
                            ]
                        }
                    ]
                }
            ]
        },
        3801: {
            name: 'Wyper',
            type: 'INT',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Striker/Free Spirit/Cerebral'],
                                ['vs-red',          '10T, Striker/Free Spirit/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Wyper', 'INT'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Para'],
                                ['def-perc',        '3T, 90%'],
                                ['def-thres',       '3T, 90%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['ship-bind',       '2T'],
                                ['slot-block',      'All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Wyper', 'INT'],
                    hp: 3000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '10T'],
                                ['def-perc',        '5T, 90%'],
                                ['def',             '9T, 10000x'],
                                ['def-thres',       '3T, 90%, 1000'],
                                ['resil',           '10T'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '99+T, Row 3']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3798: {
            name: 'Eneru',
            type: 'INT',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Striker/Cerebral/Free Spirit'],
                                ['vs-red',          '10T, Striker/Cerebral/Free Spirit']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['nao',             '1T'],
                                ['def',             '3T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['nao',             '1T'],
                                ['resil',           '1T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['para',            '2T'],
                                ['ship-bind',       '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 4,
                    boss: ['Eneru', 'INT'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 1'],
                                ['def-perc',        '3T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['para',            '4T'],
                                ['atk-down',        '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blow-away',       '10T, Random 1']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 5,
                    boss: ['Eneru', 'INT'],
                    hp: 4000000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '9T'],
                                ['bind',            '6T, Row 1'],
                                ['ca-swap',         '5T, Row 3'],
                                ['nao',             '99+T'],
                                ['resil',           '7T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Orb Boost',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-block',      'All'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['blow-away',       '99+T, Captain']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Izo ==========
    3822: {
        2726: {
            name: 'Raizo',
            type: 'STR',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Raizo', 'STR'],
                    hp: 1500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '8T'],
                                ['chain-down',      '5T, 0.1x'],
                                ['chain-atk-down-min','5T, <1.5x chain, 90%'],
                                ['slot-change',     'Bad'],
                                ['hunger',          '3x'],
                                ['bar-p',           '5T, 3x'],
                                ['nao',             '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['heal',            '?%']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['cd-rew',          '4T']
                            ]
                        }
                    ]
                }
            ]
        },
        3385: {
            name: 'Ashura Doji',
            type: 'STR',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/QCK/PSY'],
                                ['vs-red',          '5T, DEX/QCK/PSY'],
                                ['sw-red',          '5T, DEX/QCK/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ashura Doji', 'STR'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['nao',             '1T'],
                                ['bind',            '7T, Row 1'],
                                ['slot-change',     'Bad'],
                                ['slot-neg',        '5T, Type/TND'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Damage',
                            action: [
                                ['hp-cut',          '75%']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '1,500,000'],
                                ['sp-bind',         '5T, Row 1'],
                                ['bind',            '5T, Row 2 3'],
                                ['slot-change',     'Bad']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['sp-bind',         '5T, Row 3']
                            ]
                        }
                    ]
                }
            ]
        },
        3502: {
            name: 'Kinemon',
            type: 'INT',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Free Spirit/Cerebral/Slasher'],
                                ['vs-red',          '5T, Free Spirit/Cerebral/Slasher'],
                                ['sw-red',          '5T, Free Spirit/Cerebral/Slasher']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kinemon', 'INT'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '7T, 90%'],
                                ['nao',             '99+T'],
                                ['sp-bind',         '7T'],
                                ['burn',            '5T, 10000'],
                                ['slot-block',      'BOMB/EMPTY/BLOCK'],
                                ['slot-lock',       '1T'],
                                ['resil',           '4T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '50%'],
                                ['sp-limit',        '2T, 1x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['def-perc',        '2T'],
                                ['def',             '3T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['atk',             '3T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['blow-away',       '3T, Random 2']
                            ]
                        }
                    ]
                }
            ]
        },
        3503: {
            name: 'Denjiro',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/DEX/PSY'],
                                ['vs-red',          '5T, QCK/DEX/PSY'],
                                ['sw-red',          '5T, QCK/DEX/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Denjiro', 'STR'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '5T, 90%'],
                                ['para',            '5T, Row 2 3'],
                                ['nao',             '99+T'],
                                ['blind',           '5T'],
                                ['bar-p',           '2T, 3x']
                            ]
                        },
                        {
                            type: 'Preemp (if has cost>40)',
                            action: [
                                ['cd-rew',          '2T, Row 1 [if has cost>40]'],
                                ['para',            '7T, Row 2 3 [if has cost>40]']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['stun',            'Row 3']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3619: {
            name: 'Oden',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/QCK/PSY'],
                                ['vs-red',          '5T, DEX/QCK/PSY'],
                                ['sw-red',          '5T, DEX/QCK/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Fodder', 'QCK'],
                    hp: 2500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '50%'],
                                ['atk-down',        '5T, 90%'],
                                ['resil',           '5T'],
                                ['def-perc',        '5T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['blow-away',       '3T, Random 2'],
                                ['desp',            '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Oden', 'QCK'],
                    hp: 3200000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '5T'],
                                ['def',             '5T, 3619x'],
                                ['cd-rew',          '1T'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['immu-all',        '99+T'],
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blow-away',       '99+T, Row 3'],
                                ['resil',           '2T']
                            ]
                        }
                    ]
                }
            ]
        },
        3822: {
            name: 'Izo',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Free Spirit/Powerhouse/Striker'],
                                ['vs-red',          '5T, Free Spirit/Powerhouse/Striker'],
                                ['sw-red',          '5T, Free Spirit/Powerhouse/Striker']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Izo', 'QCK'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['dmg-eot-e',       '4T, 20%'],
                                ['bind',            '5T, Row 1'],
                                ['para',            '3T, Row 2 3'],
                                ['desp',            '4T'],
                                ['slot-block',      'All'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Izo', 'QCK'],
                    hp: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['resil',           '5T'],
                                ['def-perc',        '5T, 90%'],
                                ['bar-hp',          '3T, 10M'],
                                ['sp-bind',         '7T'],
                                ['chain-atk-down-min','5T, <2.5x chain, 90%'],
                                ['inc-dmg',         '5T, 10x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Chain Lock, Add Chain',
                            action: [
                                ['clear-buff',      'Buff & Values'],
                                ['blow-away',       '4T, Random 2']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '50000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Fujitora ==========
    3842: {
        1871: {
            name: 'Bellamy',
            type: 'STR',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Free Spirit/Fighter/Shooter'],
                                ['vs-red',          '5T, Free Spirit/Fighter/Shooter'],
                                ['sw-red',          '5T, Free Spirit/Fighter/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Bellamy', 'STR'],
                    hp: 1600000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['cd-rew',          '1T'],
                                ['slot-neg',        '5T, Type'],
                                ['hp-cut',          '99%'],
                                ['bar-p',           '2T, 2x']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change',
                            action: [
                                ['slot-change',     'Bad']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '5000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-block',      'All']
                            ]
                        }
                    ]
                }
            ]
        },
        1908: {
            name: 'Trebol',
            type: 'INT',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/DEX/PSY'],
                                ['vs-red',          '5T, QCK/DEX/PSY'],
                                ['sw-red',          '5T, QCK/DEX/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Trebol', 'INT'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['nao',             '99+T'],
                                ['bind',            '8T, Row 1'],
                                ['slot-change',     'Bad, Row 2'],
                                ['slot-block',      'Row 3'],
                                ['burn',            '6T, 15000'],
                                ['def',             '5T, 10000x'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '50%'],
                                ['chain-down',      '5T, 0.1x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['inc-dmg',         '8T'],
                                ['def-perc',        '3T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        2418: {
            name: 'Barto & Cavendish',
            type: 'QCK',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Barto & Cavendish', 'QCK'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Empty'],
                                ['hp-cut',          '10%'],
                                ['cd-rew',          '2T, Row 2 3'],
                                ['resil',           '8T'],
                                ['bar-hit',         '1T, 25x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '?%'],
                                ['inc-dmg',         '6T'],
                                ['def',             '6T']
                            ]
                        }
                    ]
                }
            ]
        },
        3642: {
            name: 'Burgess',
            type: 'DEX',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Striker/Cerebral/Shooter'],
                                ['vs-red',          '5T, Striker/Cerebral/Shooter'],
                                ['sw-red',          '5T, Striker/Cerebral/Shooter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Burgess', 'DEX'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '4T'],
                                ['nao',             '99+T'],
                                ['slot-bind',       '10T, Row 1'],
                                ['bar-slot',        '1T, 2x, STR'],
                                ['desp',            '13T, Captain'],
                                ['chain-down',      '5T, 0.1x'],
                                ['chain-atk-down-min','5T, <1.5x chain, 90%']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '5T, Row 2 3']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['hp-cut',          '30%'],
                                ['heal-bind',       '5T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['atk',             '5T'],
                                ['atk-down',        '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3550: {
            name: 'Doffy',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/QCK/PSY'],
                                ['vs-red',          '5T, DEX/QCK/PSY'],
                                ['sw-red',          '5T, DEX/QCK/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Doffy', 'STR'],
                    hp: 3000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '3T'],
                                ['atk-down',        '5T, 90%'],
                                ['nao',             '99+T'],
                                ['chain-atk-down-min','5T, <2.75x chain, 90%'],
                                ['desp',            '8T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-bind',       '10T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Doffy', 'STR'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Col L'],
                                ['cd-rew',          '2T, Col R'],
                                ['def-null',        '1T'],
                                ['def-perc',        '7T, 80%'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Affinity',
                            action: [
                                ['cd-rew',          '2T'],
                                ['stun',            'Row 3']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def',             '5T'],
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '99+T, Random 1']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3842: {
            name: 'Fujitora',
            type: 'STR',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Cerebral/Shooter/Free Spirit'],
                                ['vs-red',          '5T, Cerebral/Shooter/Free Spirit'],
                                ['sw-red',          '5T, Cerebral/Shooter/Free Spirit']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Fujitora', 'STR'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '3T, Row 2 3'],
                                ['fear',            '3T, Row 2 3'],
                                ['nao',             '99+T'],
                                ['slot-block',      'All'],
                                ['bar-p',           '1T, 4x'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['ship-bind',       '10T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['atk-down',        '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Fujitora', 'STR'],
                    hp: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '5T, Row 1'],
                                ['sp-bind',         '5T, Row 2 3'],
                                ['chain-down',      '5T, 0.1x'],
                                ['chain-atk-down-min','1T, <4x chain, 90%'],
                                ['bar-slot',        '1T, 3x, DEX'],
                                ['def',             '5T, 10000x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-perc',        '6T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blow-away',       '5T, Random 2']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-change',     'Para']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Bege ==========
    3864: {
        654: {
            name: 'Duval',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Duval', 'INT'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '4T'],
                                ['burn',            '4T, 20000'],
                                ['def',             '5T, 10000x'],
                                ['def-perc',        '5T, 90%']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '1.5M'],
                                ['dmg-normal',      '30000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-change',     'Bad']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-change',     'Empty'],
                                ['def-thres',       '3T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['resil',           '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        924: {
            name: ['Ki', 'd'],
            type: ['STR', 'INT'],
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/PSY/INT'],
                                ['vs-red',          '5T, QCK/PSY/INT'],
                                ['sw-red',          '5T, QCK/PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kid', 'STR'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'STR/INT'],
                                ['sp-bind',         '7T'],
                                ['slot-block',      'All'],
                                ['chain-atk-down-min','3T, <3x chain, 90%'],
                                ['chain-atk-down-max','3T, >4x chain, 90%'],
                                ['resil',           '5T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hp-cut',          '?%'],
                                ['atk',             '?T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['heal',            '?'],
                                ['inc-dmg',         '?T']
                            ]
                        }
                    ]
                }
            ]
        },
        967: {
            name: 'Law',
            type: 'STR',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Cerebral/Slasher/Powerhouse'],
                                ['vs-red',          '5T, Cerebral/Slasher/Powerhouse'],
                                ['sw-red',          '5T, Cerebral/Slasher/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Law', 'STR'],
                    hp: 1600000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-lock',      '5T, 1.1x'],
                                ['slot-block',      'All'],
                                ['blind',           '5T'],
                                ['ca-swap',         '5T, Bottom Right'],
                                ['def-perc',        '5T, 90%']
                            ]
                        },
                        {
                            type: 'Interrupt - Affinity',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['cd-rew',          '2T, Row 2 3']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '5T, Row 3'],
                                ['p-hard',          '3T'],
                                ['def',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['cd-rew',          '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        2193: {
            name: 'Kuma',
            type: 'PSY',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Striker/Slasher'],
                                ['vs-red',          '5T, Driven/Striker/Slasher'],
                                ['sw-red',          '5T, Driven/Striker/Slasher']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kuma', 'PSY'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['cd-rew',          '1T'],
                                ['nao',             '99+T'],
                                ['chain-down',      '5T, 0.01x'],
                                ['atk-down',        '5T, 99%'],
                                ['def-perc',        '6T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk',             '5T'],
                                ['dmg-eot-e',       '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['slot-block',      'All']
                            ]
                        }
                    ]
                }
            ]
        },
        1239: {
            name: 'Kizaru',
            type: 'INT',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Free Spirit/Powerhouse'],
                                ['vs-red',          '5T, Fighter/Free Spirit/Powerhouse'],
                                ['sw-red',          '5T, Fighter/Free Spirit/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Sentomaru', 'INT'],
                    hp: 3000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '3T'],
                                ['desp',            '6T'],
                                ['slot-change',     'Bad'],
                                ['slot-neg',        '5T, Type'],
                                ['nao',             '99+T'],
                                ['bar-hp',          '2T, 10M']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-block',      'All'],
                                ['atk',             '3T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kizaru', 'INT'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hunger',          '3x'],
                                ['bind',            '9T, Row 1'],
                                ['cd-rew',          '1T'],
                                ['atk-down',        '5T, 90%'],
                                ['para',            '2T'],
                                ['slot-block',      'All'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '100K']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['para',            '3T'],
                                ['def',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '5T, Captain'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3864: {
            name: 'Bege',
            type: 'INT',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/PSY/INT'],
                                ['vs-red',          '5T, QCK/PSY/INT'],
                                ['sw-red',          '5T, QCK/PSY/INT'],
                                ['slot-change',     'INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Bege', 'INT'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['dmg-normal',      '30000'],
                                ['fear',            '3T, Row 2 3'],
                                ['bind',            '9T, Row 1'],
                                ['nao',             '99+T'],
                                ['chain-atk-down-min','5T, <2.5x chain, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '30000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hunger',          '2x'],
                                ['slot-block',      'All'],
                                ['chain-atk-down-min','?T, < ?x chain']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['desp',            '8T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 4,
                    boss: ['Bege', 'INT'],
                    hp: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '4T, Row 2 3'],
                                ['slot-block',      'All'],
                                ['chain-down',      '5T, 0.1x'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['def',             '5T, 100Kx'],
                                ['bar-hit',         '2T, 20x']
                            ]
                        },
                        {
                            type: 'Interrupt - Chain Lock, Chain Boundary',
                            action: [
                                ['bind',            '6T, Row 3'],
                                ['def-null',        '1T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['blind',           '5T'],
                                ['atk',             '5T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Momonosuke ==========
    3894: {
        3595: {
            name: 'Marco',
            type: 'PSY',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Powerhouse/Cerebral'],
                                ['vs-red',          '5T, Driven/Powerhouse/Cerebral'],
                                ['sw-red',          '5T, Driven/Powerhouse/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Inuarashi', 'PSY'],
                    hp: 1500000, // Fixed
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '5T, 90%'],
                                ['desp',            '8T'],
                                ['def-perc',        '5T, 90%'],
                                ['bar-hit',         '1T, 25x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '2T'],
                                ['slot-change',     'Bad']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['def',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['atk',             '?T'],
                                ['def-thres',       '1T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Marco', 'PSY'],
                    hp: 1800000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['sp-bind',         '5T'],
                                ['para',            '6T, Row 1'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['resil',           '3T'],
                                ['def',             '1T, 10000x']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '3T, Captain']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['def-null',        '1T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['atk',             '?T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3870: {
            name: 'Jack',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/DEX/STR'],
                                ['vs-red',          '5T, QCK/DEX/STR'],
                                ['sw-red',          '5T, QCK/DEX/STR']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Jack', 'STR'],
                    hp: 1600000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 2 3'],
                                ['atk-down',        '6T, 90%'],
                                ['nao',             '99+T'],
                                ['chain-down',      '6T, 0.1x'],
                                ['burn',            '6T, 10000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Bind Reduction',
                            action: [
                                ['bind',            '5T, Row 2 3']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['bind',            '5T, Row 2 3'],
                                ['heal',            '1.6M']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['bar-gd',          '3T, 1x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-bind',       '3T'],
                                ['blind',           '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3871: {
            name: 'Ulti',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, PSY/QCK/DEX'],
                                ['vs-red',          '5T, PSY/QCK/DEX'],
                                ['sw-red',          '5T, PSY/QCK/DEX']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ulti', 'INT'],
                    hp: 1600000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['dmg-limit',       '2T, 50%'],
                                ['slot-change',     'Bad'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['ship-bind',       '2T'],
                                ['def',             '8T, 10000x'],
                                ['resil',           '5T'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['dmg-normal',      '80000']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['def-thres',       '5T'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['bar-hp',          '2T, 10M'],
                                ['blind',           '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3893: {
            name: 'Chopper',
            type: 'PSY',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Chopper', 'PSY'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '8T, Row 2 3'],
                                ['slot-block',      'Col L'],
                                ['slot-change',     'Para, Col R'],
                                ['chain-down',      '5T, 0.1x'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1, Every Turn After',
                            action: [
                                ['para',            '1T'],
                                ['sp-bind',         '1T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        }
                    ]
                }
            ]
        },
        3891: {
            name: 'Queen',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Fighter/Free Spirit/Cerebral'],
                                ['vs-red',          '5T, Fighter/Free Spirit/Cerebral'],
                                ['sw-red',          '8T, Fighter/Free Spirit/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Queen', 'QCK'],
                    hp: 3000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['poison',          '10T, 3600'],
                                ['slot-change',     'Poison, Row 2'],
                                ['slot-lock',       '3T, Row 2'],
                                ['bind',            '9T, Row 1 3'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['cd-rew',          '1T'],
                                ['nao',             '99+T'],
                                ['immu-poison',     '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '5T'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['def-perc',        '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Queen', 'QCK'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['chain-atk-down-min','2T, < 3.75x chain, 90%'],
                                ['desp',            '8T'],
                                ['def',             '7T, 10000x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '30%'],
                                ['dmg-normal',      '150K']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-change',     'Bad'],
                                ['atk',             '?T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['hunger',          '3x'],
                                ['slot-block',      'All'],
                                ['slot-lock-tap',   '1x Great']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['def-thres',       '3T'],
                                ['resil',           '3T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['heal-bind',       '5T'],
                                ['slot-change',     'Poison']
                            ]
                        }
                    ]
                }
            ]
        },
        3894: {
            name: 'Momonosuke',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/INT'],
                                ['vs-red',          '5T, STR/DEX/INT'],
                                ['sw-red',          '8T, STR/DEX/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Kaido', 'QCK'],
                    hp_: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-null',        '1T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['para',            '9T, Captain'],
                                ['slot-bind',       '9T, Captain']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-perc',        '3T'],
                                ['slot-bind',       '?T'],
                                ['heal-bind',       '?T'],
                                ['bar-hit',         '2T, 2x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Momonosuke', 'PSY'],
                    hp_: 2000000, // Fixed
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-thres',       '6T, 99%, 1000'],
                                ['def',             '6T, 10000x'],
                                ['resil',           '2T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-block',      'All'],
                                ['hunger',          '2x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['sp-limit',        '2T, 1x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 4,
                    boss: ['Kaido', 'QCK'],
                    hp_: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['cd-rew',          '2T, Row 2 3'],
                                ['bar-slot',        '1T, 4x, RCV'],
                                ['def-perc',        '7T, 80%'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['bind',            '8T, Col L'],
                                ['heal',            '4M'],
                                ['tap-limit',       '7T, 3x']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['heal-bind',       '5T'],
                                ['ship-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['sp-limit',        '3T, 1x']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['stun',            '?'],
                                ['desp',            '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['atk',             '5T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Akainu ==========
    3915: {
        1991: {
            name: 'Garp',
            type: 'PSY',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Slasher/Powerhouse/Cerebral'],
                                ['vs-red',          '5T, Slasher/Powerhouse/Cerebral'],
                                ['sw-red',          '5T, Slasher/Powerhouse/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Garp', 'PSY'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '10T'],
                                ['chain-atk-down-min','3T, < 3.25x chain, 90%'],
                                ['chain-atk-down-max','3T, > 4.75x chain, 90%'],
                                ['slot-block',      'All'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Orb Boost',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['stun',            'Row 3']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['sp-bind',         '6T'],
                                ['heal-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['def-perc',        '8T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        1993: {
            name: 'Coby',
            type: 'STR',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Coby', 'STR'],
                    hp_: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '1T, Row 2 3'],
                                ['desp',            '8T'],
                                ['bind',            '8T, Row 2 3'],
                                ['chain-atk-down-min','3T, < 2.25x chain, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '50000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-change',     'Bad'],
                                ['heal-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['bar-gd',          '3T, 3x']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['atk-down',        '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3724: {
            name: 'Kizaru',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Slasher/Free Spirit/Powerhouse'],
                                ['vs-red',          '5T, Slasher/Free Spirit/Powerhouse'],
                                ['sw-red',          '5T, Slasher/Free Spirit/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kizaru', 'STR'],
                    hp: 1600000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'RCV'],
                                ['desp',            '12T'],
                                ['bar-slot',        '2T, 1x, WANO'],
                                ['def',             '3T, 10000x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '5T'],
                                ['cd-rew',          '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['para',            '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3726: {
            name: 'Aokiji',
            type: 'PSY',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, INT/PSY/DEX'],
                                ['vs-red',          '5T, INT/PSY/DEX'],
                                ['sw-red',          '5T, INT/PSY/DEX']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Aokiji', 'PSY'],
                    hp: 1600000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '7T'],
                                ['slot-block',      'All'],
                                ['slot-neg',        '3T, Type'],
                                ['cd-rew',          '1T'],
                                ['bar-hit',         '1T, 10x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Reduce CD',
                            action: [
                                ['bind',            '8T, Row 1'],
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['sp-limit',        '1T, 1x'],
                                ['desp',            '8T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['def-perc',        '2T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['slot-bind',       '3T'],
                                ['atk',             '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3723: {
            name: 'Sengoku',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '8T, STR/DEX/PSY'],
                                ['vs-red',          '20T, STR/DEX/PSY'],
                                ['sw-red',          '8T, STR/DEX/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Sengoku', 'QCK'],
                    hp_: 3000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['sp-bind',         '5T'],
                                ['nao',             '99+T'],
                                ['def-perc',        '6T, 80%']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['heal-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['hp-cut',          '50%'],
                                ['atk-down',        '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['slot-bind',       '3T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sengoku', 'QCK'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Para'],
                                ['desp',            '10T'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['def',             '8T, 10000x']
                            ]
                        },
                        {
                            type: 'Interrupt - Affinity',
                            action: [
                                ['sp-limit',        '2T, 1x']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '10000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['heal-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['hp-cut',          '50%'],
                                ['atk-down',        '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['slot-bind',       '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        3915: {
            name: 'Akainu',
            type: 'INT',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Powerhouse/Slasher/Driven'],
                                ['vs-red',          '20T, Powerhouse/Slasher/Driven'],
                                ['sw-red',          '8T, Powerhouse/Slasher/Driven']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Sentomaru', 'INT'],
                    hp: 1500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '12T, Friend Cap'],
                                ['cd-rew',          '1T'],
                                ['blow-away',       '3T, Captain'],
                                ['nao',             '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['blind',           '5T'],
                                ['blow-away',       '2T, Row 3']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '3T'],
                                ['dmg-eot-e',       '3T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Akainu', 'INT'],
                    hp: 4000000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['atk-down',        '7T, 90%'],
                                ['stun',            'Row 2'],
                                ['chain-atk-down-min','3T, < 3x chain, 90%'],
                                ['def-perc',        '8T, 80%'],
                                ['def',             '5T, 10000x']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['desp',            '8T'],
                                ['dmg-normal',      '?']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-bind',       '3T'],
                                ['atk',             '?T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['dmg-normal',      '?'],
                                ['resil',           '3T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Flampe ==========
    3936: {
        2115: {
            name: 'Brulee',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Free Spirit/Fighter/Cerebral'],
                                ['vs-red',          '5T, Free Spirit/Fighter/Cerebral'],
                                ['sw-red',          '5T, Free Spirit/Fighter/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Brulee', 'INT'],
                    hp: 1600000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Bad'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['sp-bind',         '5T, Row 2 3'],
                                ['chain-down',      '5T, 0.1x'],
                                ['chain-atk-down-min','5T, < 2.25x chain, 90%'],
                                ['def-null',        '1T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '100K']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['heal-bind',       '5T'],
                                ['slot-change',     'Bad']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['resil',           '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['def',             '4T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        2346: {
            name: 'Galette',
            type: 'QCK',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Cerebral/Powerhouse/Fighter'],
                                ['vs-red',          '5T, Cerebral/Powerhouse/Fighter'],
                                ['sw-red',          '5T, Cerebral/Powerhouse/Fighter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Galette', 'QCK'],
                    hp: 1600000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '9T, Row 2'],
                                ['atk-down',        '6T, 90%'],
                                ['cd-rew',          '1T'],
                                ['def-thres',       '5T, 90%, 1000'],
                                ['immu-poison',     '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '30%'],
                                ['para',            '3T'],
                                ['def',             '1T, 10000x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['para',            '1T'],
                                ['bar-slot',        '1T, 1x, INT']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['atk',             '3T'],
                                ['ship-bind',       '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        3637: {
            name: 'Smoothie',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/STR/INT'],
                                ['vs-red',          '5T, QCK/STR/INT'],
                                ['sw-red',          '5T, QCK/STR/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Smoothie', 'STR'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '3T'],
                                ['bind',            '8T, Row 2 3'],
                                ['slot-block',      'All'],
                                ['desp',            '9T'],
                                ['slot-bind',       '5T, Row 1']
                            ]
                        },
                        {
                            type: 'Interrupt - Chain Lock, Chain Boundary',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['cd-rew',          '2T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def',             '5T'],
                                ['dmg-normal',      '50000']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['atk',             '5T'],
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['para',            '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3782: {
            name: 'Pudding',
            type: 'QCK',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Pudding', 'QCK'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '12T'],
                                ['burn',            '6T, 20000'],
                                ['sp-limit',        '1T, 3x'],
                                ['def-perc',        '3T, 90%'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['tap-limit',       '5T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        }
                    ]
                }
            ]
        },
        2536: {
            name: 'Big Mom',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/DEX/INT'],
                                ['vs-red',          '5T, QCK/DEX/INT'],
                                ['sw-red',          '8T, QCK/DEX/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Big Mom', 'QCK'],
                    hp: 3000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '1T'],
                                ['burn',            '6T, 10000'],
                                ['def-perc',        '3T, 90%'],
                                ['def-thres',       '3T, 90%, 1000'],
                                ['bar-p',           '2T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['blow-away',       '?T, Random 2'],
                                ['heal-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '3T'],
                                ['hunger',          '3x']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['atk',             '3T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Big Mom', 'QCK'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['bind',            '7T, Row 2 3'],
                                ['def',             '7T, 10000x'],
                                ['nao',             '99+T'],
                                ['bar-slot',        '1T, 3x, RCV'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Dmg Reduction',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '10M'],
                                ['dmg-normal',      '80000'],
                                ['hunger',          '2x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['dmg-eot-e',       '3T'],
                                ['hunger',          '3x']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['heal-bind',       '5T'],
                                ['fear',            '3T, Row 2 3'],
                                ['resil',           '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        3936: {
            name: 'Flampe',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Cerebral/Free Spirit/Fighter'],
                                ['vs-red',          '5T, Cerebral/Free Spirit/Fighter'],
                                ['sw-red',          '8T, Cerebral/Free Spirit/Fighter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Flampe', 'QCK'],
                    hp_: 1500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['hunger',          '2x'],
                                ['para',            '7T'],
                                ['heal-bind',       '5T'],
                                ['cd-rew',          '2T'],
                                ['fear',            '1T, Row 2 3'],
                                ['pain',            '3T, 5%'],
                                ['def',             '3T, 10000x']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['heal-down',       '3T'],
                                ['atk',             '3T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Flampe', 'QCK'],
                    hp_: 4000000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '9T, Col L'],
                                ['sp-bind',         '6T'],
                                ['def-perc',        '6T, 80%'],
                                ['def-thres',       '4T, 90%, 1000'],
                                ['nao',             '99+T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Preemp (if HP<99%)',
                            action: [
                                ['slot-change',     'S.BLOCK [if HP<99%]'],
                                ['def-null',        '1T [if HP<99%]']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['blind',           '5T'],
                                ['def',             '3T'],
                                ['bar-p',           '3T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blow-away',       '5T, Row 3'],
                                ['desp',            '5T'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['bleed',           '3T'],
                                ['resil',           '3T']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Yamato ==========
    3965: {
        3797: {
            name: 'King',
            type: 'DEX',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Shooter/Slasher/Fighter'],
                                ['vs-red',          '5T, Shooter/Slasher/Fighter'],
                                ['sw-red',          '5T, Shooter/Slasher/Fighter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['King', 'DEX'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '6T, 90%'],
                                ['sp-bind',         '5T'],
                                ['para',            '5T'],
                                ['nao',             '99+T'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['def-perc',        '6T, 80%'],
                                ['def',             '6T, 100Kx'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['dmg-normal',      '10000'],
                                ['bar-gd',          '3T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['bind',            '5T, Row 2 3']
                            ]
                        }
                    ]
                }
            ]
        },
        3962: {
            name: 'Ushimaru',
            type: 'PSY',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ushimaru', 'PSY'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '8T, Row 2 3'],
                                ['atk-down',        '5T, 90%'],
                                ['hunger',          '2x'],
                                ['slot-bind',       '5T, Row 1']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '70000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk',             '?T'],
                                ['bar-p',           '3T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['inc-dmg',         '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3963: {
            name: 'Omusubi',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, PSY/INT/STR'],
                                ['vs-red',          '5T, PSY/INT/STR'],
                                ['sw-red',          '5T, PSY/INT/STR']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Omusubi', 'INT'],
                    hp: 1400000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '8T'],
                                ['sp-bind',         '3T'],
                                ['cd-rew',          '2T, Captain'],
                                ['nao',             '99+T'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['def',             '6T, 10000x']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['blind',           '5T'],
                                ['resil',           '4T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['stun',            'Row 3']
                            ]
                        }
                    ]
                }
            ]
        },
        3964: {
            name: 'Tempura',
            type: 'QCK',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Cerebral/Free Spirit/Powerhouse'],
                                ['vs-red',          '5T, Cerebral/Free Spirit/Powerhouse'],
                                ['sw-red',          '5T, Cerebral/Free Spirit/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Tempura', 'QCK'],
                    hp: 1600000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '8T, Row 1 3'],
                                ['desp',            '9T'],
                                ['slot-block',      'All'],
                                ['para',            '8T'],
                                ['bar-slot',        '1T, 1x, TND'],
                                ['nao',             '99+T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change',
                            action: [
                                ['slot-change',     'Type'],
                                ['slot-neg',        '5T, Type']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk-down',        '5T'],
                                ['bar-slot',        '1T, 1x, RAINBOW']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blow-away',       '?T, Captain'],
                                ['def',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['dmg-eot-e',       '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3389: {
            name: 'Kaido',
            type: 'INT',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/QCK/PSY'],
                                ['vs-red',          '5T, STR/QCK/PSY'],
                                ['sw-red',          '8T, STR/QCK/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['King', 'INT'],
                    hp: 2500000, // Fixed
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '5T, Row 2 3'],
                                ['resil',           '7T'],
                                ['target-lock',     '5T']
                            ]
                        },
                        {
                            type: 'Interrupt - EoT Damage',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['cd-rew',          '2T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kaido', 'INT'],
                    hp_: 3000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['atk-down',        '7T, 90%'],
                                ['bind',            '12T, Row 1 3'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '50000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '2T'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['stun',            'Row 3']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 4,
                    boss: ['Kaido', 'INT'],
                    hp: 4000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '6T'],
                                ['stun',            'Row 1 3'],
                                ['nao',             '99+T'],
                                ['resil',           '5T'],
                                ['def',             '6T, 10000x'],
                                ['def-perc',        '7T, 80%'],
                                ['hunger',          '5x']
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '5T, Captain'],
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-change',     'RCV'],
                                ['anti-rcv',        '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['p-hard',          '5T'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['inc-dmg',         '5T'],
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        }
                    ]
                }
            ]
        },
        3430: {
            name: 'Yamato',
            type: 'INT',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Slasher/Free Spirit/Fighter'],
                                ['vs-red',          '5T, Slasher/Free Spirit/Fighter'],
                                ['sw-red',          '8T, Slasher/Free Spirit/Fighter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Yamato', 'INT'],
                    hp_: 1500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'Para'],
                                ['stun',            'Col L'],
                                ['bind',            '9T, Row 1 3'],
                                ['bar-slot',        '2T, 2x, WANO'],
                                ['counter',         '?%']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '50x atk']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '10T'],
                                ['def-perc',        '7T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['heal-down',       '3T'],
                                ['atk',             '3T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Yamato', 'INT'],
                    hp_: 4000000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-atk-down-max','3T, > 4x chain, 90%'],
                                ['chain-atk-down-min','3T, < 3.25x chain, 90%'],
                                ['slot-block',      'All'],
                                ['bind',            '9T, Row 1'],
                                ['cd-rew',          '5T, Row 1 3'],
                                ['bar-hit',         '3T, 25x']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change',
                            action: [
                                ['slot-change',     'S.BLOCK']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hunger',          '10x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['dmg-normal',      '30000'],
                                ['atk',             '3T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['stun',            'Row 3']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Lead Performers ==========
    3981: {
        3772: {
            name: 'Page One',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Page One', 'INT'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '6T'],
                                ['hunger',          '2x'],
                                ['sp-bind',         '5T'],
                                ['para',            '5T'],
                                ['resil',           '6T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-block',      'All'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['def-thres',       '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        3773: {
            name: 'Sasaki',
            type: 'INT',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Powerhouse/Fighter/Free Spirit'],
                                ['vs-red',          '5T, Powerhouse/Fighter/Free Spirit'],
                                ['sw-red',          '5T, Powerhouse/Fighter/Free Spirit']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sasaki', 'INT'],
                    hp: 1400000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '2T'],
                                ['para',            '7T'],
                                ['sp-bind',         '7T, Row 1'],
                                ['chain-atk-down-max','2T, > 4x chain, 90%'],
                                ['chain-atk-down-min','2T, < 2.5x chain, 90%'],
                                ['nao',             '99+T'],
                                ['def',             '6T, 10000x'],
                                ['bar-slot',        '2T, 1x, TND']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['bind',            '5T, Row 2 3'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['stun',            'Row 1']
                            ]
                        }
                    ]
                }
            ]
        },
        3876: {
            name: 'Who\'s-Who',
            type: 'QCK',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Powerhouse/Cerebral'],
                                ['vs-red',          '5T, Driven/Powerhouse/Cerebral'],
                                ['sw-red',          '5T, Driven/Powerhouse/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Who\'s-Who', 'QCK'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['inc-dmg',         '3T'],
                                ['slot-change',     'QCK'],
                                ['sp-limit',        '2T, 2x'],
                                ['burn',            '6T, 20000'],
                                ['nao',             '99+T'],
                                ['bar-slot',        '1T, 1x, WANO'],
                                ['resil',           '5T'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change',
                            action: [
                                ['slot-bind',       '5T'],
                                ['def-perc',        '5T, 90%']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-para',       'Col R'],
                                ['slot-change',     'QCK, Col L'],
                                ['bind',            '5T, Col L']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['blow-away',       '5T, Captain']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['heal-bind',       '5T'],
                                ['ship-bind',       '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3924: {
            name: 'Black Maria & Ulti',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, PSY/QCK/STR'],
                                ['vs-red',          '5T, PSY/QCK/STR'],
                                ['sw-red',          '5T, PSY/QCK/STR']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Black Maria & Ulti', 'INT'],
                    hp: 1600000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '10T'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['slot-block',      'All'],
                                ['atk-down',        '5T, 90%'],
                                ['bind',            '8T, Col L'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-thres',       '4T'],
                                ['tap-limit',       '4T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['p-hard',          '3T'],
                                ['bar-p',           '3T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['dmg-normal',      '50000']
                            ]
                        }
                    ]
                }
            ]
        },
        3981: {
            name: 'Lead Performers',
            type: 'PSY',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, PSY/INT/DEX'],
                                ['vs-red',          '5T, PSY/INT/DEX'],
                                ['sw-red',          '5T, PSY/INT/DEX']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Lead Performers', 'PSY'],
                    hp_: 2500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['blind',           '3T'],
                                ['burn',            '7T, 20000'],
                                ['resil',           '7T'],
                                ['bar-p',           '3T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['inc-dmg',         '5T'],
                                ['dmg-eot-e',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['para',            '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Lead Performers', 'PSY'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['sp-bind',         '7T, Row 1'],
                                ['para',            '6T'],
                                ['nao',             '99+T'],
                                ['chain-atk-down-min','3T, < 3.5x chain, 90%'],
                                ['def',             '7T, 10000x'],
                                ['def-perc',        '6T, 90%'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Orb Boost',
                            action: [
                                ['stun',            'Row 3'],
                                ['slot-change',     'S.BLOCK, Row 1']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['blind',           '3T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['hunger',          '3x'],
                                ['atk',             '4T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['inc-dmg',         '5T'],
                                ['def-thres',       '4T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        }
                    ]
                }
            ]
        },
        3973: {
            name: 'O-Lin',
            type: 'INT',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Slasher/Free Spirit/Powerhouse'],
                                ['vs-red',          '5T, Slasher/Free Spirit/Powerhouse'],
                                ['sw-red',          '5T, Slasher/Free Spirit/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['O-Lin', 'INT'],
                    hp: 2500000, // Fixed
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bar-hit',         '2T, 25x'],
                                ['slot-block',      'All'],
                                ['nao',             '99+T'],
                                ['def',             '5T, 10000x'],
                                ['resil',           '3T'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['target-lock',     '1T'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['burn',            '11T, 20000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['inc-dmg',         '5T'],
                                ['atk',             '5T'],
                                ['ship-bind',       '3T'],
                                ['blow-away',       '3T, Row 3']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '2T'],
                                ['slot-bind',       '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['O-Lin', 'INT'],
                    hp_: 4000000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '2T'],
                                ['bind',            '9T, Row 1 2'],
                                ['slot-block',      'Random'],
                                ['slot-para',       'Random'],
                                ['nao',             '99+T'],
                                ['def',             '6T, 10000x'],
                                ['bar-slot',        '2T, 1x, TND'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Orb Boost',
                            action: [
                                ['burn',            '5T, 20000'],
                                ['resil',           '3T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['hunger',          '3x'],
                                ['dmg-normal',      '50000']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '2T'],
                                ['atk',             '?T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['def',             '5T'],
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: '<50%',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Baccarat & Dice & Mr. Tanaka ==========
    4006: {
        738: {
            name: 'Spandam',
            type: 'DEX',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Spandam', 'DEX'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '8T'],
                                ['sp-limit',        '1T, 2x'],
                                ['def',             '4T, 1Mx'],
                                ['resil',           '4T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '3T, Row 1'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['bind',            '5T, Row 3']
                            ]
                        }
                    ]
                }
            ]
        },
        1165: {
            name: 'Carina',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/DEX/STR'],
                                ['vs-red',          '5T, QCK/DEX/STR'],
                                ['sw-red',          '5T, QCK/DEX/STR']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Carina', 'STR'],
                    hp: 1400000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-perc',        '5T, 90%'],
                                ['slot-change',     'Bad'],
                                ['def',             '6T, 1Mx'],
                                ['nao',             '99+T'],
                                ['chain-atk-down-min','2T, < 3.5x chain, 90%'],
                                ['bar-slot',        '1T, 1x, RAINBOW'],
                                ['intim',           '3T, -2T, Lock Chain']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['inc-dmg',         '3T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blind',           '3T'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['ship-bind',       '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        3422: {
            name: 'Lucci',
            type: 'INT',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    boss: ['Baccarat', 'INT'],
                    hp_: 0,
                    atk_: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, PSY/INT/QCK'],
                                ['vs-red',          '5T, PSY/INT/QCK'],
                                ['sw-red',          '5T, PSY/INT/QCK'],
                                ['cd-rew',          '2T, Friend Cap'],
                                ['blow-away',       '3T, Row 3'],
                                ['bar-slot',        '1T, 3x, TND']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['desp',            '?T'],
                                ['ship-bind',       '3T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Lucci (2M HP)', 'INT'],
                    hp: 2000000, // Fixed
                    atk_: 0,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '8T'],
                                ['sp-bind',         '6T'],
                                ['atk-down',        '6T, 90%']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['inc-dmg',         '3T'],
                                ['def',             '3T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['tap-limit',       '2T, 4x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Lucci', 'INT'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['ca-swap',         '5T, Random Sailor'],
                                ['chain-atk-down-min','3T, < 2.5x chain, 90%'],
                                ['def-perc',        '5T, 90%'],
                                ['def-thres',       '5T, 99%, 1000'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '?T'],
                                ['def',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['para',            '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        4004: {
            name: 'Raise Max',
            type: 'DEX',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/INT/PSY'],
                                ['vs-red',          '5T, STR/INT/PSY'],
                                ['sw-red',          '5T, STR/INT/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Raise Max', 'DEX'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-perc',        '6T, 90%'],
                                ['slot-block',      'All'],
                                ['atk-down',        '3T, 90%'],
                                ['cd-rew',          '1T, Row 2 3'],
                                ['def',             '4T, 1Mx'],
                                ['def-thres',       '4T, 99%, 1000'],
                                ['nao',             '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['inc-dmg',         '4T'],
                                ['heal',            '1000'],
                                ['def-null',        '1T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-change',     '?'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 4',
                            action: [
                                ['para',            '3T, Row 2 3']
                            ]
                        }
                    ]
                }
            ]
        },
        4000: {
            name: 'Tesoro',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Free Spirit/Slasher/Fighter'],
                                ['vs-red',          '5T, Free Spirit/Slasher/Fighter'],
                                ['sw-red',          '5T, Free Spirit/Slasher/Fighter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Tesoro (3.5M HP)', 'STR'],
                    hp: 3500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '91%'],
                                ['atk-down',        '5T, 90%'],
                                ['cd-rew',          '2T, Row 1'],
                                ['cd-rew',          '4T, Row 2'],
                                ['nao',             '99+T'],
                                ['def-thres',       '5T, 99%, 1000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk',             '5T'],
                                ['def',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['para',            '3T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Tesoro', 'STR'],
                    hp: 3000000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['dmg-normal',      '30000'],
                                ['slot-block',      'All'],
                                ['sp-bind',         '7T'],
                                ['para',            '6T'],
                                ['resil',           '6T'],
                                ['bar-slot',        '1T, 1x, BLOCK'],
                                ['immu-except',     '99+T, Delay']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def',             '3T'],
                                ['atk',             '3T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blind',           '3T'],
                                ['bar-p',           '3T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        4006: {
            name: 'Baccarat & Dice & Mr. Tanaka',
            type: 'STR',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Free Spirit/Slasher/Fighter'],
                                ['vs-red',          '5T, Free Spirit/Slasher/Fighter'],
                                ['sw-red',          '5T, Free Spirit/Slasher/Fighter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Baccarat/Dice/Mr. Tanaka', 'STR'],
                    hp_: 2500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['def-perc',        '6T, 90%'],
                                ['orb-boost',       '3T, 1.1x'],
                                ['sp-bind',         '6T'],
                                ['slot-change',     'PSY/INT'],
                                ['nao',             '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def',             '5T, (Dice)'],
                                ['slot-block',      'All, (Tanaka)'],
                                ['blind',           '5T, (Tanaka)'],
                                ['atk',             '?T, (Baccarat)']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-bind',       '5T'],
                                ['cd-rew',          '2T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['bind',            '5T, Row 2, (Dice)'],
                                ['bind',            '5T, Row 3, (Tanaka)'],
                                ['desp',            '5T, (Baccarat)']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Baccarat & Dice & Mr. Tanaka', 'STR'],
                    hp_: 4000000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'S.BLOCK, Row 1, 3'],
                                ['atk-down',        '6T, 90%'],
                                ['def',             '6T, 1Mx'],
                                ['bar-slot',        '1T, 2x, G'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost',
                            action: [
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '150,000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk',             '5T'],
                                ['def-perc',        '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '2T'],
                                ['inc-dmg',         '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['def-thres',       '5T'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Blueno & Bepo & Sunny-kun ==========
    4033: {
        3697: {
            name: 'Beckman & Lucky Roux',
            type: 'QCK',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/PSY'],
                                ['vs-red',          '5T, STR/DEX/PSY'],
                                ['sw-red',          '5T, STR/DEX/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Beckman & Lucky Roux', 'QCK'],
                    hp: 2500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '5T'],
                                ['nao',             '99+T'],
                                ['slot-block',      'All'],
                                ['stun',            'Row 3'],
                                ['sp-limit',        '1T, 2x'],
                                ['dmg-limit',       '1T, 80%'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['inc-dmg',         '3T'],
                                ['blow-away',       '3T, Row 3']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['bind',            '5T, Row 2'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 4',
                            action: [
                                ['desp',            '5T'],
                                ['slot-bind',       '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3995: {
            name: 'Kizaru & Fujitora',
            type: 'INT',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, PSY/STR/QCK'],
                                ['vs-red',          '5T, PSY/STR/QCK'],
                                ['sw-red',          '5T, PSY/STR/QCK']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kizaru & Fujitora', 'INT'],
                    hp: 2500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '9T, Col L'],
                                ['cd-rew',          '3T, Row 1'],
                                ['cd-rew',          '2T, Row 2 3'],
                                ['nao',             '99+T'],
                                ['slot-block',      'All'],
                                ['desp',            '10T, Captain'],
                                ['sp-limit',        '1T, 2x'],
                                ['def-perc',        '6T, 90%'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '10%'],
                                ['dmg-normal',      '50000'],
                                ['bar-slot',        '2T, 2x, TND']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blow-away',       '5T, Row 3'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['para',            '5T'],
                                ['slot-bind',       '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        4020: {
            name: 'Katakuri & Oven',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, PSY/STR/DEX'],
                                ['vs-red',          '5T, PSY/STR/DEX'],
                                ['sw-red',          '5T, PSY/STR/DEX']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Katakuri & Oven', 'INT'],
                    hp: 1600000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '2T'],
                                ['nao',             '99+T'],
                                ['ship-bind',       '5T'],
                                ['atk-down',        '5T, 90%'],
                                ['para',            '7T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock-tap',   '1x Great']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['def-perc',        '5T'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['bind',            '5T, Row 2 3'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        }
                    ]
                }
            ]
        },
        4033: {
            name: 'Blueno & Bepo & Sunny-kun',
            type: 'STR',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Blueno & Bepo & Sunny-kun', 'STR'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '9T, Row 3'],
                                ['nao',             '99+T'],
                                ['slot-block',      'All'],
                                ['cd-rew',          '2T, Row 2 3'],
                                ['hunger',          '2x'],
                                ['intim',           '2T, -2T, Atk Boost']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['para',            '6T'],
                                ['def-perc',        '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['atk',             '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        4011: {
            name: 'Shanks',
            type: 'DEX',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/PSY'],
                                ['vs-red',          '5T, STR/DEX/PSY'],
                                ['sw-red',          '5T, STR/DEX/PSY']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Shanks', 'DEX'],
                    hp_: 3500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '1T'],
                                ['nao',             '99+T'],
                                ['para',            '6T'],
                                ['def-perc',        '2T, 90%'],
                                ['immu-except',     '99+T, Delay']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['atk-down',        '3T, 90%']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['tap-limit',       '3T, 4x'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['para',            '2T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Shanks', 'DEX'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '1T'],
                                ['bind',            '8T, Row 3'],
                                ['chain-atk-down-min','2T, < 2.75x chain, 90%'],
                                ['intim',           '2T, -1T, Lock Chain'],
                                ['def',             '3T, 1Mx'],
                                ['immu-except',     '99+T, Delay']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def',             '4T'],
                                ['atk',             '4T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blind',           '3T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['tap-limit',       '4T, 4x']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        4012: {
            name: 'Luffy',
            type: 'DEX',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Cerebral/Slasher/Fighter'],
                                ['vs-red',          '5T, Cerebral/Slasher/Fighter'],
                                ['sw-red',          '5T, Cerebral/Slasher/Fighter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Luffy', 'DEX'],
                    hp_: 2500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['nao',             '99+T'],
                                ['cd-rew',          '2T, Row 2 3'],
                                ['slot-block',      'All'],
                                ['bar-slot',        '2T, 2x, TND']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['sp-bind',         '4T, Row 1'],
                                ['sp-bind',         '7T, Row 2 3']
                            ]
                        },
                        {
                            type: 'Turn 1, Every 2 Turns',
                            action: [
                                ['cd-rew',          '2T'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['def-perc',        '1T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Luffy', 'DEX'],
                    hp_: 4000000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '3T, Row 1'],
                                ['slot-bind',       '5T'],
                                ['atk-down',        '4T, 90%'],
                                ['def-thres',       '7T, 99%, 1000'],
                                ['def',             '4T, 1Mx'],
                                ['immu-def',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '2T'],
                                ['inc-dmg',         '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['slot-bind',       '?T']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Luffy ==========
    4053: {
        4053: {
            name: 'Luffy',
            type: 'QCK',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Luffy', 'QCK'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '6T'],
                                ['slot-block',      'All'],
                                ['slot-neg',        '5T, Type'],
                                ['bar-hit',         '2T, 15x'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-perc',        '5T'],
                                ['atk',             '5T, 2x'],
                                ['slot-bind',       '3T, (mob)']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['inc-dmg',         '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3961: {
            name: 'Denjiro',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, PSY/DEX/STR'],
                                ['vs-red',          '5T, PSY/DEX/STR'],
                                ['sw-red',          '5T, PSY/DEX/STR']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Denjiro', 'INT'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '9T'],
                                ['nao',             '99+T'],
                                ['atk-down',        '5T, 99%'],
                                ['para',            '6T'],
                                ['slot-block',      'All'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-perc',        '5T'],
                                ['atk',             '5T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock-tap',   '1x Great']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['slot-bind',       '5T'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        }
                    ]
                }
            ]
        },
        3749: {
            name: 'Raizo',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/DEX/QCK'],
                                ['vs-red',          '5T, STR/DEX/QCK'],
                                ['sw-red',          '5T, STR/DEX/QCK']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Raizo', 'STR'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '6T'],
                                ['desp',            '9T'],
                                ['nao',             '99+T'],
                                ['bind',            '9T, Row 1 2'],
                                ['atk-down',        '6T, 99%'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '10%'],
                                ['bar-slot',        '2T, 1x, WANO']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['inc-dmg',         '3T'],
                                ['blow-away',       '1T, Row 3']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['def-thres',       '4T'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 4',
                            action: [
                                ['slot-bind',       '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3569: {
            name: 'Shinobu',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Slasher/Free Spirit/Cerebral'],
                                ['vs-red',          '5T, Slasher/Free Spirit/Cerebral'],
                                ['sw-red',          '5T, Slasher/Free Spirit/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Shinobu', 'STR'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '6T'],
                                ['nao',             '99+T'],
                                ['slot-change',     'Bad'],
                                ['slot-lock',       '6T'],
                                ['bar-hit',         '1T, 25x'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['def',             '6T, 1Mx'],
                                ['immu-except',     '99+T, Delay']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '10%'],
                                ['silence',         '1T'],
                                ['chain-atk-down-min','3T, < 3x chain, 90%']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-block',      'All'],
                                ['def-perc',        '4T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['para',            '5T'],
                                ['slot-bind',       '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3959: {
            name: 'Momonosuke',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Powerhouse/Free Spirit/Fighter'],
                                ['vs-red',          '5T, Powerhouse/Free Spirit/Fighter'],
                                ['sw-red',          '5T, Powerhouse/Free Spirit/Fighter']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Inuarashi/Nekomamushi/Kawamatsu', 'QCK'],
                    hp_: 3500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['atk-down',        '6T, 99%'],
                                ['burn',            '7T, 20000'],
                                ['nao',             '99+T'],
                                ['bar-slot',        '2T, 1x, DEX'],
                                ['bar-p',           '3T, 1x'],
                                ['immu-except',     '99+T, Burn']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '100K']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk',             '5T, (Inuarashi)'],
                                ['slot-bind',       '5T, (Nekomamushi)'],
                                ['tap-limit',       '3T, 4x, (Kawamatsu)']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only, (Inuarashi)'],
                                ['def',             '4T, (Nekomamushi)'],
                                ['def-perc',        '4T, (Kawamatsu)']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Momonosuke', 'QCK'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '5T'],
                                ['para',            '6T'],
                                ['slot-block',      'All'],
                                ['desp',            '8T'],
                                ['ship-bind',       '6T'],
                                ['immu-except',     '99+T, Burn']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock',       '3T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk',             '5T'],
                                ['def',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blind',           '3T'],
                                ['bar-p',           '3T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['tap-limit',       '4T, 3x']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3991: {
            name: ['Yam', 'ato'],
            type: ['STR', 'DEX'],
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Powerhouse/Slasher/Free Spirit'],
                                ['vs-red',          '5T, Powerhouse/Slasher/Free Spirit'],
                                ['sw-red',          '5T, Powerhouse/Slasher/Free Spirit']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Yamato', 'QCK'],
                    hp: 1500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '6T'],
                                ['nao',             '99+T'],
                                ['bar-slot',        '2T, 2x, STR'],
                                ['atk-down',        '6T, 99%'],
                                ['immu-except',     '99+T, Burn']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '100K']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Yamato', 'STR'],
                    hp_: 4000000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'S.BLOCK'],
                                ['slot-bind',       '7T'],
                                ['ship-bind',       '5T'],
                                ['def-thres',       '7T, 99%, 1000'],
                                ['Slot Atk Down',   '3T, WANO, 90%'],
                                ['type-change',     'STR/DEX'],
                                ['immu-def',        '99+T'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['heal-bind',       '5T'],
                                ['inc-dmg',         '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['pain',            '3T'],
                                ['clear-buff',      'Buff Only']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['stun',            'Row 3']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Edward Newgate ==========
    4074: {
        2706: {
            name: 'Speed',
            type: 'STR',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Speed', 'STR'],
                    hp_: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-atk-down-min','3T, <2.75x Chain, 99%'],
                                ['stun',            'Row 2 3'],
                                ['burn',            '5T, 20000'],
                                ['bar-p',           '1T, 2x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-perc',        '5T'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['inc-dmg',         '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3212: {
            name: 'Carrot',
            type: 'PSY',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, INT/QCK/STR'],
                                ['vs-red',          '5T, INT/QCK/STR'],
                                ['sw-red',          '5T, INT/QCK/STR']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Carrot', 'PSY'],
                    hp_: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '5T'],
                                ['desp',            '8T'],
                                ['para',            '5T'],
                                ['slot-block',      'All'],
                                ['immu-delay',      '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '5T'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock-tap',   '1x Good']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['atk',             '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        4049: {
            name: 'Nekomamushi',
            type: 'QCK',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Cerebral/Slasher/Striker'],
                                ['vs-red',          '5T, Cerebral/Slasher/Striker'],
                                ['sw-red',          '5T, Cerebral/Slasher/Striker']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Nekomamushi', 'QCK'],
                    hp_: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '80%'],
                                ['para',            '6T'],
                                ['nao',             '99+T'],
                                ['desp',            '6T'],
                                ['atk-down',        '3T, 99%'],
                                ['slot-neg',        '5T, Type'],
                                ['slot-block',      'All'],
                                ['immu-except',     '99+T, Def Down']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '100,000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['inc-dmg',         '3T'],
                                ['blow-away',       '3T, Row 3'],
                                ['def-perc',        '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['tap-limit',       '3T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['slot-bind',       '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        3495: {
            name: 'Robin & Jinbe',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/STR/DEX'],
                                ['vs-red',          '5T, QCK/STR/DEX'],
                                ['sw-red',          '5T, QCK/STR/DEX']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Robin & Jinbe', 'STR'],
                    hp_: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['fear',            '5T'],
                                ['nao',             '99+T'],
                                ['sp-bind',         '5T, Row 1 3'],
                                ['def-thres',       '7T, 99%, 1000'],
                                ['def',             '7T, 1Mx'],
                                ['cd-rew',          '1T, Row 1 3'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Boost',
                            action: [
                                ['slot-bind',       '3T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['cd-rew',          '2T'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-block',      'All'],
                                ['def-perc',        '4T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['para',            '5T'],
                                ['slot-bind',       '?T']
                            ]
                        }
                    ]
                }
            ]
        },
        3755: {
            name: 'Zoro',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Free Spirit/Fighter/Slasher'],
                                ['vs-red',          '5T, Free Spirit/Fighter/Slasher'],
                                ['sw-red',          '7T, Free Spirit/Fighter/Slasher']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Zoro', 'STR'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['blind',           '5T'],
                                ['nao',             '99+T'],
                                ['sp-bind',         '6T'],
                                ['slot-change',     'Poison'],
                                ['target-lock',     '2T'],
                                ['bar-p',           '2T, 2x'],
                                ['bar-p',           '2T, 1x'],
                                ['bar-p',           '2T, 1x']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['hp-cut',          '80%']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk',             '5T'],
                                ['slot-bind',       '3T'],
                                ['def-perc',        '4T'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Zoro', 'STR'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '1T'],
                                ['burn',            '6T, 15000'],
                                ['para',            '6T'],
                                ['def-perc',        '6T, 90%'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '50%'],
                                ['para',            '3T'],
                                ['sp-bind',         '3T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['pain',            '3T, 15000'],
                                ['bar-p',           '3T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        3889: {
            name: 'Sanji',
            type: 'STR',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Free Spirit/Fighter/Slasher'],
                                ['vs-red',          '5T, Free Spirit/Fighter/Slasher'],
                                ['sw-red',          '6T, Free Spirit/Fighter/Slasher']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Shinobu & Raizo', 'STR'],
                    hp_: 1500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['poison',          '5T, 30000'],
                                ['nao',             '99+T'],
                                ['anti-rcv',        '5T'],
                                ['pain',            '5T, 10000'],
                                ['def',             '3T, 1Mx'],
                                ['def-thres',       '3T, 99%, 1000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-block',      'All'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['cd-rew',          '2T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sanji', 'STR'],
                    hp_: 4000000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '6T'],
                                ['sp-bind',         '6T'],
                                ['cd-rew',          '1T'],
                                ['slot-change',     'RCV'],
                                ['atk-down',        '10T, 99%, Striker/Shooter/Driven/Cerebral/Powerhouse'],
                                ['bar-slot',        '3T, 1x, RAINBOW']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['stun',            'Row 3'],
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Jinbe ==========
    4089: {
        4086: {
            name: 'Chopper',
            type: 'PSY',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Chopper', 'PSY'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-block',      'All'],
                                ['hunger',          '2x'],
                                ['def-perc',        '6T, 90%'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['immu-except',     '99+T, Def Down']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '5T'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['inc-dmg',         '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        4091: {
            name: 'Brook',
            type: 'DEX',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Shooter/Striker/Cerebral'],
                                ['vs-red',          '5T, Shooter/Striker/Cerebral'],
                                ['sw-red',          '5T, Shooter/Striker/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Brook', 'DEX'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-down',      '5T, 0.6x'],
                                ['chain-atk-down-min','2T, <3.25x Chain, 90%'],
                                ['stun',            'Row 2 3'],
                                ['burn',            '6T, 15000'],
                                ['bar-slot',        '2T, 2x, BLOCK'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def',             '5T'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock-tap',   '1x Good']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['bind',            '5T, Row 2 3']
                            ]
                        }
                    ]
                }
            ]
        },
        4087: {
            name: 'Franky & Usopp',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Powerhouse/Striker'],
                                ['vs-red',          '5T, Driven/Powerhouse/Striker'],
                                ['sw-red',          '5T, Driven/Powerhouse/Striker']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Franky & Usopp', 'STR'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['nao',             '99+T'],
                                ['slot-change',     'Bad'],
                                ['def-perc',        '6T, 90%'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['immu-except',     '99+T, Increase Dmg Taken']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['heal',            '10%'],
                                ['dmg-normal',      '20000'],
                                ['bar-slot',        '2T, 1x, WANO'],
                                ['silence',         '1T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '2T'],
                                ['atk-down',        '3T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['para',            '3T']
                            ]
                        },
                        {
                            type: 'Turn 4',
                            action: [
                                ['slot-bind',       '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        4089: {
            name: 'Jinbe',
            type: 'PSY',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, INT/PSY/STR'],
                                ['vs-red',          '5T, INT/PSY/STR'],
                                ['sw-red',          '5T, INT/PSY/STR']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Jinbe', 'PSY'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['para',            '6T'],
                                ['nao',             '99+T'],
                                ['slot-block',      'All'],
                                ['bind',            '9T, Row 2 3'],
                                ['p-easy',          '1T'],
                                ['def-null',        '1T'],
                                ['bar-gd',          '1T, 2x'],
                                ['immu-except',     '99+T, Increase Dmg Taken / Weakened']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '100K']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-perc',        '4T'],
                                ['sp-limit',        '2T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-block',      'All'],
                                ['cd-rew',          '2T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['desp',            '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        4084: {
            name: 'Bonney',
            type: 'PSY',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, INT/PSY/DEX'],
                                ['vs-red',          '5T, INT/PSY/DEX'],
                                ['sw-red',          '5T, INT/PSY/DEX'],
                                ['slot-pos',        '5T, INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Bonney', 'INT'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '6T, 99%'],
                                ['cd-rew',          '1T'],
                                ['intim',           '3T, -1T, Set Chain'],
                                ['def',             '5T, 1Mx'],
                                ['bar-slot',        '2T, 1x, INT'],
                                ['nao',             '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['ca-swap',         '5T, Random Sailor'],
                                ['sp-bind',         '3T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['para',            '3T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Bonney', 'PSY'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['desp',            '12T'],
                                ['slot-block',      'All'],
                                ['chain-down',      '6T, 0.6x'],
                                ['chain-atk-down-min','2T, <2.2x Chain, 90%'],
                                ['intim',           '3T, -1T, Slot Boost'],
                                ['atk-boost',       '1T, 1.1x'],
                                ['def',             '6T, 1Mx'],
                                ['immu-except',     '99+T, Def Down']
                            ]
                        },
                        {
                            type: 'Interrupt - Set Chain (once)',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-perc',        '3T'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blind',           '3T'],
                                ['bar-p',           '3T, 2x']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['stun',            'Row 3']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['dmg-normal',      'Deadly']
                            ]
                        }
                    ]
                }
            ]
        },
        4082: {
            name: 'Lilith',
            type: 'PSY',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, INT/PSY/STR'],
                                ['vs-red',          '5T, INT/PSY/STR'],
                                ['sw-red',          '5T, INT/PSY/STR']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Lilith', 'INT'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '50%'],
                                ['para',            '6T'],
                                ['hunger',          '3x'],
                                ['nao',             '99+T'],
                                ['slot-neg',        '2T, Type'],
                                ['bind',            '9T, Row 1']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock-tap',   '1x Perfect']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['stun',            'Row 3']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['cd-rew',          '2T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Lilith', 'PSY'],
                    hp_: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '10T, Row 2 3'],
                                ['slot-bind',       '5T'],
                                ['resil',           '6T'],
                                ['atk-down',        '5T, 99%'],
                                ['pain',            '5T, 18000'],
                                ['immu-except',     '99+T, Def Down / Increase Dmg Taken / Weakened']
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost (once)',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['ca-swap',         '3T, Random Sailor']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['heal-bind',       '3T'],
                                ['burn',            '3T, 10000']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['clear-buff',      'Buff Only'],
                                ['def-perc',        '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['blow-away',       '3T, Row 2']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Coby ==========
    4108: {
        3466: {
            name: 'Helmeppo',
            type: 'QCK',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Helmeppo', 'QCK'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['hp-cut',          '50%'],
                                ['para',            '3T'],
                                ['slot-block',      'All'],
                                ['atk-down',        '3T, 99%'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '50000']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '5T'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['inc-dmg',         '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        2996: {
            name: 'Sandersonia & Marigold',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Slasher/Fighter/Cerebral'],
                                ['vs-red',          '5T, Slasher/Fighter/Cerebral'],
                                ['sw-red',          '5T, Slasher/Fighter/Cerebral']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sandersonia & Marigold', 'INT'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '5T, 99%'],
                                ['para',            '5T'],
                                ['nao',             '99+T'],
                                ['slot-block',      'All'],
                                ['sp-limit',        '4T, 2x'],
                                ['def-null',        '2T'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk-down',        '5T'],
                                ['tap-limit',       '3T, 4x']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['slot-block',      'All'],
                                ['slot-lock-tap',   '1x Good']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['bind',            '5T, Row 2 3']
                            ]
                        }
                    ]
                }
            ]
        },
        4098: {
            name: 'Rayleigh',
            type: 'PSY',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/QCK/INT'],
                                ['vs-red',          '5T, STR/QCK/INT'],
                                ['sw-red',          '5T, STR/QCK/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Rayleigh', 'PSY'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['sp-bind',         '5T'],
                                ['nao',             '99+T'],
                                ['atk-down',        '8T, 99%'],
                                ['ship-bind',       '3T'],
                                ['def',             '5T, 1Mx'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['blind',           '5T'],
                                ['slot-bind',       '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '2T'],
                                ['burn',            '3T, 20000']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['para',            '3T']
                            ]
                        }
                    ]
                }
            ]
        },
        4096: {
            name: 'Hancock',
            type: 'DEX',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Powerhouse/Striker'],
                                ['vs-red',          '5T, Driven/Powerhouse/Striker'],
                                ['sw-red',          '5T, Driven/Powerhouse/Striker']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Hancock', 'DEX'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '6T, 99%'],
                                ['nao',             '99+T'],
                                ['sp-bind',         '5T'],
                                ['slot-change',     'Bad'],
                                ['intim',           '3T, -2T, Slot Boost / Set Chain'],
                                ['def-thres',       '2T, 99%, 1000'],
                                ['def',             '6T, 1Mx'],
                                ['bar-hit',         '1T, 20x'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['def-null',        '1T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['blind',           '2T'],
                                ['slot-block',      'All']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['desp',            '5T'],
                                ['atk',             '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        4109: {
            name: 'S-Hawk',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, STR/QCK/DEX'],
                                ['vs-red',          '5T, STR/QCK/DEX'],
                                ['sw-red',          '5T, STR/QCK/DEX']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['S-Hawk', 'STR'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['nao',             '99+T'],
                                ['burn',            '5T, 20000'],
                                ['desp',            '8T'],
                                ['dmg-eot-e',       '6T, 20000'],
                                ['def',             '6T, 1Mx'],
                                ['immu-except',     '99+T, Set Target']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['bind',            '6T, Row 3'],
                                ['blind',           '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '5T'],
                                ['anti-rcv',        '5T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['S-Hawk', 'STR'],
                    hp: 3500000,
                    atk: 7200,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['atk-down',        '6T, 99%'],
                                ['dmg-limit',       '5T, 70%'],
                                ['cd-rew',          '4T, Row 1'],
                                ['cd-rew',          '3T, Row 2 3'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['target-lock',     '1T'],
                                ['desp',            '5T'],
                                ['slot-change',     'Poison'],
                                ['bar-hit',         '1T, 12x'],
                                ['immu-except',     '99+T, Set Target']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '5T, (Mob 1)'],
                                ['slot-bind',       '5T, (Mob 2)']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['stun',            'Row 3'],
                                ['atk',             '3T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['blow-away',       '?T, Row 2'],
                                ['def',             '5T']
                            ]
                        }
                    ]
                }
            ]
        },
        4108: {
            name: 'Coby',
            type: 'STR',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Powerhouse/Slasher'],
                                ['vs-red',          '5T, Driven/Powerhouse/Slasher'],
                                ['sw-red',          '5T, Driven/Powerhouse/Slasher']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['T-Bone', 'STR'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['nao',             '99+T'],
                                ['cd-rew',          '2T'],
                                ['desp',            '9T'],
                                ['def',             '6T, 1Mx']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['slot-bind',       '3T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['stun',            'Row 3']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['cd-rew',          '2T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Coby', 'STR'],
                    hp_: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-rew',          '2T'],
                                ['sp-limit',        '3T, 2x'],
                                ['def-perc',        '6T, 90%'],
                                ['chain-atk-down-min','5T, <2.75x Chain, 99%'],
                                ['intim',           '3T, -2T, Set Chain / Affinity'],
                                ['para',            '6T'],
                                ['immu-except',     '99+T, Set Target']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '150K']
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                ['atk-down',        '5T']
                            ]
                        },
                        {
                            type: 'Turn 2',
                            action: [
                                ['cd-rew',          '2T'],
                                ['atk',             '5T']
                            ]
                        },
                        {
                            type: 'Turn 3',
                            action: [
                                ['blow-away',       '3T, Row 2']
                            ]
                        },
                        {
                            type: '<20%',
                            action: [
                                ['heal',            '100%']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== CP0 ==========
    4128: {
        4129: {
            name: 'Luffy',
            type: 'STR',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, All'],
                                ['vs-red',          '5T, All'],
                                ['sw-red',          '5T, All']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Luffy', 'STR'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['chain-atk-down-min','5T, <3x Chain, 99%'],
                                ['chain-atk-down-max','5T, >4.5x Chain, 99%'],
                                ['def-thres',       '6T, 70%, 100K'],
                                ['counter',         '?']
                            ]
                        },
                        {
                            type: 'Interrupt - Threshold not Applied (once)',
                            action: [
                                ['def-thres',       '3T, 70%, 100K']
                            ]
                        },
                        {
                            type: 'Interrupt - Set Chain (once)',
                            action: [
                                ['ca-swap',         '2T, Random Sailor']
                            ]
                        }
                    ]
                }
            ]
        },
        4094: {
            name: 'Robin',
            type: 'INT',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, QCK/PSY/INT'],
                                ['vs-red',          '5T, QCK/PSY/INT'],
                                ['sw-red',          '5T, QCK/PSY/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Robin', 'INT'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '8T, Col L'],
                                ['nao',             '99+T'],
                                ['cd-rew',          '2T, Col R'],
                                ['desp',            '8T'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '1x atk']
                            ]
                        }
                    ]
                }
            ]
        },
        4090: {
            name: 'Zoro',
            type: 'DEX',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Slasher/Powerhouse/Striker'],
                                ['vs-red',          '5T, Slasher/Powerhouse/Striker'],
                                ['sw-red',          '5T, Slasher/Powerhouse/Striker']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Zoro', 'DEX'],
                    hp_: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'STR(100%)/QCK(82%)/PSY(64%)/INT(46%)/DEX(28%)'],
                                ['nao',             '99+T'],
                                ['slot-block',      'All'],
                                ['cd-rew',          '2T, Row 2 3'],
                                ['cd-rew',          '3T, Row 1'],
                                ['bar-slot',        '3T, 1x, QCK'],
                                ['immu-all',        '99+T']
                            ]
                        },
                        {
                            type: 'Preemp (if HP>70%)',
                            action: [
                                ['cd-rew',          '3T, Row 2 3'],
                                ['cd-rew',          '5T, Row 1'],
                                ['bar-slot',        '4T, 2x, QCK']
                            ]
                        },
                        {
                            type: 'Interrupt - Charge Special (once)',
                            action: [
                                ['hp-cut',          '80%'],
                                ['cd-rew',          '1T'],
                                ['cd-lock',         '2x Perfect']
                            ]
                        }
                    ]
                }
            ]
        },
        4082: {
            name: 'Lilith',
            type: 'STR',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Driven/Cerebral/Powerhouse'],
                                ['vs-red',          '5T, Driven/Cerebral/Powerhouse'],
                                ['sw-red',          '5T, Driven/Cerebral/Powerhouse']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Lilith', 'STR'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['type-change',     'STR(100%)/PSY(50%)'],
                                ['slot-change',     'Bad'],
                                ['sp-bind',         '7T'],
                                ['nao',             '99+T'],
                                ['resil',           '5T'],
                                ['bar-gt',          '3T, 5x'],
                                ['desp',            '8T'],
                                ['para',            '3T'],
                                ['immu-all',        '99+T']
                            ]
                        }
                    ]
                }
            ]
        },
        4132: {
            name: 'S-Shark',
            type: 'PSY',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, DEX/QCK/INT'],
                                ['vs-red',          '5T, DEX/QCK/INT'],
                                ['sw-red',          '5T, DEX/QCK/INT']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['S-Shark', 'PSY'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['bind',            '9T, Row 1'],
                                ['nao',             '99+T'],
                                ['burn',            '6T, 30000'],
                                ['def-perc',        '6T, 90%'],
                                ['bar-p',           '3T, 2x'],
                                ['immu-all',        '99+T']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['S-Shark', 'PSY'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['slot-change',     'RCV'],
                                ['blind',           '5T'],
                                ['pain',            '3T, 25000'],
                                ['anti-rcv',        '6T'],
                                ['Slot Atk Down',   '6T, TYPE/RCV/TND/WANO, 90%'],
                                ['chain-atk-down-min','5T, <3.5x Chain, 99%'],
                                ['def-perc',        '6T, 90%'],
                                ['bar-slot',        '4T, 1x, STR']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change (once)',
                            action: [
                                ['slot-change',     'RCV']
                            ]
                        }
                    ]
                }
            ]
        },
        4128: {
            name: 'CP0',
            type: 'PSY',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['cd-red',          '5T, Cerebral/Fighter/Striker'],
                                ['vs-red',          '5T, Cerebral/Fighter/Striker'],
                                ['sw-red',          '5T, Cerebral/Fighter/Striker']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['CP0', 'PSY'],
                    hp: 2500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['nao',             '99+T'],
                                ['hp-cut',          '80%'],
                                ['anti-rcv',        '3T'],
                                ['slot-bind',       '1T, Row 1'],
                                ['bind',            '8T, Row 1'],
                                ['desp',            '8T, Row 1']
                            ]
                        },
                        {
                            type: 'Interrupt - Damage (once)',
                            action: [
                                ['desp',            '10T, Row 1']
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['CP0', 'PSY'],
                    hp_: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                ['orb-boost',       '2T, 1.1x'],
                                ['slot-block',      'All'],
                                ['atk-down',        '6T, 99%'],
                                ['def',             '6T, 1Mx'],
                                ['def-thres',       '6T, 99%, 1000'],
                                ['def-perc',        '6T, 90%']
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change',
                            action: [
                                ['slot-change',     'S.BLOCK']
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                ['dmg-normal',      '100K']
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Blackbeard (DEX) ==========
    4147: {
        2232: {
            name: 'Eneru',
            type: 'PSY',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'All' },
                                { type: VS_RED, turn: 5, detail: 'All' },
                                { type: SW_RED, turn: 5, detail: 'All' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Eneru', 'PSY'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_REW, turn: 2 },
                                { type: BLIND, turn: 5 },
                                { type: NAO, turn: 99 },
                                { type: CHAIN_ATK_DOWN_MIN, turn: 5, detail: '<3' },
                                { type: CHAIN_ATK_DOWN_MAX, turn: 5, detail: '>4.5' },
                                { type: DEF, turn: 8 },
                                { type: INTIM, turn: 2, detail: 'Set Chain / Affinity, -1' },
                                { type: IMMU_EXCEPT, turn: 99, detail: 'Def Down' }
                            ]
                        },
                        {
                            type: 'Interrupt - Def not Applied (once)',
                            action: [
                                { type: PARA, turn: 3 },
                                { type: ATK, turn: 5 }
                            ]
                        }
                    ]
                }
            ]
        },
        3483: {
            name: 'Crocodile',
            type: 'QCK',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'Driven/Powerhouse/Slasher' },
                                { type: VS_RED, turn: 5, detail: 'Driven/Powerhouse/Slasher' },
                                { type: SW_RED, turn: 5, detail: 'Driven/Powerhouse/Slasher' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Crocodile', 'QCK'],
                    hp: 1500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SP_LIMIT, turn: 1, detail: '2x' },
                                { type: SLOT_ATK_DOWN, turn: 6, detail: 'Type' },
                                { type: TARGET_LOCK, turn: 2 },
                                { type: RESIL, turn: 2 },
                                { type: DEF_PERC, turn: 6 },
                                { type: DEF_THRES, turn: 6 },
                                { type: BAR_P, turn: 2, detail: '2x' }
                            ]
                        },
                        {
                            type: 'Interrupt - Damage (once)',
                            action: [
                                { type: PARA, turn: 1 }
                            ]
                        }
                    ]
                }
            ]
        },
        3666: {
            name: ['Kata', 'kuri'],
            type: ['INT', 'PSY'],
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'Fighter/Slasher/Cerebral' },
                                { type: VS_RED, turn: 5, detail: 'Fighter/Slasher/Cerebral' },
                                { type: SW_RED, turn: 5, detail: 'Fighter/Slasher/Cerebral' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Katakuri', 'INT'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SP_BIND, turn: 6 },
                                { type: SLOT_ATK_DOWN, turn: 5, detail: 'Type (Except PSY) / RCV' },
                                { type: CHAIN_DOWN, turn: 6 },
                                { type: CHAIN_ATK_DOWN_MIN, turn: 5, detail: '<3' },
                                { type: NAO, turn: 99 },
                                { type: INTIM, turn: 2, detail: '+Chain/Set Chain, -2' },
                                { type: BAR_GD, turn: 3, detail: '2x' },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost',
                            action: [
                                { type: SLOT_CHANGE, detail: 'Bad' },
                                { type: CLEAR_BUFF, detail: 'Buff Only' }
                            ]
                        }
                    ]
                }
            ]
        },
        3550: {
            name: 'Doffy',
            type: 'PSY',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'STR/DEX/INT' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Doffy', 'PSY'],
                    hp: 2500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: HP_CUT, detail: '50%' },
                                { type: SHIP_BIND, turn: 9 },
                                { type: SLOT_BLOCK },
                                { type: NAO, turn: 99 },
                                { type: HEAL_BIND, turn: 5 },
                                { type: PAIN, turn: 5, detail: '20000' },
                                { type: ATK_DOWN, turn: 3 },
                                { type: BIND, turn: 10, detail: 'Col L' },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change (once)',
                            action: [
                                { type: SLOT_BLOCK },
                                { type: INC_DMG, turn: 1 }
                            ]
                        }
                    ]
                }
            ]
        },
        3346: {
            name: 'Kaido & Big Mom',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'DEX/QCK/PSY' },
                                { type: VS_RED, turn: 5, detail: 'DEX/QCK/PSY' },
                                { type: SW_RED, turn: 5, detail: 'DEX/QCK/PSY' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Kaido & Big Mom', 'QCK'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_REW, turn: 6, detail: 'Row 2 3' },
                                { type: CD_REW, turn: 2, detail: 'Row 1' },
                                { type: NAO, turn: 99 },
                                { type: HUNGER, detail: '1x' },
                                { type: ATK_DOWN, turn: 6 },
                                { type: BAR_SLOT, turn: 3, detail: '2x, TND' },
                                { type: INTIM, turn: 2, detail: 'Affinity, -1' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kaido & Big Mom', 'QCK'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_CHANGE, detail: 'Bad' },
                                { type: SLOT_EFT_DOWN, turn: 5, detail: 'Type/RCV/TND/WANO, Fav 0.5x' },
                                { type: RESIL, turn: 6 },
                                { type: DEF_NULL, turn: 3 },
                                { type: ATK_DOWN, turn: 6 },
                                { type: INTIM, turn: 2, detail: 'Atk Boost, -2' },
                                { type: IMMU_EXCEPT, turn: 99, detail: 'Def Down' }
                            ]
                        },
                        {
                            type: 'Interrupt - Base Atk Boost (once)',
                            action: [
                                { type: CLEAR_BUFF, detail: 'Buff Only' }
                            ]
                        }
                    ]
                }
            ]
        },
        4147: {
            name: 'Blackbeard',
            type: 'QCK',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'Fighter/Free Spirit/Powerhouse' },
                                { type: VS_RED, turn: 5, detail: 'Fighter/Free Spirit/Powerhouse' },
                                { type: SW_RED, turn: 5, detail: 'Fighter/Free Spirit/Powerhouse' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Blackbeard', 'QCK'],
                    hp: 2500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_REW, turn: 2 },
                                { type: SLOT_BLOCK },
                                { type: RESIL, turn: 6 },
                                { type: NAO, turn: 99 },
                                { type: HUNGER, detail: '1x' },
                                { type: INTIM, turn: 5, detail: 'Atk Boost, -1' },
                                { type: SLOT_NEG, turn: 5, detail: 'Type' },
                                { type: SP_BIND, turn: 1 },
                                { type: BLOW_AWAY, turn: 5, detail: 'Bottom Right' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Blackbeard', 'QCK'],
                    hp_: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_PARA },
                                { type: DESP, turn: 13 },
                                { type: BIND, turn: 9, detail: 'Row 2' },
                                { type: DEF, turn: 7 },
                                { type: IMMU_EXCEPT, turn: 99, detail: 'Def Down' }
                            ]
                        },
                        {
                            type: 'Interrupt - Atk Boost (once)',
                            action: [
                                { type: CLEAR_BUFF, detail: 'Buff Only' }
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                { type: DMG_NORMAL, detail: '150K' },
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Mihawk (DEX) ==========
    4177: {
        3267: {
            name: 'Mr. 4 & Miss Merry X-Mas',
            type: 'QCK',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'All' },
                                { type: VS_RED, turn: 5, detail: 'All' },
                                { type: SW_RED, turn: 5, detail: 'All' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Mr. 4 & Miss Merry X-Mas', 'QCK'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SP_BIND, turn: 5, detail: 'Col L' },
                                { type: STUN, detail: 'Col R' },
                                { type: NAO, turn: 99 },
                                { type: ATK_DOWN, turn: 6 },
                                { type: INC_DMG, turn: 2 },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        }
                    ]
                }
            ]
        },
        890: {
            name: ['Per', 'ona'],
            type: ['PSY', 'QCK'],
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'Fighter/Cerebral/Powerhouse' },
                                { type: VS_RED, turn: 5, detail: 'Fighter/Cerebral/Powerhouse' },
                                { type: SW_RED, turn: 5, detail: 'Fighter/Cerebral/Powerhouse' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Perona', 'QCK'],
                    hp: 1500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_BLOCK },
                                { type: SLOT_BIND, turn: 3, detail: 'Row 1' },
                                { type: NAO, turn: 99 },
                                { type: BURN_P, turn: 6, detail: '15000' },
                                { type: DEF, turn: 7 },
                                { type: INTIM, turn: 2, detail: 'Slot Boost, -2' },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        }
                    ]
                }
            ]
        },
        3805: {
            name: 'Sugar',
            type: 'INT',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'STR/QCK/PSY' },
                                { type: VS_RED, turn: 5, detail: 'STR/QCK/PSY' },
                                { type: SW_RED, turn: 5, detail: 'STR/QCK/PSY' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sugar', 'INT'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: HP_CUT, detail: '80%' },
                                { type: BIND, turn: 9, detail: 'Col L' },
                                { type: SLOT_CHANGE, detail: 'Bad' },
                                { type: NAO, turn: 99 },
                                { type: HUNGER, detail: '1x' },
                                { type: DEF_THRES, turn: 6 },
                                { type: BAR_SLOT, turn: 2, detail: '2x RCV' },
                                { type: INTIM, turn: 2, detail: 'Color Affinity, -2' },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                { type: DMG_NORMAL, detail: '100K' },
                            ]
                        }
                    ]
                }
            ]
        },
        3433: {
            name: ['Ulti & ', 'Page One'],
            type: ['DEX', 'QCK'],
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'QCK/DEX/INT' },
                                { type: VS_RED, turn: 5, detail: 'QCK/DEX/INT' },
                                { type: SW_RED, turn: 5, detail: 'QCK/DEX/INT' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ulti & Page One', 'QCK'],
                    hp: 2500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_REW, turn: 2, detail: 'Row 2 3' },
                                { type: NAO, turn: 99 },
                                { type: DEF_PERC, turn: 6 },
                                { type: DESP, turn: 9 },
                                { type: PARA, turn: 11 },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        },
                        {
                            type: 'Interrupt - Color Affinity (once)',
                            action: [
                                { type: CLEAR_BUFF, detail: 'Buff Only' }
                            ]
                        }
                    ]
                }
            ]
        },
        2866: {
            name: 'Kuro & Django',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'Slasher/Free Spirit/Powerhouse' },
                                { type: VS_RED, turn: 5, detail: 'Slasher/Free Spirit/Powerhouse' },
                                { type: SW_RED, turn: 5, detail: 'Slasher/Free Spirit/Powerhouse' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Kuro & Django', 'QCK'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_BIND, turn: 3 },
                                { type: BURN, turn: 6, detail: '15000' },
                                { type: NAO, turn: 99 },
                                { type: INTIM, turn: 2, detail: 'Atk Boost/Slot Boost, -1' },
                                { type: DEF_NULL, turn: 2 }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kuro & Django', 'QCK'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_BLOCK, detail: 'BLOCK/Bad' },
                                { type: NAO, turn: 99 },
                                { type: DEF_THRES, turn: 10 },
                                { type: DEF_PERC, turn: 6 },
                                { type: DMG_LIMIT, turn: 2, detail: '70%' },
                                { type: SP_BIND, turn: 5, detail: 'Col L' },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        },
                        {
                            type: 'Interrupt - Base Atk Boost (once)',
                            action: [
                                { type: CLEAR_BUFF, detail: 'Buff Only' }
                            ]
                        },
                        {
                            type: 'Turn 1',
                            action: [
                                { type: CD_REW, turn: 3 },
                                { type: RESIL, turn: 6 }
                            ]
                        }
                    ]
                }
            ]
        },
        4177: {
            name: ['Mih', 'awk'],
            type: ['INT', 'QCK'],
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'STR/DEX/PSY' },
                                { type: VS_RED, turn: 5, detail: 'STR/DEX/PSY' },
                                { type: SW_RED, turn: 5, detail: 'STR/DEX/PSY' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Mihawk', 'QCK'],
                    hp: 2500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_BLOCK },
                                { type: CD_REW, turn: 3, detail: 'Col L' },
                                { type: BURN, turn: 6, detail: '15000' },
                                { type: DEF_THRES, turn: 6 },
                                { type: NAO, turn: 99 },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Mihawk', 'QCK'],
                    hp_: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_REW, turn: 6, detail: 'Col R' },
                                { type: SLOT_PARA },
                                { type: NAO, turn: 99 },
                                { type: ATK_BOOST, turn: 5, detail: '1.1x' },
                                { type: SLOT_BOOST, turn: 5, detail: '1.1x' },
                                { type: BAR_SLOT, turn: 3, detail: '2x DEX' },
                                { type: BIND, turn: 9, detail: 'Col L' },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        },
                        {
                            type: 'Interrupt - Barrier Not Applied (once)',
                            action: [
                                { type: DMG_NORMAL, detail: '100k' },
                                { type: SLOT_ATK_DOWN, turn: 5, detail: 'RCV/TND/WANO/BOMB/S.BOMB' }
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Arlong ==========
    4191: {
        758: {
            name: 'Fukuro',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'All' },
                                { type: VS_RED, turn: 5, detail: 'All' },
                                { type: SW_RED, turn: 5, detail: 'All' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Fukuro', 'INT'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_CHANGE, detail: 'INT' },
                                { type: PARA, turn: 5 },
                                { type: SP_BIND, turn: 5 },
                                { type: NAO, turn: 99 },
                                { type: SLOT_NEG, turn: 6, detail: 'STR/DEX/QCK/INT' },
                                { type: RESIL, turn: 6 },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        }
                    ]
                }
            ]
        },
        1438: {
            name: 'Ikaros',
            type: 'QCK',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'Fighter/Slasher/Driven' },
                                { type: VS_RED, turn: 5, detail: 'Fighter/Slasher/Driven' },
                                { type: SW_RED, turn: 5, detail: 'Fighter/Slasher/Driven' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ikaros', 'QCK'],
                    hp: 1500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_BLOCK },
                                { type: FEAR, turn: 5 },
                                { type: CD_REW, turn: 2 },
                                { type: NAO, turn: 99 },
                                { type: DEF_PERC, turn: 7 },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        }
                    ]
                }
            ]
        },
        3654: {
            name: ['Sas', 'aki'],
            type: ['PSY', 'QCK'],
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'Striker/Shooter/Free Spirit' },
                                { type: VS_RED, turn: 5, detail: 'Striker/Shooter/Free Spirit' },
                                { type: SW_RED, turn: 5, detail: 'Striker/Shooter/Free Spirit' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Sasaki', 'PSY'],
                    hp_: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_BLOCK, detail: 'BLOCK/Bad' },
                                { type: SP_BIND, turn: 10, detail: 'Row 2 3' },
                                { type: PARA, turn: 5 },
                                { type: NAO, turn: 99 },
                                { type: HUNGER, detail: '2x' },
                                { type: BAR_SLOT, turn: 3, detail: '2x TND' },
                                { type: BIND, turn: 5, detail: 'Row 3' },
                                { type: IMMU_EXCEPT, turn: 99, detail: 'Paralysis' }
                            ]
                        }
                    ]
                }
            ]
        },
        1943: {
            name: 'Senor Pink',
            type: 'INT',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'STR/QCK/PSY' },
                                { type: VS_RED, turn: 5, detail: 'STR/QCK/PSY' },
                                { type: SW_RED, turn: 5, detail: 'STR/QCK/PSY' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Senor Pink', 'INT'],
                    hp_: 2500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CHAIN_ATK_DOWN_MIN, turn: 5, detail: '<2.5' },
                                { type: BURN_P, turn: 5, detail: '20000' },
                                { type: NAO, turn: 99 },
                                { type: DEF_NULL, turn: 3 },
                                { type: DEF_PERC, turn: 6 },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        },
                        {
                            type: 'Interrupt - Set Chain (once)',
                            action: [
                                { type: SLOT_CHANGE, detail: 'S.BOMB' },
                                { type: SLOT_ATK_DOWN, turn: 10, detail: 'RCV/TND/WANO/BOMB/S.BOMB' }
                            ]
                        },
                        {
                            type: 'ON DEATH (0%)',
                            action: [
                                { type: DMG_NORMAL, detail: '200K' },
                            ]
                        }
                    ]
                }
            ]
        },
        2885: {
            name: 'Spandam',
            type: 'QCK',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'DEX/QCK/INT' },
                                { type: VS_RED, turn: 5, detail: 'DEX/QCK/INT' },
                                { type: SW_RED, turn: 5, detail: 'DEX/QCK/INT' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Fukuro', 'INT'],
                    hp_: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: ATK_DOWN, turn: 6 },
                                { type: STUN, detail: 'Row 2 3' },
                                { type: NAO, turn: 99 },
                                { type: DEF_PERC, turn: 6 },
                                { type: IMMU_EXCEPT, turn: 99, detail: 'Def Down' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Spandam', 'QCK'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_PARA },
                                { type: CD_REW, turn: 6, detail: 'Row 1' },
                                { type: CD_REW, turn: 2, detail: 'Row 2 3' },
                                { type: NAO, turn: 99 },
                                { type: DEF_THRES, turn: 8 },
                                { type: CHAIN_ATK_DOWN_MIN, turn: 5, detail: '<3' },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        },
                        {
                            type: 'Interrupt - Chain Boost (Add) (once)',
                            action: [
                                { type: CLEAR_BUFF, detail: 'Buff Only' },
                                { type: SP_BIND, turn: 10 }
                            ]
                        }
                    ]
                }
            ]
        },
        4191: {
            name: ['Arl', 'ong'],
            type: ['DEX', 'QCK'],
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'Shooter/Cerebral/Powerhouse' },
                                { type: VS_RED, turn: 5, detail: 'Shooter/Cerebral/Powerhouse' },
                                { type: SW_RED, turn: 5, detail: 'Shooter/Cerebral/Powerhouse' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Arlong Pirates', 'QCK'],
                    hp_: 2500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_BLOCK },
                                { type: NAO, turn: 99 },
                                { type: BURN_P, turn: 6, detail: '20000' },
                                { type: DEF, turn: 4 },
                                { type: IMMU_EXCEPT, turn: 99, detail: 'Paralysis' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Arlong', 'DEX'],
                    hp_: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: PARA, turn: 6, detail: 'Col R' },
                                { type: SP_BIND, turn: 6, detail: 'Col L' },
                                { type: BLOW_AWAY, turn: 2, detail: 'Row 3' },
                                { type: NAO, turn: 99 },
                                { type: DEF_PERC, turn: 6 },
                                { type: IMMU_EXCEPT, turn: 99, detail: 'Paralysis' }
                            ]
                        },
                        {
                            type: 'Interrupt - Dmg Reduction Not Applied (once)',
                            action: [
                                { type: DEF_PERC, turn: 6 }
                            ]
                        }
                    ]
                },
            ]
        }
    },

    // ========== Ace (QCK) ==========
    4206: {
        4115: {
            name: 'Tobi Roppo',
            type: 'INT',
            pos: 0,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'All' },
                                { type: VS_RED, turn: 5, detail: 'All' },
                                { type: SW_RED, turn: 5, detail: 'All' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Tobi Roppo', 'INT'],
                    hp: 1200000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_BLOCK },
                                { type: CD_REW, turn: 2, detail: 'Row 2 3' },
                                { type: NAO, turn: 99 },
                                { type: BURN_P, turn: 6, detail: '15000' },
                                { type: CHAIN_ATK_DOWN_MIN, turn: 5, detail: '<2.5' }
                            ]
                        },
                        {
                            type: 'Interrupt - Slot Change (once)',
                            action: [
                                { type: CD_REW, turn: 2, detail: 'Row 2 3' }
                            ]
                        }
                    ]
                }
            ]
        },
        3870: {
            name: 'Jack',
            type: 'QCK',
            pos: 1,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'Slasher/Powerhouse/Driven' },
                                { type: VS_RED, turn: 5, detail: 'Slasher/Powerhouse/Driven' },
                                { type: SW_RED, turn: 5, detail: 'Slasher/Powerhouse/Driven' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Jack', 'QCK'],
                    hp: 1500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SP_BIND, turn: 6, detail: 'Row 1' },
                                { type: STUN, detail: 'Row 2 3' },
                                { type: NAO, turn: 99 },
                                { type: DEF, turn: 7 },
                                { type: RESIL, turn: 7 },
                                { type: IMMU_EXCEPT, turn: 99, detail: 'Def Down' }
                            ]
                        },
                        {
                            type: 'Interrupt - Resilience Not Applied (once)',
                            action: [
                                { type: DEF_NULL, turn: 2 }
                            ]
                        },
                        {
                            type: 'Interrupt - Def Not Applied (once)',
                            action: [
                                { type: DEF_PERC, turn: 7 }
                            ]
                        }
                    ]
                }
            ]
        },
        3891: {
            name: 'Queen',
            type: 'STR',
            pos: 2,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'QCK/INT/PSY' },
                                { type: VS_RED, turn: 5, detail: 'QCK/INT/PSY' },
                                { type: SW_RED, turn: 5, detail: 'QCK/INT/PSY' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Queen', 'STR'],
                    hp: 2000000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SP_BIND, turn: 5, detail: 'Row 2 3' },
                                { type: NAO, turn: 99 },
                                { type: DEF_PERC, turn: 8 },
                                { type: DEF, turn: 4 },
                                { type: DEF_THRES, turn: 4 },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        }
                    ]
                }
            ]
        },
        3897: {
            name: 'King',
            type: 'DEX',
            pos: 3,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'STR/DEX/PSY' },
                                { type: VS_RED, turn: 5, detail: 'STR/DEX/PSY' },
                                { type: SW_RED, turn: 5, detail: 'STR/DEX/PSY' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['King', 'DEX'],
                    hp: 2500000,
                    atk_: 6000,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_CHANGE, detail: 'Bad' },
                                { type: BURN_P, turn: 7, detail: '20000' },
                                { type: CHAIN_ATK_DOWN_MIN, turn: 5, detail: '<3.5' },
                                { type: NAO, turn: 99 },
                                { type: DEF_NULL, turn: 2 },
                                { type: SLOT_ATK_DOWN, turn: 5, detail: 'Type' },
                                { type: SP_BIND, turn: 6 },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        }
                    ]
                }
            ]
        },
        3984: {
            name: 'Kaido',
            type: 'STR',
            pos: 4,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'Fighter/Free Spirit/Cerebral' },
                                { type: VS_RED, turn: 5, detail: 'Fighter/Free Spirit/Cerebral' },
                                { type: SW_RED, turn: 5, detail: 'Fighter/Free Spirit/Cerebral' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Kaido', 'STR'],
                    hp: 2000000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_PARA },
                                { type: CHAIN_LOCK, turn: 7, detail: '1.1x' },
                                { type: CHAIN_ATK_DOWN_MIN, turn: 4, detail: '<3.25' },
                                { type: NAO, turn: 99 }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Kaido', 'STR'],
                    hp: 3500000,
                    atk: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: ATK_DOWN, turn: 7 },
                                { type: NAO, turn: 99 },
                                { type: DEF_PERC, turn: 7 },
                                { type: DEF_THRES, turn: 7 },
                                { type: DEF, turn: 7 },
                                { type: TERRITORY, turn: 3 },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        }
                    ]
                }
            ]
        },
        4206: {
            name: 'Ace',
            type: 'PSY',
            pos: 5,
            guide: [
                {
                    stageNum: 1,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: CD_RED, turn: 5, detail: 'STR/QCK/INT' },
                                { type: VS_RED, turn: 5, detail: 'STR/QCK/INT' },
                                { type: SW_RED, turn: 5, detail: 'STR/QCK/INT' }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 2,
                    boss: ['Ace', 'PSY'],
                    hp: 2500000,
                    atk_: 6600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: ATK_DOWN, turn: 6 },
                                { type: PAIN, turn: 7, detail: '20000' },
                                { type: NAO, turn: 99 },
                                { type: BAR_SLOT, turn: 2, detail: '1x WANO' },
                                { type: TERRITORY, turn: 3 },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        }
                    ]
                },
                {
                    stageNum: 3,
                    boss: ['Ace', 'PSY'],
                    hp_: 3500000,
                    atk_: 9600,
                    detail: [
                        {
                            type: 'Preemp',
                            action: [
                                { type: SLOT_BLOCK },
                                { type: BIND, turn: 8, detail: 'Row 2 3' },
                                { type: CD_REW, turn: 3 },
                                { type: SP_BIND, turn: 6 },
                                { type: NAO, turn: 99 },
                                { type: SLOT_NEG, turn: 7, detail: 'RCV/SEMLA/EMPTY/TND/WANO' },
                                { type: AFFINITY_NULL, turn: 9 },
                                { type: DESP, turn: 8 },
                                { type: IMMU_ALL, turn: 99 }
                            ]
                        }
                    ]
                },
            ]
        }
    },
};
