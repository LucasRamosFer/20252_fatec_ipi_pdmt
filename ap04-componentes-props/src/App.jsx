import Pedido from "./Pedido"
const App = () => <div>
    <i class="fa-solid fa-hippo fa-2xl my-2 p-3"></i>
    <div className="container border rounded my-2 p-3">
        <div className="row">
            <div className="col-sm-12 col-lg-6 col-xxl-4">
                <Pedido 
                data="22/05/2025" 
                icone="fa-hdd" 
                titulo="SSD" 
                descricao="SSD Kingston"/>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-4">
                <Pedido 
                data="22/05/2025" 
                icone="fa-book" 
                titulo="Pequeno Príncipe" 
                descricao="Classico livro"/>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-4">
                <Pedido 
                data="22/05/2025" 
                icone="fa-headphones" 
                titulo="Headphone" 
                descricao="Headphone Bluetooth"/>
            </div>
            <div className="col-sm-12 col-lg-6 col-xxl-4">
                <Pedido 
                data="22/05/2025" 
                icone="fa-camera" 
                titulo="Câmera" 
                descricao="Câmera GoPro"/>
            </div>
        </div>
    </div>
</div>

export default App
