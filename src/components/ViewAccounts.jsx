import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from "axios";


function ViewAccounts(){

    const [accounts,setAccounts]= useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url="http://localhost:9090/api/accounts"
         await axios.get(url)
        .then(function (responce) {
          const accounts=responce.data;
          console.log(accounts);
          accounts.forEach((newAccount) => 
            setAccounts((prevAccounts) => {
              return [...prevAccounts,newAccount]
            })
            

          )
          
        }).catch(function (error) {
            console.log(error);
        })
    }

    const updateTable =accounts.forEach(
      (account)=>

          
              <tr>
                  <td>{account.accId}</td>
                  <td>{account.accNumber}</td>
                  <td>{account.accName}</td>
                  <td>{account.rdAmount}</td>
                  <td>{account.village}</td>
                  <td>{account.mobileNo }</td>
              </tr>
          
      
  )



    return (<>
    
        <Button as="input" type="submit" value="Update" 
            onClick={handleSubmit}      
        />

        <Table striped>
        <thead>
          <tr>
            <th>id</th>
            <th>Account Number</th>
            <th>Account Name</th>
            <th>Amount</th>
            <th>Village</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>37014069395</td>
            <td>Vishal Ghorpade</td>
            <td>500</td>
            <td>Killari</td>
            <td>7038537533</td>
          </tr>

          {updateTable}
          
        </tbody>
    </Table>
    
    </>)

}
export default ViewAccounts;