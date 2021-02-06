// COMPOSE FUNCTIONS

const compose = (...fns) => arg => fns.reduce((result,fn) => fn(result), arg );
