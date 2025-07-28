import { copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

async function spaDeployFix() {
  const distDir = path.resolve('dist');
  const indexPath = path.join(distDir, 'index.html');
  const notFoundPath = path.join(distDir, '404.html');
  const redirectsPath = path.join(distDir, '_redirects');

  try {
    // Copy index.html to 404.html for GitHub Pages fallback
    await copyFile(indexPath, notFoundPath);
    console.log('Copied index.html to 404.html for GitHub Pages.');

    // Create _redirects file for Cloudflare Pages fallback
    const redirectContent = '/* /index.html 200\n';
    await writeFile(redirectsPath, redirectContent);
    console.log('Created _redirects file for Cloudflare Pages.');
  } catch (error) {
    console.error('Error during SPA deploy fix:', error);
    process.exit(1);
  }
}

spaDeployFix();
