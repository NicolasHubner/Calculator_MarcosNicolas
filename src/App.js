import './App.css';
import React, { useState } from 'react';
import Button from './components/Button'
import Tela from './components/Tela';

function App() {
  
  const [args, setArgs] = useState(
    {
      valorInicial: 0,
      valorTelaSuperior: '',
      operador: '',
    }
    )
    
  const numberButtons = [1,2,3,4,5,6,7,8,9, '.',0, '=']
  const operands = ["+", "-", "x", "/"]
  
  const handleChange = ({target}) => {
    if (args.valorInicial === 0 ) {
      setArgs({ 
        ...args,
        [target.name]: target.value
      })
    } else {
    setArgs({ 
      ...args,
      [target.name]: args.valorInicial + target.value
    })
  }
  }
  
  const operatorChange = ({target}) => {
    // if(!args.valorInicial === 0){
      setArgs({
        ...args,
        valorTelaSuperior: args.valorInicial + target.value,
        operador: target.value,
        valorInicial: 0
      })
    // }
  }

  return (
    <main>
    <h1>Calculador Nicolas e Marcos</h1>
    <section className="calculator__main">
      <Tela valorBottom={args.valorInicial} valorTop={args.valorTelaSuperior} operator={args.operador} />
      <div className="numbers__operators">
      <div className="numbers">
      {numberButtons.map((number) => <Button key={number} value={number} nome="valorInicial" operator={operatorChange} onClickFunction={handleChange} />)}
      </div>
      <div className="operand">
      {operands.map((operand) => <Button nome="operador" key={operand} value={operand} onClickFunction={operatorChange}/>)}
      </div>

      </div>
    </section>
    </main>
  );
}

export default App;


// Calculadora Marcos  e NIcolas

// utilizar useState

// o que fazer
// 1. Componentizar a calculadora element
// 1.1 fazer uma tela que mostrará um valor baseado no que é clicado 
// 1.2 fazer componente botão que recebe um valor e mostra esse valor no botão. 
// 1.3 esse botão tb receberá uma função e, dependendo do tipo (operador ou operando) vai realizar uma tarefa diferente:
// 1.3.1 se for número, vai concatenar com o número atualmente na tela e exibir
// 1.3.2 se for operador, vai salvar o número atualmente na tela numa variável, e salvar qual operador foi pressionado 
// 1.3.2.1 se já houver algum operador salvo, realizar a conta utilizando os valores salvos anteriormente 
// 1.4 implementar operador "," que na calculadora deve aparecer como "." e não pode ser usado mais de uma vez


// como fazer
// 1.1 Criar tela que utilizará do estado para mostrar quais os números cliclados e caso tiver alguma alteração de algum elemento (+,-,*,/,C,=), realizar a função de acordo com o elemento clicado.
// 1.2 A partir do clique do operador, mandar o valor do estado para a tela na parte de cima para poder ficar "demonstrado" o valor prévio digitado
// 1.3 O botao de operador deverá ter uma função e um "value" que será utilzado como parâmetro na função executada
// 1.3.1 Se tiver um operador na tela de cima, deverá executar a operação do primeiro operador, caso contrário apenas concatenar o próximo valor digitado
// 1.4 Toda vez que o for atualizar o estado deverá verificar antes da atualização se possui, um ".". caso possui exibir um alerta que não pode adicionar mais ".// 1.4 Ao se clicar em ",", trocar o valor para "." e desabilitar o botão , enquanto o valor salvo tiver um ",". 