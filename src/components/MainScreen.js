import React from "react";
import { ChevronRight } from "react-feather";
import Header from "./Header";
import MusicPlayer from "./MusicPlayer";
import MusicTable from "./MusicTable";

const MainScreen = () => {
  return (
    <div className="mainscreenContainer">
      <div>
        <Header />
      </div>

      <div>
        <div style={{ marginTop: 20, fontSize: 15 }}>What's hot?</div>
        <div style={{ marginTop: 10, fontSize: 25, fontWeight: "bold" }}>
          Trending
        </div>
        <div
          style={{ fontSize: 13, display: "flex", justifyContent: "flex-end" }}
          id='sidebar'
        >
          More <ChevronRight size={18} />
        </div>
      </div>
      <div className="mainscreenPictureBanner">
        <div>Artist</div>
        <div className="pictureBannerFirstText">On Top</div>
        <div className="pictureBannerSecondText">Of The World</div>
        <div>
          <button className="firstBannerButton">Play</button>
          <button className="secondBannerButton">Follow</button>
        </div>
      </div>

      <div style={{ marginTop: 25, fontSize: 25, fontWeight: "bold" }}>
        My playlist
      </div>

      <div style={{ marginTop: 10 }}>
        <MusicTable />
      </div>

      {/* <div>
        <MusicPlayer/>
      </div> */}
    </div>
  );
};

export default MainScreen;
