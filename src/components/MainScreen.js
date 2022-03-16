import React from 'react'
import Header from './Header'
import MusicTable from './MusicTable'

const MainScreen = () => {
  return (
    <div className='mainscreenContainer'>
      <div>
        <Header/>
      </div>

      <div>
        <div style={{marginTop:20, fontSize:15}}>What's hot</div>
        <div style={{marginTop:10, fontSize:25, fontWeight:"bold"}}>Trending</div>
        <div style={{fontSize:10, display:"flex", justifyContent:"flex-end"}}>More</div>
      </div>
      <div className='mainscreenPictureBanner'>
       <div>
         Artist
       </div>
       <div className='pictureBannerFirstText'>
         On Top
       </div>
       <div className='pictureBannerSecondText'>
         Of The World
       </div>
       <div>
         <button className='firstBannerButton'>Play</button>
         <button className='secondBannerButton'>Follow</button>
       </div>
      </div>

      <div style={{marginTop:25, fontSize:25, fontWeight:"bold"}}>
        My playlist
      </div>

      <div style={{marginTop:10}}>
        <MusicTable/> 
      </div>

    </div>
  )
}

export default MainScreen