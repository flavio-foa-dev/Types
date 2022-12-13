// any and unknown
function init ():never {
  // never nunca return nada

  //while(true){}
  throw new Error
  process.exit(1)
}

function init1 ():void {
  // return undefined
  return undefined;
}

// @ts-ignore
function go(): void {}

