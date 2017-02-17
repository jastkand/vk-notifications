export function log(scope, message){
  if (process.env.NODE_ENV === 'development') {
    console.log(scope + ':', message);
  }
}

