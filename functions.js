const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$(".tab-container .tab-item");
const tabPanes = $$(".tab-container .tab-pane");
const tabPaneActive = $(".tab-container .tab-pane.is-active");

lineTransform();

tabItems.forEach((item, index) => {

  const pane = tabPanes[index];

  item.addEventListener("click", () => {
    tabItems.forEach((item) => item.classList.remove('is-active'));
    item.classList.add('is-active');

    tabPanes.forEach((paneItem) => paneItem.classList.remove('is-active'));
    pane.classList.add('is-active');

    lineTransform();
  })
});

function lineTransform() {
  const line = $(".tab-container .line");
  const tabItemActive = $(".tab-container .tab-item.is-active");

  line.style.width = tabItemActive.offsetWidth + 'px';
  line.style.left = tabItemActive.offsetLeft + 'px';
}