import React from 'react'
import { useForm } from 'react-hook-form';


export const FromDemo2 = () => {
    const {register,handleSubmit ,formState:{errors}} = useForm();
    console.log('errorr........',errors);
    const submithandler = (data) =>{
        console.log("data.....",data)
    }

    const validationschema = {
        age:{
            required:{
                value:true,
                message:"please enter the age .."
            },
            min:{
                value:18,
                message:"Age should be greater than 18"
            },
            max:{
                value:60,
                message:"Age should be less than 60"
            }

        },
        email:{
            required:{
                value:true,
                message:"please enter the email..."
            },
            minLength:{
                value:5,
                message:"Email should be greater than 5"
            },
            maxLength:{
                value:20,
                message:"Email should be less than 20"
            },
        }
    }
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Form Demo 2</h1><br/>
        <form onSubmit={handleSubmit(submithandler)}>
        <div>
            <label>NAME : </label>&nbsp;
            <input type="text" {...register("name",{required:{value:true,message:"please enter the name...."}})}/>
            {
                errors.name && <span>{errors.name.message}</span>
            }
        </div><br/>
        <div>
            <label>AGE : </label>&nbsp;
            <input type="number" {...register("age",validationschema.age)}/>
            {
                errors.age && <span>{errors.age.message}</span>
            }
        </div><br/>
        <div>
            <label>EMAIL : </label>&nbsp;
            <input type="text" {...register("email",validationschema.email)}/>
            {
                errors.email && <span>{errors.email.message}</span>
            }
        </div><br/>
        <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
