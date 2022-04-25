import React from 'react'
import SingleStudentWrapper from './singleStudent.style'
import ProfileImg from '../../../assets/images/Profile/profile.jpeg'

export default function SingleStudent() {
  return (
    <SingleStudentWrapper>
      <div className="container">
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={ProfileImg} alt="" />
              <div className="details">
                <h1 className="itemTitle">Jame</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">sdkfsdksdf</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+84 12 334 5678</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">asdfghjklpoiuytrewq</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Major:</span>
                  <span className="itemValue">Design</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </SingleStudentWrapper>
  )
}
