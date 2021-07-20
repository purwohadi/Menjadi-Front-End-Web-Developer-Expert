import CONFIG from '../../global/config';

let html = '';
const createRestoItemTemplate = (item) => {
	html = `<restaurant-item>
				<article class="list-item">
					<div class="p-relative">
						<div class="box-content">
							<span>Kota ${item.city}<span></div>
						</div>
						<div class="list-item-thumbnail">
							<picture>
								<source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_S}${item.pictureId}">
								<img class="card-image lazyload" 
									data-srcset="${CONFIG.BASE_IMAGE_URL_M}${item.pictureId}"
									alt="${item.name}" crossorigin="anonymous"  srcset=""/>
							</picture>
						</div>
						<div class="list-item-content">
							<h2 class="content-title"><a href="#">${item.name}</a></h2>
							<p class="content-rating"><span>⭐</span> ${item.rating}</p>
							<p class="content-description">${item.description}</p>
							<div class="content-footer">
								<a href="#/detail/${item.id}">
									<button class="read-more-button">Lihat Lebih Banyak</button>
								</a>
							</div>
						</div>
					</div>
				</article>
			</restaurant-item>`;
	return html;
};

const createRestoDetailTemplate = (restaurant) => {
	const custReview = restaurant.customerReviews.map((cr) => `<div class="customer-review-detail-box">
        <div class="header-review-detail row">
            <div class="customer-review-name col-sm" tabindex="0">${cr.name}</div>
            <div class="customer-review-date col-sm" tabindex="0">${cr.date}</div>
        </div>
        <div class="customer-review-review" tabindex="0">${cr.review}</div>
    </div>`).join(' ');

	html = `	<div class="restaurant-header">
					<div class="container">
						<div>
							<picture>
								<source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_S}${restaurant.pictureId}">
								<img class="detail-image lazyload" 
									data-src="${CONFIG.BASE_IMAGE_URL_L}${restaurant.pictureId}"
									alt="${restaurant.name}" crossorigin="anonymous"/>
							</picture>
						</div>
						<div class="col-info">
							<h1>${restaurant.name}</h1>
							<div class="categories-info">
								<span>${restaurant.categories[0].name}</span> 
								<span>${restaurant.categories[1].name}</span>
							</div>
							<div class="basic-info">
								<div class="basic-info-col">
									<i class="fa fa-star active" aria-hidden="true"></i>
									<span>${restaurant.rating}</span>
								</div>
								<div class="basic-info-col">
									<i class="fa fa-map-marker" aria-hidden="true"></i>
									<span>${restaurant.city}</span>
								</div>
							</div>
							<div class="description-info">
								${restaurant.description}
							</div>
						</div>
						<div class="col-address-info">
							<h4>Address</h4>
							<p>${restaurant.address}</p>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="main-menu">
						<div class="main-list-detail">
							<div class="main-header-detail" tabindex="0">
								<div class="main-title-detail">
									<h1>Menu Makanan</h1>
								</div>
							</div>
							<div class="main-content-detail" tabindex="0">
								${restaurant.menus.foods.map((food) => food.name).join(', ')}
							</div>
						</div>
						<div class="main-list-detail" style="margin-top: 40px;" tabindex="0">
							<div class="main-header">
								<div class="main-title-detail">
									<h1>Menu Minuman</h1>
								</div>
							</div>
							<div class="main-content-detail" tabindex="0">
								${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}
							</div>
						</div>

						<div class="main-list-detail" tabindex="0" style="margin-top: 40px;">
							<div class="main-header">
								<div class="main-title-detail">
									<h1>Ulasan Pelanggan </h1>
								</div>
							</div>
							<div class="detail-review" tabindex="0">
								${custReview}
							</div>
						</div>
					</div>
				</div>`;
	return html;
};

const createLikeButtonTemplate = () => `
	<button aria-label="like" id="likeButton" class="like">
		<i class="fa fa-heart-o" aria-hidden="true"></i>
	</button>`;

const createUnLikedButtonTemplate = () => `
	<button aria-label="unlike" id="likeButton" class="like">
		<i class="fa fa-heart" aria-hidden="true"></i>
	</button>`;

export {
	createRestoItemTemplate,
	createRestoDetailTemplate,
	createLikeButtonTemplate,
	createUnLikedButtonTemplate,
};
