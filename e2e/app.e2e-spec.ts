import { TeamvoyPlayerPage } from './app.po';

describe('teamvoy-player App', () => {
  let page: TeamvoyPlayerPage;

  beforeEach(() => {
    page = new TeamvoyPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
