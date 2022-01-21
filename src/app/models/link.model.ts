export interface Link {
  name: string;
  path: string;
}

export const identifyLink = (index: number, link: Link) => {
  return link.name;
};
