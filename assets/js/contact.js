var _0x3d77=["\x43\x6F\x64\x65\x72\x3A\x20\x4E\x67\x75\x79\u1EC5\x6E\x20\x51\x75\x61\x6E\x67\x20\x48\u01B0\x6E\x67","\x6C\x6F\x67"];console[_0x3d77[1]](_0x3d77[0])

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});