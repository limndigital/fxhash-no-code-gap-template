# fx(hash) NO-CODE GAP\* Template

**Licensed under Creative Commons Attribution-ShareAlike 4.0 International Public License.**  
_Please see [License.md](./LICENSE.md "License") for details._  
<img src="./assets/cc.svg" alt="Creative Commons" width="30"/>
<img src="./assets/by.svg" alt="Attribution" width="30"/>
<img src="./assets/sa.svg" alt="Share Alike" width="30"/>

---

# What is this?

This is the absolute simplest template to create a GAP\* on [fx(hash)](https://fxhash.xyz).

1. Create as many _"Trait Layers"_ as you want.
2. Create as many _"Trait Images"_ in each Layer as you want.
3. Change the Title, Artist Name, Layer Count, Trait Count in the `settings.js` file.
4. Test with a local server _(instructions below)_ to make sure everything works.
5. ZIP _(compress)_ the entire folder.
6. Upload the .ZIP file to the **fx(hash) Sandbox** for testing.
7. Pubilsh your new **GAP** on fx(hash)! _(step-by-step instructions in the Discussions)_

**🔥 NOT A SINGLE LINE OF CODE NEEDED! 🔥**

## What is a GAP?

GAP stands for **Generative Assembly Project** and it's term coined by [@LimnDigital](https://twitter.com/limndigital "@LimnDigital on Twitter") to describe fx(hash) Projects that randomly "**assemble**" layers of images _(traits)_ to form new, random Artworks. This is in technical contrast to _"pure code"_ Generative Tokens that create patterns, shapes, and images.

## Isn't that just a PfP?

A GAP _can_ be a PfP. But it doesn't have to be. The image layers could be hills, trees, and skies that assemble to form a **Landscape GAP**. It could be multiple layers of flowers that assemble to form a **Garden GAP**.

By braodly labeling these templates as just a _PfP_ dramatically limits their use and understanding by Artists who may have little or no programming skills.

# Let's dive in!

## Requirements

- [Visual Studio Code (VSC) FREE](https://code.visualstudio.com/ "VS Code") : The top code editor used by millions of coders and companies world wide.
- Local HTTP server _(we will add to VSC)_ so you can test your GAP on your computer in real time so you don't have to upload to fx(hash) Sandbox.

## Steps

1. Click the "Code" button above and select "Download ZIP".
2. You should put this ZIP in a safe place on your computer, like a dedicated Dropbox folder. So if your computer falls off a truck, is stolen, etc., your GAP will always be safe and available in your Dropbox.
3. Unzip the downloaded ZIP file.
4. Download and install VSC.
5.

Before diving into the development of your token, we recommend reading the [Guide to mint a Generative Token](https://fxhash.xyz/articles/guide-mint-generative-token) to get some understanding of the process.

If you are looking for a boilerplate that handles the compression to a ZIP file at the cost of running a command, packaging modules, minifying, you can use the [fxhash webpack boilerplate](https://github.com/fxhash/fxhash-webpack-boilerplate) instead.

# Installation

Clone the repository on your machine and move to the directory

```sh
$ git clone https://github.com/fxhash/fxhash-simple-boilerplate.git your_folder && cd your_folder
```

# fxhash snippet

fxhash requires you to use a javascript code snippet so that the platform can inject some code when tokens will be generated from your Generative Token. The code snippet is already in the `index.html` file of this boilerplate, so you don't have to add it yourself.

**During the development stages, the snippet will generate a random hash each time the page is refreshed**. This way, it helps you reproduce the conditions in which your token will be executed on fxhash.

It creates 2 variables:

- `fxhash`: a random 64 characters hexadecimal string. This particular variable will be hardcoded with a static hash when someone mints a token from your GT
- `fxrand()`: a PRNG function that generates deterministic PRN between 0 and 1. **Simply use it instead of Math.random()**.

_The index.js of this boilerplate quickly demonstrates how to use these_.

# How do Generative Tokens work

This is how Generative Tokens work on fxhash:

- you upload your project to the platform (see next section)
- you mint your project
- when a collector will mint its unique token from your Generative Token, a random hash will be hard-coded in the **fxhash code snippet**
- the token will now have its own `index.html` file, with a **static** hash, ensuring its immutability

The [Guide to mint a Generative Token](https://fxhash.xyz/articles/guide-mint-generative-token) give in-depth details about this process.

# Publish your token

Once you are happy with the results, you ned to compress the contents of this directory to a ZIP file. The `index.html` must be at the root of the archive.

Go to [https://fxhash.xyz/sandbox/](https://fxhash.xyz/sandbox/) and upload your `.zip` file in there to see if it works properly.

Finally, you can mint your token using the same `.zip` file.

# Rules to follow

> Theses rules must be followed to ensure that your token will be future-proof, accepted by fxhash, and behave in the intended way

- the zip file must be under 15 Mb
- any path to a resource must be relative (./path/to/file.ext)
- no external resources allowed, you must put all your resources in the `public/` folder (sub-folders are OK)
- no network calls allowed (but calls to get resources from within your `public/` folder)
- you must handle any viewport size (by implementing a response to the `resize` event of the `window`)
- you **cannot use random number generation without a seed** (the same input hash must always yield the same output). The `fxrand` function does a very good job in that regard.
