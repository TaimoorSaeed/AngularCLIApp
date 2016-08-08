import { ReddditAppPage } from './app.po';

describe('redddit-app App', function() {
  let page: ReddditAppPage;

  beforeEach(() => {
    page = new ReddditAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
