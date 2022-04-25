import styled from 'styled-components'

const SingleStudentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;

  .container {
    flex: 6;

    .top {
      padding: 16px;
      display: flex;
      gap: 20px;

      .left {
        flex: 1;
        -webkit-box-shadow: 0px 0px 9px -4px #000000; 
        box-shadow: 0px 0px 9px -4px #000000;
        padding: 20px;
        position: relative;

        h1 {
          margin: 0 0 16px 0;
        }

        .editBtn {
          position: absolute;
          top: 0;
          right: 0;
          padding: 6px;
          font-size: 12px;
          color: red;
          background: yellow;
          cursor: pointer;
          border-radius: 0 0 0 5px;
        }

        .item {
          display: flex;
          gap: 20px;

          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
          }

          .details {
            .itemTitle {
              margin-bottom: 10px;
              color: #555;
            }

            .detailItem {
              margin-bottom: 10px;
              font-size: 14px;

              .itemKey {
                font-weight: 500;
                color: gray;
                margin-right: 10px;
                font-size: 17px;
              }

              .itemValue {
                font-weight: 400;
              }
            }
          }
        }
      }

      .right {
        flex: 2;
      }
    }
  }
`

export default SingleStudentWrapper