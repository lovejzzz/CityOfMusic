# City of Music 🎵🏙️

A long-term educational project focused on creating engaging music games that reward students with an interactive card collection system.

## 🎯 Project Vision

City of Music is an ambitious educational platform designed to make music learning fun and rewarding through gamification. Students can explore various music-themed locations, play educational games, and collect cards as rewards for their achievements.

## 🚧 Current Status: Work in Progress

This project is actively under development. We have successfully completed the **card collection game** component and are continuously expanding the musical city experience.

### ✅ Completed Features

- **Interactive City Map**: Pixel-perfect hover detection with beautiful lighting effects
- **MapMaker Tool**: Developer tool for customizing the city layout
  - Access by typing 'skysky' on the main page
  - Drag and drop buildings to reposition them
  - Adjust building layers (z-index)
  - Resize buildings
  - Auto-detects new buildings added to the project
  - Save/load city layouts
- **Card Collection Game (Groove Lounge)**: Complete loot box system with:
  - Multiple box types (Conqueror, Maestro, Virtuoso)
  - 200+ unique collectible cards
  - 9-tier rarity system (Common, Uncommon, Rare, Epic, Legendary, Mythic, Secret, Ultra Rare, Cosmic)
  - Set completion rewards
  - Coin-based economy
  - Slot machine mechanics
- **Navigation System**: Seamless transitions between city map and game locations
- **Responsive Design**: Modern UI with smooth animations and effects

### 🔄 In Development

- Additional music learning games
- More interactive buildings and locations
- Enhanced reward systems
- Educational content integration
- Student progress tracking

## 🏗️ Project Structure

```
TheCity/
├── CityAsset/                 # City map assets
│   ├── Land/                  # Background images
│   └── Building/              # Building sprites
├── GrooveLounge/              # Card collection game
│   ├── Asset/                 # Game assets
│   ├── Box/                   # Loot box images
│   ├── Cards/                 # Card collection (200+ cards)
│   ├── SoundEffects/          # Audio files
│   ├── index.html             # Game interface
│   ├── app.js                 # Game logic
│   ├── slotMachine.js         # Slot machine mechanics
│   └── styles.css             # Game styling
├── city_map_layout.json       # City configuration
├── script.js                  # Main city interactions
├── styles.css                 # City styling
└── index.html                 # Main entry point
```

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lovejzzz/CityOfMusic.git
   cd CityOfMusic
   ```

2. **Start a local server**:
   ```bash
   python -m http.server 8001
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8001`

## 🎮 How to Play

1. **Explore the City**: Hover over buildings to see them light up with beautiful effects
2. **Enter Groove Lounge**: Click on the Groove Lounge building to start the card game
3. **Collect Cards**: Purchase loot boxes with coins to collect music-themed cards
4. **Complete Sets**: Gather complete card sets for bonus rewards
5. **Navigate Back**: Use the back arrow icon to return to the city map

## 🎨 Features

- **Pixel-Perfect Interactions**: Advanced canvas-based hit detection
- **Beautiful Visual Effects**: Glowing hover states and smooth animations
- **Card Rarity System**: 9-tier system from Common to Cosmic rarity
- **Economic System**: Coin-based purchasing with balanced rewards
- **Set Collection**: Strategic gameplay through set completion bonuses

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Graphics**: Canvas API for pixel-perfect interactions
- **Design**: Modern CSS with animations and effects
- **Architecture**: Modular component-based structure

## 🎓 Educational Goals

- Make music theory accessible and fun
- Reward learning progress with collectible achievements
- Encourage exploration of different musical concepts
- Build long-term engagement through collection mechanics

## 📝 Update Log

### May 28, 2025
- Added MapMaker tool for easy city layout customization
  - Access by typing 'skysky' on the main page
  - Drag and drop interface for building placement
  - Automatically detects and includes new buildings
- Improved building interaction system
- Fixed various UI and positioning issues
- Updated documentation

## 📝 License

This project is developed for educational purposes.

---

**Developer**: Tian Xing  
**Project Type**: Educational Music Game Platform  
**Status**: Active Development  
**Last Updated**: May 2025
