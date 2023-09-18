function solution(picture, k) {
  const new_picture = [];

  for (let i = 0; i < picture.length; i++) {
    const row = picture[i];

    let extensionRow = '';
    for (let j = 0; j < row.length; j++) {
      extensionRow += row[j].repeat(k);
    }

    for (let j = 0; j < k; j++) {
      new_picture.push(extensionRow);
    }
  }

  return new_picture;
}