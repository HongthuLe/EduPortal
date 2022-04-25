import styled from 'styled-components'

const StudentsWrapper = styled.div`
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

export default StudentsWrapper