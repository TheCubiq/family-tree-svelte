<script>
    import { fly } from "svelte/transition";

    export let id = "";
    export let name = "No name";
    export let birth = "No birth";
    export let description = "No description";

    const toSafeValue = (value, defaultValue) => {
        return value ? value : defaultValue;
    };

    const toSafeDescription = (desc) => {
        const safeDesc = toSafeValue(desc, "žádné další informace");
        return typeof safeDesc === "string" ? [safeDesc] : safeDesc;
    };
</script>

{#key id}
    <div in:fly={{ x: -50 }} class="sticky">
        <h1>{name}</h1>
        <h2>*{birth}</h2>
    </div>
{/key}
<div>
    
    {#each toSafeDescription(description) as paragraph}
        <p>{paragraph}</p>
    {/each}
</div>

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
        padding: 0.5em 0;
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
