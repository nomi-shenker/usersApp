import React , { useEffect, useState } from "react";
import { DataGrid, GridRowParams, GridToolbar } from '@mui/x-data-grid';
import { useNavigate  } from "react-router-dom";
import { StyledDataGrid } from "./UsersStyle";

const COLUMNS = [{field: 'name', headerName: 'NAME'}, 
                 {field: 'email', headerName: 'EMAIL'},
                 {field: 'companyName', headerName: 'COMPANY NAME'}]


interface UserModel {
    id : number,
    name: string;
    email:string,
    company: {name: string}
}

interface Data {
    columns: {field: string, headerName: string}[]
    rows : UserModel[]
}

export const Users =() =>{

   const [data, setData] = useState<Data>();

   const navigate = useNavigate();



   useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(data => {
           const gridData = {
            columns: COLUMNS,
            rows : data.map((item: UserModel)=> {return {id: item.id, name: item.name, email: item.email, companyName: item.company.name}})
           };
           setData(gridData);
           });
           
   },[]);

   const onRowClick =(params: GridRowParams)=>{
    navigate('/posts', { state: { userId: params.id }})
   }

     
     return(
      <div>
        <h1>USERS</h1>
        <div style={{ height: 400, width: '100%' }}>
          {data &&  <StyledDataGrid {...data} 
                    slots={{ toolbar: GridToolbar }}
                    onRowClick={onRowClick}
                 
          />}
        </div>
        </div>
     )

}