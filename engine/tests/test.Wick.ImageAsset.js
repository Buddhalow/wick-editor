describe('Wick.ImageAsset', function() {
    describe('#constructor', function () {
        it('should instantiate correctly', function() {
            var image = new Wick.ImageAsset({
                filename:'test.png',
                src: TestUtils.TEST_IMG_SRC_PNG
            });

            expect(image instanceof Wick.Asset).to.equal(true);
            expect(image instanceof Wick.ImageAsset).to.equal(true);
            expect(image.classname).to.equal('ImageAsset');
        });
    });

    describe('#MIMEType', function () {
        it('get MIMEType should return correct MIME type', function() {
            var image = new Wick.ImageAsset({
                filename: 'test.png',
                src: TestUtils.TEST_IMG_SRC_PNG
            });
            expect(image.MIMEType).to.equal('image/png');
        });
    });

    describe('#fileExtension', function () {
        it('get fileExtension should return correct file extension', function() {
            var image = new Wick.ImageAsset({
                filename: 'test.png',
                src: TestUtils.TEST_IMG_SRC_PNG
            });
            expect(image.fileExtension).to.equal('png');
        });
    });
});
