var book ={
  "kind": "books#volumes",
  "totalItems": 2407,
  "items": [
    {
      "kind": "books#volume",
      "id": "tcSMCwAAQBAJ",
      "etag": "oOK7rDIATdI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/tcSMCwAAQBAJ",
      "volumeInfo": {
        "title": "Harry Potter and the Cursed Child – Parts One and Two (Special Rehearsal Edition)",
        "authors": [
          "J.K. Rowling",
          "John Tiffany",
          "Jack Thorne"
      ],
        "publisher": "Pottermore Publishing",
        "publishedDate": "2016-07-31",
        "description": "Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play received its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.",
        "industryIdentifiers": [
    {
            "type": "ISBN_13",
            "identifier": "9781781107041"
    },
    {
            "type": "ISBN_10",
            "identifier": "1781107041"
    }
  ],
      "readingModes": {
          "text": true,
          "image": true
  },
      "pageCount": 320,
      "printType": "BOOK",
      "categories": [
          "Drama"
  ],
  "averageRating": 3.5,
  "ratingsCount": 207,
  "maturityRating": "NOT_MATURE",
  "allowAnonLogging": true,
  "contentVersion": "1.2.2.0.preview.3",
  "panelizationSummary": {
  "containsEpubBubbles": false,
  "containsImageBubbles": false
  },
  "imageLinks": {
  "smallThumbnail": "http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "thumbnail": "http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  "language": "en",
  "previewLink": "http://books.google.ca/books?id=tcSMCwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=1&source=gbs_api",
  "infoLink": "http://books.google.ca/books?id=tcSMCwAAQBAJ&dq=harry+potter&hl=&source=gbs_api",
  "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Cursed_Child_Parts.html?hl=&id=tcSMCwAAQBAJ"
  },
  "saleInfo": {
  "country": "CA",
  "saleability": "NOT_FOR_SALE",
  "isEbook": false
  },
  "accessInfo": {
  "country": "CA",
  "viewability": "PARTIAL",
  "embeddable": true,
  "publicDomain": false,
  "textToSpeechPermission": "ALLOWED",
  "epub": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.ca/books/download/Harry_Potter_and_the_Cursed_Child_Parts-sample-epub.acsm?id=tcSMCwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "pdf": {
  "isAvailable": true,
  "acsTokenLink": "http://books.google.ca/books/download/Harry_Potter_and_the_Cursed_Child_Parts-sample-pdf.acsm?id=tcSMCwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
  },
  "webReaderLink": "http://play.google.com/books/reader?id=tcSMCwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
  "accessViewStatus": "SAMPLE",
  "quoteSharingAllowed": false
  },
  "searchInfo": {
  "textSnippet": "Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be ..."
  }
  }
]
}
console.log(book.items[0].volumeInfo.printType);