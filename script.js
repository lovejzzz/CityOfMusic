document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const mapContainer = document.getElementById('map-container');
    const backgroundMap = document.getElementById('background-map');
    const buildingsContainer = document.getElementById('buildings-container');

    // Load the JSON data
    fetch('city_map_layout.json')
        .then(response => response.json())
        .then(data => {
            // Update background map with land information
            if (data.land) {
                backgroundMap.src = data.land.image;
                backgroundMap.alt = 'City Map';
                
                // Set map container dimensions based on land dimensions
                mapContainer.style.width = data.land.width + 'px';
                mapContainer.style.height = data.land.height + 'px';
            }

            // Render buildings from JSON data
            renderBuildings(data.buildings);
        })
        .catch(error => console.error('Error loading city map data:', error));

    function renderBuildings(buildings) {
        // Clear existing buildings
        buildingsContainer.innerHTML = '';

        // Sort buildings by z-index (lowest to highest)
        buildings.sort((a, b) => a.zIndex - b.zIndex);

        // Store all building data for hover detection
        const buildingData = [];
        
        buildings.forEach(building => {
            const buildingElement = document.createElement('div');
            buildingElement.className = 'building';
            buildingElement.style.position = 'absolute';
            buildingElement.style.left = building.x + 'px';
            buildingElement.style.top = building.y + 'px';
            buildingElement.style.width = building.width + 'px';
            buildingElement.style.height = building.height + 'px';
            buildingElement.style.zIndex = building.zIndex;
            
            // Create image element for the building
            const imgElement = document.createElement('img');
            imgElement.src = building.image;
            imgElement.alt = building.image.replace('-open.png', '');
            imgElement.style.width = '100%';
            imgElement.style.height = '100%';
            imgElement.className = 'building-image unlit'; // Add unlit class by default
            imgElement.style.pointerEvents = 'none'; // Prevent image from capturing mouse events
            
            // Create a canvas for pixel-perfect hit detection
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            
            // Store building info for later access
            const buildingInfo = {
                element: buildingElement,
                imgElement: imgElement,
                canvas: canvas,
                ctx: ctx,
                zIndex: building.zIndex,
                id: building.id,
                isHovered: false
            };
            
            buildingData.push(buildingInfo);
            
            // Wait for image to load to set up hit detection
            imgElement.onload = function() {
                // Set canvas size to match the image
                canvas.width = imgElement.naturalWidth;
                canvas.height = imgElement.naturalHeight;
                
                // Draw the image to canvas
                ctx.drawImage(imgElement, 0, 0);
                
                // Mark canvas as ready
                buildingInfo.canvasReady = true;
                console.log(`Canvas ready for ${building.id}`);
            };
            
            // Append elements to building element
            buildingElement.appendChild(imgElement);
            
            // Append building to container
            buildingsContainer.appendChild(buildingElement);
        });
        
        // Create a single hover detection layer over all buildings
        const hoverLayer = document.createElement('div');
        hoverLayer.style.position = 'absolute';
        hoverLayer.style.top = '0';
        hoverLayer.style.left = '0';
        hoverLayer.style.width = '100%';
        hoverLayer.style.height = '100%';
        hoverLayer.style.zIndex = '1000'; // Above all buildings
        hoverLayer.style.pointerEvents = 'auto'; // Ensure it receives mouse events
        
        console.log('Hover layer created');
        
        hoverLayer.addEventListener('mousemove', (e) => {
            // Find which building should be hovered
            let topmostBuilding = null;
            let highestZIndex = -1;
            
            // Debug counter to reduce console spam
            const debugThis = Math.random() < 0.02; // Log 2% of events
            
            buildingData.forEach(buildingInfo => {
                // Skip if canvas not ready
                if (!buildingInfo.canvasReady) return;
                
                const rect = buildingInfo.element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Check if mouse is within building bounds
                if (x >= 0 && x < rect.width && y >= 0 && y < rect.height) {
                    // Convert to canvas coordinates
                    const canvasX = Math.round((x / rect.width) * buildingInfo.canvas.width);
                    const canvasY = Math.round((y / rect.height) * buildingInfo.canvas.height);
                    
                    // Check if within canvas bounds
                    if (canvasX >= 0 && canvasX < buildingInfo.canvas.width && 
                        canvasY >= 0 && canvasY < buildingInfo.canvas.height) {
                        
                        // Get pixel data at mouse position
                        const pixelData = buildingInfo.ctx.getImageData(canvasX, canvasY, 1, 1).data;
                        const alpha = pixelData[3];
                        
                        if (debugThis) {
                            console.log(`${buildingInfo.id}: alpha=${alpha}, z=${buildingInfo.zIndex}`);
                        }
                        
                        // If pixel is non-transparent and has higher z-index
                        if (alpha > 50 && buildingInfo.zIndex > highestZIndex) {
                            topmostBuilding = buildingInfo;
                            highestZIndex = buildingInfo.zIndex;
                        }
                    }
                }
            });
            
            if (debugThis && topmostBuilding) {
                console.log(`Topmost: ${topmostBuilding.id}`);
            }
            
            // Update hover states
            buildingData.forEach(buildingInfo => {
                if (buildingInfo === topmostBuilding) {
                    if (!buildingInfo.isHovered) {
                        buildingInfo.isHovered = true;
                        buildingInfo.imgElement.classList.remove('unlit');
                        buildingInfo.element.classList.add('building-hovered');
                        buildingInfo.element.classList.add(`${buildingInfo.id}-hovered`);
                    }
                } else {
                    if (buildingInfo.isHovered) {
                        buildingInfo.isHovered = false;
                        buildingInfo.imgElement.classList.add('unlit');
                        buildingInfo.element.classList.remove('building-hovered');
                        buildingInfo.element.classList.remove(`${buildingInfo.id}-hovered`);
                    }
                }
            });
            
            // Update cursor
            hoverLayer.style.cursor = topmostBuilding ? 'pointer' : 'default';
        });
        
        hoverLayer.addEventListener('mouseleave', () => {
            // Clear all hover states
            buildingData.forEach(buildingInfo => {
                if (buildingInfo.isHovered) {
                    buildingInfo.isHovered = false;
                    buildingInfo.imgElement.classList.add('unlit');
                    buildingInfo.element.classList.remove('building-hovered');
                    buildingInfo.element.classList.remove(`${buildingInfo.id}-hovered`);
                }
            });
            hoverLayer.style.cursor = 'default';
        });
        
        // Add click event handler to detect building clicks
        hoverLayer.addEventListener('click', (e) => {
            // Find which building was clicked using same logic as hover
            let clickedBuilding = null;
            let highestZIndex = -1;
            
            buildingData.forEach(buildingInfo => {
                if (buildingInfo.canvas && buildingInfo.ctx) {
                    const rect = buildingInfo.element.getBoundingClientRect();
                    const hoverRect = hoverLayer.getBoundingClientRect();
                    
                    const relativeX = e.clientX - hoverRect.left;
                    const relativeY = e.clientY - hoverRect.top;
                    
                    const buildingX = relativeX - (rect.left - hoverRect.left);
                    const buildingY = relativeY - (rect.top - hoverRect.top);
                    
                    if (buildingX >= 0 && buildingX < rect.width && buildingY >= 0 && buildingY < rect.height) {
                        const canvasX = Math.floor((buildingX / rect.width) * buildingInfo.canvas.width);
                        const canvasY = Math.floor((buildingY / rect.height) * buildingInfo.canvas.height);
                        
                        const pixelData = buildingInfo.ctx.getImageData(canvasX, canvasY, 1, 1).data;
                        const alpha = pixelData[3];
                        
                        if (alpha > 50 && buildingInfo.zIndex > highestZIndex) {
                            clickedBuilding = buildingInfo;
                            highestZIndex = buildingInfo.zIndex;
                        }
                    }
                }
            });
            
            // Handle building clicks
            if (clickedBuilding) {
                console.log(`Clicked on ${clickedBuilding.id}`);
                
                // GrooveLounge navigation
                if (clickedBuilding.id === 'building2') {
                    window.location.href = './GrooveLounge/index.html';
                }
            }
        });
        
        // Append hover layer to container
        buildingsContainer.appendChild(hoverLayer);
    }
});
