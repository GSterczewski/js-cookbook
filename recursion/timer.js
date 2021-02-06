// TIMER USING RECURSION


// COUNTDOWN FROM VALUE TO 0
const countdown = (fn, value, delay = 1000) => {
  fn(value);
  return value > 0 ? setTimeout(() => countdown(fn,value-1,delay),delay) : value;
} 


