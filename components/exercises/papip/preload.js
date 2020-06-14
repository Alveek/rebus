function preloadSounds(soundsArr) {
  let sounds = [];

  for (let i = 0; i < soundsArr.length; i++) {
    sounds[i] = new Audio();
    sounds[i].src = soundsArr[i];
  }
}

function preloadImages(imgArray) {
  let images = [];

  for (let i = 0; i < imgArray.length; i++) {
    images[i] = new Image();
    images[i].src = imgArray[i];
  }
}

export function preloadMedia() {
  preloadSounds([
    "/exercises/papip/audio/lopata.mp3",
    "/exercises/papip/audio/pakety.mp3",
    "/exercises/papip/audio/panama.mp3",
    "/exercises/papip/audio/papa.mp3",
    "/exercises/papip/audio/pariki.mp3",
    "/exercises/papip/audio/paromy.mp3",
    "/exercises/papip/audio/parusa.mp3",
    "/exercises/papip/audio/pasha.mp3",
    "/exercises/papip/audio/pauki.mp3",
    "/exercises/papip/audio/pautina.mp3",
    "/exercises/papip/audio/pianino.mp3",
    "/exercises/papip/audio/pila.mp3",
    "/exercises/papip/audio/piramida.mp3",
    "/exercises/papip/audio/pirogi.mp3",
    "/exercises/papip/audio/pizhama.mp3",
    "/exercises/papip/audio/plamya.mp3",
    "/exercises/papip/audio/planeta.mp3",
    "/exercises/papip/audio/plody.mp3",
    "/exercises/papip/audio/pluses.mp3",
    "/exercises/papip/audio/pribory.mp3",
    "/sounds/pohvala/molodec.mp3",
    "/sounds/pohvala/otlichno.mp3",
    "/sounds/pohvala/pravilno.mp3",
    "/sounds/pohvala/takDerzhat.mp3",
    "/sounds/pohvala/tryAgain.mp3",
    "/sounds/pohvala/uTebyaHorosho.mp3",
    "/sounds/pohvala/vseVerno.mp3",
    "/sounds/pohvala/zamachatelno.mp3",
    "/sounds/pohvala/zdorovo.mp3",
    "/sounds/pohvala/correct.mp3",
    "/sounds/pohvala/wrong.mp3",
    "/sounds/pohvala/applause.mp3"
  ]);

  preloadImages([
    "/exercises/papip/images/rebuses/lopata.png",
    "/exercises/papip/images/rebuses/pakety.png",
    "/exercises/papip/images/rebuses/panama.png",
    "/exercises/papip/images/rebuses/papa.png",
    "/exercises/papip/images/rebuses/pariki.png",
    "/exercises/papip/images/rebuses/paromy.png",
    "/exercises/papip/images/rebuses/parusa.png",
    "/exercises/papip/images/rebuses/pasha.png",
    "/exercises/papip/images/rebuses/pauki.png",
    "/exercises/papip/images/rebuses/pautina.png",
    "/exercises/papip/images/rebuses/pianino.png",
    "/exercises/papip/images/rebuses/pila.png",
    "/exercises/papip/images/rebuses/piramida.png",
    "/exercises/papip/images/rebuses/pirogi.png",
    "/exercises/papip/images/rebuses/pizhama.png",
    "/exercises/papip/images/rebuses/plamya.png",
    "/exercises/papip/images/rebuses/planeta.png",
    "/exercises/papip/images/rebuses/plody.png",
    "/exercises/papip/images/rebuses/pluses.png",
    "/exercises/papip/images/rebuses/pribory.png",
    "/exercises/papip/images/variant-images/lopata.png",
    "/exercises/papip/images/variant-images/pakety.png",
    "/exercises/papip/images/variant-images/panama.png",
    "/exercises/papip/images/variant-images/papa.png",
    "/exercises/papip/images/variant-images/pariki.png",
    "/exercises/papip/images/variant-images/paromy.png",
    "/exercises/papip/images/variant-images/parusa.png",
    "/exercises/papip/images/variant-images/pasha.png",
    "/exercises/papip/images/variant-images/pauki.png",
    "/exercises/papip/images/variant-images/pautina.png",
    "/exercises/papip/images/variant-images/pianino.png",
    "/exercises/papip/images/variant-images/pila.png",
    "/exercises/papip/images/variant-images/piramida.png",
    "/exercises/papip/images/variant-images/pirogi.png",
    "/exercises/papip/images/variant-images/pizhama.png",
    "/exercises/papip/images/variant-images/plamya.png",
    "/exercises/papip/images/variant-images/planeta.png",
    "/exercises/papip/images/variant-images/plody.png",
    "/exercises/papip/images/variant-images/pluses.png",
    "/exercises/papip/images/variant-images/pribory.png",
    "images/slogi/a.png",
    "images/slogi/ba.png",
    "images/slogi/bo.png",
    "images/slogi/da.png",
    "images/slogi/dy.png",
    "images/slogi/gi.png",
    "images/slogi/ke.png",
    "images/slogi/ki.png",
    "images/slogi/la.png",
    "images/slogi/lo.png",
    "images/slogi/lyu.png",
    "images/slogi/ma.png",
    "images/slogi/mi.png",
    "images/slogi/my.png",
    "images/slogi/mya.png",
    "images/slogi/na.png",
    "images/slogi/me.png",
    "images/slogi/ni.png",
    "images/slogi/no.png",
    "images/slogi/pa.png",
    "images/slogi/pi.png",
    "images/slogi/ra.png",
    "images/slogi/ri.png",
    "images/slogi/ro.png",
    "images/slogi/ru.png",
    "images/slogi/ry.png",
    "images/slogi/sa.png",
    "images/slogi/sha.png",
    "images/slogi/shi.png",
    "images/slogi/sy.png",
    "images/slogi/ta.png",
    "images/slogi/ti.png",
    "images/slogi/ty.png",
    "images/slogi/u.png",
    "images/slogi/zha.png"
  ]);
}
