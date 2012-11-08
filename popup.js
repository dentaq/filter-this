// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function change(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.webkitFilter='hue-rotate("+e.target.value+"deg)'"});
}

document.addEventListener('DOMContentLoaded', function () {
  var hue = document.getElementById('hue');
  hue.addEventListener('change', change);
});
