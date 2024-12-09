import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./../style/Account.css";
import axios from 'axios';

function Account(){

    const [data,setData]= useState({
        accNumber: "",
        accName: "",
        rdAmount: "",
        village: "",
        mobileNo: ""
    })
    

    const handleSubmit = async (e) => {
        console.log(data);
        e.preventDefault();
        const url="http://localhost:9090/api/accounts"
        const response = await axios.post(url,data)
        .then(function (response){
            alert(response.status);
            console.log(response.data);
        }).catch(function (error){
            alert(error);
        });
        setData({
            accNumber: "",
            accName: "",
            rdAmount: "",
            village: "",
            mobileNo: ""
        })
        
    }
    
    const handleChange = (e) => {
            const {name , value} = e.target;
            setData((prevData) => {
                 return {
                    ...prevData,
                    [name] : value
                 }
                })  
                    
    }
    
    return (
        <>

        <Form id="form">


            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon2">Account Number</InputGroup.Text>
                <Form.Control
                name='accNumber'
                onChange={handleChange}
                placeholder="Account Number"
                aria-label="Account Number"
                aria-describedby="basic-addon2"
                value={data.accNumber}
                />
            </InputGroup>

            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon2">Name</InputGroup.Text>
                <Form.Control
                onChange={handleChange}
                name="accName"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon2"
                value={data.accName}
                />
            </InputGroup>

            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon">Amount</InputGroup.Text>
                <Form.Control
                onChange={handleChange}
                name="rdAmount"
                placeholder="Amount"
                aria-label="Amount"
                aria-describedby="basic-addon2"
                value={data.rdAmount}
                />
            </InputGroup>

            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon2">Village</InputGroup.Text>
                <Form.Control
                onChange={handleChange}
                name='village'
                placeholder="Village"
                aria-label="Village"
                aria-describedby="basic-addon2"
                value={data.village}
                />
            </InputGroup>

            <InputGroup className="mb-2">
                <InputGroup.Text id="basic-addon2">Mobile Number</InputGroup.Text>
                <Form.Control
                onChange={handleChange}
                name='mobileNo'
                placeholder="Mobile Number"
                aria-label="Mobile Number"
                aria-describedby="basic-addon2"
                value={data.mobileNo}
                />
            </InputGroup>

            <Button as="input" type="submit" value="Submit" 
            
            onClick={handleSubmit}
            
            />
            
            
            
            
            
            <span> </span>
            
            
            <Button as="input" type="reset" value="Reset" 
                onClick={(e) => {
                    setData({
                        accNumber: "",
                        accName: "",
                        rdAmount: "",
                        village: "",
                        mobileNo: ""
                    })
                    e.preventDefault();
                }}
            />



        </Form>


    </>)
}   

export default Account;