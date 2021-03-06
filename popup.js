// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function change(e) {
  window.localStorage.setItem(e.target.id, e.target.value);
  var span = document.getElementsByTagName('span');
  span[0].innerHTML = localStorage.getItem("hue");
  span[1].innerHTML = localStorage.getItem("gray");
  span[2].innerHTML = localStorage.getItem("sepia");
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
