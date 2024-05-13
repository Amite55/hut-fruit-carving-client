import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyAddedCraft from "./MyAddedCraft";

const MyArtCraft = () => {
    const {user} = useContext(AuthContext) || {};
    const [items, setItems] = useState([]);
    console.log(user);

    useEffect(() => {
        fetch(`https://hut-fruit-carving-server-side.vercel.app/myCrafts/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setItems(data)
        })
    }, [user])
    
    return (
        <>
        <div className='bg-[#8b8b8b] py-9 px-5 rounded-lg'> 
        <h2 className="text-3xl mx-auto font-mono my-6">My Added Art And Crafts</h2>
            <div className='grid md:grid-cols-3 max-w-6xl mx-auto gap-3 '>
                {
                    items.map(item => <MyAddedCraft key={item._id} item={item}></MyAddedCraft>)
                }
           </div>
        </div>
        </>
    );
};

export default MyArtCraft;