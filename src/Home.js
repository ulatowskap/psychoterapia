const Home = () => {
  const checkpoint = 400;
  let opacity = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
      opacity = 1 - currentScroll / checkpoint;
    } else {
      opacity = 0;
    }
    document.querySelector(".scrolling").style.opacity = opacity;
  });

  return (
    <div>
      <header className="header scrolling">
        <h1>Terapia skupiona na rozwiązaniach</h1>
        <button>Rozwiąż problem</button>
        <div className="words">
          <p>Brak pewności siebie</p>
          <p>Depresja</p>
          <p>Obniżenie nastroju</p>
          <p>Zaburzenia psychosomatyczne</p>
          <p>Problemy z nawiązywaniem kontaktów</p>
          <p>Stres</p>
        </div>
        <div className="reverse">
          <p>Zaburzenia lękowe</p>
          <p>Problemy małżeńskie</p>
          <p>Zachowania kompulsywne</p>
          <p>Fobia</p>
          <p>Utrata zainteresowań</p>
          <p>Zaburzenia odżywiania</p>
        </div>
      </header>
      <h4>O terapii</h4>
      <div className="section">
        <p>
          Cel: Rozwiązanie problemu <br /> Czas trwania: 4- 10 spotkań <br />
          Częstotliwość: Co 2 tygodnie + cotygodniowe zadania
        </p>

        <h5>O ZADANIACH:</h5>
        <p>
          Zazwyczaj polegają na wprowadzaniu zmiany w zachowaniu - w zależności
          od problemu zleca się: Zastąpienie starego zachowania nowym
          Intensyfikację starego zachowania Powtarzanie jakiegoś zachowania w
          określonych warunkach
        </p>
      </div>
      <h4>Kontakt</h4>
      <div class="section">
        <p>
          telefon :123456789 <br /> mail: przykladowymail@gmail.com
        </p>
      </div>

      <footer>footerek</footer>
    </div>
  );
};

export default Home;
