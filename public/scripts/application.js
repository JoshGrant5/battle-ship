$(document).ready(function() {

  // Build 10x10 Playing Grid
  const buildBattleField = () => {
    let plots = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for (x of plots) {
    let row = `
    <tr>
      <td>${x}${1}</td>
      <td>${x}${2}</td>
      <td>${x}${3}</td>
      <td>${x}${4}</td>
      <td>${x}${5}</td>
      <td>${x}${6}</td>
      <td>${x}${7}</td>
      <td>${x}${8}</td>
      <td>${x}${9}</td>
      <td>${x}${10}</td>
    </tr>`
    $('.cpu-board').append(row);
    $('.user-board').append(row);
    }
  };

  buildBattleField();

});




