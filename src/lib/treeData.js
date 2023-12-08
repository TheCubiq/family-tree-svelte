export const treeDataRaw = [
    // první generace
    {
        name: "Antonín Leysek/Leisek",
        id: "1A",
        birth: "1680",
    },
    // druhá generace
    {
        name: "(Jan) Václav Leysek/Laysek/Leisek",
        id: "2V",
        parent: "1A",
        mother: "Dorota",
        birth: "30.10.1712",
        place: "Suchdol",
    },
    // třetí generace
    {
        name: "Kateřina Laysková",
        id: "3K",
        parent: "2V",
        mother: "Kateřina Semrádová",
        birth: "13.1.1741",
        place: "Suchdol"
    },
    {
        name: "Jan Leysek/Laisek/Leisek",
        id: "3J",
        parent: "2V",
        birth: "19.1.1743",
        place: "Suchdol",
        description: [
            "Mistr zednický z Roztěže nedaleko Malešova.",
            "Jeho první manželkou byla Marie (Anna Alžběta) Martínková. Měli spolu 8 dětí",
            "S druhou manželkou, Barborou Patřilovou, měl dalších 7 dětí.",
            "Matriky zemřelých z 19. století pro farnost Bykáň jsou bohužel stále na matričním úřadě v Kutné Hoře, do archivu budou předány až v roce 2024. Další údaje k Janovi Leyskovi, jeho manželkám, resp. k jejich předčasně zemřelým potomkům tak není možné zatím doplnit."
        ]
    },
    {
        name: "Alžběta Laysková",
        id: "3A",
        parent: "2V",
        birth: "7.4.1745",
        place: "Suchdol",
    },
    // čtvrtá generace
    {
        name: "Marie Anna Leysková",
        id: "4M",
        parent: "3J",
        birth: "1.7.1771",
        place: "Roztěž",
        description: "Dožila se dospělosti a měla potomky",
        mother: "Marie (Anna Alžběta) Martínková"
    },
    {
        name: "Jan Leysek",
        id: "4J",
        parent: "3J",
        birth: "4.8.1773",
        place: "Roztěž",
        mother: "Marie (Anna Alžběta) Martínková"
    },
    {
        name: "Josef Leisek",
        id: "4Jo",
        parent: "3J",
        birth: "23.9.1775",
        place: "Roztěž",
        mother: "Marie (Anna Alžběta) Martínková"
    },
    {
        name: "Pavel František Leysek ",
        id: "4P",
        parent: "3J",
        birth: "1.2.1779",
        place: "Roztěž",
        mother: "Marie (Anna Alžběta) Martínková"
    },
    {
        name: "František Leysek ",
        id: "4F",
        parent: "3J",
        birth: "23.5.1784",
        place: "Roztěž",
        mother: "Marie (Anna Alžběta) Martínková",
        description: [
            "Panský hajný z Michovic u Zdeslavic č. p. 12 na Malešovském panství. Michovec je revír v lesích mezi Zdeslavicemi, hájenkou Újezd, rybníky Pastvickým a Vidlákem.",
            "Dne 8. 11. 1806 se oženil s Annou Kateřinou Hermannovou",
            "Měli spolu minimálně 5 synů, ale rodina se pravděpodobně vícekrát stěhovala"
        ]
    },
    {
        name: "Václav Leysek",
        id: "4V",
        parent: "3J",
        birth: "29.4.1787",
        place: "Roztěž",
        mother: "Marie (Anna Alžběta) Martínková"
    },
    {
        name: "Anna Leysková",
        id: "4A",
        parent: "3J",
        birth: "20.5.1790",
        place: "Roztěž",
        mother: "Marie (Anna Alžběta) Martínková"
    },
    {
        name: "Barbora Leysková",
        id: "4B",
        parent: "3J",
        birth: "20.5.1790",
        place: "Roztěž",
        mother: "Marie (Anna Alžběta) Martínková"
    },


    {
        name: "Anna Barbora Leysková",
        id: "4AB",
        parent: "3J",
        birth: "2.11.1798",
        place: "Roztěž",
        mother: "Barbora Patřilová"
    },
    {
        name: "Karel Boromej Leysek",
        id: "4K",
        parent: "3J",
        birth: "5.10.1799",
        place: "Roztěž",
        mother: "Barbora Patřilová"
    },
    {
        name: "Jan Nepomuk Leysek",
        id: "4JN",
        parent: "3J",
        birth: "6.5.1802",
        place: "Roztěž",
        mother: "Barbora Patřilová"
    },
    {
        name: "Barbora Leisková",
        id: "4BL",
        parent: "3J",
        birth: "27.10.1804",
        place: "Roztěž",
        mother: "Barbora Patřilová"
    },
    {
        name: "Anna Leysková",
        id: "4AL",
        parent: "3J",
        birth: "23.5.1808",
        place: "Roztěž",
        mother: "Barbora Patřilová"
    },
    {
        name: "Josef Laisek",
        id: "4JL",
        parent: "3J",
        birth: "29.4.1811",
        place: "Roztěž",
        mother: "Barbora Patřilová"
    },
    {
        name: "Marie Laisková",
        id: "4ML",
        parent: "3J",
        birth: "28.10.1814",
        place: "Roztěž",
        mother: "Barbora Patřilová"  
    },

    // pátá generace
    {
        name: "Jan Baptista Laisek",
        id: "5JB",
        parent: "4F",
        birth: "6.7.1807",
        place: "Malešov",
    },
    {
        name: "František Xaver Laisek",
        id: "5FX",
        parent: "4F",
        birth: "19.2.1810",
        place: "Malešov",
        description: [
            "Domkář a tkadlec z Vysoké. Později familiant z Hájku u Úmonína",
            "Dne 11. 2. 1832 se oženil s Annou Pospíšilovou",
            "Ač katolík, dne 15. 1. 1850 se oženil s evangeličkou Marií Hůlovou",
            "Matriky zemřelých z 19. století pro farnost Bykáň jsou většinou bohužel stále na matričním úřadě v Kutné Hoře, do archivu budou předány až v roce 2024. Další údaje k Františku Leyskovi a jeho manželce tak není možné zatím doplnit."
        ]
    },
    {
        name: "Karel Laisek",
        id: "5K", 
        parent: "4F",
        birth: "25.12.1817",
        death: "11.9.1855",
        place: "Zdeslavice u Malešova",
        description: [
            "Hrnčíř a baráčník v Rápošově č. p. 14 nedaleko Zbraslavic.",
            "Dne 9. 9. 1840 se oženil s Josefou Kobylákovou z Rápošova",
            "Karel Laisek zemřel dne 11. 9. 1855 na mozkovou mrtvici (Gehirnlähmung), s největší pravděpodobností náhle (SOA Praha, Matrika zemřelých Zbraslavice, 1843 – 1910, list 277, dig, list 141). Jeho žena zemřela dne 22. 4. 1879, zaopatřena svátostmi umírajících, na vodnatelnost (SOA Praha, Matrika zemřelých Zbraslavice, 1843 – 1910, list 292, dig, list 149)."
        ]
    },
    {
        name: "Josef Laisek",
        id: "5J",
        parent: "4F",
        birth: "7.1.1821",
        place: "Zdeslavice u Malešova",

    },
    {
        name: "Antonín Laisek",
        id: "5A",
        parent: "4F",
        birth: "10. 8. 1822",
        place: "Zdeslavice u Malešova",
    },
    // šestá generace
    {
        name: "Jan Nepomuk Lajsek",
        id: "6JN",
        parent: "5FX",
        birth: "5. 3. 1835",
        death: "28. 6. 1837",
        place: "Vysoká",
        mother: "Anna Pospíšilová",
        description: "Zemřel na psotník"
    },
    {
        name: "Jan Nepomuk Lajsek",
        id: "6JN2",
        parent: "5FX",
        birth: "5.11.1837",
        death: "11.3.1845",
        place: "Vysoká",
        mother: "Anna Pospíšilová",
        description: "Zemřel na krvácení do mozku."
    },
    {
        name: "Marie Laisková",
        id: "6M",
        parent: "5FX",
        birth: "23.4.1861",
        place: "Hájek"
    },
    {
        name: "Emilie Laisková",
        id: "6E",
        parent: "5FX",
        birth: "30.3.1864",
        place: "Hájek"
    },
    {
        name: "Barbora Laisková",
        id: "6B",
        parent: "5K",
        birth: "28.2.1838",
        place: "Rápošov č. p. 14",
        mother: "Josefa Kobyláková",
        description: [
            "narodila se jako nemanželská dcera, legitimizována byla sňatkem rodičů.",
            "Dělnice v Rápošově. Měla 6 nemanželských synů",
            "Úmrtí Barbory Lajskové se v matrikách Rápošova a okolí nepodařilo dohledat, je možné že dožila u některého z přeživších synů mimo farnost, a/nebo navíc v době, ze které jsou ještě matriky na matričním úřadě."
        ] 
    },
    {
        name: "Bedřich Laisek",
        id: "6B2",
        parent: "5K",
        birth: "30.10.1840",
        death: "27.12.1900",
        place: "Rápošov č. p. 14",
        mother: "Josefa Kobyláková",
        description: [
            "propuštěný vojín od střeleckého pluku dělostřelců bez naděje na graciál (tzn. dar z milosti vojenským vysloužilcům).",
            "Stal se po otci hrnčířem. Dne 6. 2. 1867 se oženil s Marií Černíkovou",
            "zaopatřen svátostmi umírajících, Bedřich Leisek zemřel na rakovinu žaludku (SOA Praha, Matrika zemřelých Zbraslavice, 1843 – 1910, list 307, dig. list 156). Jeho manželka zemřela dne 27. 1. 1904, zaopatřena svátostmi umírajících, na rozedmu plic (SOA Praha, Matrika zemřelých Zbraslavice, 1843 – 1910, list 309, dig. list 157)"
        ]

    },
    // sedmá generace
    {
        name: "Bedřich Laisek",
        id: "7B",
        parent: "6B2",
        birth: "10.9.1870",
        death: "27.12.1870",
        place: "Rápošov č. p. 14",
        description: "Zemřel na psotník",
        mother: "Marie Černíková"
    },
    {
        name: "Bedřich Leisek",
        id: "7B2",
        parent: "6B2",
        birth: "11.1.1872",
        place: "Rápošov č. p. 14",
        mother: "Marie Černíková"

    },
    {
        name: "Alois Gonzaga Leisek",
        id: "7AG",
        parent: "6B2",
        birth: "25.7.1874",
        death: "29.8.1878",
        place: "Rápošov č. p. 14",
        mother: "Marie Černíková"

    },
    {
        name: "František Sales Leisek",
        id: "7FS",
        parent: "6B2",
        birth: "21.12.1876",
        place: "Rápošov č. p. 14",
        mother: "Marie Černíková"
    },
    {
        name: "Božena Theodora Leisková",
        id: "7BT",
        parent: "6B2",
        birth: "22.4.1879",
        place: "Rápošov č. p. 14",
        mother: "Marie Černíková",
        description: [
            "Služebná. Dne 19. 10. 1903 se provdala za Josefa Kynycha (29. 8. 1879 Zbraslavice – 25. 10. 1907 Kurná Hora č. p. 414), nádeníka v Rápošově a poté v Kutné Hoře č. p. 414, nemanželského syna Antonie Kynychové, vdovy po Františku Masopustovi, nádeníku ve Zbraslavicích, dcery Jana Kynycha respektive Kohouta, nádeníka ve Zbraslavicích č. p. 3, a Marie Adrianové z Pohledě (SOA Praha, Matrika oddaných Zbraslavice, 1868 – 1910, list 408, dig. list 187). Když ovdověla, dne 30. 4. 1911 se v Kutné Hoře provdala za Josefa Žďárského (*1. 5. 1854 Podhořany č. p. 29), pekařského pomocníka a vojína c. k. 2. praporu myslivců, syna Jana Žďárského, chalupníka v Podhořanech č. p. 29, a Anny Havránkové z Podhořan.",
        ]
    },
    {
        name: "Emilie Leisková",
        id: "7E",
        parent: "6B2",
        birth: "1.6.1881",
        place: "Rápošov č. p. 14",
        mother: "Marie Černíková"
    },
    {
        name: "Aloisie Leisková",
        id: "7A",
        parent: "6B2",
        birth: "14.1.1884",
        death: "15.8.1886",
        place: "Rápošov č. p. 14",
        mother: "Marie Černíková",
        description: "Zemřela na ochrnutí plic.",
    },
    {
        name: "Anežka Leisková",
        id: "7AN",
        parent: "6B2",
        birth: "23.4.1886",
        death: "23.11.1969",
        place: "Rápošov č. p. 14",
        mother: "Marie Černíková",
        description: "Dne 21. 10. 1913 se v Kutné Hoře provdala za Emanuela Skálu (*5. 9. 1886 Kutná Hora č. p. 295), strojníka v Kutné Hoře č. p. 295, syna Emanuela Skály, strojnického mistra v Kutné Hoře č. p. 295, a Anny Košínské z Josefova č. p. 45."
    },
    {
        name: "Jan Leisek",
        id: "7J",
        parent: "6B",
        birth: "8.12.1856",
        place: "Rápošov č. p. 14",
        description: [
            "Kamnář. Dne 21. 11. 1880 se oženil s Annou Mejstříkovou z Rápošova",
        ]
    },
    {
        name: "Karel Boromej Lejsek",
        id: "7K",
        parent: "6B",
        birth: "18.10.1859",
        place: "Rápošov č. p. 14",
        description: [
            "Kolář v Křeseticích č. p. 109. Dne 16. 5. 1883 se oženil s Barborou Čermákovou",
            "Matriky obsahující úmrtí Karla Boromeje Lajska a jeho manželky Barbory Čermákové se stále nacházejí na matričním úřadě, a není k nim tedy online přístup."
        ]
    },
    {
        name: "Josef Leisek",
        id: "7JL",
        parent: "6B",
        birth: "12.2.1864",
        place: "Rápošov č. p. 14",
    },
    {
        name: "Antonín Laisek",
        id: "7A2",
        parent: "6B",
        birth: "25.1.1871",
        place: "Rápošov č. p. 14",
        description: [
            "byl z dvojčat, ale druhé se narodilo mrtvé, a je uvedeno v matrice zemřelých jako mrtvorozeně Barbory Lajskovy, „padlé svobodné nádenice“ (SOA Praha, Matrika zemřelých Zbraslavice, 1843 – 1910, list 286, dig. list 146)."
        ] 
    },
    {
        name: "František Lajsek",
        id: "7F",
        parent: "6B",
        birth: "20.5.1872",
        death: "4.6.1873",
        place: "Rápošov č. p. 14",
        description: "Zemřel na psotník.",
    },
    // osmá generace
    {
        name: "František Serafín Leisek",
        id: "8FS",
        parent: "7J",
        birth: "21.7.1882",
        death: "8.12.1882",
        place: "Rápošov č. p. 13",
        description: "Zemřel „náhlým katarem trubic plicních“.",
    },
    {
        name: "Marie Leisková",
        id: "8M",
        parent: "7J",
        birth: "16.1.1884",
        place: "Rápošov č. p. 13",
        description: "Dne 19. 10. 1910 se v Praze-Libni provdala za Jana Štěpinu (*29. 11. 1882 Lipoltice č. p. 17), zřízence elektrických drah v Libni č. p. 829, syna Františka Štěpiny z Přelouče a Anny Rokytové z Tupeš č. p. 11 (AHMP, Matrika oddaných Libeň, 1908 – 1912, list 162, dig. list 178).",
        mother: "Anna Mejstříková"
    },
    {
        name: "Josef Jan Laisek",
        id: "8JJ",
        parent: "7JL",
        birth: "8.5.1887",
        description: [
            "Vrchní posunovač c. k. státních drah v Praze VIII č. p. 829. Dne 11. 5. 1912 se v Praze v Chrámu Matky Boží před Týnem oženil s Pavlínou Zoubkovou (* 19. 4. 1887 Volšany č. p. 14), služebnou z Prahy I č. p. 24, dcerou Václava Zoubka, rolníka ve Volšanech č. p. 14, a Marie Marešové ze Stražovic č. p. 21 (AHMP, Matrika oddaných kostela Matky Boží před Týnem, 1911 – 1920, list 28, dig. list 31)."
        ]
    },
    {
        name: "Václav Lejsek",
        id: "8V",
        parent: "7JL",
        birth: "15.1.1898",
        death: "20.7.1898",
        place: "Rápošov č. p. 13",
        description: "Zemřel na katar střev",	
    },
    {
        name: "Josef Leisek",
        id: "8JL",
        parent: "7K",
        birth: "28.2.1884",
        place: "Křesetice č. p. 109",
        description: [
            "Dne 19. 9. 1911 se v Křeseticích oženil s Annou Neffeovou.",
        ]
    },
    {
        name: "Marie Laisková",
        id: "8ML",
        parent: "7K",
        birth: "18.9.1886",
        place: "Křesetice č. p. 109",
        description: [
            "Dne 14. 11. 1911 se provdala za Emanuela Ulricha.",
        ]
    },
    {
        name: "Růžena Lajsková",
        id: "8R",
        parent: "7K",
        birth: "30.8.1888",
        death: "18.7.1905",
        place: "Křesetice č. p. 109",
    },
    {
        name: "Augustin Lajsek",
        id: "8AU",
        parent: "7K",
        birth: "7.8.1890",
        death: "1951",

        place: "Křesetice č. p. 109",

        description: [
            "manželka: Anna Marie Rolletschek (*8.3.1894, Tandorf, - 28.10.1968 Křesetice č. p. 147)",
        ]
    },
    {
        name: "Anna Lajsková",
        id: "8A",
        parent: "7K",
        birth: "5.6.1892",

    },
    {
        name: "Karel Boromej Lajsek",
        id: "8K",
        parent: "7K",
        birth: "4.1.1894",
        place: "Křesetice č. p. 109",
        description: [
            "Dne 1. 3. 1919 se oženil s Annou Eisnerovou z Uhlířských Janovic.",
        ]
    },
    {
        name: "Emilie Antonie Lajsková",
        id: "8E",
        parent: "7K",
        birth: "3.10.1895",
        death: "22.8.1896",
        place: "Křesetice č. p. 109",
        description: [
            "Zemřela na eclampsia neonatorum (tzn. psotník).",
        ]
    },
    {
        name: "Václav Lajsek",
        id: "8V2",
        parent: "7K",
        birth: "28.9.1897",
        place: "Křesetice č. p. 109",
    },
    {
        name: "Alois Lajsek",
        id: "8A2",
        parent: "7K",
        birth: "25.5.1899",
        death: "22.10.1977",
        place: "Křesetice č. p. 109",
        description: [
            "Syn Karla Lajska (*18. 10. 1859 Rápošov č. p. 14) a Barbory Čermákové (*1858 Křesetice č. p. 109) z Křesetic č. p. 109 (SOA Praha, Matrika narozených Křesetice, 1883 – 1910, list 104, dig. list 106).",
            "Sklenářský dělník v Křeseticích č. p. 71 a poté č. p. 122. Dne 20. 1. 1924 se v chrámu sv. Bartoloměje v Kutné Hoře oženil s Johannou Markovou (2. 6. 1896 Křesetice č. p. 122 – 9. 10. 1959), dcerou Františka Marka (*26. 10. 1856), dělníka v Křeseticích č. p. 122, a Marie Pospíšilové (*18. 2. 1852) z Malešova.",
        ]
    },

    // devátá generace


    {
        name: "Augustin Lajsek",
        id: "9A",
        parent: "8AU",
        birth: "19.8.1919",
        death: "10.5.1945 (Kutná Hora)",
        place: "Mstišov",

    },
    {
        name: "Antonín Lajsek",
        id: "9A2",
        parent: "8AU",
        birth: "1925",
        place: "Mstišov",
        death: "1951 (Kutná Hora)",
    },
    {
        name: "Alfred Lajsek",
        id: "9A3",
        parent: "8AU",
        birth: "21.11.1916",
        death: "4.11.1993 (Kutná Hora)",
        place: "Mstišov",
        description: [
            "Manželka Anna Řezáčová Lajsková (*22.8.1919 Petrovice u Kutné Hory)",
            "Rodiče Anny Lajskové:",
            "Josef Řezáč - Dělník v Petrovicích u Kutné Hory",
            "Anna Navrátilová Řezáčová ",
        ]
    },
    {
        name: "Otýlie Lajsková Štěpánková",
        id: "9O2",
        parent: "8AU",
        birth: "30.5.1930",
        death: "30.7.2017 (Křesetice)",
        place: "Křesetice",
        description: [
            "manžel Jaroslav Štěpánek (*9.8.1931 Strašnice - 9.2.2007 Křesetice č.p. 147)",
        ]
    },
    






    {
        name: "Oldřich Alois Laisek",
        id: "9O",
        parent: "8A2",
        birth: "8.2.1925",
        death: "2.10.2001",
        place: "Křesetice č. p. 122",
        description: [
            "Prof. Ing. p.ped. Oldřich Alois Lajsek",
            "Malíř, designér, grafik a pedagog.",
            "Dne 14. 7. 1951 se na Národním výboru v Praze I oženil s Emilií Veselou (17. 5. 1934 Praha – 2016) z Prahy XX č. p. 1515, dcerou Josefa Veselého (5. 3. 1897 Bratřice – 4. 7. 1971), dělníka, a Emilie Procházkové (2. 10. 1902 Vestec – 12. 10. 1977), vedoucí prodejny.",
        ]
    },
    // desátá generace


    {
        name: "Jarmila Lajsková Šibravová",
        id: "10JL",
        parent: "9A3",
        birth: "8.6.1944",
        place: "Kutná Hora",
        mother: "Anna Řezáčová Lajsková",
        description: [
            "Manžel František Šibrava (*26.12.1938)",
        ]
    },

    {
        name: "Jiří Lajsek",
        id: "10J2",
        parent: "9A3",
        birth: "24.2.1947",
        death: "14.2.2010 (Kutná Hora)",
        place: "Kutná Hora",
        mother: "Anna Řezáčová Lajsková",
        description: [
            "Manželka Lubomíra Bláhová Lajsková (*7.6.1951 Kaňk - 10.3.2021 Kutná Hora)",
            "rodiče Lubomíry Lajskové:",
            "Miloslav Bláha (15.3.1922 Větrný Jeníkov – 23.5.1993 Kaňk)",
            "Lubomíra Kvapilová Bláhová (25.1.1929 Horní Moštěnice – 18.10.1992 Kutná Hora))",
        ]
    },

    {
        name: "Jaroslav Štěpánek",
        id: "10J3",
        parent: "9O2",
        birth: "13.10.1961",
        place: "Praha",
    },
    {
        name: "Jana Štěpánková",
        id: "10J4",
        parent: "9O2",
        birth: "26.9.1967",
        place: "Kutná Hora",
    },

    {
        name: "Jan Lajsek",
        id: "10J",
        parent: "9O",
        birth: "20.2.1958",
        place: "ÚNZ ONV Praha 7-Štvanice",
        mother: "Emilie Veselá",
        description: [
            "JUDr. Jan Lajsek",
            "Syn Olřicha Lajska (8. 2. 1925 Křesetice č. p. 122 – 2. 10. 2001 Praha) a Emilie Veselé (17. 5. 1934 – 2016).",
            "Úředník ministerstva zahraničních věcí a ministerstva kultury a posléze podnikový právník.",
            "Oženil se s Lenkou Brabcovou/Luxovou (*2. 1. 1962 Chlumec nad Cidlinou č. p. 165-III), dcerou Otakara Brabce (6. 7. 1938 Spišská Belá, okr. Poprad, Slovensko – 2010), technického úředníka, a Alenky Luxové rozené Zelenkové (*29. 1. 1939 Nový Bydžov-Chudonice), a mají spolu syny:",
        ]
    },
    // jedenáctá generace

    {
        name: "Lenka Šibravová Klazarová",
        id: "11L",
        parent: "10JL",
        birth: "13.11.1966",
        place: "Kutná Hora",
        description: [
            "Manžel: Ondřej Kazar (13.12.1966 Hradec Králové)",
        ]
    },

    {
        name: "Markéta Šibravová Suchánková",
        id: "11M",
        parent: "10JL",
        birth: "3.1.1976",
        place: "Kutná Hora",
        description: [
            "Manžel: Martin Suchánek (*24.8.1974)",
        ]
    },

    {
        name: "Lucie Lajsková Filipová",
        id: "11L2",
        parent: "10J2",
        birth: "23.3.1971",
        place: "Kutná Hora",
        description: [
            "Manžel: Aleš Filip (*28.4.1966 Kutná Hora)",
        ]
    },

    {
        name: "Stanislav Lajsek",
        id: "11S",
        parent: "10J2",
        birth: "25.5.1975",
        place: "Kutná Hora",
        description: [
            "Manželka: Markéta Loumová (*11.12.1975 Kutná Hora)",
            "Rodiče Markéty Loumové:",
            "Miroslav Louma (*Liberec)",
            "Hana Kaiserschatová Loumová (*Kutná Hora)",
        ]
    },

    {
        name: "Vladimír Lajsek",
        id: "11V",
        parent: "10J",
        birth: "1988",
        place: "Praha 5-Motol",
        mother: "Lenka Brabcová/Luxová",
        description: [
            "JUDr. Vladimír Lajsek, Ph.D., MBA",
            "Syn Jana Lajska (*20. 2. 1958 ÚNZ ONV Praha 7-Štvanice) a Lenky Brabcové/Luxové (*2. 1. 1962 Chlumec nad Cidlinou č. p. 165-III).",
            "Vystudoval práva na Právnické fakultě Univerzity Karlovy v Praze. Pracuje jako advokát v Praze."
        ]
    },
    {
        name: "Petr Lajsek",
        id: "11P",
        parent: "10J",
        birth: "1991",
    },

    // dvanáctá generace

    {
        name: "Filip Klazar",
        id: "12F",
        parent: "11L",
        birth: "11.1.1992",
        place: "Kutná Hora",
    },
    {
        name: "Šimon Klazar",
        id: "12S",
        parent: "11L",
        birth: "2.4.2000",
        place: "Kutná Hora",
    },
    {
        name: "Matěj Suchánek",
        id: "12M",
        parent: "11M",
        birth: "7.8.2003",
        place: "Kutná Hora",
    },
    {
        name: "Michaela Immanuela Filipová",
        id: "12M2",
        parent: "11L2",
        birth: "13.5.2004",
        place: "Kolín",
    },
    {
        name: "Kateřina Filipová",
        id: "12K",
        parent: "11L2",
        birth: "26.9.2011",
        place: "Kolín",
    },
    {
        name: "Jakub Lajsek",
        id: "12J",
        parent: "11S",
        birth: "7.7.2004",
        place: "Kolín",
        description: [
            "Naprogramoval tuto stránku :)",
        ]
    },
    {
        name: "Štěpán Lajsek",
        id: "12S2",
        parent: "11S",
        birth: "30.6.2009",
        place: "Kolín",
    },
    {
        name: "Vilém Lajsek",
        id: "12V",
        parent: "11S",
        birth: "5.4.2012",
        place: "Kolín",
    },

];
