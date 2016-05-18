/**
 * @author: Jason.友伟 zhanyouwei@meitunmama.com
 * Created on 16/5/17.
 */

$(function () {
  'use strict';
  var typeArr = ['success', 'warning', 'danger', 'secondary'];
  showDemo();
  setInterval(function () {
    showDemo();
  }, 3000);

  function showDemo() {
    $('body').toast({
      text: 'Amaze UI Toast',
      duration: 2000,
      type: typeArr[Math.floor(Math.random() * 4)]
    });
  }
});
