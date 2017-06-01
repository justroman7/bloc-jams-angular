(function() {
    function AlbumCtrl() {
      this.albumData =albumPicasso;
      console.log(albumPicasso)
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
