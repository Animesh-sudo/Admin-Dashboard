import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import './user.scss'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to='/newUser'>
              <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowtop">
              <img src="https://buzzly.info/upload/1758/06f58cecd517e250fcc57a550b954312.jpg" alt="" className="userShowImg" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Susan Carol</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Datails</span>
              <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfotitle">susan_carol95</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className='userShowIcon'/>
                <span className="userShowInfotitle">10.12.1999</span>
              </div>
              <span className="userShowTitle">Contact Datails</span>
              <div className="userShowInfo">
                <PhoneAndroid className='userShowIcon'/>
                <span className="userShowInfotitle">+1 123 456 67</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className='userShowIcon'/>
                <span className="userShowInfotitle">susan_carol95@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className='userShowIcon'/>
                <span className="userShowInfotitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input type="text" placeholder='susan_carol95' className='userUpdateInput'/>
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input type="text" placeholder='Susan Carol' className='userUpdateInput'/>
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="email" placeholder='susan_carol95@gmail.com' className='userUpdateInput'/>
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input type="text" placeholder='+1 123 456 67' className='userUpdateInput'/>
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input type="text" placeholder='New York | USA' className='userUpdateInput'/>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img src="https://buzzly.info/upload/1758/06f58cecd517e250fcc57a550b954312.jpg" alt="" className="userUpdateImage" />
                  <label htmlFor="file-input"><Publish className='userUpdateIcon'/></label>
                  <input type="file" id='file-input' style={{display:'none'}}/>
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default User