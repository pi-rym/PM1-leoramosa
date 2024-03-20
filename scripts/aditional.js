function copyToClip(button) {
  const copyText = button.parentElement.querySelector(".link_img");
  const textToCopy = copyText.textContent;

  navigator.clipboard.writeText(textToCopy);
}
