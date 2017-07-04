import { ShooterPage } from './app.po';

describe('shooter App', () => {
  let page: ShooterPage;

  beforeEach(() => {
    page = new ShooterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
