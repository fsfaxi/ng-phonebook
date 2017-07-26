import { NgPhonebookPage } from './app.po';

describe('ng-phonebook App', () => {
  let page: NgPhonebookPage;

  beforeEach(() => {
    page = new NgPhonebookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
