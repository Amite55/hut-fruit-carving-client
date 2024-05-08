
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default Root;