document.addEventListener("click",function(t){if("wall"===t.target.className){var e=document.querySelector(".spider"),i=document.querySelector(".wall"),l=e.clientWidth/2,a=e.clientHeight/2,c=i.clientWidth-l,n=i.clientHeight-a,o=Math.min(Math.max(t.offsetX,l),c),d=Math.min(Math.max(t.offsetY,a),n);e.style.left=o-l+"px",e.style.top=d-a+"px"}});
//# sourceMappingURL=index.4ef1f455.js.map
