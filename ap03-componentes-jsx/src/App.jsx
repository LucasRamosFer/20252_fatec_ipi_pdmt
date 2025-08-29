// 1. Criar um component Reat que devolve um p que exibe o seu nome
// 2.Criar um componente Reacr que devolve um span que exibe a sua idade
//3 Ajustar o componente App para que ele exiba "Me chamo Ana e tenho 20 anos."
import './styles.css'
const App =  () => {
  const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8,  backgroundColor: "blueviolet", color: 'white', border: 'none', width: '100%', borderRadius: 8 }
  const textoDoRotulo = "Nome:"
  const obterTextoDoBotao = () => {
    return "Enviar"
  }
  const aoClicar = () => alert('Clicou')

  return  (

    <div 
      style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
        <label 
          className='rotulo'
          htmlFor="nome"
          style={{display: 'block', marginBottom: 4}}>
            {textoDoRotulo}
        </label>
        <input 
          type="text"
          id="nome"
          style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}} />
          <button
          onClick={() => aoClicar()}
          style={estilosBotao}>
          {obterTextoDoBotao()}
          </button>
    </div>
  )
}


export default App