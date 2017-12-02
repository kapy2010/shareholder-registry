function logErr(msg, ...rest) {
  console.error(msg, ...rest);
}

function logWarn(msg, ...rest) {
  console.log(msg, ...rest);
}

export {logErr, logWarn};