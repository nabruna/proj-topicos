import '../../../css/style.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function AlunoLogin() {
    return (
        <div class="col mx-auto my-3">
            <button class="w-100 btn btn-outline-primary fs-2 py-4 fw-bold"
                onclick="window.location.href='./aluno/loginAluno.html'">Aluno 👨‍💻</button>
        </div>
    );
}

export default AlunoLogin;
