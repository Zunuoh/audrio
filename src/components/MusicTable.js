import React, { useState } from "react";
import { Table } from "react-bootstrap";

const TableList = [
  {
    id: "1",
    title: "Priority",
    artist: "Mos Def",
    time: "1:25",
    album: "The Ecstatic",
  },
  {
    id: "2",
    title: "Time is Ticking Out",
    artist: "The Cranberries",
    time: "2:59",
    album: "Wake Up And Smell",
  },
  {
    id: "3",
    title: "One Minute More",
    artist: "Capital Cities",
    time: "3:23",
    album: "In A Tidal Wave",
  },
  {
    id: "4",
    title: "Priority",
    artist: "Mos Def",
    time: "1:25",
    album: "The Ecstatic",
  },
  {
    id: "5",
    title: "Time is Ticking Out",
    artist: "The Cranberries",
    time: "2:59",
    album: "Wake Up And Smell",
  },
];

const MusicTable = () => {
  const [tableItems] = useState(TableList);
  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Time</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {tableItems && tableItems.map(tableItem =>{
            return(
              <tr>
            <td>{tableItem.id}</td>
            <td>{tableItem.title}</td>
            <td>{tableItem.artist}</td>
            <td>{tableItem.time}</td>
            <td>{tableItem.album}</td>
          </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MusicTable;
