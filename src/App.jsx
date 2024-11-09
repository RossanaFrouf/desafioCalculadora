import { useState } from "react";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <main>
      <div class="texto">
        <img
          src="/calculadora.png"
          alt="Texto com a fonte do desenho do Bob Esponja escrito calculadora"
        />
      </div>
      {/* onChange evento de mudança, a cada mudança que houver dentro desse imput, ele será acionado */}
      <input
        placeholder="digite um numero"
        type="Number"
        onChange={capturandoPrimeiroValor}
      />
      <input
        placeholder="digite um numero"
        type="Number"
        onChange={capturandoSegundoValor}
      />
      <section class="botao">
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={multiplicacao}>x</button>
        <button onClick={divisao}>/</button>
      </section>

      <h3>{resultado}</h3>
      <div class="img1">
        <img src="/bob.png" alt="Imagem do Bob Esponja" />
      </div>
      <div class="img2">
        <img src="/patrick.png" alt="Imagem do Patrick Estrela" />
      </div>
    </main>
  );
}
