describe(`outer`, () => {

  describe(`inner one`, () => {
    it(`test one`, async () => {
      expect('foo').toMatchSnapshot();
    });
  });

  describe(`inner two`, () => {
    it(`test two`, async () => {
      expect('bar').toMatchSnapshot();
    });
  });

  describe(`inner three`, () => {
    it(`test three`, async () => {
      expect('baz').toMatchSnapshot();
    });
  });

});
