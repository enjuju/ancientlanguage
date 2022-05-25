function greet() {
  console.log("Hello!");
}

function transcribe() {
  let word = document.getElementById("translateMe").value;
  alphabet = "A ?.!'BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  permuted = "O ?.!'CBJIHGFEDSWZXUQOLKTAVRNYMocbjihgfedswzxuqolktavrny";
  // word = prompt("Enter a word to encrypt:");

  i = 0;

  result = "";
  //bl, br, cl, cr, dr, fl, fr, gl, gr, pl, pr, qu, sc, sk, sl, sm, sn, sp, st, sw, tr, and tw,
  // A: C, J, L, V
  // E: B, F, P, Z
  // I: F, H, R, X
  // O: G, M, T, W
  // U: K, N, S, Q
  let replacements = {
    cw: "caw",
    bw: "bew",
  };
  while (i < word.length) {
    ind = alphabet.indexOf(word.charAt(i));
    result = result + permuted.charAt(ind);
    i++;
  }
  finale = result.replace(/cw|bw/gi, function (matched) {
    return replacements[matched];
  });
  console.log(result);
  let newWords = document.getElementById("output");
  newWords.value = finale;
}
