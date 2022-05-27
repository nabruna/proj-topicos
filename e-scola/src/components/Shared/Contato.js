import '../../css/style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Contato() {
  return (
    <div class="d-flex mb-5 justify-content-center">
      <div class="card mt-5 mb-5 p-4">
        <h2 class="my-2">Contato</h2>

        <p>Telefone: (41)3322-4455</p>
        <p><a href="mailto:e-scola@e-scola.com">e-scola@e-scola.com</a></p>
        <p>R. Vicente Machado, 404 - Curitiba, Paraná, Brasil</p>
      </div>
    </div>
  );
}

export default Contato;
