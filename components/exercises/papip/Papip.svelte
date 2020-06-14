<script>
  import { preloadMedia } from "./preload";
  import { exercises } from "./exercises";
  import {
    wellDonePhrasesSrc,
    correctGuess,
    wrongGuess,
    tryAgain,
  } from "../sounds";

  preloadMedia();

  $: currentStep = 0;

  let showHint = true;

  function getRebus() {
    let arr = [];

    exercises[currentStep].rebus.forEach((element) => {
      arr.push(element.eng);
    });

    return arr.join("");
  }

  function check() {
    if (exercises[currentStep]) {
      if (this.getAttribute("data-name") === getRebus()) {
        let currentWord = new Audio(`/exercises/papip/audio/${getRebus()}.mp3`);

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
  .header {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    height: 70px;
  }

  .header-container {
    height: 62px;
    /* width: 100%; */
    padding: 0 40px;
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    align-content: center;
  }

  .ex-title {
    font-size: 18px;
    color: #375eea;
  }

  main {
    display: grid;
  }

  input {
    margin: 0;
  }

  .hint {
    justify-self: center;
    margin: 17px 0 7px;
  }

  .hint img {
    height: 101px;
  }

  img {
    max-width: 100%;
  }

  .container {
    width: 1200px;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;
    align-items: center;
    grid-template-areas:
      "img-1 rebus img-2"
      ". rebus ."
      "img-3 rebus img-4";
  }

  .img-1 {
    grid-area: img-1;
    margin-bottom: 120px;
    justify-self: start;
  }
  .img-2 {
    grid-area: img-2;
    margin-bottom: 120px;
    justify-self: end;
  }
  .img-3 {
    grid-area: img-3;
    justify-self: start;
  }
  .img-4 {
    grid-area: img-4;
    justify-self: end;
  }
  .rebus {
    grid-area: rebus;
    /* align-content: center; */
    display: flex;
    margin: 0 50px;
  }

  .rebus-text {
    display: block;
    font-size: 136px;
    font-weight: 300;
    align-self: flex-start;
    transform: translateY(-32px);
  }

  .rebus-image {
    height: 136px;
  }

  .img-var {
    width: 180px;
    border-radius: 7px;
    transition: all 0.1s linear;
    padding: 10px;
  }

  .img-var:hover {
    cursor: pointer;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }

  .img-var:active {
    transform: translateY(0px);
    box-shadow: none;
  }

  .appear {
    animation-duration: 1s;
    animation-name: appear;
  }

  .transparent {
    opacity: 0;
    transition: all 0.2s linear;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 100%;
    }
  }

  @media (max-width: 1400px) {
    .container {
      width: 1000px;
    }

    .header {
      height: 58px;
    }

    .header-container {
      height: 50px;
    }

    .img-var {
      width: 130px;
    }

    .rebus {
      height: 110px;
    }

    .hint img {
      height: 85px;
    }

    .img-1 {
      margin-bottom: 120px;
    }
    .img-2 {
      margin-bottom: 120px;
    }

    .rebus-text {
      font-size: 100px;
      transform: translateY(-24px);
    }

    .rebus-image {
      height: 100px;
    }
  }
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

      <!-- <img src="/exercises/papip/images/rebuses/{exercises[currentStep].rebus}.png" class="rebus" alt="img"> -->
      <div class="rebus">
        {#each exercises[currentStep].rebus as slog, index}
          {#if !slog.image}
            <span class="rebus-text">{slog.ru.toUpperCase()}</span>
          {:else}
            <img
              class="rebus-image"
              src="/images/slogi/{slog.eng}.png"
              alt="" />
          {/if}
        {/each}
      </div>

    </div>
  {:else}
    <h1 style="text-align:center">Молодец!</h1>
    <img
      src="https://media.giphy.com/media/3o6fJ47X7rsRR9wDlu/giphy.gif"
      alt="" />
    <button on:click={() => (currentStep = 0)}>Повторить</button>
  {/if}
</main>
