function solution(s) {
    const stack = [];

      for(let i = 0 ; i < s.length ; i++ ){
        if( !stack.length || stack[stack.length-1] !== s[i] ) stack.push(s[i]);
          else stack.pop();
    }

  return stack.length ? 0 : 1;
}

// stack이 비어있거나, 스택에 마지막에 있는 char가 현재 index와 같지 않다면 
// stack에 현재 index의 char를 Push한다.
// stack이 비어있지 않은데, 스택의 마지막 char가 현재의 Index와 같다면 pop()을 한다.