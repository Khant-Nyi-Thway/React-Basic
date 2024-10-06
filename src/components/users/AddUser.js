import React, { useState } from 'react';

function AddUser(props) {

    let [image, setImage] = useState("");
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [cell, setCell] = useState("");
    let [uuid, setUuid] = useState("");

    let changeImageHandler = (event) => {
        setImage(event.target.value);
    } 

    let changeNameHandler = (e) => {
        setName(e.target.value);
    }

    let changePhoneHandler = (event) => {
        setPhone(event.target.value);
    }

    let changeCellhandler = (event) => {
        setCell(event.target.value);
    }

    let changeUuidHandler = (event) => {
        setUuid(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let NewUserForm = {
            name: name,
            image: image,
            phone: phone,
            cell: cell,
            uuid: uuid

        }
        props.addPpl(NewUserForm);
    }

    return (
        <div>
            <div className="card bg-dark px-2 my-5">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label text-white">Image</label>
                        <input type="text" className="form-control" id="image"  onChange={changeImageHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-white">Name</label>
                        <input type="text" className="form-control" id="name"  onChange={changeNameHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label text-white">Phone</label>
                        <input type="tel" className="form-control" id="phone"  onChange={changePhoneHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cell" className="form-label text-white">Cell</label>
                        <input type="tel" className="form-control" id="cell" onChange={changeCellhandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="uuid" className="form-label text-white">Uuid</label>
                        <input type="text" className="form-control" id="uuid" onChange={changeUuidHandler}/>
                    </div>
                    <button type="submit" className="btn btn-primary float-end btn-sm mb-3">Create</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;