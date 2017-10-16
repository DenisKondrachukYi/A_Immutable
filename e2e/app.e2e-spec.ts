import { GlossaryPage } from './app.po';

describe('glossary App', () => {
  let page: GlossaryPage;

  beforeEach(() => {
    page = new GlossaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
