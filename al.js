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
  //bl, br, cl, cr, dr, fl, fr, gl, gr, pl, pr, qu, sc, sk, sl, sm, sn, sp, st, sw, tr, tw,
  //caw cl bew bl jl hw hl gw gl qw ql oa kb ks kw kz kx kq kt kr tl tr
  // A: C, J, L, V
  // E: B, F, P, Z
  // I: F, H, R, X
  // O: G, M, T, W
  // U: K, N, S, Q
  let replacements = {
    cw: "caw",
    cl: "ca",
    bw: "bew",
    bf: "bef",
    jl: "jal",
    hw: "hiw",
    hl: "hil",
    gw: "gow",
    qw: "quw",
    ql: "qul",
    kb: "kub",
    kz: "kuz",
    kx: "kux",
    kq: "kuq",
    kt: "kut",
    tl: "tol",
    xj: "xij",
    xg: "xig",
    rf: "rif",
  };
  while (i < word.length) {
    ind = alphabet.indexOf(word.charAt(i));
    result = result + permuted.charAt(ind);
    i++;
  }
  finale = result.replace(
    /cw|bw|cl|jl|hw|hl|gw|gl|qw|ql|kb|ks|kz|kx|kq|kt|tl|xj|xg|rf/gi,
    function (matched) {
      return replacements[matched];
    }
  );
  console.log(result);
  let newWords = document.getElementById("output");
  newWords.value = finale;
}
