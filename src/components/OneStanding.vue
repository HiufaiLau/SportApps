<template>
<div>
    <table class="scoreTable " align="center"  >
  <thead>
    <tr>
      <th scope="col">Pos.</th>
      <th scope="col">T</th>
      <th scope="col">Plad</th>
      <th scope="col">W</th>
      <th scope="col">D</th>
      <th scope="col">L</th>
      <th scope="col">Pts</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" align="center">{{OneMatchStanding.position}}</th>
      <td><img :src="OneMatchStanding.team.crestUrl" alt="" height="40" width="40"></td>
      <td>{{OneMatchStanding.playedGames}}</td>
      <td>{{OneMatchStanding.won}}</td>
     <td>{{OneMatchStanding.draw}}</td>
     <td>{{OneMatchStanding.lost}}</td>
     <td>{{OneMatchStanding.points}}</td>
    </tr>
  </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: 'OneStanding',
    props: ['OneMatchStanding']
}
</script>