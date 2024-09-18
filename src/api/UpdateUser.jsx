import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';


export const UpdateUser = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm({
        defaultValues:async()=>{
            const res = await axios.get("https://node5.onrender.com/user/user/"+id);
            console.log(res.data.data);
            return res.data.data
        }
    
    })
    
    const submithandler = async(data)=>{
        console.log(data);
        try{
            delete data._id;
            const res = await axios.put("https://node5.onrender.com/user/user/"+id,data);
            console.log(res);
            navigate("/apidemo1");
            }catch(err){
                console.log(err);
            }
    }
  return (
    <div>
        <h1>UPDATE USER</h1>
        <form onSubmit={handleSubmit (submithandler)}>
            <div>
            <label htmlFor="name">Name</label>:
            <input type="text" {...register("name")} />
            </div>
            <div>
                <label htmlFor="age">age</label>
                <input type='text'{...register("age")}/>
            </div>
            <div>
            <input type="submit" value="UPDATE USER"/>
        </div>
        </form>
    </div>
  )
}
