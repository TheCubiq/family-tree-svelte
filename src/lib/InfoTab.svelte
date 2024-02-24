<script>
  import { fly } from "svelte/transition";

  export let id = "";
  export let name = "No name";
  export let birth = "No birth";
  export let description = "Žádné další informace";
  export let death = "";
  export let place = "";

  const toSafeValue = (value, defaultValue = "") => {
    return value ? value : defaultValue;
  };

  const toSafeDescription = (desc) => {
    const safeDesc = toSafeValue(desc, "Žádné další informace");
    return typeof safeDesc === "string" ? [safeDesc] : safeDesc;
  };

  const toDateSafeFormatted = (dateData) => {
    let str = "";

    const { birth, death, place } = dateData;

    str += birth ? "*" + birth : "";
    str += place ? ` (${place})` : "";
    str += death ? " - †" + death : "";

    // if there's also place

    return str;
  };
</script>

{#key id}
  <div in:fly={{ x: -50 }} class="sticky">
    <h1>{name}</h1>
    <h2>{toDateSafeFormatted({ birth, death, place })}</h2>
    <!-- <i>dev id: {id}</i> -->
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

    /* --_mix:  */

    --_bg: var(--color-bg);

    background-color: var(--_bg);
    filter: brightness(1.4);

    /* background-color: color-mix(
            in oklab,
            var(--color-bg),
            var(--color-text) 5%
        ); */
  }

  .sticky {
    position: sticky;
    bottom: 2em;
    padding-block: 0.6em;

    --_clr-shadow: transparent;

    box-shadow: var(--_clr-shadow) 0px 7px 20px 2px;
    /* box-shadow: 0px 7px 20px 2px; */
  }

  
  @supports (color: color-mix(in oklab, white, black)) {
    div {
      --_bg: color-mix(in oklab, var(--color-bg), var(--color-text) 5%);
      filter: none;
    }
    .sticky {
        --_clr-shadow: color-mix(in oklab, black, transparent 50%)
    }
  }

  .sticky > * {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin: 0;
    padding: 0.5em 0;
    font-size: 1.2rem;
    text-align: start;
  }

  h1 {
    margin: 0;
    padding: 0.2em;
    font-size: 2rem;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    opacity: 0.7;
  }
</style>
