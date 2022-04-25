import styled from 'styled-components'

const DataTableWrapper = styled.div`
  height: 600px;
  width: 100%;

  .cellWithImg {
    display: flex;
    align-items: center;

    .cellImg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 20px;
    }
  }

  .cellAction {
    display: flex;
    align-items: center;
    gap: 16px;

    .viewButton {
      padding: 6px 8px;
      border-radius: 4px;
      color: #001E6C;
      display: flex;
      background: #CCE5FF;
      cursor: pointer;
    }
    .deleteButton{
      padding: 6px 8px;
      border-radius: 4px;
      color: #9B0000;
      display: flex;
      background: #FF7272;
      cursor: pointer;
    }

    i {
      font-size: 20px;
      margin-right: 4px;
    }
  }
`

export default DataTableWrapper