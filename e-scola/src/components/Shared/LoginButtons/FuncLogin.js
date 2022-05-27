import '../../../css/style.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function FuncLogin() {
  return (
    <div class="col mx-auto my-3">
        <button class="w-100 btn btn-outline-warning fs-2 py-4 fw-bold"
            onclick="window.location.href='./funcionario/loginFunc.html'">Funcionário 👩‍🔧</button>
    </div>
  );
}

export default FuncLogin;
