//Com a extensao Simple React Snippets instalada, utlize o atalho imr para importar o react automaticamente e sfc para criar o componente

import React from 'react'; 
/*
No caso abaixo vemos como importar diferentes componentes React vindos de um mesmo arquivo
*/
import Tarefa, { Imagem } from '../components/tarefa';


//Neste arquvio esta a demonstração da ultilização de varios components react dentro de uma mesma pagina.
const App = () => {
    return ( 
        <>
           <Tarefa />
        </>
     );
}
 
export default App;
