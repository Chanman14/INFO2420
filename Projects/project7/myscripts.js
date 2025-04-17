// JavaScript Document


	PrintButton1 = new Image
	PrintButton2 = new Image
	logo1 = new Image
	logo2 = new Image
if (document.images) {
	PrintButton1.src = "Images/print1.jpg"
	PrintButton2.src = "Images/print2.jpg"
	logo1.src = "Images/logo1.png"
	logo2.src = "Images/logo2.png"
}


		var imgArray = new Array(
			'image3lg.png',
			'image2lg.png',
			'image1lg.png',
			'image4lg.png'
			

		);


		var titleArray = new Array(
			'Jello Cake',
			'Dutch Oven',
			'Blue Cupcake',
			'Raspberry Cake'
			
		);
			
		var imgPath = "Images/FullSize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
		
