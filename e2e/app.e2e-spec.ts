import { Test3PartyPage } from './app.po';

describe('test3-party App', () => {
  let page: Test3PartyPage;

  beforeEach(() => {
    page = new Test3PartyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
