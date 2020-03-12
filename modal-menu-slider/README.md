# Modal & Menu Slider

Simple landing page with sliding menu and modal

## CSS

### transform

- rotate(), translate(), scale(), etc...

```css
nav {
  transform: translateX(-100%);
}
```

### window

```js
window.addEventListener('click', e => {
  e.target == modal ? modal.classList.remove('show-modal') : false;
});
window.addEventListener('keydown', e => {
  modal.classList.remove('show-modal');
});
```
