'use strict';

angular.module('ngswipeDemoApp')
  .controller('MainCtrl', function ($scope, $http, $sanitize, feed) {
    feed.fetch('http%3A%2F%2Fdailyjs.com%2Fatom.xml', 'feed.entry').then(function (data) {
      var newPages = [];

      for (var i=0; i<data.query.results.entry.length; i++) {
        newPages.push({
          id: i,
          content: data.query.results.entry[i].content.content
        });
      }

      $scope.pages = newPages;
    });

    $scope.pages = [
      {
        id: 0,
        content: [
          { src: 'http://rack.0.mshcdn.com/media/ZgkyMDEzLzA0LzI5LzY3L1NhdHVybkh1cnJpLjQzYTlkLmpwZwpwCXRodW1iCTU3NXgzMjMjCmUJanBn/8364ada9/821/SaturnHurricane.jpg'},
          'NASA\'s Cassini spacecraft captured what the agency calls a "behemoth" hurricane on Saturn that has been churning for years. With a 1,250-mile-wide eye, the hurricane is 20 times larger than those we see on Earth' +
          'This first color image, acquired on Nov. 27, 2012, shows the hurricane at <a href="/category/space/?utm_medium=feed&amp;utm_source=rss">Saturn</a>\'s north pole, which was previously hidden when Cassini arrived in 2004 during the planet\'s winter. Scientists combined images with red, green and blue spectral filters to create a view that looks natural to the human eye. Cassini was about 261,000 miles away from the storm'
        ]
      },
      {
        id: 1,
        content: [
          "High life you probably haven't heard of them jean shorts wayfarers flexitarian DIY twee fixie selfies, pug pickled tofu mlkshk fap tousled. Trust fund fixie whatever helvetica terry richardson hoodie freegan. Cosby sweater pug lomo mixtape pinterest beard selvage occupy plaid terry richardson brooklyn, synth polaroid. Cred jean shorts blue bottle ethical brunch hoodie. Street art irony scenester, pop-up sartorial ethical wes anderson truffaut deep v narwhal post-ironic chambray pug. Helvetica direct trade plaid hashtag, selfies iphone vinyl. Flexitarian put a bird on it sriracha, deep v helvetica church-key cardigan godard vinyl messenger bag biodiesel.",
          "Cred tumblr umami brunch, skateboard salvia shoreditch ethnic pickled post-ironic sustainable. Tousled freegan lomo jean shorts. Godard small batch seitan church-key cosby sweater, plaid ethical locavore single-origin coffee pitchfork flexitarian viral jean shorts carles beard. YOLO williamsburg seitan, banksy viral scenester actually aesthetic 8-bit before they sold out try-hard cray chambray. Deep v truffaut fanny pack banjo raw denim. Dreamcatcher gentrify irony salvia keytar wayfarers, plaid odd future. Pop-up messenger bag mlkshk sustainable high life.",
          "Biodiesel authentic mustache mlkshk pickled aesthetic. 90's raw denim flannel kogi fanny pack literally, mumblecore street art mixtape readymade messenger bag hoodie whatever lomo VHS. Kogi photo booth biodiesel, sartorial bespoke skateboard truffaut hoodie fingerstache selvage fanny pack. Ugh try-hard vegan single-origin coffee direct trade master cleanse ethical shoreditch. Trust fund narwhal wolf raw denim tonx. Kale chips marfa yr mcsweeney's. Iphone photo booth squid pickled umami meh street art trust fund yr before they sold out forage, odd future ugh vinyl american apparel.",
          { src: "http://www.helpinghomelesscats.com/images/cat1.jpg" },
          "Fap blue bottle viral, pork belly gastropub single-origin coffee umami hashtag. Kale chips ethnic vinyl, seitan food truck banksy mumblecore carles. Literally gastropub pinterest, odd future pop-up forage wolf wes anderson pickled banh mi high life occupy flannel kogi. Cardigan single-origin coffee salvia meggings street art, literally readymade dreamcatcher pug keffiyeh tumblr squid narwhal. Stumptown sriracha hella high life, literally mixtape photo booth VHS cray tattooed. Typewriter locavore polaroid, shoreditch tofu banh mi kale chips put a bird on it retro letterpress. Aesthetic seitan four loko, church-key fanny pack VHS echo park dreamcatcher quinoa pug 90's post-ironic photo booth.",
          "Williamsburg put a bird on it yr you probably haven't heard of them, etsy ethnic lomo 3 wolf moon high life. Whatever 90's sriracha portland, keytar cred salvia gentrify plaid street art church-key viral. Small batch selfies fixie DIY. Truffaut gentrify mumblecore, four loko mcsweeney's jean shorts shoreditch lo-fi carles. Yr twee narwhal DIY pork belly cred, locavore godard disrupt salvia tumblr neutra. Jean shorts small batch gastropub post-ironic pop-up, four loko street art +1 twee before they sold out vinyl. Squid pinterest before they sold out, thundercats cred 8-bit master cleanse +1 literally bushwick.",
          "Neutra kogi umami marfa, keytar 8-bit mustache ennui banjo typewriter you probably haven't heard of them farm-to-table DIY quinoa bicycle rights. Cliche terry richardson readymade kale chips. Master cleanse yr plaid, vegan readymade gluten-free ethical. Four loko bushwick cardigan thundercats post-ironic. Freegan master cleanse 8-bit letterpress. Organic salvia try-hard, banjo neutra bushwick bespoke chillwave bicycle rights. Ennui post-ironic umami, echo park banjo single-origin coffee church-key polaroid gastropub hashtag viral bicycle rights thundercats stumptown.",
          "Banjo polaroid quinoa, master cleanse yr literally farm-to-table thundercats. Neutra mlkshk irony, raw denim cosby sweater odd future blog aesthetic biodiesel mixtape mcsweeney's brooklyn 3 wolf moon. Literally mumblecore single-origin coffee, irony swag leggings pitchfork sustainable disrupt truffaut polaroid plaid flexitarian carles. Beard small batch iphone next level, banjo retro shoreditch craft beer gentrify readymade 90's church-key banksy food truck lomo. Pour-over terry richardson sustainable flexitarian. Fixie pop-up gentrify flexitarian tumblr, blue bottle farm-to-table. Plaid direct trade terry richardson tousled mumblecore photo booth.",
          "Williamsburg put a bird on it yr you probably haven't heard of them, etsy ethnic lomo 3 wolf moon high life. Whatever 90's sriracha portland, keytar cred salvia gentrify plaid street art church-key viral. Small batch selfies fixie DIY. Truffaut gentrify mumblecore, four loko mcsweeney's jean shorts shoreditch lo-fi carles. Yr twee narwhal DIY pork belly cred, locavore godard disrupt salvia tumblr neutra. Jean shorts small batch gastropub post-ironic pop-up, four loko street art +1 twee before they sold out vinyl. Squid pinterest before they sold out, thundercats cred 8-bit master cleanse +1 literally bushwick narhwal.",
          "Biodiesel authentic mustache mlkshk pickled aesthetic. 90's raw denim flannel kogi fanny pack literally, mumblecore street art mixtape readymade messenger bag hoodie whatever lomo VHS. Kogi photo booth biodiesel, sartorial bespoke skateboard truffaut hoodie fingerstache selvage fanny pack. Ugh try-hard vegan single-origin coffee direct trade master cleanse ethical shoreditch. Trust fund narwhal wolf raw denim tonx. Kale chips marfa yr mcsweeney's. Iphone photo booth squid pickled umami meh street art trust fund yr before they sold out forage, odd future ugh vinyl american apparel fixie.",
        ]
      }, {
        id: 2,
        content: [
          { src: "http://aaapgs.com/images/7.jpg" },
          { src: "https://si0.twimg.com/profile_images/2631803453/2d52c9ca1e17f2e6e53ae55e7e31263c.jpeg" },
          { src: "http://a0.twimg.com/profile_images/3134132067/6d49fdd2dcb9c489528de8dd4e4fa48c.jpeg" },
          { src: "http://free-android.biz/uploads/images/logotypes/37345.jpg" },
          { src: "http://free-android.biz/uploads/images/logotypes/45080.jpg" },
          { src: "http://blog.timesunion.com/mohawkhudson/files/2010/04/buzz.jpg" }
        ]
      }, {
        id: 3,
        content: [
          "High life you probably haven't heard of them jean shorts wayfarers flexitarian DIY twee fixie selfies, pug pickled tofu mlkshk fap tousled. Trust fund fixie whatever helvetica terry richardson hoodie freegan. Cosby sweater pug lomo mixtape pinterest beard selvage occupy plaid terry richardson brooklyn, synth polaroid. Cred jean shorts blue bottle ethical brunch hoodie. Street art irony scenester, pop-up sartorial ethical wes anderson truffaut deep v narwhal post-ironic chambray pug. Helvetica direct trade plaid hashtag, selfies iphone vinyl. Flexitarian put a bird on it sriracha, deep v helvetica church-key cardigan godard vinyl messenger bag biodiesel.",
          "Cred tumblr umami brunch, skateboard salvia shoreditch ethnic pickled post-ironic sustainable. Tousled freegan lomo jean shorts. Godard small batch seitan church-key cosby sweater, plaid ethical locavore single-origin coffee pitchfork flexitarian viral jean shorts carles beard. YOLO williamsburg seitan, banksy viral scenester actually aesthetic 8-bit before they sold out try-hard cray chambray. Deep v truffaut fanny pack banjo raw denim. Dreamcatcher gentrify irony salvia keytar wayfarers, plaid odd future. Pop-up messenger bag mlkshk sustainable high life.",
          "Biodiesel authentic mustache mlkshk pickled aesthetic. 90's raw denim flannel kogi fanny pack literally, mumblecore street art mixtape readymade messenger bag hoodie whatever lomo VHS. Kogi photo booth biodiesel, sartorial bespoke skateboard truffaut hoodie fingerstache selvage fanny pack. Ugh try-hard vegan single-origin coffee direct trade master cleanse ethical shoreditch. Trust fund narwhal wolf raw denim tonx. Kale chips marfa yr mcsweeney's. Iphone photo booth squid pickled umami meh street art trust fund yr before they sold out forage, odd future ugh vinyl american apparel.",
          { src: "http://www.helpinghomelesscats.com/images/cat1.jpg" },
          "Fap blue bottle viral, pork belly gastropub single-origin coffee umami hashtag. Kale chips ethnic vinyl, seitan food truck banksy mumblecore carles. Literally gastropub pinterest, odd future pop-up forage wolf wes anderson pickled banh mi high life occupy flannel kogi. Cardigan single-origin coffee salvia meggings street art, literally readymade dreamcatcher pug keffiyeh tumblr squid narwhal. Stumptown sriracha hella high life, literally mixtape photo booth VHS cray tattooed. Typewriter locavore polaroid, shoreditch tofu banh mi kale chips put a bird on it retro letterpress. Aesthetic seitan four loko, church-key fanny pack VHS echo park dreamcatcher quinoa pug 90's post-ironic photo booth.",
          "Williamsburg put a bird on it yr you probably haven't heard of them, etsy ethnic lomo 3 wolf moon high life. Whatever 90's sriracha portland, keytar cred salvia gentrify plaid street art church-key viral. Small batch selfies fixie DIY. Truffaut gentrify mumblecore, four loko mcsweeney's jean shorts shoreditch lo-fi carles. Yr twee narwhal DIY pork belly cred, locavore godard disrupt salvia tumblr neutra. Jean shorts small batch gastropub post-ironic pop-up, four loko street art +1 twee before they sold out vinyl. Squid pinterest before they sold out, thundercats cred 8-bit master cleanse +1 literally bushwick.",
          "Neutra kogi umami marfa, keytar 8-bit mustache ennui banjo typewriter you probably haven't heard of them farm-to-table DIY quinoa bicycle rights. Cliche terry richardson readymade kale chips. Master cleanse yr plaid, vegan readymade gluten-free ethical. Four loko bushwick cardigan thundercats post-ironic. Freegan master cleanse 8-bit letterpress. Organic salvia try-hard, banjo neutra bushwick bespoke chillwave bicycle rights. Ennui post-ironic umami, echo park banjo single-origin coffee church-key polaroid gastropub hashtag viral bicycle rights thundercats stumptown.",
          "Banjo polaroid quinoa, master cleanse yr literally farm-to-table thundercats. Neutra mlkshk irony, raw denim cosby sweater odd future blog aesthetic biodiesel mixtape mcsweeney's brooklyn 3 wolf moon. Literally mumblecore single-origin coffee, irony swag leggings pitchfork sustainable disrupt truffaut polaroid plaid flexitarian carles. Beard small batch iphone next level, banjo retro shoreditch craft beer gentrify readymade 90's church-key banksy food truck lomo. Pour-over terry richardson sustainable flexitarian. Fixie pop-up gentrify flexitarian tumblr, blue bottle farm-to-table. Plaid direct trade terry richardson tousled mumblecore photo booth.",
          "Williamsburg put a bird on it yr you probably haven't heard of them, etsy ethnic lomo 3 wolf moon high life. Whatever 90's sriracha portland, keytar cred salvia gentrify plaid street art church-key viral. Small batch selfies fixie DIY. Truffaut gentrify mumblecore, four loko mcsweeney's jean shorts shoreditch lo-fi carles. Yr twee narwhal DIY pork belly cred, locavore godard disrupt salvia tumblr neutra. Jean shorts small batch gastropub post-ironic pop-up, four loko street art +1 twee before they sold out vinyl. Squid pinterest before they sold out, thundercats cred 8-bit master cleanse +1 literally bushwick alto.",
          "Biodiesel authentic mustache mlkshk pickled aesthetic. 90's raw denim flannel kogi fanny pack literally, mumblecore street art mixtape readymade messenger bag hoodie whatever lomo VHS. Kogi photo booth biodiesel, sartorial bespoke skateboard truffaut hoodie fingerstache selvage fanny pack. Ugh try-hard vegan single-origin coffee direct trade master cleanse ethical shoreditch. Trust fund narwhal wolf raw denim tonx. Kale chips marfa yr mcsweeney's. Iphone photo booth squid pickled umami meh street art trust fund yr before they sold out forage, odd future ugh vinyl american apparel fixie.",
        ]
      }, {
        id: 4,
        content: [
          { src: "http://aaapgs.com/images/7.jpg" },
          { src: "https://si0.twimg.com/profile_images/2631803453/2d52c9ca1e17f2e6e53ae55e7e31263c.jpeg" },
          { src: "http://a0.twimg.com/profile_images/3134132067/6d49fdd2dcb9c489528de8dd4e4fa48c.jpeg" },
          { src: "https://si0.twimg.com/profile_images/2631803453/2d52c9ca1e17f2e6e53ae55e7e31263c.jpeg" },
          { src: "http://free-android.biz/uploads/images/logotypes/37345.jpg" },
          { src: "http://free-android.biz/uploads/images/logotypes/45080.jpg" },
          { src: "http://blog.timesunion.com/mohawkhudson/files/2010/04/buzz.jpg" }
        ]
      }, {
        id: 5,
        content: [
          "High life you probably haven't heard of them jean shorts wayfarers flexitarian DIY twee fixie selfies, pug pickled tofu mlkshk fap tousled. Trust fund fixie whatever helvetica terry richardson hoodie freegan. Cosby sweater pug lomo mixtape pinterest beard selvage occupy plaid terry richardson brooklyn, synth polaroid. Cred jean shorts blue bottle ethical brunch hoodie. Street art irony scenester, pop-up sartorial ethical wes anderson truffaut deep v narwhal post-ironic chambray pug. Helvetica direct trade plaid hashtag, selfies iphone vinyl. Flexitarian put a bird on it sriracha, deep v helvetica church-key cardigan godard vinyl messenger bag biodiesel.",
          "Cred tumblr umami brunch, skateboard salvia shoreditch ethnic pickled post-ironic sustainable. Tousled freegan lomo jean shorts. Godard small batch seitan church-key cosby sweater, plaid ethical locavore single-origin coffee pitchfork flexitarian viral jean shorts carles beard. YOLO williamsburg seitan, banksy viral scenester actually aesthetic 8-bit before they sold out try-hard cray chambray. Deep v truffaut fanny pack banjo raw denim. Dreamcatcher gentrify irony salvia keytar wayfarers, plaid odd future. Pop-up messenger bag mlkshk sustainable high life.",
          "Biodiesel authentic mustache mlkshk pickled aesthetic. 90's raw denim flannel kogi fanny pack literally, mumblecore street art mixtape readymade messenger bag hoodie whatever lomo VHS. Kogi photo booth biodiesel, sartorial bespoke skateboard truffaut hoodie fingerstache selvage fanny pack. Ugh try-hard vegan single-origin coffee direct trade master cleanse ethical shoreditch. Trust fund narwhal wolf raw denim tonx. Kale chips marfa yr mcsweeney's. Iphone photo booth squid pickled umami meh street art trust fund yr before they sold out forage, odd future ugh vinyl american apparel.",
          { src: "http://www.helpinghomelesscats.com/images/cat1.jpg" },
          "Fap blue bottle viral, pork belly gastropub single-origin coffee umami hashtag. Kale chips ethnic vinyl, seitan food truck banksy mumblecore carles. Literally gastropub pinterest, odd future pop-up forage wolf wes anderson pickled banh mi high life occupy flannel kogi. Cardigan single-origin coffee salvia meggings street art, literally readymade dreamcatcher pug keffiyeh tumblr squid narwhal. Stumptown sriracha hella high life, literally mixtape photo booth VHS cray tattooed. Typewriter locavore polaroid, shoreditch tofu banh mi kale chips put a bird on it retro letterpress. Aesthetic seitan four loko, church-key fanny pack VHS echo park dreamcatcher quinoa pug 90's post-ironic photo booth.",
          "Williamsburg put a bird on it yr you probably haven't heard of them, etsy ethnic lomo 3 wolf moon high life. Whatever 90's sriracha portland, keytar cred salvia gentrify plaid street art church-key viral. Small batch selfies fixie DIY. Truffaut gentrify mumblecore, four loko mcsweeney's jean shorts shoreditch lo-fi carles. Yr twee narwhal DIY pork belly cred, locavore godard disrupt salvia tumblr neutra. Jean shorts small batch gastropub post-ironic pop-up, four loko street art +1 twee before they sold out vinyl. Squid pinterest before they sold out, thundercats cred 8-bit master cleanse +1 literally bushwick.",
          "Neutra kogi umami marfa, keytar 8-bit mustache ennui banjo typewriter you probably haven't heard of them farm-to-table DIY quinoa bicycle rights. Cliche terry richardson readymade kale chips. Master cleanse yr plaid, vegan readymade gluten-free ethical. Four loko bushwick cardigan thundercats post-ironic. Freegan master cleanse 8-bit letterpress. Organic salvia try-hard, banjo neutra bushwick bespoke chillwave bicycle rights. Ennui post-ironic umami, echo park banjo single-origin coffee church-key polaroid gastropub hashtag viral bicycle rights thundercats stumptown.",
          "Banjo polaroid quinoa, master cleanse yr literally farm-to-table thundercats. Neutra mlkshk irony, raw denim cosby sweater odd future blog aesthetic biodiesel mixtape mcsweeney's brooklyn 3 wolf moon. Literally mumblecore single-origin coffee, irony swag leggings pitchfork sustainable disrupt truffaut polaroid plaid flexitarian carles. Beard small batch iphone next level, banjo retro shoreditch craft beer gentrify readymade 90's church-key banksy food truck lomo. Pour-over terry richardson sustainable flexitarian. Fixie pop-up gentrify flexitarian tumblr, blue bottle farm-to-table. Plaid direct trade terry richardson tousled mumblecore photo booth.",
          "Williamsburg put a bird on it yr you probably haven't heard of them, etsy ethnic lomo 3 wolf moon high life. Whatever 90's sriracha portland, keytar cred salvia gentrify plaid street art church-key viral. Small batch selfies fixie DIY. Truffaut gentrify mumblecore, four loko mcsweeney's jean shorts shoreditch lo-fi carles. Yr twee narwhal DIY pork belly cred, locavore godard disrupt salvia tumblr neutra. Jean shorts small batch gastropub post-ironic pop-up, four loko street art +1 twee before they sold out vinyl. Squid pinterest before they sold out, thundercats cred 8-bit master cleanse +1 literally bushwick facepunch.",
          "Biodiesel authentic mustache mlkshk pickled aesthetic. 90's raw denim flannel kogi fanny pack literally, mumblecore street art mixtape readymade messenger bag hoodie whatever lomo VHS. Kogi photo booth biodiesel, sartorial bespoke skateboard truffaut hoodie fingerstache selvage fanny pack. Ugh try-hard vegan single-origin coffee direct trade master cleanse ethical shoreditch. Trust fund narwhal wolf raw denim tonx. Kale chips marfa yr mcsweeney's. Iphone photo booth squid pickled umami meh street art trust fund yr before they sold out forage, odd future ugh vinyl american apparel vinyl.",
        ]
      }, {
        id: 6,
        content: [
          { src: "http://aaapgs.com/images/7.jpg" },
          { src: "https://si0.twimg.com/profile_images/2631803453/2d52c9ca1e17f2e6e53ae55e7e31263c.jpeg" },
          { src: "http://a0.twimg.com/profile_images/3134132067/6d49fdd2dcb9c489528de8dd4e4fa48c.jpeg" },
          { src: "http://free-android.biz/uploads/images/logotypes/37345.jpg" },
          { src: "http://free-android.biz/uploads/images/logotypes/45080.jpg" },
          { src: "http://free-android.biz/uploads/images/logotypes/37345.jpg" },
          { src: "http://blog.timesunion.com/mohawkhudson/files/2010/04/buzz.jpg" }
        ]
      }
    ];
  });
