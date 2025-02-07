import axios from 'axios'
import React, { useEffect } from 'react'
import react, { useState } from "react";
import { MyLoader } from '../components/MyLoader';
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ApiDemo1 = () => {

    const [users, setusers] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [show, setshow] = useState(false);
    const [singleUser, setsingleUser] = useState({});
    const handleClose = () => setshow(false);
    const getApiCall = async () => {

        setisLoading(true);
        const res = await axios.get("https://node5.onrender.com/user/user");
        console.log("axios response...", res); //axios response object
        console.log("axios response data...", res.data); //axios response data
        console.log("axios response data name...", res.data.message); //axios response data name
        console.log(res.data.data);
        setusers(res.data.data);
        setisLoading(false);
    }
    const deleteUser = async (id) => {
        const res = await axios.delete(
            `https://node5.onrender.com/user/user/${id}`
        );
        console.log(".................",res);
        
        if (res.status === 204) {
            toast.success('user delete successfully !!!!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
           
           
        }
        }
        useEffect(() => {
            getApiCall();
           }, []);

        const getuserdetail = async(id)=>{
            const res = await axios.get("https://node5.onrender.com/user/user/" + id);
            console.log("axios res.....",res);
            setsingleUser(res.data.data);
            setshow(true);
        
        }
        return (
            
            <div>
                <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
            />
                 {isLoading && <MyLoader />}
                <h1 style={{ marginRight: "40px" }}>API DEMO 1</h1>
                {/* <button onClick={() => { getApiCall(); }}>Get Api Call</button> &nbsp;&nbsp;&nbsp;&nbsp; */}


                
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>AGE</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => {
                            return (
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.isActive ? "Active" : "Not Active"}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                deleteUser(user._id);
                                            }}
                                            className="btn btn-danger"
                                        >
                                            DELETE
                                        </button>
                                        <button onClick={()=>{getuserdetail(user._id)}} className='btn btn-waring' style={{marginLeft:"3px"}}>DETAIL</button>
                                        <Link  to={`/updateuser/${user._id}`}
                    className="btn btn-primary"
                    style={{ marginLeft: "2px" }}>UPDATE</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleUser?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email: {singleUser?.email}</p>
          <p>Age: {singleUser?.age}</p>
          <p>Status: {singleUser?.isActive ? "Active" : "Not Active"}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
