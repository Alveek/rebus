<script>
  import { preloadMedia } from "./preload";
  import { exercises } from "./exercises";
  import {
    wellDonePhrasesSrc,
    correctGuess,
    wrongGuess,
    tryAgain
  } from "../sounds";

  preloadMedia();

  $: currentStep = 0;

  let showHint = true;

  function check() {
    if (exercises[currentStep]) {
      if (this.getAttribute("data-name") === exercises[currentStep].solution) {
        let currentWord = new Audio(
          `/exercises/papip/audio/${exercises[currentStep].solution}.mp3`
        );

        let wellDonePhrase = new Audio(
          wellDonePhrasesSrc[Math.floor(Math.random() * 7)]
        );

        correctGuess.play();
        correctGuess.onended = () => {
          currentWord.play();
          currentWord.onended = () => {
            wellDonePhrase.play();
            wellDonePhrase.onended = () => (currentStep += 1);
          };
        };
      } else {
        wrongGuess.play();
        wrongGuess.onended = () => tryAgain.play();
      }
    }
  }
</script>

<style>

</style>

<main>
  {#if exercises[currentStep]}
    <div class="header">
      <div class="header-container">
        <div class="switch">
          <input
            type="checkbox"
            id="switch1"
            class="switch__input"
            bind:checked={showHint} />
          <label for="switch1" class="switch__label">Подсказка</label>
        </div>
        <span class="ex-title">Упражнение №12</span>
      </div>

      <progress class="progress" max="19" value={currentStep} />
    </div>

    <div class="hint">
      <img
        class:transparent={!showHint}
        src="/exercises/papip/images/rebuses/papip-hint.png"
        alt="hint" />
    </div>

    <div class="container">
      {#each exercises[currentStep].variants as word, index}
        <img
          src="/exercises/papip/images/variant-images/{word}.png"
          class="img-{index + 1} img-var"
          data-name={word}
          on:click={check}
          alt="img" />
      {/each}

      <img
        src="/exercises/papip/images/rebuses/{exercises[currentStep].solution}.png"
        class="rebus"
        alt="img" />

    </div>
  {:else}
    <h1 style="text-align:center">Молодец!</h1>
    <img
      src="https://media.giphy.com/media/3o6fJ47X7rsRR9wDlu/giphy.gif"
      alt="" />
    <button on:click={() => (currentStep = 0)}>Повторить</button>
  {/if}
</main>
