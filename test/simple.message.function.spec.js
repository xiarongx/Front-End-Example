describe('simple.message.function.js', function () {
    before(function () {
        document.body.insertAdjacentHTML(
            'afterbegin',
            '<span id="message-function"></span>'
        );
    });

    //afterEach for multiple test
    after(function () {
        document.body.removeChild(document.getElementById('message-function'));
    });

    it('should present the correct massage', function () {
        getElementByIdSetContent('message-function');
        var sut = document.getElementById('message-function').textContent;
        expect(sut).to.equal('Hello from a function');

    });

});
