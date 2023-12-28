console.log('%c Made by Venidici → https://www.instagram.com/hellovenidici/', 'background: black; color: white; padding: 1ch 2ch; border-radius: 2rem;')

// SECTION - 1 SPLINE CODE
import { Application } from '@splinetool/runtime';

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas3d';

  const app = new Application(canvas);
  app.load('https://prod.spline.design/l6jgpFs8XWwF7AEo/scene.splinecode');

  const jsContentSection = document.getElementById('jsContent');
  jsContentSection.appendChild(canvas);
});

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas3d';

  const app = new Application(canvas);
  app.load('https://prod.spline.design/sJHjzKC4cqlKnl8s/scene.splinecode');

  const jsContentSection = document.getElementById('jsContent2');
  jsContentSection.appendChild(canvas);
});