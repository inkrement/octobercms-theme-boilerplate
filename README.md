# Minimalistic October CMS Boilerplate
This is a basic front end web boilerplate aimed at rapid set up for October CMS web projects.

Includes:

 * Twitter bootstrap 4
 * fontawesome
 * gulp

## Requirements

 * Bash-Skills
 * npm

## Installation
Clone this repository, open a terminal and navigate into this folder. Then run the following commands:

```
npm install
gulp
```

## Usage
Update the information in `theme.yaml` and `version.yaml` to fit your needs. I suggest
to put all new scss rules into `src/sass/syle.scss` or link from there to the used files.
If you need other dependancies you should use bower to install them (the `--save` flag in bower
  will add an entry in the `bower.json` file). Then you will have to import them in your
  `src/sass/vendor.scss` file. I don't want to auto-import all bower-files, because
  most of the libraries ship sass/css or JS/minJS versions at the same time. So an
  auto-import would result in a usage of the same information twice. I also use a
  own file (`src/sass/_vars.scss`) to introduce variables. This allows that a dependencies
  upgrade does not overwrite your configuration.

The the following command is quite useful, it will recognize file changes and re-compiles
them.

```
gulp watch
```

## Credits
Based on [Emil's Nuke-Proof, Intergalactic, Front End Boilerplate](https://github.com/ChewyJetpack/Emil-s-Nuke-Proof-Intergalactic-Front-End-Boilerplate) and loosely inspired by andradedev's [October Cms Themes Devworkflow](https://github.com/andradedev/October-Cms-Devworkflow).
