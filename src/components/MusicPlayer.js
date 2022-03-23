import React from 'react'
import { Heart, Music, SkipBack, SkipForward, Maximize2, Pause, Save, Minimize2, Volume, Volume2 } from 'react-feather'

const MusicPlayer = (props) => {
  return (
  <div className='musicPlayerContainer' >
    <div className='musicPlayerFirstContainer'>
      {/* first section */}
      <div className='musicPlayerFirstDiv'>
        <Heart className='musicPlayerFirstIcon'/>
        <Music className='musicPlayerFirstIcon'/>
        <Maximize2 className='musicPlayerFirstIcon'/>
      </div>


      {/* second section */}
      <div className='musicPlayerSecondDiv'>
        <Minimize2 className='musicPlayerSecondIcon'/>
        <SkipBack className='musicPlayerSecondIcon'/>
        <div style={{backgroundColor:"black", width:44, height:40, borderRadius:30, marginTop:-8, marginLeft:10, display:"flex", alignItems:"center"}}>
          <Pause color="white" className='musicPlayerSecondIcon'/>
        </div>
        <SkipForward className='musicPlayerSecondIcon'/>
        <Save className='musicPlayerSecondIcon'/>
      </div>


      {/* third section */}
      <div className='musicPlayerThirdDiv'>
        <Volume/>
        <Volume2 className='musicPlayerThirdIcon'/>
      </div>
    </div>




    {/* second part */}
    <div className='musicPlayerSecondPart'>
      <div style={{marginLeft:15}}>
        0:43
      </div>

      <div style={{width:"90%", height:3 ,backgroundColor:"black", marginLeft:10, marginTop:10}}>

      </div>
      <div className='musicPlayerSecondIcon'>
        3:23
      </div>
    </div>
  </div>

  )
}

export default MusicPlayer

