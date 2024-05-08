import err from "../../assets/images/404.gif"

const ErrorPage = () => {
    return (
        <div className="min-w-full">
            <img className="w-full" src={err} alt="" />
        </div>
    );
};

export default ErrorPage;