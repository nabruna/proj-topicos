import '../../css/style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AlunoLogin from './LoginButtons/AlunoLogin';
import ProfLogin from './LoginButtons/ProfLogin';
import FuncLogin from './LoginButtons/FuncLogin';
import RespLogin from './LoginButtons/RespLogin';

function LoginButtons() {
    return (
        <div classname="LoginButtons" class="row row-cols-1 row-cols-md-2">
            <AlunoLogin />
            <ProfLogin />
            <RespLogin />
            <FuncLogin />
        </div>
    );
}

export default LoginButtons;
