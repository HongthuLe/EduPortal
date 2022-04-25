import styled from 'styled-components'

const FeaturedWrapper = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 9px -4px #000000; 
  box-shadow: 0px 0px 9px -4px #000000;
  padding: 8px;
  border-radius: 8px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      margin: 0;
    }
    
    i {
      font-size: 22px;
    }
  }

  .bottom {
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    .featuredChart {
      width: 140px;
      height: 140px;
    }

    .title {
      font-weight: 500;
      color: #9D9D9D;
      text-transform: uppercase;
    }

    .amount {
      margin: 0;
      font-size: 40px;
      color: #9873F0;
    }

    .description {
      color: #9D9D9D;
      font-size: 13px;
      text-align: center;
    }

    .summary {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item{
        text-align: center;

        .itemTitle {
          font-size: 14px;
          color: #9D9D9D;
          text-transform: capitalize;
        }

        .itemResult {
          display: flex;
          align-items: center;
          margin-top: 10px;
          font-size: 14px;

          &.positive {
            color: green;
          }
          &.negative {
            color: red;
          }
        }
      }
    }
  }
`
export default FeaturedWrapper