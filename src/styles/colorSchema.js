const colorSchema = {
  anger: {
    left: "rgba(208,46,53,0.5)",
    thumb: "rgb(204,28,23)",
    right: "rgba(228,135,102,0.25)"
  },
  disgust: {
    left: "rgba(0,110,57,0.5)",
    thumb: "rgba(0,104,55,1)",
    right: "rgba(0,142,69,0.25)"
  },
  fear: {
    left: "rgba(156,41,153,0.5)",
    thumb: "rgba(143,39,139,1)",
    right: "rgba(248,58,248,0.3)"
  },
  joy: {
    left: "rgba(243,136,33,0.5)",
    thumb: "rgba(248,136,29,1)",
    right: "rgba(247,172,59,0.25)"
  },
  sadness: {
    left: "rgba(49,124,189,0.5)",
    thumb: "rgba(65,74,161,1)",
    right: "rgba(195,218,238,0.25)"
  },
  surprise: {
    left: "rgba(249, 252, 47, 0.5)",
    thumb: "rgb(242, 231, 77)",
    right: "rgba(247, 238, 116, 0.25)"
  }
}

function structFromRGBA(x) {
  let nums = x.split('(')[1].split(')')[0].split(',');
  return {'r': nums[0], 'g': nums[1], 'b': nums[2]};
}

export function getPallete(arr){
  var pallete = [];

  if (arr) {
    for(var v in arr) {
      pallete.push(structFromRGBA(colorSchema[arr[v].name].thumb))
    }
  } else {
    for(var v in colorSchema){
      pallete.push(structFromRGBA(colorSchema[v].thumb))
    }
  }


  return pallete;
}

export default colorSchema;
