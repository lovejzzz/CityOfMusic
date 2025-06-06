# Groove Lounge - Loot Box Collection Game

A web-based card collection game where you open loot boxes to collect character, weapon, and instrument cards of different rarities. Experience the thrill of opening boxes and building your collection!

## How to Play

1. **Start with 2000 Coins**: Begin your collection journey with 2000 coins to open various loot boxes.
2. **Open Loot Boxes**: Choose from different box types with varying costs and rarity distributions.
3. **Collect Cards**: Add cards to your collection or sell them for coins.
4. **Complete Sets**: A set is complete when you collect all 9 different rarities of a card type.
5. **Earn Rewards**: Get a 500 coin bonus when you complete a set!

## Card Categories and Types

### Characters
- Bird
- Boat
- Cat
- Elephant
- Monk
- Rat
- Robot

### Weapons
- Crossbow
- Dagger
- Pistol
- Polearm
- Spear
- Sword

### Instruments
- Bass
- Clarinet
- Flute
- Harmonica
- Keys
- Saxophone
- Trombone
- Trumpet
- Ukulele
- Violin

## Card Rarities

Each card type has 9 different rarities with varying drop rates and values:

| Rarity    | Sale Value | Drop Rate (%) | Description           |
|-----------|------------|---------------|-----------------------|
| Classic   | 10 Coins   | 55.0%         | Common, high drop rate|
| Silver    | 20 Coins   | 20.0%         | Slightly rarer        |
| Gold      | 40 Coins   | 10.0%         | Noticeable rarity     |
| Rare      | 80 Coins   | 6.0%          | Strong cards          |
| Supreme   | 150 Coins  | 3.5%          | High-impact           |
| Epic      | 225 Coins  | 2.5%          | Very rare             |
| Legendary | 350 Coins  | 1.8%          | Game-changing         |
| Mythic    | 600 Coins  | 0.9%          | Ultra-rare            |
| Secret    | 700-1500 Coins | 0.3%      | Rarest of all         |

## Loot Box Types

### Conqueror Box (100 Coins)
The standard box with a balanced distribution of all rarities.

#### Rarity Distribution:
| Rarity    | Drop Rate | Sale Value |
|-----------|-----------|------------|
| Classic   | 55.0%     | 10 Coins   |
| Silver    | 20.0%     | 20 Coins   |
| Gold      | 10.0%     | 40 Coins   |
| Rare      | 6.0%      | 80 Coins   |
| Supreme   | 3.5%      | 150 Coins  |
| Epic      | 2.5%      | 225 Coins  |
| Legendary | 1.8%      | 350 Coins  |
| Mythic    | 0.9%      | 600 Coins  |
| Secret    | 0.3%      | 700-1500 Coins |

### Maestro Box (200 Coins)
A premium box with improved odds for higher rarities.

#### Rarity Distribution:
| Rarity    | Drop Rate | Sale Value |
|-----------|-----------|------------|
| Classic   | 0%        | -          |
| Silver    | 35.0%     | 20 Coins   |
| Gold      | 25.0%     | 40 Coins   |
| Rare      | 20.0%     | 80 Coins   |
| Supreme   | 10.0%     | 150 Coins  |
| Epic      | 6.0%      | 225 Coins  |
| Legendary | 2.5%      | 350 Coins  |
| Mythic    | 1.0%      | 600 Coins  |
| Secret    | 0.5%      | 700-1500 Coins |

### Visionary Box (500 Coins)
The premium box with the best odds for high-rarity cards.

#### Rarity Distribution:
| Rarity    | Drop Rate | Sale Value |
|-----------|-----------|------------|
| Classic   | 0%        | -          |
| Silver    | 0%        | -          |
| Gold      | 0%        | -          |
| Rare      | 0%        | -          |
| Supreme   | 45.0%     | 150 Coins  |
| Epic      | 25.0%     | 225 Coins  |
| Legendary | 15.0%     | 350 Coins  |
| Mythic    | 10.0%     | 600 Coins  |
| Secret    | 5.0%      | 700-1500 Coins |

## Developer Mode

The game includes a special developer mode for testing and debugging purposes.

### How to Activate
1. Type "skysky" on your keyboard while in the game
2. A banner will appear at the top of the screen indicating "YOU ARE IN DEVELOPER MODE"

### Developer Features

#### Coin Management
- Two buttons appear next to your coin display: "+1000" and "-1000"
- Click these buttons to quickly add or remove coins for testing

#### Collection Management
- **Game Title**: Click the "Groove Lounge" title to add 1000 coins instantly
- **Collection Room Title**: Click 10 times to reset your entire collection
- **Set Titles**: Click 5 times on any set title to reset just that set
- **Empty Card Slots**: Click 5 times on an empty slot to add that specific card

#### Exit Developer Mode
- Click the "EXIT DEVELOPER MODE" button at the top of the screen

## Game Features

- Beautiful card collection interface with 3D effects
- Dynamic animations and sound effects
- Set completion tracking and rewards
- Local storage save system
- Responsive design for different screen sizes
- Special effects for rare card reveals

## How to Run

Simply open the `index.html` file in your web browser to start playing!

## Technical Details

- Built with vanilla JavaScript, HTML5, and CSS3
- No external libraries or frameworks required
- Uses local storage for game state persistence
- All assets included in the repository

## Update Log

### Version 0.1 (May 23, 2025)

#### New Features
- **Slot Machine Animation**: Added an engaging flip board animation for revealing Secret card values
- **Enhanced Sound Effects**: Integrated sound effects for the slot machine animation
  - SlotMachine.mp3 plays during the animation
  - Selling.wav plays when the user confirms after the animation

#### UI Improvements
- Removed redundant "Secret Card Value" heading from the slot machine modal
- Fixed display of drop rates to show correct percentage format
- Increased width of completion reward message and buttons to prevent text wrapping
- Added highlighted box around set names in completion messages for better focus
- Improved button styling with consistent widths and no text wrapping

#### Bug Fixes
- Fixed issue with sound effects playing at incorrect times
- Corrected the timing of animations for a smoother experience
- Ensured proper modal behavior when closing dialogs
