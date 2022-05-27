import '../../../css/style.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function ProfLogin() {
  return (
    <div class="col mx-auto my-3">
        <button class="w-100 btn btn-outline-orange fs-2 py-4 fw-bold"
            onclick="window.location.href='./professor/loginProf.html'">Professor 👩‍🏫</button>
    </div>
  );
}

export default ProfLogin;
