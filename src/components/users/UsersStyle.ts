import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';


export const StyledDataGrid = styled(DataGrid)`
   cursor: pointer;
   align-items: center;
  .MuiDataGrid-cell  {
    max-width: 230px !important;
    min-width: 230px !important;

  }
  .MuiDataGrid-columnHeader{
    max-width: 230px !important;
    min-width: 230px !important;
    .MuiDataGrid-columnHeaderTitle{
        font-weight: bold;
    }
    
  }
  .MuiDataGrid-main { 
    width:90%;
  }
  .MuiButtonBase-root{
    color:black;
  }
  
`