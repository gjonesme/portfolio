declare module "*.svg" {
  //   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const content: any;
  export default content;
}

declare module "*.png" {
  const png: any;
  export default png;
}

declare module "*.css" {
  const css: any;
  export default css;
}
