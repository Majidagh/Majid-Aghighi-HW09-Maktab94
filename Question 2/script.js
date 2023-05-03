const links = document.querySelectorAll("#link-address a");

links.forEach((link) => {
  url = link.getAttribute("href");

  if (url.includes("://") && getUrl(url) !== "http://internal.com")
    link.style.color = "orange";
});

function getUrl(url) {
  return url.split(/(?<=[a-z])\//)[0];
}
