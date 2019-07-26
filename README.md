<p align="center">
  <br>
  <a href="https://vuefront.com">
    <img src="https://vuefront.com/logo.png" width="120"/>
  </a>
</p>
<h1 align="center">VueFront</h1>
<p align="center">
Vue powered CMS agnostic frontend framework for your old-fashioned Blog and Ecommerce site. <a href="https://twitter.com/intent/tweet?text=I%20just%20turned%20my%20old%20website%20into%20a%20SPA%20and%20PWA%20for%20free%20@VueFront_js&url=https://vuefront.com&hashtags=vuejs,webapp,vuefront,pwa,spajs"><img src="https://img.shields.io/twitter/url/https/VueFront_js.svg?style=social" /></a></p>


<p align="center">
  <a href="https://github.com/vuefront/vuefront"><img src="https://img.shields.io/badge/price-FREE-0098f7.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vuefront"><img src="https://img.shields.io/npm/v/vuefront.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vuefront"><img src="https://img.shields.io/npm/l/vuefront.svg" alt="License"></a>
  <a href="https://discord.gg/C9vcTCQ"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>
</p>

<p align="center">
Show your :heart: - give us a :star: <br/> 
Help us grow this project to be the best it can be!
  </p>
  
# Demo
[VueFront Wordpress Demo](https://wordpress.vuefront.com/)

[VueFront OpenCart Demo](https://opencart.vuefront.com/)

[VueFront Magento Demo](https://magento.vuefront.com/)

[VueFront PrestaShop Demo](https://prestashop.vuefront.com/)

# VueFront can
Easily turn your Wordpress, OpenCart, Magento, PrestaShop, Shopify or any other blog/store CMS into an SPA and PWA with Vue.js in less then 5 minutes.

# You get
- SPA
- PWA
- AMP
- GraphQL
- Atomic Design
- JAMstack

## Why is this project useful?
You or your clients have a site on an old-fashiond CMS. You want to try new technology, outrun your competition and just provide a better user experiance, but not ready to invest thousands of dollars. 

Try VueFront: 
- It uses the latest tech stack. 
- It's free. 
- It's easy to setup, test and run. 

It works out-of-the-box:
- You get a shiny new Web APP.
- You get to keep your current CMS admin panel.
- You can always switch back to your old site. 

> Give it a try, what do you have to lose? 

## How do I get started? (development)

1. Install VueFront [CMS Connect App](http://localhost:8080/cms/) on your site and copy the CMS Connect URL.
2. Install VueFront app. (requires node.js >= 8, git, and yarn)

```bash
# Create VueFront app. replace <project-name> with vuefront
yarn create vuefront-app <project-name>
# OR npx create-vuefront-app <project-name>

yarn dev
```

## Switch to production
1. build your App
```bash
# build the app
yarn build
```

2. Copy the contents of your app from `/dist`  to your root folder of your CMS where it is hosted.

3. Configure your hosting to load `index.html` first. This can be a bit tricky. 

For OpenCart CMS you can use this:

- Apache

```apache
# for VeuFront to work you need to load index.html before any other index file
DirectoryIndex index.html index.php

```

- Nginx
```nginx
# for VeuFront to work you need to load index.html before any other index file
index index.html index.php;

# when visiting any other url, it should forward to the root index.html file
location / {
    try_files $uri $uri/ /index.html;
}
```
