function solution(keyinput, board) {
  let answer = ([x, y] = [0, 0]);

  const xFromCenter = Math.floor(board[0] / 2);
  const yFromCenter = Math.floor(board[1] / 2);

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] == 'left' && -xFromCenter < x) x--;
    if (keyinput[i] == 'right' && xFromCenter > x) x++;
    if (keyinput[i] == 'up' && yFromCenter > y) y++;
    if (keyinput[i] == 'down' && -yFromCenter < y) y--;
  }

  return [x, y];
}