import React from 'react'
import { useForm } from "react-hook-form";
import react, { useState } from "react";

export const FromDemo1 = () => {

    const { register, handleSubmit } = useForm();
    const [output, setoutput] = useState()

    const submithandler = (data) => {
        console.log(data);
        setoutput(data)
    }

    return (
        <div>
            <h1 style={{ marginRight: "40px" }}>From demo</h1>
            <form onSubmit={handleSubmit(submithandler)}>
                <div>
                    <label>NAME : </label>
                    <input type="text"{...register("name")} />
                </div><br />
                <div>
                    <label>AGE : </label>
                    <input type="number" {...register("age")} />
                </div>
                <div>
                    <label>Gender</label><br />
                    MALE<input type="radio" value="Male" name="gender" {...register("gender")} />
                    &nbsp;  FEMALE : <input type="radio" value="FEMale" name="gender" {...register("gender")} />
                </div><br />
                <div>
                    <label>Skills</label><br />
                    <input type="checkbox" value="HTML" name="skills" {...register("skills")} />
                    &nbsp; HTML&nbsp;&nbsp;
                    <input type="checkbox" value="CSS" name="skills"{...register("skills")} />
                    &nbsp;CSS&nbsp;&nbsp;
                    <input type="checkbox" value="JS" name="skills"{...register("skills")} />
                    &nbsp; JS&nbsp;&nbsp;
                </div><br />
                <div>
                    <select {...register("city")}>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Surat">Surat</option>
                        <option value="Rajkot">Rajkot</option>
                    </select>
                </div><br />
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            {
                output &&

                <div>
                    <h1>OUTPUT</h1>
                    <h2>NAME = {output.name}</h2>
                    <h2>AGE = {output.age}</h2>
                    <h2>GENDER = {output.gender}</h2>
                </div>
            }
        </div>
    )
}
