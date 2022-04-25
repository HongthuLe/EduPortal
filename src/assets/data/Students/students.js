import Profile from '../../images/Profile/profile.jpeg'
import Profile2 from '../../images/Profile/profile2.jpeg'

export const studentColumns = [
  { field: 'sId', 
    headerName: 'ID', 
    width: 100,
    renderCell: (params) => {
      return (
        <>
          {params.row.major === "Design"
            ? "GDH"
            : params.row.major === "Computing"
            ? "GCH"
            : "GBH" 
          }
            {params.row.sId}
        </>
      )
    }
  },
  {
    field: 'student',
    headerName: 'Student',
    width: 260,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.ava} alt="avatar" />
          {params.row.sLastname}&nbsp;
          {params.row.sMidllename}&nbsp;
          {params.row.sFirstname}
        </div>
      )
    }
  },
  { field: 'email', 
    headerName: 'Email', 
    width: 170,
    renderCell: (params) => {
      return (
        <>
          {params.row.sFirstname.charAt(0)}
          {params.row.sLastname.charAt(0)}
          {params.row.sId}
          {params.row.email}
        </>
      )
    }
  },
  { field: 'major', headerName: 'Major', width: 120 },
  { field: 'birth', headerName: 'D.O.B', width: 160 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'address', headerName: 'Address', width: 200 },
]

//  Student Data:
export const studentRows = [
  {
    id: 1,
    sId: 12345,
    sFirstname: 'min',
    sMidllename: 'ji',
    sLastname: 'yu',
    ava: `${Profile}`,
    email: '@gre.ac.uk',
    major: 'Design',
    birth: '11 April 2000',
    address: 'Seoul, Korea',
    courses: 11,
    gender: 'female',
  },
  {
    id: 2,
    sId: 54321,
    sFirstname: 'jeong',
    sMidllename: 'min',
    sLastname: 'kim',
    ava: `${Profile2}`,
    email: '@gre.ac.uk',
    major: 'Computing',
    birth: '01 January 2001',
    address: 'Seoul, Korea',
    courses: 4,
    gender: 'female',
  },
  {
    id: 3,
    sId: 23451,
    sFirstname: 'aeri',
    sMidllename: '',
    sLastname: 'uchinaga',
    ava: `${Profile}`,
    email: '@gre.ac.uk',
    major: 'Design',
    birth: '23 March 2000',
    address: 'Tokyo, Japan',
    courses: 11,
    gender: 'female',
  },
  {
    id: 4,
    sId: 13245,
    sFirstname: 'yuo',
    sMidllename: 'yi',
    sLastname: 'ning',
    ava: `${Profile2}`,
    email: '@gre.ac.uk',
    major: 'Marketing',
    birth: '21 December 2002',
    address: 'Shanghai, China',
    courses: 4,
    gender: 'female',
  },
  {
    id: 5,
    sId: 53421,
    sFirstname: 'kien',
    sMidllename: 'trung',
    sLastname: 'hoang',
    ava: `${Profile}`,
    email: '@gre.ac.uk',
    major: 'Marketing',
    birth: '06 August 1998',
    address: 'Hanoi, Vietnam',
    courses: 6,
    gender: 'male',
  },
  {
    id: 6,
    sId: 43214,
    sFirstname: 'anh',
    sMidllename: 'van',
    sLastname: 'nguyen',
    ava: `${Profile2}`,
    email: '@gre.ac.uk',
    major: 'Computing',
    birth: '11 April 2000',
    address: 'Hanoi, Vietnam',
    courses: 8,
    gender: 'female',
  },
  {
    id: 7,
    sId: 33241,
    sFirstname: 'anh',
    sMidllename: 'phuong',
    sLastname: 'tran',
    ava: `${Profile2}`,
    email: '@gre.ac.uk',
    major: 'Marketing',
    birth: '11 April 1998',
    address: 'Hanoi, Vietnam',
    courses: 6,
    gender: 'female',
  },
  {
    id: 8,
    sId: 78456,
    sFirstname: 'thanh',
    sMidllename: 'dac',
    sLastname: 'quanh',
    ava: `${Profile2}`,
    email: '@gre.ac.uk',
    major: 'Computing',
    birth: '11 April 2001',
    address: 'Hanoi, Vietnam',
    courses: 6,
    gender: 'male',
  },
]