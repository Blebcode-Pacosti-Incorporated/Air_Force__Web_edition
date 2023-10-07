const config = {
    background: {
        main_menu: {
            src: "static/backgrounds/main_menu.png",
            width: 1920,
            height: 1080
        }
    },
    music: {
        level1: {
            src: "static/sounds/level_1.ogg"
        },
        level2: {
            src: "static/sounds/level_2.ogg"
        }
    }
}

const gameCanvas = S('#game-canvas');
gameCanvas.width = S('.screen').offsetWidth;
gameCanvas.height = S('.screen').offsetHeight-3;
S('.screen').remove()

const canvasContext = gameCanvas.getContext('2d')

//bg = new Background(canvasContext);
// S('.btn').addEventListener("click", () => {
//     mc = new Music(config.music.level1.src)
//     mc.play()
// })


function loop() {
    //bg.render_background();

    setTimeout(() => loop(), 50)
}

let testBtn = new Button("Test button")
testBtn.setVerticalCentering()
// bg.setBackgroundImage(
//     config.background.main_menu.src,
//     config.background.main_menu.width,
//     config.background.main_menu.height
// )

loop()