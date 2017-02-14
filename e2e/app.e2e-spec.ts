import { ProfileprojectPage } from './app.po';

describe('profileproject App', function() {
  let page: ProfileprojectPage;

  beforeEach(() => {
    page = new ProfileprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
