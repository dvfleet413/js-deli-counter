function takeANumber(lineArray, name){
  lineArray.push(name);
  return `Welcome, ${name}. You are number ${lineArray.length} in line.`;
}

function nowServing(lineArray){
  if(lineArray.length === 0){
    return 'There is nobody waiting to be served!'
  }
  else{
    const serving = lineArray.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(lineArray){
  if (lineArray.length ===0){
    return 'The line is currently empty.';
  }
  else{
    var message = 'The line is currently: ';
    for (var i = 0; i < lineArray.length-1; i++){
      message = message + `${i+1}. ${lineArray[i]}, `;
    }
    message = message + `${lineArray.length}. ${lineArray[lineArray.length - 1]}`;
    return message;
  }
}
