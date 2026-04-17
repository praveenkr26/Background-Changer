
## 🚀 How to Use

1. **Project open karein** - `index.html` ko browser mein open करें
2. **Button click करें** - "Change Color" button को click करते रहें
3. **Enjoy!** - Random colors dekho aur enjoy करो!

## 💡 How It Works

**JavaScript Logic:**
```javascript
// Random RGB values generate होते हैं
let red = Math.floor((Math.random() * 255) + 1)
let green = Math.floor((Math.random() * 255) + 1)
let blue = Math.floor((Math.random() * 255) + 1)

// Color string बनता है: rgb(R, G, B)
let color = `rgb(${red}, ${green}, ${blue})`

// Background change होता है
container.style.backgroundColor = color
