import React from 'react'

import ManagerView from '../../components/ManagerView';
import StudentView from '../../components/StudentView';

import { auth } from '../../noSQLDatabase/firebase-config'
import { signOut } from 'firebase/auth'

export default function Home({ user }) {
  return (
    <div>
      Home Page
      <button onClick={ () => signOut(auth) }>
        Sign Out
      </button>

      {user.role === 'manager' ? <ManagerView /> : <StudentView /> }
    </div>
  )
}
