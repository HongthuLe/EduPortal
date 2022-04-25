import styled from 'styled-components'

const WidgetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 6px 6px 0 6px;
  padding: 8px;
  -webkit-box-shadow: 0px 0px 9px -4px #000000; 
  box-shadow: 0px 0px 9px -4px #000000;
  border-radius: 8px;
  height: 120px;

  .left, 
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .object {
      font-weight: 600;
      text-transform: uppercase;
      font-size: 18px;
    }

    .counter {
      font-size: 32px;
      font-weight: 200;
    }

    .link {
      width: max-content;
      font-size: 13px;
      font-weight: 500;
      border-bottom: 1px solid #9D9D9D;
    }

    .percentage {
      display: flex;
      align-items: center;
      
      &.positive {
        color: green;
      }
      &.negative {
        color: red;
      }
    }

    i {
      font-size: 22px;
      padding: 8px;
      border-radius: 4px;
      align-self: flex-end;
    }
  }
`
export default WidgetWrapper
