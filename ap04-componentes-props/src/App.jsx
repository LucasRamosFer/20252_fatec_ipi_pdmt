import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
const App = () => {
    const componenteFeedback = (
        <Feedback
            textOK="Já chegou"
            textNOK="Ainda não chegou"
            funcaoOK={() => alert("Obrigado pelo feedback")}
            funcaoNOK={() => alert("Vamos verificar")}
        />
    )
    return <div>
        <div>
            <i class="fa-solid fa-hippo fa-3x"></i>
            <i class="fa-solid fa-hippo fa-flip-horizontal fa-2x"></i>
            <i class="fa-solid fa-hippo fa-md"></i>
            <i class="fa-solid fa-hippo fa-flip-horizontal fa-md"></i>

        </div>
        <div className="container border rounded my-2 p-3">
            <div className="row">
                <div className="col-sm-12 col-lg-6 col-xxl-4">
                    <Cartao cabecalho="22/08/2025">
                        <Pedido
                            icone="fa-hdd"
                            titulo="SSD"
                            descricao="SSD Kingston" />
                            <div className="mt-3"></div>
                            {componenteFeedback}
                    </Cartao>

                </div>
                <div className="col-sm-12 col-lg-6 col-xxl-4">
                    <Cartao cabecalho="22/08/2025">
                        <Pedido
                            icone="fa-book"
                            titulo="Pequeno Príncipe"
                            descricao="Classico livro" />
                            <div className="mt-3"></div>
                        {componenteFeedback}
                    </Cartao>

                </div>
                <div className="col-sm-12 col-lg-6 col-xxl-4">
                    <Cartao cabecalho="22/08/2025">
                        <Pedido
                            icone="fa-headphones"
                            titulo="Headphone"
                            descricao="Headphone Bluetooth" />
                            <div className="mt-3"></div>
                        {componenteFeedback}
                    </Cartao>

                </div>
                <div className="col-sm-12 col-lg-6 col-xxl-4">
                    <Cartao cabecalho="22/08/2025">
                        <Pedido
                            icone="fa-camera"
                            titulo="Câmera"
                            descricao="Câmera GoPro" />
                            <div className="mt-3"></div>
                        {componenteFeedback}
                    </Cartao>

                </div>
            </div>
        </div>
    </div>
}

export default App
