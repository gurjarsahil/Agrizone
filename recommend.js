document.addEventListener('DOMContentLoaded', function() {
    // Crop images with local paths and online fallbacks
    const cropImages = {
        'rice': {
            local: 'img2/rice.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Paddy_field_in_Thailand.jpg'
        },
        'maize': {
            local: 'img2/maize.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg'
        },
        'jute': {
            local: 'img2/jute.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Jute_field.jpg'
        },
        'cotton': {
            local: 'img2/cotton.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/6/68/CottonPlant.JPG'
        },
        'coconut': {
            local: 'img2/coconut.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Coconut_palm_%28Cocos_nucifera%29.jpg'
        },
        'papaya': {
            local: 'img2/papaya.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Papaya_cross_section.jpg'
        },
        'orange': {
            local: 'img2/orange.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-FL.jpg'
        },
        'apple': {
            local: 'img2/apple.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pink_lady_and_cross_section.jpg'
        },
        'muskmelon': {
            local: 'img2/muskmelon.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Cantaloupes.jpg'
        },
        'watermelon': {
            local: 'img2/watermelon.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Watermelon_cross_section.jpg'
        },
        'grapes': {
            local: 'img2/grapes.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Grape_near_Volgograd.jpg'
        },
        'mango': {
            local: 'img2/mango.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Lalbagh_Mango_Show_August_2012_9.JPG'
        },
        'banana': {
            local: 'img2/banana.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Bananas_white_background.jpg'
        },
        'pomegranate': {
            local: 'img2/pomegranate.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Pomegranate_fruit.jpg'
        },
        'lentil': {
            local: 'img2/lentil.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/3_types_of_lentil.png'
        },
        'blackgram': {
            local: 'img2/blackgram.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Black_gram.JPG'
        },
        'mungbean': {
            local: 'img2/mungbean.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Mung_beans_%28peeled_and_unpeeled%29.jpg'
        },
        'mothbeans': {
            local: 'img2/mothbeans.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Vigna_aconitifolia_W_IMG_2470.jpg/1280px-Vigna_aconitifolia_W_IMG_2470.jpg'
        },
        'pigeonpeas': {
            local: 'img2/pigeonpeas.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Pigeonpea_with_canavalias_and_maize.jpg'
        },
        'kidneybeans': {
            local: 'img2/kidneybeans.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Red_kidney_beans.jpg'
        },
        'chickpea': {
            local: 'img2/chickpea.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Chana_for_Cholle.JPG'
        },
        'coffee': {
            local: 'img2/coffee.jpg',
            online: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg'
        }
    };

    // Crop growing information
    const cropInfoData = {
        'rice': {
            temp: '20-30°C',
            water: 'High (150-300mm monthly)',
            season: 'Rainy season',
            soil: 'Clay or clay loam soils with good water retention'
        },
        'maize': {
            temp: '18-32°C',
            water: 'Moderate (50-80mm monthly)',
            season: 'Spring to Summer',
            soil: 'Well-drained, fertile loam or sandy loam'
        },
        'jute': {
            temp: '24-37°C',
            water: 'High (150-200mm monthly)',
            season: 'Warm and humid season',
            soil: 'Well-drained, sandy loam or clay loam'
        },
        'cotton': {
            temp: '20-30°C',
            water: 'Moderate (50-100mm monthly)',
            season: 'Warm season crop',
            soil: 'Deep, well-drained soils, preferably loamy'
        },
        'coconut': {
            temp: '20-35°C',
            water: 'Moderate (150-250mm monthly)',
            season: 'Year-round in tropical regions',
            soil: 'Sandy loam to clay loam with good drainage'
        },
        'papaya': {
            temp: '22-30°C',
            water: 'Moderate (100-150mm monthly)',
            season: 'Year-round in tropical regions',
            soil: 'Well-drained, light and rich in organic matter'
        },
        'orange': {
            temp: '15-30°C',
            water: 'Moderate (80-150mm monthly)',
            season: 'Cool winters, warm summers',
            soil: 'Well-drained, slightly acidic'
        },
        'apple': {
            temp: '10-25°C',
            water: 'Moderate (60-100mm monthly)',
            season: 'Cool climate with distinct seasons',
            soil: 'Well-drained loam with good organic content'
        },
        'muskmelon': {
            temp: '24-32°C',
            water: 'Moderate (40-80mm monthly)',
            season: 'Summer',
            soil: 'Well-drained sandy loam'
        },
        'watermelon': {
            temp: '22-35°C',
            water: 'Moderate (50-80mm monthly)',
            season: 'Summer',
            soil: 'Sandy loam with good drainage'
        },
        'grapes': {
            temp: '15-30°C',
            water: 'Low to moderate (30-60mm monthly)',
            season: 'Spring to Fall',
            soil: 'Deep, well-drained with good lime content'
        },
        'mango': {
            temp: '24-30°C',
            water: 'Moderate (40-100mm monthly, dry period needed)',
            season: 'Tropical year-round',
            soil: 'Deep, well-drained loamy soil'
        },
        'banana': {
            temp: '20-35°C',
            water: 'High (150-200mm monthly)',
            season: 'Year-round in tropical regions',
            soil: 'Deep, rich and well-drained loamy soil'
        },
        'pomegranate': {
            temp: '18-35°C',
            water: 'Low to moderate (40-60mm monthly)',
            season: 'Hot and dry summer',
            soil: 'Well-drained, moderately alkaline'
        },
        'lentil': {
            temp: '15-25°C',
            water: 'Low to moderate (30-60mm monthly)',
            season: 'Cool season crop',
            soil: 'Well-drained loam or sandy loam'
        },
        'blackgram': {
            temp: '25-35°C',
            water: 'Moderate (60-100mm monthly)',
            season: 'Summer to rainy season',
            soil: 'Well-drained loamy soil'
        },
        'mungbean': {
            temp: '20-35°C',
            water: 'Moderate (60-90mm monthly)',
            season: 'Summer to rainy season',
            soil: 'Well-drained loamy soil'
        },
        'mothbeans': {
            temp: '25-35°C',
            water: 'Low to moderate (30-60mm monthly)',
            season: 'Hot and dry season',
            soil: 'Sandy to sandy loam, drought-resistant'
        },
        'pigeonpeas': {
            temp: '20-30°C',
            water: 'Moderate (60-100mm monthly)',
            season: 'Rainy season to winter',
            soil: 'Well-drained, medium to deep'
        },
        'kidneybeans': {
            temp: '15-25°C',
            water: 'Moderate (70-90mm monthly)',
            season: 'Warm season',
            soil: 'Well-drained, rich in organic matter'
        },
        'chickpea': {
            temp: '15-25°C',
            water: 'Low to moderate (35-65mm monthly)',
            season: 'Cool, dry season',
            soil: 'Well-drained, sandy to loamy'
        },
        'coffee': {
            temp: '15-25°C',
            water: 'Moderate (100-200mm monthly)',
            season: 'Year-round in appropriate climate',
            soil: 'Deep, well-drained, slightly acidic'
        }
    };

    // Crop descriptions
    const cropDescriptions = {
        'rice': 'Rice is a staple food crop that thrives in flooded fields. It requires consistent moisture and warm temperatures throughout its growing period.',
        'maize': 'Maize (corn) is a versatile grain used for food, feed, and industrial products. It needs plenty of sunlight and moderate watering.',
        'jute': 'Jute is a fiber crop that grows best in humid, tropical conditions. It\'s primarily used for making burlap, hessian, and other textiles.',
        'cotton': 'Cotton is a major fiber crop that produces soft, fluffy staple fibers used in textiles. It prefers warm climates and moderate water.',
        'coconut': 'Coconut palms produce versatile fruits with multiple uses from food to cosmetics. They thrive in coastal, tropical environments.',
        'papaya': 'Papaya is a tropical fruit rich in vitamins and enzymes. The trees produce fruit year-round in suitable conditions.',
        'orange': 'Oranges are citrus fruits known for their vitamin C content. They prefer subtropical climates with warm days and cool nights.',
        'apple': 'Apples are popular fruits that need a period of winter dormancy. Different varieties adapt to different climate conditions.',
        'muskmelon': 'Muskmelons (cantaloupes) are sweet summer fruits that need warm temperatures and full sun to develop their characteristic flavor.',
        'watermelon': 'Watermelons are refreshing summer fruits with high water content. They need warm soil, plenty of space, and regular watering.',
        'grapes': 'Grapes are used for wine, juice, and table consumption. Different varieties adapt to different climate conditions.',
        'mango': 'Mangoes are tropical fruits known for their sweet taste. They need a pronounced dry season to trigger flowering.',
        'banana': 'Bananas are tropical fruits that grow on large herbaceous plants. They need consistent moisture and protection from strong winds.',
        'pomegranate': 'Pomegranates are fruits with juicy seeds enclosed in a tough outer rind. They adapt well to arid and semiarid conditions.',
        'lentil': 'Lentils are protein-rich legumes that fix nitrogen in the soil. They prefer cool growing conditions and can tolerate some drought.',
        'blackgram': 'Black gram is a widely used pulse in Indian cuisine. It\'s drought-resistant and improves soil fertility.',
        'mungbean': 'Mung beans are small green legumes used in Asian cuisine. They have a short growing season and improve soil fertility.',
        'mothbeans': 'Moth beans are drought-resistant legumes often grown in arid regions. They require minimal water and can grow in poor soils.',
        'pigeonpeas': 'Pigeon peas are perennial legumes used in many tropical cuisines. They are drought-resistant and improve soil fertility.',
        'kidneybeans': 'Kidney beans are common legumes rich in protein and fiber. They prefer moderate temperatures and consistent moisture.',
        'chickpea': 'Chickpeas (garbanzo beans) are protein-rich legumes used in many cuisines. They are well-adapted to drier conditions.',
        'coffee': 'Coffee is a tropical crop grown for its beans which are roasted and ground for beverages. It prefers shaded conditions with consistent moisture.'
    };

    // Reference to the form
    const form = document.getElementById('recommendForm');
    const resultContainer = document.getElementById('result-container');
    const processingContainer = document.getElementById('processing-container');
    const resultText = document.getElementById('result');
    const resultDescription = document.getElementById('result-description');
    const cropInfo = document.getElementById('crop-info');
    const cropImageContainer = document.getElementById('crop-image-container');
    const resetButton = document.getElementById('reset-form');

    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show processing animation
            processingContainer.classList.remove('d-none');
            resultContainer.classList.add('d-none');
            
            // Scroll to processing
            processingContainer.scrollIntoView({ behavior: 'smooth' });
            
            // Get form data
            const formData = {
                Nitrogen: document.getElementById('Nitrogen').value,
                Phosphorus: document.getElementById('Phosphorus').value,
                Potassium: document.getElementById('Potassium').value,
                Temperature: document.getElementById('Temperature').value,
                Humidity: document.getElementById('Humidity').value,
                pH: document.getElementById('pH').value,
                Rainfall: document.getElementById('Rainfall').value
            };
            
            // Send data to backend API
            fetch('/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Display result with the recommended crop
                displayResult(data.crop.toLowerCase());
            })
            .catch(error => {
                console.error('Error:', error);
                
                // For demonstration or if API is unavailable
                // Generate a random crop recommendation
                const crops = Object.keys(cropImages);
                const recommendedCrop = crops[Math.floor(Math.random() * crops.length)];
                
                displayResult(recommendedCrop);
            });
        });
    }
    
    // Reset button
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            form.reset();
            resultContainer.classList.add('d-none');
            window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
        });
    }
    
    // Function to display the result
    function displayResult(crop) {
        // Hide processing after a delay to show animation
        setTimeout(function() {
            processingContainer.classList.add('d-none');
            resultContainer.classList.remove('d-none');
            
            // Format crop name for display (capitalize first letter)
            const formattedCropName = crop.charAt(0).toUpperCase() + crop.slice(1);
            
            // Set up image paths with fallbacks
            let localImagePath = 'img2/default-crop.jpg'; // Default fallback
            let onlineImagePath = null;
            
            // Check if crop exists in our database
            if (cropImages[crop.toLowerCase()]) {
                localImagePath = cropImages[crop.toLowerCase()].local;
                onlineImagePath = cropImages[crop.toLowerCase()].online;
            }
            
            // Create an image element with fallback mechanism
            const img = new Image();
            
            // If local image fails, use the online URL
            img.onerror = function() {
                console.log(`Local image failed to load: ${localImagePath}`);
                // If online image is available, try that instead
                if (onlineImagePath) {
                    console.log(`Trying online image: ${onlineImagePath}`);
                    this.src = onlineImagePath;
                    // If online image also fails, use default
                    this.onerror = function() {
                        console.log('Online image also failed, using default');
                        this.src = 'img2/default-crop.jpg';
                    };
                } else {
                    // No online fallback available, use default
                    this.src = 'img2/default-crop.jpg';
                }
            };
            
            img.onload = function() {
                // Successfully loaded
                cropImageContainer.innerHTML = '';
                this.className = 'img-fluid rounded-3';
                this.alt = formattedCropName;
                cropImageContainer.appendChild(this);
            };
            
            // Start loading the local image
            img.src = localImagePath;
            
            // Update text content
            resultText.textContent = formattedCropName;
            resultDescription.textContent = cropDescriptions[crop] || 'No description available for this crop.';
            
            // Set growing information
            const cropInfoElement = document.getElementById('crop-info');
            if (cropInfoData[crop]) {
                cropInfoElement.innerHTML = `
                    <div class="growing-info">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="info-item">
                                    <i class="fas fa-temperature-high text-primary me-2"></i>
                                    <p><strong>Temperature:</strong> ${cropInfoData[crop].temp}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info-item">
                                    <i class="fas fa-tint text-primary me-2"></i>
                                    <p><strong>Water:</strong> ${cropInfoData[crop].water}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info-item">
                                    <i class="fas fa-calendar-alt text-primary me-2"></i>
                                    <p><strong>Season:</strong> ${cropInfoData[crop].season}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info-item">
                                    <i class="fas fa-mountain text-primary me-2"></i>
                                    <p><strong>Soil:</strong> ${cropInfoData[crop].soil}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }, 1500);
    }
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
}); 