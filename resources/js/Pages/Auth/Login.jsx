import Guest from "../../Layouts/guest";


function Login() {
    return (
        <>
            <h2 className="font-bold mt-5">This is the Login page</h2>
        </>
    );
}

Login.layout = page => <Guest>{page}</Guest> ;

export default Login;
