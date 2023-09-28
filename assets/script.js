const dotsContainer = document.createElement('div');
dotsContainer.classList.add('dots');

// Créer les éléments de points individuels et les ajouter au conteneur de points
//slides.length
for (let i = 0; i < 4; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) {
	dot.classList.add('dot_selected');// mettre par défaut le bullet de la premiere image à blanc
}
  dotsContainer.appendChild(dot);
}

// Obtenir l'élément 'banner' par son ID
const bannerElement = document.getElementById('banner');

// Ajouter le conteneur de points à l'élément 'banner'
bannerElement.appendChild(dotsContainer);
// récupérer la flèche gauche 
const left_arrow = document.querySelector(".arrow_left");
console.log(left_arrow);

// récupérer la flèche droite
const right_arrow = document.querySelector(".arrow_right");
console.log(right_arrow);
//indice du slide courant
let currentSlideIndex = 0;

//déclarer un écouter d'évènement pour la flèche gauche 
left_arrow.addEventListener("click", function () {
	console.log("Vous avez cliqué sur la flèche gauche")
	currentSlideIndex--;// décrementer l'indice du slide courant
	showSlide(currentSlideIndex);
});


//déclarer un écouter d'évènement pour la flèche droite 
right_arrow.addEventListener("click", function () {
	console.log("Vous avez cliqué sur la flèche droite")
	currentSlideIndex++;//incrementer l'indice du slide courant
	showSlide(currentSlideIndex);
	});

//fonction pour faire changer les images

function showSlide(index) {
	/*if (index < 0) {
		currentSlideIndex = slides.length - 1;
		}
		 else if (index >= slides.length) {
			currentSlideIndex = 0;
		}*/
		index < 0 ? currentSlideIndex = slides.length - 1 : index >= slides.length ? currentSlideIndex = 0 : true;
 //recupérer les images 
	document.querySelector('.banner-img').src='./assets/images/slideshow/'+slides[currentSlideIndex]['image'];
	document.getElementById('tag_id').innerHTML=slides[currentSlideIndex]['tagLine']
	// Mettre en  le bullet selected
	const bullets = document.querySelectorAll('.dot');
	bullets.forEach((bullet, i) => {
		/*if (i === currentSlideIndex) {
			bullet.classList.add('dot_selected');
		} else {
			bullet.classList.remove('dot_selected');
		}*/
		i === currentSlideIndex ? bullet.classList.add('dot_selected') : bullet.classList.remove('dot_selected');

	});
	}



  
    
  