import styled from 'styled-components'
import CampusImg from '../../assets/images/Login/campus.jpg'

const WelcomeWrapper = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  background-image: url(${CampusImg});
  background-image: linear-gradient(rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(${CampusImg});
  background-position: center;
  background-size: contain;
  position: absolute;
  padding: 24px;

  .brand {
    text-align: center;
    color: #fff;

    h2 {
      font-size: 32px;
      text-transform: uppercase;
    }

    h1 {
      font-size: 46px;
      font-weight: 500;
      margin: 0;
      margin-bottom: 40px;
    }
  }

  .loginPage {

    .formBox {
      width: 360px;
      height: 360px;
      position: relative;
      margin: 2% auto;
      background: rgb(255, 255, 255, 0.8);
      padding: 10px;
      overflow: hidden;
      border-radius: 16px;
    }
  }
`

export default WelcomeWrapper

// import { makeStyles } from "@mui/styles";

// const WelcomeWrapper = makeStyles({
//   welcome: {
//     height: "100vh",
//     width: "100%",
//     backgroundColor: "#42C2FF",
//   },
//   campusImg: {
//     height: "100vh",
//     backgroundImage: `url(${loginBackground})`,
//   },
//   login: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputForm: {
//     textAlign: "center",
//   },
//   validate: {
//     fontSize: "13px",
//     color: 'red',
//   }
//   });
// export default WelcomeWrapper
