describe(`outer`, () => {

  describe(`inner one`, () => {
    it(`test one`, () => {
      expect('foo').toMatchSnapshot();
    });
  });

  describe(`inner two`, () => {
    it(`test two`, () => {
      expect('bar').toMatchSnapshot();
    });
  });

  describe(`inner three`, () => {
    it(`test three`, () => {
      expect('baz').toMatchSnapshot();
    });
  });

});
