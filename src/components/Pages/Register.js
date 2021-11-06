import Form from "../Form"
const Register = () => {
    return (
        <div className="h-screen flex justify-center">
            <Form page={'register'} endpoint={'http://localhost:3300/create_user'}/>
        </div>
    )
}

export default Register
