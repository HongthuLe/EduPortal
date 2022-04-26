import styled from "styled-components"

const ToDoWrapper = styled.div`
  margin-top: 4px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 700;
      text-transform: uppercase;
      color: #ff7d00;
    }

    i {
      height: 50px;
      width: 50px;
      background: #ff7d00;
      border-radius: 12px;
      line-height: 50px;
      text-align: center;
      font-size: 24px;
      cursor: pointer;
      color: white;

      &:hover {
        background: #000;
        color: #ff7d00;
      }
    }
  }

  .refreshBtn {
    display: flex;
    align-items: center;
    background: #DDD1FC;
    width: 120px;
    justify-content: center;
    border-radius: 12px;
    cursor: pointer;
    color: #9873F0;

    &:hover {
      background: #9873F0;
      color: #fff;
    }

    i {
      font-size: 24px;
      margin-right: 4px;
    }

    p {
      font-weight: 500;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .card {
      position: relative;
      width: 320px;
      height: 340px;
      box-shadow: inset 5px 5px 5px rgb(255, 125, 0, 0.1),
                  inset -5px -5px 5px rgb(255, 125, 0, 0.05),
                        5px 5px 5px rgba(0, 0, 0, 0.05), 
                        -5px -5px 5px rgba(255, 255, 255, 0.5);
      border-radius: 16px;
      margin: 32px;

      &:hover {
        .box {
          transform: translateY(-50px);
          background: rgb(254, 233, 215, 0.8);
          box-shadow: 0 10px 20px rgb(255, 125, 0, 0.4);

          .content {
            h1 {
              color: rgba(0, 0, 0, 0.1);
            }

            h5 {
              color: #777;
            }

            h3 {
              color: #ff7d00;
            }

            p {
              color: #000
            }
          }

          .actions {
            i {
              background-color: #ff7d00;
              color: #fff;
            }
          }
        }
      }

      .box {
        position: absolute;
        top: 16px;
        left: 16px;
        right: 16px;
        bottom: 16px;
        background: rgb(255, 125, 0, 0.1);
        box-shadow: 0 10px 20px rgb(255, 125, 0, 0.1);
        border-radius: 16px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        /* justify-content: center;
        align-items: center; */
        transition: 0.5s;

        .content {
          h1 {
            margin: 0;
            position: absolute;
            top: -24px;
            right: 16px;
            font-size: 8em;
            color: rgba(0, 0, 0, 0.03);
            transition: 0.5s;
            pointer-events: none;
            text-align: center;
          }

          h5 {
            margin: 0;
            text-transform: uppercase;
            color: darkgrey;
            z-index: 1;
            transition: 0.5s;
            margin-bottom: 16px;
          }

          h3 {
            margin: 0;
            color: #777;
            transition: 0.5s;
          }

          p {
            margin: 0;
            color: darkgrey;
            transition: 0.5s;
            margin-top: 8px;
          }
        }

        .actions {
          display: flex;
          justify-content: space-around;

          i {
            font-size: 28px;
            width: 80px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: #FBB068;
            color: #fff;
            border-radius: 8px;
            cursor: pointer;

            &:hover {
              background-color: #000;
              color: #ff7d00;
            }
          }
        }
      }
    }
  }
`

export default ToDoWrapper
