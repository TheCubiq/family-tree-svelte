import { derived, writable, get } from "svelte/store";

export const infoData = writable({
    name: "Rodokmen Rodu Lajsků",
    birth: "cca 1680 - 2023",
    description: "Ačkoli v současné době je příjmení rodu ustáleno na podobě „Lajsek“, až do druhé poloviny 19. století se v matrikách objevovaly jeho různé varianty jako Laisek, Laysek, Lejsek, Leisek, či Leysek, a to v závislosti na zapisovateli nebo na tom jak a kdo údaje do zápisu diktoval, nebo jak to vyplývalo ze starších písemných dokumentů. Proto jsou zde uvedeny varianty příjmení tak, jak byly u jednotlivých osob zapsány, u novorozenců pak podle varianty příjmení jejich otce, která byla zrovna tehdy zapsána. Proto není nijak výjimečné, že se sourozenci ve variantě příjmení mezi sebou mohou lišit. V některých případech lze pak pozorovat, jak se v té či oné větvi rodiny ta která varianta začala ustalovat. Rod byl od 17. až do poloviny 20. století usídlený v poměrně malé oblasti jihozápadně od Kutné Hory (Suchdol, Dobřeň, Roztěž, Malešov, Křesetice a Rápošov).",
});

export const treeData = writable([]);
