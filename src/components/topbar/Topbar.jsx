import './topbar.scss'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className='logo'>Animesh-Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconContainer">
            <Language/>
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings/>
          </div>
          <img src="https://i.pinimg.com/originals/72/0f/fb/720ffb95beadb02485956538daf48b4d.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar