import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { addDoc,collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import '../../App.css';
import { useNavigate } from "react-router-dom";

interface createFormData{
    title: string,
    description: string
}

export const CreateForm = ()=>{

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title!"),
        description: yup.string().required("You must add a description!"),
    });

   
    const {register, 
        handleSubmit,
        formState: {errors}
    } = useForm<createFormData>({
        resolver: yupResolver(schema),
    });

    const postRef = collection(db, "posts");

    const onCreatePost = async(data : createFormData)=>{
        await addDoc(postRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid
        })
        navigate("/");
    }
    return(
        <form className= "form-container" onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="title..." {...register("title")}/>
            <p style={{color: "red", font: "arial"}}>{errors.title?.message}</p>
            <textarea placeholder="description" {...register("description")}/>
            <p style={{color: "red", font: "arial"}}>{errors.description?.message}</p>
            <input type="submit"/>
        </form>
    );
}