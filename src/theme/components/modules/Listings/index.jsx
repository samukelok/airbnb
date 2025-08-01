import {
  ModuleFields,
  RichTextField,
} from '@hubspot/cms-components/fields';
import { RichText } from '@hubspot/cms-components';
import '../../../styles/listings.module.css';

export function Component() {
  return (
    <div>
      <RichText fieldPath="listing" />
    </div>
  );
}

const richTextFieldDefaultValue = `
<div class="listing-sections">
    <!-- Popular homes in Johannesburg -->
    <div class="listing-section fade-in-up">
        <div class="section-header">
            <h2 class="section-title">
                <a href="#" class="section-link">Popular homes in Johannesburg <i
                        class="fas fa-chevron-right"></i></a>
            </h2>
        </div>
        <div class="section-scroll-container">
            <button class="section-scroll-button left" data-section="johannesburg">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="listings-row" id="johannesburg-listings">
                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Sandton Penthouse" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">Sandton, Johannesburg</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.92</span>
                            </div>
                        </div>
                        <div class="distance">1,234 km away</div>
                        <div class="dates">Nov 12-17</div>
                        <div class="price">R 2,800 <span>night</span></div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Rosebank Apartment" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">Rosebank, Johannesburg</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.85</span>
                            </div>
                        </div>
                        <div class="distance">1,240 km away</div>
                        <div class="dates">Nov 15-20</div>
                        <div class="price">R 3,200 <span>night</span></div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Melville Loft" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">Melville, Johannesburg</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.78</span>
                            </div>
                        </div>
                        <div class="distance">1,250 km away</div>
                        <div class="dates">Nov 18-23</div>
                        <div class="price">R 2,400 <span>night</span></div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Braamfontein Studio" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">Braamfontein, Johannesburg</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.94</span>
                            </div>
                        </div>
                        <div class="distance">1,235 km away</div>
                        <div class="dates">Nov 20-25</div>
                        <div class="price">R 3,600 <span>night</span></div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Parktown Mansion" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">Parktown, Johannesburg</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.89</span>
                            </div>
                        </div>
                        <div class="distance">1,245 km away</div>
                        <div class="dates">Nov 22-27</div>
                        <div class="price">R 4,200 <span>night</span></div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Newtown Loft" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">Newtown, Johannesburg</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.81</span>
                            </div>
                        </div>
                        <div class="distance">1,255 km away</div>
                        <div class="dates">Nov 25-30</div>
                        <div class="price">R 3,000 <span>night</span></div>
                    </div>
                </div>
            </div>
            <button class="section-scroll-button right" data-section="johannesburg">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </div>

    <!-- Available next month in Cape Town -->
    <div class="listing-section fade-in-up">
        <div class="section-header">
            <h2 class="section-title">
                <a href="#" class="section-link">Available next month in Cape Town <i
                        class="fas fa-chevron-right"></i></a>
            </h2>
        </div>
        <div class="section-scroll-container">
            <button class="section-scroll-button left" data-section="capetown">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="listings-row" id="capetown-listings">
                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Camps Bay Villa" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">Camps Bay, Cape Town</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.96</span>
                            </div>
                        </div>
                        <div class="distance">1,400 km away</div>
                        <div class="dates">Dec 5-10</div>
                        <div class="price">R 4,500 <span>night</span></div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="V&A Waterfront" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">V&A Waterfront, Cape Town</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.88</span>
                            </div>
                        </div>
                        <div class="distance">1,420 km away</div>
                        <div class="dates">Dec 8-13</div>
                        <div class="price">R 3,800 <span>night</span></div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Sea Point Apartment" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">Sea Point, Cape Town</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.82</span>
                            </div>
                        </div>
                        <div class="distance">1,380 km away</div>
                        <div class="dates">Dec 10-15</div>
                        <div class="price">R 3,200 <span>night</span></div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Clifton Beach House" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">Clifton, Cape Town</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.93</span>
                            </div>
                        </div>
                        <div class="distance">1,410 km away</div>
                        <div class="dates">Dec 12-17</div>
                        <div class="price">R 5,200 <span>night</span></div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Green Point Loft" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">Green Point, Cape Town</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.87</span>
                            </div>
                        </div>
                        <div class="distance">1,395 km away</div>
                        <div class="dates">Dec 14-19</div>
                        <div class="price">R 3,600 <span>night</span></div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="listing-image-container">
                        <img src="https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Observatory Apartment" class="listing-image">
                        <button class="wishlist-btn">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="listing-details">
                        <div class="location-rating">
                            <div class="location">Observatory, Cape Town</div>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>4.85</span>
                            </div>
                        </div>
                        <div class="distance">1,390 km away</div>
                        <div class="dates">Dec 16-21</div>
                        <div class="price">R 3,100 <span>night</span></div>
                    </div>
                </div>
            </div>
            <button class="section-scroll-button right" data-section="capetown">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </div>
  </div>
`;

export const fields = (
  <ModuleFields>
    <RichTextField
      name="listing"
      label="Listing"
      default={richTextFieldDefaultValue}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Listings',
};
