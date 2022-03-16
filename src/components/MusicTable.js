import React from 'react'
import { Table } from 'react-bootstrap'

const MusicTable = () => {
  return (
    <div>
    <Table  hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Artist</th>
      <th>Time</th>
      <th>Album</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Priority</td>
      <td>Mos Def</td>
      <td>1:25</td>
      <td>The Ecstatic</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Time is Ticking Out</td>
      <td>The Cranberries</td>
      <td>2:59</td>
      <td>Wake Up And Smell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>One Minute More</td>
      <td>Capital Cities</td>
      <td>3:23</td>
      <td>In A Tidal Wave</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Priority</td>
      <td>Mos Def</td>
      <td>1:25</td>
      <td>The Ecstatic</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Time is Ticking Out</td>
      <td>The Cranberries</td>
      <td>2:59</td>
      <td>Wake Up And Smell</td>
    </tr>
    <tr>
      <td>6</td>
      <td>One Minute More</td>
      <td>Capital Cities</td>
      <td>3:23</td>
      <td>In A Tidal Wave</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Priority</td>
      <td>Mos Def</td>
      <td>1:25</td>
      <td>The Ecstatic</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default MusicTable