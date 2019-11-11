export function createCustomButton(game, x, y, image, width, height, cb) {
    const button = game.add.button(x, y, image, cb, game);

    button.width = width;
    button.height = height;

    return button;
}
