import '../../../css/style.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function RespLogin() {
  return (
    <div class="col mx-auto my-3">
        <button class="w-100 btn btn-outline-success fs-2 py-4 fw-bold"
            onclick="window.location.href='./responsavel/loginPais.html'">Responsável 👫</button>
    </div>
  );
}

export default RespLogin;
