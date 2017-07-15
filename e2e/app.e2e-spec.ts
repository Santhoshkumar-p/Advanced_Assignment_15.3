import { Assignment153Page } from './app.po';

describe('assignment15-3 App', function() {
  let page: Assignment153Page;

  beforeEach(() => {
    page = new Assignment153Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
