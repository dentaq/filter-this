// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function change(e) {
  var val = [0, 0, 0];
  switch(e.target.id) {
    case "hue":
      val[0] = e.target.value;
      break;
    case "gray":
      val[1] = e.target.value;
      break;
    case "sepia":
      val[2] = e.target.value;
      break;
  }
  chrome.tabs.executeScript(null,
      {code:"document.body.style.webkitFilter='hue-rotate("+val[0]+"deg) grayscale("+val[1]+"%) sepia("+val[2]+"%)'"});
}

document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementsByTagName('input');
  len = input.length;
  for(var i = 0; i < len; i++){
    input[i].addEventListener('change', change);
  }
});
