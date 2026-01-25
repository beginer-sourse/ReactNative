// this is a module declaration file to let TypeScript know how to handle PNG imports
// when they are used in the project.
// By declaring the module, we inform TypeScript that any import ending with .png should be treated as a module, allowing us to import PNG images without type errors.
declare module "*.png"
