import styled from 'styled-components'

const ToDoWrapper = styled.div`
  margin-top: 4px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 700;
      text-transform: uppercase;
      color: #FF7D00;
    }

    i {
      height: 50px;
      width: 50px;
      background: #FF7D00;
      border-radius: 12px;
      line-height: 50px;
      text-align: center;
      font-size: 24px;
      cursor: pointer;
      color: white;

      &:hover {
        background: #000;
        color: #FF7D00;
      }
    }
  }
`

export default ToDoWrapper

// import { makeStyles } from '@mui/styles'

// const TodoWrapper = makeStyles ({
//   cnBtn: {
//     backgroundColor: '#FF9026 !important',
//     color: '#fff !important',
//     '&:hover': {
//       color: '#000 !important'
//     }
//   },
//   createTasks: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 800,
//     backgroundColor: "#fff",
//     borderRadius: 20,
//     padding: 32,
//   },
//   contentBox: {
//     overflow: 'auto',
//     marginTop: '20px !important',
//     // marginBottom: '-10px !important',
//   }
// })

// export default TodoWrapper
