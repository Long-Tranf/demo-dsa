import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Điều hướng sang trang chính
        navigate('/login');
    };

    return (
        <div className="App">
            <div class="row vh-100 g-0">
                {/* left */}
                <div class="col-lg-6 position-relative d-none d-lg-block">
                    <div className="bg-holder">
                        <img src={logo} alt="" className="banner-signup"/>
                    </div>
                </div>
                {/* left */}

                {/* right */}
                <div class="col-lg-6">
                    <div class="row align-items-center justify-content-center h-100 g-0 px-4 px-sm-0">
                        <div class="col col-sm-6 col-lg-7 col-xl-6">
                            <div class="text-center mb-5">
                                <h3 class="fw-bold">Sign Up</h3>
                                <p class="text-secondary">Create your account</p>
                            </div>

                            {/* form */}
                            <form action="#">
                                <div class="input-group mb-3">
                                    <span class="input-group-text">
                                        <i class="bx bx-user"></i>
                                    </span>
                                    <input type="text" class="form-control form-control-lg fs-6"
                                        placeholder='Username'></input>
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">
                                        <i class="bx bx-envelope"></i>
                                    </span>
                                    <input type="text" class="form-control form-control-lg fs-6"
                                        placeholder='E-mail'></input>
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">
                                        <i class="bx bx-phone"></i>
                                    </span>
                                    <input type="number" class="form-control form-control-lg fs-6"
                                        placeholder='Phone'></input>
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">
                                        <i class="bx bx-lock-alt"></i>
                                    </span>
                                    <input type="password" class="form-control form-control-lg fs-6"
                                        placeholder='Password'></input>
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">
                                        <i class="bx bx-lock-open-alt"></i>
                                    </span>
                                    <input type="password" class="form-control form-control-lg fs-6"
                                        placeholder='Confirm Password'></input>
                                </div>


                                <button class="btn btn-primary btn-lg w-100 mb-3" onClick={handleLogin}>
                                    Register
                                </button>
                            </form>
                            {/* form */}
                            <div class="text-center">
                                <small>
                                    You have an account? <a href="#" class="fw-bold" onClick={handleLogin}>Login</a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
            </div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        </div>

    );
}

export default Signup;