import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
const App = () => {
    const pedidos = [
        {
            data: '21/08/2025',
            titulo: 'SSD',
            icone: 'fa-hdd',
            descricao: 'SSD Kingston'

        },

        {
            data: '24/08/2025',
            titulo: 'Concrete Maths',
            icone: 'fa-livro',
            descricao: 'Livro de Matemática'
        },

        {
            data: '22/08/2025',
            titulo: 'HEADPHONE',
            icone: 'fa-headphones',
            descricao: 'Headphone Bluetooth'
        },

        {
            data: '23/08/2025',
            titulo: 'Câmera',
            icone: 'fa-camera',
            descricao: 'Câmera GoPro'
        }

    ]
    const componenteFeedback = (
        <Feedback
            textOK="Já chegou"
            textNOK="Ainda não chegou"
            funcaoOK={() => alert("Obrigado pelo feedback")}
            funcaoNOK={() => alert("Vamos verificar")}
        />
    
        
    )
    const hippo = [
        {
            icone: 'fa-solid fa-hippo fa-3x'
        },

        {
             icone:'fa-solid fa-hippo fa-flip-horizontal fa-2x'

        },

        {
             icone:'fa-solid fa-hippo fa-md'
        },

        {
            icone: 'fa-solid fa-hippo fa-flip-horizontal fa-md'
        }

    ]

    
    return <div>
        <div>
            {
                hippo.map((hippos) => (
                    <i class={hippos.icone}></i>
                ))
            }
            
        </div>
        <div className="container border rounded my-2 p-3">
            <div className="row">
                {
                    pedidos.map((pedido) => (
                        <div className="col-sm-12 col-lg-6 col-xxl-4">
                            <Cartao cabecalho={pedido.data}>
                                <Pedido
                                    icone={pedido.icone}
                                    titulo={pedido.titulo}
                                    descricao={pedido.descricao} />
                                <div className="mt-3"></div>
                                {componenteFeedback}
                            </Cartao>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
}

export default App
