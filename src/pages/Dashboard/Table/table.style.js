import styled from 'styled-components'

const TableWrapper = styled.div`
  padding: 16px;

  .avatar {
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  /* .table {
    .tableCell {
      display: flex;
      align-items: center;

      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
        object-fit: cover;
      }
    }
  } */
`
export default TableWrapper