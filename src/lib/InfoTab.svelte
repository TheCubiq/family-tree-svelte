<script>
    import { infoData } from "./stores.js";

    import { fade, fly, slide } from "svelte/transition";

    export let name = "";
    export let id = "";
    export let parent = "No parent";
    export let description;
    export let birth = "No birth";

    const defaultInfo =
        "Ačkoli v současné době je příjmení rodu ustáleno na podobě „Lajsek“, až do druhé poloviny 19. století se v matrikách objevovaly jeho různé varianty jako Laisek, Laysek, Lejsek, Leisek, či Leysek, a to v závislosti na zapisovateli nebo na tom jak a kdo údaje do zápisu diktoval, nebo jak to vyplývalo ze starších písemných dokumentů. Proto jsou zde uvedeny varianty příjmení tak, jak byly u jednotlivých osob zapsány, u novorozenců pak podle varianty příjmení jejich otce, která byla zrovna tehdy zapsána. Proto není nijak výjimečné, že se sourozenci ve variantě příjmení mezi sebou mohou lišit. V některých případech lze pak pozorovat, jak se v té či oné větvi rodiny ta která varianta začala ustalovat. Rod byl od 17. až do poloviny 20. století usídlený v poměrně malé oblasti jihozápadně od Kutné Hory (Suchdol, Dobřeň, Roztěž, Malešov, Křesetice a Rápošov).";

    const toSafeValue = (value, defaultValue) => {
        return value ? value : defaultValue;
    };

    const toSafeDescription = (desc) => {
        const safeDesc = toSafeValue(desc, "žádné další informace");
        return typeof safeDesc === "string" ? [safeDesc] : safeDesc;
    };
</script>

{#if name == ""}
    <div class="sticky">
        {#key value}
            <!-- <div transition:fade>{value}</div> -->
            <h1>Rodokmen Rodu Lajsků</h1>
        {/key}
    </div>
    <div>
        <p>{defaultInfo}</p>
    </div>
{:else}
    {#key id}
        <div 
            in:fly={{ x: -50 }}
            class="sticky">
            <h1>{name}</h1>
            <h2>*{birth}</h2>
        </div>
    {/key}
    <div>
        {#each toSafeDescription(description) as paragraph}
            <p>{paragraph}</p>
        {/each}
    </div>
{/if}

<style>
    div {
        z-index: 99;
        /* position: fixed; */
        /* position: sticky; */
        /* inset: 1em;
        top: inherit; */

        margin: 2em auto;

        max-width: min(calc(100vw - 8em), 100ch);

        padding: 2em;

        border-radius: 0.6em;

        /* max-width: 80vw; */
        /* height: 50svh; */
        background-color: color-mix(
            in oklab,
            var(--color-bg),
            var(--color-text) 5%
        );
    }

    .sticky {
        position: sticky;
        bottom: 2em;
        padding-block: 0.6em;
        box-shadow: color-mix(in oklab, black, transparent 50%) 0px 7px 20px 2px;
    }

    .sticky > * {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        margin: 0;
        padding: .5em 0;
        font-size: 1.2em;
        text-align: start;
    }

    h1 {
        margin: 0;
        padding: 0.2em;
        font-size: 2em;
    }

    h2 {
        margin: 0;
        padding: 0;
        font-size: 1.5em;
        opacity: 0.7;
    }
</style>
