import styled from 'styled-components'

const DashboardWrapper = styled.div`
  flex: 6;

  .widgets,
  .charts {
    display: flex;
    gap: 16px;
  }

  .widgets {
    margin-top: 16px;
  }

  .charts {
    padding: 38px 6px;
  }

  .listContainer {
    padding: 8px;
    margin: 6px;
    -webkit-box-shadow: 0px 0px 9px -4px #000000; 
    box-shadow: 0px 0px 9px -4px #000000;
    
    h3 {
      margin: 0;
      text-transform: capitalize;
    }
  }
`
export default DashboardWrapper