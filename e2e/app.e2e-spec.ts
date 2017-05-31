import { Trvrl.Github.IoPage } from './app.po';

describe('trvrl.github.io App', () => {
  let page: Trvrl.Github.IoPage;

  beforeEach(() => {
    page = new Trvrl.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
