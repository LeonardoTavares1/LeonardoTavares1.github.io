import React from 'react';
import './css/style.css';

const Contato = () => {
    return ( 
        <>
            <div className='main'>
                    <form className='meu_form'>
                        <p class="sexo" >Cadastro</p>
                        <input type="text" placeholder="Digite seu nome" />
                        <input type="tel" placeholder="Número de celular" />
                        <input type="email" placeholder="Digite seu e-mail" />
                        <input type="password" placeholder='Criar uma senha' />
                        <input type="password" placeholder='Repetir sua senha' />
                        <br />
                        <input type="submit" class="enviar" value="Enviar"  />
                    </form>
             
            </div>
        </>
     );
}
export default Contato;

