const solution = (babbling) => {
  const words = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (const bab of babbling) {
    let tempBab = bab;
    let possible = true;

    for (const w of words) {
      if (tempBab.includes(w + w)) {
        possible = false;
        break;
      }
      tempBab = tempBab.replaceAll(w, "_");
    }

    if (!possible) {
      continue;
    }

    tempBab = tempBab.replaceAll("_", "");

    if (tempBab === "") {
      count++;
    }
  }

  return count;
};

/*
babbling	result
["aya", "yee", "u", "maa"]	1
["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2
 */
