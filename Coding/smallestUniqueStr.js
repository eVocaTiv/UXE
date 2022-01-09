function smallestUniqueSubstr(str) {

    if(str.length < 2) return str;

    const strCode = str => str.charCodeAt()-'a'.charCodeAt();
    let res = '';
    let stack = [];
    let freq = Array(26).fill(0);
    let isIn = Array(26).fill(0);

    // count freq.
    for(let ch of str) {
      freq[ch.charCodeAt() - 'a'.charCodeAt()]++;
    }

    stack.push(str[0]);
    isIn[strCode(str[0])] = 1;
    freq[strCode(str[0])]--;

    // traverse the stack and compare.
    for(let i=1; i<str.length; i++) {
      let char = str[i];
      freq[strCode(str[i])]--;
        while(stack.length && stack[stack.length-1] >= str[i] && freq[strCode(stack[stack.length-1])]) {
            let popped = stack.pop();
            isIn[strCode(popped)] = 0;
        }

        if(isIn[strCode(str[i])] ===0 ) {
          stack.push(str[i]);
          isIn[strCode(str[i])] = 1;
        }

    }

    for(let i=0; i<stack.length; i++)
      res += stack[i];
    return res;

}

smallestUniqueSubstr('aba')

 