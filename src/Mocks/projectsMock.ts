import { cdnHelper } from '@/src/Helpers/cdnHelper';

interface IPRops {
  title: string;
  text: string;
  demo: string;
  repo: string;
  image: string;
}

export const projectMock: IPRops[] = [
  {
    title: 'ceanny',
    text: 'The technologies used in project; Next.js, End-to-end React, Created data models with TypeScript',
    demo: 'https://ceanny.vercel.app/',
    repo: 'https://github.com/edalkgl/ceanny',
    image: cdnHelper(
      'assets/edalkoglu-com/ceanny-vercel-app-1024x600desktop-7330d8.jpeg'
    )
  }
];
