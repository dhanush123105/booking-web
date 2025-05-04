// Venue data
const venues = [
    {
        id: 1,
        name: "Royal Palace Banquet",
        location: "Hyderabad",
        price: 120000,
        capacity: 450,
        acType: "ac",
        rating: 4.5,
        amenities: ["parking", "catering", "decor"],
        image: "https://cdn0.weddingwire.in/vendor/9118/3_2/960/jpeg/whatsapp-image-2024-09-05-at-3-06-18-pm_15_479118-172559822764198.webp"
    },
    {
        id: 2,
        name: "Seaside Resort",
        location: "Goa",
        price: 180000,
        capacity: 250,
        acType: "non-ac",
        rating: 4.8,
        amenities: ["parking", "catering"],
        image: "https://travelworldonline.in/wp-content/uploads/2024/09/Goa-Tourism-honoured-as-Best-Wedding-Destination-at-Wow-Awards-Middle-East-2024.jpg"
    },
    {
        id: 3,
        name: "Heritage Haveli",
        location: "Jaipur",
        price: 95000,
        capacity: 350,
        acType: "ac",
        rating: 4.2,
        amenities: ["parking", "decor"],
        image: "https://www.thelalit.com/wp-content/uploads/2024/09/jaipur-wedding-2.jpg"
    },
    {
        id: 4,
        name: "Green Valley Gardens",
        location: "Banglore",
        price: 75000,
        capacity: 200,
        acType: "non-ac",
        rating: 4.0,
        amenities: ["parking"],
        image: "https://cdn.augrav.com/online/jewels/2016/02/Tamarind-Tree-wedding-venue-bangalore.jpg"
    },
    {
        id: 5,
        name: "Luxury Grand Hotel",
        location: "Hyderabad",
        price: 250000,
        capacity: 600,
        acType: "ac",
        rating: 4.9,
        amenities: ["parking", "catering", "decor"],
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 6,
        name: "Beach Wedding Resort",
        location: "Goa",
        price: 150000,
        capacity: 150,
        acType: "both",
        rating: 4.6,
        amenities: ["catering", "decor"],
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 7, 
        name: "City Convention Center",
        location: "Banglore",
        price: 85000,
        capacity: 500,
        acType: "ac",
        rating: 3.8,
        amenities: ["parking", "catering"],
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 8,
        name: "Lakeside Retreat",
        location: "Jaipur",
        price: 110000,
        capacity: 280,
        acType: "both",
        rating: 4.3,
        amenities: ["parking", "decor"],
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

// Vendor data
const vendors = [
    {
        id: 1,
        name: "Pixel Perfect Photography",
        category: "photographer",
        location: "Hyderabad",
        rating: 4.7,
        price: 35000,
        image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Award-winning wedding photography team specializing in candid moments."
    },
    {
        id: 2,
        name: "Delicious Delights Catering",
        category: "caterer",
        location: "Banglore",
        rating: 4.5,
        price: 1200,
        image: "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Exquisite multi-cuisine caterers for weddings and receptions. Price per plate."
    },
    {
        id: 3,
        name: "Floral Fantasy Decorators",
        category: "decorator",
        location: "Jaipur",
        rating: 4.8,
        price: 75000,
        image: "https://images.unsplash.com/photo-1525268323668-0da9b1d8df5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Creating magical wedding settings with stunning floral arrangements."
    },
    {
        id: 4,
        name: "Rhythm Rockers Band",
        category: "music",
        location: "Goa",
        rating: 4.6,
        price: 45000,
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Versatile live band performing Bollywood, Western, and fusion music."
    },
    {
        id: 5,
        name: "Glamour Bridal Makeup",
        category: "makeup",
        location: "Hyderabad",
        rating: 4.9,
        price: 25000,
        image: "https://images.unsplash.com/photo-1560800050-80c8e1a376a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Expert makeup artists creating stunning bridal looks."
    },
    {
        id: 6,
        name: "Spice Route Catering",
        category: "caterer",
        location: "Goa",
        rating: 4.3,
        price: 1500,
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Specializing in coastal cuisine and international flavors. Price per plate."
    },
    {
        id: 7,
        name: "Dreamy Decor Solutions",
        category: "decorator",
        location: "Banglore",
        rating: 4.4,
        price: 60000,
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Offering themed wedding decor with personalized touches."
    },
    {
        id: 8,
        name: "Candid Captures",
        category: "photographer",
        location: "Jaipur",
        rating: 4.6,
        price: 40000,
        image: "https://images.unsplash.com/photo-1576078766417-83ba32051a3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Documentary-style wedding photography for timeless memories."
    }
];

// Function to display venues
function displayVenues(venueList = venues) {
    const venuesContainer = document.getElementById('venues-container');
    if (!venuesContainer) return; // If container isn't found, exit the function
    
    venuesContainer.innerHTML = '';
    
    if (venueList.length === 0) {
        venuesContainer.innerHTML = '<div class="no-results">No venues match your filters. Please try different criteria.</div>';
        return;
    }
    
    venueList.forEach(venue => {
        const venueCard = document.createElement('div');
        venueCard.className = 'venue-card';
        
        // Format price to Indian Rupees
        const formattedPrice = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(venue.price);
        
        // Create star rating HTML
        const stars = '★'.repeat(Math.floor(venue.rating)) + 
                       '☆'.repeat(5 - Math.floor(venue.rating));
        
        // Create amenities HTML
        const amenitiesHTML = venue.amenities.map(amenity => {
            const icon = amenity === 'parking' ? 'fa-car' :
                         amenity === 'catering' ? 'fa-utensils' : 'fa-brush';
            const text = amenity === 'parking' ? 'Parking' :
                         amenity === 'catering' ? 'In-house Catering' : 'Decoration';
            return `<div class="venue-meta-item"><i class="fas ${icon}"></i> ${text}</div>`;
        }).join('');
        
        // Get AC type text
        const acTypeText = venue.acType === 'ac' ? 'AC Only' :
                           venue.acType === 'non-ac' ? 'Non-AC' : 'AC & Non-AC Areas';
        
        venueCard.innerHTML = `
            <div class="venue-img">
                <img src="${venue.image}" alt="${venue.name}">
                <div class="venue-badge">${venue.location}</div>
            </div>
            <div class="venue-info">
                <h3>${venue.name}</h3>
                <div class="venue-meta">
                    <div class="venue-meta-item">
                        <i class="fas fa-users"></i> Up to ${venue.capacity} guests
                    </div>
                    <div class="venue-meta-item">
                        <i class="fas fa-snowflake"></i> ${acTypeText}
                    </div>
                </div>
                <div class="venue-meta">
                    ${amenitiesHTML}
                </div>
                <div class="venue-price-rating">
                    <div class="venue-price">${formattedPrice}</div>
                    <div class="venue-rating">
                        <span style="color: gold;">${stars}</span>
                        <span>${venue.rating}</span>
                    </div>
                </div>
                <button class="btn btn-primary btn-block">View Details</button>
            </div>
        `;
        
        venuesContainer.appendChild(venueCard);
    });
}

// Function to display vendors
function displayVendors(vendorList = vendors) {
    const vendorsContainer = document.getElementById('vendors-container');
    if (!vendorsContainer) return; // If container isn't found, exit the function
    
    vendorsContainer.innerHTML = '';
    
    if (vendorList.length === 0) {
        vendorsContainer.innerHTML = '<div class="no-results">No vendors match your filters. Please try different criteria.</div>';
        return;
    }
    
    vendorList.forEach(vendor => {
        const vendorCard = document.createElement('div');
        vendorCard.className = 'vendor-card';
        
        // Format price to Indian Rupees
        const formattedPrice = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(vendor.price);
        
        // Format category for display
        const categoryText = vendor.category === 'photographer' ? 'Photographer' :
                             vendor.category === 'caterer' ? 'Caterer' :
                             vendor.category === 'decorator' ? 'Decorator' :
                             vendor.category === 'music' ? 'Music & Entertainment' : 'Makeup Artist';
        
        // Create star rating HTML
        const stars = '★'.repeat(Math.floor(vendor.rating)) + 
                       '☆'.repeat(5 - Math.floor(vendor.rating));
        
        vendorCard.innerHTML = `
            <div class="venue-img">
                <img src="${vendor.image}" alt="${vendor.name}">
                <div class="venue-badge">${categoryText}</div>
            </div>
            <div class="venue-info">
                <h3>${vendor.name}</h3>
                <p style="margin-bottom: 10px; color: var(--gray);">${vendor.description}</p>
                <div class="venue-meta">
                    <div class="venue-meta-item">
                        <i class="fas fa-map-marker-alt"></i> ${vendor.location}
                    </div>
                </div>
                <div class="venue-price-rating">
                    <div class="venue-price">${formattedPrice}${vendor.category === 'caterer' ? ' per plate' : ''}</div>
                    <div class="venue-rating">
                        <span style="color: gold;">${stars}</span>
                        <span>${vendor.rating}</span>
                    </div>
                </div>
                <button class="btn btn-secondary btn-block">Contact Vendor</button>
            </div>
        `;
        
        vendorsContainer.appendChild(vendorCard);
    });
}

// Apply filters function for venues
function applyFilters() {
    // Get all filter values
    const searchText = document.getElementById('search')?.value.toLowerCase() || '';
    const locationFilter = document.getElementById('category')?.value || '';
    const priceRangeFilter = document.getElementById('price-range')?.value || '';
    const capacityFilter = document.getElementById('capacity')?.value || '';
    const acTypeFilter = document.getElementById('ac-type')?.value || '';
    const ratingFilter = parseFloat(document.getElementById('rating')?.value) || 0;
    const amenitiesFilter = document.getElementById('amenities')?.value || '';
    
    // Filter venues
    const filteredVenues = venues.filter(venue => {
        // Search text filter
        if (searchText && !venue.name.toLowerCase().includes(searchText)) {
            return false;
        }
        
        // Location filter
        if (locationFilter && venue.location !== locationFilter) {
            return false;
        }
        
        // Price range filter
        if (priceRangeFilter) {
            const [minPrice, maxPrice] = priceRangeFilter.split('-').map(Number);
            if (maxPrice && (venue.price < minPrice || venue.price > maxPrice)) {
                return false;
            } else if (!maxPrice && venue.price < minPrice) {
                // For "500000+" case
                return false;
            }
        }
        
        // Capacity filter
        if (capacityFilter) {
            const [minCapacity, maxCapacity] = capacityFilter.split('-').map(Number);
            if (maxCapacity && (venue.capacity < minCapacity || venue.capacity > maxCapacity)) {
                return false;
            } else if (!maxCapacity && venue.capacity < minCapacity) {
                // For "500+" case
                return false;
            }
        }
        
        // AC type filter
        if (acTypeFilter && acTypeFilter !== venue.acType && !(acTypeFilter === 'both' && venue.acType === 'both')) {
            return false;
        }
        
        // Rating filter
        if (ratingFilter && venue.rating < ratingFilter) {
            return false;
        }
        
        // Amenities filter
        if (amenitiesFilter && !venue.amenities.includes(amenitiesFilter)) {
            return false;
        }
        
        return true;
    });
    
    // Display filtered venues
    displayVenues(filteredVenues);
}

// Filter vendors
function filterVendors() {
    // Get all filter values
    const searchText = document.getElementById('search')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('vendor-category')?.value || '';
    const locationFilter = document.getElementById('vendor-location')?.value || '';
    const ratingFilter = parseFloat(document.getElementById('vendor-rating')?.value) || 0;
    
    // Filter vendors
    const filteredVendors = vendors.filter(vendor => {
        // Search text filter
        if (searchText && !vendor.name.toLowerCase().includes(searchText)) {
            return false;
        }
        
        // Category filter
        if (categoryFilter && vendor.category !== categoryFilter) {
            return false;
        }
        
        // Location filter
        if (locationFilter && vendor.location !== locationFilter) {
            return false;
        }
        
        // Rating filter
        if (ratingFilter && vendor.rating < ratingFilter) {
            return false;
        }
        
        return true;
    });
    
    // Display filtered vendors
    displayVendors(filteredVendors);
}

// Initialize page - this runs on all pages when they load
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the home page or venues page
    const venuesContainer = document.getElementById('venues-container');
    if (venuesContainer) {
        // Display some venues initially
        displayVenues(venues.slice(0, 3)); // Show first 3 venues on home page
    }
    
    // Check if we're on the vendors page
    const vendorsContainer = document.getElementById('vendors-container');
    if (vendorsContainer) {
        // Display all vendors
        displayVendors();
    }
    
    // Add event listener to search button if it exists
    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            // If we're on the home page, redirect to venues page
            window.location.href = 'venues.html';
        });
    }
    
    // Add event listener to filter form inputs
    const filterInputs = [
        'search', 'category', 'price-range', 'capacity', 
        'ac-type', 'rating', 'amenities'
    ];
    
    filterInputs.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('change', function() {
                // Only apply filters if we're on venues page (not home page)
                if (window.location.href.includes('venues.html')) {
                    applyFilters();
                }
            });
        }
    });
    
    // Apply vendor filters if necessary
    document.getElementById('apply-vendor-filters')?.addEventListener('click', function() {
        filterVendors();
    });
});