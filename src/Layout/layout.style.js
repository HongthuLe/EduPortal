import styled from "styled-components";

const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 50px;
    background: #ff7d00;
    padding: 16px;
    transition: all 0.5s ease;
    z-index: 100;

    .brandContent .brand {
      display: flex;
      height: 50px;
      width: 100%;
      align-items: center;
      opacity: 0;
      pointer-events: none;
      transition: all 0.5s ease;

      i {
        font-size: 50px;
        margin-right: 8px;
      }

      .brandName {
        font-size: 20px;
        font-weight: 400;
      }
    }

    #open-menu-btn {
      position: absolute;
      left: 56%;
      top: 16px;
      font-size: 24px;
      height: 50px;
      width: 50px;
      text-align: center;
      line-height: 50px;
      transform: translateX(-50%);

      &:hover {
        background: #fff;
        border-radius: 16px;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      margin-top: 64px;

      li {
        position: relative;
        height: 50px;
        width: 100%;
        margin: 0 5px;
        list-style: none;
        line-height: 50px;

        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: all 0.4 ease;
          border-radius: 12px;
          color: #000;
          white-space: nowrap;

          &:hover {
            background-color: #fff;
          }

          i {
            height: 50px;
            min-width: 50px;
            border-radius: 12px;
            line-height: 50px;
            text-align: center;
            font-size: 24px;
          }
        }

        .tooltip {
          position: absolute;
          top: -20px;
          left: calc(100% + 15px);
          z-index: 300;
          background: #FBB068;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 400;
          opacity: 0;
          white-space: nowrap;
          pointer-events: none;
          transition: 0s;
          line-height: 35px;
          /* color: #FF9026; */
        }

        &:hover .tooltip {
          opacity: 1;
          pointer-events: auto;
          transition: all 0.5s ease;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    .profileContent {
      background: #fbb068;
      position: absolute;
      bottom: 16px;
      left: 0;
      width: 100%;

      .profile {
        position: relative;
        padding: 16px;
        height: 60px;

        .profileDetails {
          display: flex;
          align-items: center;

          img {
            height: 45px;
            width: 45px;
            object-fit: cover;
            border-radius: 8px;
          }

          .jobName {
            margin-left: 16px;

            .name {
              font-size: 15px;
              font-weight: 400;
              text-transform: capitalize;
            }

            .job {
              font-size: 12px;
              text-transform: uppercase;
            }
          }
        }

        #signout {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          min-width: 50px;
          line-height: 50px;
          font-size: 20px;
          border-radius: 8px;
          text-align: center;
          background: #fee9d7;
          cursor: pointer;

          &:hover {
            background: #fff;
          }
        }
      }
    }

    .profile {
      background: #ff7d00;

      .profileDetails {
        opacity: 0;
        pointer-events: none;
        white-space: nowrap;
        transition: all 0.4s ease;
      }
    }

    .linksName {
      opacity: 0;
      pointer-events: none;
      transition: all 0.5s ease;
    }
  }

  .active {
    width: 240px;

    .brandContent .brand {
      opacity: 1;
      pointer-events: none;
    }

    #open-menu-btn {
      left: 90%;

      &:hover {
        background: none;
        font-size: 36px;
      }
    }

    li .tooltip {
      display: none;
    }

    .linksName {
      opacity: 1;
      pointer-events: auto;
    }

    .profile {
      background: none;

      .profileDetails {
        opacity: 1;
        pointer-events: auto;
        background: none;
      }

      #signout {
        left: 88% !important;
        background: none !important;

        &:hover {
          font-size: 24px;
        }
      }
    }

    ~ .others {
      width: calc(100% - 240px - 16px - 16px);
      left: 272px;
    }
  }

  .others {
    position: absolute;
    height: 100vh;
    width: calc(100% - 82px);
    left: 82px;
    transition: all 0.5s ease;
    overflow: hidden;

    .header {
      height: auto;
      -webkit-box-shadow: 0 8px 6px -6px gray;
        -moz-box-shadow: 0 8px 6px -6px gray;
          box-shadow: 0 8px 6px -6px #ccc;

      .headerDetails {
        margin: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .search {
          display: flex;
          align-items: center;
          background: #fee9d7;
          height: 40px;
          padding: 0 16px;
          border-radius: 24px;

          i {
            font-size: 20px;
            color: #ff7d00;
            margin-right: 8px;
          }

          input {
            border: none;
            background: transparent;
            font-size: 16px;
            outline: none;

            &::placeholder {
              color: #ff7d00;
            }
          }
        }

        .items {
          display: flex;
          align-items: center;

          .item {
            margin-left: 16px;
            display: flex;
            position: relative;

            .actionBtn {
              color: #ff7d00;
              background: #fee9d7;

              &:hover {
                background: #fbb068;
                color: #fff;
              }
            }
            .counter {
              width: 18px;
              height: 18px;
              background: red;
              border-radius: 50%;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 10px;
              font-weight: 500;
              position: absolute;
              top: -6px;
              right: -6px;
            }
          }
        }
      }
    }

    .page {
      height: calc(100vh - 72px);
      padding: 0 16px 16px 16px;

      .content {
        overflow: auto;
        height: 100%;
      }
    }
  }
`;
export default LayoutWrapper;
