(function() {
    function AlbumCtrl(Fixtures) {
      this.albumData = Fixtures.getAlbum();
      console.log(albumPicasso)
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
