function solution(s) {
    const words = s.split(' ')
      .map(word => word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase());

  return words.join(' ');
}    