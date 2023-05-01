const colors = ['blue', 'green', 'white', 'yellow', 'orange', 'red'];
const pieces = document.getElementsByClassName('piece');

// Returns j-th adjacent face of i-th face
function mx(i, j) {
  return ([2, 4, 3, 5][j % 4 |0] + i % 2 * ((j|0) % 4 * 2 + 3) + 2 * (i / 2 |0)) % 6;
}

function getAxis(face) {
  // Returns X, Y or Z depending on the face
  return String.fromCharCode('X'.charCodeAt(0) + face / 2);
}

// Moves each of 26 pieces to their places, assigns IDs and attaches stickers
function assembleCube() {
  for (let i = 0, id = 0; i < 26; i++) {
    let x = mx(i, i % 18);
    let id = 0;
    let piece = pieces[i];

    let faceTransform = `rotateX(0deg) translate${getAxis(i % 6)}(${(i % 2 * 4 - 2)}em)`;

    if (i > 5) {
      faceTransform += ` translate${getAxis(x)}(${(i > 17 ? mx(x, x + 2) : '')}em)`;
    }

    piece.style.transform = faceTransform;
    piece.setAttribute('id', `piece${id}`);

    for (let j = 0; j < 6; j++) {
      let sticker = document.createElement('div');
      sticker.setAttribute('class', `sticker ${colors[j]}`);
      piece.children[j].appendChild(sticker);
    }

    id += 1;
  }
}

// Returns the piece with the specified face, index and corner
function getPieceBy(face, index, corner) {
  let id = (1 << face) + (1 << mx(face, index)) + (1 << mx(face, index + 1)) * corner;
  return document.getElementById(`piece${id}`);
}

// Swaps stickers of the face (by clockwise) stated times, thereby rotates the face
function swapPieces(face, times) {
  for (let i = 0; i < 6 * times; i++) {
    let piece1 = getPieceBy(face, i / 2, i % 2);
    let piece2 = getPieceBy(face, i / 2 + 1, i % 2);

    for (let j = 0; j < 5; j++) {
      let sticker1 = piece1.children[j < 4 ? mx(face, j) : face].firstChild;
      let sticker2 = piece2.children[j < 4 ? mx(face, j + 1) : face].firstChild;

      if (sticker1 && sticker2) {
        let className = sticker1.className;
        sticker1.className = sticker2.className;
        sticker2.className = className;
      }
    }
  }
}

// Animates rotation of the face (by clockwise if cw), and then swaps stickers
function animateRotation(face, cw, currentTime) {
  let k = 0.3 * (face % 2 * 2 - 1) * (2 * cw - 1);
  let qubes = Array(9).fill(pieces[face]).map(function (value, index) {
    return index ? getPieceBy(face, index / 2, index % 2) : value;
}

// Attach event listeners
scene.addEventListener('mousedown', mousedown);
