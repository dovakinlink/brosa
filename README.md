# Brosa
[![CircleCI](https://circleci.com/gh/JesseFarebro/brosa.svg?style=svg)](https://circleci.com/gh/JesseFarebro/brosa)

This is the repository of my personal website. This project started off as a passion project to learn some new technologies and showcase what I think is a modern isomorphic web app. There will be plenty more added on to the website in the future months (school permitting) but stay tuned for some tutorials, blog posts, competitive programming problems and solutions as well as the occasional rants.


## Design Intent
I wanted to open source my personal website to showcase the ease and simplicity in which one can use modern web technologies and not have there project turn into a giant pile of spaghetti code with libraries bolted on as an afterthought. I think we see this way to much in the web community as we've tried to solve the shortcomings of the platform, especially with regards to design patterns and build infrastructure.

I think ES6 with the help of transpilers like babel have helped show us the way of the future for the web. Using technologies like tree shaking (Webpack 2) to minimize the size of our builds. Smart code splitting and more of a unidirectional data flow will also help reduce even more complexity of these ever growing isomorphic web application. Using simple concepts like these will help make the web a better place and hopefully gain more parity with native apps.

I've exhaustively tried to use every last feature in the latest versions of popular frameworks and build tools to simplify the process of developing a modern web app. I hope as you take a look through the source code of my personal website you maybe can takeaway some of these insights and use them in your own products.

### Core Libraries
- [React](https://github.com/facebook/react)
- [React CSSModules](https://github.com/gajus/react-css-modules)
- [PostCSS](https://github.com/postcss/postcss)
- [Webpack 2](https://github.com/webpack/webpack)
- [Universal Webpack](https://github.com/halt-hammerzeit/universal-webpack)
- [Express](https://github.com/expressjs/express)

## Deployment
You can't have such an amazing modern web application without an equally amazing deployment process. The site is hosted on [DigitalOcean](https://digitalocean.com) and makes heavy use of [Docker](https://docker.com) for testing, consistency and security.

I'll have a blog post up soon on the deployment process I used. Stay tuned!

## License
```
MIT License

Copyright (c) 2016 Jesse Farebrother

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
