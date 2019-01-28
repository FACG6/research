## **What is a dependency?**
Dependency is a broad software engineering term used to refer when a piece of software relies on another one. Coupling (computer programming) In software engineering, coupling or dependency is the degree to which each program module relies on each one of the other modules.

## **Why might you want to use a dependency in your project, rather than writing the code from scratch?**
develpers use other modules to use in projects not to code every peice from the beginnig, programmer want to create file is simple example of using fs module in nodejs rather than writing the code to handle file. 
using dependencies save your time and efforts and let you concentrate on your program goal.
## **Package dependencies**
Package dependencies are critical to the success of a package. When you develop the functionality of your package, you will very likely use existing code defined in other packages. Those packages then become dependencies to your project.

Your package.json file is the home for the declaration of all your dependencies, from development to production to optional. You will specify both the package name and minimum version information for each dependency.

## **Types of Dependencies**
Most people only have dependencies and devDependencies, but each of these are important to understand.
- **dependencies**: These are your normal dependencies, or rather ones that you need when running your code (e.g. React or ImmutableJS).
- **devdependencies**:These are your development dependencies. Dependencies that you need at some point in the development workflow but not while running your code (e.g. Babel or Flow).
- **peerDependencies**: Peer dependencies are a special type of dependency that would only ever come up if you were publishing your own package.
Having a peer dependency means that your package needs a dependency that is the same exact dependency as the person installing your package. This is useful for packages like react that need to have a single copy of react-dom that is also used by the person installing it.
- **optionalDependencies**: Optional dependencies are just that: optional. If they fail to install, Yarn will still say the install process was successful.
This is useful for dependencies that won’t necessarily work on every machine and you have a fallback plan in case they are not installed (e.g. Watchman).
- **bundledDependencies**: Array of package names that will be bundled when publishing the package.
Bundled dependencies should be inside your project. The functionality is basically the same as normal dependencies. 
Normal dependencies are usually installed from the npm registry. Bundled dependencies are useful in cases normal dependencies are not sufficient:
    * When you want to re-use a third party library that doesn’t come from the npm registry or that was modified.
    * When you want to re-use your own projects as modules.
    * When you want to distribute some files with your module.


## About npm
npm is the world’s largest software registry. Open source developers from every continent.


## What is a Package Manager in npm?

A package in Node.js contains all the files you need for a module.
Modules are JavaScript libraries you can include in your project.
Include the "upper-case" package ,"http","fs"
Ex: var uc = require('upper-case');
var http = require('http');


## How does it help with dependencies?

npm installs a tree of dependencies. That is, every package installed gets its own set of dependencies rather than forcing every package to share the same canonical set of packages. Obviously, virtually every single package manager in existence has to model a dependency tree at some point, since that’s how dependencies are expressed by programmers.

## what does npm init ??

npm init <initializer> can be used to set up a new or existing npm package.

initializer in this case is an npm package named create-<initializer>

Package json :
You can add a package.json file to your package to make it easy for others to manage and install. Packages published to the registry must contain a package.json file.

lists the packages your project depends on
specifies versions of a package that your project can use using semantic versioning rules
makes your build reproducible, and therefore easier to share with other developers

Downloading and installing packages locally...
npm install <package_name>
This will create the node_modules directory in your current directory (if one doesn’t exist yet) and will download the package to that directory.


## install a package globally:

You may see `npm install -g <package-name>`. The -g flag installs the module globally to your machine, rather than into the node_modules folder of that specific project. This can be useful for certain kinds of modules (e.g. command-line utilities that you might want to use anywhere).

## installing package as a dependency(Saving dependencies):

It's useful to declare dependencies within your project. This ensures that other people who clone your repo will be able to replicate your exact environment (since your node modules don't get synced with Github).

### There are two ways to save dependencies:

npm install `<package-name> --save` (this is the default for npm install in npm5)
npm install `<package-name> --save-dev`
At first glance these appear similar, but there is a distinction: --save is for dependencies that your application needs to run (i.e. things that need to be installed on the server delivering your application). --save-dev is for development dependencies that your project doesn't need in production (e.g. testing frameworks are generally only used in development — you don't need it on your live server).

`--save` will update your package.json with a section called 'dependencies', whilst `--save-dev` will put the dependency in a section called 'dev-dependencies'.

The idea is to make it clear to other developers who might work on your project what dependencies are required for it to work and what are only needed for the dev environment.

## Why is it normally a bad idea to install a package globally?

The obvious short answer is that your project depends on them. If your project depends on a package, it should be documented in package.json so that you can guarantee that it is installed when someone types npm install. Otherwise, you’ll need to add extra steps in your README file to inform anyone else who clones your project that they need to install each of your global dependencies as well.

## package.json

You can initialise Node within your project by calling `npm init` in the terminal. You will get a series of prompts, feel free to press enter through them or answer them.
The package.json created by `npm init` contains meta-information about your project, including any third-party modules you install (with the use of npm install), and will install a Node virtual environment within your project under a folder called Node_modules. This is where all the Node modules are located in your project.

