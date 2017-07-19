import { FirstappPage } from './app.po';

describe('firstapp App', () => {
  let page: FirstappPage;

  beforeEach(() => {
    page = new FirstappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
