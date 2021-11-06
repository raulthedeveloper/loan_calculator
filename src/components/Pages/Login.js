import Form from "../Form"

const Login = () => {
    return (
        <div className="h-screen flex justify-center">
            <Form page={'login'} endpoint={'http://localhost:4000/login'}/>
        </div>
    )
}

export default Login
