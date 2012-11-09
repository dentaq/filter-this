// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function change(e) {
  switch(e.target.id) {
    case "hue":
      window.localStorage.setItem("hue", e.target.value);
      break;
    case "gray":
      window.localStorage.setItem("gray", e.target.value);
      break;
    case "sepia":
      window.localStorage.setItem("sepia", e.target.value);
      break;
  }
  chrome.tabs.executeScript(null,
      {code:"document.body.style.webkitFilter='hue-rotate("+localStorage.getItem("hue")+"deg) grayscale("+localStorage.getItem("gray")+"%) sepia("+localStorage.getItem("sepia")+"%)'"});
}

document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementsByTagName('input');
  len = input.length;
  for(var i = 0; i < len; i++){
    input[i].addEventListener('change', change);
  }
});
