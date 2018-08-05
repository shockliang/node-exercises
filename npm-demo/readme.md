### Shortcut ###
* npm init --yes : skip all questions to crate `package.json`.
* npm i package-name : for npm install package-name.
* npm i : for restore packages.
* ^ : Caret meaing using 4.x in ^4.13.6
* ~ : Tilde meaing using 1.8.x in ~1.8.3
* SemVer : 
    * Major: Breaking features.
    * Minor: New features.
    * Patch: Fxing bugs.
* npm list --depth=0 : for showing dependency on your app.
* npm view package-name : for showing the package details.
* npm view package-name dependencies : Showing the only package's dependencies packages.
* npm view package-nanm versions : Showing all versions.
* npm view package-name@x.x.x : Speicfy version for install.
* npm outdated : Shoing the out dated packages.
* npm update : Update package to major release only.
    * For example: 2.9.3 after updated that will be 2.10.3. Even the lasting version was 4.x.x.
* npm i -g npm-check-updates : Install for npm check updates package in global for update major version.
* npm-check-update : short for `ncu` with `-u` that only update version in `package.json`. After `ncu -u` for updates version that need using `npm i` to re-install new packages.
* npm i package-name --save-dev : Install dev dependencies.
* npm un package-name: Uninstall package. un short for uninstall.
* npm i -g package-name: Installing package-name in global.
* npm -g outdated : Shoing the out dated global packages.
* npm un -g package-name : Uninstalling package-name in global.
* npm login : Login npm account.
* npm publish : Publish package to npm after login npm account.
* npm version major : Increase major version.
* npm version minor : Increase minor version.
* npm version patch : Increase patch version.