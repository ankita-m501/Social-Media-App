import { Link } from "react-router-dom";
import {auth} from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import '../App.css';
import { signOut } from "firebase/auth";
import { CreatePost } from "../pages/create-post/create-post";

export const Navbar = ()=>{

    const [user] = useAuthState(auth);
    const signUserOut = async()=>{
        await(signOut(auth));
    }

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                {!user?<Link to="/login">Login</Link>:
                <Link to="/createpost">Create Post</Link>}
            </div>
             <div className="user">
                {user && (
                    <>
                        <p>{user?.displayName}</p>
                        <img src={user?.photoURL || ""} width="100" height="100"/>
                        <button onClick={signUserOut}>Log out</button>
                    </>
                )}
            </div>
        </div>
    );
}